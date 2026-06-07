import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/60 bg-[#f8f3e5]/80 px-4 py-3 shadow-[0_16px_45px_rgba(3,63,99,0.12)] backdrop-blur-xl md:px-5">
        <a
          href="#home"
          className="flex items-center gap-3 text-[var(--deep-blue)]"
          aria-label={`${profile.shortName} home`}
        >
          <span className="grid size-10 place-items-center rounded-full bg-[var(--deep-blue)] font-heading text-sm font-black text-[var(--cream)]">
            JS
          </span>
          <span className="hidden font-heading text-sm font-bold uppercase tracking-[0.18em] sm:block">
            Portfolio
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-white/35 p-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[rgba(3,63,99,0.72)] transition hover:bg-white/70 hover:text-[var(--deep-blue)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--cream)] px-4 py-2 text-sm font-bold text-[var(--deep-blue)] transition hover:-translate-y-0.5 hover:bg-white"
        >
          <span>Projects</span>
          <span className="material-symbols-rounded text-base" aria-hidden="true">
            arrow_downward
          </span>
        </a>
      </nav>
    </header>
  );
}
