import { Link } from 'react-router-dom'
import Button from '../common/Button'

export default function Hero() {
  return (
    <section className="animated-gradient min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            The AI that{' '}
            <span className="text-primary">actually</span>{' '}
            does things.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            Meet Klawbi — your personal AI assistant that lives in WhatsApp,
            remembers everything, and gets work done 24/7. Not just another chatbot.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/waitlist">
              <Button variant="primary" size="lg">Join the Waitlist</Button>
            </Link>
            <a href="#features">
              <Button variant="secondary" size="lg">See How It Works</Button>
            </a>
          </div>
          <p className="mt-6 text-text-muted text-sm">
            No credit card required. Free tier available.
          </p>
        </div>

        <div className="animate-fade-in hidden lg:block">
          <div className="bg-surface rounded-2xl border border-border p-4 shadow-2xl max-w-sm ml-auto">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">K</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Klawbi</p>
                <p className="text-text-muted text-xs">Online</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-end">
                <div className="bg-primary/20 rounded-2xl rounded-tr-md px-4 py-2 max-w-[80%]">
                  <p className="text-sm">Schedule a meeting with Alex for tomorrow at 2pm</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-surface-hover rounded-2xl rounded-tl-md px-4 py-2 max-w-[80%]">
                  <p className="text-sm text-text-secondary">Done! Meeting with Alex scheduled for tomorrow, March 4th at 2:00 PM. I've sent him a calendar invite.</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-primary/20 rounded-2xl rounded-tr-md px-4 py-2 max-w-[80%]">
                  <p className="text-sm">Also remind me to prep the deck 1 hour before</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-surface-hover rounded-2xl rounded-tl-md px-4 py-2 max-w-[80%]">
                  <p className="text-sm text-text-secondary">Reminder set for 1:00 PM tomorrow: "Prep deck for Alex meeting." I'll ping you on WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
