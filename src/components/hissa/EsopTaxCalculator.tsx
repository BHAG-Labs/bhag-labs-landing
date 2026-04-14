import { useState, useMemo } from "react";
import { formatINR, formatPercent } from "@/lib/formatters";
import { calculateIncomeTax, calculateCapitalGainsTax } from "@/lib/indianTax";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

type CompanyType = 'listed' | 'startup' | 'unlisted';
type HoldingPeriod = '<12' | '12-24' | '>24';

export default function EsopTaxCalculator() {
  const [esops, setEsops] = useState(10000);
  const [exercisePrice, setExercisePrice] = useState(50);
  const [fmv, setFmv] = useState(500);
  const [salePrice, setSalePrice] = useState(800);
  const [salary, setSalary] = useState(2000000);
  const [regime, setRegime] = useState<'new' | 'old'>('new');
  const [companyType, setCompanyType] = useState<CompanyType>('unlisted');
  const [holding, setHolding] = useState<HoldingPeriod>('>24');

  const holdingMonths = holding === '<12' ? 6 : holding === '12-24' ? 18 : 30;
  const isListed = companyType === 'listed';

  const result = useMemo(() => {
    const perquisiteValue = Math.max(0, fmv - exercisePrice) * esops;
    const totalIncome = salary + perquisiteValue;

    const taxWithEsop = calculateIncomeTax(totalIncome, regime);
    const taxWithout = calculateIncomeTax(salary, regime);
    const perquisiteTax = taxWithEsop.totalTax - taxWithout.totalTax;
    const effectivePerqRate = perquisiteValue > 0 ? (perquisiteTax / perquisiteValue) * 100 : 0;

    // Alt regime comparison
    const altRegime = regime === 'new' ? 'old' : 'new';
    const altTaxWithEsop = calculateIncomeTax(totalIncome, altRegime);
    const altTaxWithout = calculateIncomeTax(salary, altRegime);
    const altPerquisiteTax = altTaxWithEsop.totalTax - altTaxWithout.totalTax;

    const capitalGain = (salePrice - fmv) * esops;
    // For STCG on unlisted at slab: calculate marginal rate
    const marginalRate = totalIncome > 2400000 ? 0.312 : totalIncome > 2000000 ? 0.26 : totalIncome > 1600000 ? 0.208 : 0.156;
    const cgTax = calculateCapitalGainsTax({ gain: capitalGain, isListed, holdingMonths, slabRate: marginalRate });

    const grossProceeds = salePrice * esops;
    const costToExercise = exercisePrice * esops;
    const totalTax = perquisiteTax + cgTax;
    const netInHand = grossProceeds - costToExercise - totalTax;

    return { perquisiteValue, perquisiteTax, altPerquisiteTax, effectivePerqRate, capitalGain, cgTax, grossProceeds, costToExercise, totalTax, netInHand, altRegime };
  }, [esops, exercisePrice, fmv, salePrice, salary, regime, companyType, holding, holdingMonths, isListed]);

  const waterfall = [
    { name: "Gross Value", value: result.grossProceeds, color: "#f8fafc" },
    { name: "Exercise Cost", value: -result.costToExercise, color: "#f59e0b" },
    { name: "Perquisite Tax", value: -result.perquisiteTax, color: "#ef4444" },
    { name: "CG Tax", value: -result.cgTax, color: "#ef4444" },
    { name: "Net in Hand", value: result.netInHand, color: "#10b981" },
  ];

  const isUnderwater = exercisePrice > fmv;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="gradient-border rounded-xl p-5 space-y-3">
          <h3 className="text-sm font-semibold text-foreground mb-3">Your ESOP Details</h3>
          {[
            { label: "ESOPs Exercised", value: esops, set: setEsops },
            { label: "Exercise Price/Share", value: exercisePrice, set: setExercisePrice, prefix: "₹" },
            { label: "FMV at Exercise/Share", value: fmv, set: setFmv, prefix: "₹", helper: "From merchant banker valuation report" },
            { label: "Sale Price/Share", value: salePrice, set: setSalePrice, prefix: "₹" },
            { label: "Annual Salary (excl. ESOP)", value: salary, set: setSalary, prefix: "₹" },
          ].map(f => (
            <div key={f.label}>
              <label className="block text-xs text-muted-foreground mb-1">{f.label}</label>
              <div className="relative">
                {f.prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">{f.prefix}</span>}
                <input type="number" value={f.value} onChange={e => f.set(Number(e.target.value) || 0)} className={`w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 ${f.prefix ? 'pl-7' : ''}`} />
              </div>
              {f.helper && <p className="text-[10px] text-muted-foreground/60 mt-0.5">{f.helper}</p>}
            </div>
          ))}

          {isUnderwater && <div className="text-xs text-amber-400 bg-amber-400/10 rounded p-2">⚠️ Options are underwater — exercise price exceeds FMV</div>}

          <div>
            <label className="block text-xs text-muted-foreground mb-1">Tax Regime</label>
            <div className="flex gap-2">
              {(['new', 'old'] as const).map(r => (
                <button key={r} onClick={() => setRegime(r)} className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${regime === r ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>{r === 'new' ? 'New Regime' : 'Old Regime'}</button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1">Company Type</label>
            <select value={companyType} onChange={e => setCompanyType(e.target.value as CompanyType)} className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground text-sm">
              <option value="listed">Listed Company</option>
              <option value="startup">Unlisted (DPIIT-recognised startup)</option>
              <option value="unlisted">Unlisted (non-startup)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1">Holding Period After Exercise</label>
            <select value={holding} onChange={e => setHolding(e.target.value as HoldingPeriod)} className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground text-sm">
              <option value="<12">Less than 12 months</option>
              <option value="12-24">12-24 months</option>
              <option value=">24">More than 24 months</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="gradient-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">Tax Breakdown</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={waterfall} layout="vertical">
                  <XAxis type="number" tickFormatter={v => formatINR(Math.abs(v))} tick={{ fontSize: 9, fill: '#94a3b8' }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: '#94a3b8' }} width={90} />
                  <Tooltip formatter={(v: number) => formatINR(Math.abs(v))} contentStyle={{ background: '#131B2E', border: '1px solid #1E293B', borderRadius: 8, fontSize: 12 }} />
                  <Bar dataKey="value">
                    {waterfall.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="gradient-border rounded-xl p-5 space-y-2">
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Gross Value at Sale</span><span className="text-foreground font-semibold">{formatINR(result.grossProceeds)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">− Cost to Exercise</span><span className="text-amber-400">{formatINR(result.costToExercise)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">− Perquisite Tax</span><span className="text-destructive">{formatINR(result.perquisiteTax)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">− Capital Gains Tax</span><span className="text-destructive">{formatINR(result.cgTax)}</span></div>
            <hr className="border-border" />
            <div className="flex justify-between text-base"><span className="text-foreground font-medium">Net in Hand</span><span className="text-emerald-400 font-bold text-lg">{formatINR(result.netInHand)}</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary rounded-lg p-3 text-center">
              <p className="text-[10px] text-muted-foreground">Effective Total Tax Rate</p>
              <p className="text-lg font-bold text-foreground">{result.grossProceeds > 0 ? formatPercent((result.totalTax / result.grossProceeds) * 100, 1) : '—'}</p>
            </div>
            <div className="bg-secondary rounded-lg p-3 text-center">
              <p className="text-[10px] text-muted-foreground">Regime Comparison</p>
              <p className="text-xs text-muted-foreground mt-1">{regime === 'new' ? 'New' : 'Old'}: {formatINR(result.perquisiteTax)}</p>
              <p className="text-xs text-emerald-400">{result.altRegime === 'new' ? 'New' : 'Old'}: {formatINR(result.altPerquisiteTax)} {result.altPerquisiteTax < result.perquisiteTax ? '← saves more' : ''}</p>
            </div>
          </div>

          {companyType === 'startup' && (
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-xs text-muted-foreground">
              <strong className="text-primary">Startup Tax Deferral:</strong> Under Section 80-IAC, employees of DPIIT-recognised startups with Inter-Ministerial Board certification can defer perquisite tax for up to 48 months from the end of the assessment year of allotment, or until you sell shares or leave the company — whichever is earliest. Confirm with your employer.
            </div>
          )}
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground/50">Tax calculations based on Indian Income Tax Act provisions for FY 2025-26. Always consult a Chartered Accountant for your specific situation.</p>
    </div>
  );
}
