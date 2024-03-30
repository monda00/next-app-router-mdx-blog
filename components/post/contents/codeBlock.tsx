import { ReactNode } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CopyButton from '@/components/post/contents/copyButton'

interface Code {
  props: { className: string; children: string }
  type: string
}

interface CodeBlockProps {
  children?: Code | ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isCodeBlock(children: any): children is Code {
  return children.type === 'code'
}

function CodeBlock({ children }: CodeBlockProps) {
  if (!children || !isCodeBlock(children)) {
    return null
  }

  const match = /language-(\w+)(:?.*)/.exec(children.props.className || '')
  const language = match && match[1] ? match[1] : ''
  const fileName = match && match[2] ? match[2].slice(1) : ''
  const codeText = String(children.props.children).replace(/\n$/, '')

  return (
    <div className={'relative my-5'}>
      {fileName && (
        <div className="max-w-fit text-neutral-content bg-neutral rounded-t-lg">
          <span className="p-3">{fileName}</span>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={nord}
        showLineNumbers={true}
        customStyle={{
          marginTop: '0',
          borderTopLeftRadius: fileName ? '0' : '0.5rem',
          borderTopRightRadius: '0.5rem',
          borderBottomLeftRadius: '0.5rem',
          borderBottomRightRadius: '0.5rem',
          backgroundColor: 'oklch(var(--n))',
        }}
      >
        {codeText}
      </SyntaxHighlighter>
      <div className={`absolute right-3 ${fileName ? 'top-11' : 'top-3'}`}>
        <CopyButton text={codeText} />
      </div>
    </div>
  )
}

export default CodeBlock
