import { type FormEvent } from 'react'
import { Card } from '../components/Card'
import { SectionHeading } from '../components/SectionHeading'
import { socialLinks, site } from '../data/portfolio'
import { useContactForm } from '../hooks/useContactForm'

export function ContactSection() {
  const { values, errors, submitted, handleChange, handleSubmit } = useContactForm()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleSubmit()
  }

  return (
    <section id="contact" className="section-shell scroll-mt-28 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-14">
        <SectionHeading
          title="Contact"
          description="Feel free to reach out for internships, collaborations, or project discussions."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Reach out</p>
              <h3 className="mt-3 text-2xl font-medium text-white">{site.name}</h3>
            </div>

            <div className="space-y-4 text-sm text-white/70">
              <p>
                <span className="block text-white/45">Email</span>
                <a href={`mailto:${site.email}`} className="mt-1 inline-block text-white transition-colors duration-200 hover:underline">
                  {site.email}
                </a>
              </p>
              <p>
                <span className="block text-white/45">LinkedIn</span>
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="mt-1 inline-block text-white transition-colors duration-200 hover:underline">
                  View profile
                </a>
              </p>
              <p>
                <span className="block text-white/45">GitHub</span>
                <a href={site.github} target="_blank" rel="noreferrer" className="mt-1 inline-block text-white transition-colors duration-200 hover:underline">
                  Browse repositories
                </a>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-white/60">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 hover:bg-white hover:text-black">
                  {link.label}
                </a>
              ))}
            </div>
          </Card>

          <Card>
            <form className="space-y-5" onSubmit={onSubmit} noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-white/70">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-white/30"
                  placeholder="Your name"
                />
                {errors.name ? <p className="mt-2 text-sm text-white/50">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-white/30"
                  placeholder="you@example.com"
                />
                {errors.email ? <p className="mt-2 text-sm text-white/50">{errors.email}</p> : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-white/30"
                  placeholder="Tell me about the opportunity or project idea."
                />
                {errors.message ? <p className="mt-2 text-sm text-white/50">{errors.message}</p> : null}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Send Message
                </button>
                {submitted ? <p className="text-sm text-white/60">Thanks for reaching out. Your message is ready to send.</p> : null}
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
