import { skillGroups } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/ui/SkillCard";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative bg-white px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Skills"
          title="Capabilities that connect design, development, testing, and delivery."
          description="Grouped from my CV into practical areas: frontend, backend, UI/UX, SQAE, game development, and developer tooling."
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
