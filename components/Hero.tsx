"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Shield, Globe, TrendingUp } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow data
  const slides = [
    {
      id: 1,
      title: "Digital Innovation Delivered",
      subtitle: "Transform Your Business",
      description: "Cutting-edge digital solutions that inspire, innovate, and drive unprecedented growth for your organization.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      cta: "Start Your Journey"
    },
    {
      id: 2,
      title: "Cloud Excellence Achieved",
      subtitle: "Scalable Solutions",
      description: "Harness the power of cloud computing with enterprise-grade security, reliability, and performance optimization.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      cta: "Explore Cloud Services"
    },
    {
      id: 3,
      title: "AI-Powered Growth",
      subtitle: "Intelligent Automation",
      description: "Leverage artificial intelligence and machine learning to automate processes and unlock new business opportunities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      cta: "Discover AI Solutions"
    },
    {
      id: 4,
      title: "Cybersecurity Success",
      subtitle: "Protected & Secure",
      description: "Comprehensive security solutions that protect your digital assets with enterprise-grade encryption and monitoring.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      cta: "Secure Your Business"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Images Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="text-center text-white space-y-8">
          
          {/* Slide Content */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-orange-300 tracking-wide uppercase">
                {slides[currentSlide].subtitle}
              </h2>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto py-8">
              {[
                { icon: Zap, text: "Lightning Fast" },
                { icon: Shield, text: "Secure & Reliable" },
                { icon: Globe, text: "Global Scale" },
                { icon: TrendingUp, text: "Growth Focused" }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center space-y-2 text-white">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
                <span className="relative z-10 flex items-center justify-center">
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>


      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fadeInScale {
          0% { 
            opacity: 0; 
            transform: scale(0.95); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        /* Smooth background transitions */
        .bg-transition {
          transition: all 1s ease-in-out;
        }
        
        /* Hover effects */
        .hover-lift:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Hero;