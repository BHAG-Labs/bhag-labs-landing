import { GraduationCap, Rocket, Building, Briefcase, FlaskConical, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { DotGrid, NotchedDisc, DiamondDivider } from "./BhagMotifs";

const segmentDefs = [
  { icon: GraduationCap, titleKey: "whoWeServe.universities.title", descKey: "whoWeServe.universities.desc" },
  { icon: Rocket, titleKey: "whoWeServe.accelerators.title", descKey: "whoWeServe.accelerators.desc" },
  { icon: Building, titleKey: "whoWeServe.government.title", descKey: "whoWeServe.government.desc" },
  { icon: Briefcase, titleKey: "whoWeServe.corporate.title", descKey: "whoWeServe.corporate.desc" },
  { icon: FlaskConical, titleKey: "whoWeServe.research.title", descKey: "whoWeServe.research.desc" },
  { icon: Users, titleKey: "whoWeServe.students.title", descKey: "whoWeServe.students.desc" },
];

const WhoWeServeSection = () => {
  const t = useT();

  return (
    <AnimatedSection id="who-we-serve" className="py-16 md:py-24 px-6 md:px-8 section-dark relative overflow-hidden">
      {/* DotGrid editorial decoration — top-right corner */}
      <div aria-hidden="true" className="absolute top-12 right-12 opacity-60 hidden md:block text-cream">
        <DotGrid />
      </div>
      {/* NotchedDisc ornament — bottom-left, large but quiet */}
      <div aria-hidden="true" className="absolute -bottom-10 -left-10 opacity-20 hidden lg:block">
        <NotchedDisc />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <SectionLabel variant="light">{t('whoWeServe.label')}</SectionLabel>
        <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl uppercase leading-[1.05] mb-16 text-cream">
          {t('whoWeServe.title')} <span className="text-ochre">{t('whoWeServe.titleHighlight')}</span>
        </h2>

        <div className="border-2 border-cream/20 grid sm:grid-cols-2 lg:grid-cols-3">
          {segmentDefs.map((s, i) => (
            <motion.div
              key={s.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="p-6 border-b border-r border-cream/10 hover:bg-cream/5 transition-colors duration-200"
            >
              <s.icon className="w-5 h-5 text-ochre mb-4" />
              <h3 className="font-heading font-bold text-lg text-cream mb-2">{t(s.titleKey)}</h3>
              <p className="text-sm text-cream/60 leading-relaxed">{t(s.descKey)}</p>
            </motion.div>
          ))}
        </div>

        {/* Diamond divider — section rest beat in cream/dark */}
        <div className="mt-16 text-cream/40">
          <DiamondDivider />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhoWeServeSection;
