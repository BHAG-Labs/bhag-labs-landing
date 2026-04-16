import { useState } from "react";
import { formatINR, formatPercent } from "@/lib/formatters";

interface CompanyData {
  name: string;
  valuation: number;
  totalShares: number;
  exitValuation: number;
  esopsGranted: number;
  exercisePrice: number;
  vestingYears: number;
  cliffMonths: number;
}

const defaults: [CompanyData, CompanyData] = [
  { name: "Company A", valuation: 1000000000, totalShares: 1000000, exitValuation: 5000000000, esopsGranted: 5000, exercisePrice: 100, vestingYears: 4, cliffMonths: 12 },
  { name: "Company B", valuation: 300000000, totalShares: 500000, exitValuation: 2000000000, esopsGranted: 8000, exercisePrice: 50, vestingYears: 4, cliffMonths: 12 },
];

const vestingOptions = [3, 4, 5];
const cliffOptions = [0, 6, 12, 18];

function calc(d: CompanyData) {
  const pricePerShare = d.totalShares > 0 ? d.valuation / d.totalShares : 0;
  const ownership = d.totalShares > 0 ? (d.esopsGranted / d.totalShares) * 100 : 0;
  const intrinsicPerShare = Math.max(0, pricePerShare - d.exercisePrice);
  const totalIntrinsic = intrinsicPerShare * d.esopsGranted;
  const costToExercise = d.exercisePrice * d.esopsGranted;
  const exitSharePrice = d.totalShares > 0 ? d.exitValuation / d.totalShares : 0;
  const valueAtExit = exitSharePrice * d.esopsGranted;
  const netPayout = valueAtExit - costToExercise;
  const isUnderwater = pricePerShare < d.exercisePrice;
  return { pricePerShare, ownership, intrinsicPerShare, totalIntrinsic, costToExercise, valueAtExit, netPayout, isUnderwater };
}

const InputField = ({ label, value, onChange, prefix, suffix, helper, type = "number" }: {
  label: string; value: string | number; onChange: (v: string) => void; prefix?: string; suffix?: string; helper?: string; type?: string;
}) => (
  <div className="mb-3">
    <label className="block text-xs font-medium text-muted-foreground mb-1">{label}</label>
    <div className="relative">
      {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">{prefix}</span>}
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`w-full px-3 py-2 rounded-lg bg-[hsl(var(--cream-dark))] border border-foreground/15 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 ${prefix ? 'pl-7' : ''} ${suffix ? 'pr-7' : ''}`}
      />
      {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">{suffix}</span>}
    </div>
    {helper && <p className="text-[10px] text-muted-foreground/60 mt-0.5">{helper}</p>}
  </div>
);

const VestingTimeline = ({ years, cliff }: { years: number; cliff: number }) => {
  const cliffYears = cliff / 12;
  return (
    <div className="mt-3">
      <p className="text-[10px] font-medium text-muted-foreground mb-1">Vesting Schedule</p>
      <div className="h-2 rounded-full bg-[hsl(var(--cream-dark))] overflow-hidden flex">
        {Array.from({ length: years }).map((_, i) => {
          const vested = i + 1 > cliffYears;
          return <div key={i} className={`flex-1 ${vested ? 'bg-primary' : 'bg-destructive/30'} ${i > 0 ? 'ml-px' : ''}`} />;
        })}
      </div>
      <div className="flex justify-between text-[9px] text-muted-foreground mt-0.5">
        {Array.from({ length: years }).map((_, i) => (
          <span key={i}>{i + 1 <= cliff / 12 ? `Yr${i + 1} (cliff)` : `Yr${i + 1}: ${Math.round(((i + 1) / years) * 100)}%`}</span>
        ))}
      </div>
    </div>
  );
};

const CompanyCard = ({ data, onChange }: { data: CompanyData; onChange: (d: CompanyData) => void }) => {
  const r = calc(data);
  return (
    <div className="gradient-border rounded-xl p-5">
      <InputField label="Company Name" value={data.name} onChange={v => onChange({ ...data, name: v })} type="text" />
      <InputField label="Last Valuation (Post-Money)" value={data.valuation} onChange={v => onChange({ ...data, valuation: Number(v) || 0 })} prefix="₹" helper="Valuation after last funding round" />
      <InputField label="Total Fully-Diluted Shares" value={data.totalShares} onChange={v => onChange({ ...data, totalShares: Number(v) || 0 })} helper="Total shares including ESOP pool. Ask HR." />
      <InputField label="Hypothetical Exit Valuation" value={data.exitValuation} onChange={v => onChange({ ...data, exitValuation: Number(v) || 0 })} prefix="₹" helper="Value at IPO or acquisition" />
      <hr className="border-foreground/15 my-4" />
      <InputField label="ESOPs Granted" value={data.esopsGranted} onChange={v => onChange({ ...data, esopsGranted: Number(v) || 0 })} />
      <InputField label="Exercise Price (per share)" value={data.exercisePrice} onChange={v => onChange({ ...data, exercisePrice: Number(v) || 0 })} prefix="₹" />
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1">Vesting Period</label>
          <select value={data.vestingYears} onChange={e => onChange({ ...data, vestingYears: Number(e.target.value) })} className="w-full px-3 py-2 rounded-lg bg-[hsl(var(--cream-dark))] border border-foreground/15 text-foreground text-sm">
            {vestingOptions.map(y => <option key={y} value={y}>{y} years</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1">Cliff Period</label>
          <select value={data.cliffMonths} onChange={e => onChange({ ...data, cliffMonths: Number(e.target.value) })} className="w-full px-3 py-2 rounded-lg bg-[hsl(var(--cream-dark))] border border-foreground/15 text-foreground text-sm">
            {cliffOptions.map(m => <option key={m} value={m}>{m} months</option>)}
          </select>
        </div>
      </div>
      <hr className="border-foreground/15 my-4" />
      <div className="space-y-2">
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Price/Share</span><span className="text-foreground font-semibold">{formatINR(r.pricePerShare)}</span></div>
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Ownership</span><span className="text-foreground font-semibold">{formatPercent(r.ownership, 3)}</span></div>
        {r.isUnderwater && <div className="text-xs text-amber-400 bg-amber-400/10 rounded px-2 py-1">⚠️ Options are currently underwater</div>}
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Intrinsic Value</span><span className="text-foreground font-semibold">{formatINR(r.totalIntrinsic)}</span></div>
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Cost to Exercise</span><span className="text-amber-400 font-semibold">{formatINR(r.costToExercise)}</span></div>
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Value at Exit</span><span className="text-foreground font-semibold">{formatINR(r.valueAtExit)}</span></div>
        <div className="flex justify-between text-base pt-2 border-t border-foreground/15"><span className="text-muted-foreground font-medium">Net Payout at Exit</span><span className={`font-bold ${r.netPayout >= 0 ? 'text-emerald-400' : 'text-destructive'}`}>{formatINR(r.netPayout)}</span></div>
      </div>
      <VestingTimeline years={data.vestingYears} cliff={data.cliffMonths} />
    </div>
  );
};

export default function EsopValueCalculator() {
  const [companies, setCompanies] = useState<[CompanyData, CompanyData]>(defaults);
  const rA = calc(companies[0]);
  const rB = calc(companies[1]);

  const winner = (a: number, b: number, lowerBetter = false) => {
    if (a === b) return null;
    return lowerBetter ? (a < b ? 'A' : 'B') : (a > b ? 'A' : 'B');
  };

  const comparisons = [
    { metric: "Ownership %", a: formatPercent(rA.ownership, 3), b: formatPercent(rB.ownership, 3), w: winner(rA.ownership, rB.ownership) },
    { metric: "Net Payout at Exit", a: formatINR(rA.netPayout), b: formatINR(rB.netPayout), w: winner(rA.netPayout, rB.netPayout) },
    { metric: "Cost to Exercise", a: formatINR(rA.costToExercise), b: formatINR(rB.costToExercise), w: winner(rA.costToExercise, rB.costToExercise, true) },
    { metric: "Intrinsic Value", a: formatINR(rA.totalIntrinsic), b: formatINR(rB.totalIntrinsic), w: winner(rA.totalIntrinsic, rB.totalIntrinsic) },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <CompanyCard data={companies[0]} onChange={d => setCompanies([d, companies[1]])} />
        <CompanyCard data={companies[1]} onChange={d => setCompanies([companies[0], d])} />
      </div>

      <div className="gradient-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Comparison Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-foreground/15">
                <th className="pb-2 text-left text-muted-foreground font-medium text-xs">Metric</th>
                <th className="pb-2 text-center text-muted-foreground font-medium text-xs">{companies[0].name}</th>
                <th className="pb-2 text-center text-muted-foreground font-medium text-xs">{companies[1].name}</th>
                <th className="pb-2 text-center text-muted-foreground font-medium text-xs">Winner</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map(c => (
                <tr key={c.metric} className="border-b border-foreground/15/30">
                  <td className="py-2 text-foreground text-xs">{c.metric}</td>
                  <td className={`py-2 text-center text-xs ${c.w === 'A' ? 'text-emerald-400 font-semibold' : 'text-muted-foreground'}`}>{c.a}</td>
                  <td className={`py-2 text-center text-xs ${c.w === 'B' ? 'text-emerald-400 font-semibold' : 'text-muted-foreground'}`}>{c.b}</td>
                  <td className="py-2 text-center text-xs">{c.w ? (c.w === 'A' ? `✅ ${companies[0].name}` : `✅ ${companies[1].name}`) : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-muted-foreground/50 mt-4">This calculator provides estimates only. Actual outcomes depend on liquidation preferences, future dilution, and exit structure. Consult a financial advisor.</p>
      </div>
    </div>
  );
}
