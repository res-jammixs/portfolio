const icons = {
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
