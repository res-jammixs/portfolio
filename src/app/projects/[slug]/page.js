import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredProjects } from "@/data/portfolio";
import Icon from "@/components/ui/Icon";
import Tag from "@/components/ui/Tag";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | James Michael Siton",
    };
  }

  return {
    title: `${project.name} | James Michael Siton`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--mist)] px-5 py-8 text-[var(--foreground)] md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-[8px] border border-[rgba(15,35,58,0.12)] bg-white px-4 py-2 text-sm font-bold text-[var(--deep-blue)] transition hover:border-[var(--teal)]"
          >
            <Icon name="arrowForward" className="size-4 rotate-180" />
            Back to projects
          </Link>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-[8px] bg-[var(--deep-blue)] px-4 py-2 text-sm font-bold text-white transition hover:bg-[var(--teal)]"
            >
              Live demo
              <Icon name="externalLink" className="size-4" />
            </a>
          ) : null}
        </nav>

        <section className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="font-heading text-sm font-bold uppercase text-[var(--teal)]">
              {project.type}
            </p>
            <h1 className="mt-4 font-heading text-3xl font-black leading-tight text-[var(--deep-blue)] md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-5 text-base font-semibold leading-7 text-[var(--navy)]">
              {project.role}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[rgba(15,35,58,0.7)]">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>

          <div className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white p-5 shadow-[0_22px_65px_rgba(15,35,58,0.08)]">
            <p className="font-heading text-sm font-bold uppercase text-[var(--teal)]">
              Preview gallery
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {project.previewSlots.map((slot) => (
                <div
                  key={slot}
                  className="grid aspect-[4/3] place-items-center rounded-[8px] border border-dashed border-[rgba(15,35,58,0.2)] bg-[var(--mist)] p-4 text-center text-xs font-bold uppercase leading-5 text-[rgba(15,35,58,0.55)]"
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white p-5">
            <h2 className="font-heading text-base font-black text-[var(--deep-blue)]">
              Challenge
            </h2>
            <p className="mt-3 text-sm leading-7 text-[rgba(15,35,58,0.68)]">
              {project.challenge}
            </p>
          </article>
          <article className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white p-5">
            <h2 className="font-heading text-base font-black text-[var(--deep-blue)]">
              Outcome
            </h2>
            <p className="mt-3 text-sm leading-7 text-[rgba(15,35,58,0.68)]">
              {project.outcome}
            </p>
          </article>
          <article className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white p-5">
            <h2 className="font-heading text-base font-black text-[var(--deep-blue)]">
              Highlights
            </h2>
            <div className="mt-3 grid gap-2">
              {project.highlights.map((highlight) => (
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
          </article>
        </section>
      </div>
    </main>
  );
}
