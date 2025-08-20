"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaShare,
  FaTimes,
  FaHeart,
} from "react-icons/fa";
import React, { useState, useEffect } from "react";

function FollowUs(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
          setIsOpen(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      checkMobile();
      window.addEventListener('scroll', controlNavbar);
      window.addEventListener('resize', checkMobile);
      
      return () => {
        window.removeEventListener('scroll', controlNavbar);
        window.removeEventListener('resize', checkMobile);
      };
    }
  }, [lastScrollY]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const socialButtons = [
  {
    icon: FaEnvelope,
    href: "mailto:keralasellers.in@gmail.com",
    title: "Email Us",
    bgColor: "bg-gradient-to-r from-red-500 to-red-600",
    hoverColor: "hover:from-red-600 hover:to-red-700",
    delay: "100ms",
    animationDelay: "0s"
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919400355185", // updated with your number
    title: "WhatsApp",
    bgColor: "bg-gradient-to-r from-green-500 to-green-600",
    hoverColor: "hover:from-green-600 hover:to-green-700",
    delay: "200ms",
    animationDelay: "0.1s"
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/kerala_sellers/",
    title: "Instagram",
    bgColor: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
    hoverColor: "hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600",
    delay: "300ms",
    animationDelay: "0.2s"
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/groups/14777679/",
    title: "LinkedIn Group",
    bgColor: "bg-gradient-to-r from-blue-600 to-blue-700",
    hoverColor: "hover:from-blue-700 hover:to-blue-800",
    delay: "400ms",
    animationDelay: "0.3s"
  },
  {
    icon: FaGoogle,
    href: "https://www.google.com/search?q=Digital+product+solutions&hl=en",
    title: "Google Business",
    bgColor: "bg-gradient-to-r from-red-600 to-orange-500",
    hoverColor: "hover:from-red-700 hover:to-orange-600",
    delay: "500ms",
    animationDelay: "0.4s"
  }
];


  return (
    <div className={`fixed top-24 right-0 z-50 transition-all duration-700 ease-out follow-us-container ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      {/* Main Floating Button */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`bg-gradient-to-r from-white to-gray-50 text-gray-800 hover:from-green-50 hover:to-green-100 hover:text-green-700 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 active:scale-95 px-3 py-2 xl:px-4 xl:py-3 gap-1 xl:gap-2 transform backdrop-blur-sm border border-white/20 animate-float follow-us-button ${
            isOpen ? 'rotate-180 scale-110' : ''
          }`}
        >
          <div className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            {isOpen ? (
              <FaTimes className={`text-sm xl:text-lg transition-all duration-300 ${isHovered ? 'animate-spin' : ''}`} />
            ) : (
              <FaShare className={`text-sm xl:text-lg transition-all duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
            )}
          </div>
          <span className="text-xs xl:text-sm font-semibold animate-pulse">
            Follow Us
          </span>
          <FaHeart className={`text-xs text-red-500 transition-all duration-300 ${
            isHovered ? 'animate-ping' : ''
          }`} />
        </button>

        {/* Animated Social Icons */}
        <div className={`absolute top-16 xl:top-20 right-0 transition-all duration-700 ease-out social-icons-container ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95 pointer-events-none'
        }`} style={{ minWidth: '60px', zIndex: 1000 }}>
          {socialButtons.map((button, index) => {
            const IconComponent = button.icon;
            return (
              <div 
                key={index}
                className={`mb-4 xl:mb-5 transition-all duration-500 ease-out animate-slide-in-bounce social-icon-wrapper ${
                  isOpen ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-12 opacity-0 rotate-45'
                }`} 
                style={{ 
                  transitionDelay: isOpen ? button.delay : '0ms',
                  animationDelay: button.animationDelay,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: '100%',
                  position: 'relative',
                  zIndex: 900 - index
                }}
              >
                <Link
                  href={button.href}
                  target={button.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`${button.bgColor} ${button.hoverColor} text-white w-12 h-12 xl:w-14 xl:h-14 rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:-rotate-3 active:scale-105 relative overflow-hidden group animate-float-delayed border-2 border-white/30 hover:border-white/60 social-icon`}
                  title={button.title}
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    animationDelay: button.animationDelay,
                    marginRight: '4px',
                    position: 'relative',
                    zIndex: 800 - index
                  }}
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                  
                  {/* Icon with micro-animations */}
                  <IconComponent className="text-lg xl:text-xl relative z-10 transition-all duration-300 group-hover:animate-pulse" />
                  
                  {/* Ripple effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Tagline - Left Aligned */}
      <div className={`mt-4 xl:mt-6 text-left transition-all duration-700 ease-out tagline-container ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} style={{ 
        position: 'absolute', 
        top: '100%', 
        right: '80px',
        minWidth: '200px'
      }}>
        <div className="bg-gradient-to-r from-white/90 via-green-50/90 to-white/90 backdrop-blur-md rounded-xl xl:rounded-2xl px-3 py-2 xl:px-4 xl:py-3 shadow-xl border border-white/30 animate-glow tagline-content">
          <p className="text-xs font-medium text-gray-700 leading-relaxed">
            <span className="block text-green-600 font-bold text-xs xl:text-sm animate-shimmer">
              KeralaSellers.in
            </span>
            <span className="text-gray-500 italic text-xs">
              Powered by Digital Product Solutions 🚀
            </span>
          </p>
        </div>
      </div>

      {/* Enhanced Custom CSS for maximum right alignment */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-3px) rotate(1deg);
          }
          50% {
            transform: translateY(-6px) rotate(0deg);
          }
          75% {
            transform: translateY(-3px) rotate(-1deg);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes slideInBounce {
          0% {
            transform: translateX(100px) rotate(180deg) scale(0);
            opacity: 0;
          }
          60% {
            transform: translateX(-5px) rotate(-10deg) scale(1.1);
            opacity: 1;
          }
          80% {
            transform: translateX(2px) rotate(5deg) scale(0.95);
          }
          100% {
            transform: translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(34, 197, 94, 0.1);
          }
          50% {
            box-shadow: 0 8px 30px rgba(34, 197, 94, 0.2);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        @keyframes wiggleSubtle {
          0%, 7%, 14%, 21% {
            transform: rotate(0deg);
          }
          3.5% {
            transform: rotate(-1deg);
          }
          10.5%, 17.5% {
            transform: rotate(1deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 4s ease-in-out infinite;
        }

        .animate-slide-in-bounce {
          animation: slideInBounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            #059669 0%,
            #34d399 50%,
            #059669 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 2s linear infinite;
        }

        .animate-breathe {
          animation: breathe 3s ease-in-out infinite;
        }

        /* Hover state animations */
        .group:hover .animate-wiggle-subtle {
          animation: wiggleSubtle 0.6s ease-in-out;
        }

        /* Base positioning - MAXIMUM RIGHT with proper spacing */
        .follow-us-container {
          right: 0 !important;
          margin-right: 0 !important;
          padding-right: 0 !important;
          z-index: 9999 !important;
        }

        /* Social icons container spacing */
        .social-icons-container {
          right: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          min-width: 64px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-end !important;
        }

        /* Icon wrapper spacing */
        .social-icon-wrapper {
          width: 100% !important;
          display: flex !important;
          justify-content: flex-end !important;
          margin: 0 !important;
          padding: 0 !important;
          min-height: 56px !important;
          align-items: center !important;
        }

        /* Social icon positioning */
        .social-icon {
          margin-right: 4px !important;
          margin-left: 0 !important;
          flex-shrink: 0 !important;
          transform-origin: center center !important;
        }

        /* Large screens (XL and above) */
        @media (min-width: 1536px) {
          .follow-us-container {
            right: 0.5rem !important;
          }
          
          .social-icons-container {
            min-width: 70px !important;
          }
          
          .social-icon-wrapper {
            min-height: 64px !important;
          }
          
          .social-icon {
            margin-right: 6px !important;
          }
          
          .tagline-container {
            position: absolute !important;
            top: 100% !important;
            right: 90px !important;
            margin: 0 !important;
            padding: 0 !important;
            text-align: left !important;
            display: block !important;
            min-width: 220px !important;
            margin-top: 1.25rem !important;
          }
          
          .tagline-content {
            display: block !important;
          }
        }

        /* Large screens */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .follow-us-container {
            right: 0 !important;
          }
          
          .social-icons-container {
            min-width: 68px !important;
          }
          
          .social-icon-wrapper {
            min-height: 62px !important;
          }
          
          .social-icon {
            margin-right: 5px !important;
          }
          
          .tagline-container {
            position: absolute !important;
            top: 100% !important;
            right: 85px !important;
            margin: 0 !important;
            padding: 0 !important;
            text-align: left !important;
            display: block !important;
            min-width: 200px !important;
            margin-top: 1.125rem !important;
          }
          
          .tagline-content {
            display: block !important;
          }
        }

        /* Medium screens - OPTIMIZED SPACING */
        @media (max-width: 1279px) and (min-width: 769px) {
          .follow-us-container {
            right: 0 !important;
            top: 5rem !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .follow-us-button {
            margin-right: 2px !important;
            padding-right: 0.75rem !important;
            transform: scale(0.95);
          }
          
          .social-icons-container {
            right: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            min-width: 60px !important;
          }
          
          .social-icon-wrapper {
            width: 100% !important;
            display: flex !important;
            justify-content: flex-end !important;
            margin: 0 !important;
            padding: 0 !important;
            min-height: 58px !important;
            margin-bottom: 0.75rem !important;
          }
          
          .social-icon {
            margin-right: 2px !important;
            margin-left: 0 !important;
            width: 3rem !important;
            height: 3rem !important;
          }
          
          .social-icon:hover {
            transform: scale(1.08) rotate(-2deg) !important;
          }
          
          .tagline-container {
            position: absolute !important;
            top: 100% !important;
            right: 70px !important;
            margin: 0 !important;
            padding: 0 !important;
            text-align: left !important;
            display: block !important;
            min-width: 180px !important;
            margin-top: 1rem !important;
          }
          
          .tagline-content {
            margin-right: 0 !important;
            display: block !important;
          }
        }

        /* Mobile screens - OPTIMIZED MOBILE SPACING */
        @media (max-width: 768px) {
          .follow-us-container {
            right: 0 !important;
            top: 5rem !important;
            margin: 0 !important;
            padding: 0 !important;
            transform: translateX(0) !important;
          }
          
          .follow-us-button {
            margin-right: 1px !important;
            padding-right: 0.5rem !important;
            transform: scale(0.9);
          }
          
          .follow-us-button:hover {
            transform: scale(0.98) !important;
          }
          
          .social-icons-container {
            right: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            min-width: 56px !important;
          }
          
          .social-icon-wrapper {
            width: 100% !important;
            display: flex !important;
            justify-content: flex-end !important;
            margin: 0 !important;
            padding: 0 !important;
            min-height: 52px !important;
            margin-bottom: 0.5rem !important;
          }
          
          .social-icon {
            margin-right: 1px !important;
            margin-left: 0 !important;
            width: 2.75rem !important;
            height: 2.75rem !important;
          }
          
          .social-icon:hover {
            transform: scale(1.05) rotate(-2deg) !important;
          }
          
          .tagline-container {
            position: absolute !important;
            top: 100% !important;
            right: 60px !important;
            margin: 0 !important;
            padding: 0 !important;
            text-align: left !important;
            display: block !important;
            min-width: 160px !important;
            margin-top: 0.75rem !important;
          }
          
          .tagline-content {
            margin-right: 0 !important;
            padding: 0.5rem 0.75rem !important;
            display: block !important;
          }
        }

        /* Small mobile screens - COMPACT SPACING */
        @media (max-width: 480px) {
          .follow-us-container {
            right: 0 !important;
            top: 4.5rem !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .follow-us-button {
            margin-right: 0 !important;
            padding-right: 0.375rem !important;
            transform: scale(0.85);
          }
          
          .follow-us-button:hover {
            transform: scale(0.93) !important;
          }
          
          .social-icons-container {
            min-width: 50px !important;
          }
          
          .social-icon-wrapper {
            min-height: 48px !important;
            margin-bottom: 0.375rem !important;
          }
          
          .social-icon {
            margin-right: 0 !important;
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          
          .social-icon:hover {
            transform: scale(1.03) !important;
          }
          
          .tagline-container {
            position: absolute !important;
            top: 100% !important;
            right: 50px !important;
            margin: 0 !important;
            padding: 0 !important;
            text-align: left !important;
            display: block !important;
            min-width: 140px !important;
            margin-top: 0.5rem !important;
          }
          
          .tagline-content {
            margin-right: 0 !important;
            padding: 0.375rem 0.5rem !important;
            display: block !important;
          }
        }

        /* Extra small screens - ULTRA COMPACT */
        @media (max-width: 360px) {
          .follow-us-container {
            right: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            transform: none !important;
          }
          
          .follow-us-button {
            margin: 0 !important;
            padding-right: 0.25rem !important;
            transform: scale(0.8);
          }
          
          .follow-us-button:hover {
            transform: scale(0.88) !important;
          }
          
          .social-icons-container {
            min-width: 44px !important;
          }
          
          .social-icon-wrapper {
            min-height: 42px !important;
            margin-bottom: 0.25rem !important;
          }
          
          .social-icon {
            margin: 0 !important;
            width: 2.25rem !important;
            height: 2.25rem !important;
          }
          
          .social-icon:hover {
            transform: scale(1.02) !important;
          }
          
          .tagline-container {
            position: absolute !important;
            top: 100% !important;
            right: 44px !important;
            margin: 0 !important;
            padding: 0 !important;
            text-align: left !important;
            display: block !important;
            min-width: 120px !important;
            margin-top: 0.375rem !important;
          }
          
          .tagline-content {
            margin: 0 !important;
            padding: 0.25rem 0.375rem !important;
            font-size: 0.65rem !important;
            display: block !important;
          }
        }

        /* Force proper alignment and prevent overlapping */
        .follow-us-container * {
          box-sizing: border-box;
        }
        
        .follow-us-container > div {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        /* Ensure proper stacking and spacing */
        .social-icon-wrapper {
          width: auto !important;
          margin-left: auto !important;
          margin-right: 0 !important;
          position: relative !important;
          clear: both !important;
        }

        .social-icon {
          display: block !important;
          clear: both !important;
        }

        /* Hover effects with proper bounds */
        .social-icon:hover {
          z-index: 999 !important;
          transform-origin: center center !important;
        }

        /* Prevent text overflow and ensure visibility */
        .tagline-content {
          white-space: nowrap !important;
          overflow: visible !important;
          text-overflow: clip !important;
          max-width: none !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
          z-index: 1000 !important;
          position: relative !important;
        }
        
        .tagline-container {
          z-index: 1001 !important;
          position: absolute !important;
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .social-icon:hover {
            transform: scale(1.08) !important;
          }
          
          .follow-us-button:hover {
            transform: scale(0.95) !important;
          }
        }

        /* Ensure no horizontal scroll */
        @media (max-width: 320px) {
          .follow-us-container {
            right: 0 !important;
            width: auto !important;
            max-width: 100vw !important;
            overflow: visible !important;
          }
        }
      `}</style>
    </div>
  );
}

export default FollowUs;