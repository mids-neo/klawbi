import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { dailyUsage, usageSummary, skillBreakdown } from '../data/mockUsage'
import UsageChart from '../components/dashboard/UsageChart'
import Card from '../components/common/Card'

const summaryCards = [
  { label: 'Total Messages', value: usageSummary.totalMessages.toLocaleString() },
  { label: 'Avg Per Day', value: usageSummary.avgPerDay.toString() },
  { label: 'Busiest Day', value: usageSummary.busiestDay.split('-')[2] + ' Mar' },
  { label: 'Skills Used', value: usageSummary.skillsUsed.toString() },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-border rounded-lg px-3 py-2 shadow-lg">
        <p className="text-white text-sm font-medium">{payload[0].payload.name}</p>
        <p className="text-text-secondary text-xs">{payload[0].value} messages</p>
      </div>
    )
  }
  return null
}

export default function UsagePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Usage Analytics</h1>
        <p className="text-text-secondary text-sm mt-1">Track your Klawbi usage and activity.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card) => (
          <Card key={card.label}>
            <p className="text-text-muted text-xs uppercase tracking-wide">{card.label}</p>
            <p className="text-2xl font-bold mt-1">{card.value}</p>
          </Card>
        ))}
      </div>

      <UsageChart data={dailyUsage} />

      <Card>
        <h3 className="text-sm font-medium text-text-secondary mb-6">Usage by Skill</h3>
        <div className="space-y-4">
          {skillBreakdown.map((skill) => {
            const maxVal = Math.max(...skillBreakdown.map((s) => s.value))
            const pct = (skill.value / maxVal) * 100
            return (
              <div key={skill.name} className="flex items-center gap-4">
                <span className="text-sm text-text-secondary w-28 shrink-0">{skill.name}</span>
                <div className="flex-1 h-6 bg-background rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-sm font-medium w-12 text-right">{skill.value}</span>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
