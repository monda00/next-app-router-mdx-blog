import Link from 'next/link'

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center p-10 bg-base-300 text-base-content rounded-sm gap-y-4 md:gap-y-8">
      <nav className="grid grid-cols-2 md:grid-flow-col gap-3 md:gap-8 items-center">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <p>
        Copyright © 2025 - Next.js with next-mdx-reomote blog All Rights
        Reserved.
      </p>
    </footer>
  )
}

export default Footer
