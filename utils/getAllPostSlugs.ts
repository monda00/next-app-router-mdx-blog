import { postFilePaths } from './constants'

function GetAllPostSlugs() {
  return postFilePaths.map((path) => {
    const slug = path.replace(/\.mdx?$/, '')
    return slug
  })
}

export default GetAllPostSlugs
