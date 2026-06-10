import Link from "next/link";
import Reveal from "@/components/animation/Reveal";
import Icon from "@/components/ui/Icon";
import Tag from "@/components/ui/Tag";

export default function ProjectCard({ project, delay = 0 }) {
  const visual = project.visual ?? {
    logoText: project.name.slice(0, 2).toUpperCase(),
    label: project.type,
    background: "linear-gradient(135deg, #e2e8f0 0%, #f8fafc 100%)",
    accent: "var(--teal)",
    motifColor: "var(--deep-blue)",
    motifs: ["stack", "sparkles", "code"],
  };

  return (
    <Reveal
      className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white shadow-[0_18px_45px_rgba(15,35,58,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(15,118,110,0.28)] hover:shadow-[0_24px_60px_rgba(15,35,58,0.1)]"
      delay={delay}
    >
      <div
        className="relative min-h-28 overflow-hidden border-b border-[rgba(15,35,58,0.08)] p-4"
        style={{
          background: visual.background,
          "--project-accent": visual.accent,
        }}
      >
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(15,35,58,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(15,35,58,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -right-10 -top-10 size-32 rounded-full bg-white/45 blur-2xl" />
        <div className="absolute -bottom-14 -left-12 size-36 rounded-full bg-white/40 blur-2xl" />

        <div className="relative flex h-full min-h-20 flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div className="grid size-12 place-items-center rounded-[8px] border border-white/80 bg-white/80 font-heading text-base font-black text-[var(--deep-blue)] shadow-[0_10px_22px_rgba(15,35,58,0.1)] backdrop-blur">
              {visual.logoText}
            </div>
            <Link
              href={project.detailPath}
              className="grid size-9 shrink-0 place-items-center rounded-[8px] border border-white/75 bg-white/75 text-[var(--project-accent)] transition hover:bg-white"
              aria-label={`View ${project.name} details`}
            >
              <Icon name="arrowForward" className="size-4" />
            </Link>
          </div>

          <div className="max-w-[78%]">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.07em] text-[rgba(15,35,58,0.68)]">
              {visual.label}
            </p>
            <p className="mt-1 h-0.5 w-12 rounded-full bg-[var(--project-accent)]" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[0.7rem] font-bold uppercase leading-5 text-[var(--teal)]">
              {project.type}
            </p>
            <h3 className="mt-1.5 font-heading text-lg font-black leading-tight text-[var(--deep-blue)]">
              {project.name}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-[0.82rem] font-semibold leading-5 text-[rgba(15,35,58,0.72)]">
          {project.role}
        </p>
        <p className="mt-3 flex-1 text-[0.82rem] leading-6 text-[rgba(15,35,58,0.66)]">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href={project.detailPath}
            className="inline-flex min-h-9 items-center gap-2 rounded-[8px] bg-[var(--deep-blue)] px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--teal)]"
          >
            View project
            <Icon name="arrowForward" className="size-4" />
          </Link>

          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-9 items-center gap-2 rounded-[8px] border border-[rgba(15,35,58,0.12)] px-4 text-sm font-bold text-[rgba(15,35,58,0.68)] transition hover:border-[rgba(15,35,58,0.25)] hover:text-[var(--deep-blue)]"
            >
              Live demo
              <Icon name="externalLink" className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
