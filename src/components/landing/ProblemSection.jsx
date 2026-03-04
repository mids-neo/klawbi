export default function ProblemSection() {
  const chatgptItems = [
    'Answers your questions',
    'Drafts content for you',
    'Suggests next steps',
    'Summarizes documents',
    'Writes code snippets',
  ]

  const klawbiItems = [
    'Sends emails on your behalf',
    'Books meetings & manages calendar',
    'Monitors your business 24/7',
    'Reminds you proactively',
    'Runs automations while you sleep',
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          ChatGPT talks. <span className="text-primary">Klawbi acts.</span>
        </h2>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          Stop paying $20/month for an AI that just gives you suggestions. Get one that actually follows through.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-surface/50 rounded-xl border border-border p-8 opacity-60">
            <h3 className="text-lg font-semibold text-text-secondary mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-text-muted/20 flex items-center justify-center text-sm">AI</span>
              What ChatGPT does
            </h3>
            <ul className="space-y-4">
              {chatgptItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-error mt-0.5 shrink-0">&#10005;</span>
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface rounded-xl border border-primary/30 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2 relative">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary font-bold">K</span>
              What Klawbi does
            </h3>
            <ul className="space-y-4 relative">
              {klawbiItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
                  <span className="text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
