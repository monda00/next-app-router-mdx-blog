'use client'

import { useState } from 'react'
import { GoCopy, GoCheck } from 'react-icons/go'
import { useCopyToClipboard } from 'react-use'
import { CustomIcon } from './custom-icon'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const [, copyToClipboard] = useCopyToClipboard()

  return (
    <button
      className="btn btn-xs btn-neutral"
      onClick={() => {
        copyToClipboard(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
    >
      {copied ? (
        <div
          className="tooltip tooltip-open tooltip-left tooltip-success"
          data-tip="Copied!"
        >
          <CustomIcon icon={GoCheck} size={20} color="green" />
        </div>
      ) : (
        <CustomIcon icon={GoCopy} size={20} />
      )}
    </button>
  )
}

export default CopyButton
