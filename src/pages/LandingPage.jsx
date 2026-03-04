import Hero from '../components/landing/Hero'
import ProblemSection from '../components/landing/ProblemSection'
import FeaturesGrid from '../components/landing/FeaturesGrid'
import ComparisonTable from '../components/landing/ComparisonTable'
import PricingSection from '../components/landing/PricingSection'
import WaitlistCTA from '../components/landing/WaitlistCTA'

export default function LandingPage() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <ProblemSection />
      <FeaturesGrid />
      <ComparisonTable />
      <PricingSection />
      <WaitlistCTA />
    </div>
  )
}
