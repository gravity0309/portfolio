import { navItems, site } from '../data/portfolio'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
        <a href="#hero" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white text-sm font-semibold text-black transition-transform duration-300 group-hover:scale-95">
            SK
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{site.name}</p>
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Portfolio</p>
          </div>
        </a>

        <nav aria-label="Primary" className="hidden gap-7 text-sm text-white/65 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors duration-200 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.resumePath}
          download="Sakshi_Kumari_Resume.pdf"
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:border-white/30 hover:bg-white hover:text-black"
        >
          Resume
        </a>
      </div>
    </header>
  )
}