import * as Icons from 'lucide-react'
import Toggle from '../common/Toggle'
import Badge from '../common/Badge'

export default function SkillCard({ skill, onToggle, currentPlan }) {
  const IconComponent = Icons[skill.icon] || Icons.Zap

  const tierOrder = { free: 0, starter: 1, pro: 2, business: 3 }
  const planOrder = tierOrder[currentPlan] ?? 2
  const skillOrder = tierOrder[skill.tier] ?? 0
  const locked = skillOrder > planOrder

  return (
    <div className={`bg-surface rounded-xl border border-border p-5 transition-all duration-200 hover:border-primary/30 ${locked ? 'opacity-60' : ''}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <IconComponent className="w-5 h-5 text-primary" />
        </div>
        {locked ? (
          <Badge variant="warning">{skill.tier}</Badge>
        ) : (
          <Toggle enabled={skill.enabled} onChange={() => onToggle(skill.id)} />
        )}
      </div>
      <h3 className="font-medium text-sm mb-1">{skill.name}</h3>
      <p className="text-text-muted text-xs">{skill.description}</p>
    </div>
  )
}
