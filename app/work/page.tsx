"use client"

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ArrowRight, Award, Target, Sparkles, CheckCircle, TrendingUp, Rocket, BarChart3, Laptop, Cloud, Shield, Lightbulb } from "lucide-react";
import { useState } from "react";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  
  const serviceFilters = [
    "ALL",
    "APPLICATION DEVELOPMENT", 
    "DATA & ANALYTICS",
    "CLOUD SERVICES",
    "CYBER SECURITY", 
    "DIGITAL ADVISORY",
    "DIGITAL PLATFORMS",
    "MANAGED IT"
  ];

  const caseStudies = [
    {
      title: "MaRS Discovery District",
      description: "An infrastructure revamp increases efficiency by 300%",
      category: "MANAGED IT",
      impact: "+300% Efficiency",
      icon: Rocket
    },
    {
      title: "Canadian Propane Leader",
      description: "Consolidating data and discovering multi-channel sales opportunities",
      category: "DATA & ANALYTICS",
      impact: "+250% Sales",
      icon: BarChart3
    },
    {
      title: "Rypl.com",
      description: "Building a next-gen marketplace platform from scratch",
      category: "APPLICATION DEVELOPMENT",
      impact: "1M+ Users",
      icon: Laptop
    },
    {
      title: "Global Finance Corp",
      description: "Cloud migration reducing operational costs significantly",
      category: "CLOUD SERVICES",
      impact: "-40% Costs",
      icon: Cloud
    },
    {
      title: "Healthcare Network",
      description: "Implementing enterprise-grade security infrastructure",
      category: "CYBER SECURITY",
      impact: "100% Secure",
      icon: Shield
    },
    {
      title: "Retail Giant",
      description: "Digital transformation strategy and implementation",
      category: "DIGITAL ADVISORY",
      impact: "+180% ROI",
      icon: Lightbulb
    }
  ];

  const filteredStudies = activeFilter === "ALL" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">


        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20">
          <div className="relative w-full py-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/work-hero.jpg" 
                alt="Work Portfolio Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-600/90"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
                  <Briefcase className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm font-semibold text-white">Our Portfolio</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
                  Work That Inspires
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Explore our portfolio of successful digital transformations, innovative solutions, and impactful projects that have driven real business results.
                </p>

                {/* Stats */}
                <div className="flex justify-center space-x-12 pt-8">
                  {[
                    { icon: Award, value: "500+", label: "Projects" },
                    { icon: Target, value: "98%", label: "Success Rate" },
                    { icon: TrendingUp, value: "3x", label: "Avg ROI" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="inline-flex p-3 bg-white/10 backdrop-blur-sm rounded-xl mb-2">
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="relative z-10 pb-12">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="flex flex-wrap justify-center gap-3">
              {serviceFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-200/50'
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="relative z-10 pb-24">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Top Gradient Bar */}
                  <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  
                  {/* Content */}
                  <div className="p-8">
                    {/* Icon */}
                    <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl mb-4">
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-full mb-4">
                      <span className="text-xs font-semibold text-blue-700">{study.category}</span>
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    
                    {/* Impact */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-blue-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span className="text-sm font-semibold">{study.impact}</span>
                      </div>
                      
                      <button className="group/btn flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700">
                        View Case
                        <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 pb-24">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
                Let's collaborate to transform your ideas into reality and drive your business forward.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-xl">
                <span className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>

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
        
        .animate-float-slow {
          animation: float-slow ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 20s linear infinite;
        }
      `}</style>
    </PageLayout>
  );
}