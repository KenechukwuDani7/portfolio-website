import { ArrowUpRight } from "../Icons";

const EMAIL = "keneochine@gmail.com";

// Brand logos keep their original colours. Tools without a logo show as text.
const logos: Record<string, string> = {
  Figma: "/tools/brands/figma.svg",
  Canva: "/tools/brands/canva.svg",
  Claude: "/tools/brands/claude.svg",
  "VS Code": "/tools/brands/vscode.svg",
  GitHub: "/tools/brands/github.svg",
  HTML5: "/tools/brands/html5.svg",
  CSS: "/tools/brands/css.svg",
  TypeScript: "/tools/brands/typescript.svg",
  React: "/tools/brands/react.svg",
  "React Native": "/tools/brands/react.svg",
  "React Native Web": "/tools/brands/react.svg",
  Expo: "/tools/brands/expo.svg",
  "Next.js": "/tools/brands/nextjs.svg",
  Vercel: "/tools/brands/vercel.svg",
  Supabase: "/tools/brands/supabase.svg",
  "Supabase Edge Functions": "/tools/brands/supabase.svg",
  PostgreSQL: "/tools/brands/postgresql.svg",
};

export function CaseNav({ label }: { label: string }) {
  return (
    <nav className="case-nav case-wrap" aria-label="Case study navigation">
      <a className="case-mark" href="/" aria-label="Back to Kenechukwu Okoye portfolio">
        KO<span>.</span>
      </a>
      <span className="case-nav-label">{label}</span>
      <a className="case-btn case-btn-small" href="/#work">
        All work <ArrowUpRight />
      </a>
    </nav>
  );
}

export function ToolBadges({ tools }: { tools: string[] }) {
  return (
    <ul className="case-tools">
      {tools.map((tool) => (
        <li key={tool}>
          {logos[tool] ? <img src={logos[tool]} alt="" width="24" height="24" loading="lazy" /> : null}
          {tool}
        </li>
      ))}
    </ul>
  );
}

export function CaseFooter({ note }: { note: string }) {
  return (
    <footer className="case-end">
      <div className="case-wrap">
        <p className="case-label">Next up</p>
        <a className="case-end-link" href="/#work">
          Back to all work <ArrowUpRight />
        </a>
        <p className="hand case-end-note">{note}</p>
        <div className="case-end-row">
          <a href={`mailto:${EMAIL}`}>
            {EMAIL} <ArrowUpRight />
          </a>
          <span>© 2026 Kenechukwu Okoye</span>
        </div>
      </div>
    </footer>
  );
}
