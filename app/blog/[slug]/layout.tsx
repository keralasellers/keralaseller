import { Metadata } from 'next'

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  // Await the params before using its properties
  const { slug } = await params;
  
  return {
    title: `Blog Post | KeralaSellers.in`,
    description: "Read the latest tips and strategies for growing your Kerala business online.",
    keywords: "Kerala business blog, online selling tips, WhatsApp commerce, Malayalam business guide",
    openGraph: {
      title: "Kerala Business Blog | KeralaSellers.in",
      description: "Expert tips and strategies for Kerala sellers",
      images: ["/hero.png"],
      url: `https://www.keralasellers.in/blog/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
    },
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
