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

interface SnsShareProps {
  url: string
  title: string
}

function SnsShare({ url, title }: SnsShareProps) {
  return (
    <div className="mt-10">
      <div className="divider text-xl">Share</div>
      <div className="flex justify-center">
        <TwitterShareButton url={url} title={title} className="m-5">
          <XIcon size={40} round={true} />
        </TwitterShareButton>
        <LineShareButton url={url} title={title} className="m-5">
          <LineIcon size={40} round={true} />
        </LineShareButton>
        <HatenaShareButton url={url} title={title} className="m-5">
          <HatenaIcon size={40} round={true} />
        </HatenaShareButton>
        <FacebookShareButton url={url} className="m-5">
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
      </div>
    </div>
  )
}

export default SnsShare
