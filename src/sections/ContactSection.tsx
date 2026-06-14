import { Card } from '../components/Card'
import { SectionHeading } from '../components/SectionHeading'
import { socialLinks, site } from '../data/portfolio'

const contactLinks = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: 'LinkedIn',
    value: 'View profile',
    href: site.linkedin,
  },
  {
    label: 'GitHub',
    value: 'Browse repositories',
    href: site.github,
  },
] as const

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-shell scroll-mt-28 px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-12">
        <div className="flex justify-center text-center">
          <SectionHeading
            title="Contact"
            description="Feel free to reach out for internships, collaborations, or project discussions."
          />
        </div>

        <Card className="w-full max-w-2xl space-y-8 text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Reach out
            </p>
            <h3 className="mt-3 text-2xl font-medium text-white">
              {site.name}
            </h3>
          </div>

          <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-3">
            {contactLinks.map((link) => (
              <p key={link.label} className="min-w-0">
                <span className="block text-white/45">{link.label}</span>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  className="mt-1 block truncate text-white hover:underline"
                >
                  {link.value}
                </a>
              </p>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm text-white/60">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="rounded-full border border-white/10 px-4 py-2 hover:bg-white hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
