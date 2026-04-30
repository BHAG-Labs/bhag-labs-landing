import { toast } from "sonner";

const universal = [
  { name: "Razorpay", cat: "Payments & Banking", desc: "Current account + payment gateway + GST invoicing in one place.", color: "bg-forest" },
  { name: "ClearTax", cat: "GST & Tax Filing", desc: "GST registration, monthly filing, and ITR for your business.", color: "bg-terracotta" },
  { name: "Zoho Books", cat: "Accounting", desc: "India's most popular SMB accounting software. Free first year for BHAG referrals.", color: "bg-ochre" },
  { name: "IndiaMART", cat: "Raw Material Sourcing", desc: "India's largest B2B marketplace. Find suppliers for your inputs.", color: "bg-charcoal" },
];

const bySector: Record<string, { name: string; cat: string; desc: string; color: string }[]> = {
  Food: [
    { name: "Swiggy for Business", cat: "Onboarding", desc: "Onboarding support for new cloud kitchens.", color: "bg-terracotta" },
    { name: "Zomato for Restaurants", cat: "Onboarding", desc: "Get listed on Zomato in 3 days.", color: "bg-terracotta" },
    { name: "Borzo", cat: "Last-mile delivery", desc: "Per-delivery pricing. No monthly commitment.", color: "bg-forest" },
    { name: "Kitopi", cat: "Cloud Kitchen Infra", desc: "Managed kitchens in Mumbai, Delhi, Bengaluru.", color: "bg-ochre" },
  ],
  Manufacturing: [
    { name: "GeM", cat: "Sales Channel", desc: "Sell to government buyers — ₹4 lakh Cr+ annual procurement.", color: "bg-forest" },
    { name: "NSIC", cat: "Raw Material Support", desc: "Subsidized raw material procurement.", color: "bg-ochre" },
    { name: "Porter", cat: "Logistics", desc: "Intracity freight for finished goods.", color: "bg-charcoal" },
  ],
  Retail: [
    { name: "Meesho Supplier", cat: "D2C Channel", desc: "Sell on Meesho's 1.4 Cr reseller network.", color: "bg-terracotta" },
    { name: "Shiprocket", cat: "Shipping Aggregator", desc: "Best-rate aggregated shipping for D2C brands.", color: "bg-forest" },
    { name: "Dukaan", cat: "Online Store Builder", desc: "Launch your own store without code. India-first.", color: "bg-ochre" },
  ],
  Agriculture: [
    { name: "eNAM", cat: "Market Access", desc: "Sell directly to buyers in 1000+ mandis.", color: "bg-forest" },
    { name: "IFFCO eBazar", cat: "Input Procurement", desc: "Subsidized inputs for farmers.", color: "bg-ochre" },
  ],
};

export default function PartnerMarketplace({ sector }: { sector: string }) {
  const partners = [...universal, ...(bySector[sector] || [])];
  return (
    <section id="partners" className="border-2 border-foreground p-6 bg-cream-dark/40">
      <div className="mb-6">
        <h2 className="section-label text-terracotta mb-2">08 — RECOMMENDED PARTNERS</h2>
        <p className="text-xs text-muted-foreground italic">BHAG Labs earns a referral commission from partners. This does not affect the quality of recommendations.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {partners.map(p => (
          <div key={p.name} className="border-2 border-foreground bg-cream p-4 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className={`${p.color} text-cream w-10 h-10 flex items-center justify-center font-heading font-bold text-sm`}>
                {p.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="font-heading font-bold text-foreground text-sm">{p.name}</div>
                <div className="text-[10px] uppercase tracking-wider text-terracotta">{p.cat}</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground flex-1 leading-relaxed">{p.desc}</p>
            <button
              onClick={() => toast(`Opening referral page for ${p.name}. BHAG Labs may earn a commission at no extra cost to you.`)}
              className="mt-3 text-xs uppercase tracking-wider font-semibold text-terracotta hover:text-foreground transition-colors text-left"
            >
              Connect →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
