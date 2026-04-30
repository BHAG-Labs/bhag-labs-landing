import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PitchwalaLanding = ({ onStart }: { onStart: () => void }) => (
  <>
    {/* Hero */}
    <section className="section-padding section-light paper-texture relative">
      <div className="absolute inset-4 border border-foreground/10 pointer-events-none" />
      <div className="absolute inset-8 border-2 border-foreground/5 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="section-label text-terracotta inline-block mb-6">SOLUTION 03 — PITCHWALA</span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading font-black text-4xl sm:text-5xl md:text-7xl uppercase leading-[0.95] mb-8 text-forest"
        >
          Turn Your Napkin Idea Into a Deck<br />
          Investors <span className="text-terracotta">Actually Read.</span>
        </motion.h1>
        <p className="font-body text-base md:text-lg text-forest/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          9 questions. 10 slides. Built for Indian investors, Indian markets, and the way Indian founders actually think.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button onClick={onStart} className="bg-primary px-8 py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2">
            Start Building <ArrowRight className="w-4 h-4" />
          </button>
          <a href="#sample" className="px-8 py-3.5 font-semibold border-2 border-forest text-forest hover:bg-forest hover:text-cream transition-colors text-sm uppercase tracking-wider">
            See How It Works
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider text-foreground/60">
          <span>9 guided questions</span>
          <span className="text-foreground/30">◆</span>
          <span>10 investor-ready slides</span>
          <span className="text-foreground/30">◆</span>
          <span>₹0 — Free to start</span>
        </div>
      </div>
    </section>

    {/* Problem */}
    <section className="section-padding section-dark">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="section-label text-ochre mb-6 inline-block">THE REALITY</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase leading-[1.05] mb-6 text-cream">
            Founders Spend 30 Hours on a Deck. Investors Spend 3 Minutes on It.
          </h2>
          <p className="text-cream/70 leading-relaxed">
            In 2025, Indian startups received 1,518 funding rounds — but investor selectivity grew sharply, with deal count falling nearly 39%. Sequoia, Blume, and Accel India report receiving hundreds of decks monthly. The ones that get meetings share one thing: a clear, honest narrative. Pitchwala helps you build that story — structured around how Indian VCs actually evaluate early-stage bets.
          </p>
        </div>
        <div className="space-y-4">
          {[
            ["Generic Canva template", "Narrative-first, investor-framed structure"],
            ["Blank slide, 2 AM panic", "Guided questions with Indian context hints"],
            ["No idea what slide 4 should say", "Clear 10-slide sequence every Indian VC expects"],
          ].map(([bad, good]) => (
            <div key={bad} className="border border-cream/20 p-5">
              <div className="text-sm text-cream/50 mb-2">✗ &nbsp; {bad}</div>
              <div className="text-sm text-ochre">✓ &nbsp; {good}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section id="sample" className="section-padding section-light paper-texture">
      <div className="max-w-5xl mx-auto">
        <span className="section-label text-terracotta inline-block mb-6">THE PROCESS</span>
        <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase leading-[1.05] mb-12 text-foreground">
          Three Steps to a Deck<br />Worth Sending.
        </h2>
        <div className="grid md:grid-cols-3 border-2 border-foreground">
          {[
            { n: "01", t: "Answer 9 Questions", d: "No design skills needed. Just answer honestly. The harder the question, the better your deck gets." },
            { n: "02", t: "Review Your 10 Slides", d: "Pitchwala structures your answers into a Cover → Problem → Solution → Market → Product → Traction → Business Model → Competition → Team → Ask flow." },
            { n: "03", t: "Download or Share", d: "Export as PDF or share a live link. Edit any slide before sending." },
          ].map((s, i) => (
            <div key={s.n} className={`p-8 ${i < 2 ? "md:border-r-2 border-b-2 md:border-b-0 border-foreground" : ""}`}>
              <div className="font-heading text-5xl text-terracotta mb-4">{s.n}</div>
              <h3 className="font-heading font-bold text-xl mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button onClick={onStart} className="bg-primary px-10 py-4 font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-flex items-center gap-2">
            Start Building Your Deck <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  </>
);

export default PitchwalaLanding;
