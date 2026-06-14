import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/portfolio'

export function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-28 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-14">
        <SectionHeading
          title="About"
          description="I am a Computer Science Engineering student specializing in AI and ML, with hands-on experience in full-stack development, Generative AI, RAG pipelines, and cloud computing."
        />

        <p className="max-w-3xl text-base leading-8 text-white/70">{site.description}</p>
      </div>
    </section>
  )
}
