export default function Tag({ children, tone = "light" }) {
  const tones = {
    light:
      "border-[rgba(15,35,58,0.12)] bg-[var(--mist)] text-[rgba(15,35,58,0.78)]",
    dark:
      "border-white/10 bg-white/10 text-white/85",
    warm:
      "border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.1)] text-[var(--deep-blue)]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
