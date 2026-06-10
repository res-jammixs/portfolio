"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { featuredProjects } from "@/data/portfolio";
import Icon from "@/components/ui/Icon";
import ProjectCard from "@/components/ui/ProjectCard";
import Tag from "@/components/ui/Tag";

const DETAIL_ANIMATION_MS = 620;
const CAROUSEL_ANIMATION_MS = 720;
const LANDING_FADE_MS = 180;

function getCircularOffset(index, activeIndex, total) {
  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

function getCarouselTranslateX(offset) {
  const distance = Math.abs(offset);

  if (distance === 0) {
    return "0px";
  }

  /*
    Controls the distance from the middle card to the second card.
  */
  if (distance === 1) {
    return offset < 0
      ? "calc(-1 * var(--carousel-gap-center-side))"
      : "var(--carousel-gap-center-side)";
  }

  /*
    Controls the second card to third card gap separately.

    Final third-card position:
    middle-to-second distance + second-to-third distance
  */
  if (distance === 2) {
    return offset < 0
      ? "calc(-1 * (var(--carousel-gap-center-side) + var(--carousel-gap-side-outer)))"
      : "calc(var(--carousel-gap-center-side) + var(--carousel-gap-side-outer))";
  }

  return "0px";
}

function getCarouselStyle(offset) {
  const distance = Math.abs(offset);
  const hidden = distance > 2;

  /*
    Card sizing:
    - Center card: widest
    - Second cards: still wide
    - Third cards: thinnest
  */
  const widthFactor = distance === 0 ? 1.18 : distance === 1 ? 1.04 : 0.86;

  const scale = distance === 0 ? 1 : distance === 1 ? 0.96 : 0.9;
  const y = distance === 0 ? 0 : distance === 1 ? 6 : 12;
  const opacity = hidden ? 0 : distance === 0 ? 1 : distance === 1 ? 0.88 : 0.55;
  const blur = hidden ? 8 : distance === 2 ? 1.8 : 0;
  const translateX = getCarouselTranslateX(offset);

  return {
    filter: `blur(${blur}px)`,
    opacity,
    pointerEvents: hidden ? "none" : "auto",
    transform: `translateX(-50%) translateX(${translateX}) translateY(${y}px) scale(${scale})`,
    width: `calc(var(--carousel-card-width) * ${widthFactor})`,
    zIndex: 10 - distance,
  };
}

function getRectStyle(rect) {
  return {
    borderRadius: "8px",
    height: `${rect.height}px`,
    left: `${rect.left}px`,
    top: `${rect.top}px`,
    width: `${rect.width}px`,
  };
}

function getFullScreenStyle() {
  return {
    borderRadius: "0px",
    height: "100dvh",
    left: "0px",
    top: "0px",
    width: "100vw",
  };
}

function MorphingProjectCard({ mode, project }) {
  const isCompact = mode === "compact";
  const visual = project.visual ?? {};

  return (
    <div className="flex h-full flex-col overflow-hidden bg-white">
      <div
        className={`relative overflow-hidden border-b border-[rgba(15,35,58,0.08)] transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isCompact ? "min-h-24 p-4" : "min-h-[34%] p-8 md:p-10"
        }`}
        style={{
          background:
            visual.background ??
            "linear-gradient(135deg, #e2e8f0 0%, #f8fafc 100%)",
          "--project-accent": visual.accent ?? "var(--teal)",
        }}
      >
        <div
          className={`absolute inset-0 opacity-[0.18] transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] [background-image:linear-gradient(rgba(15,35,58,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(15,35,58,0.18)_1px,transparent_1px)] motion-reduce:transition-none ${
            isCompact ? "[background-size:28px_28px]" : "[background-size:40px_40px]"
          }`}
        />

        <div className="absolute -right-16 -top-16 size-56 rounded-full bg-white/45 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 size-64 rounded-full bg-white/40 blur-3xl" />

        <div
          className={`relative flex h-full flex-col justify-between transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isCompact ? "min-h-20" : "min-h-44"
          }`}
        >
          <div className="flex items-start justify-between gap-5">
            <div
              className={`grid place-items-center rounded-[8px] border border-white/80 bg-white/85 font-heading font-black text-[var(--deep-blue)] shadow-[0_18px_45px_rgba(15,35,58,0.12)] transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isCompact ? "size-12 text-base" : "size-20 text-2xl"
              }`}
            >
              {visual.logoText ?? project.name.slice(0, 2)}
            </div>

            <span
              className={`grid shrink-0 place-items-center rounded-[8px] border border-white/75 bg-white/80 text-[var(--project-accent)] transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isCompact ? "size-9" : "size-14"
              }`}
            >
              <Icon name="arrowForward" className={isCompact ? "size-4" : "size-6"} />
            </span>
          </div>

          <div className="max-w-2xl">
            <p
              className={`font-bold uppercase text-[rgba(15,35,58,0.68)] transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isCompact
                  ? "text-[0.66rem] tracking-[0.07em]"
                  : "text-xs tracking-[0.14em]"
              }`}
            >
              {visual.label ?? project.type}
            </p>

            <p
              className={`rounded-full bg-[var(--project-accent)] transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isCompact ? "mt-1 h-0.5 w-12" : "mt-2 h-1 w-20"
              }`}
            />
          </div>
        </div>
      </div>

      <div
        className={`flex flex-1 flex-col transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isCompact ? "p-4" : "p-8 md:p-10"
        }`}
      >
        <p
          className={`font-bold uppercase text-[var(--teal)] transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isCompact
              ? "line-clamp-2 text-[0.68rem] leading-4 tracking-normal"
              : "text-xs tracking-[0.1em]"
          }`}
        >
          {project.type}
        </p>

        <h3
          className={`font-heading font-black leading-tight text-[var(--deep-blue)] transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isCompact ? "mt-1 text-lg" : "mt-3 text-4xl md:text-6xl"
          }`}
        >
          {project.name}
        </h3>

        <p
          className={`max-w-3xl font-semibold text-[rgba(15,35,58,0.72)] transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isCompact ? "mt-3 text-[0.8rem] leading-5" : "mt-6 text-lg leading-8"
          }`}
        >
          {project.role}
        </p>

        <p
          className={`max-w-4xl text-[rgba(15,35,58,0.66)] transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isCompact
              ? "mt-2.5 line-clamp-4 text-[0.8rem] leading-5"
              : "mt-5 text-base leading-8"
          }`}
        >
          {project.summary}
        </p>

        <div
          className={`flex flex-wrap gap-2 transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isCompact ? "mt-4" : "mt-8"
          }`}
        >
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div
          className={`mt-auto border-t border-[rgba(15,35,58,0.08)] text-center transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isCompact ? "pt-3" : "pt-5"
          }`}
        >
          <span
            className={`inline-flex items-center justify-center gap-2 font-bold uppercase text-[rgba(15,35,58,0.52)] transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              isCompact
                ? "text-[0.72rem] tracking-[0.12em]"
                : "text-xs tracking-[0.14em]"
            }`}
          >
            Click to view project
            <Icon name="arrowForward" className={isCompact ? "size-3.5" : "size-4"} />
          </span>
        </div>
      </div>
    </div>
  );
}

function FullProjectDetail({ detail, onClose }) {
  const visual = detail.project.visual ?? {};

  return (
    <div
      className={`flex h-full flex-col transition-opacity duration-300 motion-reduce:transition-none ${
        detail.phase === "open" ? "opacity-100 delay-100" : "opacity-0"
      }`}
    >
      <div
        className="relative overflow-hidden border-b border-[rgba(15,35,58,0.08)] p-5 md:p-7"
        style={{
          background:
            visual.background ??
            "linear-gradient(135deg, #e2e8f0 0%, #f8fafc 100%)",
          "--project-accent": visual.accent ?? "var(--teal)",
        }}
      >
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(15,35,58,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(15,35,58,0.18)_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="grid size-14 place-items-center rounded-[8px] border border-white/80 bg-white/85 font-heading text-lg font-black text-[var(--deep-blue)] shadow-[0_12px_24px_rgba(15,35,58,0.12)]">
              {visual.logoText ?? detail.project.name.slice(0, 2)}
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--teal)]">
              {detail.project.type}
            </p>

            <h3 className="mt-2 max-w-3xl font-heading text-3xl font-black leading-tight text-[var(--deep-blue)] md:text-5xl">
              {detail.project.name}
            </h3>

            <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-[rgba(15,35,58,0.72)] md:text-base">
              {detail.project.role}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid size-11 shrink-0 place-items-center rounded-[8px] border border-white/75 bg-white/85 text-[var(--deep-blue)] shadow-sm transition hover:bg-white"
            aria-label="Back to projects"
          >
            <Icon name="arrowForward" className="size-4 rotate-180" />
          </button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-5 md:p-7">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm leading-7 text-[rgba(15,35,58,0.72)]">
              {detail.project.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {detail.project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>

            {detail.project.href ? (
              <a
                href={detail.project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-[8px] bg-[var(--deep-blue)] px-4 text-sm font-bold text-white transition hover:bg-[var(--teal)]"
              >
                Live demo
                <Icon name="externalLink" className="size-4" />
              </a>
            ) : null}
          </div>

          <div className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-[var(--mist)] p-4">
            <p className="font-heading text-sm font-bold uppercase text-[var(--teal)]">
              Preview gallery
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {detail.project.previewSlots.map((slot) => (
                <div
                  key={slot}
                  className="grid aspect-[4/3] place-items-center rounded-[8px] border border-dashed border-[rgba(15,35,58,0.2)] bg-white p-4 text-center text-xs font-bold uppercase leading-5 text-[rgba(15,35,58,0.55)]"
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ["Challenge", detail.project.challenge],
            ["Outcome", detail.project.outcome],
            ["Highlights", detail.project.highlights],
          ].map(([title, content]) => (
            <article
              key={title}
              className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white p-5"
            >
              <h4 className="font-heading text-base font-black text-[var(--deep-blue)]">
                {title}
              </h4>

              {Array.isArray(content) ? (
                <div className="mt-3 grid gap-2">
                  {content.map((highlight) => (
                    <p
                      key={highlight}
                      className="flex items-start gap-2 text-sm leading-6 text-[rgba(15,35,58,0.68)]"
                    >
                      <Icon
                        name="check"
                        className="mt-1 size-3.5 shrink-0 text-[var(--teal)]"
                      />
                      {highlight}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm leading-7 text-[rgba(15,35,58,0.68)]">
                  {content}
                </p>
              )}
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-[8px] border border-[rgba(15,35,58,0.12)] bg-white px-4 py-2 text-sm font-bold text-[var(--deep-blue)] transition hover:border-[var(--teal)]"
        >
          <Icon name="arrowForward" className="size-4 rotate-180" />
          Back to projects
        </button>
      </div>
    </div>
  );
}

function ProjectDetailOverlay({ detail, onClose }) {
  const isFullPanel = detail.phase === "open" || detail.phase === "preclosing";

  const isPreviewPanel =
    detail.phase === "opening" ||
    detail.phase === "preclosing" ||
    detail.phase === "closing" ||
    detail.phase === "landing";

  const isLanding = detail.phase === "landing";

  const cardMode = detail.phase === "preclosing" ? "expanded" : "compact";
  const panelStyle = isFullPanel ? getFullScreenStyle() : getRectStyle(detail.rect);

  const backdropClass =
    detail.phase === "open" || detail.phase === "preclosing"
      ? "bg-[rgba(11,35,65,0.42)]"
      : detail.phase === "closing"
        ? "bg-[rgba(11,35,65,0.12)]"
        : "bg-[rgba(11,35,65,0)]";

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-colors duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${backdropClass}`}
      onClick={onClose}
    >
      <div
        className={`fixed overflow-hidden border border-[rgba(15,35,58,0.12)] bg-white shadow-[0_30px_100px_rgba(11,35,65,0.24)] transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isLanding ? "opacity-0" : "opacity-100"
        }`}
        style={panelStyle}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${detail.project.name} project details`}
      >
        {isPreviewPanel ? (
          <MorphingProjectCard mode={cardMode} project={detail.project} />
        ) : (
          <FullProjectDetail detail={detail} onClose={onClose} />
        )}
      </div>
    </div>
  );
}

export default function ProjectsCarousel() {
  const projects = featuredProjects;
  const [activeIndex, setActiveIndex] = useState(0);
  const [detail, setDetail] = useState(null);
  const [isInteracting, setIsInteracting] = useState(false);

  const pendingProjectSlug = useRef(null);
  const cardRefs = useRef(new Map());
  const closeTimer = useRef(null);
  const centerTimer = useRef(null);
  const animationFrame = useRef(null);

  const portalTarget = typeof document === "undefined" ? null : document.body;

  const visibleProjects = useMemo(
    () =>
      projects.map((project, index) => ({
        project,
        offset: getCircularOffset(index, activeIndex, projects.length),
      })),
    [activeIndex, projects],
  );

  useEffect(() => {
    return () => {
      window.clearTimeout(closeTimer.current);
      window.clearTimeout(centerTimer.current);
      window.cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = detail ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [detail]);

  const move = (direction) => {
    if (detail || isInteracting) {
      return;
    }

    setActiveIndex((current) =>
      direction === "next"
        ? (current + 1) % projects.length
        : (current - 1 + projects.length) % projects.length,
    );
  };

  const openDetail = useCallback((project, rect) => {
    window.clearTimeout(closeTimer.current);
    window.cancelAnimationFrame(animationFrame.current);

    setDetail({ phase: "opening", project, rect });

    animationFrame.current = window.requestAnimationFrame(() => {
      animationFrame.current = window.requestAnimationFrame(() => {
        setDetail({ phase: "open", project, rect });
      });
    });
  }, []);

  const handleCardOpen = (project, index, offset, event) => {
    if (detail || isInteracting || Math.abs(offset) > 2) {
      return;
    }

    if (offset === 0) {
      openDetail(project, event.currentTarget.getBoundingClientRect());
      return;
    }

    pendingProjectSlug.current = project.slug;
    setIsInteracting(true);
    setActiveIndex(index);
    window.clearTimeout(centerTimer.current);

    centerTimer.current = window.setTimeout(() => {
      const centeredCard = cardRefs.current.get(pendingProjectSlug.current);
      const rect = centeredCard?.getBoundingClientRect();

      if (rect) {
        openDetail(project, rect);
      }

      pendingProjectSlug.current = null;
      setIsInteracting(false);
    }, CAROUSEL_ANIMATION_MS);
  };

  const closeDetail = useCallback(() => {
    if (
      !detail ||
      detail.phase === "preclosing" ||
      detail.phase === "closing" ||
      detail.phase === "landing"
    ) {
      return;
    }

    const target = cardRefs.current.get(detail.project.slug);
    const rect = target?.getBoundingClientRect() ?? detail.rect;

    window.clearTimeout(closeTimer.current);
    window.cancelAnimationFrame(animationFrame.current);

    setDetail({
      phase: "preclosing",
      project: detail.project,
      rect: detail.rect,
    });

    animationFrame.current = window.requestAnimationFrame(() => {
      animationFrame.current = window.requestAnimationFrame(() => {
        setDetail({
          phase: "closing",
          project: detail.project,
          rect,
        });

        closeTimer.current = window.setTimeout(() => {
          setDetail({
            phase: "landing",
            project: detail.project,
            rect,
          });

          closeTimer.current = window.setTimeout(() => {
            setDetail(null);
          }, LANDING_FADE_MS);
        }, DETAIL_ANIMATION_MS);
      });
    });
  }, [detail]);

  useEffect(() => {
    if (!detail) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeDetail();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeDetail, detail]);

  return (
    <div
      className="relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-hidden px-5 py-3 md:px-8"
      aria-label="Featured project carousel"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[var(--mist)] to-transparent md:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[var(--mist)] to-transparent md:w-36" />

      <div
        className="relative mx-auto h-[500px] max-w-[100vw] [--carousel-card-width:min(86vw,24rem)] [--carousel-gap-center-side:min(92vw,26rem)] [--carousel-gap-side-outer:min(78vw,20rem)] sm:h-[505px] sm:[--carousel-card-width:21rem] sm:[--carousel-gap-center-side:24rem] sm:[--carousel-gap-side-outer:20.5rem] md:h-[515px] md:[--carousel-card-width:22rem] md:[--carousel-gap-center-side:25rem] md:[--carousel-gap-side-outer:21rem] xl:h-[520px] xl:[--carousel-card-width:19rem] xl:[--carousel-gap-center-side:22.25rem] xl:[--carousel-gap-side-outer:18.25rem] 2xl:h-[530px] 2xl:[--carousel-card-width:20.5rem] 2xl:[--carousel-gap-center-side:24rem] 2xl:[--carousel-gap-side-outer:19.5rem]"
        aria-live="polite"
      >
        {visibleProjects.map(({ project, offset }) => {
          const projectIndex = projects.findIndex(
            (item) => item.slug === project.slug,
          );

          return (
            <div
              key={project.slug}
              ref={(node) => {
                if (node) {
                  cardRefs.current.set(project.slug, node);
                } else {
                  cardRefs.current.delete(project.slug);
                }
              }}
              className="absolute left-1/2 top-4 h-[calc(100%-2rem)] w-[var(--carousel-card-width)] transition-[transform,opacity,filter,width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={getCarouselStyle(offset)}
              aria-hidden={Math.abs(offset) > 2}
            >
              <ProjectCard
                project={project}
                delay={Math.abs(offset) * 35}
                disabled={Math.abs(offset) > 2 || isInteracting}
                onOpen={(event) =>
                  handleCardOpen(project, projectIndex, offset, event)
                }
              />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => move("previous")}
        className="absolute left-5 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-[rgba(15,35,58,0.12)] bg-white text-[var(--deep-blue)] shadow-[0_16px_36px_rgba(15,35,58,0.16)] transition hover:bg-[var(--deep-blue)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[rgba(15,118,110,0.35)] md:left-8 xl:left-[calc(50%-39rem)]"
        aria-label="Show previous projects"
      >
        <Icon name="arrowForward" className="size-4 rotate-180" />
      </button>

      <button
        type="button"
        onClick={() => move("next")}
        className="absolute right-5 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-[rgba(15,35,58,0.12)] bg-white text-[var(--deep-blue)] shadow-[0_16px_36px_rgba(15,35,58,0.16)] transition hover:bg-[var(--deep-blue)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[rgba(15,118,110,0.35)] md:right-8 xl:right-[calc(50%-39rem)]"
        aria-label="Show next projects"
      >
        <Icon name="arrowForward" className="size-4" />
      </button>

      {portalTarget && detail
        ? createPortal(
            <ProjectDetailOverlay detail={detail} onClose={closeDetail} />,
            portalTarget,
          )
        : null}
    </div>
  );
}