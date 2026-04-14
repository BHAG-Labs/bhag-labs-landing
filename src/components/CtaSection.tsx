import AnimatedSection from "./AnimatedSection";

const CtaSection = () => (
  <AnimatedSection className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 mesh-gradient opacity-50" />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />

    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
        Ready to Build the Future of Your{" "}
        <span className="gradient-text">Innovation Program?</span>
      </h2>
      <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
        Whether you're a university launching your first entrepreneurship cell, or an accelerator
        scaling to 100+ teams — BHAG Labs has the tools to make it work.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="#contact" className="gradient-bg px-8 py-3.5 rounded-full font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
          Book a Demo
        </a>
        <a href="#" className="px-8 py-3.5 rounded-full font-semibold border border-primary/40 text-foreground hover:bg-primary/10 transition-colors">
          Download Product Overview
        </a>
      </div>
      <a href="#contact" className="inline-block mt-4 text-sm text-primary hover:underline">
        Talk to the Founders →
      </a>
    </div>
  </AnimatedSection>
);

export default CtaSection;
