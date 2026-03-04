import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'

export default function WaitlistCTA() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      const existing = JSON.parse(localStorage.getItem('klawbi_waitlist') || '[]')
      existing.push({ email, joinedAt: new Date().toISOString() })
      localStorage.setItem('klawbi_waitlist', JSON.stringify(existing))
      navigate('/waitlist/thanks')
    }
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to upgrade from ChatGPT?
        </h2>
        <p className="text-text-secondary mb-8 text-lg">
          Join the waitlist and be the first to try Klawbi when we launch.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-surface border border-border rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-white placeholder:text-text-muted transition"
          />
          <Button type="submit" variant="primary">
            Join Waitlist
          </Button>
        </form>

        <p className="mt-4 text-text-muted text-sm">
          2,400+ people on the waitlist
        </p>
      </div>
    </section>
  )
}
