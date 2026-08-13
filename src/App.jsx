import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === '/privacy-policy') return <PrivacyPolicy />
  if (path === '/terms-and-conditions') return <TermsConditions />

  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <WhyUs />
      <FAQ />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
