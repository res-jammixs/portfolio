"use client";

import { useState } from "react";
import Link from "next/link";
import { achievements, certifications } from "@/data/portfolio";
import Reveal from "@/components/animation/Reveal";
import CertificationCard from "@/components/ui/CertificationCard";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

const certificatePlaceholders = [
  {
    title: "Java OOP Certification",
    src: "/certificates/placeholder-1.png",
  },
  {
    title: "CodeChum C Programming",
    src: "/certificates/placeholder-2.png",
  },
  {
    title: "Canva Essentials",
    src: "/certificates/placeholder-3.png",
  },
  {
    title: "Parangal Certificate",
    src: "/certificates/placeholder-4.png",
  },
];

export default function CredentialsSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="credentials"
      className="relative overflow-hidden bg-[var(--mist)] px-5 py-12 md:px-8 md:py-14"
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications, leadership, and academic recognition."
            description="A compact credibility layer for recruiters and project reviewers scanning the portfolio."
          />

          <Reveal
            className="mt-5 rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white p-5 shadow-[0_16px_38px_rgba(15,35,58,0.055)]"
            delay={120}
          >
            <div className="mb-4 grid size-10 place-items-center rounded-[8px] bg-[rgba(15,118,110,0.1)] text-[var(--teal)]">
              <Icon name="award" className="size-5" />
            </div>

            <h3 className="font-heading text-lg font-black leading-snug text-[var(--deep-blue)]">
              Creative Director - DOST SA CIT-U
            </h3>

            <p className="mt-2 text-sm leading-6 text-[rgba(15,35,58,0.68)]">
              Led creative direction, rebranding, brand kit work, and
              publication material consistency for the first semester of A.Y.
              2025-2026.
            </p>

            <Link
              href="/performance/creative-direction"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[var(--teal)] transition hover:text-[var(--deep-blue)]"
            >
              View creative direction work
              <Icon name="arrowForward" className="size-4" />
            </Link>
          </Reveal>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid gap-3">
          {/* SEE CERTIFICATES CTA */}
          <Reveal
            className="flex items-center justify-between gap-5 rounded-[8px] border border-[rgba(15,35,58,0.08)] bg-white px-5 py-3.5 shadow-[0_12px_30px_rgba(15,35,58,0.045)]"
            delay={80}
          >
            <div>
              <h3 className="font-heading text-base font-black text-[var(--deep-blue)]">
                See certificates
              </h3>
              <p className="mt-0.5 text-xs leading-5 text-[rgba(15,35,58,0.58)]">
                Open a certificate image gallery with clickable previews.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="inline-flex shrink-0 items-center gap-2 rounded-[8px] bg-[var(--deep-blue)] px-4 py-2.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--teal)]"
            >
              Open gallery
              <Icon name="arrowForward" className="size-4" />
            </button>
          </Reveal>

          {/* CERTIFICATION CARDS */}
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((certification, index) => (
              <CertificationCard
                key={certification.title}
                certification={certification}
                delay={index * 70}
              />
            ))}
          </div>

          {/* ACHIEVEMENTS */}
          <Reveal
            className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white p-5 shadow-[0_16px_38px_rgba(15,35,58,0.055)]"
            delay={250}
          >
            <h3 className="font-heading text-base font-black text-[var(--deep-blue)]">
              Selected achievements
            </h3>

            <div className="mt-3 grid gap-2">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[rgba(15,118,110,0.1)] text-[var(--teal)]">
                    <Icon name="check" className="size-3" />
                  </span>

                  <p className="text-sm leading-5 text-[rgba(15,35,58,0.68)]">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* DRAWER BACKDROP */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        className={`fixed inset-0 z-40 bg-[rgba(15,35,58,0.28)] backdrop-blur-[2px] transition-opacity duration-300 ${
          isDrawerOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* RIGHT DRAWER */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-[430px] overflow-y-auto border-l border-[rgba(15,35,58,0.1)] bg-white shadow-[-24px_0_70px_rgba(15,35,58,0.16)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isDrawerOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-70"
        }`}
      >
        <div className="sticky top-0 z-10 border-b border-[rgba(15,35,58,0.08)] bg-white/90 px-6 py-5 backdrop-blur-md">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--teal)]">
                Certificate Gallery
              </p>

              <h3 className="mt-2 font-heading text-xl font-black text-[var(--deep-blue)]">
                See certificates
              </h3>

              <p className="mt-1 text-sm leading-6 text-[rgba(15,35,58,0.6)]">
                Placeholder previews for certification and recognition images.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="grid size-10 shrink-0 place-items-center rounded-full border border-[rgba(15,35,58,0.1)] text-[var(--deep-blue)] transition hover:bg-[rgba(15,35,58,0.05)]"
              aria-label="Close drawer"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="grid gap-4 px-6 py-5">
          {certificatePlaceholders.map((certificate, index) => (
            <button
              type="button"
              key={certificate.title}
              onClick={() => setSelectedCertificate(certificate)}
              className={`group overflow-hidden rounded-[10px] border border-[rgba(15,35,58,0.1)] bg-[var(--mist)] text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,35,58,0.12)] ${
                isDrawerOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isDrawerOpen
                  ? `${120 + index * 70}ms`
                  : "0ms",
              }}
            >
              <div className="grid aspect-[16/10] place-items-center bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(37,99,235,0.08))]">
                <div className="text-center">
                  <div className="mx-auto grid size-12 place-items-center rounded-[8px] bg-white text-[var(--teal)] shadow-[0_10px_24px_rgba(15,35,58,0.08)]">
                    <Icon name="award" className="size-5" />
                  </div>

                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[rgba(15,35,58,0.45)]">
                    Placeholder Image
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 bg-white px-4 py-3">
                <h4 className="font-heading text-sm font-black text-[var(--deep-blue)]">
                  {certificate.title}
                </h4>

                <span className="text-xs font-bold text-[var(--teal)] opacity-80 transition group-hover:opacity-100">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* FULL CERTIFICATE PREVIEW MODAL */}
      <div
        onClick={() => setSelectedCertificate(null)}
        className={`fixed inset-0 z-[60] grid place-items-center bg-[rgba(15,35,58,0.55)] px-5 backdrop-blur-sm transition-opacity duration-300 ${
          selectedCertificate
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={`w-full max-w-3xl overflow-hidden rounded-[12px] border border-white/20 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.22)] transition-all duration-300 ${
            selectedCertificate
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-5 scale-95 opacity-0"
          }`}
        >
          {selectedCertificate && (
            <>
              <div className="flex items-center justify-between gap-4 border-b border-[rgba(15,35,58,0.08)] px-5 py-4">
                <h3 className="font-heading text-lg font-black text-[var(--deep-blue)]">
                  {selectedCertificate.title}
                </h3>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="grid size-9 place-items-center rounded-full border border-[rgba(15,35,58,0.1)] text-[var(--deep-blue)] transition hover:bg-[rgba(15,35,58,0.05)]"
                  aria-label="Close certificate preview"
                >
                  ✕
                </button>
              </div>

              <div className="grid aspect-[16/10] place-items-center bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(37,99,235,0.08))]">
                <div className="text-center">
                  <div className="mx-auto grid size-16 place-items-center rounded-[10px] bg-white text-[var(--teal)] shadow-[0_14px_34px_rgba(15,35,58,0.1)]">
                    <Icon name="award" className="size-7" />
                  </div>

                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[rgba(15,35,58,0.48)]">
                    Full Certificate Placeholder
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}