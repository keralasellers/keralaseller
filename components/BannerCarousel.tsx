"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  autoPlay?: boolean
  interval?: number
}

export function SlideCarousel({ images, autoPlay = false, interval = 3000 }: SlideCarouselProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  React.useEffect(() => {
    if (autoPlay) {
      resetTimeout()
      timeoutRef.current = setTimeout(nextSlide, interval)
    }
    return () => {
      resetTimeout()
    }
  }, [currentSlide, autoPlay, interval, nextSlide])

  if (images.length === 0) {
    return <div className="text-center py-8 text-gray-500">No images to display.</div>
  }

  return (
    <div className="relative w-full h-auto max-w-[1200px] max-h-[600px] mx-auto overflow-hidden">
      {" "}
      {/* Responsive width: full on mobile, max 1200px on larger screens */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={1200} // Set image width to 1200px for optimal loading
              height={675} // Proportional height for 16:9 aspect ratio (1200 / 16 * 9)
              className="w-full h-auto object-contain aspect-[16/9]" // Responsive aspect ratio and object-cover
              priority={index === currentSlide} // Prioritize loading current slide
            />
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      {/* <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 rounded-full p-2"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 rounded-full p-2"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </Button> */}
      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

