import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import '@/app/globals.css'
import { Suspense } from 'react'
import { GoogleAdScript } from '@/components/googleAdsense/googleAdsScript'
import GoogleAnalytics from '@/components/googleAnalytics/googleAnalytics'
import Providers from '@/components/theme/providers'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import { siteURL, siteName, siteDescription } from '@/libs/constants'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  metadataBase: new URL(siteURL),
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteURL,
    siteName: siteName,
    images: [
      {
        url: '/ogp.webp',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [`${siteURL}/ogp.webp`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" data-theme="nord" suppressHydrationWarning>
      <head>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <GoogleAdScript />
      </head>
      <body className={`prose max-w-none ${notoSansJP.className}`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
