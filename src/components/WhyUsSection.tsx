import { BookOpen, UsersRound, LayoutDashboard, GitFork, Shield, Cpu } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const features = [
  { icon: BookOpen, title: "Methodology-First", desc: "We encode the Lean LaunchPad, Business Model Canvas, and Customer Development methodology directly into the workflow." },
  { icon: UsersRound, title: "Built for Cohorts", desc: "Designed for cohort-based programs — multiple teams, mentors, check-in cycles, and demo days." },
  { icon: LayoutDashboard, title: "Admin Superpowers", desc: "Real-time dashboards showing hypotheses validated, interviews completed, pivots logged, and mood trends." },
  { icon: GitFork, title: "Structured Pivots", desc: "Every version of the Business Model Canvas is preserved, with pivot notes explaining the evolution." },
  { icon: Shield, title: "Privacy & Roles", desc: "Row-level security ensures clean data boundaries — critical for academic integrity and multi-stakeholder programs." },
  { icon: Cpu, title: "AI-Ready", desc: "Built to integrate AI tools — from hypothesis generation to insight analysis — without compromising the methodology." },
];

const WhyUsSection = () => (
  <AnimatedSection id="why-us" className="section-padding section-light paper-texture">
    <div className="relative z-10 max-w-5xl mx-auto">
      <SectionLabel>Why Us</SectionLabel>
      <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl uppercase leading-[1.05] mb-16 text-foreground">
        Why Programs Choose{" "}
        <span className="text-terracotta">BHAG Labs.</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-2 border-foreground">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="p-6 border-b border-r border-foreground/20 hover:bg-cream-dark transition-colors duration-200"
          >
            <f.icon className="w-5 h-5 text-terracotta mb-4" />
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default WhyUsSection;
