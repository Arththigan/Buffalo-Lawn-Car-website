import { IconDroplet, IconFilter, IconMower, IconSparkle } from './icons'

const services = [
  {
    icon: IconMower,
    title: 'Lawn Mowing',
    desc: 'Weekly or bi-weekly mowing with crisp edging on every visit.',
  },
  {
    icon: IconFilter,
    title: 'Trimming & Edging',
    desc: 'Clean lines along beds, walkways and fences for a tidy finish.',
  },
  {
    icon: IconDroplet,
    title: 'Fertilization',
    desc: 'Season-long feeding programs that keep grass thick and green.',
  },
  {
    icon: IconSparkle,
    title: 'Seasonal Cleanup',
    desc: 'Leaf removal, dethatching and prep for spring and fall.',
  },
]

export default function Services() {
  return (
    <section id="services" className="px-3 py-16 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500">What we do</p>
          <h2 className="font-display mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Full-service lawn care for every season
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-900/10 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-brand-900">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-800/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
