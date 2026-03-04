import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Button from '../components/common/Button'
import Input from '../components/common/Input'

const plans = [
  { id: 'free', name: 'Free', price: '$0', desc: '50 msgs/mo' },
  { id: 'starter', name: 'Starter', price: '$9/mo', desc: '500 msgs/mo' },
  { id: 'pro', name: 'Pro', price: '$29/mo', desc: '2,000 msgs/mo', popular: true },
  { id: 'business', name: 'Business', price: '$79/mo', desc: 'Unlimited' },
]

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [selectedPlan, setSelectedPlan] = useState('pro')
  const [error, setError] = useState('')
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email || !form.password) {
      setError('Please fill in all fields')
      return
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    signup(form.name, form.email, form.password, selectedPlan)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-lg animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-2">Create your account</h1>
        <p className="text-text-secondary text-center mb-8">
          Start getting things done with Klawbi
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
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="At least 6 characters"
            value={form.password}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block text-text-secondary text-sm mb-3">Choose your plan</label>
            <div className="grid grid-cols-2 gap-3">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative rounded-lg border p-3 text-left transition-all ${
                    selectedPlan === plan.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-surface hover:border-primary/30'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-2 right-2 bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{plan.name}</span>
                    {selectedPlan === plan.id && <Check className="w-4 h-4 text-primary" />}
                  </div>
                  <div className="text-text-muted text-xs mt-1">{plan.price} &middot; {plan.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {error && <p className="text-error text-sm">{error}</p>}

          <Button type="submit" variant="primary" className="w-full justify-center mt-2">
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-text-muted text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  )
}
