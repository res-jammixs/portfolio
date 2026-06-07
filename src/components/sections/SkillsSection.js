import { skillGroups } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/ui/SkillCard";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative px-5 py-24 md:px-8 md:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(124,152,133,0.16))]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Skills"
          title="A practical stack for design, web systems, and games."
          description="Short, focused skill groups that cover the tools and programming areas I currently use while learning and building."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
