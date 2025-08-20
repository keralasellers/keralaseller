import { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Kerala Sellers Blog - Online Business Tips & Growth Strategies',
  description: 'Expert tips, guides, and insights to help Kerala sellers succeed online. From WhatsApp commerce to Malayalam marketing strategies - everything you need to build a thriving business.',
  keywords: [
    'Kerala business tips',
    'online selling Kerala',
    'WhatsApp commerce',
    'Malayalam marketing',
    'Kerala entrepreneurs',
    'sell products online Kerala'
  ],
  alternates: {
    canonical: 'https://www.keralasellers.in/blog',
  },
  openGraph: {
    title: 'Kerala Sellers Blog - Online Business Tips',
    description: 'Expert tips and strategies for Kerala sellers to grow their online business',
    url: 'https://www.keralasellers.in/blog',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Kerala Sellers Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kerala Sellers Blog - Online Business Tips',
    description: 'Expert tips and strategies for Kerala sellers to grow online',
    images: ['/hero.png'],
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "KeralaSellers Blog",
            description: "Comprehensive guides, tips and success stories for Kerala sellers to grow their online business",
            url: "https://www.keralasellers.in/blog",
            publisher: {
              "@type": "Organization",
              name: "KeralaSellers.in",
              logo: {
                "@type": "ImageObject",
                url: "https://www.keralasellers.in/k-logo-removebg-preview.png",
              },
            },
            mainEntityOfPage: "https://www.keralasellers.in/blog",
            inLanguage: ["en", "ml"]
          }),
        }}
      />
      
      <BlogPageClient />
    </>
  );
}
