/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/keralaseller',
  assetPrefix: '/keralaseller/',
  
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
}

export default nextConfig
