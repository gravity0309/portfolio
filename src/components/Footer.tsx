import { navItems, socialLinks, site } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:px-8 lg:px-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-white">{site.name}</p>
          <p className="mt-2 text-sm text-white/50">© 2026 {site.name}. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-white/60">
          {navItems.slice(0, 3).map((item) => (
            <a key={item.href} href={item.href} className="transition-colors duration-200 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-white/60">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}