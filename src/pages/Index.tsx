import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import BhagMark from "@/components/BhagMark";
import AnimatedSection from "@/components/AnimatedSection";
import DiamondDivider from "@/components/DiamondDivider";
import { CornerFrame, BulletRhythm } from "@/components/BhagMotifs";

// The live app (repo: pitchwala, served at app.bhaglabs.com).
// Everything on this page links through this constant.
const APP_URL = "https://app.bhaglabs.com/?utm_source=landing&utm_campaign=deck";
const SIGINT_URL = "https://sigint.bhaglabs.com";

// Landing-side pricing display. The app charges by server-side geolocation;
// this timezone check only decides which prices to *show* here.
const IS_INDIA =
  typeof Intl !== "undefined" &&
  /Calcutta|Kolkata/.test(Intl.DateTimeFormat().resolvedOptions().timeZone ?? "");

// The animated brief in the hero types, edits, and rewrites its way through
// these. Consecutive ideas often share an opening on purpose: the cursor
// deletes back to the shared words and "fixes" the rest into a new company,
// which is the whole effect. Every idea is written like a founder answering
// the wizard: a plain claim and a real number.
const IDEAS: string[] = [
  "We build cold-chain storage for small dairy farms. Farmers lose a third of their milk to spoilage; we cut that to 4% and charge per crate, per week.",
  "We build cold-storage lockers for fishing harbors. The catch holds at 2°C from boat to buyer, and boats pay only for the hours they use.",
  "We run bookkeeping for neighborhood stores. Owners photograph their receipts and we close the books every month for less than an accountant charges for a day.",
  "We run payroll for ten-person restaurants. Tips and overtime are computed nightly, and the owner signs one screen on the 1st.",
  "We make an AI copilot for tax filings. It drafts the return from bank statements and flags the 12 deductions most filers miss.",
  "We make battery-swap stations for delivery fleets. A rider swaps in 90 seconds and rides another 80 kilometers.",
  "We match long-haul trucks with return loads. Empty miles drop from 40% to 11%, and the driver sees the payout before accepting.",
  "We sell software that reads factory sensor logs. A plant manager catches a failing motor nine days early instead of at 2 a.m.",
  "We help clinics text patients before they miss appointments. No-shows fell by half in the first month across our 40 pilot clinics.",
  "We turn restaurant surplus into next-day staff lunches for offices. Restaurants recover their costs and offices feed a team for $3 a plate.",
  "We insure gig couriers by the hour. Cover starts when the app goes online, from 30 cents an hour.",
  "We grade used phones with a 90-second camera scan. Resellers price stock on the spot, and buyer disputes fell 70% in our pilot.",
  "We rent rooftop solar to apartment buildings. Residents cut their power bill 18% and pay for the panels out of the savings.",
  "We make inventory software for pharmacies. Expiring stock gets flagged 60 days out and moved before it becomes a write-off.",
  "We screen tenants for small landlords. Income and reference checks come back the same day, with the applicant's consent built in.",
  "We teach spoken English over 15-minute phone calls. Learners practice with a live coach on their commute, for the price of a bus pass.",
  "We run buy-back programs for fashion brands. The brand adds one button to its store and we handle the grading and the relisting.",
  "We automate visa paperwork for hiring abroad. HR uploads an offer letter and gets the filing packet back in 48 hours.",
  "We watch construction sites through fixed cameras. Owners see each day's progress against the plan and catch delays two weeks sooner.",
  "We make a wallet for cross-border freelancers. Clients pay in dollars, the freelancer withdraws in local currency the same day, and the fee is 1%.",
  "We run soil tests for smallholder farms. A field report in five days tells the farmer which fertilizer to skip; most save more than the test costs on their first order.",
  "We sell kitchen-display software for cloud kitchens. Orders from every delivery app land on one screen and mistakes fall by a third.",
];

// Fast typewriter: delete back to the shared prefix of the next idea, then
// type the rest. Quick on purpose; the section should feel like a founder
// racing through possibilities.
const TYPE_MS = 18;
const DELETE_MS = 9;
const HOLD_MS = 1000;

const TypedBrief = () => {
  const [display, setDisplay] = useState(IDEAS[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    (async () => {
      let current = IDEAS[0];
      let idx = 0;
      await wait(HOLD_MS);
      while (!cancelled) {
        idx = (idx + 1) % IDEAS.length;
        const target = IDEAS[idx];
        let common = 0;
        while (
          common < current.length &&
          common < target.length &&
          current[common] === target[common]
        ) {
          common++;
        }
        while (current.length > common && !cancelled) {
          current = current.slice(0, -1);
          setDisplay(current);
          await wait(DELETE_MS);
        }
        while (current.length < target.length && !cancelled) {
          current = target.slice(0, current.length + 1);
          setDisplay(current);
          await wait(TYPE_MS + Math.random() * 14);
        }
        await wait(HOLD_MS);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <p className="text-sm md:text-base text-foreground leading-relaxed font-mono min-h-[7.5rem] sm:min-h-[6rem] md:min-h-[4.5rem]">
      {display}
      <span className="inline-block w-2 h-4 ml-0.5 bg-terracotta align-middle animate-pulse" />
    </p>
  );
};

// Real quotes from real founders go here — name, company, and what they said.
// The section shows an invitation card until the first one lands.
const TESTIMONIALS: { quote: string; name: string; company: string }[] = [
  // { quote: "…", name: "…", company: "…" },
];

const DECK_SECTIONS = [
  {
    title: "The Story",
    desc: "A named customer, what today's options cost them, and the moment those options break. Investors hear the person before they hear the numbers.",
  },
  {
    title: "Your Solution",
    desc: "What you built, in one quotable line, and the three features that matter most.",
  },
  {
    title: "The Competition",
    desc: "Who else solves this, and one chart that shows where you win.",
  },
  {
    title: "Market Size",
    desc: "How many people you can reach and what that's worth. The math starts from your own numbers, and anything estimated says so on the slide.",
  },
  {
    title: "Model & Traction",
    desc: "How the money comes in and the proof it's working, down to margins and the cost of winning one customer.",
  },
  {
    title: "Roadmap & The Ask",
    desc: "Milestones behind and ahead, the raise, what it buys, and the team spending it.",
  },
];

const REASONS = [
  {
    k: "01",
    title: "Two weeks of deck-building, skipped",
    desc: "The average founder loses two weeks to their first deck. You get a complete draft before your coffee cools.",
  },
  {
    k: "02",
    title: "Built the way investors read",
    desc: "Every deck follows the same 15-slide structure investors expect, opening on the customer's story and closing on an explicit ask. There are no filler slides padding the count.",
  },
  {
    k: "03",
    title: "The script comes with it",
    desc: "Every deck ships with a word-for-word talk track in a 3-minute and a 5-minute version, mapped slide by slide. When someone interrupts you on slide 9, you know the sentence you were about to say.",
  },
  {
    k: "04",
    title: "Honest by design",
    desc: "We never invent traction or customer quotes. Estimates are labelled as estimates on the slide itself, so when an investor asks where a number came from, you have an answer.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Answer seven questions",
    desc: "What you're building, who it's for, what's broken, how it earns. Plain language, whatever you have. Or point us at your README and most of it fills itself in.",
  },
  {
    n: "02",
    title: "The deck assembles",
    desc: "Your answers are mapped into the fixed 15-slide investor deck, from the opening story to the ask, plus the speaker script for every slide. Generation takes a minute or two.",
  },
  {
    n: "03",
    title: "Walk in armed",
    desc: "Download the deck and the script, then rehearse. When your pitch sharpens, edit your answers and generate again.",
  },
];

const Nav = () => {
  const [dark, setDark] = useDarkMode();
  const [open, setOpen] = useState(false);
  const links = [
    { label: "What's inside", href: "#inside" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "SIGINT", href: SIGINT_URL },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 leading-none">
          <BhagMark size={28} mode={dark ? "dark" : "light"} className="shrink-0" />
          <span className="flex flex-col">
            <span className="font-heading font-bold text-xl text-foreground tracking-tight">
              BHAG Labs
            </span>
            <span className="text-[10px] text-muted-foreground font-subheading">
              investor-ready pitch decks
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
            Get your deck
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
            Get your deck
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
        For founders raising
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-heading font-black text-5xl sm:text-6xl md:text-8xl uppercase leading-[0.95] tracking-tight mb-8 text-foreground"
      >
        Seven answers in.
        <br />
        <span className="text-terracotta">An investor-ready deck</span> out.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-subheading italic"
      >
        Answer seven quick questions about your startup, in plain language.
        BHAG Labs maps them into a 15-slide investor deck and a word-for-word
        speaker script, in minutes.
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
              Answers like this are all we need
            </div>
            <TypedBrief />
            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground max-w-xs">
                Whatever you're building, the deck starts from answers this
                plain.
              </p>
              <a
                href={APP_URL}
                className="shrink-0 inline-flex items-center gap-2 bg-foreground px-6 py-3 font-semibold text-background hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
              >
                Get my deck <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </CornerFrame>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed"
      >
        You can start right now, without an account. The first thing you make
        here is the outline of your own deck, and it costs nothing to see it.
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
          What's inside every deck
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
            Plus, in every deck
          </div>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-1">
            The Script
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
            A word-for-word talk track for every slide, timed for a tight
            pitch. Walk into the room knowing exactly what you'll say, and
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
          From loose answers to a rehearsable pitch, in three steps.
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

const PricingCard = ({
  kicker,
  price,
  desc,
  highlight,
}: {
  kicker: string;
  price: string;
  desc: string;
  highlight?: boolean;
}) => (
  <div
    className={
      highlight
        ? "border-2 border-terracotta bg-terracotta/5 p-8 text-center"
        : "border-2 border-foreground bg-background p-8 text-center"
    }
  >
    <div
      className={`text-xs uppercase tracking-[0.25em] mb-3 ${highlight ? "text-terracotta" : "text-muted-foreground"}`}
    >
      {kicker}
    </div>
    <div className="font-heading font-black text-5xl text-foreground mb-2">{price}</div>
    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
    <a
      href={APP_URL}
      className={
        highlight
          ? "inline-flex items-center gap-2 bg-foreground px-6 py-3 font-semibold text-background hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          : "inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors text-sm uppercase tracking-wider"
      }
    >
      Get your deck <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

const Pricing = () => (
  <AnimatedSection id="pricing" className="py-20 md:py-28 px-6 section-light">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <div className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
          Pricing
        </div>
        <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tight text-foreground">
          Pay for the deck, and only the deck.
        </h2>
        <p className="text-muted-foreground font-subheading italic mt-4 max-w-2xl mx-auto">
          The seven questions cost nothing, and you can walk through all of
          them before deciding anything. You pay once, when you generate the
          deck itself, and a credit you don't use today is still yours next
          year. There is no subscription behind any of this.
        </p>
      </div>

      {IS_INDIA ? (
        <div className="grid sm:grid-cols-2 gap-6">
          <PricingCard
            kicker="Starter"
            price="₹99"
            desc="15 slides and the 3-minute script. Download and present."
          />
          <PricingCard
            highlight
            kicker="Complete"
            price="₹399"
            desc="The deck, the 3-minute and 5-minute scripts, and autofill: point us at your GitHub repo or README and most questions answer themselves."
          />
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <PricingCard
            highlight
            kicker="Complete"
            price="$9.99"
            desc="The deck, the 3-minute and 5-minute scripts, and autofill: point us at your GitHub repo or README and most questions answer themselves."
          />
        </div>
      )}

      <p className="text-center text-sm text-muted-foreground max-w-xl mx-auto mt-8 leading-relaxed">
        Prices follow where you are, and checkout shows yours before you
        confirm. If a purchase ever goes wrong, write to{" "}
        <a href="mailto:hello@bhaglabs.com" className="underline hover:text-foreground">
          hello@bhaglabs.com
        </a>{" "}
        and a person will fix it.
      </p>
    </div>
  </AnimatedSection>
);

const Testimonials = () => (
  <AnimatedSection className="py-20 md:py-28 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
          Field reports
        </div>
        <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tight text-foreground">
          From founders who pitched
        </h2>
      </div>

      {TESTIMONIALS.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="border-2 border-foreground bg-background p-7">
              <blockquote className="font-subheading italic text-lg text-foreground leading-relaxed mb-4">
                “{t.quote}”
              </blockquote>
              <figcaption className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.name} &middot; {t.company}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="max-w-2xl mx-auto border-2 border-dashed border-foreground/40 p-8 text-center">
          <p className="font-subheading italic text-lg text-foreground mb-2">
            This wall is reserved for founders who walked into the room with
            one of these decks.
          </p>
          <p className="text-sm text-muted-foreground">
            Pitched with one? Tell us how it went:{" "}
            <a href="mailto:hello@bhaglabs.com" className="underline hover:text-foreground">
              hello@bhaglabs.com
            </a>
          </p>
        </div>
      )}
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
          <span className="font-heading font-bold">SIGINT.</span> Our free
          daily briefing on the startup economy, covering the funding rounds
          and rule changes that shape a pitch. It lands in your inbox every
          morning at 9.
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
        Fix that this afternoon.
      </p>
      <a
        href={APP_URL}
        className="inline-flex items-center gap-2 bg-foreground px-10 py-4 font-semibold text-background hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
      >
        Get your deck <ArrowRight className="w-4 h-4" />
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
          <span className="font-heading font-bold text-foreground">BHAG Labs</span>
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
    <Pricing />
    <Testimonials />
    <SigintStrip />
    <FinalCta />
    <Foot />
  </div>
);

export default Index;
