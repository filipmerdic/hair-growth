import type { Metadata } from 'next'
import '../public/styles/main.css'

export const metadata: Metadata = {
  title: 'MicroSwipe™ Dental Cleaning System - The Safe Alternative to Anesthesia',
  description: 'MicroSwipe™ is the revolutionary wearable finger swipe for cleaning your dog\'s teeth. Say goodbye to anesthesia and hello to a sparkling smile. Vet-approved and easy to use.',
  icons: {
    icon: 'https://alphainfuse.com/cdn/shop/files/Untitled_design_-_2025-06-25T225303.525_96x96.png?v=1750884803',
  },
  openGraph: {
    type: 'website',
    title: 'MicroSwipe™ Dental Cleaning System',
    description: 'MicroSwipe™ is the revolutionary wearable finger swipe for cleaning your dog\'s teeth. Say goodbye to anesthesia and hello to a sparkling smile. Vet-approved and easy to use.',
    images: ['https://thedogclinics.com/assets/results-6-weeks-Ce7KoPdS.jpeg'],
    siteName: 'MagnumInfuse',
  },
  twitter: {
    card: 'summary',
    title: 'MicroSwipe™ Dental Cleaning System',
    description: 'MicroSwipe™ is the revolutionary wearable finger swipe for cleaning your dog\'s teeth. Say goodbye to anesthesia and hello to a sparkling smile. Vet-approved and easy to use.',
  },
  robots: 'noindex,nofollow',
  verification: {
    google: 'lsy7XUbZatItDC0TfYpalf_7DP_dLu38y0b3tp0DwXE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className="no-js">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, maximum-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {children}
        <script src="/scripts/main.js" defer></script>
      </body>
    </html>
  )
}

