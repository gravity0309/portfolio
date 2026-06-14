import type { Project } from '../data/portfolio'
import { Card } from './Card'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.status === 'coming-soon'

  return (
    <Card className="flex h-full flex-col justify-between">
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-medium text-white">{project.name}</h3>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/45">
            {isComingSoon ? 'Future Project' : 'Featured'}
          </span>
        </div>

        <p className="text-sm leading-7 text-white/65">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/75">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black"
          >
            GitHub
          </a>
        ) : null}

        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black"
          >
            Live Demo
          </a>
        ) : (
          <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/40">Live Demo Soon</span>
        )}
      </div>
    </Card>
  )
}