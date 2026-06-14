import { Card } from '../components/Card'
import { SectionHeading } from '../components/SectionHeading'
import { education } from '../data/portfolio'

export function EducationSection() {
  return (
    <section id="education" className="section-shell scroll-mt-28 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-14">
        <SectionHeading title="Education" />

        <div className="space-y-6">
          {education.map((item) => (
            <Card key={item.degree} className="relative overflow-hidden pl-8">
              <span className="absolute left-6 top-8 h-2.5 w-2.5 rounded-full border border-white bg-white" aria-hidden="true" />
              <span className="absolute left-[2.05rem] top-0 h-full w-px bg-white/10" aria-hidden="true" />

              <div className="space-y-3">
                <h3 className="text-2xl font-medium text-white">{item.degree}</h3>
                <p className="text-base text-white/70">{item.institution}</p>
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">{item.period}</p>
                <p className="max-w-2xl text-sm leading-7 text-white/60">{item.summary}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
