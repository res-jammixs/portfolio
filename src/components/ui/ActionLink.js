export default function ActionLink({
  href,
  children,
  icon = "arrow_forward",
  variant = "primary",
}) {
  const variants = {
    primary:
      "bg-[var(--deep-blue)] text-white shadow-[0_18px_40px_rgba(3,63,99,0.22)] hover:-translate-y-0.5 hover:bg-[var(--teal)]",
    secondary:
      "border border-[rgba(3,63,99,0.18)] bg-white/50 text-[var(--deep-blue)] hover:-translate-y-0.5 hover:border-[var(--teal)] hover:bg-white/80",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${variants[variant]}`}
    >
      <span>{children}</span>
      <span className="material-symbols-rounded text-lg" aria-hidden="true">
        {icon}
      </span>
    </a>
  );
}
