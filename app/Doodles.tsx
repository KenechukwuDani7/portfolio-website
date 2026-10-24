import type { ReactNode } from "react";

// Flat, hand-drawn style illustrations for the homepage. Everything is drawn
// in currentColor on a transparent ground so it sits on paper or ink alike.
function Doodle({ children, viewBox = "0 0 120 120", className }: { children: ReactNode; viewBox?: string; className?: string }) {
  return (
    <svg
      className={className ? `doodle ${className}` : "doodle"}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function Pencil({ className }: { className?: string }) {
  return (
    <Doodle className={className}>
      <path d="M28 92 82 38l16 16-54 54-22 6 6-22Z" fill="var(--paper)" />
      <path d="m74 46 16 16" />
      <path d="m82 38 8-8a6 6 0 0 1 8 0l8 8a6 6 0 0 1 0 8l-8 8" fill="currentColor" />
      <path d="m28 92 16 16" />
      <path d="m24 104 4-12 12 12-12 4Z" fill="currentColor" />
    </Doodle>
  );
}

export function Cursor({ className }: { className?: string }) {
  return (
    <Doodle className={className}>
      <path d="M30 18v78l20-18 14 30 16-8-14-30h28L30 18Z" fill="var(--paper)" />
    </Doodle>
  );
}

export function BezierPen({ className }: { className?: string }) {
  return (
    <Doodle className={className}>
      <path d="M14 96C30 40 70 30 106 24" strokeDasharray="1 9" />
      <rect x="6" y="88" width="16" height="16" rx="2" fill="var(--paper)" />
      <rect x="98" y="16" width="16" height="16" rx="2" fill="var(--paper)" />
      <path d="M60 20 60 50" />
      <circle cx="60" cy="16" r="6" fill="currentColor" />
      <path d="M44 66 60 50l16 16-16 34-16-34Z" fill="var(--paper)" />
      <circle cx="60" cy="72" r="4" fill="currentColor" />
    </Doodle>
  );
}

export function Braces({ className }: { className?: string }) {
  return (
    <Doodle className={className}>
      <path d="M42 18c-14 0-16 8-16 18v12c0 8-4 12-12 12 8 0 12 4 12 12v12c0 10 2 18 16 18" />
      <path d="M78 18c14 0 16 8 16 18v12c0 8 4 12 12 12-8 0-12 4-12 12v12c0 10-2 18-16 18" />
      <path d="m52 76 16-32" />
    </Doodle>
  );
}

export function Flower({ className }: { className?: string }) {
  const petals = Array.from({ length: 6 }, (_, i) => i * 60);
  return (
    <Doodle className={className}>
      {petals.map((angle) => (
        <ellipse key={angle} cx="60" cy="32" rx="16" ry="24" fill="var(--paper)" transform={`rotate(${angle} 60 60)`} />
      ))}
      <circle cx="60" cy="60" r="14" fill="currentColor" />
    </Doodle>
  );
}

export function Magnifier({ className }: { className?: string }) {
  return (
    <Doodle className={className}>
      <circle cx="50" cy="50" r="30" fill="var(--paper)" />
      <path d="M36 44a16 16 0 0 1 12-10" />
      <path d="m72 72 30 30" strokeWidth={10} />
    </Doodle>
  );
}

export function Wireframe({ className }: { className?: string }) {
  return (
    <Doodle className={className}>
      <rect x="14" y="16" width="92" height="88" rx="10" fill="var(--paper)" />
      <path d="M14 34h92" />
      <rect x="26" y="46" width="30" height="24" rx="4" />
      <path d="M66 50h28M66 62h20M26 82h68M26 92h44" />
    </Doodle>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <Doodle className={className} viewBox="0 0 220 40">
      <path d="M4 26c14-20 28-20 36 0s22 20 36 0 28-20 36 0 22 20 36 0 28-20 36 0 20 14 32 4" />
    </Doodle>
  );
}

export function CurvedArrow({ className }: { className?: string }) {
  return (
    <Doodle className={className} viewBox="0 0 120 80">
      <path d="M8 12c30 4 66 18 86 52" />
      <path d="m78 60 16 6 4-18" />
    </Doodle>
  );
}

// A circle with scalloped edges, used to clip the portrait into a stamp.
export function ScallopClip({ id }: { id: string }) {
  const bumps = 22;
  const radius = 0.445;
  const point = (i: number) => {
    const angle = (i / bumps) * Math.PI * 2 - Math.PI / 2;
    return [0.5 + radius * Math.cos(angle), 0.5 + radius * Math.sin(angle)].map((n) => n.toFixed(4)).join(" ");
  };
  const bump = (radius * Math.sin(Math.PI / bumps)).toFixed(4);
  let d = `M${point(0)}`;
  for (let i = 1; i <= bumps; i += 1) d += ` A${bump} ${bump} 0 0 1 ${point(i)}`;
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <clipPath id={id} clipPathUnits="objectBoundingBox">
        <path d={`${d} Z`} />
      </clipPath>
    </svg>
  );
}
