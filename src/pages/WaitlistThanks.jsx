import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import Button from '../components/common/Button'

const confettiColors = ['#3B82F6', '#22C55E', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']

export default function WaitlistThanks() {
  const [confetti, setConfetti] = useState([])

  useEffect(() => {
    const pieces = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      size: Math.random() * 8 + 4,
    }))
    setConfetti(pieces)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: piece.id % 2 === 0 ? '50%' : '2px',
          }}
        />
      ))}

      <div className="text-center animate-fade-in relative z-10">
        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-accent" />
        </div>
        <h1 className="text-4xl font-bold mb-4">You're on the list!</h1>
        <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
          We'll reach out when your Klawbi is ready. You're going to love it.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
          <a
            href="https://twitter.com/intent/tweet?text=Just%20joined%20the%20%40klawbi%20waitlist!%20The%20AI%20that%20actually%20does%20things.%20%F0%9F%A4%96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">Share on Twitter</Button>
          </a>
        </div>
      </div>
    </div>
  )
}
