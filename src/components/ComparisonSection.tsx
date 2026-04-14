import { Check, X, Minus } from "lucide-react";
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
  if (status === "yes") return <Check className="w-5 h-5 text-teal" />;
  if (status === "partial") return <Minus className="w-5 h-5 text-muted-foreground" />;
  return <X className="w-5 h-5 text-destructive/60" />;
};

const ComparisonSection = () => (
  <AnimatedSection className="section-padding">
    <div className="max-w-5xl mx-auto text-center">
      <SectionLabel>Comparison</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
        How BHAG Labs <span className="gradient-text">Compares</span>
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-4 pr-4 text-muted-foreground font-medium">Feature</th>
              <th className="pb-4 px-4 text-center text-muted-foreground font-medium">Spreadsheets & Docs</th>
              <th className="pb-4 px-4 text-center text-muted-foreground font-medium">Generic PM Tools</th>
              <th className="pb-4 pl-4 text-center font-medium gradient-text">BHAG Labs</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature} className="border-b border-border/50">
                <td className="py-4 pr-4 text-foreground font-medium">{row.feature}</td>
                <td className="py-4 px-4 text-center"><div className="flex justify-center"><Icon status={row.sheets} /></div></td>
                <td className="py-4 px-4 text-center"><div className="flex justify-center"><Icon status={row.pm} /></div></td>
                <td className="py-4 pl-4 text-center"><div className="flex justify-center"><Icon status={row.bhag} /></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </AnimatedSection>
);

export default ComparisonSection;
