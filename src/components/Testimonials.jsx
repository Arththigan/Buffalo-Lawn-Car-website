import { IconStar } from './icons'

const reviews = [
  {
    name: 'Jessica M.',
    location: 'Clarence Center, NY',
    quote:
      'Buffalo Lawn Care has mowed our yard every week for two seasons. Always on time and the lines are perfectly crisp.',
  },
  {
    name: 'Daniel R.',
    location: 'Amherst, NY',
    quote:
      'Great communication and fair, flat-rate pricing. Our lawn has never looked this healthy going into summer.',
  },
  {
    name: 'Priya S.',
    location: 'Williamsville, NY',
    quote:
      'Booked the full-service plan for spring cleanup and fertilization — the difference in two months was incredible.',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="px-3 py-16 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500">Reviews</p>
          <h2 className="font-display mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Trusted by homeowners across Western New York
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-900/10">
              <div className="flex gap-1 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-900/80">&ldquo;{r.quote}&rdquo;</p>
              <div className="mt-5">
                <p className="text-sm font-bold text-brand-900">{r.name}</p>
                <p className="text-xs font-medium text-brand-800/50">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
