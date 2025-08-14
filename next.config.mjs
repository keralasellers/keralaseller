/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages configuration
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/keralaseller' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/keralaseller/' : '',
  
  // Your existing settings
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Images configuration for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
    loader: 'default',
  },

  // Basic optimizations that work with static export
  compress: true,
  trailingSlash: false,

  // Environment variables
  env: {
    SITE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://yourusername.github.io/keralaseller'
      : 'http://localhost:3000',
    SITE_NAME: 'KeralaSellers.in'
  }
}

export default nextConfig
