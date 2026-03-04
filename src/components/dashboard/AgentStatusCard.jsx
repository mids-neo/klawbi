import Badge from '../common/Badge'

export default function AgentStatusCard() {
  const channels = [
    { name: 'WhatsApp', connected: true },
    { name: 'Telegram', connected: false },
    { name: 'Discord', connected: false },
  ]

  return (
    <div className="bg-surface rounded-xl border border-border p-6">
      <h3 className="text-sm font-medium text-text-secondary mb-4">Agent Status</h3>
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="font-semibold">Online</span>
        <span className="text-text-muted text-sm ml-1">— Klawbi</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {channels.map((ch) => (
          <Badge key={ch.name} variant={ch.connected ? 'success' : 'info'}>
            {ch.name} {ch.connected ? 'Connected' : ''}
          </Badge>
        ))}
      </div>
    </div>
  )
}
