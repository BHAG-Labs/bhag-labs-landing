import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Mesh gradient background */}
    <div className="absolute inset-0 mesh-gradient" />
    {/* Floating orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

    {/* Constellation dots */}
    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
      {[
        [10, 20], [25, 60], [40, 30], [55, 70], [70, 25], [85, 55], [15, 80], [60, 15], [80, 80], [45, 50],
        [30, 45], [65, 40], [90, 35], [20, 35], [75, 65],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={`${cx}%`} cy={`${cy}%`} r="1.5" fill="hsl(199 89% 48%)" className="animate-pulse-glow" style={{ animationDelay: `${i * 0.3}s` }} />
      ))}
      {[
        [[10, 20], [25, 60]], [[25, 60], [45, 50]], [[40, 30], [65, 40]], [[55, 70], [75, 65]], [[70, 25], [90, 35]],
        [[15, 80], [30, 45]], [[60, 15], [80, 80]], [[20, 35], [40, 30]],
      ].map(([[x1, y1], [x2, y2]], i) => (
        <line key={`l${i}`} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="hsl(199 89% 48%)" strokeWidth="0.5" opacity="0.3" />
      ))}
    </svg>

    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6"
      >
        Every Big Idea Deserves{" "}
        <span className="gradient-text">a Launchpad.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
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
        <a href="#contact" className="gradient-bg px-8 py-3.5 rounded-full font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-base">
          Book a Demo
        </a>
        <a href="#solutions" className="px-8 py-3.5 rounded-full font-semibold border border-primary/40 text-foreground hover:bg-primary/10 transition-colors text-base">
          Explore Our Solutions
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
