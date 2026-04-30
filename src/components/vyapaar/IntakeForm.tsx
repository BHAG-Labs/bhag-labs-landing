import { useState } from "react";
import { Upload, FileText, Check } from "lucide-react";

export interface VyapaarData {
  businessName: string;
  description: string;
  sector: string;
  stage: string;
  purpose: string;
  city: string;
  state: string;
  investment: number;
  funding: string[];
  employees: number;
  pricePerUnit: number;
  monthlyCustomers: number;
  customer: string;
  competitors: string;
  bank?: string;
  loanAmount?: number;
  tenure?: number;
  premises?: string;
  rent?: number;
  machinery?: string;
}

const sectors = [
  "Food & Beverage (Restaurant / Cloud Kitchen / D2C)",
  "Retail (Kirana / D2C / E-commerce)",
  "Manufacturing (Light / Food Processing / Garments)",
  "Agriculture & Allied",
  "Services (Salon / Coaching / Logistics / Healthcare)",
  "Technology (SaaS / App / AI / Fintech)",
  "Education & Training",
  "Real Estate & Construction",
  "Other",
];

const states = ["Maharashtra", "Karnataka", "Delhi", "Tamil Nadu", "Telangana", "Gujarat", "Uttar Pradesh", "West Bengal", "Rajasthan", "Madhya Pradesh", "Kerala", "Punjab", "Haryana", "Bihar", "Odisha", "Andhra Pradesh", "Other"];

const initial: VyapaarData = {
  businessName: "",
  description: "",
  sector: sectors[0],
  stage: "Idea stage (not yet started)",
  purpose: "Bank loan / DPR",
  city: "",
  state: "Karnataka",
  investment: 1500000,
  funding: ["Bank loan"],
  employees: 5,
  pricePerUnit: 300,
  monthlyCustomers: 1500,
  customer: "",
  competitors: "",
  bank: "SBI",
  loanAmount: 1000000,
  tenure: 5,
  premises: "Rent",
  rent: 35000,
  machinery: "",
};

export default function IntakeForm({ onSubmit }: { onSubmit: (d: VyapaarData) => void }) {
  const [tab, setTab] = useState<"describe" | "upload">("describe");
  const [file, setFile] = useState<string | null>(null);
  const [d, setD] = useState<VyapaarData>(initial);

  const u = <K extends keyof VyapaarData>(k: K, v: VyapaarData[K]) => setD((p) => ({ ...p, [k]: v }));

  const labelCls = "block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider";
  const inputCls = "w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-terracotta transition-colors";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(d);
  };

  return (
    <div className="bg-cream paper-texture min-h-[calc(100vh-40px)] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="section-label text-terracotta">VYAPAAR INTAKE</span>
          <h1 className="font-heading font-bold text-3xl md:text-5xl uppercase text-foreground mt-3">Tell Us About Your Business</h1>
        </div>

        {/* Tab toggle */}
        <div className="grid grid-cols-2 border-2 border-foreground mb-8">
          <button
            onClick={() => setTab("describe")}
            className={`py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors ${tab === "describe" ? "bg-foreground text-cream" : "bg-cream text-foreground hover:bg-cream-dark"}`}
          >
            <FileText className="w-4 h-4" /> Describe My Idea
          </button>
          <button
            onClick={() => setTab("upload")}
            className={`py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors ${tab === "upload" ? "bg-foreground text-cream" : "bg-cream text-foreground hover:bg-cream-dark"}`}
          >
            <Upload className="w-4 h-4" /> Upload My Pitch Deck
          </button>
        </div>

        {tab === "upload" ? (
          <div>
            <label className="block border-2 border-dashed border-ochre bg-cream p-12 text-center cursor-pointer hover:bg-cream-dark transition-colors">
              <input type="file" accept=".pdf,.pptx" className="hidden" onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0].name)} />
              {file ? (
                <div className="flex items-center justify-center gap-2 text-terracotta font-semibold">
                  <Check className="w-5 h-5" /> {file}
                </div>
              ) : (
                <>
                  <Upload className="w-10 h-10 mx-auto text-ochre mb-4" />
                  <div className="font-heading text-xl mb-2">Drag your pitch deck here</div>
                  <div className="text-xs text-muted-foreground">Supports .pdf and .pptx files up to 20MB</div>
                  <div className="text-xs text-terracotta mt-3 underline">Browse files</div>
                </>
              )}
            </label>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Vyapaar reads your deck's problem, solution, market, and financials to pre-fill the report. You can review and edit before generating.
            </p>
            {file && (
              <button onClick={() => onSubmit(d)} className="mt-6 w-full bg-primary py-3 font-semibold text-primary-foreground text-sm uppercase tracking-wider hover:opacity-90">Continue to Report →</button>
            )}
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-8">
            {/* Section A */}
            <div className="border-2 border-foreground p-6 space-y-5">
              <h2 className="section-label text-terracotta">A. YOUR IDEA</h2>
              <div>
                <label className={labelCls}>Business name</label>
                <input className={inputCls} value={d.businessName} onChange={(e) => u("businessName", e.target.value)} placeholder="Working title" required />
              </div>
              <div>
                <label className={labelCls}>What does your business do?</label>
                <textarea rows={3} className={`${inputCls} resize-none`} value={d.description} onChange={(e) => u("description", e.target.value)} placeholder="e.g. We operate a cloud kitchen producing ready-to-eat South Indian breakfast..." required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Sector</label>
                  <select className={inputCls} value={d.sector} onChange={(e) => u("sector", e.target.value)}>
                    {sectors.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Stage</label>
                  <select className={inputCls} value={d.stage} onChange={(e) => u("stage", e.target.value)}>
                    {["Idea stage (not yet started)", "Early (0-6 months)", "Growing (6 mo–3 yr)", "Established (3+ yr)"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className={labelCls}>Purpose of this report</label>
                <select className={inputCls} value={d.purpose} onChange={(e) => u("purpose", e.target.value)}>
                  {["Bank loan / DPR", "Government subsidy (PMEGP/PMFME/Mudra)", "Investor pitch / feasibility", "Internal planning only"].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            {/* Section B */}
            <div className="border-2 border-foreground p-6 space-y-5">
              <h2 className="section-label text-terracotta">B. LOCATION &amp; SCALE</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Primary city / district</label>
                  <input className={inputCls} value={d.city} onChange={(e) => u("city", e.target.value)} placeholder="e.g. Bengaluru" required />
                </div>
                <div>
                  <label className={labelCls}>State</label>
                  <select className={inputCls} value={d.state} onChange={(e) => u("state", e.target.value)}>
                    {states.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Project cost (₹)</label>
                  <input type="number" className={inputCls} value={d.investment} onChange={(e) => u("investment", Number(e.target.value))} />
                </div>
                <div>
                  <label className={labelCls}>Employees (Year 1)</label>
                  <input type="number" className={inputCls} value={d.employees} onChange={(e) => u("employees", Number(e.target.value))} />
                </div>
              </div>
            </div>

            {/* Section C */}
            <div className="border-2 border-foreground p-6 space-y-5">
              <h2 className="section-label text-terracotta">C. REVENUE &amp; MARKET</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Price per unit/customer (₹)</label>
                  <input type="number" className={inputCls} value={d.pricePerUnit} onChange={(e) => u("pricePerUnit", Number(e.target.value))} />
                </div>
                <div>
                  <label className={labelCls}>Customers/orders per month (Year 1)</label>
                  <input type="number" className={inputCls} value={d.monthlyCustomers} onChange={(e) => u("monthlyCustomers", Number(e.target.value))} />
                </div>
              </div>
              <div>
                <label className={labelCls}>Target customer</label>
                <input className={inputCls} value={d.customer} onChange={(e) => u("customer", e.target.value)} placeholder="Who buys from you?" />
              </div>
              <div>
                <label className={labelCls}>Top 2-3 competitors in your city</label>
                <input className={inputCls} value={d.competitors} onChange={(e) => u("competitors", e.target.value)} />
              </div>
            </div>

            {/* Section D conditional */}
            {d.purpose.startsWith("Bank") && (
              <div className="border-2 border-foreground p-6 space-y-5">
                <h2 className="section-label text-terracotta">D. LOAN DETAILS</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Bank / Scheme</label>
                    <select className={inputCls} value={d.bank} onChange={(e) => u("bank", e.target.value)}>
                      {["SBI", "PNB", "Canara", "Union Bank", "HDFC", "ICICI", "PMEGP", "PMFME", "Mudra - Shishu", "Mudra - Kishore", "Mudra - Tarun", "Stand-Up India"].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Loan amount (₹)</label>
                    <input type="number" className={inputCls} value={d.loanAmount} onChange={(e) => u("loanAmount", Number(e.target.value))} />
                  </div>
                  <div>
                    <label className={labelCls}>Repayment period</label>
                    <select className={inputCls} value={d.tenure} onChange={(e) => u("tenure", Number(e.target.value))}>
                      {[3, 5, 7, 10].map(n => <option key={n} value={n}>{n} years</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Premises</label>
                    <select className={inputCls} value={d.premises} onChange={(e) => u("premises", e.target.value)}>
                      <option>Own</option><option>Rent</option>
                    </select>
                  </div>
                  {d.premises === "Rent" && (
                    <div>
                      <label className={labelCls}>Monthly rent (₹)</label>
                      <input type="number" className={inputCls} value={d.rent} onChange={(e) => u("rent", Number(e.target.value))} />
                    </div>
                  )}
                </div>
                <div>
                  <label className={labelCls}>Key machinery / equipment</label>
                  <textarea rows={2} className={`${inputCls} resize-none`} value={d.machinery} onChange={(e) => u("machinery", e.target.value)} placeholder="e.g. Commercial oven ₹80,000, Cold storage ₹1,20,000..." />
                </div>
              </div>
            )}

            <button type="submit" className="w-full bg-primary py-4 font-semibold text-primary-foreground text-sm uppercase tracking-wider hover:opacity-90">
              Generate My Report →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
