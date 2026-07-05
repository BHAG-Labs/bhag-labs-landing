import { useState } from "react";
import { Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import { useT } from "@/lib/i18n";

const ContactSection = () => {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatedSection id="contact" className="py-16 md:py-24 px-6 md:px-8 section-light">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel>{t('contact.label')}</SectionLabel>
          <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase leading-[1.05] mb-4 text-foreground">
            {t('contact.title')} <span className="text-terracotta">{t('contact.titleHighlight')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-foreground p-8 border-l-[6px] border-l-terracotta">
            <Mail className="w-6 h-6 text-terracotta mb-4" />
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">{t('contact.founders.title')}</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {t('contact.founders.desc')}
            </p>
            <a
              href="mailto:founders@bhaglabs.com"
              className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors uppercase tracking-wider"
            >
              {t('contact.founders.email')}
            </a>
          </div>

          <div className="border-2 border-foreground p-8 border-l-[6px] border-l-ochre">
            <span className="text-xs font-semibold tracking-wide uppercase text-ochre mb-3 inline-block">{t('contact.newsletter.badge')}</span>
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">{t('contact.newsletter.title')}</h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              {t('contact.newsletter.desc')}
            </p>

            {submitted ? (
              <div className="border-2 border-ochre p-4 text-center text-sm text-foreground">
                {t('contact.newsletter.success')}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input required placeholder={t('contact.newsletter.namePlaceholder')} className="w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-ochre transition-colors" />
                <input required type="email" placeholder={t('contact.newsletter.emailPlaceholder')} className="w-full px-4 py-2.5 bg-transparent border-2 border-foreground/30 text-foreground text-sm focus:outline-none focus:border-ochre transition-colors" />
                <button type="submit" className="w-full bg-ochre py-3 font-semibold text-forest text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
                  {t('contact.newsletter.submit')}
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
