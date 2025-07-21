"use client"

import type React from "react"
import type { HTMLInputElement } from "react"
import { User } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Link2,
  CheckCircle,
  Users,
  Globe,
  Zap,
  CheckIcon,
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  Leaf,
  Star,
  Clock,
  Shield,
  Heart,
  Truck,
  CreditCard,
  BarChart3,
  Camera,
  Share2,
  Award,
  MailCheck,
  MapPin,
  Calendar,
  ArrowRight,
  Play,
  Plus,
  Minus,
  X,
} from "lucide-react"
import { SlideCarousel } from "@/components/BannerCarousel"
import Contact from "@/components/Contact"

export default function ComingSoonPage() {




  const images = [
    // { src: "/T Shirts (4).png", alt: "Image 3" },
    // { src: "/T Shirts (5).png", alt: "Image 3" },
    { src: "/hero.png", alt: "Image 3" },

    { src: "/T Shirts (2).png", alt: "Image 3" },
    { src: "/T Shirts (3).png", alt: "Image 3" },
    { src: "/T Shirts.png", alt: "Image 3" },



  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "₹99/month",
      features: ["Up to 10 products", "1 Online shop link", "No commission, full control"],
      colorClass: "text-green-500",
    },
    {
      name: "Pro",
      price: "₹299/month",
      features: ["Up to 50 products", "Advanced analytics", "Basic support"],
      colorClass: "text-blue-500",
    },
    {
      name: "Unlimited",
      price: "₹499/month",
      features: ["Unlimited products", "Premium features", "Priority support"],
      colorClass: "text-purple-500",
    },
  ]
  const [openFaq, setOpenFaq] = useState<number | null>(null)



  const [isModalOpen, setIsModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    businessName: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    const form = new FormData()
    form.append("name", formData.name)
    form.append("whatsapp", formData.whatsapp)
    form.append("businessName", formData.businessName)
    form.append("formGoogleSheetName", "keralasellers")
    form.append("formDataNameOrder", JSON.stringify(["name", "whatsapp", "businessName"]))
    form.append("formGoogleSendEmail", "keralasellers.in@gmail.com")

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwtyLGDrdA_87UB3QQDVNTCd8FJd26aOPP4wf4rRVGVmxNJjc0NqGNzNZIo4b_MVBuP/exec", {
        method: "POST",
        mode: "no-cors",
        body: form,
      })

      // even if the response can't be read, assume success
      setFormData({
        name: "",
        whatsapp: "",
        businessName: "",
      })
      setIsSubmitted(true)
    } catch (error) {
      alert("Network error. Please try again later.")
      setIsSubmitted(false)
    }
  }



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }



  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }



  return (
    <div className="min-h-screen bg-[#fdfff0]">
      {/* Header */}
      <header className="container mx-auto px-4 pt-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/k-logo-removebg-preview.png" alt="KeralaSellers Logo" width={120} height={60} className="h-12 w-auto" />
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
              <Leaf className="w-3 h-3 mr-1" />
              Coming Soon
            </Badge>
            <Badge variant="secondary" className="hidden md:inline-flex bg-green-100 text-green-800 border-green-200">
              <MailCheck className="w-3 h-3 mr-1" />
              adarsh@keralasellers.in
            </Badge>

          </div>
        </div>
      </header>

      {/* Hero Section */}
      {/* <div className="min-h-screen bg-gray-100"> */}
      <SlideCarousel images={images} autoPlay={true} interval={4000} />
      {/* </div> */}
      <section className="container mx-auto px-4  md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🌴</span>
            <span>Made for Kerala • Launching Q2 2025</span>
          </div> */}

          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Kerala's{" "}
            <span className="text-green-600 relative">
              Resellers
              <div className="absolute  left-0 right-0 h-1  rounded-full opacity-60"></div>
            </span>{" "}
            to Go Digital
          </h1>

          <p className="text-xl md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be among the first Kerala resellers to launch your <span className="font-semibold text-green-600">Digital Store</span>.
            Early access members get free setup assistance and priority support
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                <div className="bg-white rounded-xl p-8 w-full max-w-lg relative">
                  <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={() => {
                      setIsModalOpen(false)
                      setIsSubmitted(false)
                    }}
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to the Family! 🎉</h3>
                      <p className="text-gray-600 mb-4">
                        We'll notify you as soon as KeralaSellers.in launches
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                        <Input
                          type="tel"
                          name="whatsapp"
                          placeholder="WhatsApp Number"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          required
                          pattern="\d{10}"
                          maxLength={10}
                          className="h-12"
                        />
                      </div>
                      <Input
                        type="text"
                        name="businessName"
                        placeholder="Your Business Name (Optional)"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                      <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg font-semibold rounded-lg"
                      >
                        Join the Early Access List
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        By joining, you agree to receive updates about KeralaSellers.in.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            )}
            {/* <Button
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg rounded-full bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button> */}
          </div>


        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "0%", label: "Commission Fee", icon: <CreditCard className="w-6 h-6" /> },
            { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
            { number: "100%", label: "Kerala Made", icon: <MapPin className="w-6 h-6" /> },
            { number: "400%", label: "Businesses on Waitlist", icon: <Users className="w-6 h-6" /> },

          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built specifically for Kerala's entrepreneurial spirit with features that actually matter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Smartphone className="w-8 h-8" />,
              title: "Mobile-First Design",
              description: "Perfect for customers shopping on their phones. 90% of Kerala shops on mobile!",
              badge: "Most Popular",
            },
            {
              icon: <ShoppingCart className="w-8 h-8" />,
              title: "Easy Product Management",
              description: "Add products with photos, prices, and descriptions in Malayalam or English",
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Sales Analytics",
              description: "Track your best-selling products, peak hours, and customer behavior",
            },
            {
              icon: <Link2 className="w-8 h-8" />,
              title: "Shareable Shop Link",
              description: "Share your store on WhatsApp Status, Instagram Stories, and Facebook",
            },
            {
              icon: <CheckCircle className="w-8 h-8" />,
              title: "Zero Commission",
              description: "Keep 100% of your profits. No hidden fees, no monthly charges",
              badge: "Best Value",
            },
            {
              icon: <Camera className="w-8 h-8" />,
              title: "Photo Tools",
              description: "Built-in photo editor and background remover for product images",
            },
            {
              icon: <MessageCircle className="w-8 h-8" />,
              title: "WhatsApp Integration",
              description: "Direct customer chat through WhatsApp for orders and support",
            },
            {
              icon: <Truck className="w-8 h-8" />,
              title: "Delivery Management",
              description: "Track orders and manage deliveries across Kerala",
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Inventory Tracking",
              description: "Never run out of stock with smart inventory alerts",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm relative"
            >
              {feature.badge && (
                <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs">
                  {feature.badge}
                </Badge>
              )}
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get your online store running in just 3 simple steps</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Sign Up & Setup",
                  description: "Create your account and customize your store with your business name, logo, and colors",
                  icon: <User className="w-8 h-8" />,
                },
                {
                  step: "02",
                  title: "Add Products",
                  description: "Upload product photos, add descriptions in Malayalam/English, and set your prices",
                  icon: <ShoppingCart className="w-8 h-8" />,
                },
                {
                  step: "03",
                  title: "Share & Sell",
                  description: "Share your store link on WhatsApp, Instagram, and start receiving orders instantly",
                  icon: <Share2 className="w-8 h-8" />,
                },
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-green-200 -translate-x-1/2 z-0"></div>
                  )}
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-green-600 text-white rounded-full mb-6 text-2xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect for Kerala Businesses</h2>
          <p className="text-lg text-gray-600">See how different types of resellers are using our platform</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Saree & Textile Sellers",
              description:
                "Showcase your beautiful collections with high-quality photos and reach customers across Kerala",
              icon: "👗",
              example: "Like Priya from Kochi selling handloom sarees",
            },
            {
              title: "Spice & Food Vendors",
              description: "Sell authentic Kerala spices, pickles, and homemade snacks with easy delivery tracking",
              icon: "🌶️",
              example: "Like Ravi from Kozhikode selling traditional spices",
            },
            {
              title: "Handicraft Artisans",
              description: "Display your unique Kerala handicrafts and connect with buyers who appreciate local art",
              icon: "🎨",
              example: "Like Meera from Thrissur selling bamboo crafts",
            },
            {
              title: "Electronics Resellers",
              description: "Manage your electronics inventory and provide detailed product specifications",
              icon: "📱",
              example: "Like Suresh from Kottayam selling mobile accessories",
            },
            {
              title: "Fashion & Accessories",
              description: "Create lookbooks and style guides for your fashion products with easy social sharing",
              icon: "👜",
              example: "Like Anjali from Thiruvananthapuram selling jewelry",
            },
            {
              title: "Home & Kitchen Items",
              description: "Organize your home products by categories and offer bulk discounts to customers",
              icon: "🏠",
              example: "Like Rajesh from Palakkad selling kitchen appliances",
            },
          ].map((useCase, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <p className="text-sm text-green-600 italic">{useCase.example}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Helps Section */}
      {/* <section className="bg-white/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Kerala Resellers Love Us</h2>
              <p className="text-lg text-gray-600">Designed specifically for the unique needs of Kerala businesses</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Build Trust with Buyers",
                  description:
                    "Professional online presence that customers can trust and recommend to others. Show customer reviews and ratings.",
                  benefits: ["Customer reviews", "Professional look", "Trust badges", "Secure payments"],
                },
                {
                  icon: <Globe className="w-12 h-12" />,
                  title: "Grow Beyond Your Area",
                  description:
                    "Reach customers across Kerala and even other states. No more limiting yourself to local customers only.",
                  benefits: ["State-wide reach", "Online payments", "Delivery tracking", "Customer database"],
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: "Simple & Easy to Use",
                  description:
                    "No technical knowledge required. If you can use WhatsApp, you can use our platform. Malayalam support included.",
                  benefits: ["Malayalam interface", "Video tutorials", "Phone support", "Easy setup"],
                },
              ].map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 text-green-600 rounded-full mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {benefit.benefits.map((item, idx) => (
                        <li key={idx} className="flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Kerala Businesses Are Saying</h2>
          <p className="text-lg text-gray-600">Early feedback from our beta users and waitlist members</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Priya Nair",
              business: "Handloom Sarees, Kochi",
              quote: "Finally, a platform made for us! No commission means I can offer better prices to my customers.",
              rating: 5,
              avatar: "PN",
            },
            {
              name: "Ravi Kumar",
              business: "Spice Merchant, Kozhikode",
              quote: "The Malayalam support is amazing. My customers love ordering through WhatsApp integration.",
              rating: 5,
              avatar: "RK",
            },
            {
              name: "Meera Devi",
              business: "Handicrafts, Thrissur",
              quote: "I can showcase my art properly now. The photo tools help make my products look professional.",
              rating: 5,
              avatar: "MD",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.business}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Roadmap Section */}
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Launch Roadmap</h2>
            <p className="text-lg text-gray-600">Here's what's coming and when</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Beta Launch",
                  date: "March 2025",
                  status: "upcoming",
                  features: ["Basic store setup", "Product management", "WhatsApp integration", "Mobile-first design"],
                },
                {
                  phase: "Phase 2",
                  title: "Public Launch",
                  date: "April 2025",
                  status: "upcoming",
                  features: ["Payment gateway", "Delivery tracking", "Customer reviews", "Analytics dashboard"],
                },
                {
                  phase: "Phase 3",
                  title: "Advanced Features",
                  date: "May 2025",
                  status: "planned",
                  features: ["Bulk orders", "Inventory management", "Multi-language support", "Advanced analytics"],
                },
              ].map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${phase.status === "upcoming" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"
                        }`}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <Card className="flex-1 border-0 shadow-lg bg-white">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                          <p className="text-green-600 font-medium">{phase.phase}</p>
                        </div>
                        <Badge variant={phase.status === "upcoming" ? "default" : "secondary"} className="mt-2 md:mt-0">
                          <Calendar className="w-3 h-3 mr-1" />
                          {phase.date}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {phase.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* {pricingsection} */}

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple & Affordable Plans</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the perfect plan for your business needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className={`text-2xl font-bold ${plan.colorClass}`}>{plan.name}</CardTitle>
                  <CardDescription className="text-4xl font-bold mt-2">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* About Founders Section */}
      <section id="founders" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Founders</h2>
            <p className="text-lg text-gray-600">Kerala natives on a mission to empower local businesses</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Adarsh B S */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-green-50 to-yellow-50">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/adarsh img.jpg"
                      alt="User Avatar"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Adarsh B S</h3>
                  <p className="text-green-600 font-medium mb-4">Founder & CEO, Age 24</p>
                  <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                    "I'm building KeralaSellers.in to make it easy for small businesses in our state to grow online
                    without middlemen or commission cuts. Every reseller deserves the tools to succeed digitally."
                  </blockquote>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-xl">🌴</span>
                    <span className="text-gray-600 text-sm">Strategy & Growth</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Computer Science graduate passionate about empowering local businesses through technology.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aromal V G */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-yellow-50 to-green-50">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/portfolio-pic.jpg"
                      alt="User Avatar"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Aromal V G</h3>
                  <p className="text-green-600 font-medium mb-4">Co-Founder</p>
                  <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                    "Every Kerala reseller deserves the tools to succeed digitally. We're here to make that dream a
                    reality for our local business community and help them compete with bigger players."
                  </blockquote>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-xl">🚀</span>
                    <span className="text-gray-600 text-sm">Tech & Vision</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Business strategist with deep understanding of Kerala's local commerce and digital marketing.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Combined Mission Statement */}
          <div className="mt-12 text-center">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="max-w-3xl mx-auto">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h4>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Led by Adarsh with Aromal's strategic support, we're committed to empowering every reseller in
                    Kerala with the digital tools they need to thrive. No commissions, no complications – just pure
                    support for our local business ecosystem.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900">Local First</p>
                      <p className="text-xs text-gray-600">Built for Kerala businesses</p>
                    </div>
                    <div>
                      <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900">Zero Commission</p>
                      <p className="text-xs text-gray-600">Keep all your profits</p>
                    </div>
                    <div>
                      <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900">Community Driven</p>
                      <p className="text-xs text-gray-600">By sellers, for sellers</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-center space-x-4">
                    <span className="text-2xl">🤝</span>
                    <span className="text-gray-600 font-medium">Proudly from God's Own Country</span>
                    <span className="text-2xl">🇮🇳</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about KeralaSellers.in</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "Is KeralaSellers.in really commission-free?",
              answer:
                "Yes! We don't charge any commission on your sales. You keep 100% of your profits. We may introduce optional premium features in the future, but basic selling will always be free.",
            },
            {
              question: "Do I need technical knowledge to use this platform?",
              answer:
                "Not at all! If you can use WhatsApp, you can use our platform. We've designed it to be as simple as possible, with Malayalam language support and video tutorials.",
            },
            {
              question: "How do customers pay for products?",
              answer:
                "We'll integrate with popular payment methods like UPI, cards, and cash on delivery. Customers can also contact you directly through WhatsApp for payment arrangements.",
            },
            {
              question: "Can I sell products outside Kerala?",
              answer:
                "While we're focused on Kerala businesses, you can sell to customers anywhere in India. We'll help you manage shipping and delivery across states.",
            },
            {
              question: "What types of products can I sell?",
              answer:
                "You can sell almost anything legal - from handmade crafts to electronics, clothing to food items. We'll provide category-specific tools to help you showcase your products better.",
            },
            {
              question: "How is this different from other platforms?",
              answer:
                "We're built specifically for Kerala businesses with local language support, no commissions, WhatsApp integration, and understanding of local business practices. Plus, we're made right here in Kerala!",
            },
            {
              question: "When will the platform launch?",
              answer:
                "We're planning a beta launch in March 2025, followed by public launch in April 2025. Join our waitlist to be among the first to get access!",
            },
            {
              question: "Will there be customer support in Malayalam?",
              answer:
                "Yes! Our support team will be available in both Malayalam and English. We understand the importance of communicating in your preferred language.",
            },
          ].map((faq, index) => (
            <Card key={index} className="mb-4 border-0 shadow-lg bg-white">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-green-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">

        <Contact />

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/klogo.png"
                  alt="KeralaSellers Logo"
                  width={120}
                  height={60}
                  className="h-24 w-auto "
                />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering Kerala's resellers with commission-free online stores. Built by Keralites, for Keralites.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/kerala_sellers" target="blank" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="tel:+919400355185" className="text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </a>
                <a href="mailto:keralasellers.in@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#founders" className="hover:text-white transition-colors">
                    About Founders
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:adarsh@keralasellers.in" className="hover:text-white transition-colors">
                    keralasellers.in@gmail.com
                  </a>
                </li>
                <li>+919400355185</li>
                <li>+918281783052</li>
                <li>Kerala, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-lg font-medium text-green-400 mb-2">Launching Soon in Kerala 🇮🇳</p>
            <p className="text-gray-500 text-sm">© 2025 KeralaSellers.in. Made with ❤️ in God's Own Country</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
