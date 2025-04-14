const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postsDirectory = path.join(process.cwd(), 'contents/posts')
const outputPath = path.join(process.cwd(), 'public/posts.json')

function getAllPostsJson() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      body: content,
    }
  })
}

const posts = getAllPostsJson()
fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2))
console.log('✅ posts.json generated.')
