export default function Tag({ children, tone = "light" }) {
  const tones = {
    light:
      "border-[rgba(3,63,99,0.12)] bg-white/55 text-[rgba(3,63,99,0.78)]",
    dark:
      "border-white/10 bg-white/10 text-white/85",
    warm:
      "border-[rgba(254,220,151,0.8)] bg-[rgba(254,220,151,0.35)] text-[var(--deep-blue)]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
