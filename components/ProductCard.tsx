"use client"

import Image from "next/image"
import { Star, Heart, ShoppingCart, Check } from "lucide-react" // Added Check icon
import Link from "next/link"

// Define the Product interface to match your data structure
interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  category: string
  badge?: string
  description: string
  inStock: boolean
}

// Define props for the ProductCard component
interface ProductCardProps {
  product: Product
  toggleFavorite: (productId: number) => void
  addToCart: (product: Product) => void
  isFavorite: boolean
  getBadgeColor: (badge: string) => string
  isAddingToCart: boolean // To show loading state on add to cart button
}

export default function ProductCard({
  product,
  toggleFavorite,
  addToCart,
  isFavorite,
  getBadgeColor,
  isAddingToCart,
}: ProductCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white w-64 h-64">
      <Link href="#" className="absolute inset-0 z-10">
        <span className="sr-only">View Product</span>
      </Link>
      <Image
        src={product.image || "/placeholder.svg"} // Use dynamic image
        alt={product.name} // Use dynamic alt text
        width={256}
        height={256}
        className="w-full h-full object-cover"
      />
      {/* Wishlist icon at top-right */}
      <div className="absolute top-2 right-2 z-20">
        <button
          onClick={(e) => {
            e.preventDefault() // Prevent navigating when clicking icon
            toggleFavorite(product.id)
          }}
          className="p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors"
        >
          <Heart
            className={`w-4 h-4 ${isFavorite ? "fill-red-500 stroke-red-500" : "text-gray-400 hover:text-red-400"}`}
          />
          <span className="sr-only">Add to Wishlist</span>
        </button>
      </div>
      {/* Badge */}
      {product.badge && (
        <span
          className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded text-white ${getBadgeColor(
            product.badge,
          )}`}
        >
          {product.badge}
        </span>
      )}
      {/* In Stock indicator */}
      {product.inStock && (
        <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
          <Check className="h-3 w-3" />
          <span>In Stock</span>
        </div>
      )}
      {/* Text content overlaying the bottom of the image */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white p-2 flex flex-col justify-end">
        <h3 className="font-semibold text-xs leading-tight line-clamp-1">{product.name}</h3> {/* Dynamic title */}
        <div className="flex items-center gap-0.5 mt-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? "fill-yellow-400 stroke-yellow-400" : "fill-gray-400 stroke-gray-400"
              }`}
            />
          ))}
          <span className="text-[10px] ml-0.5">
            {product.rating.toFixed(1)} ({product.reviews.toLocaleString()})
          </span>{" "}
          {/* Dynamic rating */}
        </div>
        <p className="text-sm font-bold mt-1">${product.price.toFixed(2)}</p> {/* Dynamic price */}
        {product.originalPrice && (
          <span className="text-[10px] text-gray-300 line-through">${product.originalPrice.toFixed(2)}</span>
        )}
      </div>
      {/* Cart icon at bottom-right, outside the text overlay */}
      <div className="absolute bottom-2 right-2 z-20">
        <button
          onClick={(e) => {
            e.preventDefault() // Prevent navigating when clicking icon
            addToCart(product)
          }}
          disabled={isAddingToCart} // Disable if adding to cart
          className="p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAddingToCart ? (
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-800 border-t-transparent"></div>
          ) : (
            <ShoppingCart className="w-4 h-4" />
          )}
          <span className="sr-only">Add to Cart</span>
        </button>
      </div>
    </div>
  )
}
