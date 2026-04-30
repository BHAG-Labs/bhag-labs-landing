import { toast } from "sonner";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import type { VyapaarData } from "./IntakeForm";
import PartnerMarketplace from "./PartnerMarketplace";
import { formatINR } from "@/lib/formatters";

const cogsRatios: Record<string, number> = {
  "Food": 0.35, "Retail": 0.55, "Manufacturing": 0.45, "Agriculture": 0.40,
  "Services": 0.20, "Technology": 0.15, "Education": 0.20, "Real Estate": 0.50, "Other": 0.35,
};

const sectorKey = (s: string) => {
  if (s.startsWith("Food")) return "Food";
  if (s.startsWith("Retail")) return "Retail";
  if (s.startsWith("Manu")) return "Manufacturing";
  if (s.startsWith("Agri")) return "Agriculture";
  if (s.startsWith("Services")) return "Services";
  if (s.startsWith("Tech")) return "Technology";
  if (s.startsWith("Education")) return "Education";
  if (s.startsWith("Real")) return "Real Estate";
  return "Other";
};

const cityIntel: Record<string, { tam: string; competition: string; ticket: string; reg: string; lang: string }> = {
  bengaluru: { tam: "₹4,200 Cr addressable across food-tech (industry estimates, 2024)", competition: "High", ticket: "₹280–340", reg: "FSSAI State License. BBMP trade license. Fire NOC if >500 sq ft.", lang: "Kannada for hyperlocal; English on app listings" },
  mumbai: { tam: "₹6,800 Cr addressable across food + D2C", competition: "Very High", ticket: "₹320–400", reg: "FSSAI + BMC Shop & Establishment + Fire NOC", lang: "Marathi + Hindi + English" },
  delhi: { tam: "₹5,400 Cr across food + retail D2C", competition: "Very High", ticket: "₹260–330", reg: "FSSAI + Delhi Govt. Trade License + Pollution NOC", lang: "Hindi-first; English for premium" },
  hyderabad: { tam: "₹2,100 Cr emerging market", competition: "Medium", ticket: "₹240–300", reg: "FSSAI + GHMC trade license", lang: "Telugu + English" },
  pune: { tam: "₹1,800 Cr; strong student & IT base", competition: "Medium-High", ticket: "₹220–290", reg: "FSSAI + PMC Shop & Establishment", lang: "Marathi + English" },
};

const getCityData = (city: string) => cityIntel[city.toLowerCase().trim()] || {
  tam: "Tier 2/3 city — local survey recommended; informal market often 2–3x formal estimates",
  competition: "Low–Medium",
  ticket: "₹150–250",
  reg: "Local Municipal trade license + FSSAI/Udyam/GST as applicable",
  lang: "Local language first; bilingual signage recommended",
};

export default function FeasibilityReport({ data }: { data: VyapaarData }) {
  const sec = sectorKey(data.sector);
  const cogs = cogsRatios[sec];
  const annualRevenue = data.pricePerUnit * data.monthlyCustomers * 12;
  const projections = [
    { year: "Year 1", revenue: annualRevenue, ebitda: annualRevenue * (1 - cogs) - (data.rent || 0) * 12 - data.employees * 25000 * 12 - annualRevenue * 0.13 },
    { year: "Year 2", revenue: annualRevenue * 1.4, ebitda: annualRevenue * 1.4 * (1 - cogs - 0.13) - (data.rent || 0) * 12 - data.employees * 28000 * 12 },
    { year: "Year 3", revenue: annualRevenue * 1.82, ebitda: annualRevenue * 1.82 * (1 - cogs - 0.13) - (data.rent || 0) * 12 - data.employees * 30000 * 12 },
  ];

  const isLoan = data.purpose.startsWith("Bank");
  const loan = data.loanAmount || 0;
  const annualRepayment = isLoan ? (loan * (1 + 0.095 * (data.tenure || 5))) / (data.tenure || 5) : 0;
  const dscr = isLoan && annualRepayment > 0 ? projections[0].ebitda / annualRepayment : 0;
  const irr = ((projections[2].revenue / data.investment) ** (1 / 3) - 1) * 100;
  const breakEvenCustomers = Math.max(1, Math.round(((data.rent || 0) + data.employees * 25000) / (data.pricePerUnit * (1 - cogs))));

  const city = getCityData(data.city);

  const eligibility: { name: string; note: string }[] = [];
  if (data.investment <= 5000000 && (sec === "Manufacturing" || sec === "Services" || sec === "Food")) {
    eligibility.push({ name: "PMEGP", note: "Up to 25% subsidy on project cost (35% for special categories). Apply via KVIC portal." });
  }
  if (loan && loan <= 50000) eligibility.push({ name: "Mudra — Shishu", note: "Loans up to ₹50,000 with subsidized interest." });
  else if (loan && loan <= 500000) eligibility.push({ name: "Mudra — Kishore", note: "Loans ₹50,001–₹5L; collateral-free for many sectors." });
  else if (loan && loan <= 1000000) eligibility.push({ name: "Mudra — Tarun", note: "Loans ₹5L–₹10L for established small businesses." });
  if (sec === "Technology") eligibility.push({ name: "Startup India (DPIIT)", note: "Tax benefits, easier IPR, government tenders. Apply via startupindia.gov.in." });

  const toc = [
    { id: "summary", t: "Executive Summary" },
    { id: "market", t: "Market Snapshot" },
    { id: "fin", t: "Financial Projections" },
    { id: "local", t: "Localization Notes" },
    { id: "risk", t: "Risks & Mitigations" },
    { id: "roadmap", t: "90-Day Roadmap" },
    { id: "schemes", t: "Govt. Schemes" },
    { id: "partners", t: "Co-Sell Partners" },
  ];

  return (
    <div className="bg-cream paper-texture min-h-[calc(100vh-40px)] py-12 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[200px_1fr] gap-10">
        {/* TOC */}
        <aside className="hidden lg:block sticky top-16 self-start">
          <div className="section-label text-terracotta mb-4">CONTENTS</div>
          <ol className="space-y-2 text-sm">
            {toc.map((t, i) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-foreground/60 hover:text-terracotta transition-colors block py-1">
                  <span className="font-mono text-xs text-terracotta mr-2">{String(i + 1).padStart(2, "0")}</span>
                  {t.t}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <main className="space-y-12 min-w-0">
          <div className="text-center">
            <span className="section-label text-terracotta">FEASIBILITY REPORT</span>
            <h1 className="font-heading font-bold text-3xl md:text-5xl uppercase text-foreground mt-3">{data.businessName || "Your Business"}</h1>
            <p className="text-sm text-muted-foreground mt-2">{data.city}, {data.state} ◆ {data.sector}</p>
          </div>

          {/* Summary */}
          <section id="summary" className="border-2 border-foreground p-6 border-l-[6px] border-l-forest">
            <h2 className="section-label text-forest mb-4">01 — EXECUTIVE SUMMARY</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <Row k="Business" v={data.businessName || "—"} />
              <Row k="Sector & Stage" v={`${sec} ◆ ${data.stage}`} />
              <Row k="Location" v={`${data.city}, ${data.state}`} />
              <Row k="Project cost" v={formatINR(data.investment)} />
              <Row k="Year 1 revenue (projected)" v={formatINR(annualRevenue)} />
              <Row k="Report purpose" v={data.purpose + (isLoan ? ` — ${data.bank}` : "")} />
            </div>
          </section>

          {/* Market */}
          <section id="market" className="bg-charcoal text-cream p-8 border-2 border-foreground">
            <h2 className="section-label text-ochre mb-4">02 — MARKET IN {data.city.toUpperCase() || "YOUR CITY"}</h2>
            <div className="grid sm:grid-cols-2 gap-5 text-sm">
              <DarkRow k="Market size" v={city.tam} />
              <DarkRow k="Competition density" v={city.competition} />
              <DarkRow k="Avg. ticket size" v={city.ticket} />
              <DarkRow k="Regulatory note" v={city.reg} />
              <DarkRow k="Language preference" v={city.lang} />
            </div>
          </section>

          {/* Financial */}
          <section id="fin" className="border-2 border-foreground p-6">
            <h2 className="section-label text-terracotta mb-4">03 — FINANCIAL PROJECTIONS</h2>
            <div className="h-64 mb-6">
              <ResponsiveContainer>
                <BarChart data={projections}>
                  <XAxis dataKey="year" stroke="hsl(var(--foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--foreground))" fontSize={11} tickFormatter={(v) => `₹${(v / 1e7).toFixed(1)}Cr`} />
                  <Tooltip formatter={(v: number) => formatINR(v)} contentStyle={{ background: "hsl(var(--cream))", border: "2px solid hsl(var(--foreground))", borderRadius: 0 }} />
                  <Bar dataKey="revenue" fill="hsl(var(--terracotta))" name="Revenue" />
                  <Bar dataKey="ebitda" fill="hsl(var(--forest))" name="EBITDA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <table className="w-full text-sm">
              <thead><tr className="border-b-2 border-foreground"><th className="text-left py-2"> </th><th className="text-right py-2">Year 1</th><th className="text-right py-2">Year 2</th><th className="text-right py-2">Year 3</th></tr></thead>
              <tbody>
                <tr className="border-b border-foreground/10"><td className="py-2">Revenue</td>{projections.map(p => <td key={p.year} className="text-right py-2">{formatINR(p.revenue)}</td>)}</tr>
                <tr className="border-b border-foreground/10"><td className="py-2">EBITDA</td>{projections.map(p => <td key={p.year} className="text-right py-2">{formatINR(p.ebitda)}</td>)}</tr>
              </tbody>
            </table>
            {isLoan && (
              <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
                <Metric label="DSCR" value={dscr.toFixed(2)} note={`Banks need >1.25 — you are ${dscr >= 1.25 ? "above" : "below"} threshold`} good={dscr >= 1.25} />
                <Metric label="Est. IRR" value={`${irr.toFixed(1)}%`} note="Bank benchmark >15%" good={irr >= 15} />
                <Metric label="Break-even" value={`${breakEvenCustomers}/mo`} note="Customers needed monthly" good />
              </div>
            )}
          </section>

          {/* Localization */}
          <section id="local" className="border-2 border-foreground p-6 border-l-[6px] border-l-ochre">
            <h2 className="section-label text-ochre mb-4">04 — LOCALIZATION NOTES</h2>
            <div className="space-y-3 text-sm text-foreground/80">
              <p><strong className="text-foreground">Payments:</strong> UPI dominates (RBI data shows 80%+ retail transactions in metros). Integrate Razorpay/PhonePe before launch.</p>
              <p><strong className="text-foreground">Logistics:</strong> {sec === "Food" ? "Borzo and Porter for last-mile B2B; Swiggy/Zomato handle B2C automatically." : "Porter for intracity freight; Shiprocket for D2C aggregated shipping."}</p>
              <p><strong className="text-foreground">Seasonality:</strong> {sec === "Food" ? "Cloud kitchens dip 15–20% in summer. Plan inventory accordingly." : "Q3-Q4 typically the strongest quarters for consumer SKUs."}</p>
              <p><strong className="text-foreground">Language:</strong> {city.lang}</p>
            </div>
          </section>

          {/* Risks */}
          <section id="risk">
            <h2 className="section-label text-terracotta mb-4">05 — RISKS &amp; MITIGATIONS</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { t: "Market", r: "Demand sensitivity to local competitor pricing", m: "Run a 4-week pilot before full launch; monitor 2 competitors weekly." },
                { t: "Operational", r: "Cash flow gap in months 1–4 before steady revenue", m: "Maintain 4 months of fixed costs in reserve; stagger CAPEX." },
                { t: "Regulatory", r: city.reg.split(".")[0], m: "Apply for licenses 30 days before operations begin." },
              ].map(x => (
                <div key={x.t} className="border-2 border-foreground p-5">
                  <div className="section-label text-terracotta mb-2">{x.t} RISK</div>
                  <p className="text-sm text-foreground/80 mb-3">{x.r}</p>
                  <p className="text-xs text-forest"><strong>Mitigation:</strong> {x.m}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section id="roadmap" className="border-2 border-foreground p-6">
            <h2 className="section-label text-terracotta mb-4">06 — 90-DAY ROADMAP</h2>
            <div className="grid md:grid-cols-4 gap-3">
              {[
                { d: "Days 1–21", t: "Registration & Setup", x: "FSSAI / GST / Udyam / Trade License" },
                { d: "Days 22–42", t: "Infrastructure Build", x: "Premises, equipment, vendor onboarding" },
                { d: "Days 43–63", t: "Soft Launch", x: "First 50 trial customers, channel listings" },
                { d: "Days 64–90", t: "First Revenue & Iterate", x: "20 reviews, optimize, retention loops" },
              ].map((p, i) => (
                <div key={p.d} className="relative">
                  <div className="font-mono text-xs text-terracotta mb-1">{p.d}</div>
                  <div className="font-heading font-bold text-foreground mb-1">{p.t}</div>
                  <p className="text-xs text-muted-foreground">{p.x}</p>
                  {i < 3 && <div className="hidden md:block absolute right-[-8px] top-2 text-foreground/30">→</div>}
                </div>
              ))}
            </div>
          </section>

          {/* Schemes */}
          {eligibility.length > 0 && (
            <section id="schemes" className="bg-charcoal text-cream p-8 border-2 border-foreground">
              <h2 className="section-label text-ochre mb-4">07 — SCHEMES YOU MAY QUALIFY FOR</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {eligibility.map(e => (
                  <div key={e.name} className="border border-cream/20 p-4">
                    <div className="font-heading text-lg text-ochre">{e.name}</div>
                    <p className="text-xs text-cream/70 mt-2">{e.note}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Partners */}
          <PartnerMarketplace sector={sec} />

          <div className="flex flex-wrap gap-3 justify-center pt-6 border-t-2 border-foreground/10">
            <button onClick={() => toast("PDF download launching soon — join Bazaar to be the first to know.")} className="bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground uppercase tracking-wider hover:opacity-90">Download Report (PDF)</button>
            <button onClick={() => { navigator.clipboard.writeText(`vyapaar.bhaglabs.in/report/${Math.random().toString(36).slice(2, 8)}`); toast("Report link copied"); }} className="border-2 border-foreground px-6 py-2.5 text-sm font-semibold text-foreground uppercase tracking-wider hover:bg-foreground hover:text-cream transition-colors">Copy Share Link</button>
          </div>
        </main>
      </div>
    </div>
  );
}

const Row = ({ k, v }: { k: string; v: string }) => (
  <div className="border-b border-foreground/10 pb-2"><div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k}</div><div className="text-foreground">{v}</div></div>
);
const DarkRow = ({ k, v }: { k: string; v: string }) => (
  <div className="border-b border-cream/10 pb-2"><div className="text-[10px] uppercase tracking-wider text-ochre">{k}</div><div className="text-cream/90">{v}</div></div>
);
const Metric = ({ label, value, note, good }: { label: string; value: string; note: string; good: boolean }) => (
  <div className={`border-2 p-4 ${good ? "border-forest" : "border-terracotta"}`}>
    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    <div className={`font-heading text-2xl ${good ? "text-forest" : "text-terracotta"}`}>{value}</div>
    <div className="text-xs text-muted-foreground mt-1">{note}</div>
  </div>
);
