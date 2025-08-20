import { Metadata } from 'next';
import DemoStoreClient from './DemoStoreClient';

export const metadata: Metadata = {
  title: 'Demo Store - See How Your Kerala Online Store Will Look',
  description: 'Experience how Kerala sellers can sell products online. See our platform features: zero commission, Malayalam support, WhatsApp integration, and local customer reach.',
  keywords: [
    'Kerala online store demo',
    'sell products online Kerala',
    'zero commission platform',
    'Kerala ecommerce platform',
    'WhatsApp selling Kerala',
    'Malayalam online store'
  ],
  alternates: {
    canonical: 'https://www.keralasellers.in/yourstore',
  },
  openGraph: {
    title: 'Demo Store - Kerala Online Selling Platform',
    description: 'See how your Kerala online store will look. Zero commission, Malayalam support, reach all 14 districts.',
    url: 'https://www.keralasellers.in/yourstore',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Kerala Online Store Demo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo Store - Kerala Online Selling Platform',
    description: 'Experience our zero commission platform for Kerala sellers',
    images: ['/hero.png'],
  },
};

export default function YourStorePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Kerala Online Store Demo",
            "description": "Demo showcasing how Kerala sellers can sell products online",
            "url": "https://www.keralasellers.in/yourstore",
            "isPartOf": {
              "@type": "WebSite",
              "name": "KeralaSellers.in"
            },
            "about": {
              "@type": "Service",
              "name": "Online Selling Platform",
              "description": "Platform for Kerala sellers to sell products online"
            }
          })
        }}
      />
      
      <DemoStoreClient />
    </>
  );
}
