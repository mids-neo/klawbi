import { Link } from 'react-router-dom'
import { MessageSquare, Zap, BarChart3, CreditCard } from 'lucide-react'

const actions = [
  { label: 'Chat with Klawbi', icon: MessageSquare, href: '/dashboard/agent', color: 'text-primary bg-primary/10' },
  { label: 'Manage Skills', icon: Zap, href: '/dashboard/skills', color: 'text-accent bg-accent/10' },
  { label: 'View Usage', icon: BarChart3, href: '/dashboard/usage', color: 'text-warning bg-warning/10' },
  { label: 'Upgrade Plan', icon: CreditCard, href: '/dashboard/billing', color: 'text-purple-400 bg-purple-400/10' },
]

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {actions.map((action) => (
        <Link
          key={action.label}
          to={action.href}
          className="bg-surface rounded-xl border border-border p-4 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 group"
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${action.color}`}>
            <action.icon className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium group-hover:text-white transition-colors">{action.label}</span>
        </Link>
      ))}
    </div>
  )
}
