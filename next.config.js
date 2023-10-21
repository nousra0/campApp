/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    loader: "akamai",
    path: ""
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/camp-app' : '',
}

module.exports = nextConfig
