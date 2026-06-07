import Reveal from "@/components/animation/Reveal";
import Icon from "@/components/ui/Icon";
import Tag from "@/components/ui/Tag";

export default function SkillCard({ skill, delay = 0 }) {
  return (
    <Reveal
      className="group rounded-[8px] border border-white/60 bg-white/45 p-5 shadow-[0_18px_40px_rgba(3,63,99,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/70"
      delay={delay}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="grid size-12 place-items-center rounded-[8px] bg-[var(--deep-blue)] text-[var(--cream)] shadow-[0_14px_28px_rgba(3,63,99,0.18)]">
          <Icon name={skill.icon} className="size-5" />
        </div>
        <span className="mt-1 size-2 rounded-full bg-[var(--sage)] transition group-hover:bg-[var(--teal)]" />
      </div>

      <h3 className="font-heading text-xl font-black text-[var(--deep-blue)]">
        {skill.title}
      </h3>
      <p className="mt-3 min-h-16 text-sm leading-7 text-[rgba(9,47,69,0.68)]">
        {skill.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </Reveal>
  );
}
