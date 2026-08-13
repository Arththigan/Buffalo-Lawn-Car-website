import { useState } from 'react'

export default function Contact() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section id="contact" className="px-3 py-16 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500">Contact</p>
          <h2 className="font-display mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Get your free quote
          </h2>
          <p className="mt-3 text-brand-800/70">
            Fill out the form below and we&rsquo;ll get back to you within one business day.
          </p>
        </div>

        {showForm ? (
          <div
            className="mt-10 overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-brand-900/10 sm:rounded-[36px]"
            style={{ height: 889 }}
          >
            <iframe
              src="https://link.kdlead.com/widget/form/nbKL6lXWss2EAlIIaPwG"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
              id="inline-nbKL6lXWss2EAlIIaPwG"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Buffalo Lawn Care"
              data-height="889"
              data-layout-iframe-id="inline-nbKL6lXWss2EAlIIaPwG"
              data-form-id="nbKL6lXWss2EAlIIaPwG"
              title="Buffalo Lawn Care quote request form"
            />
          </div>
        ) : (
          <div className="mt-10 rounded-[28px] bg-brand-50 px-6 py-12 text-center ring-1 ring-brand-900/10 sm:rounded-[36px] sm:py-16">
            <h3 className="font-display text-2xl font-extrabold text-brand-900">Ready for a better lawn?</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-brand-800">
              Open our secure quote form to share your property details and preferred service.
            </p>
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="mt-6 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700"
            >
              Load Secure Quote Form
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
