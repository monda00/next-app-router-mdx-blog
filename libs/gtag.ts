export const GA_TAG_ID = process.env.NEXT_PUBLIC_GA_TAG_ID || ''

export const IS_GATAG = GA_TAG_ID !== ''

export const pageview = (path: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TAG_ID, {
      page_path: path,
    })
  }
}
