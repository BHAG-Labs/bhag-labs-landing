import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import BhagMark from "./BhagMark";
import { CornerFrame, BulletRhythm } from "./BhagMotifs";

const HeroSection = () => {
  const t = useT();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-16 section-light overflow-hidden">
      {/* Hero flare — radial terracotta warmth behind the headline */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, hsl(var(--terracotta) / 0.14) 0%, transparent 55%)",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated v14 mark — the assembly loop functions as a hero ornament */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-8"
        >
          <CornerFrame inset className="p-6 md:p-8 inline-flex items-center justify-center bg-background/40">
            <BhagMark size={88} className="block" />
          </CornerFrame>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-[96px] uppercase leading-[0.95] tracking-tight mb-8 text-foreground"
        >
          {t('hero.title.line1')}<br />
          {t('hero.title.line2')}{" "}
          <span className="text-terracotta">{t('hero.title.highlight')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed font-subheading italic"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#solutions" className="bg-foreground px-8 py-3.5 font-semibold text-background hover:opacity-90 transition-opacity text-sm uppercase tracking-wider">
            {t('hero.cta.explore')}
          </a>
          <a href="https://sigint.bhaglabs.com" className="px-8 py-3.5 font-semibold border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors text-sm uppercase tracking-wider">
            {t('hero.cta.sigint')}
          </a>
        </motion.div>

        {/* Bullet rhythm motif — the editorial flourish under the CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-center mt-12 text-ochre"
        >
          <BulletRhythm />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
