// Legal pages for the BHAG Labs umbrella site.
//
// Working draft. Have an Indian lawyer review before public launch.
// Applicable: DPDP Act 2023, IT Rules 2021.

import { useParams } from "react-router-dom";

const ENTITY = {
  name: "BHAG Labs",
  legal: "BHAG Labs (sole proprietorship of Kartikeya Sharma, pre-incorporation)",
  address: "Delhi NCT, India",
  jurisdiction: "Delhi, India",
  url: "https://bhaglabs.com",
};

const CONTACTS = {
  hello: "hello@bhaglabs.com",
  founders: "founders@bhaglabs.com",
  privacy: "privacy@bhaglabs.com",
  grievance: "grievance@bhaglabs.com",
  legal: "legal@bhaglabs.com",
  security: "security@bhaglabs.com",
};

const GRIEVANCE_OFFICER = {
  name: "Kartikeya Sharma",
  designation: "Founder",
  email: CONTACTS.grievance,
  hours: "Mon-Fri 10:00-18:00 IST",
};

const LAST_UPDATED = "1 May 2026";

interface PageProps {
  title: string;
  kicker: string;
  children: React.ReactNode;
}

function Page({ title, kicker, children }: PageProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16 section-light paper-texture">
      <div className="mb-8 pb-6 border-b border-foreground/10">
        <p className="section-label text-ochre mb-2">{kicker}</p>
        <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground leading-tight">{title}</h1>
        <p className="text-xs text-foreground/50 mt-3">Last updated: {LAST_UPDATED}</p>
      </div>
      <div className="prose prose-sm md:prose-base max-w-none text-foreground/80 leading-relaxed space-y-5
                      [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:mt-10 [&_h2]:mb-3
                      [&_a]:text-terracotta [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:opacity-80
                      [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:marker:text-ochre">
        {children}
      </div>
    </article>
  );
}

function Privacy() {
  return (
    <Page kicker="Privacy" title="Privacy Policy">
      <p>This policy explains what personal data {ENTITY.name} collects through this umbrella site, why, and your rights under India's Digital Personal Data Protection Act, 2023.</p>
      <p>Each {ENTITY.name} product (Neev, Hissa, Pitchwala, Yantra, SIGINT) has its own privacy policy that governs use of that product.</p>

      <h2>Who is the data fiduciary</h2>
      <p>{ENTITY.legal}. Privacy contact: <a href={`mailto:${CONTACTS.privacy}`}>{CONTACTS.privacy}</a>.</p>

      <h2>What this site collects</h2>
      <ul>
        <li><strong>Newsletter signups</strong> - your name, email, and self-described role if you join the SIGINT mailing list via this site.</li>
        <li><strong>Contact form messages</strong> - what you write to us, and your reply-to address.</li>
        <li><strong>Anonymous usage analytics</strong> - page views, navigation paths, error reports. No third-party advertising trackers.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to enquiries.</li>
        <li>To deliver the SIGINT field report you opted into.</li>
        <li>To improve the site (aggregate analytics).</li>
      </ul>

      <h2>What we do NOT do</h2>
      <ul>
        <li>We do not sell your data.</li>
        <li>We do not run third-party advertising.</li>
        <li>We do not use your data to train external AI models.</li>
      </ul>

      <h2>Sub-processors</h2>
      <p>Netlify (CDN hosting, global), Substack or Resend (newsletter delivery, USA), Google Cloud Platform (compute, Mumbai region).</p>

      <h2>Your rights under the DPDP Act</h2>
      <ul>
        <li>Access, correction, erasure, withdraw consent.</li>
        <li>Grievance redressal - see <a href="/grievance">Grievance page</a>.</li>
      </ul>
      <p>Email <a href={`mailto:${CONTACTS.privacy}`}>{CONTACTS.privacy}</a>. We respond within 72 hours for erasure / consent-withdrawal, 7 days for others.</p>

      <h2>Retention</h2>
      <p>Newsletter subscribers are retained until unsubscribe + 6 months. Contact-form messages: 12 months.</p>

      <h2>Security</h2>
      <p>Encrypted in transit (TLS). Vulnerability reports: <a href={`mailto:${CONTACTS.security}`}>{CONTACTS.security}</a>.</p>

      <h2>Children</h2>
      <p>This site is not directed at users under 18.</p>

      <h2>Updates</h2>
      <p>Material changes will be highlighted on the site for 30 days.</p>

      <h2>Contact</h2>
      <p>Privacy: <a href={`mailto:${CONTACTS.privacy}`}>{CONTACTS.privacy}</a> · Grievance: <a href="/grievance">Grievance page</a>.</p>
    </Page>
  );
}

function Terms() {
  return (
    <Page kicker="Legal" title="Terms of Service">
      <p>These terms govern your use of the BHAG Labs umbrella site (<a href={ENTITY.url}>{ENTITY.url}</a>). Each {ENTITY.name} product has its own terms governing that product.</p>

      <h2>1. The site</h2>
      <p>This site is the public face of {ENTITY.legal}. It markets the company and its products. Use of any specific product is governed by that product's own terms.</p>

      <h2>2. Acceptable use</h2>
      <ul>
        <li>Do not scrape, mirror, or republish the site.</li>
        <li>Do not impersonate {ENTITY.name} or its founders.</li>
        <li>Do not abuse the contact channels for spam.</li>
      </ul>

      <h2>3. Our IP</h2>
      <p>The {ENTITY.name} brand, copy, design system, and code are owned by {ENTITY.name}. The Hindi diacritical type and Devanagari accents are based on traditional letterforms in the public domain.</p>

      <h2>4. Disclaimers</h2>
      <p>Information on this site is provided "as is". Forward-looking statements about products, timelines, and roadmaps are aspirational and not guarantees.</p>

      <h2>5. Limitation of liability</h2>
      <p>To the fullest extent permitted by law, {ENTITY.name}'s total liability arising from your use of this umbrella site is limited to ₹1,000.</p>

      <h2>6. Governing law</h2>
      <p>Laws of India. Exclusive jurisdiction: courts at {ENTITY.jurisdiction}.</p>

      <h2>7. Changes</h2>
      <p>Material changes will be highlighted on the site for 30 days.</p>

      <h2>8. Contact</h2>
      <p>Legal: <a href={`mailto:${CONTACTS.legal}`}>{CONTACTS.legal}</a> · General: <a href={`mailto:${CONTACTS.hello}`}>{CONTACTS.hello}</a></p>
    </Page>
  );
}

function Grievance() {
  return (
    <Page kicker="Compliance" title="Grievance Officer">
      <p>In compliance with the <strong>IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong> and the <strong>DPDP Act 2023</strong>, {ENTITY.name} designates a Grievance Officer for the umbrella site and all products.</p>

      <h2>Officer</h2>
      <p>
        <strong>{GRIEVANCE_OFFICER.name}</strong>, {GRIEVANCE_OFFICER.designation}<br />
        Email: <a href={`mailto:${GRIEVANCE_OFFICER.email}`}>{GRIEVANCE_OFFICER.email}</a><br />
        Address: {ENTITY.address}<br />
        Hours: {GRIEVANCE_OFFICER.hours}
      </p>

      <h2>What you can file</h2>
      <ul>
        <li>Takedown requests under Rule 3(1)(b) of the IT Rules.</li>
        <li>Defamation, copyright, or impersonation complaints about content on any {ENTITY.name} property.</li>
        <li>DPDP complaints (access, correction, erasure, consent withdrawal).</li>
        <li>Cross-product escalations that the per-product grievance channels could not resolve.</li>
      </ul>

      <h2>How we respond</h2>
      <ul>
        <li><strong>Acknowledgement:</strong> within 24 hours.</li>
        <li><strong>Resolution:</strong> 15 days for IT-Rules grievances; 72 hours for DPDP erasure / consent-withdrawal; 7 days for other DPDP requests.</li>
        <li><strong>Escalation:</strong> Data Protection Board of India once operational; or Grievance Appellate Committee under the IT Rules.</li>
      </ul>
    </Page>
  );
}

const PAGES: Record<string, () => JSX.Element> = {
  privacy: Privacy,
  terms: Terms,
  grievance: Grievance,
};

interface LegalPageProps {
  kind?: string;
}

export default function LegalPage({ kind }: LegalPageProps) {
  const params = useParams();
  const resolved = kind || params.kind;
  const Component = resolved ? PAGES[resolved] : undefined;
  if (!Component) {
    return (
      <Page kicker="404" title="Not found">
        <p>This legal page does not exist. Try <a href="/privacy">Privacy</a>, <a href="/terms">Terms</a>, or <a href="/grievance">Grievance</a>.</p>
      </Page>
    );
  }
  return <Component />;
}
