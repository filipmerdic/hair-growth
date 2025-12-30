/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alphainfuse.com',
      },
      {
        protocol: 'https',
        hostname: 'thedogclinics.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: '*.shopifycdn.com',
      },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig

