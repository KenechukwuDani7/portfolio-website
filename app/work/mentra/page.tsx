import type { Metadata } from "next";
import "./mentra.css";

const SITE_URL = "https://kenechukwuokoye.vercel.app";

export const metadata: Metadata = {
  title: "Mentra AI Case Study | Kenechukwu Okoye-Chine",
  description:
    "A product design and mobile development case study for Mentra, an AI study companion that turns course materials into answers, practice and structured study plans.",
  alternates: { canonical: "/work/mentra" },
  openGraph: {
    title: "Mentra AI Case Study | Kenechukwu Okoye-Chine",
    description:
      "How Mentra brings AI tutoring, study materials, practice and planning into one focused mobile experience.",
    url: `${SITE_URL}/work/mentra`,
    type: "article",
    images: [{ url: "/work/mentra/home.jpg", alt: "Mentra AI mobile app home screen" }],
  },
};

const chapters = [
  {
    number: "01",
    kicker: "A tutor in the flow",
    title: "Ask, understand, keep moving.",
    text: "Ask Mentra gives students a calm place to work through an academic question without leaving the material they are studying. The conversational layer is intentionally direct: a clear status, focused responses and one persistent composer keep the next action obvious.",
    image: "/work/mentra/ai-tutor.png",
    alt: "Ask Mentra AI tutor conversation",
    note: "AI tutoring · Contextual answers · Attachment input",
  },
  {
    number: "02",
    kicker: "One source of truth",
    title: "Materials become a working library.",
    text: "Uploaded files are organised by subject and recency, turning scattered PDFs and notes into a study-ready collection. The library is more than storage: it is the starting point for generated explanations, flashcards and quizzes.",
    image: "/work/mentra/library.jpg",
    alt: "Mentra study material library",
    note: "File upload · Subject filters · Material management",
  },
  {
    number: "03",
    kicker: "Active recall",
    title: "Practice adapts to the task.",
    text: "Students can generate a 30-question quiz from their own files or solve a question from text, calculations or a photo. The screen separates the two jobs clearly, while practice history makes progress feel continuous instead of disposable.",
    image: "/work/mentra/practice.jpg",
    alt: "Mentra quiz and question-solving practice screen",
    note: "AI quizzes · Multimodal solver · Practice history",
  },
  {
    number: "04",
    kicker: "From intention to routine",
    title: "A plan that closes the loop.",
    text: "The planner connects learning content to time. Students can schedule study sessions, revision and exam reminders, scan the week at a glance and return to completed work—helping Mentra support the habit around studying, not only the moment of answering.",
    image: "/work/mentra/planner.jpg",
    alt: "Mentra study planner and reminder schedule",
    note: "Study planning · Local reminders · Weekly view",
  },
  {
    number: "05",
    kicker: "Personal by default",
    title: "The product follows the learner.",
    text: "Appearance, language, profile and privacy controls live in one legible settings model. Device-aware theming and a dedicated privacy area give students control without turning personalisation into another complicated task.",
    image: "/work/mentra/settings.jpg",
    alt: "Mentra settings, language and privacy controls",
    note: "Dark mode · Language · Privacy controls",
  },
];

const stack = [
  ["Product & interface", "Figma, component systems, responsive mobile prototyping"],
  ["Mobile build", "Expo / React Native with TypeScript"],
  ["Intelligence", "AI model API, prompt design and contextual response flows"],
  ["Inputs", "Document upload, file parsing and image-based questions"],
  ["Engagement", "Study schedules and local notification reminders"],
  ["Delivery", "VS Code, GitHub and iterative device testing"],
];

export default function MentraCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mentra AI",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Mobile",
    creator: {
      "@type": "Person",
      name: "Kenechukwu Okoye-Chine",
      url: SITE_URL,
    },
    description:
      "An AI study companion for tutoring, material organisation, active practice and study planning.",
    url: `${SITE_URL}/work/mentra`,
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
        <a className="back-link" href="/#work">Back to work ↗</a>
      </nav>

      <header className="mentra-hero">
        <div className="hero-copy">
          <p className="case-eyebrow">AI learning · Product design + mobile development · 2026</p>
          <h1>A study system that turns course material into <em>momentum.</em></h1>
          <p className="hero-lead">
            Mentra brings an AI tutor, personal study library, active practice and planning into one
            focused mobile experience—so students can move from “I have the material” to “I know what
            to do next.”
          </p>
          <div className="hero-facts" aria-label="Project overview">
            <div><span>Role</span><strong>Product design + development</strong></div>
            <div><span>Focus</span><strong>AI-assisted learning</strong></div>
            <div><span>Platform</span><strong>Mobile application</strong></div>
          </div>
        </div>
        <div className="hero-device">
          <div className="device-glow" aria-hidden="true" />
          <img src="/work/mentra/home.jpg" alt="Mentra AI home dashboard" />
          <span className="screen-label">Home / Learning dashboard</span>
        </div>
      </header>

      <section className="case-intro">
        <p className="case-eyebrow">The product idea / 01</p>
        <div>
          <h2>Studying is not one task. Mentra connects the whole loop.</h2>
          <p>
            Students often switch between files, chat tools, calendars and practice apps. That
            fragmentation makes it harder to begin and easier to lose context. I shaped Mentra as one
            continuous loop: bring in a material, understand it, practise it, then plan the next session.
          </p>
        </div>
      </section>

      <section className="principles" aria-label="Mentra product principles">
        <article><span>01</span><h3>Clarity first</h3><p>Every screen prioritises one primary action and keeps supporting choices close.</p></article>
        <article><span>02</span><h3>Context stays connected</h3><p>Materials feed the tutor and practice tools instead of living in a separate archive.</p></article>
        <article><span>03</span><h3>Progress needs a next step</h3><p>History, planning and reminders turn isolated AI answers into a repeatable learning habit.</p></article>
      </section>

      <section className="feature-story" aria-label="Mentra feature walkthrough">
        <div className="story-heading">
          <p className="case-eyebrow">Experience walkthrough / 02</p>
          <h2>Six screens. One connected learning rhythm.</h2>
        </div>
        {chapters.map((chapter, index) => (
          <article className={`story-row ${index % 2 ? "reverse" : ""}`} key={chapter.number}>
            <div className="story-copy">
              <span className="story-number">{chapter.number}</span>
              <p className="story-kicker">{chapter.kicker}</p>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
              <small>{chapter.note}</small>
            </div>
            <div className="story-screen">
              <img src={chapter.image} alt={chapter.alt} loading="lazy" />
            </div>
          </article>
        ))}
      </section>

      <section className="build-section">
        <div className="build-heading">
          <p className="case-eyebrow">How it was built / 03</p>
          <h2>Design decisions translated into a working mobile product.</h2>
          <p>
            My computer science background helped me work across interaction design and implementation.
            The stack supports a reusable mobile interface, AI-assisted study flows, flexible inputs and
            the reminders that keep learning active beyond a single session.
          </p>
        </div>
        <div className="stack-list">
          {stack.map(([title, detail], index) => (
            <div key={title}>
              <span>0{index + 1}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reflection">
        <p className="case-eyebrow">What this project demonstrates / 04</p>
        <blockquote>
          “The strongest AI experience is not the one with the most features. It is the one that makes
          the user’s next useful action feel obvious.”
        </blockquote>
        <p>
          Mentra demonstrates how I connect product structure, interaction design, AI capability and
          implementation thinking. The result is a learning system where each feature strengthens the
          next—from material upload to understanding, practice and a sustainable study routine.
        </p>
      </section>

      <footer className="mentra-footer">
        <p>Want to discuss this product?</p>
        <a href="mailto:keneochine@gmail.com">keneochine@gmail.com ↗</a>
        <a className="all-work" href="/#work">Return to all work</a>
      </footer>
    </main>
  );
}
