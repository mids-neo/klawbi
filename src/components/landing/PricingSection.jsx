import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: '',
    description: 'Try Klawbi with basic features',
    features: ['50 messages/month', '3 basic skills', '1 channel', '7-day memory'],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    id: 'starter',
    name: 'Starter',
    price: 9,
    period: '/mo',
    description: 'For personal productivity',
    features: ['500 messages/month', '10 skills', '1 channel', '30-day memory'],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    period: '/mo',
    description: 'For power users & solopreneurs',
    features: ['2,000 messages/month', 'All skills', '3 channels', 'Unlimited memory', 'Priority support'],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: 79,
    period: '/mo',
    description: 'For teams & agencies',
    features: ['Unlimited messages', 'All + Custom skills', 'Unlimited channels', 'Unlimited memory', 'Up to 5 team members', 'White label (+$49/mo)'],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple, transparent <span className="text-primary">pricing</span>
        </h2>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          Start free. Upgrade when you're ready. No hidden fees.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl border p-6 flex flex-col transition-all duration-200 hover:-translate-y-0.5 ${
                plan.popular
                  ? 'bg-surface border-primary shadow-lg shadow-primary/10'
                  : 'bg-surface border-border hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-text-muted text-sm mt-1">{plan.description}</p>

              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.period && <span className="text-text-muted">{plan.period}</span>}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/signup" className="block">
                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
