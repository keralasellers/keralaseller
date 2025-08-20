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
  BookOpen,
  TrendingUp,
  ChevronRight,
  MapPin,
  Target,
  CheckCircle,
  Camera,
  MessageCircle,
  Smartphone,
  BarChart3,
  ArrowRight,
  Copy,
  Facebook,
  Twitter,
  Linkedin,
  X,
} from "lucide-react";

// Blog posts data - same as in main blog page
const blogPosts = [
  {
    id: 1,
    title: "How Kerala Sellers Can Grow Sales Using WhatsApp in 2025",
    description: "A practical guide for Kerala sellers to grow online sales with WhatsApp catalogs, Malayalam product descriptions, and zero-commission stores.",
    content: `
      Why WhatsApp Works in Kerala
      Most buyers browse on phones, discover through Status or Instagram, and complete orders after a quick chat. A clear catalog, quick replies, and trusted local delivery are the pillars of conversions.
      
      Key advantages
      
        Mobile-first discovery and conversations
        Trust via direct chat and local language
        Fast sharing through Status, Broadcast, and Groups
      

      Step-by-Step: Set Up a High-Converting Catalog
      
        Create product sheets with 3–5 clear photos each. Use a neutral background and show scale or use context.
        Write short titles in Malayalam/English and add 3–4 bullet benefits plus price.
        Include delivery options, payment modes (UPI/QR), and return policy in the catalog description.
        Pin best-sellers on top and use Collections for sarees, spices, handicrafts, etc.
      

      Daily Status Plan (7 Days)
      
        Mon: New arrivals (3–5 slides) + price range
        Tue: Behind-the-scenes packing + trust badge
        Wed: Customer review screenshot (with consent)
        Thu: Bundle offer (Buy 2 get 5% off)
        Fri: "Only 5 left" urgency post
        Sat: City-specific delivery update (Kochi/TVM)
        Sun: Bestseller recap + next-week teaser
      

      Response Speed and Scripts
      Reply within 5 minutes during peak hours. Use quick replies for speed.
      
      
        English: Hi! Thanks for your message. This item is in stock. Kerala delivery in 2–4 days. UPI available. Would you like to place the order now?
        Malayalam: ഹായ്! മെസേജിന് നന്ദി. ഈ ഉൽപ്പന്നം സ്റ്റോക്കിലുണ്ട്. കേരള ഡെലിവറി 2–4 ദിവസം. UPI ലഭ്യം. ഇപ്പോൾ ഓർഡർ ചെയ്യട്ടേ?
      

      Photos That Convert
      
        Natural light near a window
        Neutral background; crop distractions
        Add a hand for scale; show texture
        1 lifestyle shot (use case) per item
      

      Turn Chats into Orders
      
        Share a short order summary: item, price, delivery city, payment mode.
        Provide QR/UPI or COD; confirm address with a single message template.
        Send delivery ETA and a thank-you note to encourage repeat orders.
      

      Conclusion
      WhatsApp is Kerala's most natural path from discovery to purchase. Combine clean catalogs, fast responses, and clear delivery to turn DMs into daily orders. Launch a zero-commission store with KeralaSellers.in and keep every rupee of profit while growing statewide.
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
      ഓൺലൈൻ വിൽപ്പന എന്തുകൊണ്ട് ആവശ്യം?
      കേരളത്തിൽ ഇന്ന് 90% ഷോപ്പിംഗും മൊബൈൽ ഫോണിലാണ് നടക്കുന്നത്. വാട്സാപ്പ്, ഇൻസ്റ്റഗ്രാം എന്നിവയിലൂടെ ഉപഭോക്താക്കൾ ഉൽപ്പന്നങ്ങൾ കണ്ടെത്തുകയും വാങ്ങുകയും ചെയ്യുന്നു.

      പ്രധാന നേട്ടങ്ങൾ
      
        കേരളത്തിലെ എല്ലാ ജില്ലകളിലും എത്തിക്കാം
        കമ്മീഷൻ ഇല്ലാതെ 100% ലാഭം സ്വന്തമാക്കാം
        മലയാളത്തിൽ ഉപഭോക്താക്കളുമായി സംസാരിക്കാം
        വീട്ടിൽ നിന്ന് തന്നെ ബിസിനസ് നടത്താം
      

      എങ്ങനെ തുടങ്ങാം?
      
        ഉൽപ്പന്ന ഫോട്ടോകൾ: നല്ല വെളിച്ചത്തിൽ 3-5 ഫോട്ടോകൾ എടുക്കുക
        വിവരണം: മലയാളത്തിലും ഇംഗ്ലീഷിലും ഉൽപ്പന്ന വിവരങ്ങൾ എഴുതുക
        വില നിശ്ചയിക്കുക: മാർക്കറ്റ് റേറ്റും ഡെലിവറി ചാർജും കൂടെ ചേർക്കുക
        വാട്സാപ്പ് നമ്പർ: ബിസിനസ് അക്കൗണ്ട് സെറ്റപ്പ് ചെയ്യുക
      

      വാട്സാപ്പ് സ്റ്റാറ്റസ് ടിപ്സ്
      
        തിങ്കൾ: പുതിയ ഉൽപ്പന്നങ്ങളുടെ ഫോട്ടോകൾ
        ചൊവ്വ: പാക്കിംഗ് വീഡിയോ
        ബുധൻ: കസ്റ്റമർ റിവ്യൂ
        വ്യാഴം: ഓഫർ പോസ്റ്റ്
        വെള്ളി: സ്റ്റോക്ക് ലിമിറ്റഡ് പോസ്റ്റ്
      

      ഓർഡർ എങ്ങനെ എടുക്കാം?
      വാട്സാപ്പിൽ വന്ന മെസേജിന് 5 മിനിറ്റിനുള്ളിൽ മറുപടി നൽകുക. UPI, GPay, PhonePe എന്നിവയിലൂടെ പേയ്മെന്റ് സ്വീകരിക്കുക.

      
        സാമ്പിൾ മെസേജ്:
        "ഹലോ! മെസേജിന് നന്ദി. ഈ ഉൽപ്പന്നം സ്റ്റോക്കിലുണ്ട്. കേരളയിൽ 2-4 ദിവസംകൊണ്ട് എത്തിക്കാം. UPI പേയ്മെന്റ് സ്വീകരിക്കുന്നു. ഓർഡർ ചെയ്യാൻ വിലാസം അയച്ചുതരാമോ?"
      

      വിജയത്തിനുള്ള മന്ത്രം
      
        എല്ലാ ദിവസവും സ്റ്റാറ്റസ് അപ്ഡേറ്റ് ചെയ്യുക
        കസ്റ്റമറുമായി മലയാളത്തിൽ സംസാരിക്കുക
        നല്ല ഫോട്ടോകൾ എടുത്ത് പോസ്റ്റ് ചെയ്യുക
        സമയത്ത് ഡെലിവറി ചെയ്യുക
      
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
      The Commission Problem
      Most e-commerce platforms charge 15-30% commission on every sale. For a ₹1000 product, you lose ₹150-300 before considering other costs like advertising, packaging, and shipping.

      Traditional Platform Costs
      
        Amazon: 5-20% referral fee + 2-3% payment gateway
        Flipkart: 5-25% commission + fixed closing fee
        Meesho: 5-20% commission + shipping charges
        Instagram/Facebook: 5% selling fee + payment processing
      

      Why Zero Commission Matters
      For Kerala sellers, especially small businesses and homepreneurs, every rupee counts. Here's the math:

      
        Example: Selling Handmade Products Worth ₹50,000/month
        
          Traditional PlatformZero Commission
          Revenue: ₹50,000Revenue: ₹50,000
          Commission (15%): -₹7,500Commission: ₹0
          Net Income: ₹42,500Net Income: ₹50,000
          Annual Difference: ₹90,000 more with zero commission!
        
      

      Kerala-Specific Advantages
      Language Support
      
        Product descriptions in Malayalam
        Customer support in local language
        Better connection with Kerala customers
      

      Local Understanding
      
        Festival season strategies for Onam, Vishu
        Kerala shipping and delivery networks
        Local payment preferences (UPI, bank transfers)
      

      Platform Comparison Chart
      
        
          
            
              Feature
              KeralaSellers
              Amazon
              Flipkart
              Meesho
            
          
          
            
              Commission
              0%
              5-20%
              5-25%
              5-20%
            
            
              Malayalam Support
              ✓
              ✗
              ✗
              ✗
            
            
              WhatsApp Integration
              ✓
              ✗
              ✗
              ✗
            
            
              Setup Time
              5 minutes
              2-3 days
              3-5 days
              1-2 days
            
          
        
      

      Success Stories
      
        Priya from Kochi: "I was paying ₹8,000 monthly in commissions on other platforms. With KeralaSellers, I save that entire amount and reinvest it in better products and marketing."
      

      Making the Switch
      Transitioning to a zero-commission platform doesn't mean losing customers. In fact, Kerala sellers report:
      
        Better profit margins allow for competitive pricing
        Direct customer relationships through WhatsApp
        More control over branding and customer experience
        Faster payments without platform delays
      

      Conclusion
      For Kerala sellers, the choice is clear: keep 100% of your profits with a platform built specifically for your market, or continue paying hefty commissions to generic platforms. The ₹90,000+ annual savings can be reinvested into growing your business further.
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

        {/* Rest of your component exactly as it was... */}
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

<style jsx>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeInUp {
    from { 
      opacity: 0; 
      transform: translateY(20px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  @keyframes fadeScale {
    from { 
      opacity: 0; 
      transform: scale(0.95); 
    }
    to { 
      opacity: 1; 
      transform: scale(1); 
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out;
  }
  
  .animate-fade-scale {
    animation: fadeScale 0.3s ease-out;
  }
  
  .button-press {
    transition: transform 0.15s ease;
  }
  
  .button-press:active {
    transform: scale(0.95);
  }
  
  /* Enhanced Prose Styling */
  .prose {
    color: #374151;
    max-width: none;
  }
  
  .prose h1 {
    font-size: 2.25rem;
    font-weight: 800;
    color: #111827;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 2rem;
  }
  
  .prose h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #111827;
    line-height: 1.3;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e5e7eb;
  }
  
  .prose h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    line-height: 1.4;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .prose h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #374151;
    line-height: 1.4;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }
  
  .prose p {
    font-size: 1.125rem;
    line-height: 1.8;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: #4b5563;
  }
  
  .prose ul, .prose ol {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }
  
  .prose li {
    font-size: 1.125rem;
    line-height: 1.7;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    color: #4b5563;
  }
  
  .prose li strong {
    color: #059669;
    font-weight: 600;
  }
  
  .prose strong {
    color: #059669;
    font-weight: 600;
  }
  
  .prose em {
    color: #6b7280;
    font-style: italic;
  }
  
  /* Enhanced Table Styling */
  .prose table {
    width: 100%;
    margin: 2rem 0;
    border-collapse: collapse;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
  
  .prose table th {
    background-color: #f9fafb;
    color: #374151;
    font-weight: 600;
    font-size: 0.875rem;
    text-align: left;
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .prose table td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    font-size: 0.875rem;
    color: #4b5563;
  }
  
  .prose table tr:hover {
    background-color: #f9fafb;
  }
  
  /* Enhanced Blockquote/Highlighted Content */
  .prose .bg-green-50,
  .prose .bg-blue-50,
  .prose .bg-yellow-50,
  .prose .bg-red-50,
  .prose .bg-gray-50,
  .prose .bg-pink-50 {
    padding: 1.5rem;
    border-radius: 0.75rem;
    margin: 2rem 0;
    border-left: 4px solid #059669;
  }
  
  .prose .bg-green-50 {
    background-color: #f0fdf4;
    border-left-color: #059669;
  }
  
  .prose .bg-blue-50 {
    background-color: #eff6ff;
    border-left-color: #3b82f6;
  }
  
  .prose .bg-yellow-50 {
    background-color: #fefce8;
    border-left-color: #eab308;
  }
  
  .prose .bg-red-50 {
    background-color: #fef2f2;
    border-left-color: #ef4444;
  }
  
  .prose .bg-gray-50 {
    background-color: #f9fafb;
    border-left-color: #6b7280;
  }
  
  .prose .bg-pink-50 {
    background-color: #fdf2f8;
    border-left-color: #ec4899;
  }
  
  .prose .bg-green-50 p,
  .prose .bg-blue-50 p,
  .prose .bg-yellow-50 p,
  .prose .bg-red-50 p,
  .prose .bg-gray-50 p,
  .prose .bg-pink-50 p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
  
  /* Code and Preformatted Text */
  .prose code {
    background-color: #f3f4f6;
    color: #1f2937;
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-family: 'Courier New', monospace;
  }
  
  .prose pre {
    background-color: #1f2937;
    color: #f9fafb;
    padding: 1.5rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 2rem 0;
  }
  
  /* Links */
  .prose a {
    color: #059669;
    text-decoration: underline;
    font-weight: 500;
  }
  
  .prose a:hover {
    color: #047857;
    text-decoration: none;
  }
  
  /* Spacing Improvements */
  .prose > *:first-child {
    margin-top: 0;
  }
  
  .prose > *:last-child {
    margin-bottom: 0;
  }
  
  /* Line Clamping */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  /* Responsive Typography */
  @media (max-width: 768px) {
    .prose h1 {
      font-size: 1.875rem;
    }
    
    .prose h2 {
      font-size: 1.5rem;
      margin-top: 2rem;
    }
    
    .prose h3 {
      font-size: 1.25rem;
      margin-top: 1.5rem;
    }
    
    .prose p,
    .prose li {
      font-size: 1rem;
    }
    
    .prose table {
      font-size: 0.75rem;
    }
    
    .prose table th,
    .prose table td {
      padding: 0.75rem 0.5rem;
    }
  }
  
  /* Print Styles */
  @media print {
    .prose {
      font-size: 12pt;
      line-height: 1.5;
    }
    
    .prose h1,
    .prose h2,
    .prose h3,
    .prose h4 {
      page-break-after: avoid;
    }
    
    .prose table {
      page-break-inside: avoid;
    }
  }
  .blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.blog-card {
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.blog-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  aspect-ratio: 3/2;
}

.blog-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.blog-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.blog-description {
  flex-grow: 1;
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 1rem;
}

.blog-footer {
  margin-top: auto;
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    padding: 0.5rem;
    gap: 1rem;
  }
  
  .blog-image {
    height: 180px;
  }
  
  .blog-content {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .blog-image {
    height: 160px;
  }
}

`}</style>
    </>
  );
}
