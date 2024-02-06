import Link from 'next/link'
import GetAllPostSlugs from '@/utils/getAllPostSlugs'

export default function Home() {
  const slugs = GetAllPostSlugs()
  return (
    <div>
      <h1>Hello, World!</h1>
      <Link href="/hello-world">Hello, World</Link>

      <h1>Posts</h1>
      {slugs.map((slug) => (
        <div key={slug}>
          <Link href={`/posts/${slug}`}>{slug}</Link>
        </div>
      ))}
    </div>
  )
}
