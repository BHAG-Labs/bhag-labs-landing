import { BookOpen, UsersRound, LayoutDashboard, GitFork, Shield, Cpu } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const features = [
  { icon: BookOpen, title: "Methodology-First", desc: "We don't just build software — we encode the Lean LaunchPad, Business Model Canvas, and Customer Development methodology directly into the workflow. Every feature exists to reinforce evidence-based venture building." },
  { icon: UsersRound, title: "Built for Cohorts, Not Solo Founders", desc: "Unlike generic project management tools, BHAG Labs is designed for the unique dynamics of cohort-based programs — multiple teams, mentors, check-in cycles, and demo days." },
  { icon: LayoutDashboard, title: "Admin Superpowers", desc: "Program managers and faculty get dashboards that show real-time progress across every team — hypotheses validated, interviews completed, pivots logged, and mood trends. No more chasing status updates." },
  { icon: GitFork, title: "Structured Pivots, Not Chaos", desc: "When teams pivot, we don't lose history. Every version of the Business Model Canvas is preserved, with pivot notes explaining the evolution. This is the institutional memory most programs lack." },
  { icon: Shield, title: "Privacy & Role Separation", desc: "Founders see only their own data. Admins see everything. Mentors see only what they need. Row-level security ensures clean data boundaries — critical for academic integrity and multi-stakeholder programs." },
  { icon: Cpu, title: "AI-Ready Architecture", desc: "Our platform is built to integrate AI-powered tools — from hypothesis generation and interview question design to insight analysis and venture scoring — without compromising the human-centered methodology." },
];

const WhyUsSection = () => (
  <AnimatedSection id="why-us" className="section-padding">
    <div className="max-w-7xl mx-auto text-center">
      <SectionLabel>Why Us</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">
        Why Innovation Programs Choose{" "}
        <span className="gradient-text">BHAG Labs.</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="gradient-border glow-card rounded-xl p-6 text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default WhyUsSection;
