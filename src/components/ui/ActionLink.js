import Icon from "@/components/ui/Icon";

export default function ActionLink({
  href,
  children,
  icon = "arrowForward",
  variant = "primary",
  external = false,
}) {
  const variants = {
    primary:
      "bg-[var(--deep-blue)] text-white shadow-[0_18px_40px_rgba(11,35,65,0.18)] hover:-translate-y-0.5 hover:bg-[var(--teal)]",
    secondary:
      "border border-[rgba(15,35,58,0.14)] bg-white text-[var(--deep-blue)] hover:-translate-y-0.5 hover:border-[var(--teal)] hover:bg-[var(--mist)]",
    ghost:
      "border border-transparent bg-transparent text-[var(--deep-blue)] hover:-translate-y-0.5 hover:border-[rgba(15,35,58,0.14)] hover:bg-white",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] px-5 py-3 text-sm font-semibold transition duration-300 ${variants[variant]}`}
    >
      <span>{children}</span>
      <Icon name={icon} />
    </a>
  );
}
