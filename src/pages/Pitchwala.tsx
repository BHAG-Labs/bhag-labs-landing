import { motion } from "framer-motion";
import { useState } from "react";
import SolutionHeader from "@/components/solutions/SolutionHeader";
import AuthShell from "@/components/solutions/AuthShell";
import GeneratingState from "@/components/solutions/GeneratingState";
import PitchwalaLanding from "@/components/pitchwala/PitchwalaLanding";
import PitchwalaWizard, { type WizardData } from "@/components/pitchwala/PitchwalaWizard";
import DeckPreview from "@/components/pitchwala/DeckPreview";

type Stage = "landing" | "auth" | "wizard" | "generating" | "deck";

export default function Pitchwala() {
  const [stage, setStage] = useState<Stage>("landing");
  const [data, setData] = useState<WizardData | null>(null);

  return (
    <div className="min-h-screen bg-cream">
      <SolutionHeader name="Pitchwala" />
      <motion.div key={stage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        {stage === "landing" && <PitchwalaLanding onStart={() => setStage("auth")} />}
        {stage === "auth" && (
          <AuthShell
            product="PITCHWALA"
            tagline="9 questions. 10 slides. Built for Indian investors."
            onAuth={() => setStage("wizard")}
          />
        )}
        {stage === "wizard" && (
          <PitchwalaWizard
            onComplete={(d) => {
              setData(d);
              setStage("generating");
            }}
          />
        )}
        {stage === "generating" && (
          <GeneratingState
            messages={[
              "Reading your problem statement...",
              "Structuring your narrative arc...",
              "Framing your market opportunity...",
              "Building your competitive matrix...",
              "Composing your team slide...",
              "Finalizing your ask...",
            ]}
            onDone={() => setStage("deck")}
          />
        )}
        {stage === "deck" && data && <DeckPreview data={data} onEdit={() => setStage("wizard")} />}
      </motion.div>
    </div>
  );
}
