import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`prose max-w-none ${inter.className}`}>
        <div className="flex flex-col min-h-screen bg-gray-200">
          <Header />
          <main className="mx-auto my-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
