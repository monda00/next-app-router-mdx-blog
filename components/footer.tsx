import Link from 'next/link'

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/about/" className="link link-hover">
          About us
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Next.js Blog with MDX</p>
      </aside>
    </footer>
  )
}

export default Footer
