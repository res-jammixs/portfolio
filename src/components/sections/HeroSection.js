import { palette, profile, projectNavLinks } from "@/data/portfolio";
import ActionLink from "@/components/ui/ActionLink";
import ColorSwatch from "@/components/ui/ColorSwatch";

const heroStats = [
  { value: "3rd", label: "Year IT Student" },
  { value: "Full", label: "Stack Learner" },
  { value: "UI", label: "UX + Frontend" },
];

export default function HeroSection() {
  const swatches = [
    { color: palette.deepBlue, label: "#033f63", tall: true },
    { color: palette.teal, label: "#28666e", tall: false },
    { color: palette.sage, label: "#7c9885", tall: true },
    { color: palette.olive, label: "#b5b682", tall: false },
    { color: palette.cream, label: "#fedc97", tall: true },
  ];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center px-5 pb-12 pt-28 md:px-8 md:pb-16 md:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_12%,rgba(254,220,151,0.8),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.7),rgba(124,152,133,0.2))]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-[min(42rem,80vw)] -translate-x-1/2 rounded-full bg-white/35 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/45 px-4 py-2 text-sm font-semibold text-[var(--teal)] shadow-[0_12px_35px_rgba(3,63,99,0.08)] backdrop-blur">
            <span className="size-2 rounded-full bg-[var(--teal)]" />
            {profile.school}
          </div>

          <p className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.28em] text-[var(--teal)]">
            Personal Portfolio
          </p>

          <h1 className="max-w-4xl font-heading text-5xl font-black leading-[0.95] text-[var(--deep-blue)] sm:text-6xl md:text-7xl lg:text-8xl">
            {profile.name}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[rgba(9,47,69,0.74)] md:text-lg">
            {profile.summary} Based in {profile.location}, I design interfaces,
            build web systems, and explore games while growing through practical
            projects.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="#projects">View Projects</ActionLink>
            <ActionLink href="#contact" variant="secondary" icon="mail">
              Contact Me
            </ActionLink>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[8px] border border-white/60 bg-white/40 p-4 shadow-[0_14px_35px_rgba(3,63,99,0.08)] backdrop-blur"
              >
                <p className="font-heading text-2xl font-black text-[var(--deep-blue)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[rgba(3,63,99,0.58)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[8px] border border-white/70 bg-white/35 p-4 shadow-[0_28px_75px_rgba(3,63,99,0.18)] backdrop-blur-xl md:p-5">
            <div className="grid grid-cols-5 items-end gap-2 md:gap-3">
              {swatches.map((swatch) => (
                <ColorSwatch key={swatch.label} {...swatch} />
              ))}
            </div>
          </div>

          <div className="absolute -bottom-8 left-4 right-4 rounded-[8px] border border-white/70 bg-[var(--deep-blue)] p-4 text-white shadow-[0_24px_55px_rgba(3,63,99,0.24)] md:left-10 md:right-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--cream)]">
              Project templates queued
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {projectNavLinks.slice(0, 5).map((link) => (
                <span
                  key={link.href}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85"
                >
                  {link.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
