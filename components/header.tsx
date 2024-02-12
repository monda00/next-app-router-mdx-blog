import Link from 'next/link'

function Header() {
  return (
    <header className="w-screen bg-slate-500">
      <nav className="p-6">
        <div className="flex items-center">
          <Link href="/" className="text-lg text-white no-underline">
            Next.js Blog with MDX
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
