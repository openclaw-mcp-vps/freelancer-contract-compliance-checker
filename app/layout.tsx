import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ContractGuard – Scan Contracts for Freelancer Protection Gaps',
  description: 'AI-powered contract analysis that identifies missing clauses, unfair terms, payment risks, and IP ownership issues. Get risk scores and suggested amendments instantly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6c9437b0-9dd6-44bb-aeaa-f1bc23012e05"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
