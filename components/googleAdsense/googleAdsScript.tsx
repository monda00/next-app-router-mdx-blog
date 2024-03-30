import Script from 'next/script'

export const GoogleAdScript = () => {
  if (process.env.NODE_ENV === 'production') {
    return (
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADS_CLIENT}`}
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
    )
  }
  return <></>
}
