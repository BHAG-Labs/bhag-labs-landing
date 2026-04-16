import { useState } from "react";
import { Rocket, Calculator, Users, TrendingDown, Receipt, PieChart } from "lucide-react";
import EsopValueCalculator from "@/components/hissa/EsopValueCalculator";
import CoFounderSplit from "@/components/hissa/CoFounderSplit";
import DilutionSimulator from "@/components/hissa/DilutionSimulator";
import EsopTaxCalculator from "@/components/hissa/EsopTaxCalculator";
import EsopPoolPlanner from "@/components/hissa/EsopPoolPlanner";

const tabs = [
  { id: 'esop-value', label: 'ESOP Value', desc: "What are my stock options worth?", icon: Calculator },
  { id: 'cofounder', label: 'Co-Founder Split', desc: "How should founders divide equity?", icon: Users },
  { id: 'dilution', label: 'Dilution Simulator', desc: "How will funding rounds dilute my stake?", icon: TrendingDown },
  { id: 'tax', label: 'ESOP Tax', desc: "What will I owe in taxes?", icon: Receipt },
  { id: 'pool', label: 'ESOP Pool Planner', desc: "How much equity to set aside?", icon: PieChart },
];

export default function Hissa() {
  const [activeTab, setActiveTab] = useState('esop-value');

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      {/* Header */}
      <header className="border-b-2 border-foreground/10 bg-[hsl(var(--cream))]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-1.5 text-foreground/60 hover:text-foreground transition-colors text-sm">
              <Rocket className="w-4 h-4 text-terracotta" />
              BHAG Labs
            </a>
            <span className="text-foreground/20">◆</span>
            <span className="text-foreground font-heading font-bold text-lg">Hissa</span>
          </div>
          <a href="/" className="text-xs text-foreground/50 hover:text-foreground transition-colors">← Back to BHAG Labs</a>
        </div>
      </header>

      {/* Tab bar */}
      <div className="border-b-2 border-foreground/10 bg-[hsl(var(--cream-dark))]/50 sticky top-[53px] z-40">
        <div className="max-w-[1200px] mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 min-w-max py-2">
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium transition-all whitespace-nowrap ${
                  activeTab === t.id
                    ? 'bg-terracotta text-[hsl(var(--cream))] font-semibold'
                    : 'text-foreground/50 hover:text-foreground hover:bg-[hsl(var(--cream-dark))]'
                }`}
              >
                <t.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.label}</span>
                <span className="sm:hidden">{t.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab description */}
      <div className="max-w-[1200px] mx-auto px-4 pt-6 pb-2">
        <p className="text-sm text-muted-foreground">{tabs.find(t => t.id === activeTab)?.desc}</p>
      </div>

      {/* Content */}
      <main className="max-w-[1200px] mx-auto px-4 pb-16">
        {activeTab === 'esop-value' && <EsopValueCalculator />}
        {activeTab === 'cofounder' && <CoFounderSplit />}
        {activeTab === 'dilution' && <DilutionSimulator />}
        {activeTab === 'tax' && <EsopTaxCalculator />}
        {activeTab === 'pool' && <EsopPoolPlanner />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-[1200px] mx-auto text-center space-y-3">
          <p className="text-sm text-muted-foreground">Hissa by BHAG Labs — Equity tools built for the Indian startup ecosystem.</p>
          <div className="flex justify-center gap-6 text-xs text-muted-foreground/60">
            <a href="/" className="hover:text-foreground transition-colors">About BHAG Labs</a>
            <a href="/#neev" className="hover:text-foreground transition-colors">Neev — Lean LaunchPad</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          </div>
          <p className="text-[10px] text-muted-foreground/40">© 2026 BHAG Labs Pvt. Ltd. All rights reserved.</p>
          <p className="text-[10px] text-muted-foreground/40 max-w-xl mx-auto">Hissa provides estimates for educational purposes only. It is not financial, legal, or tax advice. Consult a qualified Chartered Accountant or Company Secretary for your specific situation.</p>
        </div>
      </footer>
    </div>
  );
}
