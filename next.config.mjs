import { execSync } from 'child_process'

execSync('node ./scripts/generate-posts-json.js', { stdio: 'inherit' })

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:slug',
        destination: '/posts/:slug',
      },
    ]
  },
}

export default nextConfig
