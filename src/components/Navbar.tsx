import { useState } from "react";
import { Menu, X, ChevronDown, Sun, Moon, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { useT, useLang, LANGUAGES } from "@/lib/i18n";

const Navbar = () => {
  const t = useT();
  const [lang, setLang] = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);
  const [dark, setDark] = useDarkMode();

  const logoSrc = dark ? "/logos/bhag-labs-mark-dark.svg" : "/logos/bhag-labs-mark.svg";

  const solutions = [
    { name: "Neev", desc: t('nav.sol.neev.desc'), href: "https://neev.bhaglabs.com" },
    { name: "Hissa", desc: t('nav.sol.hissa.desc'), href: "https://hissa.bhaglabs.com" },
    { name: "Pitchwala", desc: t('nav.sol.pitchwala.desc'), href: "https://pitchwala.bhaglabs.com" },
    { name: "Yantra", desc: t('nav.sol.yantra.desc'), href: "https://yantra.bhaglabs.com" },
    { name: "SIGINT", desc: t('nav.sol.sigint.desc'), href: "https://sigint.bhaglabs.com" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 leading-none">
          <img src={logoSrc} alt="" className="h-8 w-8" aria-hidden="true" />
          <span className="flex flex-col">
            <span className="font-heading font-bold text-xl text-foreground tracking-tight">{t('nav.brandName')}</span>
            <span className="text-[10px] text-muted-foreground font-subheading">{t('nav.brandNameHindi')}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              onClick={() => setSolOpen(!solOpen)}
              onMouseEnter={() => setSolOpen(true)}
            >
              {t('nav.solutions')} <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {solOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-0 mt-2 w-72 border-2 border-foreground bg-background p-2"
                  onMouseLeave={() => setSolOpen(false)}
                >
                  {solutions.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      className="flex items-center justify-between p-3 hover:bg-muted transition-colors"
                      onClick={() => setSolOpen(false)}
                    >
                      <div>
                        <div className="text-sm font-heading font-bold text-foreground">{s.name}</div>
                        <div className="text-xs text-muted-foreground">{s.desc}</div>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#who-we-serve" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">{t('nav.whoWeServe')}</a>
          <a href="#why-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">{t('nav.whyUs')}</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">{t('nav.contact')}</a>

          {/* Language Picker */}
          <div className="relative flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-muted-foreground" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="appearance-none bg-transparent text-sm text-muted-foreground hover:text-foreground cursor-pointer focus:outline-none pr-1"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>{l.nativeLabel}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <a href="https://sigint.bhaglabs.com" title="Signals intelligence for India's startup economy — free, always." className="hidden md:inline-flex bg-ochre px-6 py-2.5 text-sm font-semibold text-forest hover:opacity-90 transition-opacity tracking-wide uppercase">
          {t('nav.joinSigint')}
        </a>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <div className="relative flex items-center">
            <Globe className="w-4 h-4 text-foreground" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="appearance-none bg-transparent text-sm text-foreground cursor-pointer focus:outline-none w-6"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>{l.code.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 text-foreground"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-t-2 border-foreground"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#solutions" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>{t('nav.solutions')}</a>
              <a href="https://pitchwala.bhaglabs.com" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Pitchwala</a>
              <a href="https://yantra.bhaglabs.com" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Yantra</a>
              <a href="https://hissa.bhaglabs.com" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Hissa</a>
              <a href="#who-we-serve" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>{t('nav.whoWeServe')}</a>
              <a href="#why-us" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>{t('nav.whyUs')}</a>
              <a href="#contact" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>{t('nav.contact')}</a>
              <a href="https://sigint.bhaglabs.com" className="bg-ochre px-6 py-2.5 text-sm font-semibold text-forest text-center uppercase tracking-wide" onClick={() => setMobileOpen(false)}>
                {t('nav.joinSigint')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
