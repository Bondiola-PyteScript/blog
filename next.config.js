const { withContentlayer } = require("next-contentlayer");

// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  output: "export"
}

// Merge MDX config with Next.js config
module.exports = withContentlayer(nextConfig)