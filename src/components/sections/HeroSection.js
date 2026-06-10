import { contact, heroSkills, heroStats, profile } from "@/data/portfolio";
import Reveal from "@/components/animation/Reveal";
import ActionLink from "@/components/ui/ActionLink";
import Icon from "@/components/ui/Icon";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden px-5 pb-10 pt-24 md:px-8 md:pb-12 md:pt-28"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_52%,#eef6f6_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,35,58,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,35,58,0.045)_1px,transparent_1px)] bg-[size:76px_76px] opacity-70" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(15,118,110,0.28),transparent)]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-80 w-[min(70rem,92vw)] -translate-x-1/2 rounded-full bg-[rgba(15,118,110,0.08)] blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative z-10">
          <Reveal
            as="p"
            className="mb-3 font-heading text-sm font-bold uppercase text-[var(--teal)]"
            delay={80}
          >
            {profile.role}
          </Reveal>

          <Reveal
            as="h1"
            className="max-w-4xl font-heading text-4xl font-black leading-tight text-[var(--deep-blue)] sm:text-[2.85rem] md:text-[3.1rem]"
            delay={150}
            direction="left"
          >
            {profile.shortName}
          </Reveal>

          <Reveal
            as="p"
            className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[var(--navy)] md:text-lg"
            delay={220}
          >
            {profile.headline}
          </Reveal>

          <Reveal
            as="p"
            className="mt-4 max-w-2xl text-sm leading-7 text-[rgba(15,35,58,0.72)] md:text-base"
            delay={280}
          >
            I build practical projects that connect product thinking, clean
            interfaces, testing, and working software.
          </Reveal>

          <Reveal className="mt-6 flex flex-col gap-3 sm:flex-row" delay={350}>
            <ActionLink href="#projects">View Projects</ActionLink>
            <ActionLink href="#contact" variant="secondary" icon="mail">
              Contact Me
            </ActionLink>
            <ActionLink
              href={contact.github}
              variant="ghost"
              icon="github"
              external
            >
              GitHub
            </ActionLink>
          </Reveal>
        </div>

        <Reveal
          className="relative rounded-[8px] border border-[rgba(15,35,58,0.12)] bg-white p-4 shadow-[0_28px_80px_rgba(15,35,58,0.12)] md:p-5"
          delay={240}
          direction="right"
        >
          <div className="flex items-start justify-between gap-4 border-b border-[rgba(15,35,58,0.1)] pb-3">
            <div>
              <p className="font-heading text-xs font-bold uppercase text-[var(--teal)]">
                Portfolio focus
              </p>
              <h2 className="mt-2 font-heading text-lg font-black leading-snug text-[var(--deep-blue)] md:text-xl">
                Portfolio focus: interfaces, systems, QA workflows, and games.
              </h2>
            </div>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-[var(--mist)] px-3 py-2"
              >
                <p className="font-heading text-xl font-black leading-none text-[var(--deep-blue)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase leading-tight text-[rgba(15,35,58,0.62)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {["Frontend and full-stack systems", "UI/UX and branding", "SQAE, games, and project coordination"].map(
              (item) => (
                <div
                  key={item}
                  className="flex min-h-10 items-center gap-2 rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white px-2.5 py-2 text-xs font-semibold leading-tight text-[rgba(15,35,58,0.76)]"
                >
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[rgba(15,118,110,0.1)] text-[var(--teal)]">
                    <Icon name="check" className="size-3" />
                  </span>
                  {item}
                </div>
              ),
            )}
          </div>

          <div className="mt-3 border-t border-[rgba(15,35,58,0.1)] pt-3">
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="font-heading text-xs font-bold uppercase text-[rgba(15,35,58,0.58)]">
                Core stack
              </p>
              <span className="h-px flex-1 bg-[rgba(15,35,58,0.08)]" />
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {heroSkills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex min-h-10 flex-col items-center justify-center gap-1 rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-[var(--mist)] px-2 py-2 text-center text-[11px] font-bold leading-tight text-[var(--deep-blue)]"
                >
                  <Icon name={skill.icon} className="size-4 text-[var(--teal)]" />
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
            target="_blank"
            rel="noreferrer"
            className="-mx-4 -mb-4 mt-4 flex min-h-14 items-center justify-between gap-4 rounded-b-[8px] bg-[var(--deep-blue)] px-4 py-3 text-sm font-black text-white shadow-[0_-1px_0_rgba(255,255,255,0.18)_inset] transition hover:bg-[var(--navy)] md:-mx-5 md:-mb-5 md:px-5"
          >
            <span>Open to industry opportunities</span>
            <span className="grid size-9 shrink-0 place-items-center rounded-[8px] bg-white/15">
              <Icon name="externalLink" className="size-4" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
