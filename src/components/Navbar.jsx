import { useState } from 'react'
import { site } from '../data/site'
import { IconMenu, IconClose, IconPhone } from './icons'
import BrandLogo from './BrandLogo'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-900/10 bg-cream/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5">
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-semibold text-brand-800/80 transition hover:text-brand-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-brand-900 shadow-sm ring-1 ring-brand-900/10 transition hover:ring-brand-900/20 sm:flex"
          >
            <IconPhone className="h-4 w-4 text-brand-600" />
            {site.phoneDisplay}
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-900 shadow-sm ring-1 ring-brand-900/10 lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mb-4 max-w-7xl rounded-2xl bg-white p-4 shadow-lg ring-1 ring-brand-900/10 lg:hidden sm:mx-8">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-brand-900 hover:bg-brand-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-1 flex items-center gap-2 rounded-xl bg-brand-600 px-3 py-2.5 text-sm font-bold text-white"
            >
              <IconPhone className="h-4 w-4" />
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
    <div className="h-[72px] sm:h-[80px]" aria-hidden="true" />
    </>
  )
}
