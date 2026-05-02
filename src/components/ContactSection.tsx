import { useState } from "react";
import { Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatedSection id="contact" className="section-padding section-light paper-texture">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel>Stay in Touch</SectionLabel>
          <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase leading-[1.05] mb-4 text-foreground">
            Two Ways to <span className="text-terracotta">Reach Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Founders */}
          <div className="border-2 border-foreground p-8 border-l-[6px] border-l-terracotta">
            <Mail className="w-6 h-6 text-terracotta mb-4" />
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">Talk to the Founders</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              For partnerships, pilots, and program-level conversations. We read every email. No autoresponders.
            </p>
            <a
              href="mailto:founders@bhaglabs.com"
              className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-cream transition-colors uppercase tracking-wider"
            >
              founders@bhaglabs.com
            </a>
          </div>

          {/* Newsletter */}
          <div className="border-2 border-foreground p-8 border-l-[6px] border-l-ochre bg-cream-dark/30">
            <span className="section-label text-ochre mb-3 inline-block">BAZAAR — WEEKLY</span>
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">Join the Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              India's startup, VC, and policy economy — one email every Sunday. Free.
            </p>

            {submitted ? (
              <div className="border-2 border-ochre p-4 text-center text-sm text-foreground">
                <span className="text-ochre text-xl">◆</span> You're on the list. First edition lands Sunday.
              </div>
            ) : (
              // TODO: Connect form action to Substack/Beehiiv/ConvertKit URL
              <form onSubmit={handleSubmit} className="space-y-3">
                <input required placeholder="Your name" className="w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-ochre transition-colors" />
                <input required type="email" placeholder="you@email.com" className="w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-ochre transition-colors" />
                <select required className="w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-ochre transition-colors">
                  <option value="">I am a...</option>
                  <option>Founder</option>
                  <option>Student</option>
                  <option>Investor / Angel</option>
                  <option>Faculty / Mentor</option>
                  <option>Accelerator Manager</option>
                  <option>Curious Observer</option>
                </select>
                <button type="submit" className="w-full bg-ochre py-3 font-semibold text-forest text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
                  Join Bazaar →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
