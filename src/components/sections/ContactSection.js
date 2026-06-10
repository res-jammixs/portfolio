import { contact, profile } from "@/data/portfolio";
import Reveal from "@/components/animation/Reveal";
import ActionLink from "@/components/ui/ActionLink";
import Icon from "@/components/ui/Icon";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-white px-5 py-20 md:px-8 md:py-24">
      <Reveal className="mx-auto max-w-6xl rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-[var(--deep-blue)] p-6 text-white shadow-[0_28px_80px_rgba(15,35,58,0.18)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-heading text-sm font-bold uppercase text-[rgba(255,255,255,0.7)]">
              Contact
            </p>
            <h2 className="mt-4 font-heading text-2xl font-black leading-tight md:text-4xl">
              Let us connect about internships, junior roles, or project work.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
              I am {profile.shortName}, an IT student in {profile.location}
              with portfolio work across frontend, full-stack development,
              UI/UX, SQAE, games, and creative production.
            </p>
          </div>

          <div className="grid gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/10 p-4 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-white text-[var(--deep-blue)]">
                <Icon name="mail" className="size-4" />
              </span>
              <span className="min-w-0 break-all">{contact.email}</span>
            </a>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionLink
                href={contact.github}
                variant="secondary"
                icon="github"
                external
              >
                GitHub
              </ActionLink>
              <ActionLink
                href={contact.portfolio}
                variant="secondary"
                icon="externalLink"
                external
              >
                Portfolio
              </ActionLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
