import Link from 'next/link'
import { ReactNode } from 'react'
import { GetMetadata } from '../utils/ogp'

interface Link {
  props: { href: string; children: ReactNode }
  type: string
}

interface LinkCardProps {
  children?: Link | ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isLinkCard(children: any): children is Link {
  return (
    children.type === 'a' &&
    children.props.href !== undefined &&
    children.props.children === children.props.href
  )
}

async function LinkCard({ children }: LinkCardProps) {
  if (!children || !isLinkCard(children)) {
    return <p>{children}</p>
  }

  const ogpData = await GetMetadata(children.props.href)
  if (ogpData === undefined) {
    return (
      <Link
        href={children.props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        unknown link
      </Link>
    )
  }

  return (
    <div className="flex item-center h-40 bg-neutral shadow-xl rounded-xl p-4 my-4">
      <Link href={ogpData.ogUrl || ''} className="flex space-x-4 no-underline">
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
          <p className="text-lg font-semibold text-primary my-1">
            {ogpData.ogTitle}
          </p>
          <p className="text-sm text-neutral-content mb-1 mt-0">
            {ogpData.ogDescription}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default LinkCard
