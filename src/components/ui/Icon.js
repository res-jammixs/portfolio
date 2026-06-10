const icons = {
  award: (
    <>
      <path d="M8.5 13.5 7 21l5-3 5 3-1.5-7.5" />
      <circle cx="12" cy="8" r="5" />
      <path d="m10.5 8 1 1 2.5-2.5" />
    </>
  ),
  check: (
    <path d="m5 12 4 4L19 6" />
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.2 2.2 4.8-5.4" />
    </>
  ),
  branch: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M8.5 8.5 15.5 15.5" />
      <path d="M6 9v3a6 6 0 0 0 6 6h3" />
    </>
  ),
  code: (
    <>
      <path d="m9 18-6-6 6-6" />
      <path d="m15 6 6 6-6 6" />
    </>
  ),
  coffee: (
    <>
      <path d="M6 8h10v5a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5z" />
      <path d="M16 9h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8 3v2" />
      <path d="M12 3v2" />
      <path d="M16 3v2" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="M9.5 12h5" />
      <path d="M9.5 16h5" />
    </>
  ),
  devices: (
    <>
      <rect width="12" height="9" x="3" y="5" rx="2" />
      <rect width="7" height="11" x="14" y="8" rx="2" />
      <path d="M7 19h5" />
      <path d="M9.5 14v5" />
    </>
  ),
  draw: (
    <>
      <path d="m4 20 4.5-1 9.7-9.7a2.1 2.1 0 0 0-3-3L5.5 16z" />
      <path d="m13.5 7.5 3 3" />
      <path d="M4 20h7" />
    </>
  ),
  externalLink: (
    <>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </>
  ),
  arrowForward: (
    <path d="M5 12h14m-6-6 6 6-6 6" />
  ),
  arrowDownward: (
    <path d="M12 5v14m-6-6 6 6 6-6" />
  ),
  mail: (
    <>
      <rect width="16" height="12" x="4" y="6" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="17" cy="20" r="1.5" />
      <path d="M3 4h2l2.4 11.5a2 2 0 0 0 2 1.5h7.7a2 2 0 0 0 1.9-1.4L21 8H7" />
      <path d="M9 11h9" />
    </>
  ),
  cat: (
    <>
      <path d="M5 9 4 4l4 2.5A8 8 0 0 1 12 5a8 8 0 0 1 4 1.5L20 4l-1 5" />
      <path d="M5 9a7 7 0 0 0 14 0" />
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="m10 16 2-1 2 1" />
      <path d="M6 14H3" />
      <path d="M18 14h3" />
    </>
  ),
  coffeeBean: (
    <>
      <path d="M17.5 6.5c3 3 3.2 7.7.5 10.4s-7.4 2.5-10.4-.5-3.2-7.7-.5-10.4 7.4-2.5 10.4.5Z" />
      <path d="M9 18c.8-3.7 2.9-5.8 6.6-6.6" />
      <path d="M8.4 12.6c3.7-.8 5.8-2.9 6.6-6.6" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3 0 6.1-1.5 6.1-6.6a5.1 5.1 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.4 12.4 0 0 0-6.5 0C6.1 1.6 5 1.9 5 1.9a4.7 4.7 0 0 0-.1 3.5 5.1 5.1 0 0 0-1.4 3.5c0 5.1 3.1 6.6 6.1 6.6a3.4 3.4 0 0 0-.9 2.6V22" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </>
  ),
  gamepad: (
    <>
      <path d="M8 13h.01" />
      <path d="M16 13h.01" />
      <path d="M10 15H6.8a3 3 0 0 0-2.7 1.7l-.7 1.5a1.8 1.8 0 0 0 2.8 2.1L9 18h6l2.8 2.3a1.8 1.8 0 0 0 2.8-2.1l-.7-1.5a3 3 0 0 0-2.7-1.7H14" />
      <path d="M10 15v-2a2 2 0 1 1 4 0v2" />
      <path d="M7 10h3" />
      <path d="M8.5 8.5v3" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 11-4 16-9 16Z" />
      <path d="M4 20c4-6 9-9 16-16" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  network: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="7" r="3" />
      <circle cx="9" cy="18" r="3" />
      <path d="m8.7 7 6.6-.7" />
      <path d="m7.2 8.7 1.6 6.6" />
      <path d="m16.2 9.4-5.4 6.9" />
    </>
  ),
  shoppingBag: (
    <>
      <path d="M6 8h12l-1 13H7z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
      <path d="M9.5 13h5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3 9.7 8.3 4 10.5l5.7 2.2L12 18l2.3-5.3 5.7-2.2-5.7-2.2z" />
      <path d="M5 3v4" />
      <path d="M3 5h4" />
      <path d="M19 17v4" />
      <path d="M17 19h4" />
    </>
  ),
  stack: (
    <>
      <path d="m12 3 8 4-8 4-8-4z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 17 8 4 8-4" />
    </>
  ),
  stadia_controller: (
    <>
      <path d="M8 13h.01" />
      <path d="M16 13h.01" />
      <path d="M10 15H6.8a3 3 0 0 0-2.7 1.7l-.7 1.5a1.8 1.8 0 0 0 2.8 2.1L9 18h6l2.8 2.3a1.8 1.8 0 0 0 2.8-2.1l-.7-1.5a3 3 0 0 0-2.7-1.7H14" />
      <path d="M10 15v-2a2 2 0 1 1 4 0v2" />
      <path d="M7 10h3" />
      <path d="M8.5 8.5v3" />
    </>
  ),
  terminal: (
    <>
      <path d="m5 7 5 5-5 5" />
      <path d="M12 17h7" />
    </>
  ),
};

export default function Icon({ name, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}
