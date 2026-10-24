import type { Metadata } from "next";
import HomeMotion from "../../HomeMotion";
import { ArrowDown } from "../../Icons";
import { CaseFooter, CaseNav, ToolBadges } from "../CaseParts";
import "../case.css";

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

const principles = [
  { title: "Balance stays in context", text: "Funds and transaction access remain visible wherever a payment begins." },
  { title: "Patterns repeat on purpose", text: "Shared forms and actions reduce the learning cost between services." },
  { title: "Status is never decoration", text: "Success, pending, failure and validation states help users know what happened." },
];

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
    <main className="case case-golden">
      <HomeMotion />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <CaseNav label="Golden Bills / Case study" />

      <header className="case-hero case-wrap">
        <p className="case-label">Fintech · Product design · Web application · 2025</p>
        <h1>Everyday payments, organised into one <em>dependable system.</em></h1>
        <p className="case-lead">
          Golden Bills brings wallet funding, utility payments, mobile services and transaction
          history into one focused dashboard, designed to make routine financial actions feel clear,
          consistent and easy to verify.
        </p>
        <div className="case-actions">
          <a className="case-btn case-btn-accent" href="#challenge">Read the case study <ArrowDown /></a>
        </div>

        <figure className="case-shot">
          <img
            src="/work/golden-bills/dashboard.webp"
            alt="Golden Bills account dashboard"
            width="1200"
            height="853"
            decoding="async"
            fetchPriority="high"
          />
          <figcaption><span>Primary screen</span>Account dashboard</figcaption>
          <span className="hand case-shot-note">fintech, but friendly</span>
        </figure>

        <div className="case-facts">
          <div><span>Role</span><strong>Product designer</strong></div>
          <div><span>Focus</span><strong>Payment clarity + consistency</strong></div>
          <div><span>Platform</span><strong>Responsive web application</strong></div>
          <div><span>Scope</span><strong>Dashboard to account support</strong></div>
        </div>
      </header>

      <section className="case-section case-wrap case-split" id="challenge">
        <p className="case-label">The challenge / 01</p>
        <div className="case-body reveal">
          <h2>Different services. One mental model.</h2>
          <p>
            Funding a wallet, buying airtime and paying an electricity bill require different data,
            but users should not have to relearn the product every time. The core challenge was to
            create a shared structure that could handle each service’s requirements while preserving
            confidence, speed and clear feedback.
          </p>
        </div>
      </section>

      <section className="case-section case-wrap" aria-label="Golden Bills product principles">
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

      <section className="case-section case-wrap">
        <article className="case-chapter">
          <div className="reveal">
            <p className="case-label">The foundation / 02</p>
            <h2>Start with the wallet. Keep the next action obvious.</h2>
            <p>
              The funding flow carries the dashboard’s balance context into a single-purpose amount
              form. Requirements are explained beside the input, while the payment action stays visually
              separate until the user is ready to continue.
            </p>
            <ul className="case-tags">
              <li>Wallet balance</li>
              <li>Amount input</li>
              <li>Payment handoff</li>
            </ul>
          </div>
          <figure className="case-shot reveal">
            <img src="/work/golden-bills/add-money.webp" alt="Golden Bills add money flow" width="1200" height="853" loading="lazy" decoding="async" />
          </figure>
        </article>
      </section>

      <section className="case-section case-wrap">
        <div className="case-head reveal">
          <p className="case-label">Service system / 03</p>
          <h2>Four payment types, designed as one family.</h2>
          <p>
            Each flow keeps the same shell (navigation, balance, form container and primary action), then
            introduces only the fields needed for that service. Familiarity does the heavy lifting.
          </p>
        </div>
        <div className="case-screens">
          {serviceScreens.map((screen, index) => (
            <article className="reveal" key={screen.title}>
              <div className="case-screen-copy">
                <span className="num">0{index + 1}</span>
                <h3>{screen.title}</h3>
                <p>{screen.text}</p>
              </div>
              <figure className="case-shot">
                <img src={screen.image} alt={`Golden Bills ${screen.title} payment screen`} width="1200" height="853" loading="lazy" decoding="async" />
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section case-wrap">
        <article className="case-chapter reverse">
          <div className="reveal">
            <p className="case-label">Feedback and traceability / 04</p>
            <h2>Every payment leaves a readable trail.</h2>
            <p>
              Transaction history turns system activity into something users can verify. Names, dates,
              amounts and colour-supported status labels create a fast scanning pattern without relying
              on colour alone.
            </p>
            <ul className="case-status" aria-label="Transaction statuses">
              <li style={{ ["--dot" as string]: "#3fae5a" }}>Successful</li>
              <li style={{ ["--dot" as string]: "#f1ad27" }}>Pending</li>
              <li style={{ ["--dot" as string]: "#e5484d" }}>Failed</li>
            </ul>
          </div>
          <figure className="case-shot reveal">
            <img src="/work/golden-bills/transactions.webp" alt="Golden Bills transaction history" width="1200" height="853" loading="lazy" decoding="async" />
          </figure>
        </article>
      </section>

      <section className="case-section case-wrap">
        <div className="case-head reveal">
          <p className="case-label">Beyond payment / 05</p>
          <h2>Account, support and access complete the experience.</h2>
        </div>
        <div className="case-screens three">
          {accountScreens.map((screen, index) => (
            <article className="reveal" key={screen.title}>
              <div className="case-screen-copy">
                <span className="num">0{index + 1}</span>
                <h3>{screen.title}</h3>
                <p>{screen.text}</p>
              </div>
              <figure className="case-shot">
                <img src={screen.image} alt={`Golden Bills ${screen.title} screen`} width="1200" height="853" loading="lazy" decoding="async" />
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section case-wrap case-split">
        <div className="case-head reveal">
          <p className="case-label">Design system and delivery / 06</p>
          <h2>Designed as a system, not a collection of pages.</h2>
          <p>
            Golden Bills uses shared rules for navigation, balance cards, form containers, actions and
            feedback. That consistency makes the experience easier for users and gives implementation
            a clearer, more scalable foundation.
          </p>
          <ToolBadges tools={["Figma"]} />
        </div>
        <ol className="case-list reveal">
          {toolkit.map(([title, detail], index) => (
            <li key={title}>
              <span className="num">0{index + 1}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="case-section case-wrap">
        <p className="case-label">What the project demonstrates / 07</p>
        <blockquote className="case-quote reveal">
          Financial products feel simpler when the interface makes every requirement, action and outcome visible.
        </blockquote>
        <p className="case-after">
          Golden Bills demonstrates my ability to turn several connected services into one coherent
          product language. The work balances visual identity with practical fintech needs: validation,
          transaction feedback, repeatable interaction patterns and a dashboard that keeps the user oriented.
        </p>
      </section>

      <CaseFooter note="every naira accounted for" />
    </main>
  );
}
