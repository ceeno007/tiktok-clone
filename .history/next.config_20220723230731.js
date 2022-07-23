/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },

  reactStrictMode: true,
  images: {
    domains: [
      'source.unsplash.com','lh3.googleusercontent.com'
    ],
  }
}

module.exports = nextConfig
