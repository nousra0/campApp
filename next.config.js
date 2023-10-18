/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
      output: 'export',
      basePath: '/camp-app'
}

module.exports = nextConfig
