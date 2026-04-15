import { useState } from "react";
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
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase leading-[1.05] mb-4 text-foreground">
            Request a <span className="text-terracotta">Demo</span>
          </h2>
          <p className="text-muted-foreground mb-10 text-base">
            Fill in the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="border-2 border-foreground p-8 text-center">
            <span className="font-heading text-4xl text-terracotta">&#10003;</span>
            <h3 className="font-heading font-bold text-xl text-foreground mt-4 mb-2">Thanks for reaching out!</h3>
            <p className="text-muted-foreground">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="border-2 border-foreground p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-terracotta transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-terracotta transition-colors"
                  placeholder="you@university.edu"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider">Organization</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-terracotta transition-colors"
                placeholder="University / Accelerator / Company"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider">Role</label>
              <select
                required
                className="w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-terracotta transition-colors"
              >
                <option value="">Select your role</option>
                <option>Faculty</option>
                <option>Program Manager</option>
                <option>Accelerator Lead</option>
                <option>Student</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-terracotta resize-none transition-colors"
                placeholder="Tell us about your program..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
            >
              Request a Demo
            </button>
          </form>
        )}
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
