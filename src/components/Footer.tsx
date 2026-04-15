const Footer = () => (
  <footer className="section-dark py-16 px-6 md:px-8">
    <div className="max-w-5xl mx-auto">
      {/* Brand */}
      <div className="mb-10">
        <div className="font-heading font-bold text-3xl text-cream mb-1">BHAG Labs</div>
        <div className="font-subheading text-lg text-ochre mb-4">भाग लैब्स</div>
        <p className="text-sm text-cream/50 max-w-md">Turning audacious ideas into validated ventures.</p>
      </div>

      <hr className="rule-gold mb-10 opacity-30" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="section-label text-ochre mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-cream/60">
            <li><a href="#neev" className="hover:text-cream transition-colors">Neev</a></li>
            <li><a href="/hissa" className="hover:text-cream transition-colors">Hissa</a></li>
          </ul>
        </div>

        <div>
          <h4 className="section-label text-ochre mb-4">Who We Serve</h4>
          <ul className="space-y-2 text-sm text-cream/60">
            <li>Universities & Colleges</li>
            <li>Accelerators & Incubators</li>
            <li>Corporate Innovation Labs</li>
            <li>Government Programs</li>
            <li>Research Offices</li>
          </ul>
        </div>

        <div>
          <h4 className="section-label text-ochre mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-cream/60">
            <li><a href="#" className="hover:text-cream transition-colors">About</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Blog</a></li>
            <li><a href="#contact" className="hover:text-cream transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="section-label text-ochre mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-cream/60">
            <li><a href="#" className="hover:text-cream transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Twitter / X</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Email</a></li>
          </ul>
        </div>
      </div>

      <hr className="rule-gold mt-10 mb-6 opacity-30" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-cream/40">&copy; 2026 BHAG Labs Pvt. Ltd.</p>
        <div className="diamond-divider text-ochre/30 max-w-[60px]">
          <span className="text-xs select-none">&#9670;</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
