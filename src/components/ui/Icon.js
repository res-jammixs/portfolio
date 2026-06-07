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
  database: (
    <>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
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
  sparkles: (
    <>
      <path d="M12 3 9.7 8.3 4 10.5l5.7 2.2L12 18l2.3-5.3 5.7-2.2-5.7-2.2z" />
      <path d="M5 3v4" />
      <path d="M3 5h4" />
      <path d="M19 17v4" />
      <path d="M17 19h4" />
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
