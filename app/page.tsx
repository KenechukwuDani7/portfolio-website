import HomeMotion from "./HomeMotion";
import { ArrowDown, ArrowUp, ArrowUpRight, Sparkle } from "./Icons";
import {
  BezierPen,
  Braces,
  Cursor,
  CurvedArrow,
  Flower,
  Magnifier,
  Pencil,
  ScallopClip,
  Squiggle,
  Wireframe,
} from "./Doodles";
import "./home.css";

const EMAIL = "keneochine@gmail.com";
const GITHUB = "https://github.com/KenechukwuDani7";

const projects = [
  {
    title: "Mentra",
    index: "01",
    type: "AI learning platform",
    year: "2026",
    image: "/work/mentra/website-cover-1440.webp",
    srcSet: "/work/mentra/website-cover-720.webp 720w, /work/mentra/website-cover-1440.webp 1440w",
    width: 1440,
    height: 1050,
    href: "/work/mentra",
    note: "live on the web + Android",
    description:
      "A Groq-powered learning platform that turns uploaded materials into grounded answers, summaries, flashcards, quizzes and focused study plans.",
    contribution:
      "I shaped the product architecture, interface system, secure data and AI workflows, mobile application and responsive launch experience.",
    tags: ["Product strategy", "Expo", "AI engineering"],
  },
  {
    title: "OSUKO Construction",
    index: "02",
    type: "Construction company website",
    year: "2026",
    image: "/work/osuko/hero-desktop.webp",
    srcSet: undefined,
    width: 1200,
    height: 833,
    href: "/work/osuko",
    note: null,
    description:
      "A confident, responsive company website that turns OSUKO’s standards, services and project process into a clear path from first impression to enquiry.",
    contribution:
      "I shaped the information architecture, visual direction, responsive experience and front-end delivery.",
    tags: ["Web design", "Next.js", "Responsive UX"],
  },
  {
    title: "Golden Bills",
    index: "03",
    type: "Bills & payments platform",
    year: "2025",
    image: "/work/golden-bills/dashboard.webp",
    srcSet: undefined,
    width: 1200,
    height: 853,
    href: "/work/golden-bills",
    note: null,
    description:
      "A focused fintech dashboard for funding a wallet, paying utilities, buying airtime and data, and tracking every transaction in one place.",
    contribution:
      "I designed the dashboard hierarchy, reusable service patterns, payment forms, status feedback and account experience.",
    tags: ["Product design", "Fintech", "Dashboard"],
  },
  {
    title: "Chow Now",
    index: "04",
    type: "Food ordering app",
    year: "2025",
    image: "/work/chow-now-1400.webp",
    srcSet: "/work/chow-now-800.webp 800w, /work/chow-now-1400.webp 1400w, /work/chow-now-2400.webp 2400w",
    width: 1400,
    height: 546,
    href: null,
    note: "research → personas → prototype",
    description:
      "A complete food-ordering journey shaped through research, personas, information architecture, high-fidelity screens and prototyping.",
    contribution:
      "I worked across research, personas, flows, mobile interface design and interactive prototyping.",
    tags: ["User research", "Mobile UX", "Prototype"],
  },
];

const steps = [
  {
    label: "Discover",
    title: "Understand before drawing.",
    text: "I clarify the product goal, the people, the context and the constraints, then turn what I learn into a problem worth solving.",
    Art: Magnifier,
  },
  {
    label: "Structure",
    title: "Make complexity navigable.",
    text: "User flows, information architecture and low-fidelity wireframes test the logic before visual polish gets in the way.",
    Art: Wireframe,
  },
  {
    label: "Design & prototype",
    title: "Give the idea behaviour.",
    text: "Responsive interface systems and interactive prototypes make decisions tangible for users and collaborators.",
    Art: BezierPen,
  },
  {
    label: "Build & ship",
    title: "Stay close to the code.",
    text: "I build what I design in React, React Native and Next.js, so feasibility is tested early and nothing gets lost in handoff.",
    Art: Braces,
  },
];

const designKit = [
  { name: "Figma", logo: "/tools/brands/figma.svg" },
  { name: "Canva", logo: "/tools/brands/canva.svg" },
  { name: "Claude", logo: "/tools/brands/claude.svg" },
  { name: "VS Code", logo: "/tools/brands/vscode.svg" },
  { name: "GitHub", logo: "/tools/brands/github.svg" },
];

const buildKit = [
  { name: "HTML5", logo: "/tools/brands/html5.svg" },
  { name: "CSS", logo: "/tools/brands/css.svg" },
  { name: "TypeScript", logo: "/tools/brands/typescript.svg" },
  { name: "React", logo: "/tools/brands/react.svg" },
  { name: "Expo", logo: "/tools/brands/expo.svg" },
  { name: "Next.js", logo: "/tools/brands/nextjs.svg" },
  { name: "Vercel", logo: "/tools/brands/vercel.svg" },
];

const experience = [
  {
    role: "Product Designer",
    company: "Binary Brawlers",
    period: "Jul 2026 — Present",
    place: "Lagos, Nigeria",
    detail:
      "Translating product ideas and user needs into flows, wireframes, responsive interfaces and interactive prototypes.",
  },
  {
    role: "Product Design / Developer Intern",
    company: "Larkwave Tech",
    period: "Nov 2025 — Feb 2026",
    place: "Lagos, Nigeria",
    detail:
      "Contributed to user-centred digital products while working across design thinking and technical delivery.",
  },
  {
    role: "Product Designer (UI/UX)",
    company: "Momentom",
    period: "Mar 2025 — Jun 2025",
    place: "Awka, Nigeria",
    detail:
      "Designed the experience and interface for an e-commerce platform connecting buyers and vendors.",
  },
];

const rules = [
  {
    title: "Clarity earns trust.",
    text: "Good products explain themselves through hierarchy, language and predictable behaviour.",
  },
  {
    title: "Technology needs a reason.",
    text: "I use AI and software capability when they improve the experience, not just because they are available.",
  },
  {
    title: "Design is collaborative.",
    text: "The strongest outcomes come from sharing unfinished thinking, testing assumptions and learning together.",
  },
];

const marquee = ["Product design", "Interfaces", "Design systems", "Prototyping", "React Native", "Next.js", "AI features"];

export default function Home() {
  return (
    <main className="home">
      <HomeMotion />
      <noscript>
        <style>{".stage{--open:1}"}</style>
      </noscript>
      <ScallopClip id="scallop" />

      <header className="topbar">
        <a href="#top" className="topbar-mark" aria-label="Kenechukwu Okoye, back to top">
          KO<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="topbar-cta" href={`mailto:${EMAIL}`}>
          Email me <ArrowUpRight />
        </a>
      </header>

      <section className="stage" id="top" aria-label="Introduction">
        <div className="stage-frame">
          <div className="hero">
            <p className="hero-kicker">
              <span>Product designer</span>
              <Sparkle />
              <span>Software developer</span>
              <Sparkle />
              <span>Port Harcourt, NG</span>
            </p>
            <h1 className="hero-title">
              <span>Kenechukwu</span>
              <span>Okoye</span>
            </h1>
            <div className="hero-line">
              <p>
                I design products, <br />
                then I <u>build them</u>.
              </p>
              <span className="hand hero-note">
                yes, both of them
                <CurvedArrow />
              </span>
            </div>
            <div className="hero-actions">
              <a className="button" href="#work">
                See the work <ArrowDown />
              </a>
              <a className="button button-ghost" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
            <Pencil className="float hero-pencil" />
            <Cursor className="float hero-cursor" />
            <Flower className="float spin hero-flower" />
            <Braces className="float hero-braces" />
            <Squiggle className="hero-squiggle" />
          </div>

          <div className="curtain" aria-hidden="true">
            <div className="curtain-side curtain-left"><div className="curtain-cloth" /></div>
            <div className="curtain-side curtain-right"><div className="curtain-cloth" /></div>
            <div className="ticket">
              <span className="ticket-top">Admit one</span>
              <strong>Kenechukwu Okoye</strong>
              <span className="ticket-sub">Designer who ships</span>
              <span className="ticket-hint">
                Scroll to open <ArrowDown />
              </span>
            </div>
          </div>
          <div className="valance" aria-hidden="true" />
        </div>
      </section>

      <div className="band" aria-hidden="true">
        <div className="band-track">
          {[0, 1].map((copy) => (
            <span key={copy}>
              {marquee.map((item) => (
                <span key={item}>
                  {item} <Sparkle />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="process shell" id="process">
        <div className="section-head reveal">
          <p className="label">How I work</p>
          <h2>From a rough sketch to a shipped product.</h2>
          <p>
            I move between user needs, interface decisions and technical constraints the whole way through,
            not as disconnected phases.
          </p>
        </div>
        <div className="process-track">
          <svg className="process-path" viewBox="0 0 1180 140" preserveAspectRatio="none" aria-hidden="true">
            <path
              data-draw
              pathLength={1}
              d="M0 70C15 35 25 20 41 20C160 20 220 100 342 100C460 100 520 20 643 20C760 20 820 100 944 100C1050 100 1120 70 1180 70"
            />
          </svg>
          <ol className="steps">
            {steps.map(({ label, title, text, Art }, index) => (
              <li className="step reveal" key={label}>
                <span className="step-number">{index + 1}</span>
                <Art className="step-art" />
                <p className="label">{label}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <p className="hand process-note">the code is never an afterthought</p>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-head reveal">
          <p className="label">Selected work · 2025 — 26</p>
          <h2>Things I’ve designed, and built.</h2>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project reveal" key={project.title}>
              <div className="project-frame">
                {project.href ? (
                  <a href={project.href} aria-label={`View ${project.title} case study`}>
                    <img
                      src={project.image}
                      srcSet={project.srcSet}
                      sizes="(max-width: 900px) 92vw, 640px"
                      width={project.width}
                      height={project.height}
                      alt={`${project.title} interface design`}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    srcSet={project.srcSet}
                    sizes="(max-width: 900px) 92vw, 640px"
                    width={project.width}
                    height={project.height}
                    alt={`${project.title} interface design`}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                {project.note ? <span className="hand project-note">{project.note}</span> : null}
              </div>
              <div className="project-copy">
                <p className="project-meta">
                  <span className="project-index">{project.index}</span>
                  {project.type} · {project.year}
                </p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-role">
                  <strong>My part:</strong> {project.contribution}
                </p>
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {project.href ? (
                  <a className="button" href={project.href}>
                    View case study <ArrowUpRight />
                  </a>
                ) : (
                  <span className="soon">Case study coming soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="portrait reveal">
          <div className="portrait-stamp">
            <img
              src="/portrait-1080.webp"
              srcSet="/portrait-640.webp 640w, /portrait-1080.webp 1080w"
              sizes="(max-width: 900px) 80vw, 460px"
              width="1080"
              height="1920"
              alt="Kenechukwu Okoye"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="sticker portrait-sticker">
            Currently designing at <strong>Binary Brawlers</strong>
          </p>
          <span className="hand portrait-note">that’s me</span>
        </div>
        <div className="about-copy">
          <p className="label reveal">About me</p>
          <h2 className="reveal">Curious by nature, practical by training.</h2>
          <p className="lead reveal">
            I’m a product designer with a B.Sc. in Computer Science, working across digital product design,
            software and applied AI.
          </p>
          <p className="reveal">
            I care about experiences that balance function and aesthetics. I’m at my best on meaningful
            products, untangling complex problems and turning them into interfaces people can use without
            friction. You may also find my work under my full name, Kenechukwu Okoye-Chine, or as Koda the
            Great.
          </p>
          <dl className="facts reveal">
            <div>
              <dt>Education</dt>
              <dd>B.Sc. Computer Science, Nnamdi Azikiwe University, 2021 — 2024</dd>
            </div>
            <div>
              <dt>Certification</dt>
              <dd>Product Design (UI/UX), TS Academy, Jul 2026</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Port Harcourt, Nigeria. Working remotely.</dd>
            </div>
          </dl>
          <a className="button reveal" href="/Kenechukwu-Okoye-Resume.pdf" download>
            Download résumé <ArrowDown />
          </a>
        </div>
      </section>

      <section className="experience shell">
        <div className="section-head reveal">
          <p className="label">Experience</p>
          <h2>Where I’ve worked and grown.</h2>
        </div>
        <ol className="timeline">
          {experience.map((item) => (
            <li className="reveal" key={item.company}>
              <p className="timeline-period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-company">
                  {item.company} · {item.place}
                </p>
              </div>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="kit shell">
        <div className="section-head reveal">
          <p className="label">Tools I use</p>
          <h2>The kit on my desk.</h2>
        </div>
        <div className="kit-rows">
          <div className="reveal">
            <p className="kit-title">Thinking &amp; designing</p>
            <ul className="kit-list">
              {designKit.map((tool) => (
                <li key={tool.name}>
                  <img src={tool.logo} alt="" width="28" height="28" loading="lazy" />
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <p className="kit-title">Building &amp; shipping</p>
            <ul className="kit-list">
              {buildKit.map((tool) => (
                <li key={tool.name}>
                  <img src={tool.logo} alt="" width="28" height="28" loading="lazy" />
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rules shell">
        <div className="section-head reveal">
          <p className="label">Working principles</p>
          <h2>House rules.</h2>
        </div>
        <ol className="rule-list">
          {rules.map((rule, index) => (
            <li className="reveal" key={rule.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{rule.title}</h3>
              <p>{rule.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="finale" id="contact">
        <div className="shell">
          <p className="label">Curtain call</p>
          <h2 className="reveal">
            Let’s make something <span>worth using.</span>
          </h2>
          <a className="finale-email reveal" href={`mailto:${EMAIL}`}>
            {EMAIL} <ArrowUpRight />
          </a>
          <div className="finale-links">
            <a href={GITHUB} target="_blank" rel="noreferrer">
              <img src="/tools/brands/github.svg" alt="" width="20" height="20" /> GitHub <ArrowUpRight />
            </a>
            <a href="/Kenechukwu-Okoye-Resume.pdf" download>
              Résumé <ArrowDown />
            </a>
            <a href="#top">
              Back to top <ArrowUp />
            </a>
          </div>
          <p className="finale-small">© 2026 Kenechukwu Okoye. Designed and built by me in Port Harcourt.</p>
        </div>
      </footer>
    </main>
  );
}
