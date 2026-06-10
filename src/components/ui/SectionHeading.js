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
      <p className="font-heading text-sm font-bold uppercase text-[var(--teal)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-2xl font-black leading-tight text-[var(--deep-blue)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-sm leading-7 text-[rgba(15,35,58,0.72)] md:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
