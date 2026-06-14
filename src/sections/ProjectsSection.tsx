import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/portfolio'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell scroll-mt-28 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-14">
        <SectionHeading
          title="Projects"
          description="Selected projects showcasing full-stack development, AI integration, and problem-solving."
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
