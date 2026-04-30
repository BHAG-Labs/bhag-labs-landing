import { TrendingUp, FileText, Handshake } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SolutionHeader from "@/components/solutions/SolutionHeader";

const issues = [
  { n: "001", t: "The Seed Drought Is Real — Here's How to Raise Anyway", d: "Seed funding in India fell 30% in 2025. But 200+ seed rounds still closed. This week: what the surviving deals had in common, which VCs are still writing checks, and the three changes you can make to your deck this weekend.", tags: ["Fundraising", "Seed", "VCs"] },
  { n: "002", t: "ONDC Just Got Interesting for Founders", d: "The Open Network for Digital Commerce hit ₹1,000 Cr GMV this quarter. The three sectors where ONDC is creating distribution moats, which buyer apps are growing fastest, and how to onboard before the window closes.", tags: ["ONDC", "D2C", "Distribution"] },
  { n: "003", t: "The New India Deep Tech Rules: What Changed, What Didn't", d: "India doubled the deep tech startup window to 20 years and raised the revenue threshold to ₹30 Cr. Which sectors benefit most, how to get DPIIT recognition, and what this means for your fundraising timeline.", tags: ["Deeptech", "Policy", "DPIIT"] },
];

export default function Bazaar() {
  const [done, setDone] = useState(false);
  return (
    <div className="min-h-screen bg-cream paper-texture">
      <SolutionHeader name="Bazaar" />

      {/* Masthead */}
      <section className="px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-2 border border-foreground/20 pointer-events-none" />
          <div className="border-2 border-foreground p-8 md:p-12 text-center bg-cream relative">
            <div className="text-[10px] tracking-[0.3em] uppercase text-ochre mb-6">A BHAG LABS PUBLICATION ◆ WEEKLY</div>
            <div className="bg-charcoal text-cream py-4 mx-auto inline-block px-8">
              <h1 className="font-heading font-black text-6xl md:text-9xl uppercase leading-none">BAZAAR</h1>
            </div>
            <div className="text-xs md:text-sm tracking-[0.25em] uppercase text-terracotta mt-6 font-semibold">
              The Weekly Broadsheet on India's Startup &amp; VC Economy
            </div>
            <div className="diamond-divider text-foreground/40 my-6 max-w-md mx-auto"><span className="text-sm">◆</span></div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-foreground/50">EST. 2026 ◆ BHAG LABS, MUMBAI ◆ FREE — ALWAYS</div>
          </div>
        </div>
        <p className="max-w-2xl mx-auto text-center text-base md:text-lg text-foreground/70 mt-10 leading-relaxed font-subheading">
          Every Sunday morning, one email. The funding signals that matter for founders, the policy changes you need to know, and the one deal worth talking about — no noise, no filler.
        </p>
      </section>

      {/* What you get */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label text-terracotta">WHAT YOU GET</span>
          </div>
          <div className="grid md:grid-cols-3 border-2 border-foreground">
            {[
              { I: TrendingUp, t: "THE SIGNAL", d: "A curated breakdown of the week's funding rounds — not just the numbers, but what they mean for your sector and stage. If Accel led a ₹40 Cr seed in B2B SaaS, we tell you what their next 6 months likely look like." },
              { I: FileText, t: "THE POLICY DESK", d: "RBI circulars, SEBI guidelines, DPIIT updates, GST amendments — translated into one sentence of founder action: 'Do X by Y date.'" },
              { I: Handshake, t: "THE DEAL ROOM", d: "One early-stage partnership opportunity per week — a logistics player looking for D2C brands, a cloud infra provider with MSME credits, a scheme with an open window. Actionable, not aspirational." },
            ].map((c, i) => (
              <div key={c.t} className={`p-8 ${i < 2 ? "md:border-r-2 border-b-2 md:border-b-0 border-foreground" : ""}`}>
                <c.I className="w-6 h-6 text-terracotta mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{c.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="diamond-divider text-foreground/30 max-w-4xl mx-auto px-6"><span className="text-sm">◆</span></div>

      {/* Past issues */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label text-terracotta">SAMPLE EDITIONS</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase text-foreground mt-3">What You'll Read</h2>
          </div>
          <div className="space-y-5">
            {issues.map(i => (
              <article key={i.n} className="border-2 border-foreground p-6 md:p-8 hover:bg-cream-dark/40 transition-colors">
                <div className="text-[10px] tracking-[0.25em] uppercase text-terracotta mb-3">EDITION {i.n} ◆ FORTHCOMING</div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3 leading-tight">{i.t}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">{i.d}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {i.tags.map(t => <span key={t} className="text-[10px] uppercase tracking-wider text-foreground/50 border border-foreground/20 px-2 py-1">#{t}</span>)}
                </div>
                <button onClick={() => toast("Bazaar launches with subscribers — sign up below.")} className="text-sm uppercase tracking-wider font-semibold text-terracotta hover:text-foreground transition-colors">
                  Read this edition →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="section-dark py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="section-label text-ochre">SUBSCRIBE</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase leading-[1.05] text-cream mt-4 mb-4">
            Join Founders, Investors, and Builders.
          </h2>
          <p className="text-cream/60 mb-8">Every Sunday. Free. Unsubscribe any time.</p>

          {done ? (
            <div className="border-2 border-ochre p-8">
              <div className="text-ochre text-4xl mb-3">◆</div>
              <h3 className="font-heading text-xl text-cream mb-2">You're on the list.</h3>
              <p className="text-sm text-cream/60">First edition lands in your inbox Sunday.</p>
            </div>
          ) : (
            // TODO: Replace form action with Substack/Beehiiv/ConvertKit embed URL
            <form
              onSubmit={(e) => { e.preventDefault(); setDone(true); }}
              className="space-y-3 text-left"
            >
              <input required placeholder="First name" className="w-full px-4 py-3 bg-transparent border-2 border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-ochre transition-colors" />
              <input required type="email" placeholder="Email address" className="w-full px-4 py-3 bg-transparent border-2 border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-ochre transition-colors" />
              <select required className="w-full px-4 py-3 bg-transparent border-2 border-cream/20 text-cream text-sm focus:outline-none focus:border-ochre transition-colors">
                <option value="" className="bg-charcoal">I am a...</option>
                {["Founder (Pre-Seed / Seed)", "Founder (Series A+)", "Student (aspiring founder)", "Angel", "VC Investor", "Accelerator", "Faculty / Mentor", "Other"].map(o => <option key={o} className="bg-charcoal">{o}</option>)}
              </select>
              <button type="submit" className="w-full bg-primary py-3.5 font-semibold text-primary-foreground text-sm uppercase tracking-wider hover:opacity-90">
                Subscribe to Bazaar →
              </button>
              <p className="text-xs text-center text-cream/40 pt-2">No spam. One email per week. That's the deal.</p>
            </form>
          )}
        </div>
      </section>

      <footer className="py-10 px-6 text-center text-xs text-muted-foreground space-y-2 border-t-2 border-foreground/10">
        <p>Bazaar is published by BHAG Labs Pvt. Ltd.</p>
        <p>We do not sell advertising. Revenue comes from BHAG Labs products and optional partner spotlights, always disclosed.</p>
        <a href="/" className="inline-block mt-3 text-terracotta hover:text-foreground font-semibold uppercase tracking-wider">← Back to BHAG Labs</a>
      </footer>
    </div>
  );
}
