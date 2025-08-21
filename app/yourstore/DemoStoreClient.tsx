"use client";

import type React from "react";
import { useState } from "react";
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
  Shield,
  X,
  Check,
  Phone,
  Mail,
} from "lucide-react";
import { SlideCarousel } from "@/components/BannerCarousel";
import ProductCard from "@/components/ProductCard";

const DemoStoreClient = () => {
  const [cartItems, setCartItems] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState("");
  const [addingToCartProductId, setAddingToCartProductId] = useState<number | null>(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const images = [
    { src: "/hero.png", alt: "Kerala online selling platform demo - sell products online" },
    { src: "/T Shirts (2).png", alt: "Kerala sellers demo store - fashion products online" },
    { src: "/casuals.png", alt: "Best platform to sell products online Kerala - casual wear" },
    { src: "/T Shirts (3).png", alt: "Kerala online shopping demo - apparel collection" },
    { src: "/T Shirts.png", alt: "Online selling platform Kerala demo - t-shirt collection" },
  ];

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
      description: "Experience premium audio with active noise cancellation",
      inStock: true,
      location: "Kochi, Kerala",
      seller: "TechZone Kerala",
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
      description: "Handcrafted premium leather jacket with modern silhouette",
      inStock: true,
      location: "Thiruvananthapuram, Kerala",
      seller: "Kerala Fashion Hub",
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
      description: "Ultimate smartwatch for extreme sports and adventures",
      inStock: true,
      location: "Kozhikode, Kerala",
      seller: "Kerala Gadgets",
    },
    {
      id: 4,
      name: "Peak Travel Backpack - Kerala Adventures",
      price: 1229,
      image: "/6.png",
      rating: 4.7,
      reviews: 892,
      category: "accessories",
      description: "Modular travel companion for Kerala landscapes",
      inStock: true,
      location: "Thrissur, Kerala",
      seller: "Kerala Travel Gear",
    },
    {
      id: 5,
      name: "Nike Shoes - Kerala Sports Collection",
      price: 3004,
      image: "/2.png",
      rating: 4.9,
      reviews: 567,
      category: "fashion",
      description: "Premium footwear collection available across Kerala",
      inStock: true,
      location: "Ernakulam, Kerala",
      seller: "Sports Arena Kerala",
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
      description: "Traditional kurta celebrating Kerala's textile heritage",
      inStock: true,
      location: "Kannur, Kerala",
      seller: "Kerala Handlooms",
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
      description: "Swiss movement, aerospace-grade titanium case",
      inStock: true,
      location: "Palakkad, Kerala",
      seller: "Kerala Luxury",
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
      description: "Premium coffee blended with Kerala spices",
      inStock: true,
      location: "Idukki, Kerala",
      seller: "Kerala Spices Co.",
    },
  ];

  const categories = [
    { id: "all", name: "All", icon: "🛍️" },
    { id: "electronics", name: "Electronics", icon: "📱" },
    { id: "fashion", name: "Fashion", icon: "👕" },
    { id: "accessories", name: "Accessories", icon: "⌚" },
    { id: "food", name: "Food", icon: "☕" },
    { id: "fitness", name: "Fitness", icon: "💪" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const needle = searchTerm.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(needle) ||
      product.description.toLowerCase().includes(needle) ||
      product.seller.toLowerCase().includes(needle) ||
      product.location.toLowerCase().includes(needle);
    return matchesCategory && matchesSearch;
  });

  const showToast = (message: string) => {
    setNotification(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2500);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const exists = prev.includes(productId);
      const updated = exists ? prev.filter((id) => id !== productId) : [...prev, productId];
      showToast(exists ? "Removed from favorites" : "Added to favorites");
      return updated;
    });
  };

  const addToCart = (product: any) => {
    setAddingToCartProductId(product.id);
    setTimeout(() => {
      setCartItems((prev) => prev + 1);
      showToast("Added to cart successfully");
      setAddingToCartProductId(null);
    }, 450);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const category = categories.find((c) => c.id === categoryId);
    showToast(`Showing ${category?.name}`);
  };

  const getBadgeColor = (badge: string) => {
    const colors = {
      "25% OFF": "bg-red-600",
      "37% OFF": "bg-red-600",
      NEW: "bg-green-600",
      ORGANIC: "bg-green-700",
      PREMIUM: "bg-blue-600",
      TRENDING: "bg-purple-600",
      "ECO-FRIENDLY": "bg-emerald-600",
    } as const;
    return (colors as any)[badge] || "bg-gray-600";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  };

  return (
    <div className="min-h-screen bg-[#fdfff0]">
      {/* Toast */}
      {showNotification && (
        <div className="fixed top-3 right-3 z-[100]">
          <div className="bg-white border border-green-200 rounded-lg shadow-lg p-3 max-w-sm flex items-center">
            <Check className="h-5 w-5 text-green-600 mr-2" />
            <p className="text-gray-800 text-sm">{notification}</p>
            <button onClick={() => setShowNotification(false)} className="ml-auto text-gray-400 hover:text-gray-600">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Header (mobile-first) */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg grid place-items-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900">
                Kerala<span className="text-green-600">Sellers</span>
                <span className="align-top ml-2 text-[10px] sm:text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">
                  DEMO
                </span>
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Mobile search toggle */}
              <button
                onClick={() => setMobileSearchOpen((v) => !v)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 sm:hidden"
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Desktop search */}
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search Kerala products..."
                  className="w-56 md:w-64 pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>

              <button
                onClick={() => setShowCart(!showCart)}
                className="relative p-2 rounded-md text-gray-700 hover:bg-gray-100"
                aria-label="Cart"
              >
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-medium">
                    {cartItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => null}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                aria-label="Account"
              >
                <User className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <button onClick={() => null} className="p-2 rounded-md text-gray-700 hover:bg-gray-100 sm:hidden" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile search input */}
          {mobileSearchOpen && (
            <div className="pb-3 sm:hidden">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search Kerala products..."
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Trust Indicators (Removed Free Delivery) */}
      <div className="bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2.5">
          <div className="flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 text-green-700">
              <Shield className="h-4 w-4" />
              <span>Kerala Verified Sellers</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-green-700">
              <Award className="h-4 w-4" />
              <span>Zero Commission Platform</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative">
        <SlideCarousel images={images} autoPlay interval={4000} />
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center px-3">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
              Kerala's Online <span className="text-yellow-300">Marketplace</span>
            </h1>
            <p className="text-lg md:text-2xl mb-4 md:mb-6">
              Experience how Kerala Sellers <strong>Sell Products Online</strong>
            </p>
            <div className="bg-white/90 text-gray-800 px-3 py-2 md:px-6 md:py-3 rounded-lg inline-block text-sm md:text-base">
              <p className="font-semibold">🌴 Demo Store showcasing KeralaSellers.in features</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-8 md:py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Why Kerala Sellers Choose Us</h2>
            <p className="text-sm md:text-lg text-gray-600">Best platform to sell online in Kerala with local support</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Shield, text: "Zero Commission", desc: "Keep 100% profits" },
              { icon: Award, text: "Local Support", desc: "Malayalam & English" },
              { icon: Phone, text: "WhatsApp Ready", desc: "Direct customer chat" },
              { icon: ShoppingCart, text: "Easy Catalog", desc: "Fast product setup" },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg mb-3 md:mb-4">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.text}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 md:py-12">
        {/* Filters */}
        <div className="flex flex-col gap-4 md:gap-6 md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Kerala Products <span className="text-green-600">Demo</span>
            </h2>

            {/* Horizontal scroll chips on mobile */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar [-webkit-overflow-scrolling:touch] py-1">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleCategoryChange(c.id)}
                  className={`px-3 py-2 md:px-4 md:py-2 rounded-full text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-200 ${
                    selectedCategory === c.id ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="mr-1">{c.icon}</span>
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* View toggle */}
          <div className="flex items-center justify-between md:justify-end gap-3">
            <span className="text-gray-600 text-sm">{filteredProducts.length} products</span>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === "grid" ? "bg-white text-green-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Grid view"
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === "list" ? "bg-white text-green-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Marquee (hide on small screens) */}
        <div className="fixed top-1/2 left-0 right-0 z-[90] pointer-events-none hidden md:block">
          <div className="bg-blue-600 bg-opacity-10 border-y border-blue-300 py-2 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-blue-600 font-bold text-lg opacity-70">
              KERALASELLERS.IN DEMO • SELL PRODUCTS ONLINE KERALA • ZERO COMMISSION PLATFORM • KERALASELLERS.IN DEMO • SELL PRODUCTS ONLINE KERALA •
            </div>
          </div>
        </div>

        {/* Grid / List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center"
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
              <div
                key={product.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 flex w-full max-w-4xl mx-auto"
              >
                <div className="relative w-32 sm:w-48 flex-shrink-0">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} - Kerala online selling platform demo`}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <span
                      className={`absolute top-2 left-2 px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded text-white ${getBadgeColor(
                        product.badge
                      )}`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-400"
                      }`}
                    />
                  </button>
                  {product.inStock && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-green-100 text-green-800 px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium">
                      <Check className="h-3 w-3" />
                      <span>In Stock</span>
                    </div>
                  )}
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2 text-xs sm:text-sm line-clamp-2">{product.description}</p>
                    <div className="flex items-center text-[11px] sm:text-sm text-gray-500 mb-2 sm:mb-3">
                      <span className="mr-3">📍 {product.location}</span>
                      <span>🏪 {product.seller}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                        ))}
                        <span className="ml-2 text-xs sm:text-sm text-gray-600">
                          {product.rating} ({product.reviews.toLocaleString()})
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg sm:text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-xs sm:text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={addingToCartProductId === product.id}
                      className="w-full bg-green-600 text-white py-2 sm:py-2.5 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {addingToCartProductId === product.id ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          <span>Adding...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <ShoppingCart className="h-4 w-4" />
                          <span>Add to Cart</span>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">No Kerala products found</h3>
            <p className="text-gray-600 mb-5 text-sm md:text-base">Try adjusting your search or filters to find more products</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                showToast("Showing all Kerala products");
              }}
              className="bg-green-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
            >
              Show All Products
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg grid place-items-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">
                  Kerala<span className="text-green-400">Sellers</span>
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering Kerala sellers with a zero-commission online selling platform.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91 9400355185</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>keralasellers.in@gmail.com</span>
              </div>
            </div>
            {[
              {
                title: "For Sellers",
                items: ["How to Sell Online", "Success Stories", "Zero Commission", "Mobile App"],
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

          <div className="border-t border-gray-800 pt-6 text-center md:text-left text-xs md:text-sm text-gray-500 flex flex-col md:flex-row items-center md:justify-between gap-3">
            <p>© 2025 KeralaSellers.in. Made with ❤️ in God's Own Country</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Zero Commission Platform</span>
              </div>
              <div>Trusted by Kerala sellers</div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DemoStoreClient;
