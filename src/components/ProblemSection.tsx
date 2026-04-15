import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const ProblemSection = () => (
  <>
    <hr className="rule-gold" />
    <AnimatedSection className="section-padding section-dark">
      <div className="max-w-5xl mx-auto">
        <SectionLabel variant="light">The Reality</SectionLabel>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-start">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl uppercase leading-[1.05] mb-8 text-cream">
              Innovation Programs Are Stuck in the{" "}
              <span className="text-ochre">Stone Age.</span>
            </h2>
          </div>
          <div className="space-y-5 text-cream/70 leading-relaxed text-base">
            <p>
              Most universities and accelerators still run startup programs using spreadsheets,
              Google Docs, and disconnected tools. Mentors can't see what teams are doing. Founders
              submit weekly updates into a void.
            </p>
            <p>
              The result? Programs can't measure progress. Founders don't learn the right methodology.
              And the best ideas die — not because they were bad, but because nobody helped validate
              them in time.
            </p>
            <p>
              The best programs in the world have moved to structured, software-driven
              approaches built on the Lean LaunchPad methodology — where every assumption is tracked,
              every interview is logged, and every pivot is documented.
            </p>
            <p className="text-ochre font-semibold font-subheading text-xl">
              BHAG Labs brings that rigor to every program, at every scale.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
    <hr className="rule-gold" />
  </>
);

export default ProblemSection;
