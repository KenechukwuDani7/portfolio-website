import type { Metadata } from "next";
import HomeMotion from "../../HomeMotion";
import { ArrowDown, ArrowUpRight } from "../../Icons";
import { CaseFooter, CaseNav, ToolBadges } from "../CaseParts";
import "../case.css";

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
    images: [{ url: "/work/mentra/website-cover-og.jpg", alt: "Mentra AI website homepage" }],
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

const chapters = [
  {
    label: "Product communication / 03",
    title: "The value is explained before the technology.",
    text: "The public experience presents Mentra through the jobs learners recognise: getting a clear answer, simplifying long materials, creating active-recall practice and seeing every step in a solution. This keeps the product approachable even when the system underneath is complex.",
    image: "website-features",
    alt: "Mentra website feature overview",
    caption: "Current product capabilities on the Mentra website",
  },
  {
    label: "Experience architecture / 04",
    title: "A three-step loop keeps the product understandable.",
    text: "The experience moves from material to mastery: add a file or question, let Mentra create useful study tools, then return through practice history, plans and reminders. Every feature has a place in that loop, which prevents the app from feeling like an overloaded dashboard.",
    image: "website-workflow",
    alt: "Mentra material-to-mastery workflow",
    caption: "The core learner journey from upload to continued progress",
  },
  {
    label: "Grounded intelligence / 05",
    title: "Answers stay connected to what the student is actually studying.",
    text: "For material-based questions, the backend verifies the learner, retrieves only their file, extracts readable content, finds relevant passages and sends that context to Groq. The answer points back to pages or sections so learners can verify explanations instead of trusting an isolated response.",
    image: "website-grounded",
    alt: "Mentra grounded answer and citation experience",
    caption: "Relevant context, learner-level explanations and visible citations",
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
  "GitHub",
  "VS Code",
];

const notes = [
  {
    title: "Private by design",
    text: "Supabase authentication, private file storage and row-level ownership rules keep one learner’s materials separate from another’s.",
  },
  {
    title: "Secrets stay server-side",
    text: "The client calls a protected Edge Function. Groq credentials, document extraction and privileged storage access never ship inside the mobile app.",
  },
  {
    title: "Built for real files",
    text: "The upload pipeline handles PDFs, Office files, text, spreadsheets and common images while avoiding memory-heavy base64 uploads on lower-end Android devices.",
  },
  {
    title: "Useful failure states",
    text: "Loading, empty, validation and provider-limit states explain what happened and give the learner a clear next action instead of a generic error.",
  },
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
    <main className="case case-mentra">
      <HomeMotion />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <CaseNav label="Mentra / Case study" />

      <header className="case-hero case-wrap">
        <p className="case-label">AI learning platform · Product design + software development · 2026</p>
        <h1>From uploaded material to <em>real learning progress.</em></h1>
        <p className="case-lead">
          Mentra is an AI study companion built for African learners from primary school through
          university. It brings files, grounded tutoring, summaries, practice and planning into one
          connected learning system.
        </p>
        <div className="case-actions">
          <a className="case-btn case-btn-accent" href={MENTRA_URL} target="_blank" rel="noreferrer">
            Explore Mentra <ArrowUpRight />
          </a>
          <a className="case-btn" href="#case-overview">Read the case study <ArrowDown /></a>
        </div>

        <a className="case-shot" href={MENTRA_URL} target="_blank" rel="noreferrer" aria-label="Open the Mentra website">
          <img
            src="/work/mentra/website-cover-1440.webp"
            srcSet="/work/mentra/website-cover-720.webp 720w, /work/mentra/website-cover-1440.webp 1440w"
            sizes="(max-width: 1240px) 100vw, 1200px"
            width="1440"
            height="1050"
            alt="Mentra website homepage showing its AI study platform"
            decoding="async"
            fetchPriority="high"
          />
          <span className="case-shot-bar">
            <span>Live product</span>
            <span>learnwithmentra.vercel.app <ArrowUpRight /></span>
          </span>
          <span className="hand case-shot-note">it’s live, go try it</span>
        </a>

        <div className="case-facts" aria-label="Project overview">
          <div><span>My role</span><strong>Product designer + developer</strong></div>
          <div><span>Product</span><strong>AI learning companion</strong></div>
          <div><span>Platforms</span><strong>Mobile + responsive web</strong></div>
          <div><span>Core intelligence</span><strong>Groq + grounded retrieval</strong></div>
        </div>
      </header>

      <section className="case-section case-wrap case-split" id="case-overview">
        <p className="case-label">The opportunity / 01</p>
        <div className="case-body reveal">
          <h2>Students already have content. The harder problem is turning it into a useful study rhythm.</h2>
          <p>
            Learning often happens across disconnected tools: files in one place, generic AI chat in
            another, practice somewhere else and reminders in a calendar. That fragmentation costs time,
            loses context and makes the next step unclear. I shaped Mentra around a single loop: add what
            you are learning, understand it with AI, practise it actively, then return with a plan.
          </p>
        </div>
      </section>

      <section className="case-section case-wrap" aria-label="Mentra product capabilities">
        <div className="case-head reveal">
          <p className="case-label">Product system / 02</p>
          <h2>One learning system, not a collection of AI features.</h2>
        </div>
        <div className="case-cards">
          {productCapabilities.map((capability) => (
            <article className="reveal" key={capability.number}>
              <span className="num">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section case-wrap" aria-label="Mentra product walkthrough">
        {chapters.map((chapter, index) => (
          <article className={`case-chapter${index % 2 ? " reverse" : ""}`} key={chapter.image}>
            <div className="reveal">
              <p className="case-label">{chapter.label}</p>
              <h2>{chapter.title}</h2>
              <p>{chapter.text}</p>
            </div>
            <figure className="case-shot reveal">
              <img
                src={`/work/mentra/${chapter.image}-1440.webp`}
                srcSet={`/work/mentra/${chapter.image}-720.webp 720w, /work/mentra/${chapter.image}-1440.webp 1440w`}
                sizes="(max-width: 960px) 92vw, 700px"
                width="1440"
                height="1050"
                alt={chapter.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{chapter.caption}</figcaption>
            </figure>
          </article>
        ))}
      </section>

      <section className="case-section case-wrap case-split">
        <div className="case-head reveal">
          <p className="case-label">How it was built / 06</p>
          <h2>Product decisions carried through to production architecture.</h2>
          <p>
            Mentra is not a visual prototype. I worked across the interface, application logic, data model,
            secure AI boundary and web launch. The architecture keeps model credentials out of the client,
            protects private learning files and gives each AI workflow a typed, testable contract.
          </p>
        </div>
        <ol className="case-list reveal">
          {architecture.map(([title, detail], index) => (
            <li key={title}>
              <span className="num">{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="case-section case-wrap">
        <div className="case-head reveal">
          <p className="case-label">Languages & tools / 07</p>
          <h2>The stack behind Mentra.</h2>
        </div>
        <ToolBadges tools={technologies} />
      </section>

      <section className="case-section case-wrap">
        <div className="case-head reveal">
          <p className="case-label">Important implementation choices / 08</p>
          <h2>The details that make it trustworthy.</h2>
        </div>
        <div className="case-cards">
          {notes.map((note, index) => (
            <article className="reveal" key={note.title}>
              <span className="num">{String(index + 1).padStart(2, "0")}</span>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section case-wrap">
        <p className="case-label">What this project demonstrates / 09</p>
        <blockquote className="case-quote reveal">
          AI becomes useful when product structure, trusted context and the next human action work together.
        </blockquote>
        <p className="case-after">
          Mentra demonstrates how I combine product design and software development: defining a focused
          learner journey, translating it into a reusable interface system, building secure data and AI
          flows, and communicating the finished product through a responsive launch experience.
        </p>
      </section>

      <section className="case-band">
        <div className="case-wrap">
          <p className="case-label">See the product</p>
          <h2>Explore Mentra in action.</h2>
          <p>Visit the product website to see the complete feature story and access the current Android build.</p>
          <a className="case-btn" href={MENTRA_URL} target="_blank" rel="noreferrer">
            Visit Mentra <ArrowUpRight />
          </a>
        </div>
      </section>

      <CaseFooter note="thanks for reading this far" />
    </main>
  );
}
