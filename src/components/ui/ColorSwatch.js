export default function ColorSwatch({ color, label, tall = false, delay = 0 }) {
  return (
    <div className="group min-w-0">
      <div
        className={`animate-soft-float rounded-[8px] border border-white/70 shadow-[0_18px_35px_rgba(3,63,99,0.12)] transition duration-300 group-hover:-translate-y-1 ${
          tall ? "h-44 md:h-72" : "h-28 md:h-44"
        }`}
        style={{ backgroundColor: color, animationDelay: `${delay}ms` }}
      />
      <p className="mt-3 truncate text-center font-heading text-xs font-bold uppercase text-[var(--deep-blue)] md:text-sm">
        {label}
      </p>
    </div>
  );
}
