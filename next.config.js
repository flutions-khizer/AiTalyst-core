/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true
  },
  distDir: 'out', 
}

module.exports = nextConfig
