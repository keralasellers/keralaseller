"use client"
import type React from "react"
import { useState } from "react"
import Head from "next/head"
import {
  ShoppingCart,
  Heart,
  Star,
  Search,
  Menu,
  User,
  Grid,
  List,
  Zap,
  Award,
  Truck,
  Shield,
  X,
  Check,
  Phone,
  Mail,
} from "lucide-react"
import { SlideCarousel } from "@/components/BannerCarousel"
import ProductCard from "@/components/ProductCard"

const Demo = () => {
  const [cartItems, setCartItems] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [showCart, setShowCart] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notification, setNotification] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [addingToCartProductId, setAddingToCartProductId] = useState<number | null>(null)

  const images = [
    { src: "/hero.png", alt: "Kerala online selling platform demo - sell products online" },
    { src: "/T Shirts (2).png", alt: "Kerala sellers demo store - fashion products online" },
    { src: "/casuals.png", alt: "Best platform to sell products online Kerala - casual wear" },
    { src: "/T Shirts (3).png", alt: "Kerala online shopping demo - apparel collection" },
    { src: "/T Shirts.png", alt: "Online selling platform Kerala demo - t-shirt collection" },
  ]

  const products = [
    {
      id: 1,
      name: "AirPods Pro Max - Premium Audio",
      price: 11999,
      originalPrice: 15999,
      image: "/5.png",
      rating: 4.9,
      reviews: 2847,
      category: "electronics",
      badge: "25% OFF",
      description: "Experience premium audio quality with active noise cancellation - perfect for Kerala customers",
      inStock: true,
      location: "Kochi, Kerala",
      seller: "TechZone Kerala"
    },
    {
      id: 2,
      name: "Designer Leather Jacket - Kerala Fashion",
      price: 1089,
      originalPrice: 1729,
      image: "/4.png",
      rating: 4.8,
      reviews: 1293,
      category: "fashion",
      badge: "37% OFF",
      description: "Handcrafted premium leather jacket with modern silhouette - trending in Kerala fashion",
      inStock: true,
      location: "Thiruvananthapuram, Kerala",
      seller: "Kerala Fashion Hub"
    },
    {
      id: 3,
      name: "Apple Watch Ultra - Kerala Exclusive",
      price: 44999,
      image: "/8.png",
      rating: 4.9,
      reviews: 3421,
      category: "fitness",
      badge: "NEW",
      description: "Ultimate smartwatch for extreme sports and adventures - now available in Kerala",
      inStock: true,
      location: "Kozhikode, Kerala",
      seller: "Kerala Gadgets"
    },
    {
      id: 4,
      name: "Peak Travel Backpack - Kerala Adventures",
      price: 1229,
      image: "/6.png",
      rating: 4.7,
      reviews: 892,
      category: "accessories",
      description: "Modular travel companion perfect for exploring Kerala's beautiful landscapes",
      inStock: true,
      location: "Thrissur, Kerala",
      seller: "Kerala Travel Gear"
    },
    {
      id: 5,
      name: "Nike Shoes - Kerala Sports Collection",
      price: 3004,
      image: "/2.png",
      rating: 4.9,
      reviews: 567,
      category: "fashion",
      description: "Brand new Nike shoes - premium footwear collection available across Kerala",
      inStock: true,
      location: "Ernakulam, Kerala",
      seller: "Sports Arena Kerala"
    },
    {
      id: 6,
      name: "Women's Traditional Kerala Kurta",
      price: 779,
      image: "/3.png",
      rating: 4.6,
      reviews: 1456,
      category: "fashion",
      badge: "TRENDING",
      description: "Beautiful traditional kurta with modern design - celebrating Kerala's rich textile heritage",
      inStock: true,
      location: "Kannur, Kerala",
      seller: "Kerala Handlooms"
    },
    {
      id: 7,
      name: "Minimalist Titanium Watch - Kerala Premium",
      price: 2399,
      image: "/1.png",
      rating: 4.8,
      reviews: 743,
      category: "accessories",
      badge: "PREMIUM",
      description: "Swiss movement with aerospace-grade titanium case - luxury timepiece for Kerala professionals",
      inStock: true,
      location: "Palakkad, Kerala",
      seller: "Kerala Luxury"
    },
    {
      id: 8,
      name: "Kerala Spice Coffee Powder - Authentic",
      price: 89,
      image: "/7.png",
      rating: 4.7,
      reviews: 1122,
      category: "food",
      badge: "ORGANIC",
      description: "Made from pure raw Kerala spices and premium coffee beans - taste of God's Own Country",
      inStock: true,
      location: "Idukki, Kerala",
      seller: "Kerala Spices Co."
    },
  ]

  const categories = [
    { id: "all", name: "All Products", icon: "🛍️" },
    { id: "electronics", name: "Electronics", icon: "📱" },
    { id: "fashion", name: "Fashion", icon: "👕" },
    { id: "accessories", name: "Accessories", icon: "⌚" },
    { id: "food", name: "Food & Spices", icon: "☕" },
    { id: "fitness", name: "Fitness", icon: "💪" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const showToast = (message: string) => {
    setNotification(message)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
      const product = products.find((p) => p.id === productId)
      showToast(prev.includes(productId) ? `Removed from favorites` : `Added to favorites`)
      return newFavorites
    })
  }

  const addToCart = (product: any) => {
    setAddingToCartProductId(product.id)
    setTimeout(() => {
      setCartItems((prev) => prev + 1)
      showToast(`Added to cart successfully`)
      setAddingToCartProductId(null)
    }, 500)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    const category = categories.find((c) => c.id === categoryId)
    showToast(`Showing ${category?.name}`)
  }

  const getBadgeColor = (badge: string) => {
    const colors = {
      "25% OFF": "bg-red-600",
      "37% OFF": "bg-red-600",
      "NEW": "bg-green-600",
      "ORGANIC": "bg-green-700",
      "PREMIUM": "bg-blue-600",
      "TRENDING": "bg-purple-600",
      "ECO-FRIENDLY": "bg-emerald-600",
    }
    return colors[badge as keyof typeof colors] || "bg-gray-600"
  }

  return (
    <>
      <Head>
        <title>Kerala Online Store Demo - Sell Products Online Kerala | KeralaSellers.in</title>
        <meta name="description" content="Experience how Kerala sellers can sell products online with our demo store. Best platform to sell products online in Kerala with zero commission." />
        <meta name="keywords" content="kerala online store demo, sell products online kerala, kerala sellers demo, online selling platform kerala, kerala online shopping" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kerala Online Store Demo - KeralaSellers.in" />
        <meta property="og:description" content="See how Kerala sellers can create beautiful online stores with our platform" />
        <meta property="og:image" content="/hero.png" />
        <meta property="og:url" content="https://www.keralasellers.in/demo" />
        
        {/* Structured Data for Demo Store */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Kerala Online Store Demo",
            "description": "Demo showcasing how Kerala sellers can sell products online",
            "url": "https://www.keralasellers.in/demo",
            "isPartOf": {
              "@type": "WebSite",
              "name": "KeralaSellers.in"
            },
            "about": {
              "@type": "Service",
              "name": "Online Selling Platform",
              "description": "Platform for Kerala sellers to sell products online"
            }
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-[#fdfff0]">
        {/* Notification Toast */}
        {showNotification && (
          <div className="fixed top-4 right-4 z-[100] animate-in slide-in-from-right-full duration-300">
            <div className="bg-white border border-green-200 rounded-lg shadow-lg p-4 max-w-sm flex items-center">
              <Check className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-gray-800">{notification}</p>
              <button onClick={() => setShowNotification(false)} className="ml-auto text-gray-400 hover:text-gray-600">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    Kerala<span className="text-green-600">Sellers</span> <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">DEMO</span>
                  </div>
                </div>
                <nav className="hidden md:flex space-x-8">
                  {["Home", "Categories", "Kerala Sellers", "About"].map((item) => (
                    <button
                      key={item}
                      onClick={() => showToast(`Navigating to ${item}`)}
                      className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative hidden sm:block">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search Kerala products..."
                    className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <button
                  onClick={() => showToast("Account menu opened")}
                  className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  <User className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="relative p-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                      {cartItems}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => showToast("Menu opened")}
                  className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Kerala Trust Indicators */}
        <div className="bg-green-50 border-b border-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 text-green-700">
                <Shield className="h-4 w-4" />
                <span>Kerala Verified Sellers</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700">
                <Truck className="h-4 w-4" />
                <span>Free Delivery Across Kerala</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700">
                <Award className="h-4 w-4" />
                <span>Zero Commission Platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section with Kerala Branding */}
        <div className="relative">
          <SlideCarousel images={images} autoPlay={true} interval={4000} />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Kerala's Online <span className="text-yellow-300">Marketplace</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                Experience How Kerala Sellers Can <strong>Sell Products Online</strong>
              </p>
              <div className="bg-white bg-opacity-90 text-gray-800 px-6 py-3 rounded-lg inline-block">
                <p className="font-semibold">🌴 This is a Demo Store showcasing KeralaSellers.in platform features</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kerala Features */}
        <div className="bg-white py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Kerala Sellers Choose Our Platform
              </h2>
              <p className="text-lg text-gray-600">
                The best platform to sell products online in Kerala with local support
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Truck, text: "Kerala-Wide Delivery", desc: "Reach all 14 districts" },
                { icon: Shield, text: "Zero Commission", desc: "Keep 100% profits" },
                { icon: Award, text: "Local Support", desc: "Malayalam & English" },
                { icon: Phone, text: "WhatsApp Ready", desc: "Direct customer chat" },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.text}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filters with Kerala Context */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900 mr-4">
                Kerala Products <span className="text-green-600">Demo</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">
                {filteredProducts.length} products from Kerala sellers
              </span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === "grid" ? "bg-white text-green-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === "list" ? "bg-white text-green-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Demo Banner */}
          <div className="fixed top-1/2 left-0 right-0 z-[90] pointer-events-none">
            <div className="bg-blue-600 bg-opacity-10 border-y border-blue-300 py-2 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap text-blue-600 font-bold text-lg opacity-70">
                KERALASELLERS.IN DEMO • SELL PRODUCTS ONLINE KERALA • ZERO COMMISSION PLATFORM • KERALASELLERS.IN DEMO • SELL PRODUCTS ONLINE KERALA •
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div
            className={`${
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
                : "space-y-4"
            }`}
          >
            {filteredProducts.map((product) =>
              viewMode === "grid" ? (
                <ProductCard
                  key={product.id}
                  product={product}
                  toggleFavorite={toggleFavorite}
                  addToCart={addToCart}
                  isFavorite={favorites.includes(product.id)}
                  getBadgeColor={getBadgeColor}
                  isAddingToCart={addingToCartProductId === product.id}
                />
              ) : (
                // Enhanced List view with Kerala seller info
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 flex max-w-4xl"
                >
                  <div className="relative w-48 flex-shrink-0">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} - Kerala online selling platform demo`}
                      className="w-full h-full object-cover"
                    />
                    {product.badge && (
                      <span
                        className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded text-white ${getBadgeColor(product.badge)}`}
                      >
                        {product.badge}
                      </span>
                    )}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favorites.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400 hover:text-red-400"
                        }`}
                      />
                    </button>
                    {product.inStock && (
                      <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        <Check className="h-3 w-3" />
                        <span>In Stock</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-gray-600 mb-2 text-sm line-clamp-2">{product.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="mr-4">📍 {product.location}</span>
                        <span>🏪 {product.seller}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">
                            {product.rating} ({product.reviews.toLocaleString()})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        disabled={addingToCartProductId === product.id}
                        className="w-full bg-green-600 text-white py-2.5 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {addingToCartProductId === product.id ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                            <span>Adding...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <ShoppingCart className="h-4 w-4" />
                            <span>Add to Cart</span>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Kerala products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters to find more Kerala sellers</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  showToast("Showing all Kerala products")
                }}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Show All Products
              </button>
            </div>
          )}
        </div>

        {/* Footer with Kerala Branding */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Kerala<span className="text-green-400">Sellers</span></h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering Kerala sellers with the best platform to sell products online. 
                  Zero commission, maximum profits.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+91 9400355185</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>keralasellers.in@gmail.com</span>
                </div>
              </div>
              {[
                {
                  title: "For Sellers",
                  items: ["How to Sell Online", "Kerala Success Stories", "Zero Commission", "Mobile App"],
                },
                {
                  title: "Support",
                  items: ["Help Center", "Kerala Delivery", "Returns Policy", "Malayalam Support"],
                },
                {
                  title: "About",
                  items: ["Our Mission", "Kerala Focus", "Privacy Policy", "Terms of Service"],
                },
              ].map((section, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-4">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <button
                          onClick={() => showToast(`Opening ${item}`)}
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm">
                  © 2025 KeralaSellers.in. Made with ❤️ in God's Own Country
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Shield className="h-4 w-4" />
                    <span>Zero Commission Platform</span>
                  </div>
                  <div className="text-sm text-gray-400">Trusted by Kerala sellers</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Demo
