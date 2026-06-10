import { featuredProjects } from "@/data/portfolio";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[var(--mist)] px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Featured Projects"
          title="Selected work across web systems, product design, games, and branding."
          description="A concise view of the projects and practical experience from my CV, focused on roles, tools, and what each work demonstrates."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              delay={index * 70}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
