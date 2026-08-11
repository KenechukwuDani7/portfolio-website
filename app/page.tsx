import MotionLayer from "./MotionLayer";

const projects = [
  {
    title: "Mentra",
    index: "01",
    type: "AI Study Assistant",
    year: "2026",
    image: "/work/mentra/home.jpg",
    href: "/work/mentra",
    className: "project-mentra",
    description:
      "An accessible AI learning companion that turns uploaded materials into clear answers, summaries, flashcards and practice tests.",
    challenge:
      "Students often have the material but not the structure, time or guidance needed to study it effectively.",
    contribution:
      "I shaped the product architecture, core learning loops and interface direction, connecting AI capability to familiar study behaviours.",
    intersection: "Product design × AI integration",
    tags: ["Product strategy", "UX/UI", "AI product"],
  },
  {
    title: "OSUKO Construction",
    index: "02",
    type: "Construction Company Website",
    year: "2026",
    image: "/work/osuko/hero-desktop.webp",
    href: "/work/osuko",
    className: "project-wide project-osuko",
    description:
      "A confident, responsive company website that turns OSUKO’s standards, services and project process into a clear path from first impression to enquiry.",
    challenge:
      "A growing construction company needed a credible digital presence that could communicate capability and care without feeling like a generic contractor template.",
    contribution:
      "I shaped the information architecture, visual direction, responsive experience and front-end delivery, connecting brand storytelling to a useful project enquiry flow.",
    intersection: "Brand expression × Web development",
    tags: ["Web design", "Next.js", "Responsive UX"],
  },
  {
    title: "Golden Bills",
    index: "03",
    type: "Bills & Payments Platform",
    year: "2025",
    image: "/work/golden-bills/dashboard.webp",
    href: "/work/golden-bills",
    className: "project-wide project-gold",
    description:
      "A focused fintech dashboard for funding a wallet, paying utilities, buying airtime and data, and tracking every transaction in one place.",
    challenge:
      "Several payment services, form requirements and transaction states needed to feel like one predictable and trustworthy system.",
    contribution:
      "I designed the dashboard hierarchy, reusable service patterns, payment forms, status feedback and account experience.",
    intersection: "Fintech UX × Interface systems",
    tags: ["Product design", "Fintech", "Dashboard"],
  },
  {
    title: "Chow Now",
    index: "04",
    type: "Food Ordering App",
    year: "2025",
    image: "/work/chow-now.png",
    href: null,
    className: "project-wide project-chow",
    description:
      "A complete food-ordering journey shaped through research, personas, information architecture, high-fidelity screens and prototyping.",
    challenge:
      "Help hungry users move from discovery to checkout quickly, without making choice and navigation feel overwhelming.",
    contribution:
      "I worked across research, personas, flows, mobile interface design and interactive prototyping to create a coherent end-to-end journey.",
    intersection: "Research × Mobile product design",
    tags: ["User research", "Mobile UX", "Prototype"],
  },
];

const tools = [
  { name: "Figma", logo: "/tools/brands/figma.svg", use: "Flows, wireframes, UI systems & prototypes" },
  { name: "ChatGPT", logo: "/tools/chatgpt.png", use: "Research synthesis, ideation & AI workflows" },
  { name: "Claude", logo: "/tools/brands/claude.svg", use: "Product thinking, writing & code collaboration" },
  { name: "Canva", logo: "/tools/brands/canva.svg", use: "Fast visual communication & presentations" },
  { name: "VS Code", logo: "/tools/brands/vscode.svg", use: "Front-end development, testing & debugging" },
  { name: "GitHub", logo: "/tools/brands/github.svg", use: "Version control & product collaboration" },
];

const technologies = [
  { name: "HTML5", logo: "/tools/brands/html5.svg", use: "Semantic structure" },
  { name: "CSS", logo: "/tools/brands/css.svg", use: "Responsive visual systems" },
  { name: "TypeScript", logo: "/tools/brands/typescript.svg", use: "Typed product code" },
  { name: "React", logo: "/tools/brands/react.svg", use: "Component interfaces" },
  { name: "Expo", logo: "/tools/brands/expo.svg", use: "Cross-platform mobile apps" },
  { name: "Next.js", logo: "/tools/brands/nextjs.svg", use: "Production web applications" },
  { name: "Vercel", logo: "/tools/brands/vercel.svg", use: "Deployment & analytics" },
];

const capabilities = [
  {
    number: "01",
    title: "Product design",
    text: "I turn product goals and user needs into flows, wireframes, responsive interfaces, prototypes and design systems.",
  },
  {
    number: "02",
    title: "Software development",
    text: "My computer science background helps me design with implementation in mind, build interfaces and communicate clearly with engineers.",
  },
  {
    number: "03",
    title: "AI-enabled products",
    text: "I explore where AI genuinely reduces friction, then shape the prompts, interactions, feedback and safeguards around the capability.",
  },
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

export default function Home() {
  return (
    <main>
      <MotionLayer />
      <div className="noise" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />

      <nav className="nav shell" aria-label="Main navigation">
        <a href="#top" className="monogram magnetic" aria-label="Kenechukwu Okoye home">
          KO<span>®</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability magnetic" href="mailto:keneochine@gmail.com">
          <span />
          Available for work
        </a>
      </nav>

      <a className="contact-dock magnetic" href="mailto:keneochine@gmail.com">
        <span className="contact-dock-label">Email me</span>
        <strong>keneochine@gmail.com</strong>
        <i aria-hidden="true">↗</i>
      </a>

      <header className="hero shell" id="top">
        <div className="hero-kicker reveal">
          <span>Product designer</span>
          <span>Software developer</span>
          <span>Port Harcourt, Nigeria</span>
        </div>
        <h1 className="hero-title" aria-label="Kenechukwu Okoye">
          <span className="hero-name-row" data-speed="0.04">
            KENECHUKWU
          </span>
          <span className="hero-name-row outline" data-speed="-0.03">
            OKOYE
          </span>
        </h1>
        <div className="hero-statement reveal">
          <p>
            I design and build useful digital products at the intersection of
            <strong> product thinking, software and AI.</strong>
          </p>
          <a href="#work" className="round-link magnetic" aria-label="See selected work">
            <span>Explore work</span>
            <b aria-hidden="true">↘</b>
          </a>
        </div>
        <div className="hero-meta reveal">
          <span>BSc Computer Science</span>
          <span>Designing for clarity, access and real-world use</span>
          <span>Scroll to explore ↓</span>
        </div>
        <div className="orb orb-one" data-parallax="0.08" aria-hidden="true" />
        <div className="orb orb-two" data-parallax="-0.05" aria-hidden="true" />
      </header>

      <section className="marquee" aria-label="Areas of expertise">
        <div>
          Product Design <i>✦</i> User Experience <i>✦</i> AI Integration{" "}
          <i>✦</i> Creative Development <i>✦</i> Prototyping <i>✦</i>
          Design Systems <i>✦</i>
        </div>
      </section>

      <section className="intro shell" id="expertise">
        <p className="eyebrow reveal">What I bring / 01</p>
        <div className="intro-main">
          <h2 className="reveal">
            Not just screens.
            <br />
            I connect <em>the system.</em>
          </h2>
          <p className="intro-copy reveal">
            I understand the full conversation around a digital product: what
            the user needs, what the interface should communicate, how AI can
            help, and what developers need to make it real.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability reveal tilt-card" key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading reveal">
          <p className="eyebrow">Selected work / 2025—26</p>
          <h2>
            Products shaped from
            <br />
            idea to <em>interface.</em>
          </h2>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project reveal" key={project.title}>
              <div className={`project-visual tilt-card ${project.className}`}>
                <div className="project-number">{project.index}</div>
                <img
                  src={project.image}
                  alt={`${project.title} interface design`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="glass-label">
                  <span>{project.type}</span>
                  <b>{project.year}</b>
                </div>
              </div>
              <div className="project-info">
                <div>
                  <p className="eyebrow">{project.intersection}</p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.href ? (
                  <a className="project-case-link magnetic" href={project.href}>
                    View case study <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
              <div className="project-detail">
                <div>
                  <span>Challenge</span>
                  <p>{project.challenge}</p>
                </div>
                <div>
                  <span>My contribution</span>
                  <p>{project.contribution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="toolbox">
        <div className="shell">
          <div className="section-heading reveal">
            <p className="eyebrow">Tools I use / 02</p>
            <h2>
              A flexible toolkit for
              <br />
              <em>thinking and making.</em>
            </h2>
          </div>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <article className="tool-card reveal tilt-card" key={tool.name}>
                <span className="tool-index">0{index + 1}</span>
                <div className="tool-mark">
                  <img src={tool.logo} alt={`${tool.name} logo`} loading="lazy" />
                </div>
                <h3>{tool.name}</h3>
                <p>{tool.use}</p>
              </article>
            ))}
          </div>
          <div className="technology-stack reveal">
            <div className="technology-heading">
              <div>
                <p className="eyebrow">Build & delivery stack</p>
                <h3>Technologies I use to make the work real.</h3>
              </div>
              <p>
                From semantic web foundations to cross-platform mobile apps,
                component systems and production deployment.
              </p>
            </div>
            <div className="technology-grid">
              {technologies.map((technology, index) => (
                <article className="technology-card" key={technology.name}>
                  <span>0{index + 1}</span>
                  <div className="technology-mark">
                    <img src={technology.logo} alt={`${technology.name} logo`} loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <h4>{technology.name}</h4>
                    <p>{technology.use}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="tool-marquee" aria-hidden="true">
          <span>FIGMA — CHATGPT — CLAUDE — REACT — EXPO — TYPESCRIPT — NEXT.JS — VERCEL — </span>
          <span>FIGMA — CHATGPT — CLAUDE — REACT — EXPO — TYPESCRIPT — NEXT.JS — VERCEL — </span>
        </div>
      </section>

      <section className="process shell">
        <div className="process-sticky">
          <p className="eyebrow reveal">How I work / 03</p>
          <h2 className="reveal">
            One process.
            <br />
            Three <em>lenses.</em>
          </h2>
          <p className="reveal">
            I move between user needs, interface decisions and technical
            constraints throughout the project—not as disconnected phases.
          </p>
          <div className="process-orbit" aria-hidden="true">
            <div className="orbit-ring ring-a" />
            <div className="orbit-ring ring-b" />
            <div className="orbit-core">KO</div>
            <span className="satellite satellite-a">DESIGN</span>
            <span className="satellite satellite-b">CODE</span>
            <span className="satellite satellite-c">AI</span>
          </div>
        </div>
        <div className="process-steps">
          <article className="reveal">
            <span>Discover</span>
            <h3>Understand before drawing.</h3>
            <p>
              I clarify the product goal, users, context and constraints, then
              organise what I learn into a useful problem definition.
            </p>
          </article>
          <article className="reveal">
            <span>Structure</span>
            <h3>Make complexity navigable.</h3>
            <p>
              User flows, information architecture and low-fidelity wireframes
              help me test the logic before visual polish gets in the way.
            </p>
          </article>
          <article className="reveal">
            <span>Design & prototype</span>
            <h3>Give the idea behaviour.</h3>
            <p>
              I build responsive interface systems and interactive prototypes
              that make decisions tangible for users and collaborators.
            </p>
          </article>
          <article className="reveal">
            <span>Build & learn</span>
            <h3>Stay close to implementation.</h3>
            <p>
              My development knowledge helps me test feasibility, debug issues
              and iterate with a clearer understanding of the final product.
            </p>
          </article>
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="portrait-wrap reveal" data-parallax="0.035">
          <img src="/portrait.jpg" alt="Kenechukwu Okoye" />
          <div className="portrait-note glass-card">
            <span>Currently</span>
            <strong>Designing at Binary Brawlers</strong>
          </div>
          <div className="portrait-stamp" aria-hidden="true">DESIGN × CODE × AI</div>
        </div>

        <div className="about-copy">
          <p className="eyebrow reveal">About me / 04</p>
          <h2 className="reveal">
            Curious by nature,
            <br />
            practical by <em>training.</em>
          </h2>
          <p className="lead reveal">
            I’m a product designer with a BSc in Computer Science and a growing
            practice across digital product design, software and applied AI.
          </p>
          <p className="reveal">
            You may also find my work under my full name, Kenechukwu
            Okoye-Chine, or through my online identity, Koda the Great.
          </p>
          <p className="reveal">
            I care about user-centred experiences that balance function and
            aesthetics. I’m at my best collaborating on meaningful products,
            untangling complex problems and turning them into interfaces people
            can use without friction.
          </p>
          <div className="education-card glass-card reveal">
            <span>Education</span>
            <strong>BSc Computer Science</strong>
            <p>Nnamdi Azikiwe University · 2021—2024</p>
          </div>
          <div className="cert-card reveal">
            <span>Certification · Jul 2026</span>
            <strong>Product Design (UI/UX Design)</strong>
            <p>TS Academy — practical training in research, wireframing, interface design and prototyping.</p>
          </div>
          <div className="skill-list reveal">
            <span>UI/UX Design</span>
            <span>Wireframing</span>
            <span>Prototyping</span>
            <span>Design Systems</span>
            <span>AI API Integration</span>
            <span>Testing & Debugging</span>
            <span>Database Fundamentals</span>
            <span>Prompt Engineering</span>
          </div>
          <a className="text-link magnetic reveal" href="/Kenechukwu-Okoye-Resume.pdf" download>
            Download résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="experience shell">
        <div className="section-heading compact reveal">
          <p className="eyebrow">Experience / 05</p>
          <h2>
            Where I’ve worked
            <br />
            and <em>grown.</em>
          </h2>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="reveal" key={item.company}>
              <span className="timeline-index">0{index + 1}</span>
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <p className="timeline-detail">{item.detail}</p>
              <div className="timeline-meta">
                <span>{item.period}</span>
                <span>{item.place}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="principles shell">
        <div className="section-heading reveal">
          <p className="eyebrow">Working principles / 06</p>
          <h2>
            What guides
            <br />
            my <em>decisions.</em>
          </h2>
        </div>
        <div className="principle-list">
          <article className="reveal">
            <span>01</span>
            <h3>Clarity earns trust.</h3>
            <p>Good products explain themselves through hierarchy, language and predictable behaviour.</p>
          </article>
          <article className="reveal">
            <span>02</span>
            <h3>Technology needs a reason.</h3>
            <p>I use AI and software capability when they improve the experience—not just because they are available.</p>
          </article>
          <article className="reveal">
            <span>03</span>
            <h3>Design is collaborative.</h3>
            <p>The strongest outcomes come from sharing unfinished thinking, testing assumptions and learning together.</p>
          </article>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-inner">
          <p className="eyebrow reveal">Have a project in mind?</p>
          <h2 className="reveal">
            Let’s make something
            <br />
            <em>worth using.</em>
          </h2>
          <a className="email-link magnetic reveal" href="mailto:keneochine@gmail.com">
            <span className="email-intro">
              <small>Start a conversation</small>
              <strong>keneochine@gmail.com</strong>
            </span>
            <span className="email-action" aria-hidden="true">↗</span>
          </a>
          <div className="social-links reveal" aria-label="Social profiles">
            <a
              href="https://www.linkedin.com/in/kenechukwu-okoye-chine-0a3918413/"
              target="_blank"
              rel="noreferrer"
              aria-label="Kenechukwu Okoye on LinkedIn"
            >
              <span className="social-logo linkedin-logo" aria-hidden="true">in</span>
              <span>
                <small>Professional profile</small>
                <strong>LinkedIn</strong>
              </span>
              <i aria-hidden="true">↗</i>
            </a>
            <a
              href="https://x.com/koda_thegreat7"
              target="_blank"
              rel="noreferrer"
              aria-label="Kenechukwu Okoye on X"
            >
              <span className="social-logo x-logo" aria-hidden="true">X</span>
              <span>
                <small>@koda_thegreat7</small>
                <strong>Follow on X</strong>
              </span>
              <i aria-hidden="true">↗</i>
            </a>
            <a
              href="https://github.com/KenechukwuDani7"
              target="_blank"
              rel="noreferrer"
              aria-label="Kenechukwu Okoye on GitHub"
            >
              <span className="social-logo github-logo" aria-hidden="true">
                <img src="/tools/brands/github.svg" alt="" />
              </span>
              <span>
                <small>Code & projects</small>
                <strong>GitHub</strong>
              </span>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Kenechukwu Okoye</p>
            <div>
              <a href="mailto:keneochine@gmail.com">Email</a>
              <a href="https://github.com/KenechukwuDani7" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://x.com/koda_thegreat7" target="_blank" rel="noreferrer">X / Twitter ↗</a>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
