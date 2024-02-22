import Link from 'next/link'
import { ReactNode } from 'react'
import { GetMetadata } from '../utils/ogp'

export interface LinkCardProps {
  children?: ReactNode
  href?: string
}

async function LinkCard({ children, href }: LinkCardProps) {
  if (href === undefined) {
    return <a>{children}</a>
  }

  if (href === children) {
    const ogpData = await GetMetadata(href)
    if (ogpData === undefined) {
      return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          hoge
        </Link>
      )
    }

    return (
      <div className="flex item-center h-40 bg-neutral shadow-xl rounded-xl p-4">
        <Link
          href={ogpData.ogUrl || ''}
          className="flex space-x-4 no-underline"
        >
          <div className="flex item-center">
            {ogpData.ogImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="max-w-48 max-h-32 m-auto object-cover rounded-lg"
                src={ogpData.ogImage[0]?.url}
                alt={ogpData.ogTitle}
              />
            )}
          </div>
          <div className="flex-grow">
            <h2 className="text-lg font-semibold text-primary my-2">
              {ogpData.ogTitle}
            </h2>
            <p className="text-sm text-neutral-content mb-2">
              {ogpData.ogDescription}
            </p>
          </div>
        </Link>
      </div>
    )
  } else {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        hoge
      </Link>
    )
  }
}

export default LinkCard
