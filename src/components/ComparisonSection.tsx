import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { useT } from "@/lib/i18n";
import { CornerFrame, QuarterPetal } from "./BhagMotifs";

const ROW_KEYS = [
  { key: 'comparison.row.bmcVersioning', sheets: "partial", pm: "no", bhag: "yes" },
  { key: 'comparison.row.hypothesisTracking', sheets: "no", pm: "partial", bhag: "yes" },
  { key: 'comparison.row.interviewLogging', sheets: "no", pm: "no", bhag: "yes" },
  { key: 'comparison.row.cohortDashboard', sheets: "no", pm: "partial", bhag: "yes" },
  { key: 'comparison.row.mentorFeedback', sheets: "no", pm: "partial", bhag: "yes" },
  { key: 'comparison.row.weeklyCheckins', sheets: "partial", pm: "no", bhag: "yes" },
  { key: 'comparison.row.leanLaunchpad', sheets: "no", pm: "no", bhag: "yes" },
];

const Icon = ({ status }: { status: string }) => {
  if (status === "yes") return <span className="text-terracotta font-heading font-bold">&#10003;</span>;
  if (status === "partial") return <span className="text-muted-foreground">~</span>;
  return <span className="text-muted-foreground/40">&#10005;</span>;
};

const ComparisonSection = () => {
  const t = useT();

  return (
    <AnimatedSection className="py-16 md:py-24 px-6 md:px-8 section-light relative overflow-hidden">
      {/* QuarterPetal — top-right dusty-rose accent */}
      <div aria-hidden="true" className="absolute top-12 right-6 opacity-30 hidden md:block">
        <QuarterPetal />
      </div>
      <div className="max-w-5xl mx-auto relative">
        <SectionLabel>{t('comparison.label')}</SectionLabel>
        <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase leading-[1.05] mb-12 text-foreground">
          {t('comparison.title')} <span className="text-terracotta">{t('comparison.titleHighlight')}</span>
        </h2>

        <CornerFrame inset className="overflow-x-auto">
          <table className="w-full text-left text-sm border-2 border-foreground">
            <thead>
              <tr className="border-b-2 border-foreground">
                <th className="p-4 text-muted-foreground font-medium tracking-wide uppercase text-xs">{t('comparison.col.feature')}</th>
                <th className="p-4 text-center text-muted-foreground font-medium tracking-wide uppercase text-xs">{t('comparison.col.spreadsheets')}</th>
                <th className="p-4 text-center text-muted-foreground font-medium tracking-wide uppercase text-xs">{t('comparison.col.pmTools')}</th>
                <th className="p-4 text-center font-medium tracking-wide uppercase text-xs bg-primary text-primary-foreground">{t('comparison.col.bhagLabs')}</th>
              </tr>
            </thead>
            <tbody>
              {ROW_KEYS.map((row) => (
                <tr key={row.key} className="border-b border-foreground/20">
                  <td className="p-4 text-foreground font-medium">{t(row.key)}</td>
                  <td className="p-4 text-center"><Icon status={row.sheets} /></td>
                  <td className="p-4 text-center"><Icon status={row.pm} /></td>
                  <td className="p-4 text-center bg-primary/5"><Icon status={row.bhag} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </CornerFrame>
      </div>
    </AnimatedSection>
  );
};

export default ComparisonSection;
