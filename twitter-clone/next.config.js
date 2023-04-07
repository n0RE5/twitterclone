/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '*',
        port: '5000',
      },
    ],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  }
}

module.exports = nextConfig
