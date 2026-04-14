import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const logos = ["IIT Delhi", "BITS Pilani", "IIM Bangalore", "T-Hub", "NSRCEL", "Atal Innovation"];

const testimonials = [
  {
    quote: "BHAG Labs transformed how we run our entrepreneurship program. Our faculty can finally see what every team is doing in real time.",
    name: "Dr. Priya Sharma",
    title: "Director, E-Cell",
    institution: "Partner University",
  },
  {
    quote: "The structured hypothesis tracking is a game-changer. Our teams are doing real customer discovery instead of building in a vacuum.",
    name: "Arjun Mehta",
    title: "Accelerator Program Lead",
    institution: "Innovation Hub",
  },
  {
    quote: "We went from chasing weekly updates via email to having everything in one dashboard. The time savings alone made it worth it.",
    name: "Prof. Lakshmi Nair",
    title: "Faculty Coordinator",
    institution: "National University",
  },
];

const TrustSection = () => (
  <AnimatedSection className="section-padding">
    <div className="max-w-7xl mx-auto text-center">
      <SectionLabel>Trusted By</SectionLabel>

      {/* Logo bar */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
        {logos.map((name) => (
          <div
            key={name}
            className="px-6 py-3 text-sm font-medium text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300 select-none"
          >
            {name}
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="gradient-border rounded-xl p-6 text-left">
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.name[0]}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.title}, {t.institution}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default TrustSection;
