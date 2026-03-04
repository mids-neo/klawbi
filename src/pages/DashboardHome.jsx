import WelcomeCard from '../components/dashboard/WelcomeCard'
import UsageMeter from '../components/common/UsageMeter'
import AgentStatusCard from '../components/dashboard/AgentStatusCard'
import QuickActions from '../components/dashboard/QuickActions'
import RecentActivity from '../components/dashboard/RecentActivity'

export default function DashboardHome() {
  return (
    <div className="space-y-6 animate-fade-in">
      <WelcomeCard />

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-surface rounded-xl border border-border p-6 flex flex-col items-center">
          <h3 className="text-sm font-medium text-text-secondary mb-4 self-start">Message Usage</h3>
          <UsageMeter used={342} total={2000} />
        </div>
        <div className="lg:col-span-1">
          <AgentStatusCard />
        </div>
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-text-secondary mb-3">Quick Actions</h3>
        <QuickActions />
      </div>
    </div>
  )
}
