import Footer from './Footer'
import { IconArrow } from './icons'
import BrandLogo from './BrandLogo'

export default function LegalPage({ title, effectiveDate, updatedDate, children }) {
  return (
    <div className="min-h-screen bg-cream px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-50 via-cream to-brand-100 shadow-xl shadow-brand-900/5 ring-1 ring-brand-900/10 sm:rounded-[36px]">
        <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
          <a href="/" className="flex shrink-0 items-center gap-2.5">
            <BrandLogo />
          </a>
          <a href="/" className="flex items-center gap-2 text-sm font-bold text-brand-700 transition hover:text-brand-900">
            <IconArrow direction="left" className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </a>
        </div>
        <header className="px-6 pb-10 pt-6 text-center sm:px-10 sm:pb-14 sm:pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">Legal</p>
          <h1 className="font-display mt-3 text-4xl font-black uppercase tracking-tight text-brand-900 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-sm font-medium text-brand-800/60">
            Effective Date: {effectiveDate} <span className="mx-2">|</span> Last Updated: {updatedDate}
          </p>
        </header>
      </div>

      <main className="mx-auto my-6 max-w-4xl rounded-[28px] bg-white px-6 py-8 shadow-sm ring-1 ring-brand-900/10 sm:px-10 sm:py-12">
        <article className="legal-copy">{children}</article>
      </main>

      <Footer />
    </div>
  )
}
