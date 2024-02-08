import Link from 'next/link'

function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link href="/">Next.js Blog with MDX</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
