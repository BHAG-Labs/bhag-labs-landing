import { ClipboardList, FlaskConical, Mic, BarChart3, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { useT } from "@/lib/i18n";

const featureDefs = [
  { icon: ClipboardList, titleKey: "neev.feature.bmc.title", descKey: "neev.feature.bmc.desc" },
  { icon: FlaskConical, titleKey: "neev.feature.hypothesis.title", descKey: "neev.feature.hypothesis.desc" },
  { icon: Mic, titleKey: "neev.feature.interview.title", descKey: "neev.feature.interview.desc" },
  { icon: Users, titleKey: "neev.feature.cohort.title", descKey: "neev.feature.cohort.desc" },
  { icon: BarChart3, titleKey: "neev.feature.admin.title", descKey: "neev.feature.admin.desc" },
];

const NeevSpotlight = () => {
  const t = useT();

  return (
    <AnimatedSection id="neev" className="py-16 md:py-24 px-6 md:px-8 section-light">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t('neev.label')}</SectionLabel>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-start">
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.0] mb-4 text-foreground">
              {t('neev.title')} <span className="text-terracotta">{t('neev.titleHighlight')}</span>
            </h2>
            <p className="font-subheading text-lg text-muted-foreground mb-8 italic">
              {t('neev.subtitle')}
            </p>

            <div className="space-y-5">
              {featureDefs.map((f) => (
                <div key={f.titleKey} className="flex gap-4">
                  <f.icon className="w-4 h-4 text-terracotta mt-1 shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-foreground text-sm mb-0.5">{t(f.titleKey)}</h4>
                    <p className="text-sm text-muted-foreground">{t(f.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://neev.bhaglabs.com" className="inline-block mt-10 bg-foreground px-8 py-3.5 font-semibold text-background hover:opacity-90 transition-opacity text-sm uppercase tracking-wider">
              {t('neev.cta')}
            </a>
          </div>

          <div className="border-2 border-foreground/20">
            <div className="border-b border-foreground/10 px-4 py-3 flex items-center gap-3">
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase">{t('neev.browserBar')}</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-24 bg-terracotta/15" />
                <div className="h-8 w-20 bg-muted" />
                <div className="h-8 w-28 bg-muted" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-20 bg-muted p-2 border border-foreground/5">
                    <div className="h-2 w-3/4 bg-terracotta/10 mb-2" />
                    <div className="h-2 w-1/2 bg-foreground/5" />
                    <div className="h-2 w-2/3 bg-foreground/5 mt-1" />
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <div className="h-6 w-6 rounded-full bg-terracotta/15" />
                <div className="h-6 w-6 rounded-full bg-terracotta/10" />
                <div className="h-6 w-6 rounded-full bg-terracotta/5" />
                <div className="flex-1 h-6 bg-muted ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default NeevSpotlight;
