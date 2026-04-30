import { useState } from "react";
import { motion } from "framer-motion";
import SolutionHeader from "@/components/solutions/SolutionHeader";
import AuthShell from "@/components/solutions/AuthShell";
import GeneratingState from "@/components/solutions/GeneratingState";
import VyapaarLanding from "@/components/vyapaar/VyapaarLanding";
import IntakeForm, { type VyapaarData } from "@/components/vyapaar/IntakeForm";
import FeasibilityReport from "@/components/vyapaar/FeasibilityReport";

type Stage = "landing" | "auth" | "intake" | "generating" | "report";

export default function Vyapaar() {
  const [stage, setStage] = useState<Stage>("landing");
  const [data, setData] = useState<VyapaarData | null>(null);

  return (
    <div className="min-h-screen bg-cream">
      <SolutionHeader name="Vyapaar" />
      <motion.div key={stage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        {stage === "landing" && <VyapaarLanding onStart={() => setStage("auth")} />}
        {stage === "auth" && (
          <AuthShell
            product="VYAPAAR"
            tagline="From idea to a feasibility plan that ships."
            onAuth={() => setStage("intake")}
          />
        )}
        {stage === "intake" && <IntakeForm onSubmit={(d) => { setData(d); setStage("generating"); }} />}
        {stage === "generating" && (
          <GeneratingState
            messages={[
              `Pulling market data for ${data?.city || "your city"}...`,
              `Calculating unit economics for ${data?.sector || "your sector"}...`,
              "Checking PMEGP / Mudra eligibility...",
              "Estimating DSCR and IRR...",
              "Building your 90-day roadmap...",
              "Assembling your report...",
            ]}
            onDone={() => setStage("report")}
          />
        )}
        {stage === "report" && data && <FeasibilityReport data={data} />}
      </motion.div>
    </div>
  );
}
