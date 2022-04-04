/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https://wallis.dev/blog/deploying-a-next-js-app-to-github-pages
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/github-repo-wrangler/',
}

module.exports = nextConfig
