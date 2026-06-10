import Link from "next/link";
import { achievements, certifications } from "@/data/portfolio";
import Reveal from "@/components/animation/Reveal";
import CertificationCard from "@/components/ui/CertificationCard";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="relative bg-[var(--mist)] px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications, leadership, and academic recognition."
            description="A short credibility layer for recruiters and project reviewers scanning the portfolio."
          />

          <Reveal
            className="mt-8 rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white p-6 shadow-[0_18px_45px_rgba(15,35,58,0.06)]"
            delay={120}
          >
            <div className="mb-5 grid size-12 place-items-center rounded-[8px] bg-[rgba(15,118,110,0.1)] text-[var(--teal)]">
              <Icon name="award" className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-black text-[var(--deep-blue)]">
              Creative Director - DOST SA CIT-U
            </h3>
            <p className="mt-3 text-sm leading-7 text-[rgba(15,35,58,0.68)]">
              Led creative direction, rebranding, brand kit work, and
              publication material consistency for the first semester of A.Y.
              2025-2026.
            </p>
            <Link
              href="/performance/creative-direction"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--teal)] transition hover:text-[var(--deep-blue)]"
            >
              View creative direction work
              <Icon name="arrowForward" className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((certification, index) => (
              <CertificationCard
                key={certification.title}
                certification={certification}
                delay={index * 70}
              />
            ))}
          </div>

          <Reveal
            className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white p-6 shadow-[0_18px_45px_rgba(15,35,58,0.06)]"
            delay={250}
          >
            <h3 className="font-heading text-lg font-black text-[var(--deep-blue)]">
              Selected achievements
            </h3>
            <div className="mt-5 grid gap-3">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-start gap-3">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[rgba(37,99,235,0.1)] text-[var(--blue)]">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  <p className="text-sm leading-6 text-[rgba(15,35,58,0.68)]">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
