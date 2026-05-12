import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.imgur.com' },
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: 'static.thenounproject.com' },
      { protocol: 'https', hostname: 'images.squarespace-cdn.com' },
    ],
  },
}

export default nextConfig
