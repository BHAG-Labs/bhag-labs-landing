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
    <AnimatedSection id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <SectionLabel>Get Started</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Request a <span className="gradient-text">Demo</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          Fill in the form below and we'll get back to you within 24 hours.
        </p>

        {submitted ? (
          <div className="gradient-border rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Thanks for reaching out!</h3>
            <p className="text-muted-foreground">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="gradient-border rounded-xl p-6 md:p-8 text-left space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="you@university.edu"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Organization</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="University / Accelerator / Company"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Role</label>
              <select
                required
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
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
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Tell us about your program..."
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-bg py-3 rounded-full font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
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
