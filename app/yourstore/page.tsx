"use client"
import type React from "react"
import { useState } from "react"
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
import { SlideCarousel } from "@/components/BannerCarousel" // Assuming this component exists
import ProductCard from "@/components/ProductCard"

const demo = () => {
  const [cartItems, setCartItems] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [showCart, setShowCart] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notification, setNotification] = useState("")
  const [isLoading, setIsLoading] = useState(false) // This state is for the global loading, not per-product
  const [addingToCartProductId, setAddingToCartProductId] = useState<number | null>(null) // New state for per-product add to cart loading

  const images = [
    { src: "/hero.png", alt: "Image 3" },
    { src: "/T Shirts (2).png", alt: "Image 3" },
    { src: "/casuals.png", alt: "Image 3" },
    { src: "/T Shirts (3).png", alt: "Image 3" },
    { src: "/T Shirts.png", alt: "Image 3" },
  ]

  const products = [
    {
      id: 1,
      name: "AirPods Pro Max ",
      price: 11999,
      originalPrice: 399.99,
      image: "/5.png",
      rating: 4.9,
      reviews: 2847,
      category: "electronics",
      badge: "25% OFF",
      description: "Experience audio quality with active noise cancellation",
      inStock: false,
    },
    {
      id: 2,
      name: "Designer Leather Jacket ",
      price: 1089.99,
      originalPrice: 299.99,
      image: "/4.png",
      rating: 4.8,
      reviews: 1293,
      category: "fashion",
      badge: "37% OFF",
      description: "Handcrafted premium leather with modern silhouette",
      inStock: false,
    },
    {
      id: 3,
      name: "Apple Watch Ultra ",
      price: 14449.99,
      image: "/8.png",
      rating: 4.9,
      reviews: 3421,
      category: "fitness",
      badge: "NEW",
      description: "Ultimate smartwatch for extreme sports and adventures",
      inStock: false,
    },
    {
      id: 4,
      name: "Peak Travel Backpack",
      price: 1229.99,
      image: "/6.png",
      rating: 4.7,
      reviews: 892,
      category: "accessories",
      description: "Modular travel companion with camera-first design",
      inStock: false,
    },
    {
      id: 5,
      name: "Nike Shoes",
      price: 3004.99,
      image: "/2.png",
      rating: 4.9,
      reviews: 567,
      category: "fashion",
      // badge: "ORGANIC",
      description: "Brand New Nike shoes",
      inStock: false,
    },
    {
      id: 6,
      name: "Womens Kurta ",
      price: 779.99,
      image: "/3.png",
      rating: 4.6,
      reviews: 1456,
      category: "fashion",
      description: "New Trending kurta",
      inStock: false,
    },
    {
      id: 7,
      name: "Minimalist Titanium Watch",
      price: 2399.99,
      image: "/1.png",
      rating: 4.8,
      reviews: 743,
      category: "accessories",
      badge: "PREMIUM",
      description: "Swiss movement with aerospace-grade titanium case",
      inStock: false,
    },
    {
      id: 8,
      name: "Coffee powder",
      price: 89.99,
      image: "/7.png",
      rating: 4.7,
      reviews: 1122,
      category: "Food & Beverage",
      badge: "New",
      description: "Made from pure raw",
      inStock: false,
    },
  ]

  const categories = [
    { id: "all", name: "All Products", icon: "🛍️" },
    { id: "electronics", name: "Electronics", icon: "📱" },
    { id: "fashion", name: "Fashion", icon: "👕" },
    { id: "accessories", name: "Accessories", icon: "⌚" },
    { id: "food", name: "Food & Beverage", icon: "☕" },
    { id: "fitness", name: "Fitness", icon: "💪" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
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
      const product = products.find((p) => p.id === productId) // This line was missing in original
      showToast(prev.includes(productId) ? `Removed from favorites` : `Added to favorites`)
      return newFavorites
    })
  }

  const addToCart = (product: any) => {
    setAddingToCartProductId(product.id) // Set loading for this specific product
    setTimeout(() => {
      setCartItems((prev) => prev + 1)
      showToast(`Added to cart successfully`)
      setAddingToCartProductId(null) // Clear loading
    }, 500)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    const category = categories.find((c) => c.id === categoryId)
    showToast(`Showing ${category?.name}`) // Fixed template literal
  }

  const getBadgeColor = (badge: string) => {
    const colors = {
      "25% OFF": "bg-red-600",
      "37% OFF": "bg-red-600",
      NEW: "bg-green-600",
      ORGANIC: "bg-green-700",
      PREMIUM: "bg-blue-600",
      "ECO-FRIENDLY": "bg-emerald-600",
    }
    return colors[badge as keyof typeof colors] || "bg-gray-600"
  }

  return (
    <div className="min-h-screen bg-[#fdfff0]">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-[100] animate-in slide-in-from-right-full duration-300">
          <div className="bg-gray border border-green-200 rounded-lg shadow-lg p-4 max-w-sm flex items-center">
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
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">DEMO</div>
              </div>
              <nav className="hidden md:flex space-x-8">
                {["Home", "Categories", "Deals", "About"].map((item) => (
                  <button
                    key={item}
                    onClick={() => showToast(`Navigating to ${item}`)}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
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
                  placeholder="Search products..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button
                onClick={() => showToast("Account menu opened")}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <User className="h-6 w-6" />
              </button>
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
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
                className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Trust Indicators */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2 text-blue-700">
              <Shield className="h-4 w-4" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-700">
              <Truck className="h-4 w-4" />
              <span>Free Shipping Over ₹50</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-700">
              <Award className="h-4 w-4" />
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <SlideCarousel images={images} autoPlay={true} interval={4000} />
      {/* Features */}
      <div className="bg-gray py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, text: "Free Shipping", desc: "Orders over ₹50" },
              { icon: Shield, text: "Secure Payment", desc: "SSL protected" },
              { icon: Award, text: "Quality Products", desc: "Verified brands" },
              { icon: Phone, text: "24/7 Support", desc: "Always here to help" },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
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
        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900 mr-4">Products</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
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
            <span className="text-gray-600">{filteredProducts.length} products</span>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === "grid" ? "bg-gray text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === "list" ? "bg-gray text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Demo Banner */}
        <div className="fixed top-1/2 left-0 right-0 z-[90] pointer-events-none">
          <div className="bg-red-600 bg-opacity-10 border-y border-red-300 py-2 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-red-600 font-bold text-lg opacity-70">
              DEMO VERSION • NOT FOR PRODUCTION USE • DEMO VERSION • NOT FOR PRODUCTION USE • DEMO VERSION • NOT FOR
              PRODUCTION USE • DEMO VERSION • NOT FOR PRODUCTION USE •
            </div>
          </div>
        </div>
        {/* Products Grid/List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center" // Added justify-items-center for better alignment
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
              // Existing list view rendering logic
              <div
                key={product.id}
                className="bg-gray rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 flex max-w-4xl"
              >
                <div className="relative w-48 flex-shrink-0">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
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
                    className="absolute top-3 right-3 p-2 bg-gray rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
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
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">{product.description}</p>
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
                        <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={addingToCartProductId === product.id} // Use new state
                      className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {addingToCartProductId === product.id ? ( // Use new state
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                showToast("Showing all products")
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Show All Products
            </button>
          </div>
        )}
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">demo</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner for premium products, exceptional quality, and reliable service.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>1-800-demo-SHOP</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@demo.com</span>
              </div>
            </div>
            {[
              {
                title: "Company",
                items: ["About Us", "Careers", "Press", "Contact"],
              },
              {
                title: "Support",
                items: ["Help Center", "Track Order", "Returns", "Size Guide"],
              },
              {
                title: "Legal",
                items: ["Privacy Policy", "Terms of Service", "Shipping Info", "Refund Policy"],
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
              <p className="text-gray-400 text-sm">© 2025 DEMO. All rights reserved.</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Shield className="h-4 w-4" />
                  <span>SSL Secured</span>
                </div>
                <div className="text-sm text-gray-400">Trusted by 50,000+ customers</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default demo
