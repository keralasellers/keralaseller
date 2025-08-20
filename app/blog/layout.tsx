import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "How Kerala Sellers Can Grow Sales Using WhatsApp in 2025 | KeralaSellers.in",
  description: "A practical guide for Kerala sellers to grow online sales with WhatsApp catalogs, Malayalam product descriptions, and zero-commission stores.",
  keywords: "WhatsApp commerce Kerala, sell products online Kerala, Kerala online selling platform, WhatsApp Catalog, zero commission Kerala",
  openGraph: {
    title: "How Kerala Sellers Can Grow Sales Using WhatsApp in 2025",
    description: "Step-by-step playbook to turn WhatsApp views into orders. Kerala-first tips, templates, and tools.",
    images: ["/hero.png"],
    url: "https://www.keralasellers.in/blog",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kerala",
    author: "KeralaSellers.in",
    robots: "index, follow",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
