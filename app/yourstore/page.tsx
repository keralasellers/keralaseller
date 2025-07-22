'use client';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, Search, Menu, User, Filter, Grid, List, Zap, Award, Truck, Shield, X, Check, Phone, Mail } from 'lucide-react';

const DAMO = () => {
  const [cartItems, setCartItems] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const products = [
    {
      id: 1,
      name: "AirPods Pro Max - Premium Wireless",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&auto=format",
      rating: 4.9,
      reviews: 2847,
      category: "electronics",
      badge: "25% OFF",
      description: "Experience unparalleled audio quality with active noise cancellation",
      inStock: true
    },
    {
      id: 2,
      name: "Designer Leather Jacket - Limited Edition",
      price: 189.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop&auto=format",
      rating: 4.8,
      reviews: 1293,
      category: "fashion",
      badge: "37% OFF",
      description: "Handcrafted premium leather with modern silhouette",
      inStock: true
    },
    {
      id: 3,
      name: "Apple Watch Ultra - Adventure Ready",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop&auto=format",
      rating: 4.9,
      reviews: 3421,
      category: "electronics",
      badge: "NEW",
      description: "Ultimate smartwatch for extreme sports and adventures",
      inStock: true
    },
    {
      id: 4,
      name: "Peak Design Travel Backpack",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&auto=format",
      rating: 4.7,
      reviews: 892,
      category: "accessories",
      description: "Modular travel companion with camera-first design",
      inStock: true
    },
    {
      id: 5,
      name: "Single Origin Ethiopian Coffee",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop&auto=format",
      rating: 4.9,
      reviews: 567,
      category: "food",
      badge: "ORGANIC",
      description: "Ethically sourced beans with notes of chocolate and berries",
      inStock: true
    },
    {
      id: 6,
      name: "MagSafe Wireless Charging Station",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop&auto=format",
      rating: 4.6,
      reviews: 1456,
      category: "electronics",
      description: "3-in-1 charging solution for iPhone, AirPods, and Apple Watch",
      inStock: true
    },
    {
      id: 7,
      name: "Minimalist Titanium Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop&auto=format",
      rating: 4.8,
      reviews: 743,
      category: "accessories",
      badge: "PREMIUM",
      description: "Swiss movement with aerospace-grade titanium case",
      inStock: true
    },
    {
      id: 8,
      name: "Sustainable Yoga Mat Pro",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop&auto=format",
      rating: 4.7,
      reviews: 1122,
      category: "fitness",
      badge: "ECO-FRIENDLY",
      description: "Made from recycled materials with superior grip",
      inStock: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'fashion', name: 'Fashion', icon: '👕' },
    { id: 'accessories', name: 'Accessories', icon: '⌚' },
    { id: 'food', name: 'Food & Beverage', icon: '☕' },
    { id: 'fitness', name: 'Fitness', icon: '💪' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const showToast = (message: string) => {
    setNotification(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      
      const product = products.find(p => p.id === productId);
      showToast(prev.includes(productId) 
        ? `Removed from favorites` 
        : `Added to favorites`
      );
      
      return newFavorites;
    });
  };

  const addToCart = (product: any) => {
    setIsLoading(true);
    setTimeout(() => {
      setCartItems(prev => prev + 1);
      showToast(`Added to cart successfully`);
      setIsLoading(false);
    }, 500);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const category = categories.find(c => c.id === categoryId);
    showToast(`Showing ${category?.name}`);
  };

  const getBadgeColor = (badge: string) => {
    const colors = {
      '25% OFF': 'bg-red-600',
      '37% OFF': 'bg-red-600',
      'NEW': 'bg-green-600',
      'ORGANIC': 'bg-green-700',
      'PREMIUM': 'bg-blue-600',
      'ECO-FRIENDLY': 'bg-emerald-600'
    };
    return colors[badge as keyof typeof colors] || 'bg-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  DAMO
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                {['Home', 'Categories', 'Deals', 'About'].map((item) => (
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
                onClick={() => showToast('Account menu opened')}
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
                onClick={() => showToast('Menu opened')}
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
              <span>Free Shipping Over $50</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-700">
              <Award className="h-4 w-4" />
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">DAMO</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover premium products at unbeatable prices. Quality guaranteed with fast, free shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => showToast('Browsing products')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Shop Now
              </button>
              <button 
                onClick={() => showToast('Viewing special offers')}
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                View Deals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, text: 'Free Shipping', desc: 'Orders over $50' },
              { icon: Shield, text: 'Secure Payment', desc: 'SSL protected' },
              { icon: Award, text: 'Quality Products', desc: 'Verified brands' },
              { icon: Phone, text: '24/7 Support', desc: 'Always here to help' }
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
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              {filteredProducts.length} products
            </span>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`${
          viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
            : "space-y-4"
        }`}>
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className={`bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 ${
                viewMode === 'list' ? 'flex max-w-4xl' : ''
              }`}
            >
              <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-full object-cover ${viewMode === 'list' ? 'h-full' : 'h-48'}`}
                />
                
                {product.badge && (
                  <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded text-white ${getBadgeColor(product.badge)}`}>
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
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-400 hover:text-red-400'
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
              
              <div className={`p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {product.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
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
                      <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-top-transparent"></div>
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
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                showToast('Showing all products');
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
                <h3 className="text-xl font-bold">DAMO</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner for premium products, exceptional quality, and reliable service.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>1-800-DAMO-SHOP</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@damo.com</span>
              </div>
            </div>
            
            {[
              {
                title: 'Company',
                items: ['About Us', 'Careers', 'Press', 'Contact']
              },
              {
                title: 'Support',
                items: ['Help Center', 'Track Order', 'Returns', 'Size Guide']
              },
              {
                title: 'Legal',
                items: ['Privacy Policy', 'Terms of Service', 'Shipping Info', 'Refund Policy']
              }
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
                © 2025 DAMO. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Shield className="h-4 w-4" />
                  <span>SSL Secured</span>
                </div>
                <div className="text-sm text-gray-400">
                  Trusted by 50,000+ customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DAMO;