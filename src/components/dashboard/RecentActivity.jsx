import { Mail, Calendar, Search, Bell, FileText } from 'lucide-react'

const activities = [
  { icon: Mail, text: 'Sent follow-up email to Alex Chen', time: '2 min ago', color: 'text-primary bg-primary/10' },
  { icon: Calendar, text: 'Booked meeting for March 5th at 3 PM', time: '15 min ago', color: 'text-accent bg-accent/10' },
  { icon: Search, text: 'Researched competitor pricing trends', time: '1 hour ago', color: 'text-warning bg-warning/10' },
  { icon: Bell, text: 'Reminded you about Q1 report deadline', time: '3 hours ago', color: 'text-purple-400 bg-purple-400/10' },
  { icon: FileText, text: 'Summarized 23-page PDF contract', time: '5 hours ago', color: 'text-blue-400 bg-blue-400/10' },
]

export default function RecentActivity() {
  return (
    <div className="bg-surface rounded-xl border border-border p-6">
      <h3 className="text-sm font-medium text-text-secondary mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activity.color}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm">{activity.text}</p>
              <p className="text-text-muted text-xs mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
