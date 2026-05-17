export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Contract Analysis
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Scan Contracts for{' '}
          <span className="text-[#58a6ff]">Freelancer Protection Gaps</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload any client contract and get an instant AI-powered risk report — missing clauses, unfair terms, payment traps, and IP ownership issues flagged in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Protecting Yourself — $12/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[['500+', 'Contracts Analyzed'], ['94%', 'Risk Detection Rate'], ['2 min', 'Avg. Report Time']].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-[#161b22] border-y border-[#30363d] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            ['🔍', 'Missing Clauses'],
            ['⚠️', 'Unfair Terms'],
            ['💸', 'Payment Risks'],
            ['©️', 'IP Ownership'],
          ].map(([icon, label]) => (
            <div key={label}>
              <div className="text-3xl mb-2">{icon}</div>
              <div className="text-sm font-semibold text-[#c9d1d9]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-8">Everything you need to sign contracts with confidence.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-3">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Cancel anytime. No contracts (ironic, we know).</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited contract uploads',
              'AI risk scoring (0–100)',
              'Clause-by-clause breakdown',
              'Suggested amendment language',
              'PDF report download',
              'Payment & IP risk flags',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What file formats can I upload?',
              a: 'ContractGuard accepts PDF, DOCX, and plain text files. Our AI extracts and analyzes the full contract text regardless of format.',
            },
            {
              q: 'Is my contract data kept private?',
              a: 'Yes. Contracts are processed in memory, never stored on our servers, and never used to train AI models. Your sensitive data stays yours.',
            },
            {
              q: 'Can this replace a lawyer?',
              a: 'ContractGuard is a powerful first-pass tool that flags risks most freelancers miss, but it is not legal advice. For high-stakes contracts, consult a qualified attorney.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} ContractGuard. Not legal advice.
      </footer>
    </main>
  )
}
