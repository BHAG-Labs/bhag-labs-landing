import { Target, Map, FlaskConical, FileText, RefreshCw } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const steps = [
  { icon: Target, title: "Define the BHAG", desc: "Every venture starts with a Big Hairy Audacious Goal. Define the change you want to make in the world — and then systematically figure out how to get there." },
  { icon: Map, title: "Map Your Assumptions", desc: "Break your idea into a Business Model Canvas. Identify every assumption hiding in your plan — about customers, channels, revenue, partnerships, and costs." },
  { icon: FlaskConical, title: "Build Hypotheses & Test Them", desc: "Turn each assumption into a testable hypothesis. Define what evidence would validate or invalidate it. Get out of the building and start talking to real people." },
  { icon: FileText, title: "Log Evidence, Track Pivots", desc: "Record every customer interview. Tag insights to specific hypotheses. When the evidence says pivot, document what changed and why." },
  { icon: RefreshCw, title: "Report, Review, Repeat", desc: "Submit weekly check-ins. Receive mentor feedback. The cycle repeats until you have a validated business model — or clear evidence that you need a new one." },
];

const MethodologySection = () => (
  <>
    <hr className="rule-dark" />
    <AnimatedSection className="section-padding section-dark">
      <div className="max-w-5xl mx-auto">
        <SectionLabel variant="light">The Methodology</SectionLabel>
        <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl uppercase leading-[1.05] mb-16 text-cream">
          The Lean LaunchPad,{" "}
          <span className="text-ochre">Digitized.</span>
        </h2>

        <div className="space-y-0 border-t-2 border-ochre/30">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-ochre/20"
            >
              <div className="flex items-start gap-4 md:flex-col md:items-center">
                <span className="font-heading font-bold text-3xl text-ochre">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="w-4 h-4 text-ochre" />
                  <h3 className="font-heading font-bold text-xl text-cream">{step.title}</h3>
                </div>
                <p className="text-sm text-cream/60 leading-relaxed max-w-xl">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
    <hr className="rule-dark" />
  </>
);

export default MethodologySection;
