import type { Metadata } from "next";
import HomeMotion from "../../HomeMotion";
import { ArrowDown, ArrowUpRight } from "../../Icons";
import { CaseFooter, CaseNav, ToolBadges } from "../CaseParts";
import "../case.css";

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
    images: [{ url: "/work/osuko/hero-desktop.webp", alt: "OSUKO Construction website landing page" }],
  },
};

const principles = [
  {
    title: "Authority without noise",
    text: "Strong type, disciplined grids and confident spacing communicate capability without over-selling.",
  },
  {
    title: "Specificity builds trust",
    text: "Services and the delivery process are described in concrete, useful language.",
  },
  {
    title: "Every section moves forward",
    text: "The narrative progresses from purpose to capability, proof and a focused enquiry.",
  },
];

const chapters = [
  {
    number: "01",
    label: "Services",
    title: "Capability made easy to scan.",
    text: "Residential construction, commercial projects, project management and civil works needed to feel connected without becoming a wall of information. A numbered service system and generous spacing let prospects understand the company’s range in seconds, then slow down for detail.",
    image: "/work/osuko/services-desktop.webp",
    alt: "OSUKO construction services section",
    insight: ["Information architecture", "Service hierarchy", "Editorial layout"],
  },
  {
    number: "02",
    label: "Process",
    title: "Trust built into the journey.",
    text: "Construction clients need visibility as much as ambition. The four-step process, from discovery and planning to communication and handover, turns an operational promise into a reassuring, concrete story. The split layout balances technical structure with human confidence.",
    image: "/work/osuko/process-desktop.webp",
    alt: "OSUKO four-step construction process section",
    insight: ["Process storytelling", "Trust signals", "Visual rhythm"],
  },
  {
    number: "03",
    label: "Selected focus",
    title: "The work carries the proof.",
    text: "Large, carefully framed imagery gives the portfolio section weight while the surrounding typography keeps it connected to the brand system. The composition moves between residential character, active delivery and precision-led execution without losing hierarchy.",
    image: "/work/osuko/work-desktop.webp",
    alt: "OSUKO selected construction focus and project imagery",
    insight: ["Image direction", "Project framing", "Responsive composition"],
  },
  {
    number: "04",
    label: "Conversion",
    title: "A conversation, not a cold form.",
    text: "The enquiry section asks for only the details needed to begin: contact information, project type and a short brief. Clear direct-contact alternatives and the deep-red brand field make the call to action feel like the natural conclusion to the story, not an interruption.",
    image: "/work/osuko/contact-desktop.webp",
    alt: "OSUKO construction project enquiry form",
    insight: ["Lead capture", "Form UX", "Contact strategy"],
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

const tools = ["Figma", "Next.js", "React", "HTML5", "CSS", "VS Code", "GitHub", "Vercel"];

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
    <main className="case case-osuko">
      <HomeMotion />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <CaseNav label="OSUKO / Case study" />

      <header className="case-hero case-wrap">
        <p className="case-label">Brand website · Product design + development · 2026</p>
        <h1>A digital foundation for a company that builds <em>what lasts.</em></h1>
        <p className="case-lead">
          OSUKO Construction needed more than an online brochure. I designed a responsive company
          website that makes its purpose credible, its services understandable and the next step easy
          for prospective clients.
        </p>
        <div className="case-actions">
          <a className="case-btn case-btn-accent" href={PROJECT_URL} target="_blank" rel="noreferrer">
            Visit live website <ArrowUpRight />
          </a>
          <a className="case-btn" href="#story">Explore the case study <ArrowDown /></a>
        </div>

        <figure className="case-shot">
          <img
            src="/work/osuko/hero-desktop.webp"
            alt="OSUKO Construction website desktop landing page"
            width="1200"
            height="833"
            decoding="async"
            fetchPriority="high"
          />
          <figcaption><span>Live interface</span>Desktop / Home</figcaption>
          <span className="hand case-shot-note">designed + built by me</span>
        </figure>

        <div className="case-facts">
          <div><span>Role</span><strong>Product design + front-end development</strong></div>
          <div><span>Focus</span><strong>Brand credibility + lead generation</strong></div>
          <div><span>Platform</span><strong>Responsive company website</strong></div>
          <div><span>Status</span><strong>Designed, built and live</strong></div>
        </div>
      </header>

      <section className="case-section case-wrap case-split" id="story">
        <p className="case-label">The challenge / 01</p>
        <div className="case-body reveal">
          <h2>Make expertise feel clear before the first conversation.</h2>
          <p>
            Construction decisions carry cost, time and trust. A visitor needs to understand who the
            company is, what it can deliver and how it works before making contact. The experience had
            to feel established and distinctive while remaining direct enough for busy prospects.
          </p>
        </div>
      </section>

      <section className="case-section case-wrap" aria-label="OSUKO design principles">
        <div className="case-cards">
          {principles.map((principle, index) => (
            <article className="reveal" key={principle.title}>
              <span className="num">0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-band">
        <div className="case-wrap case-band-grid">
          <div>
            <p className="case-label">Responsive by design / 02</p>
            <h2>The same confidence, held in one hand.</h2>
            <p>
              On mobile, the hierarchy tightens without losing the brand: navigation becomes compact,
              the headline keeps its impact, actions remain thumb-friendly and the construction imagery
              continues to carry the atmosphere.
            </p>
          </div>
          <img
            className="case-phone"
            src="/work/osuko/hero-mobile.webp"
            alt="OSUKO Construction mobile landing page"
            width="390"
            height="844"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="case-section case-wrap" aria-label="OSUKO website walkthrough">
        <div className="case-head reveal">
          <p className="case-label">Experience walkthrough / 03</p>
          <h2>One story from capability to contact.</h2>
        </div>
        {chapters.map((chapter, index) => (
          <article className={`case-chapter${index % 2 ? " reverse" : ""}`} key={chapter.number}>
            <div className="reveal">
              <p className="num">{chapter.number}</p>
              <p className="case-label">{chapter.label}</p>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
              <ul className="case-tags">
                {chapter.insight.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
            <figure className="case-shot reveal">
              <img
                src={chapter.image}
                alt={chapter.alt}
                width="1200"
                height="833"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </article>
        ))}
      </section>

      <section className="case-section case-wrap case-split">
        <div className="case-head reveal">
          <p className="case-label">How it was built / 04</p>
          <h2>A brand system translated into working code.</h2>
          <p>
            I carried the design logic into a component-based Next.js build, preserving the editorial
            rhythm across screen sizes and connecting the final experience to a practical enquiry path,
            production hosting and visitor analytics.
          </p>
          <ToolBadges tools={tools} />
        </div>
        <ol className="case-list reveal">
          {stack.map(([title, detail], index) => (
            <li key={title}>
              <span className="num">0{index + 1}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="case-section case-wrap">
        <p className="case-label">The outcome / 05</p>
        <blockquote className="case-quote reveal">
          Built with the same principle as the company: every detail should support the whole.
        </blockquote>
        <p className="case-after">
          The finished site gives OSUKO a distinct, professional presence and gives prospective clients
          a clear route from curiosity to contact. It demonstrates my ability to connect brand thinking,
          responsive product design and front-end implementation in one coherent delivery.
        </p>
        <div className="case-actions">
          <a className="case-btn case-btn-accent" href={PROJECT_URL} target="_blank" rel="noreferrer">
            Experience the live website <ArrowUpRight />
          </a>
        </div>
      </section>

      <CaseFooter note="built to last, like the company" />
    </main>
  );
}
