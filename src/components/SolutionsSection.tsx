import { Boxes, Calculator } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const products = [
  {
    icon: Boxes,
    name: "Neev",
    category: "Lean LaunchPad Platform",
    description:
      "A structured week-by-week platform where founders build Business Model Canvases, state hypotheses, log customer interviews, submit weekly check-ins, and receive mentor feedback. Admins get a dashboard to monitor every team's progress across the cohort.",
    link: "Explore Neev →",
    href: "#neev",
  },
  {
    icon: Calculator,
    name: "Hissa",
    category: "Startup Equity Calculator",
    description:
      "A suite of equity tools built for the Indian startup ecosystem — ESOP valuation, co-founder equity splits, dilution simulation, India-specific ESOP tax calculations, and ESOP pool planning. All calculations client-side, all currency in ₹.",
    link: "Try Hissa →",
    href: "/hissa",
  },
];

const SolutionsSection = () => (
  <AnimatedSection id="solutions" className="section-padding section-light paper-texture">
    <div className="relative z-10 max-w-5xl mx-auto">
      <SectionLabel>What We Build</SectionLabel>
      <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl uppercase leading-[1.05] mb-4 text-foreground">
        A Complete Operating System for{" "}
        <span className="text-terracotta">Innovation Programs.</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mb-16 text-base leading-relaxed">
        BHAG Labs builds purpose-built software for every stage of the startup education journey —
        from first hypothesis to investor-ready pitch.
      </p>

      <div className="grid sm:grid-cols-2 border-2 border-foreground">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`p-8 flex flex-col ${i === 0 ? "sm:border-r-2 border-b-2 sm:border-b-0 border-foreground" : ""}`}
          >
            <div className="mb-6">
              <span className="section-label text-muted-foreground">{p.category}</span>
            </div>
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">{p.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
            <a href={p.href} className="mt-6 text-sm font-semibold text-terracotta hover:text-foreground transition-colors tracking-wide">
              {p.link}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default SolutionsSection;
