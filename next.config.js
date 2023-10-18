/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
      output: 'export',
      assetPrefix: '/camp-app'
}

module.exports = nextConfig
