"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Leaf,
  MailCheck,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Trophy,
  Shield,
  Zap,
  Smartphone,
  ShoppingCart,
  MessageCircle,
  Camera,
  Truck,
  BarChart3,
  Link2,
  Play,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Star,
  Heart,
  Share2,
  BookOpen,
  Target,
  Lightbulb,
  Award,
} from "lucide-react";

// Expanded blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How Kerala Sellers Can Grow Sales Using WhatsApp in 2025",
    description: "A practical guide for Kerala sellers to grow online sales with WhatsApp catalogs, Malayalam product descriptions, and zero-commission stores.",
    readTime: "8-10 min read",
    category: "WhatsApp Commerce",
    date: "2025-01-15",
    image: "/hero.png",
    slug: "whatsapp-commerce-kerala-2025",
    featured: true,
    views: "2.5k",
    likes: 156
  },
  {
    id: 2,
    title: "മലയാളത്തിൽ ഓൺലൈൻ വിൽപ്പന: സമ്പൂർണ്ണ ഗൈഡ്",
    description: "കേരളത്തിലെ വിൽപ്പനക്കാർക്കായി മലയാളത്തിൽ ഓൺലൈൻ സ്റ്റോർ തുടങ്ങാനുള്ള സമ്പൂർണ്ണ മാർഗനിർദേശം.",
    readTime: "6-8 min read",
    category: "Malayalam Guide",
    date: "2025-01-10",
    image: "/blog-2.png",
    slug: "online-selling-malayalam-guide",
    views: "1.8k",
    likes: 89
  },
  {
    id: 3,
    title: "Zero Commission vs Other Platforms: Complete Comparison",
    description: "Compare KeralaSellers with other e-commerce platforms and see why zero commission matters for Kerala sellers.",
    readTime: "5-7 min read",
    category: "Platform Comparison",
    date: "2025-01-08",
    image: "/blog-3.png",
    slug: "zero-commission-platform-comparison",
    views: "3.2k",
    likes: 201
  },
//   {
//     id: 4,
//     title: "Instagram to Sales: Kerala Seller's Complete Guide",
//     description: "Turn your Instagram followers into paying customers with these proven strategies designed specifically for Kerala market.",
//     readTime: "7-9 min read",
//     category: "Social Media",
//     date: "2025-01-05",
//     image: "/blog-4.png",
//     slug: "instagram-sales-kerala-guide",
//     views: "2.1k",
//     likes: 134
//   },
//   {
//     id: 5,
//     title: "കേരളത്തിലെ ഹോം ബിസിനസ്: വിജയകരമായ തുടക്കം",
//     description: "വീട്ടിൽ നിന്ന് ചെറിയ ബിസിനസ് തുടങ്ങി വിജയിച്ച കേരളത്തിലെ സ്ത്രീകളുടെ കഥകളും ടിപ്സും.",
//     readTime: "8-10 min read",
//     category: "Success Stories",
//     date: "2025-01-03",
//     image: "/blog-5.png",
//     slug: "kerala-home-business-success",
//     views: "1.9k",
//     likes: 98
//   },
//   {
//     id: 6,
//     title: "Festival Season Selling: Maximize Your Kerala Store Revenue",
//     description: "Complete playbook for Kerala sellers to boost sales during Onam, Vishu, Christmas and other festival seasons.",
//     readTime: "6-8 min read",
//     category: "Seasonal Strategy",
//     date: "2024-12-28",
//     image: "/blog-6.png",
//     slug: "festival-season-selling-kerala",
//     views: "2.8k",
//     likes: 167
//   },
//   {
//     id: 7,
//     title: "Local SEO for Kerala Businesses: Get Found Online",
//     description: "Optimize your online store to rank higher in Kerala-specific searches and attract more local customers.",
//     readTime: "9-11 min read",
//     category: "Digital Marketing",
//     date: "2024-12-25",
//     image: "/blog-7.png",
//     slug: "local-seo-kerala-businesses",
//     views: "1.6k",
//     likes: 73
//   },
//   {
//     id: 8,
//     title: "From ₹0 to ₹50k: Real Kerala Seller Success Story",
//     description: "Meet Priya from Kochi who built a thriving handmade jewelry business using zero-commission platforms.",
//     readTime: "5-7 min read",
//     category: "Success Stories",
//     date: "2024-12-22",
//     image: "/blog-8.png",
//     slug: "priya-kochi-success-story",
//     views: "4.1k",
//     likes: 289
//   }
];

// Categories for filtering
const categories = [
  "All",
  "WhatsApp Commerce",
  "Malayalam Guide", 
  "Success Stories",
  "Digital Marketing",
  "Platform Comparison",
  "Social Media",
  "Seasonal Strategy"
];

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === "All" || post.category === selectedCategory
  );

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 3);
  };

  return (
    <>
      {/* Enhanced Structured Data Scripts */}
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
            inLanguage: ["en", "ml"],
            blogPost: blogPosts.map(post => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              url: `https://www.keralasellers.in/blog/${post.slug}`,
              image: `https://www.keralasellers.in${post.image}`,
              author: {
                "@type": "Organization",
                name: "KeralaSellers.in"
              }
            }))
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-[#fdfff0] to-white">
        {/* Compact Mobile-Friendly Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" aria-label="Go to KeralaSellers Home" 
                    className={`transition-transform duration-300 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
                <Image
                  src="/k-logo-removebg-preview.png"
                  alt="KeralaSellers.in"
                  width={100}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 animate-pulse">
                  <Leaf className="w-3 h-3 mr-1" />
                  Coming Soon
                </Badge>

                <Link href="/yourstore">
                  <Button variant="outline" size="sm" className="border-green-600 text-green-700 hover:bg-green-50 transition-all duration-300 hover:scale-105">
                    <Play className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </Link>

                <Link href="/">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105">
                    Start Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 pb-4 border-t border-green-100 animate-slide-down">
                <div className="flex flex-col space-y-3 pt-4">
                  <Link href="/yourstore" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full border-green-600 text-green-700">
                      <Play className="w-4 h-4 mr-2" />
                      See Demo
                    </Button>
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Start Selling Free
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Enhanced Hero Section */}
        <section className={`container mx-auto px-4 py-8 md:py-12 transition-all duration-1000 ${mounted ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-4 animate-bounce">
              <BookOpen className="w-4 h-4 mr-1" />
              Kerala Sellers Blog
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Grow Your Business in Kerala
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert tips, guides, and insights to help Kerala sellers succeed online. From WhatsApp commerce to Malayalam marketing strategies - everything you need to build a thriving business.
            </p>

            {/* Blog Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">10k+</div>
                <div className="text-sm text-gray-600">Readers Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className={`container mx-auto px-4 mb-8 transition-all duration-1000 delay-200 ${mounted ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "border-green-200 text-green-700 hover:bg-green-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Featured Article */}
        {blogPosts[0] && (
          <section className={`container mx-auto px-4 mb-12 transition-all duration-1000 delay-300 ${mounted ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border-green-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-48 md:h-full overflow-hidden">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="text-green-700 border-green-200">
                      {blogPosts[0].category}
                    </Badge>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {blogPosts[0].views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {blogPosts[0].likes}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blogPosts[0].description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Kerala Focus
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      Actionable
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      <Button className="bg-green-600 hover:bg-green-700 group/btn">
                        Read Full Article
                        <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon" className="border-green-200 text-green-600 hover:bg-green-50">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Quick Tips Section */}
        <section className={`container mx-auto px-4 mb-12 transition-all duration-1000 delay-400 ${mounted ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Quick Success Tips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential strategies every Kerala seller should know
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageCircle className="w-8 h-8 text-green-600" />,
                title: "WhatsApp First",
                tip: "85% of Kerala customers prefer WhatsApp for business communication"
              },
              {
                icon: <Smartphone className="w-8 h-8 text-green-600" />,
                title: "Mobile Optimized",
                tip: "93% of online shopping in Kerala happens on mobile devices"
              },
              {
                icon: <Award className="w-8 h-8 text-green-600" />,
                title: "Local Trust",
                tip: "Kerala customers value local testimonials and reviews most"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.tip}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className={`container mx-auto px-4 py-8 transition-all duration-1000 delay-500 ${mounted ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest strategies and insights for growing your Kerala business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredPosts.slice(1, visiblePosts).map((post, index) => (
              <Card key={post.id} 
                    className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in-up border-green-50 hover:border-green-200`}
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-green-700 border-green-200 text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="w-full text-green-600 hover:bg-green-50 group/btn">
                      Read Article
                      <ChevronRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < filteredPosts.length && (
            <div className="text-center">
              <Button 
                onClick={loadMorePosts}
                variant="outline" 
                className="border-green-600 text-green-700 hover:bg-green-50"
              >
                Load More Articles
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </section>

        {/* Success Stories Highlight */}
        <section className={`container mx-auto px-4 py-12 transition-all duration-1000 delay-600 ${mounted ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-white/20 text-white border-white/30 mb-4">
                    <Trophy className="w-4 h-4 mr-1" />
                    Success Stories
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Join 1000+ Successful Kerala Sellers
                  </h3>
                  <p className="text-green-100 mb-6 text-lg">
                    Read real stories of Kerala entrepreneurs who transformed their small businesses into thriving online ventures.
                  </p>
                  <Link href="/blog/success-stories">
                    <Button variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
                      Read Success Stories
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">₹2.5L</div>
                      <div className="text-sm text-green-100">Avg. Monthly Revenue</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">300%</div>
                      <div className="text-sm text-green-100">Growth in 6 months</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Newsletter CTA */}
        <section className={`container mx-auto px-4 py-12 transition-all duration-1000 delay-700 ${mounted ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-8 text-center">
              <div className="max-w-3xl mx-auto">
                <Lightbulb className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Stay Updated with Kerala Business Tips
                </h3>
                <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
                  Get the latest strategies, success stories, and insights delivered weekly. Join 5000+ Kerala entrepreneurs already growing their businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
                  <Link href="/" className="flex-1">
                    <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105">
                      Join Early Access
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-gray-500">
                  Free resources • Malayalam support • Zero spam
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/klogo.png"
                    alt="KeralaSellers Logo"
                    width={120}
                    height={60}
                    className="h-16 md:h-20 w-auto"
                  />
                </div>
                <p className="text-gray-400 mb-4 max-w-md text-sm md:text-base">
                  Empowering Kerala's sellers with commission-free online stores. Built by Keralites, for Keralites.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-xs md:text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Secure Platform</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span>Fast Setup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-green-400" />
                    <span>Made in Kerala</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <Link href="/blog" className="hover:text-white transition-colors">
                      Blog & Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/#features" className="hover:text-white transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/#how-it-works" className="hover:text-white transition-colors">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/#faq" className="hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>keralasellers.in@gmail.com</li>
                  <li>+91 94003 55185</li>
                  <li>Kerala, India</li>
                  <li className="pt-2">
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 text-center text-xs md:text-sm text-gray-500">
              © 2025 KeralaSellers.in • Made with ❤️ in Kerala • Empowering 1000+ Sellers
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-down {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        
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
      `}</style>
    </>
  );
}
