import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const rows = [
  { feature: "Business Model Canvas Versioning", sheets: "partial", pm: "no", bhag: "yes" },
  { feature: "Hypothesis Tracking", sheets: "no", pm: "partial", bhag: "yes" },
  { feature: "Interview Logging & Insights", sheets: "no", pm: "no", bhag: "yes" },
  { feature: "Cohort-wide Admin Dashboard", sheets: "no", pm: "partial", bhag: "yes" },
  { feature: "Mentor Feedback System", sheets: "no", pm: "partial", bhag: "yes" },
  { feature: "Weekly Check-ins & Mood Tracking", sheets: "partial", pm: "no", bhag: "yes" },
  { feature: "Lean LaunchPad Methodology", sheets: "no", pm: "no", bhag: "yes" },
];

const Icon = ({ status }: { status: string }) => {
  if (status === "yes") return <span className="text-terracotta font-heading font-bold">&#10003;</span>;
  if (status === "partial") return <span className="text-muted-foreground">&#8211;</span>;
  return <span className="text-muted-foreground/40">&#10005;</span>;
};

const ComparisonSection = () => (
  <AnimatedSection className="section-padding section-light">
    <div className="max-w-5xl mx-auto">
      <SectionLabel>Comparison</SectionLabel>
      <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase leading-[1.05] mb-12 text-foreground">
        How BHAG Labs <span className="text-terracotta">Compares</span>
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-2 border-foreground">
          <thead>
            <tr className="border-b-2 border-foreground">
              <th className="p-4 text-muted-foreground font-medium tracking-wide uppercase text-xs">Feature</th>
              <th className="p-4 text-center text-muted-foreground font-medium tracking-wide uppercase text-xs">Spreadsheets</th>
              <th className="p-4 text-center text-muted-foreground font-medium tracking-wide uppercase text-xs">PM Tools</th>
              <th className="p-4 text-center font-medium tracking-wide uppercase text-xs bg-primary text-primary-foreground">BHAG Labs</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature} className="border-b border-foreground/20">
                <td className="p-4 text-foreground font-medium">{row.feature}</td>
                <td className="p-4 text-center"><Icon status={row.sheets} /></td>
                <td className="p-4 text-center"><Icon status={row.pm} /></td>
                <td className="p-4 text-center bg-primary/5"><Icon status={row.bhag} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </AnimatedSection>
);

export default ComparisonSection;
