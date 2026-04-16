import { useState, useMemo } from "react";
import { formatPercent } from "@/lib/formatters";

const questions = [
  { q: "Who came up with the original idea?", weight: 5, type: "single" as const, joint: true },
  { q: "Who is the CEO / primary business lead?", weight: 10, type: "single" as const },
  { q: "Who is building the product (lead dev/technical co-founder)?", weight: 9, type: "single" as const },
  { q: "Who has relevant domain expertise?", weight: 7, type: "multi" as const },
  { q: "Who is working full-time right now?", weight: 8, type: "multi" as const },
  { q: "Who has prior startup experience?", weight: 5, type: "multi" as const },
  { q: "Who brought in the first customers or revenue?", weight: 6, type: "single" as const, none: true },
  { q: "Who has been working on this the longest?", weight: 4, type: "single" as const },
  { q: "Who is bringing critical relationships?", weight: 5, type: "multi" as const },
  { q: "Who is making a significant personal financial investment?", weight: 4, type: "multi" as const },
  { q: "Who has the highest opportunity cost?", weight: 3, type: "single" as const, equal: true },
];

export default function CoFounderSplit() {
  const [numFounders, setNumFounders] = useState(2);
  const [names, setNames] = useState(["Founder 1", "Founder 2", "Founder 3", "Founder 4"]);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});

  const founders = names.slice(0, numFounders);

  const setAnswer = (qi: number, val: string[]) => {
    setAnswers(prev => ({ ...prev, [qi]: val }));
  };

  const toggleMulti = (qi: number, name: string) => {
    const current = answers[qi] || [];
    if (current.includes(name)) {
      setAnswer(qi, current.filter(n => n !== name));
    } else {
      setAnswer(qi, [...current.filter(n => n !== 'joint' && n !== 'none' && n !== 'equal'), name]);
    }
  };

  const result = useMemo(() => {
    const points: Record<string, number> = {};
    founders.forEach(f => { points[f] = 0; });

    questions.forEach((q, qi) => {
      const ans = answers[qi] || [];
      if (ans.length === 0) return;

      if (ans.includes('joint') || ans.includes('equal')) {
        const share = q.weight / numFounders;
        founders.forEach(f => { points[f] += share; });
      } else if (ans.includes('none')) {
        // no points
      } else {
        const selectedFounders = ans.filter(a => founders.includes(a));
        if (selectedFounders.length > 0) {
          const share = q.weight / selectedFounders.length;
          selectedFounders.forEach(f => { points[f] += share; });
        }
      }
    });

    const total = Object.values(points).reduce((a, b) => a + b, 0);
    if (total === 0) return founders.map(f => ({ name: f, pct: 100 / numFounders }));

    let splits = founders.map(f => ({
      name: f,
      pct: (points[f] / total) * 100,
    }));

    // Apply 10% floor
    const belowFloor = splits.filter(s => s.pct < 10);
    if (belowFloor.length > 0 && belowFloor.length < splits.length) {
      const deficit = belowFloor.reduce((sum, s) => sum + (10 - s.pct), 0);
      const aboveFloor = splits.filter(s => s.pct >= 10);
      const aboveTotal = aboveFloor.reduce((sum, s) => sum + s.pct, 0);
      splits = splits.map(s => {
        if (s.pct < 10) return { ...s, pct: 10 };
        return { ...s, pct: s.pct - (deficit * (s.pct / aboveTotal)) };
      });
    }

    // Round to nearest 0.5
    splits = splits.map(s => ({ ...s, pct: Math.round(s.pct * 2) / 2 }));

    return splits;
  }, [answers, founders, numFounders]);

  const colors = ['bg-primary', 'bg-teal', 'bg-accent', 'bg-amber-500'];
  const maxPct = Math.max(...result.map(r => r.pct));

  return (
    <div className="space-y-6">
      {/* Setup */}
      <div className="gradient-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Setup</h3>
        <div className="mb-4">
          <label className="block text-xs font-medium text-muted-foreground mb-1">How many co-founders?</label>
          <div className="flex gap-2">
            {[2, 3, 4].map(n => (
              <button key={n} onClick={() => setNumFounders(n)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${numFounders === n ? 'bg-primary text-primary-foreground' : 'bg-[hsl(var(--cream-dark))] text-muted-foreground hover:text-foreground'}`}>{n}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {founders.map((f, i) => (
            <div key={i}>
              <label className="block text-xs text-muted-foreground mb-1">Founder {i + 1}</label>
              <input value={f} onChange={e => { const n = [...names]; n[i] = e.target.value; setNames(n); }} className="w-full px-3 py-2 rounded-lg bg-[hsl(var(--cream-dark))] border border-foreground/15 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="gradient-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Questionnaire</h3>
        <div className="space-y-5">
          {questions.slice(0, 11).map((q, qi) => (
            <div key={qi} className="pb-4 border-b border-foreground/15/30 last:border-0">
              <p className="text-xs font-medium text-foreground mb-2">{qi + 1}. {q.q} <span className="text-muted-foreground/50">({q.weight}pts)</span></p>
              <div className="flex flex-wrap gap-2">
                {founders.map(f => {
                  const selected = (answers[qi] || []).includes(f);
                  if (q.type === 'single') {
                    return (
                      <button key={f} onClick={() => setAnswer(qi, [f])} className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${selected ? 'bg-primary text-primary-foreground' : 'bg-[hsl(var(--cream-dark))] text-muted-foreground hover:text-foreground'}`}>{f}</button>
                    );
                  }
                  return (
                    <button key={f} onClick={() => toggleMulti(qi, f)} className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${selected ? 'bg-primary text-primary-foreground' : 'bg-[hsl(var(--cream-dark))] text-muted-foreground hover:text-foreground'}`}>{f}</button>
                  );
                })}
                {q.joint && <button onClick={() => setAnswer(qi, ['joint'])} className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${(answers[qi] || []).includes('joint') ? 'bg-primary text-primary-foreground' : 'bg-[hsl(var(--cream-dark))] text-muted-foreground'}`}>Joint idea</button>}
                {q.none && <button onClick={() => setAnswer(qi, ['none'])} className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${(answers[qi] || []).includes('none') ? 'bg-primary text-primary-foreground' : 'bg-[hsl(var(--cream-dark))] text-muted-foreground'}`}>No revenue yet</button>}
                {q.equal && <button onClick={() => setAnswer(qi, ['equal'])} className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${(answers[qi] || []).includes('equal') ? 'bg-primary text-primary-foreground' : 'bg-[hsl(var(--cream-dark))] text-muted-foreground'}`}>Roughly equal</button>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="gradient-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Recommended Equity Split</h3>
        {/* Stacked bar */}
        <div className="h-8 rounded-full overflow-hidden flex mb-4">
          {result.map((r, i) => (
            <div key={r.name} className={`${colors[i]} flex items-center justify-center text-[10px] font-bold text-primary-foreground`} style={{ width: `${r.pct}%` }}>
              {r.pct >= 10 ? `${r.pct}%` : ''}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {result.map((r, i) => (
            <div key={r.name} className="bg-[hsl(var(--cream-dark))] rounded-lg p-3">
              <div className={`w-3 h-3 rounded-full ${colors[i]} mb-2`} />
              <p className="text-sm font-semibold text-foreground">{r.name}</p>
              <p className="text-lg font-bold text-foreground">{formatPercent(r.pct, 1)}</p>
              <p className="text-[10px] text-muted-foreground mt-1">4yr vesting, 1yr cliff recommended</p>
            </div>
          ))}
        </div>

        {maxPct > 70 && (
          <div className="mt-4 text-xs text-amber-400 bg-amber-400/10 rounded-lg p-3">
            ⚠️ This suggests a very unequal split. Consider whether all participants are truly co-founders or if some are better classified as early employees with ESOP.
          </div>
        )}

        <div className="mt-4 text-xs text-muted-foreground bg-[hsl(var(--cream-dark))] rounded-lg p-3">
          💡 We strongly recommend 4-year vesting with a 1-year cliff for ALL co-founders, including the CEO. This protects everyone if someone leaves early.
        </div>
      </div>
    </div>
  );
}
