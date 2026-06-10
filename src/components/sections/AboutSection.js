import Link from "next/link";
import { experienceHighlights, profile } from "@/data/portfolio";
import Reveal from "@/components/animation/Reveal";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

const focusAreas = [
  "Frontend interfaces",
  "Full-stack academic systems",
  "UI/UX and branding",
  "SQAE workflows",
  "Game development",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="A practical IT portfolio built around real academic and creative work."
            description={`${profile.role} at ${profile.school}, with hands-on work across product interfaces, full-stack systems, QA workflows, games, branding, and publication design.`}
          />

          <Reveal className="mt-8 flex flex-wrap gap-2" delay={120}>
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-[8px] border border-[rgba(15,35,58,0.12)] bg-[var(--mist)] px-3 py-2 text-sm font-semibold text-[rgba(15,35,58,0.72)]"
              >
                {area}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="grid gap-4">
          <Reveal
            className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-[var(--deep-blue)] p-6 text-white shadow-[0_22px_65px_rgba(15,35,58,0.16)] md:p-8"
            direction="right"
            delay={100}
          >
            <div className="mb-5 grid size-12 place-items-center rounded-[8px] bg-white/10 text-white">
              <Icon name="code" className="size-5" />
            </div>
            <p className="text-sm leading-7 text-white/85 md:text-[15px]">
              I focus on building useful digital experiences: interfaces that
              are clear, systems that connect frontend and backend behavior, and
              project workflows that include testing, documentation, and
              collaboration.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {experienceHighlights.map((highlight, index) => (
              <Reveal
                key={highlight.title}
                className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-[var(--mist)] p-5"
                delay={170 + index * 70}
              >
                <div className="mb-4 grid size-10 place-items-center rounded-[8px] bg-white text-[var(--teal)]">
                  <Icon
                    name={index === 0 ? "draw" : index === 1 ? "checkCircle" : "sparkles"}
                    className="size-4"
                  />
                </div>
                <h3 className="font-heading text-base font-black text-[var(--deep-blue)]">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[rgba(15,35,58,0.68)]">
                  {highlight.detail}
                </p>
                {highlight.href ? (
                  <Link
                    href={highlight.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--teal)] transition hover:text-[var(--deep-blue)]"
                  >
                    View work
                    <Icon name="arrowForward" className="size-4" />
                  </Link>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
