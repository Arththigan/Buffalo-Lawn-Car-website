import { useState } from 'react'
import { IconArrow } from './icons'

const faqs = [
  {
    q: 'How much does lawn care cost?',
    a: 'Pricing depends on your lawn size, service frequency, and selected services. We provide a clear custom quote before your first visit — no surprises.',
  },
  {
    q: 'Do I need to sign a contract?',
    a: 'No. Our Basic Mow plan is pay-per-visit with zero commitment, and our monthly plans can be paused or cancelled anytime with a quick call or text.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Clarence Center and the surrounding Western New York communities, including Amherst, Williamsville and Clarence. Not sure if you’re in range? Give us a call and we’ll check.',
  },
  {
    q: 'What happens if it rains on my service day?',
    a: 'We reschedule automatically to the next available dry day at no extra charge — that’s part of every plan.',
  },
  {
    q: 'Can I switch or cancel my plan anytime?',
    a: 'Yes. Upgrade, downgrade or cancel whenever you like. There are no long-term contracts or cancellation fees.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="px-3 py-16 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500">FAQ</p>
          <h2 className="font-display mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl bg-white ring-1 ring-brand-900/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="font-display text-[15px] font-bold text-brand-900 sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  >
                    <IconArrow className="h-3.5 w-3.5" />
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-brand-800/70 sm:px-6">{item.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
