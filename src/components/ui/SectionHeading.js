import Reveal from "@/components/animation/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      <p className="font-heading text-sm font-bold uppercase tracking-[0.28em] text-[var(--teal)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-3xl font-black leading-tight text-[var(--deep-blue)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[rgba(9,47,69,0.72)] md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
