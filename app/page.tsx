import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import KennzahlenStrip from '@/components/KennzahlenStrip'
import Features from '@/components/Features'
import DashboardSection from '@/components/DashboardSection'
import ROIKalkulator from '@/components/ROIKalkulator'
import UseCases from '@/components/UseCases'
import Referenzen from '@/components/Referenzen'
import IntegrationsRow from '@/components/IntegrationsRow'
import FAQ from '@/components/FAQ'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <KennzahlenStrip />
        <Features />
        <DashboardSection />
        <ROIKalkulator />
        <UseCases />
        <Referenzen />
        <IntegrationsRow />
        <FAQ />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
