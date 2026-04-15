import AnimatedSection from "./AnimatedSection";

const CtaSection = () => (
  <AnimatedSection className="section-padding section-terracotta relative">
    {/* Double border frame */}
    <div className="absolute inset-4 border border-primary-foreground/20 pointer-events-none" />
    <div className="absolute inset-8 border-2 border-primary-foreground/10 pointer-events-none" />

    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase leading-[1.05] mb-6 text-cream">
        Ready to Build the Future of Your Innovation Program?
      </h2>
      <p className="text-cream/70 mb-10 text-base leading-relaxed">
        Whether you're a university launching your first entrepreneurship cell, or an accelerator
        scaling to 100+ teams — BHAG Labs has the tools to make it work.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="#contact" className="bg-charcoal px-8 py-3.5 font-semibold text-cream hover:opacity-90 transition-opacity text-sm uppercase tracking-wider">
          Book a Demo
        </a>
        <a href="#" className="px-8 py-3.5 font-semibold border-2 border-cream text-cream hover:bg-cream hover:text-terracotta transition-colors text-sm uppercase tracking-wider">
          Download Product Overview
        </a>
      </div>
      <a href="#contact" className="inline-block mt-6 text-sm text-cream/80 hover:text-cream transition-colors tracking-wide">
        Talk to the Founders →
      </a>
    </div>
  </AnimatedSection>
);

export default CtaSection;
