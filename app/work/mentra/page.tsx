import type { Metadata } from "next";
import "./mentra.css";

const SITE_URL = "https://kenechukwuokoye.vercel.app";
const MENTRA_URL = "https://learnwithmentra.vercel.app/";

export const metadata: Metadata = {
  title: "Mentra AI Learning Platform Case Study | Kenechukwu Okoye-Chine",
  description:
    "An extensive product design and software development case study for Mentra, a Groq-powered AI learning platform built with Expo, React Native, TypeScript and Supabase.",
  alternates: { canonical: "/work/mentra" },
  openGraph: {
    title: "Mentra AI Learning Platform Case Study | Kenechukwu Okoye-Chine",
    description:
      "How Mentra turns uploaded study materials into grounded answers, summaries, flashcards, quizzes and focused study plans.",
    url: `${SITE_URL}/work/mentra`,
    type: "article",
    images: [{ url: "/work/mentra/website-cover.png", alt: "Mentra AI website homepage" }],
  },
};

const productCapabilities = [
  {
    number: "01",
    title: "Grounded tutoring",
    text: "Students can ask about an academic topic or select an uploaded material. Mentra retrieves relevant passages and returns a clear explanation with citations back to the source.",
  },
  {
    number: "02",
    title: "Material intelligence",
    text: "PDFs, Word documents, slides, spreadsheets, notes and images become summaries, key points and revision-ready study tools instead of sitting unread in a folder.",
  },
  {
    number: "03",
    title: "Active practice",
    text: "The same material can generate flashcards and varied quizzes, while the solver works through typed or photographed maths and science problems step by step.",
  },
  {
    number: "04",
    title: "Study continuity",
    text: "A personal library, reading progress, practice history, study plans and local reminders connect one AI response to the learner’s next useful action.",
  },
];

const architecture = [
  ["Client", "Expo 54, React Native 0.81, React 19 and TypeScript 5.9"],
  ["Interface", "Responsive native screens, React Native Web, design tokens and accessible loading states"],
  ["Data", "Supabase Auth, Postgres, private Storage and row-level access policies"],
  ["AI layer", "Protected Supabase Edge Function with Groq chat completions and structured outputs"],
  ["Document pipeline", "File upload, text extraction, relevant-passage retrieval and source citations"],
  ["Device services", "Document and image pickers, PDF reading, AsyncStorage and local notifications"],
  ["Web launch", "Responsive marketing experience deployed on Vercel"],
  ["Delivery", "GitHub, VS Code, Expo/EAS workflows, type checking and device testing"],
];

const technologies = [
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Supabase",
  "PostgreSQL",
  "Supabase Edge Functions",
  "Groq API",
  "React Native Web",
  "Vercel",
];

export default function MentraCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mentra AI",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Android, iOS and Web",
    creator: {
      "@type": "Person",
      name: "Kenechukwu Okoye-Chine",
      url: SITE_URL,
    },
    description:
      "A Groq-powered AI study companion that turns learning materials into grounded answers, summaries, flashcards, quizzes and focused plans.",
    url: MENTRA_URL,
  };

  return (
    <main className="mentra-case">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <nav className="mentra-nav" aria-label="Case study navigation">
        <a className="mentra-mark" href="/" aria-label="Back to Kenechukwu Okoye portfolio">
          KO<span>®</span>
        </a>
        <span>Mentra / Case study</span>
        <div className="mentra-nav-actions">
          <a href="/#work">All work</a>
          <a className="nav-live" href={MENTRA_URL} target="_blank" rel="noreferrer">
            Visit Mentra ↗
          </a>
        </div>
      </nav>

      <header className="mentra-hero">
        <div className="hero-copy">
          <p className="case-eyebrow">AI learning platform · Product design + software development · 2026</p>
          <h1>From uploaded material to <em>real learning progress.</em></h1>
          <p className="hero-lead">
            Mentra is an AI study companion built for African learners from primary school through
            university. It brings files, grounded tutoring, summaries, practice and planning into one
            connected learning system.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href={MENTRA_URL} target="_blank" rel="noreferrer">
              Explore Mentra <span aria-hidden="true">↗</span>
            </a>
            <a className="secondary-action" href="#case-overview">Read the case study ↓</a>
          </div>
        </div>

        <a className="hero-cover" href={MENTRA_URL} target="_blank" rel="noreferrer" aria-label="Open the Mentra website">
          <img src="/work/mentra/website-cover.png" alt="Mentra website homepage showing its AI study platform" />
          <span>Live product · learnwithmentra.vercel.app ↗</span>
        </a>

        <div className="hero-facts" aria-label="Project overview">
          <div><span>My role</span><strong>Product designer + developer</strong></div>
          <div><span>Product</span><strong>AI learning companion</strong></div>
          <div><span>Platforms</span><strong>Mobile + responsive web</strong></div>
          <div><span>Core intelligence</span><strong>Groq + grounded retrieval</strong></div>
        </div>
      </header>

      <section className="case-overview" id="case-overview">
        <p className="case-eyebrow">The opportunity / 01</p>
        <div>
          <h2>Students already have content. The harder problem is turning it into a useful study rhythm.</h2>
          <p>
            Learning often happens across disconnected tools: files in one place, generic AI chat in
            another, practice somewhere else and reminders in a calendar. That fragmentation costs time,
            loses context and makes the next step unclear. I shaped Mentra around a single loop: add what
            you are learning, understand it with AI, practise it actively, then return with a plan.
          </p>
        </div>
      </section>

      <section className="capability-section" aria-label="Mentra product capabilities">
        <div className="section-heading">
          <p className="case-eyebrow">Product system / 02</p>
          <h2>One learning system, not a collection of AI features.</h2>
        </div>
        <div className="capability-grid">
          {productCapabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="visual-story" aria-label="Mentra product walkthrough">
        <article className="visual-chapter">
          <div className="chapter-copy">
            <p className="case-eyebrow">Product communication / 03</p>
            <h2>The value is explained before the technology.</h2>
            <p>
              The public experience presents Mentra through the jobs learners recognise: getting a clear
              answer, simplifying long materials, creating active-recall practice and seeing every step in
              a solution. This keeps the product approachable even when the system underneath is complex.
            </p>
          </div>
          <figure className="browser-shot">
            <img src="/work/mentra/website-features.png" alt="Mentra website feature overview" loading="lazy" />
            <figcaption>Current product capabilities on the Mentra website</figcaption>
          </figure>
        </article>

        <article className="visual-chapter reverse">
          <div className="chapter-copy">
            <p className="case-eyebrow">Experience architecture / 04</p>
            <h2>A three-step loop keeps the product understandable.</h2>
            <p>
              The experience moves from material to mastery: add a file or question, let Mentra create
              useful study tools, then return through practice history, plans and reminders. Every feature
              has a place in that loop, which prevents the app from feeling like an overloaded dashboard.
            </p>
          </div>
          <figure className="browser-shot">
            <img src="/work/mentra/website-workflow.png" alt="Mentra material-to-mastery workflow" loading="lazy" />
            <figcaption>The core learner journey from upload to continued progress</figcaption>
          </figure>
        </article>

        <article className="visual-chapter">
          <div className="chapter-copy">
            <p className="case-eyebrow">Grounded intelligence / 05</p>
            <h2>Answers stay connected to what the student is actually studying.</h2>
            <p>
              For material-based questions, the backend verifies the learner, retrieves only their file,
              extracts readable content, finds relevant passages and sends that context to Groq. The answer
              points back to pages or sections so learners can verify explanations instead of trusting an
              isolated response.
            </p>
          </div>
          <figure className="browser-shot">
            <img src="/work/mentra/website-grounded.png" alt="Mentra grounded answer and citation experience" loading="lazy" />
            <figcaption>Relevant context, learner-level explanations and visible citations</figcaption>
          </figure>
        </article>
      </section>

      <section className="architecture-section">
        <div className="architecture-intro">
          <p className="case-eyebrow">How it was built / 06</p>
          <h2>Product decisions carried through to production architecture.</h2>
          <p>
            Mentra is not a visual prototype. I worked across the interface, application logic, data model,
            secure AI boundary and web launch. The architecture keeps model credentials out of the client,
            protects private learning files and gives each AI workflow a typed, testable contract.
          </p>
        </div>
        <div className="architecture-list">
          {architecture.map(([title, detail], index) => (
            <div key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="technology-section">
        <div>
          <p className="case-eyebrow">Languages & tools / 07</p>
          <h2>The stack behind Mentra.</h2>
        </div>
        <div className="technology-cloud">
          {technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </section>

      <section className="engineering-notes">
        <p className="case-eyebrow">Important implementation choices / 08</p>
        <div className="note-grid">
          <article>
            <span>01</span>
            <h3>Private by design</h3>
            <p>Supabase authentication, private file storage and row-level ownership rules keep one learner’s materials separate from another’s.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Secrets stay server-side</h3>
            <p>The client calls a protected Edge Function. Groq credentials, document extraction and privileged storage access never ship inside the mobile app.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Built for real files</h3>
            <p>The upload pipeline handles PDFs, Office files, text, spreadsheets and common images while avoiding memory-heavy base64 uploads on lower-end Android devices.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Useful failure states</h3>
            <p>Loading, empty, validation and provider-limit states explain what happened and give the learner a clear next action instead of a generic error.</p>
          </article>
        </div>
      </section>

      <section className="reflection">
        <p className="case-eyebrow">What this project demonstrates / 09</p>
        <blockquote>“AI becomes useful when product structure, trusted context and the next human action work together.”</blockquote>
        <p>
          Mentra demonstrates how I combine product design and software development: defining a focused
          learner journey, translating it into a reusable interface system, building secure data and AI
          flows, and communicating the finished product through a responsive launch experience.
        </p>
      </section>

      <section className="mentra-launch">
        <p className="case-eyebrow">See the product</p>
        <h2>Explore Mentra in action.</h2>
        <p>Visit the product website to see the complete feature story and access the current Android build.</p>
        <a href={MENTRA_URL} target="_blank" rel="noreferrer">Visit Mentra ↗</a>
      </section>

      <footer className="mentra-footer">
        <div>
          <p>Next step</p>
          <a href="/#work">Return to selected work ↗</a>
        </div>
        <a href="mailto:keneochine@gmail.com">keneochine@gmail.com</a>
      </footer>
    </main>
  );
}
