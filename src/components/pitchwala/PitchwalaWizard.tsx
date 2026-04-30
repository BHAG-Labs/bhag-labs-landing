import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";

export interface Competitor { name: string; strength: string; advantage: string; }
export interface Milestone { when: string; what: string; }
export interface TeamMember { name: string; role: string; bg: string; linkedin: string; }
export interface WizardData {
  problem: string;
  existing: string;
  inefficiency: string;
  customer: string;
  customerCity: string;
  customerCount: string;
  competitors: Competitor[];
  solution: string;
  techStack: string;
  revenueModel: string;
  price: string;
  margin: string;
  cac: string;
  businessModelNote: string;
  milestones: Milestone[];
  team: TeamMember[];
  companyName: string;
  raiseAmount: string;
  valuation: string;
  stage: string;
  useOfFunds: string;
}

const initial: WizardData = {
  problem: "",
  existing: "",
  inefficiency: "",
  customer: "",
  customerCity: "",
  customerCount: "",
  competitors: [{ name: "Existing ERP tools", strength: "Feature-rich", advantage: "Too complex/expensive for the 1-10 employee MSME" }],
  solution: "",
  techStack: "",
  revenueModel: "Subscription (SaaS)",
  price: "",
  margin: "",
  cac: "",
  businessModelNote: "",
  milestones: [{ when: "Month 0", what: "" }, { when: "Month 6", what: "" }],
  team: [
    { name: "", role: "CEO / Co-Founder", bg: "", linkedin: "" },
    { name: "", role: "CTO / Co-Founder", bg: "", linkedin: "" },
  ],
  companyName: "",
  raiseAmount: "",
  valuation: "",
  stage: "Seed",
  useOfFunds: "",
};

const steps = [
  "Problem", "Existing Solutions", "Inefficiency", "Target Customer",
  "Competition", "Your Solution", "Business Model", "Timeline", "Team & Ask",
];

export default function PitchwalaWizard({ onComplete }: { onComplete: (d: WizardData) => void }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<WizardData>(initial);

  const update = <K extends keyof WizardData>(k: K, v: WizardData[K]) => setData((d) => ({ ...d, [k]: v }));

  const next = () => (step === steps.length - 1 ? onComplete(data) : setStep(step + 1));
  const back = () => setStep(Math.max(0, step - 1));

  const labelCls = "block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider";
  const inputCls = "w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-terracotta transition-colors";
  const taCls = inputCls + " resize-none";

  return (
    <div className="min-h-[calc(100vh-40px)] flex bg-cream">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-charcoal text-cream py-10 px-6 sticky top-10 self-start min-h-[calc(100vh-40px)]">
        <div className="section-label text-ochre mb-6">PITCHWALA</div>
        <ol className="space-y-3">
          {steps.map((s, i) => (
            <li key={s}>
              <button
                onClick={() => setStep(i)}
                className={`w-full text-left text-sm flex items-center gap-3 py-2 pl-3 border-l-2 transition-colors ${
                  i === step ? "border-terracotta text-cream font-semibold" : i < step ? "border-ochre/50 text-cream/70" : "border-cream/10 text-cream/40"
                }`}
              >
                <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                {i < step ? <Check className="w-3 h-3 text-ochre" /> : null}
                <span>{s}</span>
              </button>
            </li>
          ))}
        </ol>
      </aside>

      {/* Content */}
      <main className="flex-1 px-6 md:px-12 py-10 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2 text-xs uppercase tracking-wider text-muted-foreground">
            <span>Step {step + 1} of {steps.length}</span>
            <span>{steps[step]}</span>
          </div>
          <div className="h-[3px] bg-foreground/10">
            <motion.div className="h-full bg-terracotta" animate={{ width: `${((step + 1) / steps.length) * 100}%` }} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            {step === 0 && (
              <>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">What specific problem are you solving, and who suffers from it most?</h2>
                <p className="text-sm text-muted-foreground">Be precise. "Agriculture is inefficient" is not a problem statement. Indian VCs want to know you've spoken to real people in real places.</p>
                <textarea rows={6} maxLength={500} className={taCls} placeholder="e.g. Small kirana owners in Tier 2 cities can't access working capital because they have no credit history..."
                  value={data.problem} onChange={(e) => update("problem", e.target.value)} />
                <div className="text-right text-xs text-muted-foreground">{data.problem.length} / 500</div>
              </>
            )}

            {step === 1 && (
              <>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">What do people currently use to solve this — and why are those options inadequate?</h2>
                <p className="text-sm text-muted-foreground">Name real competitors or workarounds. "There's no competition" sounds like "I haven't done my research."</p>
                <textarea rows={6} className={taCls} placeholder="e.g. NBFC apps like KreditBee only serve urban salaried employees. Local moneylenders charge 36-60%..."
                  value={data.existing} onChange={(e) => update("existing", e.target.value)} />
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">What is the core inefficiency your product is designed to fix?</h2>
                <p className="text-sm text-muted-foreground">Identify a structural reason why incumbents <em>can't</em> fix this — not just slow or expensive.</p>
                <textarea rows={6} className={taCls} placeholder="e.g. Banks underwrite based on salary slips. The unbanked informal economy runs on data banks don't accept..."
                  value={data.inefficiency} onChange={(e) => update("inefficiency", e.target.value)} />
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">Describe your target customer in one sentence — then go deeper.</h2>
                <p className="text-sm text-muted-foreground">Segment tightly. "SMEs" is not a segment. Indian VCs want to see you know exactly who pays you first.</p>
                <textarea rows={5} className={taCls} placeholder="e.g. Cloud kitchen operators in metros running 3-5 brands on Swiggy/Zomato, GMV ₹5-20L..."
                  value={data.customer} onChange={(e) => update("customer", e.target.value)} />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>City / Geography focus</label>
                    <input className={inputCls} placeholder="e.g. Bengaluru, Chennai, Hyderabad" value={data.customerCity} onChange={(e) => update("customerCity", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Estimated # of such customers in India</label>
                    <input type="number" className={inputCls} placeholder="e.g. 25000" value={data.customerCount} onChange={(e) => update("customerCount", e.target.value)} />
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">List your top competitors. What do they do well — and where do you beat them?</h2>
                <p className="text-sm text-muted-foreground">Include real Indian players first. "No direct competition" is a red flag.</p>
                <div className="space-y-3">
                  {data.competitors.map((c, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 border border-foreground/20 p-3">
                      <input className={inputCls} placeholder="Competitor" value={c.name} onChange={(e) => update("competitors", data.competitors.map((x, j) => j === i ? { ...x, name: e.target.value } : x))} />
                      <input className={inputCls} placeholder="What they do well" value={c.strength} onChange={(e) => update("competitors", data.competitors.map((x, j) => j === i ? { ...x, strength: e.target.value } : x))} />
                      <input className={inputCls} placeholder="Your advantage" value={c.advantage} onChange={(e) => update("competitors", data.competitors.map((x, j) => j === i ? { ...x, advantage: e.target.value } : x))} />
                    </div>
                  ))}
                  {data.competitors.length < 4 && (
                    <button onClick={() => update("competitors", [...data.competitors, { name: "", strength: "", advantage: "" }])} className="text-sm text-terracotta font-semibold">+ Add competitor</button>
                  )}
                </div>
              </>
            )}

            {step === 5 && (
              <>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">Describe your product. What does it do, how does it work, and what makes it different?</h2>
                <p className="text-sm text-muted-foreground">Lead with the user experience, not the technology.</p>
                <textarea rows={6} className={taCls} placeholder="e.g. A kirana owner opens the app, sees his credit score from his UPI history..."
                  value={data.solution} onChange={(e) => update("solution", e.target.value)} />
                <div>
                  <label className={labelCls}>Technology / Infrastructure</label>
                  <textarea rows={3} className={taCls} placeholder="e.g. Built on Account Aggregator framework, hosted on AWS Mumbai..."
                    value={data.techStack} onChange={(e) => update("techStack", e.target.value)} />
                </div>
              </>
            )}

            {step === 6 && (
              <>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">How do you make money? Who pays, how much, and how often?</h2>
                <p className="text-sm text-muted-foreground">Indian VCs care about: sustainable revenue, unit economics, scale without proportional headcount.</p>
                <textarea rows={4} className={taCls} placeholder="Add narrative context for your business model..."
                  value={data.businessModelNote} onChange={(e) => update("businessModelNote", e.target.value)} />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Revenue model type</label>
                    <select className={inputCls} value={data.revenueModel} onChange={(e) => update("revenueModel", e.target.value)}>
                      {["Subscription (SaaS)", "Transaction fee", "Commission", "Marketplace take-rate", "One-time purchase", "Freemium", "Ad-supported", "Other"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Price per customer/transaction (₹)</label>
                    <input className={inputCls} placeholder="e.g. 999" value={data.price} onChange={(e) => update("price", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Estimated gross margin %</label>
                    <input type="number" className={inputCls} placeholder="e.g. 65" value={data.margin} onChange={(e) => update("margin", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Estimated CAC (₹)</label>
                    <input className={inputCls} placeholder="If unknown, explain" value={data.cac} onChange={(e) => update("cac", e.target.value)} />
                  </div>
                </div>
              </>
            )}

            {step === 7 && (
              <>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">What have you built or validated — and what will the next 12 months look like?</h2>
                <p className="text-sm text-muted-foreground">Investors fund the next milestone, not the vision. Be specific.</p>
                <div className="space-y-2">
                  {data.milestones.map((m, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2">
                      <input className={inputCls} placeholder="Month X" value={m.when} onChange={(e) => update("milestones", data.milestones.map((x, j) => j === i ? { ...x, when: e.target.value } : x))} />
                      <input className={`${inputCls} col-span-2`} placeholder="Milestone description" value={m.what} onChange={(e) => update("milestones", data.milestones.map((x, j) => j === i ? { ...x, what: e.target.value } : x))} />
                    </div>
                  ))}
                  {data.milestones.length < 6 && (
                    <button onClick={() => update("milestones", [...data.milestones, { when: "", what: "" }])} className="text-sm text-terracotta font-semibold">+ Add milestone</button>
                  )}
                </div>
              </>
            )}

            {step === 8 && (
              <>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">Who is building this — and what are you raising?</h2>
                <p className="text-sm text-muted-foreground">Indian VCs say: "We bet on the jockey." Show domain unfair advantage.</p>
                <div>
                  <label className={labelCls}>Company name</label>
                  <input className={inputCls} placeholder="Your venture's name" value={data.companyName} onChange={(e) => update("companyName", e.target.value)} />
                </div>
                <div className="space-y-2">
                  {data.team.map((m, i) => (
                    <div key={i} className="grid sm:grid-cols-2 gap-2 border border-foreground/20 p-3">
                      <input className={inputCls} placeholder="Name" value={m.name} onChange={(e) => update("team", data.team.map((x, j) => j === i ? { ...x, name: e.target.value } : x))} />
                      <input className={inputCls} placeholder="Role" value={m.role} onChange={(e) => update("team", data.team.map((x, j) => j === i ? { ...x, role: e.target.value } : x))} />
                      <input className={`${inputCls} sm:col-span-2`} placeholder="Background (e.g. ex-Flipkart, IIT Madras)" value={m.bg} onChange={(e) => update("team", data.team.map((x, j) => j === i ? { ...x, bg: e.target.value } : x))} />
                    </div>
                  ))}
                  {data.team.length < 4 && (
                    <button onClick={() => update("team", [...data.team, { name: "", role: "", bg: "", linkedin: "" }])} className="text-sm text-terracotta font-semibold">+ Add team member</button>
                  )}
                </div>
                <div className="border-t-2 border-foreground/20 pt-5 mt-5">
                  <h3 className="section-label text-terracotta mb-4">RAISE DETAILS</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>How much are you raising? (₹)</label>
                      <input className={inputCls} placeholder="e.g. 1.5 Cr" value={data.raiseAmount} onChange={(e) => update("raiseAmount", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelCls}>Post-money valuation (₹)</label>
                      <input className={inputCls} placeholder="e.g. 12 Cr" value={data.valuation} onChange={(e) => update("valuation", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelCls}>Stage</label>
                      <select className={inputCls} value={data.stage} onChange={(e) => update("stage", e.target.value)}>
                        {["Pre-Seed", "Seed", "Bridge", "Series A"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Use of funds</label>
                      <input className={inputCls} placeholder="Hire, build, market" value={data.useOfFunds} onChange={(e) => update("useOfFunds", e.target.value)} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-10 pt-6 border-t-2 border-foreground/10">
          <button onClick={back} disabled={step === 0} className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <button onClick={next} className="inline-flex items-center gap-2 bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground uppercase tracking-wider hover:opacity-90">
            {step === steps.length - 1 ? "Generate My Deck" : "Continue"} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
