import { Layers, PieChart, FileText, Map, Newspaper } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const products = [
  {
    icon: Layers,
    name: "Neev",
    category: "Lean LaunchPad Platform",
    badge: { label: "Live", cls: "bg-terracotta text-cream" },
    borderStyle: "border-solid",
    description:
      "A structured week-by-week platform where founders build Business Model Canvases, log customer interviews, and submit weekly check-ins. Admins monitor every team's progress across the cohort.",
    link: "Explore Neev →",
    href: "https://neev.bhaglabs.com",
  },
  {
    icon: PieChart,
    name: "Hissa",
    category: "Startup Equity Calculator",
    badge: { label: "Live", cls: "bg-terracotta text-cream" },
    borderStyle: "border-solid",
    description:
      "Equity tools for the Indian startup ecosystem — ESOP valuation, co-founder splits, dilution simulation, India-specific ESOP tax, and ESOP pool planning. Client-side, all currency in ₹.",
    link: "Try Hissa →",
    href: "https://hissa.bhaglabs.com",
  },
  {
    icon: FileText,
    name: "Pitchwala",
    category: "AI Pitch Deck Builder",
    badge: { label: "New", cls: "bg-ochre text-forest" },
    borderStyle: "border-dashed",
    description:
      "9 questions, 10 slides. A guided wizard that turns founder intent into an investor-ready deck — framed for how Indian VCs actually evaluate seed and pre-seed bets.",
    link: "Build a Deck →",
    href: "https://pitchwala.bhaglabs.com",
  },
  {
    icon: Map,
    name: "Yantra",
    category: "AI Agents & Business Solutions Marketplace",
    badge: { label: "New", cls: "bg-ochre text-forest" },
    borderStyle: "border-dashed",
    description:
      "A marketplace of proprietary AI agents (video, social, newsletter, outbound) and curated business solutions (logistics, payments, legal, marketing) — co-sold against the action plan from your feasibility report. Agents run on BHAG Labs' own GCP infra; partner solutions are commission-rev-shared.",
    link: "Get a Plan →",
    href: "https://yantra.bhaglabs.com",
  },
  {
    icon: Newspaper,
    name: "Bazaar",
    category: "The Weekly Newsletter",
    badge: { label: "Newsletter", cls: "bg-forest text-cream" },
    borderStyle: "border-dashed",
    description:
      "A weekly broadsheet on India's startup, VC, and policy economy. Funding signals, regulatory shifts, and one actionable deal — every Sunday morning. Free, always.",
    link: "Subscribe →",
    href: "https://bazaar.bhaglabs.com",
  },
];

const SolutionsSection = () => (
  <AnimatedSection id="solutions" className="section-padding section-light paper-texture">
    <div className="relative z-10 max-w-6xl mx-auto">
      <SectionLabel>What We Build</SectionLabel>
      <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl uppercase leading-[1.05] mb-4 text-foreground">
        A Complete Operating System for{" "}
        <span className="text-terracotta">Indian Founders.</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mb-16 text-base leading-relaxed">
        Five purpose-built products for every stage of the founder journey — from first hypothesis to bank-ready DPR to investor-ready deck.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className={`p-7 flex flex-col bg-cream border-2 border-foreground ${p.borderStyle} hover:bg-cream-dark/40 transition-colors group`}
          >
            <div className="flex items-start justify-between mb-5">
              <p.icon className="w-7 h-7 text-terracotta" />
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold px-2 py-1 ${p.badge.cls}`}>
                {p.badge.label}
              </span>
            </div>
            <span className="section-label text-muted-foreground mb-2">{p.category}</span>
            <h3 className="font-heading font-bold text-3xl text-foreground mb-3">{p.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
            <span className="mt-5 text-sm font-semibold text-terracotta group-hover:text-foreground transition-colors tracking-wide">
              {p.link}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default SolutionsSection;
