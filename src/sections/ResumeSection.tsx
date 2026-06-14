import { SectionHeading } from '../components/SectionHeading'
import { ResumePreview } from '../components/ResumePreview'
import { site } from '../data/portfolio'

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell scroll-mt-28 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-14">
        <SectionHeading
          title="Resume"
          description="Download my latest resume."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Download</p>
              <h3 className="text-3xl font-medium text-white">Sakshi Kumari Resume</h3>
              <p className="max-w-2xl text-sm leading-7 text-white/65">Download my latest resume.</p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.resumePath}
                  download="Sakshi_Kumari_Resume.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Download Resume
                </a>
                <a
                  href={site.resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black"
                >
                  Open Preview
                </a>
              </div>
            </div>
          </div>

          <ResumePreview name={site.name} title={site.title} />
        </div>
      </div>
    </section>
  )
}
