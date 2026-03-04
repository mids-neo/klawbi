import { useState } from 'react'
import { CreditCard, Download } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { mockPlans } from '../data/mockPlans'
import Card from '../components/common/Card'
import PlanCard from '../components/dashboard/PlanCard'
import Badge from '../components/common/Badge'

const invoices = [
  { id: 'INV-2026-003', date: 'Mar 1, 2026', amount: '$29.00', status: 'Paid' },
  { id: 'INV-2026-002', date: 'Feb 1, 2026', amount: '$29.00', status: 'Paid' },
  { id: 'INV-2026-001', date: 'Jan 1, 2026', amount: '$29.00', status: 'Paid' },
]

export default function BillingPage() {
  const { user, updateUser } = useAuth()
  const currentPlan = mockPlans.find((p) => p.id === (user?.plan || 'free'))

  const handleUpgrade = (planId) => {
    updateUser({ plan: planId })
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Billing & Plans</h1>
        <p className="text-text-secondary text-sm mt-1">Manage your subscription and payment method.</p>
      </div>

      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-text-muted text-xs uppercase tracking-wide">Current Plan</p>
            <div className="flex items-center gap-3 mt-1">
              <h2 className="text-2xl font-bold">{currentPlan?.name || 'Free'}</h2>
              <Badge variant="success">Active</Badge>
            </div>
            <p className="text-text-secondary text-sm mt-1">
              ${currentPlan?.price || 0}/month &middot; Renews April 1, 2026
            </p>
          </div>
          <div className="text-right">
            <p className="text-text-muted text-xs">Messages Used</p>
            <p className="text-lg font-semibold">342 / {typeof currentPlan?.messages === 'number' ? currentPlan.messages.toLocaleString() : currentPlan?.messages}</p>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-lg font-semibold mb-4">Compare Plans</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isCurrentPlan={plan.id === user?.plan}
              onUpgrade={handleUpgrade}
            />
          ))}
        </div>
      </div>

      <Card>
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
          <div className="w-12 h-8 rounded bg-surface-hover flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-text-muted" />
          </div>
          <div>
            <p className="text-sm font-medium">Visa ending in 4242</p>
            <p className="text-text-muted text-xs">Expires 12/2028</p>
          </div>
          <button className="ml-auto text-primary text-sm hover:underline">Update</button>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold mb-4">Billing History</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 px-2 text-text-muted text-xs uppercase tracking-wide font-medium">Invoice</th>
                <th className="py-3 px-2 text-text-muted text-xs uppercase tracking-wide font-medium">Date</th>
                <th className="py-3 px-2 text-text-muted text-xs uppercase tracking-wide font-medium">Amount</th>
                <th className="py-3 px-2 text-text-muted text-xs uppercase tracking-wide font-medium">Status</th>
                <th className="py-3 px-2 text-text-muted text-xs uppercase tracking-wide font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id} className="border-b border-border/50">
                  <td className="py-3 px-2 text-sm font-medium">{inv.id}</td>
                  <td className="py-3 px-2 text-sm text-text-secondary">{inv.date}</td>
                  <td className="py-3 px-2 text-sm">{inv.amount}</td>
                  <td className="py-3 px-2">
                    <Badge variant="success">{inv.status}</Badge>
                  </td>
                  <td className="py-3 px-2">
                    <button className="text-text-muted hover:text-primary transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
