import Link from 'next/link'
import ThemeToggleButton from '@/components/theme/themeToggleButton'
import SearchBar from '@/components/ui/searchBar'

function Header() {
  return (
    <header className="navbar bg-primary h-20">
      <nav className="navbar-start md:py-8 md:px-16">
        <Link href="/" className="no-underline">
          <div className="text-base-100">
            <div className="flex justify-start text-rg md:text-xl xl:text-2xl font-normal">
              Next.js with next-mdx-remote Blog
            </div>
          </div>
        </Link>
      </nav>
      <div className="navbar-end">
        <SearchBar />
        <ThemeToggleButton />
      </div>
    </header>
  )
}

export default Header
