/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing settings
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Enhanced image configuration for SEO
  images: {
    // Remove unoptimized: true to enable optimization
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [], // Add external image domains if needed
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Security headers for better SEO and protection
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Referrer policy for better privacy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Force HTTPS (important for SEO ranking)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          // Content Security Policy (adjust as needed)
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://script.google.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://script.google.com https://www.google-analytics.com",
              "frame-src 'self' https://www.google.com",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'"
            ].join('; ')
          },
          // XSS Protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Permissions Policy (formerly Feature Policy)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },

  // Compression for better performance (SEO factor)
  compress: true,

  // Trailing slash consistency (important for SEO)
  trailingSlash: false,

  // Generate robots.txt and sitemap automatically
  async rewrites() {
    return [
      // You can add custom rewrites here if needed
    ]
  },

  // Redirect www to non-www (or vice versa) for SEO consistency
  async redirects() {
    return [
      // Example: redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.keralasellers.in'
          }
        ],
        destination: 'https://keralasellers.in/:path*',
        permanent: true
      }
    ]
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
  },

  // Webpack optimization for smaller bundles
  webpack: (config, { isServer }) => {
    // Reduce bundle size
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
          chunks: 'all'
        }
      }
    }

    return config
  },

  // Environment variables for deployment
  env: {
    SITE_URL: process.env.SITE_URL || 'https://keralasellers.in',
    SITE_NAME: 'KeralaSellers.in'
  }
}

// ✅ Use ES Module export syntax for .mjs files
export default nextConfig
