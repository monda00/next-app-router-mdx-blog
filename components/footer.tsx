import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-screen mt-auto flex justify-center bg-slate-500">
      <div className="space-y-12 pt-12">
        <nav className="space-x-6 text-center text-sm font-medium">
          <Link href="/" className="text-white">
            Home
          </Link>
        </nav>

        <div className="text-center">
          <p className="text-sm text-white">
            Next.js Blog with MDX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
