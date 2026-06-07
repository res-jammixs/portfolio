import {
  certifications,
  palette,
  personalHighlights,
  profile,
} from "@/data/portfolio";
import Reveal from "@/components/animation/Reveal";
import CertificationCard from "@/components/ui/CertificationCard";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

const focusAreas = ["UI/UX", "Frontend", "Backend", "Game Dev"];

export default function AboutSection() {
  return (
    <section id="about" className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-transparent to-white/25" />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionHeading
            eyebrow="About Me"
            title="Building with curiosity, structure, and steady growth."
            description={`${profile.role} from ${profile.school}, focused on practical projects that connect design, code, and problem solving.`}
          />

          <Reveal
            className="mt-8 grid grid-cols-2 gap-3"
            delay={120}
          >
            {focusAreas.map((area, index) => (
              <div
                key={area}
                className="rounded-[8px] border border-white/60 bg-white/40 p-4 shadow-[0_14px_34px_rgba(3,63,99,0.07)] backdrop-blur"
              >
                <span
                  className="mb-4 block h-1.5 rounded-full"
                  style={{
                    backgroundColor: [
                      palette.deepBlue,
                      palette.teal,
                      palette.sage,
                      palette.olive,
                    ][index],
                  }}
                />
                <p className="font-heading text-sm font-black uppercase tracking-[0.14em] text-[var(--deep-blue)]">
                  {area}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="space-y-5">
          <Reveal
            className="rounded-[8px] border border-white/70 bg-[var(--deep-blue)] p-6 text-white shadow-[0_28px_70px_rgba(3,63,99,0.18)] md:p-8"
            direction="right"
            delay={120}
          >
            <div className="mb-6 grid size-12 place-items-center rounded-[8px] bg-white/10 text-[var(--cream)]">
              <Icon name="sparkles" className="size-5" />
            </div>
            <p className="text-lg leading-9 text-white/85">
              I work across Figma, Next.js, Tailwind CSS, MySQL, Lua, Java,
              JavaScript, C, VS Code, and Android Studio while continuing to
              self-study and grow as a programmer.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((certification, index) => (
              <CertificationCard
                key={certification.title}
                certification={certification}
                delay={180 + index * 90}
              />
            ))}
          </div>

          <div className="grid gap-3">
            {personalHighlights.map((highlight, index) => (
              <Reveal
                key={highlight}
                className="flex items-start gap-3 rounded-[8px] border border-white/60 bg-white/35 p-4 shadow-[0_14px_30px_rgba(3,63,99,0.06)] backdrop-blur"
                delay={240 + index * 70}
              >
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--cream)] text-[var(--deep-blue)]">
                  <Icon name="check" className="size-3.5" />
                </span>
                <p className="text-sm font-medium leading-6 text-[rgba(9,47,69,0.72)]">
                  {highlight}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
