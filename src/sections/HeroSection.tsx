import { site } from '../data/portfolio'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
      <div className="absolute inset-0 -z-10 hero-pattern opacity-60" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full border border-white/10 blur-3xl" aria-hidden="true" />

      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">{site.name}</h1>
            <p className="max-w-3xl text-xl font-medium leading-8 text-white/80 sm:text-2xl">{site.title}</p>
            <p className="max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Computer Science student building full-stack applications, AI-powered products, and practical software solutions.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href={site.resumePath}
              download="Sakshi_Kumari_Resume.pdf"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
