/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  distDir: './out',
  basePath: '/aitalyst-core',
}

module.exports = nextConfig
