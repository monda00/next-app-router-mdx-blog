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
