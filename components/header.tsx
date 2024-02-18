import Link from 'next/link'
import ThemeToggleButton from './themeToggleButton'

function Header() {
  return (
    <header className="navbar bg-base-300">
      <nav className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          Next.js Blog with MDX
        </Link>
      </nav>
      <div className="navbar-end">
        <ThemeToggleButton />
      </div>
    </header>
  )
}

export default Header
