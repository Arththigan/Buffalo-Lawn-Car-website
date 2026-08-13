import { site } from '../data/site'
import { IconPhone } from './icons'

export default function CTA() {
  return (
    <section className="px-3 pb-4 sm:px-4 lg:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-[28px] bg-brand-600 px-6 py-12 text-center shadow-sm sm:rounded-[36px] sm:px-10 sm:py-16 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Ready for a lawn your neighbors will notice?
          </h2>
          <p className="mt-3 max-w-lg text-brand-50/90">
            Get a free, flat-rate quote today — most homeowners hear back within one business day.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-700 transition hover:bg-brand-50"
          >
            Get Free Quote
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <IconPhone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
