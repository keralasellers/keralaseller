"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Share2,
  Heart,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Copy,
  Facebook,
  Twitter,
  Linkedin,
  X,
} from "lucide-react";

// Blog posts data - complete dataset
const blogPosts = [
  {
    id: 1,
    title: "How Kerala Sellers Can Grow Sales Using WhatsApp in 2025",
    description: "A practical guide for Kerala sellers to grow online sales with WhatsApp catalogs, Malayalam product descriptions, and zero-commission stores.",
    content: `
      <h2>Why WhatsApp Works in Kerala</h2>
      <p>Most buyers browse on phones, discover through Status or Instagram, and complete orders after a quick chat. A clear catalog, quick replies, and trusted local delivery are the pillars of conversions.</p>
      
      <h3>Key advantages</h3>
      <ul>
        <li>Mobile-first discovery and conversations</li>
        <li>Trust via direct chat and local language</li>
        <li>Fast sharing through Status, Broadcast, and Groups</li>
      </ul>

      <h2>Step-by-Step: Set Up a High-Converting Catalog</h2>
      <ol>
        <li>Create product sheets with 3–5 clear photos each. Use a neutral background and show scale or use context.</li>
        <li>Write short titles in Malayalam/English and add 3–4 bullet benefits plus price.</li>
        <li>Include delivery options, payment modes (UPI/QR), and return policy in the catalog description.</li>
        <li>Pin best-sellers on top and use Collections for sarees, spices, handicrafts, etc.</li>
      </ol>

      <h2>Daily Status Plan (7 Days)</h2>
      <ul>
        <li><strong>Mon:</strong> New arrivals (3–5 slides) + price range</li>
        <li><strong>Tue:</strong> Behind-the-scenes packing + trust badge</li>
        <li><strong>Wed:</strong> Customer review screenshot (with consent)</li>
        <li><strong>Thu:</strong> Bundle offer (Buy 2 get 5% off)</li>
        <li><strong>Fri:</strong> "Only 5 left" urgency post</li>
        <li><strong>Sat:</strong> City-specific delivery update (Kochi/TVM)</li>
        <li><strong>Sun:</strong> Bestseller recap + next-week teaser</li>
      </ul>

      <h2>Response Speed and Scripts</h2>
      <p>Reply within 5 minutes during peak hours. Use quick replies for speed.</p>
      
      <div class="bg-gray-50">
        <p><strong>English:</strong> Hi! Thanks for your message. This item is in stock. Kerala delivery in 2–4 days. UPI available. Would you like to place the order now?</p>
        <p><strong>Malayalam:</strong> ഹായ്! മെസേജിന് നന്ദി. ഈ ഉൽപ്പന്നം സ്റ്റോക്കിലുണ്ട്. കേരള ഡെലിവറി 2–4 ദിവസം. UPI ലഭ്യം. ഇപ്പോൾ ഓർഡർ ചെയ്യട്ടേ?</p>
      </div>

      <h2>Photos That Convert</h2>
      <ul>
        <li>Natural light near a window</li>
        <li>Neutral background; crop distractions</li>
        <li>Add a hand for scale; show texture</li>
        <li>1 lifestyle shot (use case) per item</li>
      </ul>

      <h2>Turn Chats into Orders</h2>
      <ul>
        <li>Share a short order summary: item, price, delivery city, payment mode.</li>
        <li>Provide QR/UPI or COD; confirm address with a single message template.</li>
        <li>Send delivery ETA and a thank-you note to encourage repeat orders.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>WhatsApp is Kerala's most natural path from discovery to purchase. Combine clean catalogs, fast responses, and clear delivery to turn DMs into daily orders. Launch a zero-commission store with KeralaSellers.in and keep every rupee of profit while growing statewide.</p>
    `,
    readTime: "8-10 min read",
    category: "WhatsApp Commerce",
    date: "2025-01-15",
    image: "/hero.png",
    slug: "whatsapp-commerce-kerala-2025",
    views: "2.5k",
    likes: 156,
    author: "KeralaSellers Team"
  },
  {
    id: 2,
    title: "മലയാളത്തിൽ ഓൺലൈൻ വിൽപ്പന: സമ്പൂർണ്ണ ഗൈഡ്",
    description: "കേരളത്തിലെ വിൽപ്പനക്കാർക്കായി മലയാളത്തിൽ ഓൺലൈൻ സ്റ്റോർ തുടങ്ങാനുള്ള സമ്പൂർണ്ണ മാർഗനിർദേശം.",
    content: `
      <h2>ഓൺലൈൻ വിൽപ്പന എന്തുകൊണ്ട് ആവശ്യം?</h2>
      <p>കേരളത്തിൽ ഇന്ന് 90% ഷോപ്പിംഗും മൊബൈൽ ഫോണിലാണ് നടക്കുന്നത്. വാട്സാപ്പ്, ഇൻസ്റ്റഗ്രാം എന്നിവയിലൂടെ ഉപഭോക്താക്കൾ ഉൽപ്പന്നങ്ങൾ കണ്ടെത്തുകയും വാങ്ങുകയും ചെയ്യുന്നു.</p>

      <h3>പ്രധാന നേട്ടങ്ങൾ</h3>
      <ul>
        <li>കേരളത്തിലെ എല്ലാ ജില്ലകളിലും എത്തിക്കാം</li>
        <li>കമ്മീഷൻ ഇല്ലാതെ 100% ലാഭം സ്വന്തമാക്കാം</li>
        <li>മലയാളത്തിൽ ഉപഭോക്താക്കളുമായി സംസാരിക്കാം</li>
        <li>വീട്ടിൽ നിന്ന് തന്നെ ബിസിനസ് നടത്താം</li>
      </ul>

      <h2>എങ്ങനെ തുടങ്ങാം?</h2>
      <ol>
        <li><strong>ഉൽപ്പന്ന ഫോട്ടോകൾ:</strong> നല്ല വെളിച്ചത്തിൽ 3-5 ഫോട്ടോകൾ എടുക്കുക</li>
        <li><strong>വിവരണം:</strong> മലയാളത്തിലും ഇംഗ്ലീഷിലും ഉൽപ്പന്ന വിവരങ്ങൾ എഴുതുക</li>
        <li><strong>വില നിശ്ചയിക്കുക:</strong> മാർക്കറ്റ് റേറ്റും ഡെലിവറി ചാർജും കൂടെ ചേർക്കുക</li>
        <li><strong>വാട്സാപ്പ് നമ്പർ:</strong> ബിസിനസ് അക്കൗണ്ട് സെറ്റപ്പ് ചെയ്യുക</li>
      </ol>

      <h2>വാട്സാപ്പ് സ്റ്റാറ്റസ് ടിപ്സ്</h2>
      <ul>
        <li><strong>തിങ്കൾ:</strong> പുതിയ ഉൽപ്പന്നങ്ങളുടെ ഫോട്ടോകൾ</li>
        <li><strong>ചൊവ്വ:</strong> പാക്കിംഗ് വീഡിയോ</li>
        <li><strong>ബുധൻ:</strong> കസ്റ്റമർ റിവ്യൂ</li>
        <li><strong>വ്യാഴം:</strong> ഓഫർ പോസ്റ്റ്</li>
        <li><strong>വെള്ളി:</strong> സ്റ്റോക്ക് ലിമിറ്റഡ് പോസ്റ്റ്</li>
      </ul>

      <h2>ഓർഡർ എങ്ങനെ എടുക്കാം?</h2>
      <p>വാട്സാപ്പിൽ വന്ന മെസേജിന് 5 മിനിറ്റിനുള്ളിൽ മറുപടി നൽകുക. UPI, GPay, PhonePe എന്നിവയിലൂടെ പേയ്മെന്റ് സ്വീകരിക്കുക.</p>

      <div class="bg-green-50">
        <p><strong>സാമ്പിൾ മെസേജ്:</strong></p>
        <p>"ഹലോ! മെസേജിന് നന്ദി. ഈ ഉൽപ്പന്നം സ്റ്റോക്കിലുണ്ട്. കേരളയിൽ 2-4 ദിവസംകൊണ്ട് എത്തിക്കാം. UPI പേയ്മെന്റ് സ്വീകരിക്കുന്നു. ഓർഡർ ചെയ്യാൻ വിലാസം അയച്ചുതരാമോ?"</p>
      </div>

      <h2>വിജയത്തിനുള്ള മന്ത്രം</h2>
      <ul>
        <li>എല്ലാ ദിവസവും സ്റ്റാറ്റസ് അപ്ഡേറ്റ് ചെയ്യുക</li>
        <li>കസ്റ്റമറുമായി മലയാളത്തിൽ സംസാരിക്കുക</li>
        <li>നല്ല ഫോട്ടോകൾ എടുത്ത് പോസ്റ്റ് ചെയ്യുക</li>
        <li>സമയത്ത് ഡെലിവറി ചെയ്യുക</li>
      </ul>
    `,
    readTime: "6-8 min read",
    category: "Malayalam Guide",
    date: "2025-01-10",
    image: "/blog-2.png",
    slug: "online-selling-malayalam-guide",
    views: "1.8k",
    likes: 89,
    author: "കേരള സെല്ലേഴ്സ് ടീം"
  },
  {
    id: 3,
    title: "Zero Commission vs Other Platforms: Complete Comparison",
    description: "Compare KeralaSellers with other e-commerce platforms and see why zero commission matters for Kerala sellers.",
    content: `
      <h2>The Commission Problem</h2>
      <p>Most e-commerce platforms charge 15-30% commission on every sale. For a ₹1000 product, you lose ₹150-300 before considering other costs like advertising, packaging, and shipping.</p>

      <h3>Traditional Platform Costs</h3>
      <ul>
        <li><strong>Amazon:</strong> 5-20% referral fee + 2-3% payment gateway</li>
        <li><strong>Flipkart:</strong> 5-25% commission + fixed closing fee</li>
        <li><strong>Meesho:</strong> 5-20% commission + shipping charges</li>
        <li><strong>Instagram/Facebook:</strong> 5% selling fee + payment processing</li>
      </ul>

      <h2>Why Zero Commission Matters</h2>
      <p>For Kerala sellers, especially small businesses and homepreneurs, every rupee counts. Here's the math:</p>

      <div class="bg-blue-50">
        <h3>Example: Selling Handmade Products Worth ₹50,000/month</h3>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Traditional Platform</th>
              <th>Zero Commission</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revenue</td>
              <td>₹50,000</td>
              <td>₹50,000</td>
            </tr>
            <tr>
              <td>Commission (15%)</td>
              <td>-₹7,500</td>
              <td>₹0</td>
            </tr>
            <tr>
              <td>Net Income</td>
              <td>₹42,500</td>
              <td>₹50,000</td>
            </tr>
            <tr>
              <td><strong>Annual Difference</strong></td>
              <td colspan="2"><strong>₹90,000 more with zero commission!</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Kerala-Specific Advantages</h2>
      
      <h3>Language Support</h3>
      <ul>
        <li>Product descriptions in Malayalam</li>
        <li>Customer support in local language</li>
        <li>Better connection with Kerala customers</li>
      </ul>

      <h3>Local Understanding</h3>
      <ul>
        <li>Festival season strategies for Onam, Vishu</li>
        <li>Kerala shipping and delivery networks</li>
        <li>Local payment preferences (UPI, bank transfers)</li>
      </ul>

      <h2>Platform Comparison Chart</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>KeralaSellers</th>
            <th>Amazon</th>
            <th>Flipkart</th>
            <th>Meesho</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Commission</td>
            <td>0%</td>
            <td>5-20%</td>
            <td>5-25%</td>
            <td>5-20%</td>
          </tr>
          <tr>
            <td>Malayalam Support</td>
            <td>✓</td>
            <td>✗</td>
            <td>✗</td>
            <td>✗</td>
          </tr>
          <tr>
            <td>WhatsApp Integration</td>
            <td>✓</td>
            <td>✗</td>
            <td>✗</td>
            <td>✗</td>
          </tr>
          <tr>
            <td>Setup Time</td>
            <td>5 minutes</td>
            <td>2-3 days</td>
            <td>3-5 days</td>
            <td>1-2 days</td>
          </tr>
        </tbody>
      </table>

      <h2>Success Stories</h2>
      <div class="bg-green-50">
        <p><strong>Priya from Kochi:</strong> "I was paying ₹8,000 monthly in commissions on other platforms. With KeralaSellers, I save that entire amount and reinvest it in better products and marketing."</p>
      </div>

      <h2>Making the Switch</h2>
      <p>Transitioning to a zero-commission platform doesn't mean losing customers. In fact, Kerala sellers report:</p>
      <ul>
        <li>Better profit margins allow for competitive pricing</li>
        <li>Direct customer relationships through WhatsApp</li>
        <li>More control over branding and customer experience</li>
        <li>Faster payments without platform delays</li>
      </ul>

      <h2>Conclusion</h2>
      <p>For Kerala sellers, the choice is clear: keep 100% of your profits with a platform built specifically for your market, or continue paying hefty commissions to generic platforms. The ₹90,000+ annual savings can be reinvested into growing your business further.</p>
    `,
    readTime: "5-7 min read",
    category: "Platform Comparison",
    date: "2025-01-08",
    image: "/blog-3.png",
    slug: "zero-commission-platform-comparison",
    views: "3.2k",
    likes: 201,
    author: "KeralaSellers Team"
  }
];

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const post = blogPosts.find(p => p.slug === slug);
  const [likes, setLikes] = useState(post?.likes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has liked this post before (using localStorage)
    if (typeof window !== 'undefined') {
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
      setIsLiked(likedPosts.includes(post?.slug));
    }
  }, [post?.slug]);

  if (!post) {
    notFound();
  }

  const handleLike = () => {
    if (typeof window === 'undefined') return;
    
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    
    if (isLiked) {
      // Unlike
      setLikes(likes - 1);
      setIsLiked(false);
      const updatedLikedPosts = likedPosts.filter((postSlug: string) => postSlug !== post.slug);
      localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
    } else {
      // Like
      setLikes(likes + 1);
      setIsLiked(true);
      const updatedLikedPosts = [...likedPosts, post.slug];
      localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
    }
  };

  const handleShare = async (platform?: string) => {
    if (typeof window === 'undefined') return;
    
    const shareData = {
      title: post.title,
      text: post.description,
      url: window.location.href,
    };

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy link');
      }
      return;
    }

    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`, '_blank');
      return;
    }

    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.title)}&url=${encodeURIComponent(shareData.url)}`, '_blank');
      return;
    }

    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`, '_blank');
      return;
    }

    // Native share (fallback)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Share failed');
      }
    } else {
      setShareMenuOpen(true);
    }
  };

  return (
    <>
      {/* Structured Data for Individual Blog Post */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: `https://www.keralasellers.in${post.image}`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Person",
              name: post.author
            },
            publisher: {
              "@type": "Organization",
              name: "KeralaSellers.in",
              logo: {
                "@type": "ImageObject",
                url: "https://www.keralasellers.in/k-logo-removebg-preview.png"
              }
            },
            mainEntityOfPage: `https://www.keralasellers.in/blog/${post.slug}`,
            wordCount: post.content.split(' ').length,
            inLanguage: post.title.includes('മലയാളം') || post.title.includes('കേരളത്തിലെ') ? 'ml' : 'en',
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-[#fdfff0] to-white">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" aria-label="Go to KeralaSellers Home" className="transition-transform duration-300 hover:scale-105">
                <Image
                  src="/k-logo-removebg-preview.png"
                  alt="KeralaSellers.in"
                  width={100}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                  priority
                />
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="sm" className="border-green-600 text-green-700 hover:bg-green-50 transition-all duration-300 hover:scale-105 button-press">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Article Header */}
        <section className={`container mx-auto px-4 py-8 md:py-12 transition-all duration-1000 ${mounted ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-all duration-300 hover:translate-x-1">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <Badge variant="outline" className="mb-4 text-green-700 border-green-200 animate-fade-in">
              {post.category}
            </Badge>

            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 animate-fade-in-up">
              {post.title}
            </h1>

            <p className="text-lg text-gray-600 mb-6 animate-fade-in-up" style={{animationDelay: '200ms'}}>
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 animate-fade-in-up" style={{animationDelay: '400ms'}}>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {post.views} views
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {likes}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl mb-8 animate-fade-in-up group" style={{animationDelay: '600ms'}}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none animate-fade-in-up px-4 md:px-0"
              style={{animationDelay: '800ms'}}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer with Working Buttons */}
            <div className="border-t border-gray-200 pt-8 mt-12 animate-fade-in-up" style={{animationDelay: '1000ms'}}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleLike}
                    className={`border-green-600 transition-all duration-300 button-press ${
                      isLiked ? 'bg-green-50 text-green-700 border-green-700' : 'text-green-700 hover:bg-green-50'
                    }`}
                  >
                    <Heart className={`w-4 h-4 mr-2 transition-all duration-300 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                    {isLiked ? 'Liked' : 'Like'} ({likes})
                  </Button>
                  
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleShare()}
                      className="border-green-600 text-green-700 hover:bg-green-50 transition-all duration-300 button-press"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>

                    {shareMenuOpen && (
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 min-w-[200px] animate-fade-scale">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold text-gray-900">Share Article</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShareMenuOpen(false)}
                            className="p-1 h-auto"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleShare('facebook')}
                            className="w-full justify-start hover:bg-blue-50 transition-all duration-300"
                          >
                            <Facebook className="w-4 h-4 mr-2 text-blue-600" />
                            Facebook
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleShare('twitter')}
                            className="w-full justify-start hover:bg-blue-50 transition-all duration-300"
                          >
                            <Twitter className="w-4 h-4 mr-2 text-blue-500" />
                            Twitter
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleShare('linkedin')}
                            className="w-full justify-start hover:bg-blue-50 transition-all duration-300"
                          >
                            <Linkedin className="w-4 h-4 mr-2 text-blue-700" />
                            LinkedIn
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleShare('copy')}
                            className="w-full justify-start hover:bg-gray-50 transition-all duration-300"
                          >
                            <Copy className="w-4 h-4 mr-2 text-gray-600" />
                            {copySuccess ? 'Copied!' : 'Copy Link'}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Published by {post.author} on {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <Card className="mt-12 bg-gradient-to-r from-green-50 to-green-100 border-green-200 animate-fade-in-up group hover:shadow-lg transition-all duration-500" style={{animationDelay: '1200ms'}}>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  Ready to Start Your Kerala Business?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join thousands of successful Kerala sellers who are growing their businesses with zero commission. 
                  Start your free store today!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Link href="/" className="flex-1">
                    <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 button-press">
                      Start Selling Free
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/yourstore" className="flex-1">
                    <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50 transition-all duration-300 hover:scale-105 button-press">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </article>

        {/* Related Articles */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost, index) => (
                  <Card key={relatedPost.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{animationDelay: `${1400 + index * 200}ms`}}>
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="outline" className="text-xs text-green-700 border-green-200 mb-2">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-bold text-sm text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {relatedPost.description}
                      </p>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" size="sm" className="w-full text-green-600 hover:bg-green-50 group/btn transition-all duration-300">
                          Read More
                          <ChevronRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Image
                src="/klogo.png"
                alt="KeralaSellers Logo"
                width={120}
                height={60}
                className="h-16 w-auto mx-auto mb-4 transition-transform duration-300 hover:scale-105"
              />
              <p className="text-gray-400 mb-4 max-w-md mx-auto">
                Empowering Kerala's sellers with commission-free online stores.
              </p>
              <div className="text-sm text-gray-500">
                © 2025 KeralaSellers.in • Made with ❤️ in Kerala
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
