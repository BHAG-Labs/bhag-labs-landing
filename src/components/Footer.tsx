import { Rocket, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-16 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <div className="flex items-center gap-2 text-foreground font-bold text-lg mb-3">
          <Rocket className="w-5 h-5 text-primary" />
          BHAG Labs
        </div>
        <p className="text-sm text-muted-foreground mb-4">Turning audacious ideas into validated ventures.</p>
        <p className="text-xs text-muted-foreground">© 2026 BHAG Labs Pvt. Ltd.</p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-foreground mb-4">Solutions</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#neev" className="hover:text-foreground transition-colors">Neev</a></li>
          <li><span>Setu <span className="text-xs text-muted-foreground/60">(Coming Soon)</span></span></li>
          <li><span>Drishti <span className="text-xs text-muted-foreground/60">(Coming Soon)</span></span></li>
          <li><span>PramaaN <span className="text-xs text-muted-foreground/60">(Coming Soon)</span></span></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-foreground mb-4">Who We Serve</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Universities & Colleges</li>
          <li>Accelerators & Incubators</li>
          <li>Corporate Innovation Labs</li>
          <li>Government Programs</li>
          <li>Research Offices</li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
          <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
          <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
        </ul>
        <div className="flex gap-4 mt-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
