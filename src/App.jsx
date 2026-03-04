import { Routes, Route } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout'
import DashboardLayout from './components/layout/DashboardLayout'
import ProtectedRoute from './components/auth/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import WaitlistPage from './pages/WaitlistPage'
import WaitlistThanks from './pages/WaitlistThanks'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import DashboardHome from './pages/DashboardHome'
import AgentPage from './pages/AgentPage'
import SkillsPage from './pages/SkillsPage'
import UsagePage from './pages/UsagePage'
import BillingPage from './pages/BillingPage'
import SettingsPage from './pages/SettingsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/waitlist/thanks" element={<WaitlistThanks />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/agent" element={<AgentPage />} />
          <Route path="/dashboard/skills" element={<SkillsPage />} />
          <Route path="/dashboard/usage" element={<UsagePage />} />
          <Route path="/dashboard/billing" element={<BillingPage />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
