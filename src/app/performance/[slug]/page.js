import Link from "next/link";
import { notFound } from "next/navigation";
import { performanceItems } from "@/data/portfolio";
import Icon from "@/components/ui/Icon";
import Tag from "@/components/ui/Tag";

export function generateStaticParams() {
  return performanceItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = performanceItems.find((work) => work.slug === slug);

  if (!item) {
    return {
      title: "Performance Work Not Found | James Michael Siton",
    };
  }

  return {
    title: `${item.title} | James Michael Siton`,
    description: item.summary,
  };
}

export default async function PerformanceDetailPage({ params }) {
  const { slug } = await params;
  const item = performanceItems.find((work) => work.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-5 py-8 text-[var(--foreground)] md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#about"
          className="inline-flex min-h-11 items-center gap-2 rounded-[8px] border border-[rgba(15,35,58,0.12)] bg-[var(--mist)] px-4 py-2 text-sm font-bold text-[var(--deep-blue)] transition hover:border-[var(--teal)]"
        >
          <Icon name="arrowForward" className="size-4 rotate-180" />
          Back to portfolio
        </Link>

        <section className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="font-heading text-sm font-bold uppercase text-[var(--teal)]">
              {item.type}
            </p>
            <h1 className="mt-4 font-heading text-3xl font-black leading-tight text-[var(--deep-blue)] md:text-5xl">
              {item.title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[rgba(15,35,58,0.7)] md:text-base">
              {item.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.stack.map((tool) => (
                <Tag key={tool}>{tool}</Tag>
              ))}
            </div>
          </div>

          <div className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-[var(--mist)] p-5">
            <p className="font-heading text-sm font-bold uppercase text-[var(--teal)]">
              Performance previews
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {item.previewSlots.map((slot) => (
                <div
                  key={slot}
                  className="grid aspect-[4/3] place-items-center rounded-[8px] border border-dashed border-[rgba(15,35,58,0.2)] bg-white p-4 text-center text-xs font-bold uppercase leading-5 text-[rgba(15,35,58,0.55)]"
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-[var(--deep-blue)] p-6 text-white md:p-8">
          <h2 className="font-heading text-xl font-black">
            What this page will show
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {item.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-[8px] border border-white/10 bg-white/10 p-4"
              >
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-white text-[var(--deep-blue)]">
                  <Icon name="check" className="size-3.5" />
                </span>
                <p className="text-sm leading-6 text-white/80">{highlight}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
