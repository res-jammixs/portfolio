import Link from "next/link";
import { experienceHighlights, profile } from "@/data/portfolio";
import Reveal from "@/components/animation/Reveal";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

const focusAreas = [
  "Frontend interfaces",
  "Full-stack systems",
  "UI/UX and branding",
  "SQAE workflows",
  "Game development",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-10 md:px-8 md:py-12"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex h-full flex-col">
          <SectionHeading
            eyebrow="About"
            title="A practical IT portfolio built around real academic and creative work."
            description={`${profile.role} at ${profile.school}, with hands-on experience in frontend interfaces, full-stack systems, QA workflows, games, branding, and publication design.`}
          />

          <Reveal className="mt-4 flex flex-wrap gap-2" delay={120}>
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[rgba(15,35,58,0.12)] bg-[var(--mist)] px-3 py-1 text-xs font-bold text-[rgba(15,35,58,0.68)]"
              >
                {area}
              </span>
            ))}
          </Reveal>

          <Reveal
            className="mt-5 rounded-[10px] bg-[var(--deep-blue)]/90 p-3.5 text-white shadow-[0_12px_30px_rgba(15,35,58,0.1)] md:p-4"
            delay={170}
          >
            <div className="flex gap-3">
              <div className="grid size-8 shrink-0 place-items-center rounded-[8px] bg-white/10 text-white/80">
                <Icon name="code" className="size-4" />
              </div>

              <div className="min-w-0">
                <div className="mb-1 font-heading text-3xl font-black leading-none text-white/10">
                  “
                </div>

                <p className="-mt-3 max-w-xl text-sm leading-6 text-white/68">
                  I build clear interfaces, connected systems, and organized
                  workflows for testing, documentation, and collaboration.
                </p>

                <div className="mt-2.5 flex items-center gap-3">
                  <span className="h-px w-8 bg-white/12" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                    Practical development mindset
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex h-full flex-col">
          <Reveal direction="right" delay={100}>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--teal)]">
              Experience Highlights
            </p>
            <h3 className="mt-2 max-w-2xl font-heading text-2xl font-black leading-tight text-[var(--deep-blue)] md:text-[27px]">
              Work that reflects both technical and creative practice.
            </h3>
          </Reveal>

          <div className="mt-5 grid flex-1 gap-3 lg:grid-rows-3">
            {experienceHighlights.map((highlight, index) => (
              <Reveal
                key={highlight.title}
                delay={160 + index * 60}
                className="group h-full rounded-[12px] border border-[rgba(15,35,58,0.1)] bg-[var(--mist)] p-3.5 transition duration-300 hover:border-[rgba(0,128,128,0.25)] hover:bg-white hover:shadow-[0_14px_36px_rgba(15,35,58,0.07)] md:p-4"
              >
                <div className="flex h-full items-center gap-4">
                  <div className="grid size-10 shrink-0 place-items-center self-center rounded-[9px] bg-white text-[var(--teal)] shadow-[0_8px_22px_rgba(15,35,58,0.05)] transition group-hover:bg-[var(--teal)] group-hover:text-white">
                    <Icon
                      name={
                        index === 0
                          ? "draw"
                          : index === 1
                            ? "checkCircle"
                            : "sparkles"
                      }
                      className="size-4"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading text-base font-black leading-[1.1] text-[var(--deep-blue)] md:text-lg">
                        {highlight.title}
                      </h3>

                      <span className="shrink-0 font-heading text-xl font-black text-[rgba(15,35,58,0.09)]">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="-mt-1 text-sm leading-[1.65] text-[rgba(15,35,58,0.66)]">
                      {highlight.detail}
                    </p>

                    {highlight.href ? (
                      <Link
                        href={highlight.href}
                        className="mt-2 inline-flex items-center gap-2 text-sm font-black text-[var(--teal)] transition hover:gap-3 hover:text-[var(--deep-blue)]"
                      >
                        View work
                        <Icon name="arrowForward" className="size-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}