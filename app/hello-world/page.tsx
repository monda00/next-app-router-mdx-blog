import { readFile } from 'fs/promises'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function HelloWorldPost() {
  const markdown = await readFile('contents/posts/hello-world.mdx', {
    encoding: 'utf8',
  })
  const { content, data } = matter(markdown)

  return (
    <div>
      <div>
        <h1>Frontmatter</h1>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <div>
        <h1>Markdown content</h1>
        <MDXRemote source={content} />
      </div>
    </div>
  )
}
