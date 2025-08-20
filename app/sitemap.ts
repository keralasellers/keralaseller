import { MetadataRoute } from 'next'

// ✅ Required for static export
export const dynamic = 'force-static'
export const revalidate = false

// Blog posts data from your site
const blogPosts = [
  {
    slug: "whatsapp-commerce-kerala-2025",
    lastModified: "2025-01-15",
    priority: 0.8
  },
  {
    slug: "online-selling-malayalam-guide",
    lastModified: "2025-01-10",
    priority: 0.8
  },
  {
    slug: "zero-commission-platform-comparison",
    lastModified: "2025-01-08",
    priority: 0.8
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.keralasellers.in'
  
  // Static pages that actually exist on your site
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/yourstore`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  ];

  // Dynamic blog post pages
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly' as const,
    priority: post.priority,
  }));

  // Combine all pages
  return [...staticPages, ...blogPages];
}
