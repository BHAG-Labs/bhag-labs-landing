import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import BhagMark from "@/components/BhagMark";
import AnimatedSection from "@/components/AnimatedSection";
import DiamondDivider from "@/components/DiamondDivider";
import { CornerFrame, BulletRhythm } from "@/components/BhagMotifs";

// TODO(kartikeya): point this at the live DOSSIER app URL when it's ready.
// Everything on this page links through this one constant.
const APP_URL = "https://app.bhaglabs.com/?utm_source=landing&utm_campaign=dossier";
const SIGINT_URL = "https://sigint.bhaglabs.com";

const EXAMPLE_BRIEF =
  "We build cold-chain storage for small dairy farmers in tier-2 India. " +
  "Farmers lose a third of their produce to spoilage; we cut that to 4% and " +
  "charge per crate, per week.";

const EXAMPLE_CHIPS = [
  "UPI-native bookkeeping for kirana stores",
  "AI copilot for GST filings",
  "Battery-swap network for e-rickshaws",
];

const DECK_SECTIONS = [
  {
    title: "The Narrative",
    desc: "Problem, insight, and why now — told in the order investors are trained to hear it.",
  },
  {
    title: "Market Maths",
    desc: "TAM, SAM and SOM sized honestly from your wedge, not a consultant's hockey stick.",
  },
  {
    title: "Business Model",
    desc: "How money moves: pricing, margins, and the loop that compounds them.",
  },
  {
    title: "Go-to-Market",
    desc: "The path to your first thousand customers, and who you steal them from.",
  },
  {
    title: "The Numbers",
    desc: "Three-year projections with assumptions spelled out, ready to be defended.",
  },
  {
    title: "The Ask",
    desc: "Round size, use of funds, and the milestones the money must buy.",
  },
];

const REASONS = [
  {
    k: "01",
    title: "Two minutes, not two weeks",
    desc: "The average founder loses a fortnight to their first deck. DOSSIER hands you a complete draft before your chai cools.",
  },
  {
    k: "02",
    title: "Built the way investors read",
    desc: "The structure follows how funds actually evaluate: narrative first, numbers close, ask explicit. No decoration, no filler slides.",
  },
  {
    k: "03",
    title: "A script, not just slides",
    desc: "Every slide ships with a word-for-word talk track, timed for a tight pitch. You rehearse a story, not bullet points.",
  },
  {
    k: "04",
    title: "Yours to sharpen",
    desc: "DOSSIER gets you to the 90% draft in one pass. Edit every line, swap every number, export and go.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Brief the lab",
    desc: "Type what you're building, who it's for, and how it earns. Two or three sentences is enough — that's the whole input.",
  },
  {
    n: "02",
    title: "The dossier assembles",
    desc: "Your brief is expanded into a detailed, investor-ready deck: narrative, market, model, go-to-market, numbers, ask — plus the speaker script for every slide.",
  },
  {
    n: "03",
    title: "Walk in armed",
    desc: "Review, edit, export. From first keystroke to a deck you could present: under two minutes.",
  },
];

const Nav = () => {
  const [dark, setDark] = useDarkMode();
  const [open, setOpen] = useState(false);
  const links = [
    { label: "What's inside", href: "#inside" },
    { label: "How it works", href: "#how" },
    { label: "SIGINT", href: SIGINT_URL },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 leading-none">
          <BhagMark size={28} mode={dark ? "dark" : "light"} className="shrink-0" />
          <span className="flex flex-col">
            <span className="font-heading font-bold text-xl text-foreground tracking-tight">
              DOSSIER
            </span>
            <span className="text-[10px] text-muted-foreground font-subheading">
              by BHAG Labs
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href={APP_URL}
            className="bg-foreground px-6 py-2.5 text-sm font-semibold text-background hover:opacity-90 transition-opacity tracking-wide uppercase"
          >
            Build your dossier
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 text-foreground"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t-2 border-foreground bg-background px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href={APP_URL}
            className="bg-foreground px-6 py-2.5 text-sm font-semibold text-background text-center uppercase tracking-wide"
          >
            Build your dossier
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[88vh] flex items-center justify-center pt-24 pb-16 section-light overflow-hidden">
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, hsl(var(--terracotta) / 0.14) 0%, transparent 55%)",
      }}
    />
    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
      >
        BHAG Labs &middot; File No. 001 &middot; For founders raising
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-heading font-black text-5xl sm:text-6xl md:text-8xl uppercase leading-[0.95] tracking-tight mb-8 text-foreground"
      >
        Three sentences in.
        <br />
        <span className="text-terracotta">An investor-ready deck</span> out.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-subheading italic"
      >
        Describe your startup in two or three sentences. DOSSIER assembles a
        detailed, investor-ready pitch deck — with a word-for-word speaker
        script — in under two minutes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-2xl mx-auto mb-8"
      >
        <CornerFrame inset className="bg-background/60 p-1">
          <div className="text-left p-5">
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Your brief &middot; that's all we need
            </div>
            <p className="text-sm md:text-base text-foreground leading-relaxed font-mono">
              {EXAMPLE_BRIEF}
              <span className="inline-block w-2 h-4 ml-0.5 bg-terracotta align-middle animate-pulse" />
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {EXAMPLE_CHIPS.map((c) => (
                  <span
                    key={c}
                    className="text-[11px] px-2.5 py-1 border border-muted-foreground/40 text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <a
                href={APP_URL}
                className="shrink-0 inline-flex items-center gap-2 bg-foreground px-6 py-3 font-semibold text-background hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
              >
                Build my dossier <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </CornerFrame>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        No design skills &middot; No blank slides &middot; No ₹50,000 deck consultant
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex justify-center mt-10 text-ochre"
      >
        <BulletRhythm />
      </motion.div>
    </div>
  </section>
);

const Inside = () => (
  <AnimatedSection id="inside" className="py-20 md:py-28 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
          Contents of the file
        </div>
        <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tight text-foreground">
          What's inside every dossier
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/20 border-2 border-foreground">
        {DECK_SECTIONS.map((s, i) => (
          <div key={s.title} className="bg-background p-7">
            <div className="text-xs font-mono text-terracotta mb-3">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-2 border-terracotta bg-terracotta/5 p-6 md:p-8 md:flex md:items-center md:justify-between gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-terracotta mb-2">
            Plus, in every dossier
          </div>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-1">
            The Script
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
            A word-for-word talk track for every slide, timed for a tight
            pitch. Walk into the room knowing exactly what you'll say — and
            what you'll answer when they interrupt.
          </p>
        </div>
        <a
          href={APP_URL}
          className="mt-5 md:mt-0 shrink-0 inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors text-sm uppercase tracking-wider"
        >
          See a sample <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </AnimatedSection>
);

const How = () => (
  <AnimatedSection id="how" className="py-20 md:py-28 px-6 section-light">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <div className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
          Standard operating procedure
        </div>
        <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tight text-foreground">
          Brief in. Deck out.
        </h2>
        <p className="text-muted-foreground font-subheading italic mt-4">
          From uncertainty to a rehearsable pitch, in three steps and two minutes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {STEPS.map((s) => (
          <div key={s.n} className="relative border-2 border-foreground bg-background p-7">
            <div className="font-heading font-black text-4xl text-terracotta mb-4">{s.n}</div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <DiamondDivider color="hsl(var(--ochre))" />
      </div>
    </div>
  </AnimatedSection>
);

const Why = () => (
  <AnimatedSection className="py-20 md:py-28 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
          Why founders use it
        </div>
        <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tight text-foreground">
          The deck is never the point.
          <br className="hidden md:block" /> The meeting is.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {REASONS.map((r) => (
          <div key={r.k} className="border-2 border-foreground p-7 bg-background">
            <div className="text-xs font-mono text-terracotta mb-3">{r.k}</div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const SigintStrip = () => (
  <section className="py-14 px-6" style={{ background: "hsl(var(--forest))" }}>
    <div className="max-w-5xl mx-auto md:flex md:items-center md:justify-between gap-8">
      <div>
        <div className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "hsl(var(--ochre))" }}>
          From the same lab
        </div>
        <p className="text-background text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "hsl(40 33% 92%)" }}>
          <span className="font-heading font-bold">SIGINT.</span> Daily signals
          intelligence on India's startup economy — the funding, regulation and
          market moves that shape your pitch. Free, every morning.
        </p>
      </div>
      <a
        href={SIGINT_URL}
        className="mt-6 md:mt-0 shrink-0 inline-flex items-center gap-2 border-2 px-6 py-3 font-semibold transition-colors text-sm uppercase tracking-wider"
        style={{ borderColor: "hsl(40 33% 92%)", color: "hsl(40 33% 92%)" }}
      >
        Read today's report <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </section>
);

const FinalCta = () => (
  <AnimatedSection className="py-24 px-6 section-light text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-6">
        Your next investor meeting is closer than your deck.
      </h2>
      <p className="text-muted-foreground font-subheading italic mb-10">
        Fix that in the next two minutes.
      </p>
      <a
        href={APP_URL}
        className="inline-flex items-center gap-2 bg-foreground px-10 py-4 font-semibold text-background hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
      >
        Build your dossier <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </AnimatedSection>
);

const Foot = () => (
  <footer className="border-t-2 border-foreground py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex items-center gap-3">
        <BhagMark size={24} />
        <div className="text-sm text-muted-foreground">
          <span className="font-heading font-bold text-foreground">BHAG Labs</span> &middot; Made in Delhi, India
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wide text-muted-foreground">
        <a href={SIGINT_URL} className="hover:text-foreground transition-colors">SIGINT</a>
        <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
        <a href="/grievance" className="hover:text-foreground transition-colors">Grievance</a>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-6 text-[11px] text-muted-foreground/70 uppercase tracking-[0.2em]">
      The lab's other experiments remain classified. For now.
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Nav />
    <Hero />
    <Inside />
    <How />
    <Why />
    <SigintStrip />
    <FinalCta />
    <Foot />
  </div>
);

export default Index;
