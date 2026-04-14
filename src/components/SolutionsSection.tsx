import { Boxes, Calculator } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const products = [
  {
    icon: Boxes,
    name: "Neev",
    tagline: "The Lean LaunchPad Platform",
    description:
      "A structured week-by-week platform where founders build Business Model Canvases, state hypotheses, log customer interviews, submit weekly check-ins, and receive mentor feedback. Admins get a dashboard to monitor every team's progress across the cohort.",
    badge: "Live",
    link: "Explore Neev →",
    href: "#neev",
  },
  {
    icon: Calculator,
    name: "Hissa",
    tagline: "Startup Equity Calculator",
    description:
      "A suite of equity tools built for the Indian startup ecosystem — ESOP valuation, co-founder equity splits, dilution simulation, India-specific ESOP tax calculations, and ESOP pool planning. All calculations client-side, all currency in ₹.",
    badge: "Live",
    link: "Try Hissa →",
    href: "/hissa",
  },
];

const SolutionsSection = () => (
  <AnimatedSection id="solutions" className="section-padding">
    <div className="max-w-7xl mx-auto text-center">
      <SectionLabel>What We Build</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
        A Complete Operating System for{" "}
        <span className="gradient-text">Innovation Programs.</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
        BHAG Labs builds purpose-built software for every stage of the startup education journey —
        from first hypothesis to investor-ready pitch.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="gradient-border glow-card rounded-xl p-6 text-left flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <p.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="badge-live">{p.badge}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">{p.name}</h3>
            <p className="text-sm text-primary font-medium mb-3">{p.tagline}</p>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
            <a href={p.href} className="mt-4 text-sm font-semibold text-primary hover:underline">
              {p.link}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default SolutionsSection;
