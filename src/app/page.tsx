import { HeroSection, StatsSection, MoatsSection, PricingSection, CTASection } from './page-client'
import { CertificationsSection } from './CertificationsSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <MoatsSection />
      <CertificationsSection />
      <PricingSection />
      <CTASection />
    </main>
  )
}
