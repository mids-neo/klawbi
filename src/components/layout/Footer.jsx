import { Link } from 'react-router-dom'
import { Twitter, MessageCircle, Github } from 'lucide-react'
import KlawbiLogo from '../landing/KlawbiLogo'

const linkColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Blog', href: '#' },
      { label: 'Docs', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
]

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: MessageCircle, label: 'Discord', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo + tagline */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 group">
              <KlawbiLogo size={28} />
              <span className="text-lg font-bold text-text-primary tracking-tight group-hover:text-primary transition-colors">
                Klawbi
              </span>
            </Link>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-xs">
              The AI that actually does things. Your personal assistant that lives in WhatsApp,
              remembers everything, and gets work done 24/7.
            </p>
          </div>

          {/* Link columns */}
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') || link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; 2026 Klawbi. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2 text-text-muted hover:text-text-primary hover:bg-surface-hover rounded-lg transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
