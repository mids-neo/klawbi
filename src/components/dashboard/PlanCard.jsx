import { Check } from 'lucide-react'
import Button from '../common/Button'
import Badge from '../common/Badge'

export default function PlanCard({ plan, isCurrentPlan, onUpgrade }) {
  return (
    <div className={`relative rounded-xl border p-6 flex flex-col transition-all duration-200 ${
      plan.popular
        ? 'bg-surface border-primary shadow-lg shadow-primary/10'
        : isCurrentPlan
        ? 'bg-surface border-accent'
        : 'bg-surface border-border hover:border-primary/30'
    }`}>
      {plan.popular && !isCurrentPlan && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      {isCurrentPlan && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
            Current Plan
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold">{plan.name}</h3>
      <div className="mt-2 mb-4">
        <span className="text-3xl font-bold">${plan.price}</span>
        {plan.price > 0 && <span className="text-text-muted">/mo</span>}
      </div>

      <ul className="space-y-2 mb-6 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
            <span className="text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      {isCurrentPlan ? (
        <Button variant="ghost" className="w-full justify-center" disabled>
          Current Plan
        </Button>
      ) : (
        <Button
          variant={plan.popular ? 'primary' : 'secondary'}
          className="w-full justify-center"
          onClick={() => onUpgrade(plan.id)}
        >
          Upgrade
        </Button>
      )}
    </div>
  )
}
