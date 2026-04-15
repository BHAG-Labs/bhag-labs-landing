import { ClipboardList, FlaskConical, Mic, BarChart3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const features = [
  { icon: ClipboardList, title: "Business Model Canvas with Pivot Versioning", desc: "Full 9-block BMC editor with version history and pivot notes" },
  { icon: FlaskConical, title: "Hypothesis Tracking", desc: "State, test, and update hypotheses with customer segment, value prop, and problem linkages" },
  { icon: Mic, title: "Interview Logging", desc: "Log every customer discovery conversation, link it to hypotheses, and record outcomes" },
  { icon: BarChart3, title: "Admin Dashboard", desc: "Aggregate stats, per-team drill-downs, section-tagged mentor feedback" },
];

const NeevSpotlight = () => (
  <>
    <AnimatedSection id="neev" className="section-padding section-dark stamp-edge-top stamp-edge-bottom relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionLabel variant="light">Spotlight</SectionLabel>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-start">
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl uppercase leading-[1.0] mb-6 text-ochre">
              Meet Neev.
            </h2>
            <p className="font-subheading text-xl md:text-2xl text-cream/80 mb-4 italic">
              Our Lean LaunchPad Platform
            </p>
            <p className="text-cream/60 mb-10 leading-relaxed text-base">
              Neev (meaning 'foundation' in Hindi) is the first product from BHAG Labs.
              It is already powering startup programs at partner universities.
            </p>

            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <span className="text-ochre text-sm mt-1 select-none">&#9670;</span>
                  <div>
                    <h4 className="font-heading font-bold text-cream text-sm mb-0.5">{f.title}</h4>
                    <p className="text-sm text-cream/50">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-block mt-10 bg-ochre px-8 py-3.5 font-semibold text-charcoal hover:opacity-90 transition-opacity text-sm uppercase tracking-wider">
              See Neev in Action →
            </a>
          </div>

          {/* Stylized mockup — editorial style */}
          <div className="border-2 border-ochre/30">
            <div className="border-b border-ochre/20 px-4 py-3 flex items-center gap-3">
              <span className="text-[10px] text-ochre/60 tracking-wider uppercase">neev.bhaglabs.com</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-24 bg-ochre/20" />
                <div className="h-8 w-20 bg-cream/5" />
                <div className="h-8 w-28 bg-cream/5" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-20 bg-cream/5 p-2 border border-ochre/10">
                    <div className="h-2 w-3/4 bg-ochre/15 mb-2" />
                    <div className="h-2 w-1/2 bg-cream/10" />
                    <div className="h-2 w-2/3 bg-cream/10 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </>
);

export default NeevSpotlight;
