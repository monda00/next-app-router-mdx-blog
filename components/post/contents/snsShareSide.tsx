'use client'

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  LineShareButton,
  LineIcon,
  HatenaShareButton,
  HatenaIcon,
} from 'react-share'

interface SnsShareSideProps {
  url: string
  title: string
}

function SnsShareSide({ url, title }: SnsShareSideProps) {
  return (
    <div className="hidden xl:flex flex-col sticky mt-36 top-36 h-72">
      <TwitterShareButton url={url} title={title} className="m-4">
        <XIcon size={36} round={true} />
      </TwitterShareButton>
      <LineShareButton url={url} title={title} className="m-4">
        <LineIcon size={36} round={true} />
      </LineShareButton>
      <HatenaShareButton url={url} title={title} className="m-4">
        <HatenaIcon size={36} round={true} />
      </HatenaShareButton>
      <FacebookShareButton url={url} className="m-4">
        <FacebookIcon size={36} round={true} />
      </FacebookShareButton>
    </div>
  )
}

export default SnsShareSide
