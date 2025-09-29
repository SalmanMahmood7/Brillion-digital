"use client";

import React from "react";
import { Calendar, TrendingUp, Target, Award, CheckCircle, Users, Shield, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  const sellingPoints = [
    {
      icon: Calendar,
      title: "10+ Years Experience",
      description: "Over a decade of proven expertise in digital transformation and enterprise solutions",
      stats: "10+",
      label: "Years",
      color: "from-blue-900 to-blue-700",
      bgAccent: "bg-blue-900/5",
      textColor: "text-blue-900"
    },
    {
      icon: TrendingUp,
      title: "50+ Successful Migrations",
      description: "Successfully migrated dozens of companies to modern cloud infrastructure with zero downtime",
      stats: "50+",
      label: "Migrations",
      color: "from-[#f97316] to-orange-500",
      bgAccent: "bg-[#f97316]/5",
      textColor: "text-[#f97316]"
    },
    {
      icon: Target,
      title: "Industry-Focused Approach",
      description: "Tailored solutions designed specifically for your industry's unique challenges and regulations",
      stats: "25+",
      label: "Industries",
      color: "from-blue-900 to-blue-700",
      bgAccent: "bg-blue-900/5",
      textColor: "text-blue-900"
    },
    {
      icon: Award,
      title: "Certified Cloud & AI Experts",
      description: "Team of certified professionals with advanced credentials in leading cloud and AI platforms",
      stats: "100+",
      label: "Certifications",
      color: "from-[#f97316] to-orange-500",
      bgAccent: "bg-[#f97316]/5",
      textColor: "text-[#f97316]"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-900/3 to-[#f97316]/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-900">Your Trusted</span>{" "}
            <span className="text-[#f97316]">Digital Partner</span>
          </h2>
          <p className="text-xl text-blue-900 max-w-3xl mx-auto leading-relaxed">
            We bring unmatched expertise, proven results, and industry-focused solutions to drive your digital transformation success.
          </p>
        </div>

        {/* Selling Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sellingPoints.map((point, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Background Accent */}
                <div className={`absolute inset-0 ${point.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Floating Background Element */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${point.color} opacity-10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700`}></div>
                
                <div className="relative z-10">
                  {/* Icon and Stats */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} p-1 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <point.icon className={`w-8 h-8 ${point.textColor}`} />
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${point.textColor}`}>
                        {point.stats}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {point.label}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-4 ${point.textColor} group-hover:scale-105 transition-transform duration-300`}>
                    {point.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {point.description}
                  </p>
                  
                  {/* Hover Indicator */}
                  <div className={`mt-6 w-0 h-1 bg-gradient-to-r ${point.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl p-12 border-2 border-blue-100 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f97316]/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-900/10 to-transparent rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-blue-900">Trusted by</span>{" "}
                <span className="text-[#f97316]">Industry Leaders</span>
              </h3>
              <p className="text-xl text-blue-900 max-w-2xl mx-auto">
                Join hundreds of successful companies who have transformed their business with our expertise
              </p>
            </div>

            {/* Trust Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f97316] mb-1">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-1">40%</div>
                <div className="text-sm text-gray-600">Avg Cost Reduction</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f97316] mb-1">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;