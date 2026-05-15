import AnimatedSection from "./AnimatedSection";
import { useT } from "@/lib/i18n";

const CtaSection = () => {
  const t = useT();

  return (
    <AnimatedSection className="section-padding section-terracotta relative">
      <div className="absolute inset-4 border border-primary-foreground/20 pointer-events-none" />
      <div className="absolute inset-8 border-2 border-primary-foreground/10 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase leading-[1.05] mb-6 text-cream">
          {t('cta.title')}
        </h2>
        <p className="text-cream/70 mb-10 text-base leading-relaxed">
          {t('cta.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://sigint.bhaglabs.com" title="Signals intelligence for India's startup economy — free, always." className="bg-ochre px-8 py-3.5 font-semibold text-forest hover:opacity-90 transition-opacity text-sm uppercase tracking-wider">
            {t('cta.sigint')}
          </a>
          <a href="#solutions" className="px-8 py-3.5 font-semibold border-2 border-cream text-cream hover:bg-cream hover:text-terracotta transition-colors text-sm uppercase tracking-wider">
            {t('cta.explore')}
          </a>
        </div>
        <a href="#contact" className="inline-block mt-6 text-sm text-cream/80 hover:text-cream transition-colors tracking-wide">
          {t('cta.founders')}
        </a>
      </div>
    </AnimatedSection>
  );
};

export default CtaSection;
