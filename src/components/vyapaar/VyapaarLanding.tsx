import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const VyapaarLanding = ({ onStart }: { onStart: () => void }) => (
  <>
    <section className="section-padding section-light paper-texture relative">
      <div className="absolute inset-4 border border-foreground/10 pointer-events-none" />
      <div className="absolute inset-8 border-2 border-foreground/5 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="section-label text-terracotta inline-block mb-6">SOLUTION 04 — VYAPAAR</span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading font-black text-4xl sm:text-5xl md:text-7xl uppercase leading-[0.95] mb-8 text-forest"
        >
          From Idea to a Feasibility<br />
          <span className="text-terracotta">Plan That Ships.</span>
        </motion.h1>
        <p className="font-body text-base md:text-lg text-forest/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Generate a bank-ready DPR or investor-grade feasibility report in minutes — not weeks. Then find the partners who'll help you execute.
        </p>
        <button onClick={onStart} className="bg-primary px-10 py-4 font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-flex items-center gap-2 mb-12">
          Get My Plan <ArrowRight className="w-4 h-4" />
        </button>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider text-foreground/60">
          <span>₹0 — Free report</span>
          <span className="text-foreground/30">◆</span>
          <span>73.4M MSMEs need this</span>
          <span className="text-foreground/30">◆</span>
          <span>15 days → 15 minutes</span>
        </div>
      </div>
    </section>

    <section className="section-padding section-light">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="border-2 border-foreground p-8 border-l-[6px] border-l-forest">
          <span className="section-label text-forest mb-4 inline-block">FOR STARTUPS</span>
          <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Expanding to a new city? Launching a new vertical?</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Get a structured feasibility report with market size in your target geography, competitive density, sector unit economics, localization requirements, and a 90-day go-to-market roadmap.
          </p>
          <div className="text-xs uppercase tracking-wider text-forest/70">Series A+ ◆ VC-backed ◆ New city launches</div>
        </div>
        <div className="border-2 border-foreground p-8 border-l-[6px] border-l-ochre">
          <span className="section-label text-ochre mb-4 inline-block">FOR MSMEs &amp; FIRST-TIME FOUNDERS</span>
          <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Applying for a bank loan, PMEGP, or Mudra?</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            A consultant charges ₹5,000–₹50,000 and takes two weeks. Vyapaar generates a bank-compliant DPR in 15 minutes — DSCR, IRR, market demand, financial projections, regulatory notes, all included.
          </p>
          <div className="text-xs uppercase tracking-wider text-ochre/80">PMEGP ◆ Mudra ◆ Stand-Up India ◆ SBI</div>
        </div>
      </div>
    </section>

    <section className="section-padding section-dark">
      <div className="max-w-4xl mx-auto text-center">
        <span className="section-label text-ochre inline-block mb-6">THE GAP</span>
        <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase leading-[1.05] mb-6 text-cream">
          ₹89,000 Cr in Loan Applications Rejected Annually — Often Because of a Missing Document.
        </h2>
        <p className="text-cream/70 leading-relaxed">
          India's MSME credit gap exceeds ₹20 lakh crore. One of the most common rejection reasons isn't creditworthiness — it's an incomplete or improperly formatted DPR. Vyapaar fixes that.
        </p>
        <button onClick={onStart} className="mt-10 bg-primary px-10 py-4 font-semibold text-primary-foreground hover:opacity-90 text-sm uppercase tracking-wider inline-flex items-center gap-2">
          Generate My Report <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  </>
);

export default VyapaarLanding;
