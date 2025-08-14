import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kerala Online Selling Platform - Sell Products Online Kerala | KeralaSellers.in',
  description: 'Best platform to sell products online in Kerala. Zero commission, mobile-first design. Join 400+ Kerala sellers. Create your online store today with WhatsApp integration.',
  
  keywords: [
    'sell products online kerala',
    'online selling platforms',
    'kerala online shopping',
    'best platform to sell products online',
    'i want to sell my products online',
    'kerala sellers',
    'online store kerala',
    'sell products online',
    'kerala online marketplace',
    'zero commission selling platform'
  ].join(', '),
  
  authors: [{ name: 'Adarsh B S' }, { name: 'Aromal V G' }],
  creator: 'KeralaSellers.in',
  publisher: 'KeralaSellers.in',
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.keralasellers.in',
    siteName: 'KeralaSellers.in',
    title: 'Kerala Online Selling Platform - Sell Products Online Kerala',
    description: 'Best platform to sell products online in Kerala. Zero commission, mobile-first design for Kerala sellers.',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Kerala online selling platform - sell products online with zero commission',
      },
      {
        url: '/k-logo-removebg-preview.png',
        width: 400,
        height: 200,
        alt: 'KeralaSellers.in logo - Best platform to sell products online Kerala',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Kerala Online Selling Platform - KeralaSellers.in',
    description: 'Best platform to sell products online in Kerala with zero commission. Mobile-first design for Kerala sellers.',
    images: ['/hero.png'],
    creator: '@kerala_sellers',
    site: '@kerala_sellers',
  },
  
  // Additional metadata
  category: 'E-commerce Platform',
  classification: 'Business',
  
  // Verification tags (add when you have them)
  verification: {
    // google: 'your-google-site-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  // Alternate languages
  alternates: {
    canonical: 'https://www.keralasellers.in',
    languages: {
      'en-IN': 'https://www.keralasellers.in',
      'ml-IN': 'https://www.keralasellers.in/ml', // When you add Malayalam support
    },
  },
  
  // Other metadata
  other: {
    'geo.region': 'IN-KL',
    'geo.placename': 'Kerala',
    'geo.position': '10.8505;76.2711', // Kerala coordinates
    'ICBM': '10.8505, 76.2711',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KeralaSellers.in",
              "alternateName": "Kerala Sellers",
              "url": "https://www.keralasellers.in",
              "logo": "https://www.keralasellers.in/k-logo-removebg-preview.png",
              "description": "Best platform to sell products online in Kerala with zero commission. Mobile-first online selling platform for Kerala businesses.",
              "foundingDate": "2025",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Adarsh B S",
                  "jobTitle": "Founder & CEO"
                },
                {
                  "@type": "Person", 
                  "name": "Aromal V G",
                  "jobTitle": "Co-Founder"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
              "areaServed": {
                "@type": "State",
                "name": "Kerala"
              },
              "serviceType": "Online selling platform",
              "priceRange": "Free",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919400355185",
                "contactType": "Customer Service",
                "email": "keralasellers.in@gmail.com",
                "availableLanguage": ["English", "Malayalam"]
              },
              "sameAs": [
                "https://www.instagram.com/kerala_sellers"
              ]
            })
          }}
        />
        
        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "KeralaSellers.in",
              "url": "https://www.keralasellers.in",
              "description": "Kerala's premier online selling platform for local businesses",
              "inLanguage": "en-IN",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.keralasellers.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Online Selling Platform",
              "description": "Zero commission platform to sell products online in Kerala",
              "provider": {
                "@type": "Organization",
                "name": "KeralaSellers.in"
              },
              "areaServed": {
                "@type": "State",
                "name": "Kerala"
              },
              "serviceType": "E-commerce Platform",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "description": "Zero commission online selling platform"
              }
            })
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="apple-mobile-web-app-title" content="KeralaSellers" />
        <meta name="application-name" content="KeralaSellers" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://script.google.com" />
        
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      
      <body className="antialiased bg-[#fdfff0] text-gray-900">
        {children}
        
        {/* Google Analytics - Add when ready */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `
        }} />
        */}
      </body>
    </html>
  )
}
