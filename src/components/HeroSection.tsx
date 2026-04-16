import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 section-light paper-texture corner-marks">
    {/* Double border frame */}
    <div className="absolute inset-4 border border-foreground/10 pointer-events-none" />
    <div className="absolute inset-8 border-2 border-foreground/5 pointer-events-none" />

    {/* Bottom corner marks */}
    <div className="absolute bottom-5 left-5 w-[30px] h-[30px] border-b-2 border-l-2 border-foreground/20 pointer-events-none" />
    <div className="absolute bottom-5 right-5 w-[30px] h-[30px] border-b-2 border-r-2 border-foreground/20 pointer-events-none" />

    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-[100px] uppercase leading-[0.95] tracking-tight mb-8 text-forest"
      >
        Every Big Idea<br />
        Deserves a{" "}
        <span className="text-terracotta">Launchpad.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        BHAG Labs builds the software infrastructure that universities, accelerators, and innovation
        programs need to turn student and founder ideas into validated, fundable ventures — week by
        week, hypothesis by hypothesis.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a href="#contact" className="bg-primary px-8 py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-sm uppercase tracking-wider">
          Book a Demo
        </a>
        <a href="#solutions" className="px-8 py-3.5 font-semibold border-2 border-forest text-forest hover:bg-forest hover:text-cream transition-colors text-sm uppercase tracking-wider">
          Explore Our Solutions
        </a>
      </motion.div>

      {/* Decorative diamond divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 max-w-xs mx-auto diamond-divider text-muted-foreground"
      >
        <span className="text-sm select-none">&#9670;</span>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
