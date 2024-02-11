import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { postFilePaths } from './constants'

export function GetAllPostSlugs() {
  return postFilePaths.map((path) => {
    const slug = path.replace(/\.mdx?$/, '')
    return slug
  })
}

export function GetPostBySlug(slug: string) {
  const markdown = readFileSync(`contents/posts/${slug}.mdx`, 'utf8')

  const { content, data } = matter(markdown)
  return {
    content,
    data,
  }
}

export function GetAllPosts() {
  const slugs = GetAllPostSlugs()
  return slugs.map((slug) => {
    const markdown = readFileSync(`contents/posts/${slug}.mdx`, 'utf8')

    const { content, data } = matter(markdown)
    return {
      slug,
      content,
      data,
    }
  })
}
