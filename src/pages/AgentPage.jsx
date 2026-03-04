import { useState, useEffect } from 'react'
import { Bot, MessageSquare, Send } from 'lucide-react'
import Card from '../components/common/Card'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import Toggle from '../components/common/Toggle'
import Badge from '../components/common/Badge'
import { defaultAgent } from '../data/mockUser'

const personas = ['Professional', 'Friendly', 'Snarky', 'Custom']
const avatars = ['default', 'robot', 'brain', 'star']

export default function AgentPage() {
  const [agent, setAgent] = useState(() => {
    const saved = localStorage.getItem('klawbi_agent')
    return saved ? JSON.parse(saved) : defaultAgent
  })

  useEffect(() => {
    localStorage.setItem('klawbi_agent', JSON.stringify(agent))
  }, [agent])

  const updateAgent = (updates) => {
    setAgent((prev) => ({ ...prev, ...updates }))
  }

  const toggleChannel = (channel) => {
    setAgent((prev) => ({
      ...prev,
      channels: { ...prev.channels, [channel]: !prev.channels[channel] },
    }))
  }

  const channels = [
    {
      key: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageSquare,
      description: 'Connect via WhatsApp Business API',
      connected: agent.channels.whatsapp,
    },
    {
      key: 'telegram',
      name: 'Telegram',
      icon: Send,
      description: 'Connect your Telegram bot',
      connected: agent.channels.telegram,
    },
    {
      key: 'discord',
      name: 'Discord',
      icon: MessageSquare,
      description: 'Add to your Discord server',
      connected: agent.channels.discord,
    },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Agent Configuration</h1>
        <p className="text-text-secondary text-sm mt-1">Customize your AI assistant's personality and connections.</p>
      </div>

      <Card>
        <h2 className="text-lg font-semibold mb-6">Agent Profile</h2>

        <div className="flex items-start gap-6 mb-6">
          <div className="flex flex-wrap gap-3">
            {avatars.map((av) => (
              <button
                key={av}
                onClick={() => updateAgent({ avatar: av })}
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all ${
                  agent.avatar === av ? 'border-primary bg-primary/20' : 'border-border bg-surface hover:border-primary/30'
                }`}
              >
                <Bot className={`w-6 h-6 ${agent.avatar === av ? 'text-primary' : 'text-text-muted'}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Agent Name"
            value={agent.name}
            onChange={(e) => updateAgent({ name: e.target.value })}
            placeholder="e.g., Klawbi"
          />
          <div>
            <label className="block text-text-secondary text-sm mb-1.5">Persona</label>
            <select
              value={agent.persona}
              onChange={(e) => updateAgent({ persona: e.target.value })}
              className="w-full bg-surface border border-border rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-white transition appearance-none"
            >
              {personas.map((p) => (
                <option key={p} value={p.toLowerCase()}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-text-secondary text-sm mb-1.5">System Prompt / Bio</label>
          <textarea
            value={agent.bio}
            onChange={(e) => updateAgent({ bio: e.target.value })}
            placeholder="Describe how your agent should behave..."
            rows={3}
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-white placeholder:text-text-muted transition resize-none"
          />
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold mb-6">Connected Channels</h2>
        <div className="space-y-4">
          {channels.map((ch) => (
            <div key={ch.key} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ch.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{ch.name}</span>
                    <Badge variant={ch.connected ? 'success' : 'info'}>
                      {ch.connected ? 'Connected' : 'Not connected'}
                    </Badge>
                  </div>
                  <p className="text-text-muted text-xs mt-0.5">{ch.description}</p>
                </div>
              </div>
              <Toggle enabled={ch.connected} onChange={() => toggleChannel(ch.key)} />
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-end">
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  )
}
