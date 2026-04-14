import { Target, Map, FlaskConical, FileText, RefreshCw } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const steps = [
  { icon: Target, title: "Define the BHAG", desc: "Every venture starts with a Big Hairy Audacious Goal. Define the change you want to make in the world — and then systematically figure out how to get there." },
  { icon: Map, title: "Map Your Assumptions", desc: "Break your idea into a Business Model Canvas. Identify every assumption hiding in your plan — about customers, channels, revenue, partnerships, and costs." },
  { icon: FlaskConical, title: "Build Hypotheses & Test Them", desc: "Turn each assumption into a testable hypothesis. Define what evidence would validate or invalidate it. Get out of the building and start talking to real people." },
  { icon: FileText, title: "Log Evidence, Track Pivots", desc: "Record every customer interview. Tag insights to specific hypotheses. When the evidence says pivot, document what changed and why — creating a living history of your venture's evolution." },
  { icon: RefreshCw, title: "Report, Review, Repeat", desc: "Submit weekly check-ins. Receive mentor feedback. Review cohort-level analytics. The cycle repeats until you have a validated business model — or clear evidence that you need a new one." },
];

const MethodologySection = () => (
  <AnimatedSection className="section-padding">
    <div className="max-w-4xl mx-auto text-center">
      <SectionLabel>The Methodology</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">
        The Lean LaunchPad,{" "}
        <span className="gradient-text">Digitized and Supercharged.</span>
      </h2>
    </div>

    <div className="max-w-3xl mx-auto relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className={`relative flex items-start gap-6 mb-12 ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Number circle */}
          <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm md:mx-auto">
            {i + 1}
          </div>
          <div className={`flex-1 gradient-border rounded-xl p-5 ${i % 2 === 0 ? "md:text-right md:mr-8" : "md:text-left md:ml-8"}`}>
            <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
              <step.icon className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-foreground">{step.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </AnimatedSection>
);

export default MethodologySection;
