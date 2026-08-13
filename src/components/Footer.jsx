import { site } from '../data/site'
import { IconLeaf, IconMail, IconPhone, IconPin } from './icons'

export default function Footer() {
  return (
    <footer id="contact" className="px-3 pb-4 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-brand-900 text-cream sm:rounded-[36px]">
        <div className="grid gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-600 text-cream">
                <IconLeaf className="h-5 w-5" />
              </span>
              <span className="font-display text-base font-extrabold tracking-[0.12em]">
                BUFFALO LAWN CARE
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Professional lawn mowing, trimming and landscaping for homes across Clarence Center
              and Western New York.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-cream/40">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2.5 text-cream/80 hover:text-cream">
                  <IconPhone className="h-4 w-4 shrink-0 text-brand-300" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 break-all text-cream/80 hover:text-cream"
                >
                  <IconMail className="h-4 w-4 shrink-0 text-brand-300" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-cream/80">
                <IconPin className="h-4 w-4 shrink-0 text-brand-300" />
                <span>
                  {site.addressLine1}
                  <br />
                  {site.addressLine2}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-cream/40">Get a free quote</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Tell us about your property and we&rsquo;ll send a flat-rate quote within one
              business day.
            </p>
            <a
              href={site.phoneHref}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-brand-900 transition hover:bg-brand-400"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 px-6 py-5 text-xs text-cream/40 sm:flex-row sm:px-10">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex items-center gap-5">
            <a href="/privacy-policy" className="transition hover:text-cream">Privacy Policy</a>
            <a href="/terms-and-conditions" className="transition hover:text-cream">Terms &amp; Conditions</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
