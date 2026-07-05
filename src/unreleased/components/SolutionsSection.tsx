import { Layers, PieChart, FileText, Map, Newspaper } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { CornerFrame, DiamondDivider } from "@/components/BhagMotifs";

const productDefs = [
  {
    icon: Layers,
    name: "Neev",
    devanagari: "नींव",
    gloss: "foundation",
    accentCls: "text-forest",
    categoryKey: "solutions.neev.category",
    badgeKey: "solutions.neev.badge",
    badgeCls: "bg-terracotta text-cream",
    borderStyle: "border-solid",
    descKey: "solutions.neev.desc",
    linkKey: "solutions.neev.link",
    href: "https://neev.bhaglabs.com",
  },
  {
    icon: PieChart,
    name: "Hissa",
    devanagari: "हिस्सा",
    gloss: "share",
    accentCls: "text-foreground",
    categoryKey: "solutions.hissa.category",
    badgeKey: "solutions.hissa.badge",
    badgeCls: "bg-terracotta text-cream",
    borderStyle: "border-solid",
    descKey: "solutions.hissa.desc",
    linkKey: "solutions.hissa.link",
    href: "https://hissa.bhaglabs.com",
  },
  {
    icon: FileText,
    name: "Pitchwala",
    devanagari: null,
    gloss: "pitch-person",
    accentCls: "text-terracotta",
    categoryKey: "solutions.pitchwala.category",
    badgeKey: "solutions.pitchwala.badge",
    badgeCls: "border border-ochre text-ochre bg-transparent",
    borderStyle: "border-dashed",
    descKey: "solutions.pitchwala.desc",
    linkKey: "solutions.pitchwala.link",
    href: "https://pitchwala.bhaglabs.com",
  },
  {
    icon: Map,
    name: "Yantra",
    devanagari: "यंत्र",
    gloss: "instrument",
    accentCls: "text-teal",
    categoryKey: "solutions.yantra.category",
    badgeKey: "solutions.yantra.badge",
    badgeCls: "border border-ochre text-ochre bg-transparent",
    borderStyle: "border-dashed",
    descKey: "solutions.yantra.desc",
    linkKey: "solutions.yantra.link",
    href: "https://yantra.bhaglabs.com",
  },
  {
    icon: Newspaper,
    name: "SIGINT",
    devanagari: "संकेत",
    gloss: "signal",
    accentCls: "text-ochre",
    categoryKey: "solutions.sigint.category",
    badgeKey: "solutions.sigint.badge",
    badgeCls: "border border-ochre text-ochre bg-transparent",
    borderStyle: "border-dashed",
    descKey: "solutions.sigint.desc",
    linkKey: "solutions.sigint.link",
    href: "https://sigint.bhaglabs.com",
  },
];

const SolutionsSection = () => {
  const t = useT();

  return (
    <AnimatedSection id="solutions" className="py-16 md:py-24 px-6 md:px-8 section-light">
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionLabel>{t('solutions.label')}</SectionLabel>
        <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl uppercase leading-[1.05] mb-4 text-foreground">
          {t('solutions.title')}{" "}
          <span className="text-terracotta">{t('solutions.titleHighlight')}</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mb-16 text-base leading-relaxed">
          {t('solutions.subtitle')}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {productDefs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="relative"
            >
              <CornerFrame>
                <a
                  href={p.href}
                  className={`p-7 flex flex-col bg-background border-2 border-foreground ${p.borderStyle} hover:bg-muted transition-colors group h-full`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <p.icon className={`w-6 h-6 ${p.accentCls}`} />
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-bold px-2 py-1 ${p.badgeCls}`}>
                      {t(p.badgeKey)}
                    </span>
                  </div>
                  <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-2">{t(p.categoryKey)}</span>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-1">{p.name}</h3>
                  <p className="font-subheading italic text-sm text-foreground/55 mb-3">
                    {p.devanagari ? (
                      <>
                        <span lang="hi" className="not-italic">{p.devanagari}</span>
                        <span className="mx-1.5">·</span>
                      </>
                    ) : null}
                    {p.gloss}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t(p.descKey)}</p>
                  <span className="mt-5 text-sm font-semibold text-terracotta group-hover:text-foreground transition-colors tracking-wide">
                    {t(p.linkKey)}
                  </span>
                </a>
              </CornerFrame>
            </motion.div>
          ))}
        </div>

        {/* Diamond-divider rest beat between sections */}
        <div className="mt-20 text-foreground/60">
          <DiamondDivider />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SolutionsSection;
