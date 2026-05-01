import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  { name: "Neev", desc: "Lean LaunchPad Platform", href: "https://neev.bhaglabs.com" },
  { name: "Hissa", desc: "Startup Equity Calculator", href: "https://hissa.bhaglabs.com" },
  { name: "Pitchwala", desc: "AI pitch deck builder for Indian founders", href: "https://pitchwala.bhaglabs.com" },
  { name: "Yantra", desc: "AI agents & business solutions, co-sold for every startup need", href: "https://yantra.bhaglabs.com" },
  { name: "Bazaar", desc: "Weekly newsletter on India's startup economy", href: "https://bazaar.bhaglabs.com" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 leading-none">
          <img src="/logos/bhag-labs-mark.svg" alt="" className="h-8 w-8" aria-hidden="true" />
          <span className="flex flex-col">
            <span className="font-heading font-bold text-xl text-foreground tracking-tight">BHAG Labs</span>
            <span className="text-[10px] text-muted-foreground font-subheading">भाग लैब्स</span>
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
              Solutions <ChevronDown className="w-3.5 h-3.5" />
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
          <a href="#who-we-serve" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">Who We Serve</a>
          <a href="#why-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">Why Us</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">Contact</a>
        </div>

        <a href="https://bazaar.bhaglabs.com" title="India's weekly startup newsletter — free, always." className="hidden md:inline-flex bg-ochre px-6 py-2.5 text-sm font-semibold text-forest hover:opacity-90 transition-opacity tracking-wide uppercase">
          Join Bazaar →
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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
              <a href="#solutions" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Solutions</a>
              <a href="https://pitchwala.bhaglabs.com" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Pitchwala</a>
              <a href="https://yantra.bhaglabs.com" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Yantra</a>
              <a href="https://hissa.bhaglabs.com" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Hissa</a>
              <a href="#who-we-serve" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Who We Serve</a>
              <a href="#why-us" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Why Us</a>
              <a href="#contact" className="text-sm text-muted-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Contact</a>
              <a href="https://bazaar.bhaglabs.com" className="bg-ochre px-6 py-2.5 text-sm font-semibold text-forest text-center uppercase tracking-wide" onClick={() => setMobileOpen(false)}>
                Join Bazaar →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
