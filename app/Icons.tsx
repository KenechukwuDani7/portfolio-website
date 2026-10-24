import type { SVGProps } from "react";

// Inline SVG icons. Text arrows such as ↗ render as colour emoji on iOS,
// so every arrow on the site goes through these instead. Sized to 1em and
// drawn in currentColor, they follow the surrounding text.
function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <Icon>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Icon>
  );
}

export function ArrowDownRight() {
  return (
    <Icon>
      <path d="m7 7 10 10" />
      <path d="M17 8v9H8" />
    </Icon>
  );
}

export function ArrowDown() {
  return (
    <Icon>
      <path d="M12 5v14" />
      <path d="m18 13-6 6-6-6" />
    </Icon>
  );
}

export function ArrowUp() {
  return (
    <Icon>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </Icon>
  );
}

export function Sparkle() {
  return (
    <Icon fill="currentColor" stroke="none">
      <path d="M12 2c.6 5.4 2.6 7.4 8 8-5.4.6-7.4 2.6-8 8-.6-5.4-2.6-7.4-8-8 5.4-.6 7.4-2.6 8-8Z" />
    </Icon>
  );
}
