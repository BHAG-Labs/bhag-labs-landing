import { Boxes, GitBranch, Telescope, Award } from "lucide-react";
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
  },
  {
    icon: GitBranch,
    name: "Setu",
    tagline: "Mentor-Founder Matching Engine",
    description:
      "Algorithmically match mentors with founders based on domain expertise, industry, and stage. Track mentorship hours, session quality, and founder satisfaction — turning mentorship from ad-hoc to accountable.",
    badge: "Coming Soon",
  },
  {
    icon: Telescope,
    name: "Drishti",
    tagline: "AI-Powered Customer Discovery",
    description:
      "Generate hypothesis maps from a plain-English idea description. Run simulated customer interviews to stress-test your thinking before real conversations. Get interview question guides designed to reveal truth, not confirm bias.",
    badge: "Coming Soon",
  },
  {
    icon: Award,
    name: "PramaaN",
    tagline: "Venture Readiness Scorecard",
    description:
      "A structured scoring framework that evaluates startups across key dimensions — market validation evidence, team strength, business model clarity, traction metrics, and pitch quality. Helps programs identify which ventures are ready for the next stage.",
    badge: "Coming Soon",
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <span className={p.badge === "Live" ? "badge-live" : "badge-coming-soon"}>
                {p.badge}
              </span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">{p.name}</h3>
            <p className="text-sm text-primary font-medium mb-3">{p.tagline}</p>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
            {p.link && (
              <a href="#neev" className="mt-4 text-sm font-semibold text-primary hover:underline">
                {p.link}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default SolutionsSection;
