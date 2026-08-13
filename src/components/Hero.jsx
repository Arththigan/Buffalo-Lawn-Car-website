import Navbar from './Navbar'
import { IconArrow, IconCalendar, IconFilter, IconRuler, IconSparkle, IconStar } from './icons'

const HERO_IMG =
  '/images/buffalo-lawn-care-hero.avif'
const CARD_IMG_BACK =
  'https://images.unsplash.com/photo-1622122123829-e0490a288d04?q=50&w=600&auto=format&fit=crop&fm=avif'
const CARD_IMG_FRONT =
  'https://images.unsplash.com/photo-1590820292118-e256c3ac2676?q=50&w=600&auto=format&fit=crop&fm=avif'

export default function Hero() {
  return (
    <section id="top" className="px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6 lg:pt-6">
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-50 via-cream to-brand-100 shadow-xl shadow-brand-900/5 ring-1 ring-brand-900/10 sm:rounded-[36px]">
        <Navbar />

        <div className="grid gap-5 px-4 pb-5 sm:px-6 sm:pb-6 lg:grid-cols-[1.55fr_1fr] lg:gap-6 lg:px-6 lg:pb-6">
          {/* Left: photo hero */}
          <div className="relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-[22px] sm:min-h-[520px] sm:rounded-[28px]">
            <img
              src={HERO_IMG}
              alt="Professional lawn care specialist mowing a freshly striped lawn"
              width="1774"
              height="887"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-transparent to-cream/10" />

            <div className="relative px-2 pt-6 sm:px-4 sm:pt-8">
              <h1 className="font-display max-w-xl text-[42px] font-black uppercase leading-[0.95] tracking-tight text-brand-900 sm:text-[56px] lg:text-[64px]">
                Revive Your Lawn&rsquo;s Natural Beauty
              </h1>
              <p className="mt-4 max-w-sm text-[15px] font-medium leading-relaxed text-brand-800/80 sm:text-base">
                Reliable mowing, trimming and full-service lawn care for homes across Clarence
                Center and Western New York.
              </p>
            </div>

            <div className="relative px-2 pb-2 sm:px-4 sm:pb-4">
              <div className="flex flex-wrap items-stretch gap-2 rounded-2xl bg-white/95 p-2.5 shadow-lg shadow-brand-900/10 ring-1 ring-brand-900/5 backdrop-blur sm:gap-0 sm:rounded-full sm:p-2">
                <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 sm:rounded-none sm:px-4">
                  <IconCalendar className="h-5 w-5 shrink-0 text-brand-600" />
                  <div className="leading-tight">
                    <p className="text-[11px] font-semibold text-brand-700/60">Service date</p>
                    <p className="text-sm font-bold text-brand-900">Aug 15</p>
                  </div>
                </div>
                <span className="hidden w-px self-center bg-brand-900/10 sm:block sm:h-8" />
                <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 sm:rounded-none sm:px-4">
                  <IconRuler className="h-5 w-5 shrink-0 text-brand-600" />
                  <div className="leading-tight">
                    <p className="text-[11px] font-semibold text-brand-700/60">Lawn size</p>
                    <p className="text-sm font-bold text-brand-900">0.25 acre</p>
                  </div>
                </div>
                <span className="hidden w-px self-center bg-brand-900/10 sm:block sm:h-8" />
                <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 sm:rounded-none sm:px-4">
                  <IconFilter className="h-5 w-5 shrink-0 text-brand-600" />
                  <div className="leading-tight">
                    <p className="text-[11px] font-semibold text-brand-700/60">Service</p>
                    <p className="text-sm font-bold text-brand-900">Mowing</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="ml-auto flex items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700 sm:rounded-full"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>

          {/* Right: plan panel */}
          <div className="flex flex-col rounded-[22px] bg-white p-4 shadow-sm ring-1 ring-brand-900/10 sm:rounded-[28px] sm:p-5">
            <div className="flex items-start justify-between">
              <p className="font-display max-w-[11rem] text-sm font-extrabold uppercase leading-snug tracking-wide text-brand-900">
                Choose a plan for your best lawn
              </p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  aria-label="Previous plan"
                  className="grid h-8 w-8 place-items-center rounded-full ring-1 ring-brand-900/15 text-brand-700 transition hover:bg-brand-50"
                >
                  <IconArrow direction="left" className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next plan"
                  className="grid h-8 w-8 place-items-center rounded-full bg-brand-600 text-white transition hover:bg-brand-700"
                >
                  <IconArrow direction="right" className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative mt-5 flex-1">
              <div className="absolute inset-x-3 top-2 aspect-[4/5] -rotate-6 overflow-hidden rounded-3xl shadow-md">
                <img src={CARD_IMG_BACK} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" aria-hidden="true" />
              </div>
              <div className="relative aspect-[4/5] translate-x-3 rotate-3 overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
                <img
                  src={CARD_IMG_FRONT}
                  alt="Manicured backyard lawn after service"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-brand-900 shadow">
                  <IconSparkle className="h-3.5 w-3.5 text-brand-600" />
                  Freshly cut
                </span>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-1 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-3.5 w-3.5" />
                ))}
                <span className="ml-1 text-xs font-semibold text-brand-800/80">4.9 (210 reviews)</span>
              </div>
              <h2 className="font-display mt-2 text-2xl font-extrabold uppercase tracking-tight text-brand-900">
                Full Service
              </h2>
              <div className="mt-1 flex items-end justify-between">
                <p className="text-sm font-medium text-brand-800/80">Weekly &middot; Front &amp; back yard</p>
                <a href="#contact" className="text-sm font-extrabold text-brand-700 hover:text-brand-900">
                  Request a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
