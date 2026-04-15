import { GraduationCap, Rocket, Building, Briefcase, FlaskConical, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const segments = [
  {
    icon: GraduationCap,
    title: "Universities & Colleges",
    desc: "Run entrepreneurship courses, capstone projects, and innovation cells with structured tools. Give faculty real-time visibility into what every student team is doing.",
  },
  {
    icon: Rocket,
    title: "Accelerators & Incubators",
    desc: "Manage cohorts of 10 to 100 startups with a single platform. Track hypothesis validation progress and demo-day readiness across your entire portfolio.",
  },
  {
    icon: Building,
    title: "Government & Public-Sector",
    desc: "Support national innovation missions and public R&D commercialization programs with auditable, structured venture-building workflows.",
  },
  {
    icon: Briefcase,
    title: "Corporate Innovation Labs",
    desc: "Give intrapreneurship teams the same Lean LaunchPad discipline used by the best startup programs.",
  },
  {
    icon: FlaskConical,
    title: "Research Offices",
    desc: "Help researchers translate deep-tech breakthroughs into market-ready ventures using structured customer discovery.",
  },
  {
    icon: Users,
    title: "Student E-Cells",
    desc: "Empower student-run E-Cells and startup clubs with structured venture-building tools that look and feel professional.",
  },
];

const WhoWeServeSection = () => (
  <AnimatedSection id="who-we-serve" className="section-padding section-light">
    <div className="max-w-5xl mx-auto">
      <SectionLabel>Built For</SectionLabel>
      <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl uppercase leading-[1.05] mb-16 text-foreground">
        Built for Everyone Who Builds{" "}
        <span className="text-terracotta">the Builders.</span>
      </h2>

      {/* Grid table layout — shared borders like Subko label */}
      <div className="border-2 border-foreground grid sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="p-6 border-b border-r border-foreground/20 hover:bg-cream-dark transition-colors duration-200"
          >
            <s.icon className="w-5 h-5 text-terracotta mb-4" />
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default WhoWeServeSection;
