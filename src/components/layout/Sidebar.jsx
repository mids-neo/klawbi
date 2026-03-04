import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  Bot,
  Zap,
  BarChart3,
  CreditCard,
  Settings,
  LogOut,
  X,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import KlawbiLogo from '../landing/KlawbiLogo'

const navItems = [
  { label: 'Home', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Agent', icon: Bot, path: '/dashboard/agent' },
  { label: 'Skills', icon: Zap, path: '/dashboard/skills' },
  { label: 'Usage', icon: BarChart3, path: '/dashboard/usage' },
  { label: 'Billing', icon: CreditCard, path: '/dashboard/billing' },
  { label: 'Settings', icon: Settings, path: '/dashboard/settings' },
]

export default function Sidebar({ isOpen, onClose }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const planLabel =
    user?.plan?.charAt(0).toUpperCase() + (user?.plan?.slice(1) || '') + ' Plan'

  return (
    <>
      {/* Mobile overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-background border-r border-border
          flex flex-col transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Top: Logo */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-border shrink-0">
          <div className="flex items-center gap-2.5">
            <KlawbiLogo size={28} />
            <span className="text-lg font-bold text-text-primary tracking-tight">
              Klawbi
            </span>
          </div>

          {/* Mobile close button */}
          <button
            onClick={onClose}
            className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface-hover rounded-lg transition-colors md:hidden"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/dashboard'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-surface text-white border-l-2 border-accent'
                    : 'text-text-secondary hover:text-white hover:bg-surface-hover'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom: User info + logout */}
        <div className="px-3 py-4 border-t border-border shrink-0">
          <div className="flex items-center gap-3 px-3 py-2">
            {/* User avatar */}
            <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-semibold text-primary shrink-0">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary truncate">
                {user?.name || 'User'}
              </p>
              <span className="inline-block mt-0.5 px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                {planLabel}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="mt-2 flex items-center gap-3 w-full px-4 py-2.5 text-sm font-medium text-text-muted hover:text-error hover:bg-surface-hover rounded-lg transition-colors"
          >
            <LogOut size={18} />
            Log out
          </button>
        </div>
      </aside>
    </>
  )
}
