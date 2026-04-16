import { useState, useMemo } from "react";
import { formatINR, formatPercent } from "@/lib/formatters";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface Round {
  enabled: boolean;
  name: string;
  amount: number; // in Cr
  preMoney: number; // in Cr
  esopTopUp: number; // %
}

const defaultRounds: Round[] = [
  { enabled: true, name: "Pre-Seed", amount: 1, preMoney: 4, esopTopUp: 0 },
  { enabled: true, name: "Seed", amount: 5, preMoney: 20, esopTopUp: 2 },
  { enabled: false, name: "Series A", amount: 25, preMoney: 100, esopTopUp: 3 },
  { enabled: false, name: "Series B", amount: 75, preMoney: 350, esopTopUp: 2 },
];

export default function DilutionSimulator() {
  const [numFounders, setNumFounders] = useState(2);
  const [founderSplits, setFounderSplits] = useState([50, 50, 0]);
  const [initialEsop, setInitialEsop] = useState(10);
  const [rounds, setRounds] = useState<Round[]>(defaultRounds);

  const updateRound = (i: number, patch: Partial<Round>) => {
    const r = [...rounds];
    r[i] = { ...r[i], ...patch };
    setRounds(r);
  };

  const result = useMemo(() => {
    const stages: { stage: string; founders: number[]; esop: number; investors: number; postMoney: number | null }[] = [];

    // Day 0
    const founderTotal = 100 - initialEsop;
    const fSplits = founderSplits.slice(0, numFounders);
    const fTotal = fSplits.reduce((a, b) => a + b, 0);
    const normalizedSplits = fSplits.map(s => (fTotal > 0 ? (s / fTotal) * founderTotal : founderTotal / numFounders));

    stages.push({ stage: "Day 0", founders: normalizedSplits, esop: initialEsop, investors: 0, postMoney: null });

    let cumFounders = [...normalizedSplits];
    let cumEsop = initialEsop;
    let cumInvestors = 0;

    for (const round of rounds) {
      if (!round.enabled) continue;
      const postMoney = round.preMoney + round.amount;
      const investorPct = (round.amount / postMoney) * 100;

      // ESOP top-up comes pre-money, dilutes everyone proportionally
      const esopDilution = round.esopTopUp;
      const remainingAfterEsop = 100 - esopDilution;

      cumFounders = cumFounders.map(f => (f * remainingAfterEsop) / 100);
      cumEsop = (cumEsop * remainingAfterEsop) / 100 + esopDilution;
      cumInvestors = (cumInvestors * remainingAfterEsop) / 100;

      // Now investor dilutes everyone
      const remainingAfterInvestor = 100 - investorPct;
      cumFounders = cumFounders.map(f => (f * remainingAfterInvestor) / 100);
      cumEsop = (cumEsop * remainingAfterInvestor) / 100;
      cumInvestors = (cumInvestors * remainingAfterInvestor) / 100 + investorPct;

      stages.push({
        stage: `Post ${round.name}`,
        founders: [...cumFounders],
        esop: cumEsop,
        investors: cumInvestors,
        postMoney: postMoney,
      });
    }

    return stages;
  }, [numFounders, founderSplits, initialEsop, rounds]);

  const chartData = result.map(s => {
    const obj: Record<string, string | number> = { stage: s.stage };
    s.founders.forEach((f, i) => { obj[`Founder ${i + 1}`] = Math.round(f * 100) / 100; });
    obj['ESOP'] = Math.round(s.esop * 100) / 100;
    obj['Investors'] = Math.round(s.investors * 100) / 100;
    return obj;
  });

  const founderColors = ['#3b82f6', '#14b8a6', '#8b5cf6'];
  const lastStage = result[result.length - 1];

  return (
    <div className="space-y-6">
      <div className="gradient-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Initial Setup</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-xs text-muted-foreground mb-1">Founders</label>
            <select value={numFounders} onChange={e => setNumFounders(Number(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-[hsl(var(--cream-dark))] border border-border text-foreground text-sm">
              {[1, 2, 3].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
          {Array.from({ length: numFounders }).map((_, i) => (
            <div key={i}>
              <label className="block text-xs text-muted-foreground mb-1">Founder {i + 1} Split (%)</label>
              <input type="number" value={founderSplits[i]} onChange={e => { const s = [...founderSplits]; s[i] = Number(e.target.value) || 0; setFounderSplits(s); }} className="w-full px-3 py-2 rounded-lg bg-[hsl(var(--cream-dark))] border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          ))}
          <div>
            <label className="block text-xs text-muted-foreground mb-1">Initial ESOP Pool: {initialEsop}%</label>
            <input type="range" min={0} max={20} value={initialEsop} onChange={e => setInitialEsop(Number(e.target.value))} className="w-full accent-primary" />
          </div>
        </div>
      </div>

      {/* Rounds */}
      {rounds.map((round, i) => (
        <div key={round.name} className={`gradient-border rounded-xl p-5 ${!round.enabled ? 'opacity-50' : ''}`}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground">{round.name}</h3>
            <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
              <input type="checkbox" checked={round.enabled} onChange={e => updateRound(i, { enabled: e.target.checked })} className="accent-primary" />
              Include
            </label>
          </div>
          {round.enabled && (
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[10px] text-muted-foreground mb-1">Amount Raised (₹ Cr)</label>
                <input type="number" value={round.amount} onChange={e => updateRound(i, { amount: Number(e.target.value) || 0 })} className="w-full px-3 py-2 rounded-lg bg-[hsl(var(--cream-dark))] border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div>
                <label className="block text-[10px] text-muted-foreground mb-1">Pre-Money Val (₹ Cr)</label>
                <input type="number" value={round.preMoney} onChange={e => updateRound(i, { preMoney: Number(e.target.value) || 0 })} className="w-full px-3 py-2 rounded-lg bg-[hsl(var(--cream-dark))] border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div>
                <label className="block text-[10px] text-muted-foreground mb-1">ESOP Top-Up: {round.esopTopUp}%</label>
                <input type="range" min={0} max={10} value={round.esopTopUp} onChange={e => updateRound(i, { esopTopUp: Number(e.target.value) })} className="w-full accent-primary mt-1" />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Chart */}
      <div className="gradient-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Ownership Over Rounds</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} stackOffset="expand">
              <XAxis dataKey="stage" tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <YAxis tickFormatter={v => `${(v * 100).toFixed(0)}%`} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} contentStyle={{ background: '#131B2E', border: '1px solid #1E293B', borderRadius: 8, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 10 }} />
              {Array.from({ length: numFounders }).map((_, i) => (
                <Bar key={i} dataKey={`Founder ${i + 1}`} stackId="a" fill={founderColors[i]} />
              ))}
              <Bar dataKey="ESOP" stackId="a" fill="#f59e0b" />
              <Bar dataKey="Investors" stackId="a" fill="#64748b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary table */}
      <div className="gradient-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-2 text-left text-muted-foreground">Stage</th>
                {Array.from({ length: numFounders }).map((_, i) => <th key={i} className="pb-2 text-center text-muted-foreground">F{i + 1}</th>)}
                <th className="pb-2 text-center text-muted-foreground">ESOP</th>
                <th className="pb-2 text-center text-muted-foreground">Investors</th>
                <th className="pb-2 text-center text-muted-foreground">Post-Money</th>
              </tr>
            </thead>
            <tbody>
              {result.map(s => (
                <tr key={s.stage} className="border-b border-border/30">
                  <td className="py-2 text-foreground">{s.stage}</td>
                  {s.founders.map((f, i) => <td key={i} className="py-2 text-center text-foreground">{formatPercent(f, 1)}</td>)}
                  <td className="py-2 text-center text-amber-400">{formatPercent(s.esop, 1)}</td>
                  <td className="py-2 text-center text-muted-foreground">{formatPercent(s.investors, 1)}</td>
                  <td className="py-2 text-center text-foreground">{s.postMoney ? `₹${s.postMoney} Cr` : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Value of stake */}
        {lastStage.postMoney && (
          <div className="mt-4 space-y-2">
            {lastStage.founders.map((f, i) => {
              const value = (f / 100) * lastStage.postMoney! * 10000000; // Cr to INR
              return (
                <div key={i} className="flex justify-between text-xs bg-[hsl(var(--cream-dark))] rounded-lg px-3 py-2">
                  <span className="text-muted-foreground">Founder {i + 1}: {formatPercent(f, 1)} ownership</span>
                  <span className="text-emerald-400 font-semibold">Worth {formatINR(value)}</span>
                </div>
              );
            })}
          </div>
        )}

        {lastStage.founders.some(f => f < 10) && (
          <div className="mt-3 text-xs text-amber-400 bg-amber-400/10 rounded-lg p-3">
            ⚠️ Founder ownership below 10% — this may affect governance rights and investor confidence.
          </div>
        )}
      </div>
    </div>
  );
}
