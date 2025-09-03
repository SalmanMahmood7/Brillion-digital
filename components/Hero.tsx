"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Zap, Shield, Globe, Sparkles, TrendingUp, Cpu, Code2, Layers, Users, Award, Rocket } from "lucide-react";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Innovation", "Excellence", "Growth", "Success"];

  useEffect(() => {
    // Word cycling only - NO mouse tracking
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24 xl:pt-20 1.5xl:pt-16 2xl:pt-8">
      {/* Clean static background - no animations */}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 md:pr-4 lg:pr-8">

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="text-gray-900">Digital</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  {words[currentWord]}
                </span>
                <br />
                <span className="text-gray-900">Delivered</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform your business with cutting-edge digital solutions. We create experiences that inspire, innovate, and drive unprecedented growth.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { icon: Zap, text: "Lightning Fast" },
                { icon: Shield, text: "Secure & Reliable" },
                { icon: Globe, text: "Global Scale" },
                { icon: TrendingUp, text: "Growth Focused" }
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-2 text-gray-700">
                  <div className="p-2 bg-gradient-to-br from-blue-50 to-blue-50 rounded-lg">
                    <feature.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-xs md:text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-200/50">
                <span className="relative z-10 flex items-center justify-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300">
                Watch Demo
                <span className="inline-block ml-2 group-hover:rotate-90 transition-transform duration-300">▶</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 pt-8 border-t border-gray-200">
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "500+", label: "Projects" },
                { value: "24/7", label: "Support" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Enhanced Software Solutions Showcase */}
          <div className="relative md:pl-4 lg:pl-8">
            <div className="relative max-w-lg mx-auto">
              
              {/* Main Showcase Container */}
              <div className="relative">
                
                {/* Primary Feature Card */}
                <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl p-8 border border-blue-400 relative overflow-hidden">
                  
                  {/* Header */}
                  <div className="text-center mb-8 relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-4 shadow-lg">
                      <Code2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Custom Software Solutions</h3>
                    <p className="text-white/80 text-sm">Built for your unique business needs</p>
                  </div>
                  
                  {/* Key Features */}
                  <div className="space-y-4 mb-8 relative z-10">
                    {[
                      { icon: Zap, title: "High Performance", desc: "Lightning-fast applications", color: "bg-yellow-50 border-yellow-200" },
                      { icon: Shield, title: "Enterprise Security", desc: "Bank-level encryption", color: "bg-blue-50 border-blue-200" },
                      { icon: Globe, title: "Global Ready", desc: "Multi-language & timezone", color: "bg-blue-50 border-blue-200" }
                    ].map((feature, i) => (
                      <div key={i} className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-200">
                        <div className={`flex-shrink-0 w-10 h-10 ${feature.color} rounded-lg border flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                          <feature.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-white text-sm mb-1">{feature.title}</div>
                          <div className="text-white/70 text-xs leading-relaxed">{feature.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 justify-center relative z-10">
                    {[
                      { name: "React", color: "bg-blue-50 border-blue-200 text-blue-600" },
                      { name: "Node.js", color: "bg-blue-50 border-blue-200 text-blue-600" },
                      { name: "Python", color: "bg-yellow-50 border-yellow-200 text-yellow-700" },
                      { name: "AI/ML", color: "bg-purple-50 border-purple-200 text-purple-600" },
                      { name: "Cloud", color: "bg-gray-50 border-gray-200 text-gray-600" }
                    ].map((tech, i) => (
                      <span key={i} className={`px-3 py-1.5 ${tech.color} border rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-pointer`}>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  
                  {/* Bottom CTA */}
                  <div className="text-center mt-6 relative z-10">
                    <button className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-sm font-medium text-white hover:bg-white/30 transition-colors duration-200">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Explore Solutions
                    </button>
                  </div>
                </div>
                
                {/* Enhanced Floating Stats Cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl border border-gray-200 p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">24/7</div>
                      <div className="text-xs text-gray-500">Expert Support</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl border border-gray-200 p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">99.9%</div>
                      <div className="text-xs text-gray-500">Uptime SLA</div>
                    </div>
                  </div>
                </div>
                
                
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations - ORIGINAL */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-5px); }
        }
        
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-800px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes width {
          0% { width: 0; }
          100% { width: var(--width); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        
        @keyframes orbit-reverse {
          0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(80px) rotate(360deg); }
        }
        
        .animate-float-slow {
          animation: float-slow ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 20s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-width {
          animation: width 1s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }
        
        .animate-orbit-reverse {
          animation: orbit-reverse 15s linear infinite;
        }
        
        .rotate-y-5:hover {
          transform: rotateY(5deg);
        }
      `}</style>
    </section>
  );
};

export default Hero;