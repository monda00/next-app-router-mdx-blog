'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: {
      [key: string]: unknown
    }[]
  }
}

interface GoogleAdsenseProps {
  slot: string | undefined
  format?: string
  responsive?: string
  style?: React.CSSProperties
  className?: string
}

function GoogleAdsense({
  slot,
  format = 'auto',
  responsive = 'true',
  style,
  className,
}: GoogleAdsenseProps) {
  let pathname = usePathname()
  pathname = pathname ? pathname : ''

  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }
  }, [pathname])

  return (
    <div
      key={pathname.replace(/\//g, '-') + '-' + slot}
      className={`${className}`}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', ...style }}
        data-ad-client={process.env.GOOGLE_ADS_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      ></ins>
    </div>
  )
}

export default GoogleAdsense
