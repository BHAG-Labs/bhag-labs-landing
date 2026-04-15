import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const TrustSection = () => (
  <AnimatedSection className="section-padding section-light">
    <div className="max-w-5xl mx-auto text-center">
      <SectionLabel>Trusted By</SectionLabel>
      <h2 className="font-heading font-bold text-2xl md:text-4xl uppercase leading-[1.05] mb-6 text-foreground">
        Powering Innovation Programs
      </h2>
      <p className="text-muted-foreground text-base max-w-lg mx-auto">
        We're working with forward-thinking institutions to build the future of entrepreneurship education.
      </p>
      <div className="mt-10 max-w-xs mx-auto diamond-divider text-muted-foreground/30">
        <span className="text-sm select-none">&#9670;</span>
      </div>
    </div>
  </AnimatedSection>
);

export default TrustSection;
