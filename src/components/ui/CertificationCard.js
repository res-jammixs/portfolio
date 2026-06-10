import Reveal from "@/components/animation/Reveal";
import Icon from "@/components/ui/Icon";

export default function CertificationCard({ certification, delay = 0 }) {
  return (
    <Reveal
      className="rounded-[8px] border border-[rgba(15,35,58,0.1)] bg-white p-5 shadow-[0_18px_45px_rgba(15,35,58,0.06)]"
      delay={delay}
    >
      <div
        className="mb-5 grid size-12 place-items-center rounded-[8px] text-white"
        style={{ backgroundColor: certification.accent }}
      >
        <Icon name="award" className="size-5" />
      </div>
      <h3 className="font-heading text-lg font-black text-[var(--deep-blue)]">
        {certification.title}
      </h3>
      <p className="mt-2 text-sm font-semibold text-[rgba(15,35,58,0.66)]">
        {certification.focus}
      </p>
    </Reveal>
  );
}
