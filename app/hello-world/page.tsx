import { readFile } from 'fs/promises'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function HelloWorldPost() {
  const markdown = await readFile('contents/posts/hello-world.mdx', {
    encoding: 'utf8',
  })

  return (
    <div>
      <MDXRemote source={markdown} />
    </div>
  )
}
