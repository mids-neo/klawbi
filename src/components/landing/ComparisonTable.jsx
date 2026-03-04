import { Check, X } from 'lucide-react'

const features = [
  'Smart Answers',
  'Task Execution',
  'WhatsApp / Telegram',
  'Persistent Memory',
  'Proactive Alerts',
  '24/7 Automation',
  'Skills Marketplace',
]

const competitors = [
  { name: 'ChatGPT Plus', price: '$20', values: [true, false, false, false, false, false, false] },
  { name: 'Claude Pro', price: '$20', values: [true, false, false, false, false, false, false] },
  { name: 'Gemini Advanced', price: '$20', values: [true, false, false, false, false, false, false] },
]

const klawbi = { name: 'Klawbi Pro', price: '$29', values: [true, true, true, true, true, true, true] }

export default function ComparisonTable() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          See the <span className="text-primary">difference</span>
        </h2>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          Every AI chatbot gives smart answers. Only Klawbi actually gets things done.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-text-secondary font-medium text-sm">Feature</th>
                {competitors.map((c, i) => (
                  <th key={i} className="py-4 px-4 text-text-muted font-medium text-sm text-center whitespace-nowrap">{c.name}<br /><span className="text-xs">({c.price})</span></th>
                ))}
                <th className="py-4 px-4 text-primary font-semibold text-sm text-center whitespace-nowrap">
                  {klawbi.name}<br /><span className="text-xs">({klawbi.price})</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fi) => (
                <tr key={fi} className="border-b border-border/50 hover:bg-surface/50 transition-colors">
                  <td className="py-4 px-4 text-sm font-medium">{feature}</td>
                  {competitors.map((c, ci) => (
                    <td key={ci} className="py-4 px-4 text-center">
                      {c.values[fi] ? (
                        <Check className="w-5 h-5 text-text-muted mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-text-muted/40 mx-auto" />
                      )}
                    </td>
                  ))}
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-accent mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
