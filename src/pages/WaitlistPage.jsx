import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
import Input from '../components/common/Input'

const useCases = [
  'Personal Assistant',
  'Business Automation',
  'Customer Support',
  'Developer Tools',
  'Other',
]

export default function WaitlistPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', useCase: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const existing = JSON.parse(localStorage.getItem('klawbi_waitlist') || '[]')
    existing.push({ ...form, joinedAt: new Date().toISOString() })
    localStorage.setItem('klawbi_waitlist', JSON.stringify(existing))
    navigate('/waitlist/thanks')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-2">Join the Waitlist</h1>
        <p className="text-text-secondary text-center mb-8">
          Be the first to try Klawbi when we launch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div>
            <label className="block text-text-secondary text-sm mb-1.5">Use Case</label>
            <select
              name="useCase"
              value={form.useCase}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-white transition appearance-none"
            >
              <option value="" disabled>Select a use case</option>
              {useCases.map((uc) => (
                <option key={uc} value={uc}>{uc}</option>
              ))}
            </select>
          </div>
          <Button type="submit" variant="primary" className="w-full justify-center mt-6">
            Join Waitlist
          </Button>
        </form>
      </div>
    </div>
  )
}
