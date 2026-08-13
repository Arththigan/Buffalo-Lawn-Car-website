import { IconCheck } from './icons'

const points = [
  'Licensed, insured & background-checked crews',
  'Flat-rate pricing with no surprise fees',
  'Same-crew consistency on every visit',
  'Rain-or-shine scheduling guarantee',
]

const stats = [
  { value: '12+', label: 'Years serving WNY' },
  { value: '850+', label: 'Lawns maintained' },
  { value: '4.9★', label: 'Average rating' },
]

const IMG =
  'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=50&w=700&auto=format&fit=crop&fm=avif'

export default function WhyUs() {
  return (
    <section id="why-us" className="px-3 py-16 sm:px-4 lg:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-[28px] shadow-sm ring-1 ring-brand-900/10">
          <img src={IMG} alt="Lush green lawn maintained by Buffalo Lawn Care" loading="lazy" decoding="async" className="h-80 w-full object-cover sm:h-96" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur sm:right-auto sm:min-w-[260px]">
            {stats.map((s) => (
              <div key={s.label} className="flex-1 text-center">
                <p className="font-display text-xl font-extrabold text-brand-900">{s.value}</p>
                <p className="text-[11px] font-semibold leading-tight text-brand-800/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500">Why Buffalo Lawn Care</p>
          <h2 className="font-display mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Local crews who treat your yard like their own
          </h2>
          <p className="mt-4 max-w-lg text-brand-800/70">
            We&rsquo;re a Clarence Center based team dedicated to keeping neighborhoods across
            Western New York looking their best, one lawn at a time.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-brand-900/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
