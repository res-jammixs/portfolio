import Reveal from "@/components/animation/Reveal";
import Icon from "@/components/ui/Icon";
import Tag from "@/components/ui/Tag";

export default function ProjectCard({
  project,
  delay = 0,
  disabled = false,
  compact = false,
  onOpen,
}) {
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
      as="button"
      type="button"
      disabled={disabled}
      onClick={onOpen}
      tabIndex={disabled ? -1 : undefined}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white text-left shadow-[0_18px_45px_rgba(15,35,58,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(15,118,110,0.28)] hover:shadow-[0_24px_60px_rgba(15,35,58,0.1)] focus:outline-none focus:ring-2 focus:ring-[rgba(15,118,110,0.28)]"
      delay={delay}
      aria-label={`Open ${project.name} project details`}
    >
      <div
        className={`relative overflow-hidden border-b border-[rgba(15,35,58,0.08)] ${
          compact ? "min-h-24 p-3.5" : "min-h-28 p-4"
        }`}
        style={{
          background: visual.background,
          "--project-accent": visual.accent,
        }}
      >
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(15,35,58,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(15,35,58,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -right-10 -top-10 size-32 rounded-full bg-white/45 blur-2xl" />
        <div className="absolute -bottom-14 -left-12 size-36 rounded-full bg-white/40 blur-2xl" />

        <div
          className={`relative flex h-full flex-col justify-between ${
            compact ? "min-h-16" : "min-h-20"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div
              className={`grid place-items-center rounded-[8px] border border-white/80 bg-white/80 font-heading font-black text-[var(--deep-blue)] shadow-[0_10px_22px_rgba(15,35,58,0.1)] backdrop-blur ${
                compact ? "size-10 text-sm" : "size-12 text-base"
              }`}
            >
              {visual.logoText}
            </div>
            <span
              className={`grid shrink-0 place-items-center rounded-[8px] border border-white/75 bg-white/75 text-[var(--project-accent)] transition group-hover:bg-white ${
                compact ? "size-8" : "size-9"
              }`}
            >
              <Icon name="arrowForward" className={compact ? "size-3.5" : "size-4"} />
            </span>
          </div>

          <div className="max-w-[78%]">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.07em] text-[rgba(15,35,58,0.68)]">
              {visual.label}
            </p>
            <p className="mt-1 h-0.5 w-12 rounded-full bg-[var(--project-accent)]" />
          </div>
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-3.5" : "p-4"}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="line-clamp-2 text-[0.68rem] font-bold uppercase leading-4 text-[var(--teal)]">
              {project.type}
            </p>
            <h3 className="mt-1 font-heading text-lg font-black leading-tight text-[var(--deep-blue)]">
              {project.name}
            </h3>
          </div>
        </div>

        <p className="mt-3 text-[0.8rem] font-semibold leading-5 text-[rgba(15,35,58,0.72)]">
          {project.role}
        </p>
        <p className="mt-2.5 line-clamp-4 flex-1 text-[0.8rem] leading-5 text-[rgba(15,35,58,0.66)]">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div className="mt-4 border-t border-[rgba(15,35,58,0.08)] pt-3 text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[rgba(15,35,58,0.52)] transition group-hover:text-[var(--deep-blue)]">
            Click to view project
            <Icon name="arrowForward" className="size-3.5" />
          </span>
        </div>
      </div>
    </Reveal>
  );
}
