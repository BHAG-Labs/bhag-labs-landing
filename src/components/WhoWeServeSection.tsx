import { GraduationCap, Rocket, Building, Briefcase, FlaskConical, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const segments = [
  {
    icon: GraduationCap,
    title: "Universities & Colleges",
    desc: "Run entrepreneurship courses, capstone projects, and innovation cells with structured tools. Give faculty real-time visibility into what every student team is doing — and actually grade on evidence, not vibes.",
  },
  {
    icon: Rocket,
    title: "Accelerators & Incubators",
    desc: "Manage cohorts of 10 to 100 startups with a single platform. Track hypothesis validation progress, mentorship engagement, and demo-day readiness across your entire portfolio.",
  },
  {
    icon: Building,
    title: "Government & Public-Sector Programs",
    desc: "Support initiatives like national innovation missions, Smart City challenges, and public R&D commercialization programs with auditable, structured venture-building workflows.",
  },
  {
    icon: Briefcase,
    title: "Corporate Innovation Labs",
    desc: "Give intrapreneurship teams the same Lean LaunchPad discipline used by the best startup programs. Track internal ventures from idea to pilot to business unit.",
  },
  {
    icon: FlaskConical,
    title: "Research Commercialization Offices",
    desc: "Help researchers and PhD students translate deep-tech breakthroughs into market-ready ventures using structured customer discovery and business model validation.",
  },
  {
    icon: Users,
    title: "Student Entrepreneurship Clubs",
    desc: "Empower student-run E-Cells, hackathon organizers, and startup clubs with free or low-cost access to structured venture-building tools that look and feel professional.",
  },
];

const WhoWeServeSection = () => (
  <AnimatedSection id="who-we-serve" className="section-padding">
    <div className="max-w-7xl mx-auto text-center">
      <SectionLabel>Built For</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">
        Built for Everyone Who Builds{" "}
        <span className="gradient-text">the Builders.</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {segments.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="gradient-border glow-card rounded-xl p-6 text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default WhoWeServeSection;
