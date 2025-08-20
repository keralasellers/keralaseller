import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";

// Blog posts data - must be defined here for generateStaticParams
const blogPosts = [
  {
    id: 1,
    slug: "whatsapp-commerce-kerala-2025",
    title: "How Kerala Sellers Can Grow Sales Using WhatsApp in 2025",
    description: "A practical guide for Kerala sellers to grow online sales with WhatsApp catalogs, Malayalam product descriptions, and zero-commission stores.",
    category: "WhatsApp Commerce",
    date: "2025-01-15",
    image: "/hero.png",
    author: "KeralaSellers Team",
    readTime: "8-10 min read",
    views: "2.5k",
    likes: 156
  },
  {
    id: 2,
    slug: "online-selling-malayalam-guide",
    title: "മലയാളത്തിൽ ഓൺലൈൻ വിൽപ്പന: സമ്പൂർണ്ണ ഗൈഡ്",
    description: "കേരളത്തിലെ വിൽപ്പനക്കാർക്കായി മലയാളത്തിൽ ഓൺലൈൻ സ്റ്റോർ തുടങ്ങാനുള്ള സമ്പൂർണ്ണ മാർഗനിർദേശം.",
    category: "Malayalam Guide",
    date: "2025-01-10", 
    image: "/blog-2.png",
    author: "കേരള സെല്ലേഴ്സ് ടീം",
    readTime: "6-8 min read",
    views: "1.8k",
    likes: 89
  },
  {
    id: 3,
    slug: "zero-commission-platform-comparison",
    title: "Zero Commission vs Other Platforms: Complete Comparison",
    description: "Compare KeralaSellers with other e-commerce platforms and see why zero commission matters for Kerala sellers.",
    category: "Platform Comparison",
    date: "2025-01-08",
    image: "/blog-3.png",
    author: "KeralaSellers Team",
    readTime: "5-7 min read", 
    views: "3.2k",
    likes: 201
  }
];

// ✅ REQUIRED: This function tells Next.js which pages to generate at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ Generate metadata for each page (SEO) - FIXED: async params
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  // ✅ FIX: Await params before accessing properties
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found | KeralaSellers.in",
      description: "The requested blog post could not be found."
    };
  }
  
  return {
    title: `${post.title} | KeralaSellers.in`,
    description: post.description,
    keywords: [
      "Kerala online selling",
      "WhatsApp commerce", 
      "zero commission",
      "Malayalam business",
      "Kerala sellers",
      "online store Kerala",
      "sell products online Kerala"
    ],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      url: `https://www.keralasellers.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
      creator: "@keralasellers",
    },
    alternates: {
      canonical: `https://www.keralasellers.in/blog/${post.slug}`,
    },
  };
}

// ✅ Server component that renders the client component - FIXED: async params
export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // ✅ FIX: Await params before accessing properties
  const { slug } = await params;
  
  // Validate that the slug exists
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    // This should rarely happen since generateStaticParams defines valid slugs
    // Using notFound() instead of manual JSX for better Next.js integration
    notFound();
  }

  return <BlogPostClient slug={slug} />;
}

// ✅ Optional: Disable dynamic params (404 for non-generated slugs)
export const dynamicParams = false;
