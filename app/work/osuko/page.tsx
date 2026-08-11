import type { Metadata } from "next";
import "./osuko.css";

const SITE_URL = "https://kenechukwuokoye.vercel.app";
const PROJECT_URL = "https://osukoconstruction.vercel.app/";

export const metadata: Metadata = {
  title: "OSUKO Construction Website Case Study | Kenechukwu Okoye-Chine",
  description:
    "A responsive web design and development case study for OSUKO Construction Co. Ltd, created by Kenechukwu Okoye-Chine.",
  alternates: { canonical: "/work/osuko" },
  openGraph: {
    title: "OSUKO Construction Website Case Study | Kenechukwu Okoye-Chine",
    description:
      "How a clear editorial system turned OSUKO’s purpose, services and process into a credible construction-company website.",
    url: `${SITE_URL}/work/osuko`,
    type: "article",
    images: [{ url: "/work/osuko/hero-desktop.png", alt: "OSUKO Construction website landing page" }],
  },
};

const chapters = [
  {
    number: "01",
    label: "Services",
    title: "Capability made easy to scan.",
    text: "Residential construction, commercial projects, project management and civil works needed to feel connected without becoming a wall of information. A numbered service system and generous spacing let prospects understand the company’s range in seconds, then slow down for detail.",
    image: "/work/osuko/services-desktop.png",
    alt: "OSUKO construction services section",
    insight: "Information architecture · Service hierarchy · Editorial layout",
  },
  {
    number: "02",
    label: "Process",
    title: "Trust built into the journey.",
    text: "Construction clients need visibility as much as ambition. The four-step process—from discovery and planning to communication and handover—turns an operational promise into a reassuring, concrete story. The split layout balances technical structure with human confidence.",
    image: "/work/osuko/process-desktop.png",
    alt: "OSUKO four-step construction process section",
    insight: "Process storytelling · Trust signals · Visual rhythm",
  },
  {
    number: "03",
    label: "Selected focus",
    title: "The work carries the proof.",
    text: "Large, carefully framed imagery gives the portfolio section weight while the surrounding typography keeps it connected to the brand system. The composition moves between residential character, active delivery and precision-led execution without losing hierarchy.",
    image: "/work/osuko/work-desktop.png",
    alt: "OSUKO selected construction focus and project imagery",
    insight: "Image direction · Project framing · Responsive composition",
  },
  {
    number: "04",
    label: "Conversion",
    title: "A conversation, not a cold form.",
    text: "The enquiry section asks for only the details needed to begin: contact information, project type and a short brief. Clear direct-contact alternatives and the deep-red brand field make the call to action feel like the natural conclusion to the story—not an interruption.",
    image: "/work/osuko/contact-desktop.png",
    alt: "OSUKO construction project enquiry form",
    insight: "Lead capture · Form UX · Contact strategy",
  },
];

const stack = [
  ["Design direction", "Figma, responsive layouts and a reusable visual system"],
  ["Application", "Next.js / React with component-based page architecture"],
  ["Front end", "Semantic HTML, modern CSS and responsive breakpoints"],
  ["Interaction", "Smooth navigation, purposeful motion and accessible controls"],
  ["Conversion", "Structured enquiry flow with prepared email handoff"],
  ["Delivery", "VS Code, GitHub, Vercel hosting and Vercel Analytics"],
];

export default function OsukoCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "OSUKO Construction Company Website",
    creator: { "@type": "Person", name: "Kenechukwu Okoye-Chine", url: SITE_URL },
    url: `${SITE_URL}/work/osuko`,
    subjectOf: PROJECT_URL,
    description:
      "A responsive construction-company website combining brand storytelling, service communication and a project enquiry experience.",
  };

  return (
    <main className="osuko-case">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <nav className="osuko-nav" aria-label="Case study navigation">
        <a className="osuko-mark" href="/" aria-label="Back to Kenechukwu Okoye portfolio">KO<span>®</span></a>
        <span>OSUKO / Case study</span>
        <a className="osuko-back" href="/#work">Back to work ↗</a>
      </nav>

      <header className="osuko-hero">
        <div className="osuko-hero-copy">
          <p className="osuko-eyebrow">Brand website · Product design + development · 2026</p>
          <h1>A digital foundation for a company that builds <em>what lasts.</em></h1>
          <p className="osuko-lead">
            OSUKO Construction needed more than an online brochure. I designed a responsive company
            website that makes its purpose credible, its services understandable and the next step easy
            for prospective clients.
          </p>
          <div className="osuko-actions">
            <a className="visit-button" href={PROJECT_URL} target="_blank" rel="noreferrer">Visit live website ↗</a>
            <a href="#story">Explore the case study ↓</a>
          </div>
        </div>
        <div className="osuko-hero-frame">
          <img src="/work/osuko/hero-desktop.png" alt="OSUKO Construction website desktop landing page" />
          <div><span>Live interface</span><strong>Desktop / Home</strong></div>
        </div>
      </header>

      <section className="osuko-summary">
        <div><span>Role</span><strong>Product design + front-end development</strong></div>
        <div><span>Focus</span><strong>Brand credibility + lead generation</strong></div>
        <div><span>Platform</span><strong>Responsive company website</strong></div>
        <div><span>Status</span><strong>Designed, built and live</strong></div>
      </section>

      <section className="osuko-problem" id="story">
        <p className="osuko-eyebrow">The challenge / 01</p>
        <div>
          <h2>Make expertise feel clear before the first conversation.</h2>
          <p>
            Construction decisions carry cost, time and trust. A visitor needs to understand who the
            company is, what it can deliver and how it works before making contact. The experience had
            to feel established and distinctive while remaining direct enough for busy prospects.
          </p>
        </div>
      </section>

      <section className="osuko-principles" aria-label="OSUKO design principles">
        <article><span>01</span><h3>Authority without noise</h3><p>Strong type, disciplined grids and confident spacing communicate capability without over-selling.</p></article>
        <article><span>02</span><h3>Specificity builds trust</h3><p>Services and the delivery process are described in concrete, useful language.</p></article>
        <article><span>03</span><h3>Every section moves forward</h3><p>The narrative progresses from purpose to capability, proof and a focused enquiry.</p></article>
      </section>

      <section className="osuko-mobile-proof">
        <div>
          <p className="osuko-eyebrow">Responsive by design / 02</p>
          <h2>The same confidence, held in one hand.</h2>
          <p>
            On mobile, the hierarchy tightens without losing the brand: navigation becomes compact,
            the headline keeps its impact, actions remain thumb-friendly and the construction imagery
            continues to carry the atmosphere.
          </p>
        </div>
        <div className="mobile-device">
          <img src="/work/osuko/hero-mobile.png" alt="OSUKO Construction mobile landing page" loading="lazy" />
        </div>
      </section>

      <section className="osuko-walkthrough" aria-label="OSUKO website walkthrough">
        <div className="osuko-section-heading">
          <p className="osuko-eyebrow">Experience walkthrough / 03</p>
          <h2>One story from capability to contact.</h2>
        </div>
        {chapters.map((chapter) => (
          <article className="osuko-chapter" key={chapter.number}>
            <div className="chapter-copy">
              <span>{chapter.number}</span>
              <p className="chapter-label">{chapter.label}</p>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
              <small>{chapter.insight}</small>
            </div>
            <figure>
              <img src={chapter.image} alt={chapter.alt} loading="lazy" />
            </figure>
          </article>
        ))}
      </section>

      <section className="osuko-build">
        <div className="osuko-build-intro">
          <p className="osuko-eyebrow">How it was built / 04</p>
          <h2>A brand system translated into working code.</h2>
          <p>
            I carried the design logic into a component-based Next.js build, preserving the editorial
            rhythm across screen sizes and connecting the final experience to a practical enquiry path,
            production hosting and visitor analytics.
          </p>
        </div>
        <div className="osuko-stack">
          {stack.map(([title, detail], index) => (
            <div key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{detail}</p></div>
          ))}
        </div>
      </section>

      <section className="osuko-outcome">
        <p className="osuko-eyebrow">The outcome / 05</p>
        <blockquote>Built with the same principle as the company: every detail should support the whole.</blockquote>
        <p>
          The finished site gives OSUKO a distinct, professional presence and gives prospective clients
          a clear route from curiosity to contact. It demonstrates my ability to connect brand thinking,
          responsive product design and front-end implementation in one coherent delivery.
        </p>
        <a href={PROJECT_URL} target="_blank" rel="noreferrer">Experience the live website ↗</a>
      </section>

      <footer className="osuko-footer">
        <p>Next project</p>
        <a href="/#work">Explore all work ↗</a>
        <a href="mailto:keneochine@gmail.com">keneochine@gmail.com</a>
      </footer>
    </main>
  );
}
