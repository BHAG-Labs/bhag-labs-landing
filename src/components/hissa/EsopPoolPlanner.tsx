import { useState, useMemo } from "react";
import { formatPercent } from "@/lib/formatters";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type Stage = 'pre-seed' | 'seed' | 'series-a' | 'series-b';
type Seniority = 'c-level' | 'vp' | 'senior' | 'mid' | 'junior';

const benchmarks: Record<Seniority, Record<Stage, [number, number]>> = {
  'c-level': { 'pre-seed': [1.0, 2.0], 'seed': [0.5, 1.5], 'series-a': [0.5, 0.75], 'series-b': [0.25, 0.5] },
  'vp': { 'pre-seed': [0.5, 1.0], 'seed': [0.3, 0.7], 'series-a': [0.2, 0.5], 'series-b': [0.1, 0.3] },
  'senior': { 'pre-seed': [0.25, 0.5], 'seed': [0.15, 0.4], 'series-a': [0.1, 0.25], 'series-b': [0.05, 0.15] },
  'mid': { 'pre-seed': [0.1, 0.25], 'seed': [0.05, 0.2], 'series-a': [0.05, 0.1], 'series-b': [0.02, 0.05] },
  'junior': { 'pre-seed': [0.05, 0.1], 'seed': [0.02, 0.05], 'series-a': [0.01, 0.05], 'series-b': [0.01, 0.02] },
};

const stageBenchmarks: Record<Stage, [number, number]> = {
  'pre-seed': [5, 8], 'seed': [10, 12], 'series-a': [12, 15], 'series-b': [15, 20],
};

const seniorityLabels: Record<Seniority, string> = {
  'c-level': 'C-Level / Co-Founder', 'vp': 'VP / Director', 'senior': 'Senior / Lead', 'mid': 'Mid-Level', 'junior': 'Junior',
};

interface HireRow {
  role: string;
  seniority: Seniority;
  count: number;
}

export default function EsopPoolPlanner() {
  const [stage, setStage] = useState<Stage>('seed');
  const [hires, setHires] = useState<HireRow[]>([
    { role: "CTO", seniority: 'c-level', count: 1 },
    { role: "Senior Engineer", seniority: 'senior', count: 2 },
    { role: "Marketing Manager", seniority: 'mid', count: 1 },
  ]);
  const [numAdvisors, setNumAdvisors] = useState(2);
  const [advisorEquity, setAdvisorEquity] = useState(0.25);

  const updateHire = (i: number, patch: Partial<HireRow>) => {
    const h = [...hires];
    h[i] = { ...h[i], ...patch };
    setHires(h);
  };

  const addHire = () => {
    if (hires.length >= 15) return;
    setHires([...hires, { role: "", seniority: 'mid', count: 1 }]);
  };

  const removeHire = (i: number) => {
    setHires(hires.filter((_, j) => j !== i));
  };

  const result = useMemo(() => {
    const breakdown = hires.map(h => {
      const [lo, hi] = benchmarks[h.seniority][stage];
      const mid = (lo + hi) / 2;
      return { ...h, equityEach: mid, totalEquity: mid * h.count };
    });
    const totalEmployee = breakdown.reduce((s, b) => s + b.totalEquity, 0);
    const totalAdvisor = numAdvisors * advisorEquity;
    const buffer = (totalEmployee + totalAdvisor) * 0.2;
    const recommended = totalEmployee + totalAdvisor + buffer;

    const [benchLo, benchHi] = stageBenchmarks[stage];
    const status = recommended < benchLo ? 'below' : recommended > benchHi ? 'above' : 'within';

    return { breakdown, totalEmployee, totalAdvisor, buffer, recommended, benchLo, benchHi, status };
  }, [hires, stage, numAdvisors, advisorEquity]);

  const pieData = [
    ...Object.entries(
      result.breakdown.reduce((acc, b) => {
        const key = seniorityLabels[b.seniority];
        acc[key] = (acc[key] || 0) + b.totalEquity;
        return acc;
      }, {} as Record<string, number>)
    ).map(([name, value]) => ({ name, value })),
    { name: "Advisors", value: result.totalAdvisor },
    { name: "Buffer", value: result.buffer },
  ].filter(d => d.value > 0);

  const pieColors = ['#3b82f6', '#14b8a6', '#8b5cf6', '#f59e0b', '#ec4899', '#64748b', '#6b7280'];

  return (
    <div className="space-y-6">
      <div className="gradient-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Company Stage</h3>
        <div className="flex flex-wrap gap-2">
          {(['pre-seed', 'seed', 'series-a', 'series-b'] as Stage[]).map(s => (
            <button key={s} onClick={() => setStage(s)} className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${stage === s ? 'bg-primary text-primary-foreground' : 'bg-[hsl(var(--cream-dark))] text-muted-foreground hover:text-foreground'}`}>
              {s === 'pre-seed' ? 'Pre-Seed' : s === 'seed' ? 'Seed' : s === 'series-a' ? 'Series A' : 'Series B+'}
            </button>
          ))}
        </div>
      </div>

      <div className="gradient-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Hiring Plan (next 18-24 months)</h3>
        <div className="space-y-2">
          {hires.map((h, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 items-end">
              <div className="col-span-4">
                {i === 0 && <label className="block text-[10px] text-muted-foreground mb-1">Role</label>}
                <input value={h.role} onChange={e => updateHire(i, { role: e.target.value })} className="w-full px-2 py-2 rounded-lg bg-[hsl(var(--cream-dark))] border border-border text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Role title" />
              </div>
              <div className="col-span-4">
                {i === 0 && <label className="block text-[10px] text-muted-foreground mb-1">Seniority</label>}
                <select value={h.seniority} onChange={e => updateHire(i, { seniority: e.target.value as Seniority })} className="w-full px-2 py-2 rounded-lg bg-[hsl(var(--cream-dark))] border border-border text-foreground text-xs">
                  {Object.entries(seniorityLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </div>
              <div className="col-span-2">
                {i === 0 && <label className="block text-[10px] text-muted-foreground mb-1">#</label>}
                <input type="number" min={1} value={h.count} onChange={e => updateHire(i, { count: Number(e.target.value) || 1 })} className="w-full px-2 py-2 rounded-lg bg-[hsl(var(--cream-dark))] border border-border text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div className="col-span-2 flex justify-end">
                <button onClick={() => removeHire(i)} className="px-2 py-2 text-xs text-destructive hover:text-destructive/80">✕</button>
              </div>
            </div>
          ))}
        </div>
        {hires.length < 15 && (
          <button onClick={addHire} className="mt-3 text-xs text-primary hover:underline">+ Add role</button>
        )}
      </div>

      <div className="gradient-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Advisor Allocation</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-muted-foreground mb-1">Number of Advisors</label>
            <input type="number" min={0} value={numAdvisors} onChange={e => setNumAdvisors(Number(e.target.value) || 0)} className="w-full px-3 py-2 rounded-lg bg-[hsl(var(--cream-dark))] border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1">Equity/Advisor: {advisorEquity}%</label>
            <input type="range" min={0.1} max={0.5} step={0.05} value={advisorEquity} onChange={e => setAdvisorEquity(Number(e.target.value))} className="w-full accent-primary mt-1" />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="gradient-border rounded-xl p-5 text-center">
          <p className="text-xs text-muted-foreground mb-2">Recommended ESOP Pool</p>
          <p className="text-4xl font-bold text-primary">{formatPercent(result.recommended, 1)}</p>
          <p className="text-xs text-muted-foreground mt-2">
            Benchmark for {stage}: {result.benchLo}-{result.benchHi}% →{' '}
            <span className={result.status === 'within' ? 'text-emerald-400' : 'text-amber-400'}>
              {result.status === 'within' ? '✅ Within range' : result.status === 'above' ? '⚠️ Above range' : '⚠️ Below range'}
            </span>
          </p>
        </div>

        <div className="gradient-border rounded-xl p-5">
          <p className="text-xs text-muted-foreground mb-2 text-center">Pool Composition</p>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={35} outerRadius={60} dataKey="value" paddingAngle={2}>
                  {pieData.map((_, i) => <Cell key={i} fill={pieColors[i % pieColors.length]} />)}
                </Pie>
                <Tooltip formatter={(v: number) => `${v.toFixed(2)}%`} contentStyle={{ background: '#131B2E', border: '1px solid #1E293B', borderRadius: 8, fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {pieData.map((d, i) => (
              <span key={d.name} className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <span className="w-2 h-2 rounded-full" style={{ background: pieColors[i % pieColors.length] }} />{d.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="gradient-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Hiring Plan Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-2 text-left text-muted-foreground">Role</th>
                <th className="pb-2 text-center text-muted-foreground">Seniority</th>
                <th className="pb-2 text-center text-muted-foreground">#</th>
                <th className="pb-2 text-center text-muted-foreground">Each</th>
                <th className="pb-2 text-center text-muted-foreground">Total</th>
              </tr>
            </thead>
            <tbody>
              {result.breakdown.map((b, i) => (
                <tr key={i} className="border-b border-border/30">
                  <td className="py-2 text-foreground">{b.role || '—'}</td>
                  <td className="py-2 text-center text-muted-foreground">{seniorityLabels[b.seniority]}</td>
                  <td className="py-2 text-center text-foreground">{b.count}</td>
                  <td className="py-2 text-center text-foreground">{formatPercent(b.equityEach, 2)}</td>
                  <td className="py-2 text-center text-foreground font-medium">{formatPercent(b.totalEquity, 2)}</td>
                </tr>
              ))}
              <tr className="border-b border-border/30">
                <td className="py-2 text-muted-foreground" colSpan={4}>Advisors ({numAdvisors} × {advisorEquity}%)</td>
                <td className="py-2 text-center text-foreground font-medium">{formatPercent(result.totalAdvisor, 2)}</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="py-2 text-muted-foreground" colSpan={4}>Buffer (20%)</td>
                <td className="py-2 text-center text-foreground font-medium">{formatPercent(result.buffer, 2)}</td>
              </tr>
              <tr>
                <td className="py-2 text-foreground font-semibold" colSpan={4}>Total</td>
                <td className="py-2 text-center text-primary font-bold">{formatPercent(result.recommended, 2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-xs text-muted-foreground">
        <strong className="text-primary">💡 Investor Tip:</strong> Investors at Series A typically expect a 12-15% ESOP pool (pre-money). If your pool is smaller, expect to top it up during the round — and this dilution falls primarily on founders. Plan ahead.
      </div>
    </div>
  );
}
