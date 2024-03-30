import Link from 'next/link'
import { ReactNode } from 'react'
import { CiImageOff } from 'react-icons/ci'
import { CustomIcon } from '@/components/ui/customIcon'
import { GetMetadata } from '@/libs/ogp'

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
    <Link
      href={ogpData.ogUrl || children.props.href}
      className="flex space-x-4 no-underline "
    >
      <div className="flex item-center h-40 w-full bg-linkcard shadow-xl rounded-xl p-4 my-4">
        <div className="flex item-center">
          {ogpData.ogImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="max-w-48 max-h-32 m-auto object-cover rounded-lg"
              src={ogpData.ogImage[0]?.url}
              alt={ogpData.ogTitle}
            />
          ) : (
            <div className="flex item-center w-48 h-32">
              <CustomIcon
                icon={CiImageOff}
                size={48}
                className="text-base-content m-auto"
              />
            </div>
          )}
        </div>
        <div className="flex-grow ml-4 overflow-hidden">
          <p className="text-base font-semibold text-primary my-1">
            {ogpData.ogTitle || children.props.href}
          </p>
          <p className="text-xs text-base-content mb-1 mt-0">
            {ogpData.ogDescription}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default LinkCard
