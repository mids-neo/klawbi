import { MessageSquare, Zap, Brain, Bell, Plug, Moon } from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'Lives Where You Are',
    description: 'WhatsApp, Telegram, Discord. No new app needed. Chat naturally in the apps you already use.',
  },
  {
    icon: Zap,
    title: 'Actually Executes',
    description: 'Sends emails, books meetings, files reports. Not just suggestions — real actions, done.',
  },
  {
    icon: Brain,
    title: 'Remembers Everything',
    description: 'Persistent memory across sessions. Knows your preferences, projects, and contacts.',
  },
  {
    icon: Bell,
    title: 'Proactive Notifications',
    description: 'Alerts you about deadlines, new leads, important events. Reaches out to you first.',
  },
  {
    icon: Plug,
    title: 'Skills Marketplace',
    description: 'Toggle on capabilities: web search, calendar, CRM, email, file processing, and more.',
  },
  {
    icon: Moon,
    title: '24/7 Always On',
    description: 'Works while you sleep. Monitors, automates, and handles incoming requests around the clock.',
  },
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Everything you need. <span className="text-primary">Nothing you don't.</span>
        </h2>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          Klawbi comes loaded with powerful capabilities that work together seamlessly.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-surface rounded-xl border border-border p-6 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
