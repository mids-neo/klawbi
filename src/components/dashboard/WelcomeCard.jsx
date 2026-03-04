import { useAuth } from '../../context/AuthContext'

export default function WelcomeCard() {
  const { user } = useAuth()
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="bg-surface rounded-xl border border-border p-6 flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
        <span className="text-primary font-bold text-xl">K</span>
      </div>
      <div>
        <h2 className="text-xl font-semibold">
          {greeting}, {user?.name || 'User'}!
        </h2>
        <p className="text-text-secondary text-sm mt-0.5">
          Your Klawbi is active and ready to help.
        </p>
      </div>
      <div className="ml-auto hidden sm:flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-accent text-sm font-medium">Online</span>
      </div>
    </div>
  )
}
