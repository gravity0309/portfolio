import { SectionHeading } from '../components/SectionHeading'
import { SkillCard } from '../components/SkillCard'
import { skills } from '../data/portfolio'

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell scroll-mt-28 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-14">
        <SectionHeading title="Skills" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <SkillCard key={group.category} category={group.category} items={group.items} />
          ))}
        </div>
      </div>
    </section>
  )
}
