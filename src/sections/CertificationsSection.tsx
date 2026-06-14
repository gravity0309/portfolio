import { certifications } from '../data/portfolio'

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="border-t border-white/10 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white/50">
            Certifications
          </p>

          <h2 className="text-4xl font-semibold">
            Professional Certifications
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => (
            <div
              key={certification}
              className="rounded-2xl border border-white/10 p-5 transition hover:border-white/30"
            >
              {certification}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}