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
  <AnimatedSection id="neev" className="section-padding relative overflow-hidden">
    {/* Subtle gradient shift */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

    <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <SectionLabel>Spotlight</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Meet Neev — Our{" "}
          <span className="gradient-text">Lean LaunchPad Platform.</span>
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Neev (meaning 'foundation' in Hindi) is the first product from BHAG Labs.
          It is already powering startup programs at partner universities.
        </p>

        <div className="space-y-6">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <f.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-0.5">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" className="inline-block mt-8 gradient-bg px-6 py-3 rounded-full font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-sm">
          See Neev in Action →
        </a>
      </div>

      {/* Stylized browser mockup */}
      <div className="gradient-border rounded-xl overflow-hidden">
        <div className="bg-card">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/40" />
            <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
            <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
            <div className="flex-1 mx-4 h-6 rounded bg-secondary flex items-center px-3">
              <span className="text-[10px] text-muted-foreground">neev.bhaglabs.com</span>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {/* Abstract UI */}
            <div className="flex gap-3">
              <div className="h-8 w-24 rounded bg-primary/20" />
              <div className="h-8 w-20 rounded bg-secondary" />
              <div className="h-8 w-28 rounded bg-secondary" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-20 rounded-lg bg-secondary/80 p-2">
                  <div className="h-2 w-3/4 rounded bg-muted-foreground/15 mb-2" />
                  <div className="h-2 w-1/2 rounded bg-muted-foreground/10" />
                  <div className="h-2 w-2/3 rounded bg-muted-foreground/10 mt-1" />
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <div className="h-16 flex-1 rounded-lg bg-primary/10 p-2">
                <div className="h-2 w-1/2 rounded bg-primary/30 mb-2" />
                <div className="h-6 w-3/4 rounded bg-primary/20" />
              </div>
              <div className="h-16 flex-1 rounded-lg bg-teal/10 p-2">
                <div className="h-2 w-1/2 rounded bg-teal/30 mb-2" />
                <div className="h-6 w-3/4 rounded bg-teal/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default NeevSpotlight;
