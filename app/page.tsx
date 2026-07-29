const projects = [
  {
    title: "Mentra",
    index: "01",
    type: "AI Study Assistant",
    year: "2026",
    image: "/work/mentra.png",
    className: "project-mentra",
    description:
      "An accessible AI learning companion that turns study materials into clear answers, summaries, flashcards and practice tests.",
    tags: ["Product strategy", "UX/UI", "AI product"],
  },
  {
    title: "Sabian Pay",
    index: "02",
    type: "Digital Payments",
    year: "2025",
    image: "/work/sabian-pay.png",
    className: "project-wide",
    description:
      "A focused fintech experience for funding wallets, paying bills, buying airtime and keeping everyday transactions easy to understand.",
    tags: ["Product design", "Fintech", "Dashboard"],
  },
  {
    title: "Golden Bills",
    index: "03",
    type: "Digital Payments",
    year: "2025",
    image: "/work/golden-bills.png",
    className: "project-wide project-gold",
    description:
      "A warm visual direction for the same core payments system, designed to make routine digital services feel clear and approachable.",
    tags: ["Visual design", "UX/UI", "Web app"],
  },
  {
    title: "Chow Now",
    index: "04",
    type: "Food Ordering App",
    year: "2025",
    image: "/work/chow-now.png",
    className: "project-wide project-chow",
    description:
      "A complete food-ordering journey shaped through research, personas, information architecture, high-fidelity screens and prototyping.",
    tags: ["User research", "Mobile UX", "Prototype"],
  },
];

const experience = [
  {
    role: "Product Designer",
    company: "Binary Brawlers",
    period: "Jul 2026 — Present",
    place: "Lagos, Nigeria",
  },
  {
    role: "Product Design / Developer Intern",
    company: "Larkwave Tech",
    period: "Nov 2025 — Feb 2026",
    place: "Lagos, Nigeria",
  },
  {
    role: "Product Designer (UI/UX)",
    company: "Momentom",
    period: "Mar 2025 — Jun 2025",
    place: "Awka, Nigeria",
  },
];

export default function Home() {
  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <nav className="nav shell" aria-label="Main navigation">
        <a href="#top" className="monogram" aria-label="Kenechukwu Okoye home">
          KO<span>®</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="mailto:keneochine@gmail.com">
          <span />
          Available for work
        </a>
      </nav>

      <header className="hero shell" id="top">
        <div className="hero-kicker">
          <span>Product designer</span>
          <span>Software developer</span>
          <span>Based in Nigeria</span>
        </div>
        <h1>
          I design digital
          <br />
          products that feel
          <br />
          <em>clear &amp; human.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            I’m Kenechukwu — a product designer and developer creating useful,
            thoughtful experiences where strong systems meet simple interfaces.
          </p>
          <a href="#work" className="round-link" aria-label="See selected work">
            <span>Explore work</span>
            <b aria-hidden="true">↘</b>
          </a>
        </div>
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
      </header>

      <section className="marquee" aria-label="Areas of expertise">
        <div>
          Product Design <i>✦</i> User Experience <i>✦</i> Prototyping{" "}
          <i>✦</i> Creative Development <i>✦</i> Product Design <i>✦</i>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work / 2025—26</p>
          <h2>Products shaped from idea to interface.</h2>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`project-visual ${project.className}`}>
                <div className="project-number">{project.index}</div>
                <img
                  src={project.image}
                  alt={`${project.title} interface design`}
                  loading="lazy"
                />
                <div className="glass-label">
                  <span>{project.type}</span>
                  <b>{project.year}</b>
                </div>
              </div>
              <div className="project-info">
                <div>
                  <p className="eyebrow">{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="portrait-wrap">
          <img src="/portrait.jpg" alt="Kenechukwu Okoye" />
          <div className="portrait-note glass-card">
            <span>Currently</span>
            <strong>Designing at Binary Brawlers</strong>
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">A little about me</p>
          <h2>
            Design thinking,
            <br />
            backed by <em>code.</em>
          </h2>
          <p className="lead">
            My background in computer science helps me move comfortably between
            product thinking, visual design and technical reality.
          </p>
          <p>
            I care about user-centred experiences that balance function and
            aesthetics. I’m at my best collaborating on meaningful products,
            untangling complex problems and turning them into interfaces people
            can use without friction.
          </p>
          <div className="skill-list">
            <span>UI/UX Design</span>
            <span>Wireframing</span>
            <span>Prototyping</span>
            <span>Design Systems</span>
            <span>AI Integration</span>
            <span>Development</span>
          </div>
          <a className="text-link" href="/Kenechukwu-Okoye-Resume.pdf" download>
            Download résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="experience shell">
        <div className="section-heading compact">
          <p className="eyebrow">Experience</p>
          <h2>Where I’ve worked.</h2>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article key={item.company}>
              <span className="timeline-index">0{index + 1}</span>
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <div className="timeline-meta">
                <span>{item.period}</span>
                <span>{item.place}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-inner">
          <p className="eyebrow">Have a project in mind?</p>
          <h2>
            Let’s make something
            <br />
            <em>worth using.</em>
          </h2>
          <a className="email-link" href="mailto:keneochine@gmail.com">
            keneochine@gmail.com <span>↗</span>
          </a>
          <div className="footer-bottom">
            <p>© 2026 Kenechukwu Okoye</p>
            <div>
              <a
                href="https://linkedin.com/in/kenechukwu-daniel-0a3918413"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
