import { useT } from "@/lib/i18n";

const Footer = () => {
  const t = useT();

  return (
    <footer className="section-dark py-16 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 flex items-start gap-4">
          <img src="/logos/bhag-labs-mark-dark.svg" alt="" className="h-12 w-12" aria-hidden="true" />
          <div>
            <div className="font-heading font-bold text-3xl text-cream mb-1">{t('footer.brandName')}</div>
            <p className="text-sm text-cream/50 max-w-md">{t('footer.tagline')}</p>
          </div>
        </div>

        <hr className="rule-gold mb-10 opacity-30" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-xs font-semibold tracking-wide uppercase text-ochre mb-4">{t('footer.col.products')}</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li><a href="https://neev.bhaglabs.com" className="hover:text-cream transition-colors">Neev</a></li>
              <li><a href="https://hissa.bhaglabs.com" className="hover:text-cream transition-colors">Hissa</a></li>
              <li><span className="text-cream/30">{t('footer.pitchwalaSoon')}</span></li>
              <li><span className="text-cream/30">{t('footer.yantraSoon')}</span></li>
              <li><span className="text-cream/30">{t('footer.sigintSoon')}</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide uppercase text-ochre mb-4">{t('footer.col.builtFor')}</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>{t('footer.universities')}</li>
              <li>{t('footer.accelerators')}</li>
              <li>{t('footer.corporate')}</li>
              <li>{t('footer.government')}</li>
              <li>{t('footer.students')}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide uppercase text-ochre mb-4">{t('footer.col.company')}</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li><a href="mailto:hello@bhaglabs.com" className="hover:text-cream transition-colors">hello@bhaglabs.com</a></li>
              <li><a href="mailto:founders@bhaglabs.com" className="hover:text-cream transition-colors">founders@bhaglabs.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide uppercase text-ochre mb-4">{t('footer.col.legal')}</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li><a href="/privacy" className="hover:text-cream transition-colors">{t('footer.privacyPolicy')}</a></li>
              <li><a href="/terms" className="hover:text-cream transition-colors">{t('footer.termsOfService')}</a></li>
              <li><a href="mailto:privacy@bhaglabs.com" className="hover:text-cream transition-colors">{t('footer.dataRequests')}</a></li>
            </ul>
          </div>
        </div>

        <hr className="rule-gold mt-10 mb-6 opacity-30" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="mailto:hello@bhaglabs.com" className="text-xs text-cream/40 hover:text-cream/60 transition-colors">hello@bhaglabs.com</a>
          <span className="text-xs text-cream/30">{t('footer.location')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
