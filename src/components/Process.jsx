const steps = [
  {
    n: '01',
    title: 'Request a quote',
    desc: 'Share your address and lawn size — we send a flat-rate quote within one business day.',
  },
  {
    n: '02',
    title: 'Get scheduled',
    desc: 'Pick a recurring visit day that fits your week. We match you with your local crew.',
  },
  {
    n: '03',
    title: 'We take care of it',
    desc: 'Mowing, edging and cleanup handled rain or shine, without you lifting a finger.',
  },
  {
    n: '04',
    title: 'Enjoy your yard',
    desc: 'Relax with a lawn that always looks freshly cut and guest-ready.',
  },
]

export default function Process() {
  return (
    <section id="process" className="px-3 py-16 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500">How it works</p>
          <h2 className="font-display mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Four steps to a lawn you&rsquo;ll love
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-900/10">
              <span className="font-display text-3xl font-extrabold text-brand-100">{s.n}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-brand-900">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-800/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
