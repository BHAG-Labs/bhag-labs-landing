import { useState } from "react";
import { toast } from "sonner";
import type { WizardData } from "./PitchwalaWizard";

const truncate = (s: string, n = 220) => (s.length > n ? s.slice(0, n).trim() + "…" : s) || "—";

const DeckPreview = ({ data, onEdit }: { data: WizardData; onEdit: () => void }) => {
  const [copied, setCopied] = useState(false);
  const company = data.companyName || "Your Venture";
  const link = `pitchwala.bhaglabs.in/deck/${Math.random().toString(36).slice(2, 8)}`;

  const slides: { n: string; name: string; render: () => JSX.Element }[] = [
    { n: "01", name: "Cover", render: () => (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="font-heading font-black text-3xl text-cream uppercase">{company}</div>
        <div className="text-ochre text-xs uppercase tracking-[0.2em] mt-3">{data.customerCity || "India"}</div>
        <div className="text-cream/60 text-xs mt-4 max-w-[80%]">{truncate(data.solution, 80)}</div>
      </div>
    )},
    { n: "02", name: "Problem", render: () => <p className="font-heading text-base text-foreground leading-snug">{truncate(data.problem)}</p> },
    { n: "03", name: "Existing Solutions", render: () => (
      <div className="space-y-2 text-xs text-foreground/80">
        <p className="leading-snug">{truncate(data.existing, 130)}</p>
        <p className="text-terracotta italic leading-snug">Why they fail: {truncate(data.inefficiency, 100)}</p>
      </div>
    )},
    { n: "04", name: "Our Solution", render: () => (
      <div className="space-y-2">
        <p className="font-heading text-sm text-foreground leading-snug">{truncate(data.solution, 160)}</p>
        <p className="text-[10px] uppercase tracking-wider text-terracotta">Stack: <span className="text-foreground/70 normal-case tracking-normal">{truncate(data.techStack, 60)}</span></p>
      </div>
    )},
    { n: "05", name: "Market", render: () => {
      const count = Number(data.customerCount) || 0;
      const price = Number(data.price) || 0;
      const tam = count * price * 12;
      return (
        <div className="text-center">
          <div className="text-[10px] uppercase tracking-wider text-terracotta mb-2">Total Addressable</div>
          <div className="font-heading text-2xl text-foreground">₹{(tam / 1e7).toFixed(1)} Cr</div>
          <div className="text-[10px] text-muted-foreground mt-2">{count.toLocaleString("en-IN")} customers × ₹{price} × 12</div>
        </div>
      );
    }},
    { n: "06", name: "Product", render: () => (
      <div className="border-2 border-dashed border-foreground/30 h-full w-full flex items-center justify-center text-[10px] uppercase tracking-wider text-muted-foreground text-center px-4">
        [ Insert your product screenshots ]
      </div>
    )},
    { n: "07", name: "Business Model", render: () => (
      <table className="w-full text-xs">
        <tbody className="divide-y divide-foreground/10">
          <tr><td className="py-1.5 text-foreground/60">Model</td><td className="py-1.5 text-right font-semibold">{data.revenueModel}</td></tr>
          <tr><td className="py-1.5 text-foreground/60">Price</td><td className="py-1.5 text-right font-semibold">₹{data.price || "—"}</td></tr>
          <tr><td className="py-1.5 text-foreground/60">Margin</td><td className="py-1.5 text-right font-semibold">{data.margin || "—"}%</td></tr>
          <tr><td className="py-1.5 text-foreground/60">CAC</td><td className="py-1.5 text-right font-semibold">₹{data.cac || "—"}</td></tr>
        </tbody>
      </table>
    )},
    { n: "08", name: "Competition", render: () => (
      <div className="space-y-1.5 text-[10px]">
        {data.competitors.slice(0, 4).map((c, i) => (
          <div key={i} className="grid grid-cols-3 gap-2 border-b border-foreground/10 pb-1">
            <span className="font-semibold">{c.name || "—"}</span>
            <span className="text-muted-foreground">{c.strength || "—"}</span>
            <span className="text-terracotta">{c.advantage || "—"}</span>
          </div>
        ))}
      </div>
    )},
    { n: "09", name: "Team", render: () => (
      <div className="space-y-2">
        {data.team.filter(t => t.name).map((m, i) => (
          <div key={i} className="border-l-2 border-terracotta pl-3">
            <div className="font-heading text-sm text-foreground">{m.name}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.role}</div>
            <div className="text-xs text-foreground/70 mt-0.5">{m.bg}</div>
          </div>
        ))}
      </div>
    )},
    { n: "10", name: "The Ask", render: () => (
      <div className="text-center space-y-2">
        <div className="text-[10px] uppercase tracking-wider text-terracotta">{data.stage} Round</div>
        <div className="font-heading text-3xl text-foreground">₹{data.raiseAmount || "—"}</div>
        <div className="text-xs text-muted-foreground">at ₹{data.valuation || "—"} post-money</div>
        <div className="text-xs text-foreground/70 mt-3">{truncate(data.useOfFunds, 100)}</div>
      </div>
    )},
  ];

  const copy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-cream paper-texture min-h-[calc(100vh-40px)] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="section-label text-terracotta">YOUR DECK IS READY</span>
          <h1 className="font-heading font-bold text-3xl md:text-5xl uppercase text-foreground mt-3 mb-2">{company}</h1>
          <p className="text-sm text-muted-foreground">Scroll horizontally to preview all 10 slides.</p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            {slides.map((s, i) => (
              <div key={s.n} className={`relative w-[320px] h-[220px] border-2 border-foreground p-4 flex-shrink-0 ${i % 2 === 0 ? "bg-cream" : "bg-charcoal text-cream"}`}>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] mb-3">
                  <span className={i % 2 === 0 ? "text-foreground/40" : "text-cream/40"}>{s.n}</span>
                  <span className={i % 2 === 0 ? "text-terracotta" : "text-ochre"}>{s.name}</span>
                </div>
                <div className="h-[160px] overflow-hidden">{s.render()}</div>
                <div className={`absolute bottom-2 right-3 text-[8px] tracking-[0.2em] ${i % 2 === 0 ? "text-foreground/20" : "text-cream/20"}`}>◆ PITCHWALA</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-10">
          <button onClick={() => toast("PDF export coming soon. Share the link in the meantime.")} className="bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground uppercase tracking-wider hover:opacity-90">Download PDF</button>
          <button onClick={onEdit} className="border-2 border-foreground px-6 py-2.5 text-sm font-semibold text-foreground uppercase tracking-wider hover:bg-foreground hover:text-cream transition-colors">Edit Answers</button>
        </div>

        <div className="mt-8 max-w-xl mx-auto border-2 border-foreground/20 p-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Your deck link</div>
            <div className="font-mono text-xs text-foreground truncate">{link}</div>
          </div>
          <button onClick={copy} className="text-xs uppercase tracking-wider font-semibold text-terracotta whitespace-nowrap">{copied ? "Copied ✓" : "Copy"}</button>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <span className="section-label text-terracotta md:col-span-2">INVESTOR TIPS</span>
          {[
            "Keep your deck under 12 slides. Indian VCs spend ~3:24 on a first read.",
            "Lead with the problem, not the solution. Open with a real person, a real moment of friction.",
            "Name your ask clearly. \"₹X Cr at ₹Y Cr post for Z milestone\" beats vague ranges.",
            "Include a 'Why Now'. AA framework, ONDC, GeM, PLI — all create timing windows.",
          ].map(t => (
            <div key={t} className="border border-foreground/20 p-4 text-sm text-foreground/80 leading-relaxed">
              <span className="text-ochre mr-2">◆</span>{t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeckPreview;
