import type { Metadata } from "next";
import "./golden-bills.css";

const SITE_URL = "https://kenechukwuokoye.vercel.app";

export const metadata: Metadata = {
  title: "Golden Bills Fintech Case Study | Kenechukwu Okoye-Chine",
  description:
    "A product design case study for Golden Bills, a web platform for wallet funding, utility payments, airtime, data and transaction management.",
  alternates: { canonical: "/work/golden-bills" },
  openGraph: {
    title: "Golden Bills Fintech Case Study | Kenechukwu Okoye-Chine",
    description:
      "How Golden Bills turns multiple everyday payment services into one clear and dependable dashboard experience.",
    url: `${SITE_URL}/work/golden-bills`,
    type: "article",
    images: [{ url: "/work/golden-bills/dashboard.webp", alt: "Golden Bills fintech dashboard" }],
  },
};

const serviceScreens = [
  {
    title: "Airtime",
    image: "/work/golden-bills/airtime.webp",
    text: "A focused purchase path for amount, phone number and network selection.",
  },
  {
    title: "Mobile data",
    image: "/work/golden-bills/data.webp",
    text: "The same familiar pattern keeps repeat payments quick and predictable.",
  },
  {
    title: "Electricity",
    image: "/work/golden-bills/electricity.webp",
    text: "Provider and meter verification surface identity and balance errors before payment.",
  },
  {
    title: "Cable TV",
    image: "/work/golden-bills/cable-tv.webp",
    text: "Provider, plan and smart-card details are sequenced in a simple subscription flow.",
  },
];

const accountScreens = [
  {
    title: "Profile",
    image: "/work/golden-bills/profile.webp",
    text: "A lightweight account view keeps identity and access status immediately visible.",
  },
  {
    title: "Support",
    image: "/work/golden-bills/contact.webp",
    text: "Contact channels are gathered into one uncluttered support destination.",
  },
  {
    title: "Session handoff",
    image: "/work/golden-bills/login.webp",
    text: "User and administrator entry points remain distinct when a session ends.",
  },
];

const toolkit = [
  ["Product structure", "Dashboard architecture, service grouping and end-to-end payment flows"],
  ["Interface design", "Figma, reusable components, form states and high-fidelity screens"],
  ["Fintech feedback", "Balance visibility, meter validation, errors and transaction statuses"],
  ["Interaction logic", "Consistent inputs, provider selection and progressive payment actions"],
  ["System thinking", "Shared navigation, cards, tables, form patterns and visual tokens"],
  ["Handoff", "Responsive specifications, prototypes and implementation-ready states"],
];

export default function GoldenBillsCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Golden Bills Fintech Product Design",
    creator: { "@type": "Person", name: "Kenechukwu Okoye-Chine", url: SITE_URL },
    url: `${SITE_URL}/work/golden-bills`,
    description:
      "A web-platform product design for wallet funding, bill payments, mobile services and transaction management.",
  };

  return (
    <main className="golden-case">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <nav className="golden-nav" aria-label="Case study navigation">
        <a className="golden-mark" href="/" aria-label="Back to Kenechukwu Okoye portfolio">KO<span>®</span></a>
        <span>Golden Bills / Case study</span>
        <a className="golden-back" href="/#work">Back to work ↗</a>
      </nav>

      <header className="golden-hero">
        <div className="golden-hero-copy">
          <p className="golden-eyebrow">Fintech · Product design · Web application · 2025</p>
          <h1>Everyday payments, organised into one <em>dependable system.</em></h1>
          <p className="golden-lead">
            Golden Bills brings wallet funding, utility payments, mobile services and transaction
            history into one focused dashboard—designed to make routine financial actions feel clear,
            consistent and easy to verify.
          </p>
        </div>
        <div className="golden-dashboard">
          <img
            src="/work/golden-bills/dashboard.webp"
            alt="Golden Bills account dashboard"
            width="1200"
            height="853"
            decoding="async"
            fetchPriority="high"
          />
          <div><span>Primary screen</span><strong>Account dashboard</strong></div>
        </div>
      </header>

      <section className="golden-summary">
        <div><span>Role</span><strong>Product designer</strong></div>
        <div><span>Focus</span><strong>Payment clarity + consistency</strong></div>
        <div><span>Platform</span><strong>Responsive web application</strong></div>
        <div><span>Scope</span><strong>Dashboard to account support</strong></div>
      </section>

      <section className="golden-problem">
        <p className="golden-eyebrow">The challenge / 01</p>
        <div>
          <h2>Different services. One mental model.</h2>
          <p>
            Funding a wallet, buying airtime and paying an electricity bill require different data,
            but users should not have to relearn the product every time. The core challenge was to
            create a shared structure that could handle each service’s requirements while preserving
            confidence, speed and clear feedback.
          </p>
        </div>
      </section>

      <section className="golden-principles" aria-label="Golden Bills product principles">
        <article><span>01</span><h3>Balance stays in context</h3><p>Funds and transaction access remain visible wherever a payment begins.</p></article>
        <article><span>02</span><h3>Patterns repeat on purpose</h3><p>Shared forms and actions reduce the learning cost between services.</p></article>
        <article><span>03</span><h3>Status is never decoration</h3><p>Success, pending, failure and validation states help users know what happened.</p></article>
      </section>

      <section className="wallet-story">
        <div className="wallet-copy">
          <p className="golden-eyebrow">The foundation / 02</p>
          <h2>Start with the wallet. Keep the next action obvious.</h2>
          <p>
            The funding flow carries the dashboard’s balance context into a single-purpose amount
            form. Requirements are explained beside the input, while the payment action stays visually
            separate until the user is ready to continue.
          </p>
          <small>Wallet balance · Amount input · Payment handoff</small>
        </div>
        <figure>
          <img src="/work/golden-bills/add-money.webp" alt="Golden Bills add money flow" width="1200" height="853" loading="lazy" decoding="async" />
        </figure>
      </section>

      <section className="service-story">
        <div className="golden-section-heading">
          <p className="golden-eyebrow">Service system / 03</p>
          <h2>Four payment types, designed as one family.</h2>
          <p>
            Each flow keeps the same shell—navigation, balance, form container and primary action—then
            introduces only the fields needed for that service. Familiarity does the heavy lifting.
          </p>
        </div>
        <div className="service-grid">
          {serviceScreens.map((screen, index) => (
            <article key={screen.title}>
              <div className="service-copy"><span>0{index + 1}</span><h3>{screen.title}</h3><p>{screen.text}</p></div>
              <figure><img src={screen.image} alt={`Golden Bills ${screen.title} payment screen`} width="1200" height="853" loading="lazy" decoding="async" /></figure>
            </article>
          ))}
        </div>
      </section>

      <section className="transaction-story">
        <div className="transaction-copy">
          <p className="golden-eyebrow">Feedback and traceability / 04</p>
          <h2>Every payment leaves a readable trail.</h2>
          <p>
            Transaction history turns system activity into something users can verify. Names, dates,
            amounts and colour-supported status labels create a fast scanning pattern without relying
            on colour alone.
          </p>
          <div className="status-key" aria-label="Transaction statuses"><span>Successful</span><span>Pending</span><span>Failed</span></div>
        </div>
        <figure>
          <img src="/work/golden-bills/transactions.webp" alt="Golden Bills transaction history" width="1200" height="853" loading="lazy" decoding="async" />
        </figure>
      </section>

      <section className="account-story">
        <div className="golden-section-heading">
          <p className="golden-eyebrow">Beyond payment / 05</p>
          <h2>Account, support and access complete the experience.</h2>
        </div>
        <div className="account-grid">
          {accountScreens.map((screen, index) => (
            <article key={screen.title}>
              <span>0{index + 1}</span>
              <h3>{screen.title}</h3>
              <p>{screen.text}</p>
              <figure><img src={screen.image} alt={`Golden Bills ${screen.title} screen`} width="1200" height="853" loading="lazy" decoding="async" /></figure>
            </article>
          ))}
        </div>
      </section>

      <section className="golden-build">
        <div className="golden-build-intro">
          <p className="golden-eyebrow">Design system and delivery / 06</p>
          <h2>Designed as a system, not a collection of pages.</h2>
          <p>
            Golden Bills uses shared rules for navigation, balance cards, form containers, actions and
            feedback. That consistency makes the experience easier for users and gives implementation
            a clearer, more scalable foundation.
          </p>
        </div>
        <div className="golden-toolkit">
          {toolkit.map(([title, detail], index) => (
            <div key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{detail}</p></div>
          ))}
        </div>
      </section>

      <section className="golden-outcome">
        <p className="golden-eyebrow">What the project demonstrates / 07</p>
        <blockquote>Financial products feel simpler when the interface makes every requirement, action and outcome visible.</blockquote>
        <p>
          Golden Bills demonstrates my ability to turn several connected services into one coherent
          product language. The work balances visual identity with practical fintech needs: validation,
          transaction feedback, repeatable interaction patterns and a dashboard that keeps the user oriented.
        </p>
      </section>

      <footer className="golden-footer">
        <p>Explore more work</p>
        <a href="/#work">Return to selected projects ↗</a>
        <a href="mailto:keneochine@gmail.com">keneochine@gmail.com</a>
      </footer>
    </main>
  );
}
