import fs from 'fs'
import path from 'path'

export const POSTS_PATH = path.join(process.cwd(), 'contents/posts')

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))

export const categories = {
  programming: 'Programming',
  devops: 'DevOps',
  cloud: 'Cloud',
  other: 'Other',
}
