## CONTEXT & MARKET RATIONALE (read before building — this informs every copy and UX decision)

This prompt adds three new solutions to the BHAG Labs platform and replaces the "Book a Demo" CTA sitewide with a newsletter CTA. All three products are grounded in real Indian market gaps:

**Pitchwala**: Indian startups raised $10.5B in 2025 across 1,518 rounds (Tracxn). Seed-stage funding fell 30% — investors are more selective, not less active. The bottleneck isn't capital; it's founder storytelling quality. There is no India-specific pitch deck tool that references Sequoia India, Blume Ventures, or Accel India thesis frameworks, uses INR and Indian sector benchmarks, or understands that Indian founders pitching to domestic VCs need different narrative structures than YC-style decks. Pitchwala fills this gap.

**Vyapaar**: India has 7.34 crore (73.4 million) MSMEs. Banks and government programs (PMEGP, PMFME, Mudra, Startup India) require a "Detailed Project Report" (DPR) before approving loans or subsidies — a document that typically costs ₹5,000–₹50,000 and takes 5–15 days when done by a consultant. Most first-time entrepreneurs in Tier 2/3 cities have no idea how to write one. Vyapaar automates this entire process and adds a co-sell marketplace matching founders with operating partners (logistics, payments, cloud kitchens, raw material sourcing) — turning a static document into an active deal-matching layer.

**Bazaar**: The Indian startup media landscape (Inc42, Entrackr, The Ken, Tracxn) is either paywalled, too newsy, or too data-heavy. There is no weekly editorial newsletter in the vein of *Axios Pro Rata* or *DECODED* that curates what actually matters for early-stage founders building in India — funding signals, new government schemes, regulatory changes, and founder-to-founder insights — in a digestible, opinionated format. Bazaar is that newsletter.

---

## PART 1: GLOBAL CHANGES

### 1A. Replace ALL "Book a Demo" / "Request a Demo" CTAs sitewide with "Join Bazaar"

In every file where a primary CTA currently says "Book a Demo", "Request a Demo", or "Schedule a Call":

- Change the button text to: **"Join Bazaar →"**
- Change the link/href to: `/bazaar`
- Change the button color: Use ochre/gold (#C49A2A) background with forest teal (#2D4A43) text for this button wherever it appears (this is distinct from the existing terracotta primary buttons, helping it stand out as "newsletter" rather than "sales")
- Tooltip on hover: "India's weekly startup newsletter — free, always."

**Files to touch**: `Navbar.tsx` (desktop + mobile), `HeroSection.tsx`, `CtaSection.tsx`

### 1B. Repurpose ContactSection.tsx

- Replace the existing "Book a Demo" contact form entirely
- New layout: A two-column section
  - **Left column**: A simple "Talk to the Founders" block with a mailto link (`founders@bhaglabs.in`) and a note: "We read every email. No autoresponders." Style it in the editorial Subko-style with a thick terracotta left border.
  - **Right column**: An inline Bazaar newsletter signup form (Name + Email + Role dropdown) with a "Join Bazaar" button. Role options: "Founder", "Student", "Investor/Angel", "Faculty/Mentor", "Accelerator Manager", "Curious Observer". Add a comment in the code: `{/* TODO: Connect form action to Substack/Beehiiv/ConvertKit URL */}`

### 1C. Update SolutionsSection.tsx

Extend the grid from its current layout to display **5 products** in a 2x3 responsive grid (2 columns on desktop wrapping to a third row; 1 column on mobile):


| #   | Product   | Badge                            | Lucide Icon |
| --- | --------- | -------------------------------- | ----------- |
| 1   | Neev      | `Live` (terracotta badge)        | `Layers`    |
| 2   | Hissa     | `Live` (terracotta badge)        | `PieChart`  |
| 3   | Pitchwala | `New` (ochre badge)              | `FileText`  |
| 4   | Vyapaar   | `New` (ochre badge)              | `Map`       |
| 5   | Bazaar    | `Newsletter` (forest teal badge) | `Newspaper` |


Each card uses the existing bordered editorial card style. The two `Live` cards (Neev, Hissa) have a subtle shimmer on their border to indicate they are active. The three new cards have a dashed border style to indicate "new / freshly launched."

### 1D. Update Navbar.tsx Solutions Dropdown

Add three new items:

- **Pitchwala** — "AI pitch deck builder for Indian founders"
- **Vyapaar** — "Feasibility reports & partner marketplace"
- **Bazaar** — "Weekly newsletter on India's startup economy"

### 1E. Update Footer.tsx

Under "Solutions", add: Pitchwala, Vyapaar, Bazaar (with their route links)

### 1F. Register Routes in App.tsx

Add above the catch-all route:

```
/pitchwala  →  <Pitchwala />
/vyapaar    →  <Vyapaar />
/bazaar     →  <Bazaar />

```

---

## PART 2: PITCHWALA (`/pitchwala`)

### What it is (for copy/UX context):

Pitchwala is a structured, wizard-based pitch deck builder for Indian founders at pre-seed and seed stage. It asks 9 questions (same structure as Pitches.ai, which asks about problem/solution/traction) but with India-specific prompts, Indian investor context, and Indian benchmarks baked into the helper text. The output is a preview of a 10-slide deck rendered in the editorial BHAG Labs design system.

**PMF signal**: Most founders in university incubators, E-Cells, and Tier 2/3 city programs have never seen a real pitch deck. They default to generic templates with zero narrative. Pitchwala gives them a structured starting point with Indian investor framing.

---

### 2A. Landing Page (`/pitchwala` — before auth)

**Layout**: Full-page editorial design, same Subko-inspired system as the main landing. Cream background.

**Hero section:**

- Small section label (small caps, terracotta): "SOLUTION 03 — PITCHWALA"
- Large heading (Playfair Display Bold, 72px): "Turn Your Napkin Idea Into a Deck Investors Actually Read."
- Subheading (Inter, 20px, forest teal): "9 questions. 10 slides. Built for Indian investors, Indian markets, and the way Indian founders actually think."
- Two CTAs: `Start Building →` (terracotta, primary) and `See a Sample Deck` (ghost, outlined) — both scroll or link to auth gate
- Below CTAs: Three stat pills in a horizontal row with thin dividers between:
  - "9 guided questions"
  - "10 investor-ready slides"
  - "₹0 — Free to start"

**The Problem section** (dark charcoal background, gold text):

- Section label: "THE REALITY"
- Heading: "Founders Spend 30 Hours on a Deck. Investors Spend 3 Minutes on It."
- Body (Inter, cream): "In 2025, Indian startups received 1,518 funding rounds — but investor selectivity grew sharply, with deal count falling nearly 39%. Sequoia India, Blume Ventures, and Accel India all report receiving hundreds of decks monthly. The ones that get meetings share one thing: a clear, honest narrative. Not a beautiful template. A clear story. Pitchwala helps you build that story — structured around how Indian VCs actually evaluate early-stage bets."
- Right side: Three "❌ Without Pitchwala" vs "✓ With Pitchwala" rows:
  - ❌ Generic Canva template → ✓ Narrative-first, investor-framed structure
  - ❌ Blank slide, 2 AM panic → ✓ Guided questions with Indian context hints
  - ❌ No idea what slide 4 should say → ✓ Clear 10-slide sequence every Indian VC expects

**How it works section** (cream background):

- Section label: "THE PROCESS"
- Heading: "Three Steps to a Deck Worth Sending."
- Three large numbered steps with thin ruled borders between them:
  1. **Answer 9 Questions** — "No design skills needed. Just answer honestly. The harder the question, the better your deck gets."
  2. **Review Your 10 Slides** — "Pitchwala structures your answers into a Cover → Problem → Solution → Market → Product → Traction → Business Model → Competition → Team → Ask flow."
  3. **Download or Share** — "Export as PDF or share a live link. Edit any slide before sending."

---

### 2B. Auth Screen

Shared component: `AuthShell.tsx`

UI only — no real auth. Sets a `useState` boolean `isSignedIn = true` on form submit to advance the user to the wizard.

**Layout**: Centered card on cream background. Thick double-border frame (Subko label style). Forest teal header bar inside the card reading "PITCHWALA" in small caps.

**Fields:**

- Email (text input, placeholder: "your@email.com")
- Password (password input, placeholder: "Create a password")
- Button: `Start Building →` (terracotta, full-width)
- Divider: a thin rule with ◆ centered on it
- `Or sign in with Google` (outlined button with Google icon from Lucide — `Chrome` icon as placeholder — ghost style). Non-functional, styled only.
- Toggle below: "Already have an account? Sign in" / "New here? Sign up"

On submit (any input, no validation needed for UI demo): set `isSignedIn = true` → render the Wizard.

---

### 2C. Wizard (9 steps)

**Layout**:

- Left sidebar (240px, charcoal background): Shows the step list — numbered 1-9 with step names. Current step highlighted with a terracotta left border. Completed steps show a ✓. Incomplete future steps are muted.
- Right content area (cream background): One question per step — large and focused.
- Top of right area: A thin progress bar (terracotta fill) showing X/9 completion.
- Bottom: `← Back` (ghost button, left) and `Continue →` (terracotta button, right). On step 9: `Generate My Deck →`.

**Step content** (question + helper text + large textarea for each):

**Step 1 — The Problem**

- Question (Playfair, 32px): "What specific problem are you solving, and who suffers from it most?"
- Helper text (Inter 14px, muted): "Be precise. 'Agriculture is inefficient' is not a problem statement. 'Marginal farmers in Vidarbha have no real-time access to mandi prices, so they sell at 30-40% below market rate' is. Indian VCs — especially those backing Bharat-focused startups — want to know you've spoken to real people in real places."
- Placeholder: "e.g. Small kirana owners in Tier 2 cities can't access working capital because they have no credit history, even though their daily transaction volume proves creditworthiness..."
- Character counter: "0 / 500 characters"

**Step 2 — Existing Solutions**

- Question: "What do people currently use to solve this problem — and why are those options inadequate?"
- Helper: "Name real competitors or workarounds. If someone says 'there's no competition', Indian investors hear 'I haven't done my research.' Strong answers name 2-3 incumbents (including informal ones like 'they use WhatsApp groups') and explain the specific gaps."
- Placeholder: "e.g. NBFC apps like KreditBee only serve urban salaried employees. Local moneylenders charge 36-60% interest. Banks require 2 years of ITR which most kirana owners don't have..."

**Step 3 — Why They're Inefficient**

- Question: "What is the core inefficiency in existing solutions — the thing your product is designed to fix?"
- Helper: "This is your insight slide. The best Indian pitch decks identify a structural reason why incumbents can't fix the problem — not just that they're slow or expensive, but *why* they're structurally constrained. E.g. 'Banks can't lend to kiranas because their credit models require formal income proof — but kirana cash flows are undocumented by design.'"
- Placeholder: "e.g. Banks underwrite based on salary slips. The unbanked informal economy runs on trust and cash — data that doesn't exist in any format banks accept..."

**Step 4 — Target Customer**

- Question: "Describe your target customer in one sentence — then go deeper."
- Helper: "Segment tightly. 'SMEs' is not a segment. 'Women-owned home food businesses in Mumbai, Pune, and Bengaluru earning ₹30K–₹1.5L/month on Swiggy and Zomato' is a segment. Indian VCs at seed stage want to see that you know *exactly* who will pay you first and why."
- Placeholder: "e.g. Primary: Cloud kitchen operators in metros running 3-5 virtual brands on Swiggy/Zomato, monthly GMV ₹5-20L, currently managing finances on WhatsApp and paper..."
- Below the textarea: Two additional short fields:
  - `City / Geography focus` (text, e.g. "Bengaluru, Chennai, Hyderabad")
  - `Estimated number of such customers in India` (number input)

**Step 5 — Competition**

- Question: "List your top 3 competitors or alternatives. What do they do well — and where do you beat them?"
- Helper: "Include the real competitive set — Indian players first, then global. Blume Ventures and Chiratae publish thesis documents where they explicitly say they invest in 'India-first, India-specific solutions.' If your competition slide says 'no direct competition', that's a red flag. Every problem worth solving already has imperfect solutions."
- Below question: A mini-table builder. User can add up to 4 rows. Each row: Competitor Name | What they do well | Your advantage. Pre-filled example row: "Existing ERP tools | Feature-rich | Too complex/expensive for the 1-10 employee MSME"

**Step 6 — Your Solution**

- Question: "Describe your product. What does it do, how does it work, and what makes it different?"
- Helper: "Lead with the user experience, not the technology. 'A machine learning model that...' is a feature. 'A kirana owner opens the app, sees his credit score based on his UPI transactions, and gets a ₹50,000 credit line in 4 minutes' is a product. Indian investors want to visualize the workflow."
- Placeholder: "e.g. Vyapaar connects to a business's UPI transaction history via Account Aggregator (AA) framework, builds a cash-flow based credit score in real time, and surfaces a loan offer from our NBFC partner within the app..."
- Additional field: `What technology/infrastructure does it run on?` (shorter textarea)

**Step 7 — Business Model**

- Question: "How do you make money? Who pays, how much, and how often?"
- Helper: "Indian VCs at seed stage care about three things: (1) Is the revenue model sustainable? (2) Are unit economics positive or have a clear path to positive? (3) Can this scale without needing proportional headcount growth? Include your: Revenue per customer/transaction, Gross margin range, and Customer Acquisition Cost (even if estimated)."
- Below: Four structured fields (in addition to a main textarea):
  - `Revenue model type` (dropdown): Subscription (SaaS) / Transaction fee / Commission / Marketplace take-rate / One-time purchase / Freemium / Ad-supported / Other
  - `Price per customer/transaction (₹)` (text)
  - `Estimated gross margin %` (number)
  - `Estimated CAC (₹)` (text, placeholder "If unknown, explain how you'll acquire customers")

**Step 8 — Timeline & Milestones**

- Question: "What have you built or validated so far — and what will you do in the next 12 months with this funding?"
- Helper: "Investors fund the next milestone, not the vision. Be specific: 'Launch in 3 cities, reach 500 paying customers, hit ₹25L MRR by Month 12.' Seed-stage milestones in India typically include: first 100 customers, product-market fit validation, hiring key roles, and setting up the Series A story."
- Below: A visual timeline builder — user adds up to 6 milestone entries. Each entry: `Timeframe` (e.g. "Month 0", "Month 6") + `Milestone description` (text). Rendered as a horizontal timeline preview below the inputs.

**Step 9 — Team**

- Question: "Who is building this — and why are you the right people for this specific problem?"
- Helper: "Indian VCs routinely say: 'We bet on the jockey, not the horse.' What makes *your team* uniquely equipped? Look for: domain unfair advantage (lived the problem yourself), technical co-founder if tech-heavy, relevant prior exits or operator experience. Don't just list credentials — explain the *connection* between your backgrounds and this specific problem."
- Below: Up to 4 team member cards. Each card: Name, Role, Key background (2-3 lines), LinkedIn URL (optional). Pre-filled with "Founder 1 — CEO" and "Founder 2 — CTO" as examples.
- At the bottom of step 9: A `Raise Details` section:
  - `How much are you raising?` (₹ input, e.g. ₹1.5 Cr)
  - `At what valuation (post-money)?` (₹ input)
  - `What stage is this?` (dropdown: Pre-Seed, Seed, Bridge, Series A)
  - `What will the funds be used for?` (short textarea)

---

### 2D. Generation Screen

After clicking `Generate My Deck →` on step 9:

**Phase 1 — Loading state (2-3 seconds):**

- Dark charcoal background
- Center of screen: Large animated diamond (◆) pulsing in gold
- Below it, cycling status text (typewriter animation, switching every 800ms):
  - "Reading your problem statement..."
  - "Structuring your narrative arc..."
  - "Framing your market opportunity..."
  - "Building your competitive matrix..."
  - "Composing your team slide..."
  - "Finalizing your ask..."
- A thin terracotta progress bar filling from left to right over 2.5 seconds

**Phase 2 — Deck Preview:**

A horizontal scroller of 10 slide cards. Each card is 320px × 220px with thick editorial borders. Cards are rendered using the actual user inputs — not static placeholders.

Slide structure (derive content from wizard inputs):


| Slide # | Name               | Content derivation                                                                                                               |
| ------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 1       | Cover              | Company name (from Step 9 team section), tagline (condensed from Step 6), City/sector (from Step 4)                              |
| 2       | Problem            | First 200 chars of Step 1 answer, displayed as a bold statement                                                                  |
| 3       | Existing Solutions | Step 2 answer condensed, + "Why they fail" from Step 3                                                                           |
| 4       | Our Solution       | Step 6 answer, first 200 chars bold, technology stack below                                                                      |
| 5       | Market Size        | Step 4 customer count × estimated price (from Step 7). Show SAM/TAM formula: "If X% of [target customers] pay ₹Y/month = ₹Z TAM" |
| 6       | Product            | Placeholder: "Product screenshots / demo here" with a dashed box, labelled: "[ Insert your product screenshots ]"                |
| 7       | Business Model     | Revenue model type (Step 7) + price + margin in a simple table                                                                   |
| 8       | Competition        | The mini-table from Step 5 rendered as a competitive matrix                                                                      |
| 9       | Team               | Team member names and roles from Step 9                                                                                          |
| 10      | The Ask            | Raise amount, valuation, use of funds from Step 9 raise details                                                                  |


Each slide card:

- Background alternates: cream / charcoal
- Slide number in small caps, top-left
- Slide name in terracotta, small, above the content
- Content from wizard inputs, displayed in truncated editorial format
- A subtle "◆ PITCHWALA" watermark in the bottom-right corner

**Below the slide scroller:**

- Two action buttons: `Download PDF` (terracotta, non-functional — show a toast: "PDF export coming soon. Share the link in the meantime.") and `Edit Answers` (ghost, goes back to wizard step 1)
- A share panel: "Your deck link:" + a fake URL (`pitchwala.bhaglabs.in/deck/[random-6-char-id]`) with a copy button that copies the text and shows "Copied ✓"

**Investor Tips sidebar** (right side on desktop, collapsible on mobile): A narrow vertical panel with 4 quick tips, each a small card with a diamond bullet:

- ◆ "Keep your deck under 12 slides. Indian VCs report spending an average of 3 min 24 sec on a first-read deck."
- ◆ "Lead with the problem, not the solution. The best Indian pitch decks open with a scene: a real person, a real moment of friction."
- ◆ "Name your ask clearly. 'We are raising ₹X Cr at ₹Y Cr post-money for Z milestone' is more fundable than vague ranges."
- ◆ "Include a 'Why Now' element. India's regulatory landscape (AA framework, ONDC, GeM, PLI schemes) creates specific market timing windows — mention yours."

---

## PART 3: VYAPAAR (`/vyapaar`)

### What it is (for copy/UX context):

Vyapaar is a business feasibility report generator + partner marketplace. It serves two audiences: (1) VC-backed startups who want a localized business feasibility analysis before entering a new city or vertical, and (2) first-time MSME entrepreneurs who need a Detailed Project Report (DPR) to get a bank loan, PMEGP subsidy, or Mudra loan. These are not the same user but the same product serves both because both need structured, evidence-based business viability documentation.

**PMF signal**: A professional DPR consultant charges ₹5,000–₹50,000 and takes 5–15 days. India has 73.4 million MSMEs. Banks (SBI, Union Bank, Canara) and government schemes (PMEGP, PMFME, Stand-Up India) mandate a DPR as a condition of loan disbursal. ProjectReport.Online, a direct competitor, serves thousands of such entrepreneurs already — validating massive demand. Vyapaar differentiates by adding: city-level market intelligence, a co-selling marketplace, and a startup-grade narrative layer on top of the traditional DPR format.

---

### 3A. Landing Page (`/vyapaar`)

**Hero section:**

- Section label (small caps, terracotta): "SOLUTION 04 — VYAPAAR"
- Large heading (Playfair Display Bold, 72px, two lines): "From Idea to a Feasibility Plan That Ships."
- Subheading: "Generate a bank-ready DPR or investor-grade feasibility report in minutes — not weeks. Then find the partners who'll help you execute it."
- CTA: `Get My Plan →` (terracotta, primary)
- Three stat pills (horizontal, with dividers):
  - "₹0 — Free report"
  - "73.4M MSMEs need this"
  - "15 days → 15 minutes"

**Two audiences section** (cream background, two bordered side-by-side panels):

**Panel 1: "For Startups"** (forest teal left border accent)

- "Expanding to a new city? Launching a new vertical? Get a structured feasibility report that tells you: market size in your target geography, competitive density, unit economics benchmarks for your sector, localization requirements (language, payment preferences, logistics), and a 90-day go-to-market roadmap."
- Tag: "Series A+ | VC-backed ventures | New city launches"

**Panel 2: "For MSMEs & First-Time Founders"** (ochre left border accent)

- "Applying for a bank loan? PMEGP subsidy? Mudra Yojana? You need a Detailed Project Report (DPR) — and a consultant will charge you ₹5,000–₹50,000 and take two weeks to write one. Vyapaar generates a bank-compliant DPR in 15 minutes, covering market demand, financial projections, machinery and setup costs, DSCR and IRR calculations, and regulatory compliance notes."
- Tag: "PMEGP | Mudra | Stand-Up India | SBI | Bank loans"

**The problem section (dark background):**

- Heading: "₹89,000 Crore in Loan Applications Rejected Annually — Often Because of a Missing Document."
- Body: "India's credit gap for MSMEs exceeds ₹20 lakh crore. One of the most common reasons loan applications are rejected isn't creditworthiness — it's an incomplete or improperly formatted DPR. Banks' credit managers need to see DSCR, IRR, market demand analysis, and financial projections. Most entrepreneurs can't produce these without hiring a consultant. Vyapaar changes that."

---

### 3B. Auth Screen

Reuse `AuthShell.tsx`. Header inside card: "VYAPAAR" in small caps, forest teal.

---

### 3C. Intake Screen

After auth, show an intake screen with a prominent toggle at the top:

**Toggle:** Two tabs side by side, like a segmented control:

- `📝 Describe My Idea` (default active, cream background)
- `📎 Upload My Pitch Deck` (ghost, uploads .pdf or .pptx — UI only, no parsing)

---

**Tab 1: Describe My Idea (Structured Intake Form)**

A single scrollable form (not a wizard — show all fields at once for speed):

**Section A: Your Idea**

- `Business Name (or working title)` — text input
- `What does your business do?` — large textarea, placeholder: "e.g. We operate a cloud kitchen producing ready-to-eat South Indian breakfast items delivered via Swiggy and Zomato within a 5-km radius in Bengaluru's Koramangala and Indiranagar zones."
- `Which sector?` — dropdown with Indian-specific options:
  - Food & Beverage (Restaurant / Cloud Kitchen / D2C)
  - Retail (Kirana / D2C / E-commerce)
  - Manufacturing (Light / Food Processing / Garments / Handicrafts)
  - Agriculture & Allied (Farming / Agriprocessing / Dairy / Fisheries)
  - Services (Salon / Coaching / Repair / Logistics / Healthcare)
  - Technology (SaaS / App / AI / Fintech)
  - Education & Training
  - Real Estate & Construction
  - Other (specify)
- `Business stage` — radio: "Idea stage (not yet started)" / "Early (0-6 months operating)" / "Growing (6 months to 3 years)" / "Established (3+ years)"
- `Primary purpose of this report` — radio: "Bank loan / DPR" / "Government subsidy (PMEGP/PMFME/Mudra)" / "Investor pitch / feasibility" / "Internal planning only"

**Section B: Location & Scale**

- `Primary city / district` — text input (e.g. "Nashik, Maharashtra")
- `State` — dropdown of all Indian states + UTs
- `Target cities (if planning multi-city)` — text input, comma-separated, optional
- `Planned investment / project cost (₹)` — number input (e.g. 15,00,000)
- `How will you fund this?` — checkboxes (multi-select): Self-funded / Bank loan / Government subsidy / Angel/VC investment / Friends & family
- `Number of employees planned (Year 1)` — number input

**Section C: Revenue & Market**

- `What will you charge per unit/customer/month? (₹)` — number input
- `How many customers/orders do you expect per month in Year 1?` — number input
- `Who is your target customer?` — short textarea
- `Who are your 2-3 main competitors in your city?` — short textarea

**Section D: (If "Bank loan / DPR" selected in Section A)** *Show this section only if that radio is selected. Otherwise hide.*

- `Which bank / scheme are you applying to?` — dropdown: SBI / PNB / Canara / Union Bank / HDFC / ICICI / Axis / Other / PMEGP / PMFME / Mudra - Shishu / Mudra - Kishore / Mudra - Tarun / Stand-Up India / Other govt. scheme
- `Loan amount requested (₹)` — number input
- `Repayment period preferred` — dropdown: 3 years / 5 years / 7 years / 10 years
- `Do you own premises or will you rent?` — radio: Own / Rent
- `Monthly rent (₹)` (shown only if Rent selected)
- `Key machinery/equipment needed` — textarea, placeholder: "e.g. Commercial oven ₹80,000, Cold storage unit ₹1,20,000, POS system ₹15,000"

**Submit button**: `Generate My Report →` (terracotta, full width, large)

---

**Tab 2: Upload My Pitch Deck (UI only)**

A drag-and-drop zone:

- Dashed border (2px dashed #C49A2A), cream background inside the zone
- Center: Upload icon (Lucide `Upload`) + text: "Drag your pitch deck here"
- Below: "Supports .pdf and .pptx files up to 20MB"
- Or: `Browse files` text link
- Below the zone: A note in smaller text: "Vyapaar will read your deck's problem, solution, market, and financial slides to pre-fill the feasibility report. You can review and edit before generating."
- Once a file is "uploaded" (UI state only — store filename in useState): Show a file chip with the filename and a ✓. Then show a `Continue to Report →` button.
- This advances to the Generation Screen as if the form was submitted.

---

### 3D. Generation Screen

**Phase 1 — Loading (2.5 seconds):**

- Dark charcoal background
- Center: Gold ◆ pulsing
- Status text cycling (typewriter animation):
  - "Pulling market data for [user's city]..."
  - "Calculating unit economics for [sector]..."
  - "Checking PMEGP / Mudra eligibility..."
  - "Estimating DSCR and IRR..."
  - "Building your 90-day roadmap..."
  - "Assembling your report..."
- Progress bar (terracotta, fills over 2.5 seconds)

**Phase 2 — Report View:**

Rendered as editorial scrollable sections. Each section is a large card with the same Subko-style bordered layout. A sticky left sidebar on desktop shows a table of contents linking to each section anchor.

**Report Sections:**

**Section 1 — Executive Summary** *A prominent card with forest teal left border*

- Business Name (from input)
- Sector & Stage
- Location
- Investment required: ₹X
- Revenue projection Year 1: ₹Y (calculated: monthly customers × price × 12)
- Report purpose: [e.g. "Bank Loan — SBI"]
- Date generated

**Section 2 — Market Snapshot: [User's City]** *Charcoal background, gold accents*

- Heading: "The Market in [City]"
- Show hardcoded city-level data for the top 15 Indian cities (Bengaluru, Mumbai, Delhi NCR, Hyderabad, Pune, Chennai, Ahmedabad, Kolkata, Jaipur, Lucknow, Indore, Bhopal, Nagpur, Chandigarh, Kochi). For cities not in this list, show a generic "Tier 2 / Tier 3 city market" fallback.
- For each city × sector combination, show:
  - **Market size (estimated local TAM)**: Derived from sector × city population multipliers (hardcoded lookup table)
  - **Competition density**: Low / Medium / High (hardcoded per city/sector)
  - **Average order value / ticket size benchmark**: Hardcoded industry benchmarks per sector
  - **Key local regulatory note**: Hardcoded per sector (e.g. for cloud kitchens: "FSSAI license required. Bengaluru BBMP requires home bakery license for cloud operations.")
  - **Language preference**: e.g. "Kannada-first for hyperlocal marketing. English works for Swiggy/Zomato app UI."

Example hardcoded data (build a lookup object in the code):

```javascript
const cityData = {
  bengaluru: {
    cloudKitchen: {
      tamEstimate: "₹4,200 Cr annually (Zomato/Swiggy commissioned study, 2024)",
      competitionDensity: "High",
      avgOrderValue: "₹280-340",
      regulatoryNote: "FSSAI State License required. BBMP trade license. Fire NOC if >500 sq ft.",
      languageNote: "Kannada for localities; English for app listings"
    },
    // ... other sectors
  },
  // ... other cities
}

```

**Section 3 — Financial Projections** *Cream background, editorial table style*

Build 3-year projections automatically from inputs:

```
Revenue:
  Year 1: monthly_customers × price_per_unit × 12 = ₹X
  Year 2: Year 1 × 1.4 (40% growth assumption — hardcoded, labelled "assumes 40% YoY growth")
  Year 3: Year 2 × 1.3

Costs (hardcoded ratios per sector):
  COGS: [sector-specific %] × Revenue (e.g. food: 35%, manufacturing: 45%, services: 20%)
  Rent: [user input] × 12
  Labour: [employees × avg. salary hardcoded per sector] × 12
  Marketing: 8% of Revenue (default, labelled as assumption)
  Misc/Overhead: 5% of Revenue

Gross Profit = Revenue − COGS
EBITDA = Gross Profit − OpEx

```

Shown as a table with Year 1 / Year 2 / Year 3 columns.

**For bank loan use-case**, also show:

- **DSCR (Debt Service Coverage Ratio)**: EBITDA / Annual Loan Repayment (calculated from loan amount, tenure, and assumed 9.5% interest rate). Show: "DSCR of X.X — Banks typically require > 1.25. Your projection shows [above/below] this threshold."
- **IRR (Internal Rate of Return)**: Simplified IRR over 3 years from cash flows (use a hardcoded approximation formula). Show: "Estimated IRR of X% — Bank benchmarks typically require > 15%."
- **Break-even point**: "At your current cost structure, you reach break-even at X customers/month (approx. Month Y)."

**Section 4 — Localization Notes** *Ochre accent left border*

- City-specific consumer behavior notes (hardcoded per city)
- Payment preference: e.g. "UPI dominates in this region (85%+ transactions in Bengaluru are UPI-based per RBI data). Ensure Razorpay/PhonePe integration before launch."
- Logistics note: e.g. "Last-mile delivery in Bengaluru: Borzo and Porter are cost-effective for B2B. Swiggy/Zomato handles B2C delivery automatically."
- Seasonal considerations: hardcoded per sector (e.g. "Cloud kitchen revenue typically dips 15-20% in summer months. Plan inventory accordingly.")

**Section 5 — Risks & Mitigations** *Three risk cards side by side (stack on mobile):*

- **Market Risk**: "[Sector-specific risk]" + mitigation suggestion
- **Operational Risk**: "Cash flow management in months 1-4 before first revenue" + mitigation
- **Regulatory Risk**: "[Key regulation for sector]" + mitigation

**Section 6 — 90-Day Go-to-Market Roadmap** *A horizontal timeline — 4 phases of ~3 weeks each:*

- Days 1-21: "Registration & Setup" — [sector-specific: e.g. FSSAI, GST, Udyam registration]
- Days 22-42: "Infrastructure Build" — [e.g. kitchen setup, machinery procurement, vendor onboarding]
- Days 43-63: "Soft Launch" — [e.g. 50 trial customers, first Swiggy listing, WhatsApp group for early users]
- Days 64-90: "First Revenue & Iteration" — [e.g. collect 20 reviews, optimize menu, re-engage churned customers]

**Section 7 — Government Schemes Eligibility** *Charcoal background, gold text*

- Heading: "Schemes You May Qualify For"
- Show 3-4 cards based on: business stage, sector, investment size, founder demographics. Hardcode eligibility logic:
  - PMEGP: if investment ≤ ₹50L and manufacturing/service sector → Show. "Up to 25% subsidy on project cost (35% for special categories). Apply via Khadi & Village Industries Commission portal."
  - Mudra - Shishu: if loan_amount ≤ ₹50,000 → Show
  - Mudra - Kishore: if ₹50,001 ≤ loan ≤ ₹5L → Show
  - Mudra - Tarun: if ₹5L < loan ≤ ₹10L → Show
  - Stand-Up India: if SC/ST or woman founder → Show (add a "Does this apply to you?" toggle)
  - Startup India (DPIIT): if technology sector → Show

**Section 8 (Appended) — Recommended Partners: The Co-Sell Marketplace** *Section heading with a note: "Vyapaar earns a referral commission from partners. This does not affect the quality of recommendations."*

A grid of partner cards. Each card has: Partner logo placeholder (colored square with initials), Partner name, Category, and a `Connect →` button (ghost, outlined).

Show relevant partners based on sector:

**Always show (all sectors):**

- **Razorpay** — Payments & Banking — "Set up a business current account, payment gateway, and GST-compliant invoicing in one place."
- **ClearTax** — GST & Tax Filing — "GST registration, monthly filing, and ITR for your business."
- **Zoho Books** — Accounting — "India's most popular SMB accounting software. Free for the first year for BHAG Labs referrals."
- **IndiaMART** — Raw Material Sourcing — "India's largest B2B marketplace. Find suppliers for your input materials."

**Food & Beverage / Cloud Kitchen:**

- **Swiggy for Business** — Onboarding — "List on Swiggy. Onboarding support for new cloud kitchens."
- **Zomato for Restaurants** — Onboarding — "Get listed on Zomato in 3 days."
- **Borzo** — Last-mile delivery — "Per-delivery pricing. No monthly commitment."
- **Kitopi** — Cloud Kitchen Infrastructure — "Managed kitchen spaces available in Mumbai, Delhi, Bengaluru."

**Manufacturing:**

- **GeM (Government e-Marketplace)** — Sales Channel — "Sell directly to government buyers. Over ₹4 lakh crore in annual procurement."
- **NSIC** — Raw Material Support — "National Small Industries Corporation: subsidized raw material procurement."
- **Porter** — Logistics — "Intracity freight for finished goods."

**Retail / E-commerce:**

- **Meesho Supplier** — D2C Channel — "Sell on Meesho's 1.4 crore reseller network."
- **Shiprocket** — Shipping Aggregator — "Best-rate aggregated shipping for D2C brands."
- **Dukaan** — Online Store Builder — "Launch your own store without code. India-first."

**Agriculture:**

- **eNAM** — Market Access — "Electronic National Agriculture Market — sell directly to buyers in 1000+ mandis."
- **Agristack / IFFCO eBazar** — Input Procurement

Each `Connect →` button shows a tooltip: "Clicking opens a referral page. BHAG Labs may earn a commission at no extra cost to you."

**Below the marketplace:**

- A "Download Report as PDF" button (terracotta, non-functional — show toast: "PDF download launching soon")
- A "Share Report" link (fake URL: `vyapaar.bhaglabs.in/report/[6-char-id]`, copy-to-clipboard)

---

## PART 4: BAZAAR (`/bazaar`)

### What it is (for copy/UX context):

Bazaar is a weekly editorial newsletter covering the Indian startup, VC, and founder economy. It sits between Inc42 (too newsy, too long) and The Ken (too paywalled, too analytical) — targeting early-stage founders, B.Tech and MBA students building startups, accelerator managers, and angel investors who want one email per week that tells them what actually matters. The format is opinionated, short, and editorial — each edition is themed and curated, not a link dump.

**Competitive gap**: No free weekly Indian startup newsletter currently combines: (1) funding signal interpretation for founders (not just "X raised Y" but "what this means for your sector"), (2) regulatory/policy updates translated into founder action items, and (3) a "deal of the week" co-selling or partnership highlight for early-stage companies. Bazaar does all three.

---

### 4A. Page Layout

**Background**: Cream (#EDE8E0). The entire page feels like the front page of a broadsheet newspaper.

**MASTHEAD** (top of page, full width):

- Apply the Subko-style nested double border around the entire masthead block (2px outer border, 8px gap, 1px inner border)
- Inside the masthead, centered:
  - Small text above the title (very small caps, tracked out, ochre): "A BHAG LABS PUBLICATION — WEEKLY"
  - Title: **BAZAAR** in Playfair Display Black, 120px on desktop, cream-on-charcoal (charcoal background strip just for the word "BAZAAR", like a newspaper nameplate)
  - Below the title, smaller text in small caps (terracotta): "THE WEEKLY BROADSHEET ON INDIA'S STARTUP & VC ECONOMY"
  - Below that, a thin ruled line with a diamond ◆ centered on it
  - Two small pieces of metadata below the rule: "EST. 2026 ◆ BHAG LABS, MUMBAI ◆ FREE — ALWAYS"

**Tagline** (below masthead, centered, body text size): "Every Sunday morning, one email. The funding signals that matter for founders, the policy changes you need to know, and the one deal worth talking about — no noise, no filler."

---

**Section: "What You Get"** — Three editorial column cards side by side (like a broadsheet's three-column layout):

**Column 1 — THE SIGNAL**

- Icon: Lucide `TrendingUp`
- "A curated breakdown of the week's most important funding rounds — not just the numbers, but what they mean for your sector and stage. If Accel led a ₹40 Cr seed in B2B SaaS, we tell you what their next 6 months of deployment likely looks like."

**Column 2 — THE POLICY DESK**

- Icon: Lucide `FileText`
- "India's regulatory landscape changes every week — new RBI circulars, SEBI guidelines, DPIIT scheme updates, GST amendments. We translate every relevant change into one sentence of founder action: 'This means you should do X by Y date.'"

**Column 3 — THE DEAL ROOM**

- Icon: Lucide `Handshake`
- "One early-stage partnership opportunity per week — a logistics player looking for D2C brands, a cloud infrastructure provider with MSME credits, a government scheme with an open application window. Actionable, not aspirational."

**Thin horizontal rule with ◆ after this section.**

---

**Section: "Past Issues" — Three sample issue cards:**

Each card is a large bordered rectangle styled like a broadsheet article preview. Layout: Issue number + date (small, tracked out) at top, edition theme as large bold serif heading, a 3-sentence dek (editorial summary), and a `Read this edition →` ghost button.

**Sample Issue 1:**

- Small header: "EDITION 001 ◆ WEEK OF [date]"
- Theme heading (Playfair Bold): "The Seed Drought Is Real — Here's How to Raise Anyway"
- Dek: "Seed funding in India fell 30% in 2025. But 200+ seed rounds still closed. This week: what the surviving deals had in common, which VCs are still writing checks, and the three changes you can make to your deck this weekend."
- Tags: #Fundraising #Seed #VCs

**Sample Issue 2:**

- Small header: "EDITION 002 ◆ WEEK OF [date]"
- Theme heading: "ONDC Just Got Interesting for Founders"
- Dek: "The Open Network for Digital Commerce hit ₹1,000 Cr GMV this quarter. This week: the three sectors where ONDC is creating distribution moats, which buyer apps are growing fastest, and how to onboard your startup before the window closes."
- Tags: #ONDC #D2C #DistributionStrategy

**Sample Issue 3:**

- Small header: "EDITION 003 ◆ WEEK OF [date]"
- Theme heading: "The New India Deep Tech Rules: What Changed, What Didn't"
- Dek: "India doubled the deep tech startup window to 20 years and raised the revenue threshold to ₹30 Cr. This week: which sectors benefit most, how to get DPIIT recognition, and what this means for your fundraising timeline if you're building in AI, semiconductors, or biotech."
- Tags: #Deeptech #Policy #DPIIT

---

**SUBSCRIBE FORM** (full-width section, charcoal background, cream text):

- Large editorial heading (Playfair, cream): "Join 10,000+ Founders, Investors, and Builders."
- Subtext: "Every Sunday. Free. Unsubscribe any time."
- Form fields:
  - `First Name` — text input
  - `Email address` — email input
  - `I am a...` — dropdown: Founder (Pre-Seed / Seed) / Founder (Series A+) / Student (aspiring founder) / Angel / VC Investor / Accelerator / Faculty / Mentor / Other
- Button: `Subscribe to Bazaar →` (terracotta, large, full width on mobile)
- Below button: Small text: "No spam. One email per week. That's the deal."
- Code comment: `{/* TODO: Replace form action with Substack/Beehiiv/ConvertKit embed URL */}`

---

**FOOTER of Bazaar page** (below subscribe form):

- "Bazaar is published by BHAG Labs Pvt. Ltd."
- "We do not sell advertising. Revenue comes from BHAG Labs products and optional partner spotlights, always disclosed."
- Link: `← Back to BHAG Labs` (returns to `/`)

---

## PART 5: SHARED COMPONENTS

### SolutionHeader.tsx (reuse across Pitchwala, Vyapaar, Bazaar)

A fixed top strip (not the main nav — a secondary solution-specific header):

- Left: ← Back to BHAG Labs (ghost link, small)
- Center: Solution name in small caps (e.g. "PITCHWALA BY BHAG LABS")
- Right: A small "India's startup toolkit" badge
- Background: Charcoal, text cream
- Height: 40px. Sits above the page content.

---

## TECHNICAL NOTES

- All state: `useState` only. No localStorage, no Supabase, no external API calls.
- Use existing design tokens: `bg-cream`, `text-terracotta`, `text-forest`, `text-ochre`, `font-heading` (Playfair Display), `font-body` (Inter), `border-2 border-foreground`, `paper-texture`, `section-label`, `diamond-divider`
- Framer Motion: Use for:
  - Wizard step transitions (slide left/right)
  - Generation loading states (fade in/out of status text)
  - Scroll-triggered fade-ins on all landing page sections
  - Slide card scroller animation in Pitchwala deck preview
- Lucide icons throughout. Do not use emoji in UI except in the tips sidebar of Pitchwala (where ◆ diamond is used as a typographic bullet).
- Indian number formatting: Use `toLocaleString('en-IN')` for all ₹ values. Show abbreviated crore/lakh format for large numbers (e.g. ₹4,200 Cr).
- Recharts: Use a simple bar chart in Vyapaar's financial projections section (3 bars: Year 1, Year 2, Year 3 revenue) and a simple line chart for projected EBITDA growth.
- All "Download" and "Export" buttons: Non-functional. Show a toast notification: "Coming soon — join Bazaar to be the first to know when this launches."

---