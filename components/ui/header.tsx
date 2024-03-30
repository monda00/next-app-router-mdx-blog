import Link from 'next/link'
import ThemeToggleButton from '@/components/theme/themeToggleButton'

function Header() {
  return (
    <header className="navbar bg-primary h-28">
      <nav className="navbar-start md:py-8 md:px-16">
        <Link href="/" className="no-underline">
          <div className="text-base-100">
            <div className="flex justify-start text-lg md:text-2xl font-normal">
              Next.js with next-mdx-remote Blog
            </div>
          </div>
        </Link>
      </nav>
      <div className="navbar-end">
        <ThemeToggleButton />
      </div>
    </header>
  )
}

export default Header
