"use client";

import React from "react";
import { ArrowRight, Building2, Heart, Banknote, Factory, GraduationCap, ShoppingCart, Sparkles } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      name: "Enterprise & Government",
      description: "Digital transformation for large organizations and public sector",
      services: ["Cloud Migration", "Legacy Modernization", "Compliance Solutions"],
      gradient: "from-blue-600 to-blue-500",
      iconBg: "bg-gradient-to-br from-blue-600 to-blue-500"
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "HIPAA-compliant solutions for modern healthcare delivery",
      services: ["Patient Management", "Telemedicine", "Data Analytics"],
      gradient: "from-[#f97316] to-orange-400",
      iconBg: "bg-gradient-to-br from-[#f97316] to-orange-400"
    },
    {
      icon: Banknote,
      name: "Financial Services",
      description: "Secure fintech solutions and regulatory compliance",
      services: ["Digital Banking", "Risk Management", "Blockchain Solutions"],
      gradient: "from-blue-500 to-blue-600",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Industry 4.0 solutions for smart manufacturing",
      services: ["IoT Integration", "Supply Chain", "Quality Control"],
      gradient: "from-[#f97316] to-orange-500",
      iconBg: "bg-gradient-to-br from-[#f97316] to-orange-500"
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "EdTech solutions for modern learning environments",
      services: ["Learning Management", "Virtual Classrooms", "Student Analytics"],
      gradient: "from-blue-600 to-blue-500",
      iconBg: "bg-gradient-to-br from-blue-600 to-blue-500"
    },
    {
      icon: ShoppingCart,
      name: "Retail & E-commerce",
      description: "Digital commerce platforms and customer experiences",
      services: ["E-commerce Platforms", "Inventory Management", "Customer Analytics"],
      gradient: "from-[#f97316] to-orange-400",
      iconBg: "bg-gradient-to-br from-[#f97316] to-orange-400"
    }
  ];

  return (
    <section className="py-32 relative bg-white overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-900/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-900/5 to-[#f97316]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-8xl relative z-10">
        {/* Section Header with Split Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-24 gap-16">
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-900/10 to-[#f97316]/10 rounded-full text-blue-900 font-semibold text-sm uppercase tracking-wider border border-blue-900/20">Industry Solutions</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-blue-900">Industries</span>
              <br />
              <span className="text-[#f97316]">We Transform</span>
            </h2>
            <p className="text-xl text-blue-900 leading-relaxed mb-8">
              Delivering cutting-edge solutions across diverse sectors with proven expertise and innovation
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">50+</div>
                <div className="text-sm text-blue-900/70">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f97316]">500+</div>
                <div className="text-sm text-blue-900/70">Projects Delivered</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/5 to-blue-900/10 rounded-3xl p-8 text-center border border-blue-900/10">
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-blue-900 text-lg mb-2">Enterprise</h4>
                <p className="text-sm text-blue-900/70">Large-scale transformations</p>
              </div>
              <div className="bg-gradient-to-br from-[#f97316]/5 to-[#f97316]/10 rounded-3xl p-8 text-center border border-[#f97316]/20 mt-8">
                <div className="w-16 h-16 bg-[#f97316] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-[#f97316] text-lg mb-2">Healthcare</h4>
                <p className="text-sm text-blue-900/70">Patient-centered solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Showcase - Asymmetric Grid */}
        <div className="space-y-16 mb-20">
          {/* First Row - 2 Large Cards */}
          <div className="grid lg:grid-cols-2 gap-12">
            {industries.slice(0, 2).map((industry, index) => {
              const isOrange = index % 2 !== 0;
              return (
                <div key={index} className="group relative">
                  <div className="relative bg-white rounded-3xl p-12 h-full transition-all duration-700 hover:shadow-2xl border border-gray-100 overflow-hidden">
                    {/* Floating Background Elements */}
                    <div className={`absolute -top-10 -right-10 w-40 h-40 ${isOrange ? 'bg-[#f97316]/10' : 'bg-blue-900/10'} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700`}></div>
                    
                    {/* Icon with Badge */}
                    <div className="relative mb-10">
                      <div className={`w-32 h-32 rounded-3xl ${isOrange ? 'bg-gradient-to-br from-[#f97316] to-orange-400' : 'bg-gradient-to-br from-blue-900 to-blue-700'} p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-3`}>
                        <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                          <industry.icon className={`w-16 h-16 ${isOrange ? 'text-[#f97316]' : 'text-blue-900'}`} />
                        </div>
                      </div>
                      <div className={`absolute -bottom-2 -right-2 px-3 py-1 ${isOrange ? 'bg-[#f97316]' : 'bg-blue-900'} text-white text-xs font-bold rounded-full`}>
                        Featured
                      </div>
                    </div>
                    
                    <h3 className={`text-3xl font-bold mb-6 ${isOrange ? 'text-[#f97316]' : 'text-blue-900'}`}>
                      {industry.name}
                    </h3>
                    
                    <p className="text-blue-900 mb-10 leading-relaxed text-lg">
                      {industry.description}
                    </p>
                    
                    {/* Horizontal Services Layout */}
                    <div className="flex flex-wrap gap-3 mb-10">
                      {industry.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className={`px-4 py-2 ${isOrange ? 'bg-[#f97316]/10 border border-[#f97316]/20' : 'bg-blue-900/10 border border-blue-900/20'} rounded-full transition-all duration-300 hover:scale-105`}>
                          <span className="text-sm text-blue-900 font-semibold">{service}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`group/btn w-full py-5 rounded-2xl font-bold text-white transition-all duration-300 hover:shadow-xl hover:scale-105 ${isOrange ? 'bg-gradient-to-r from-[#f97316] to-orange-400 hover:from-orange-500 hover:to-[#f97316]' : 'bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-900'}`}>
                      <span className="flex items-center justify-center">
                        Discover Solutions
                        <ArrowRight className="w-5 h-5 ml-3 group-hover/btn:translate-x-2 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Second Row - 4 Compact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.slice(2).map((industry, index) => {
              const isOrange = (index + 2) % 2 !== 0;
              return (
                <div key={index + 2} className="group relative">
                  <div className="relative bg-white rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
                    <div className={`w-20 h-20 rounded-2xl ${isOrange ? 'bg-gradient-to-br from-[#f97316] to-orange-400' : 'bg-gradient-to-br from-blue-900 to-blue-700'} p-1 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 mb-6`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <industry.icon className={`w-10 h-10 ${isOrange ? 'text-[#f97316]' : 'text-blue-900'}`} />
                      </div>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-4 ${isOrange ? 'text-[#f97316]' : 'text-blue-900'}`}>
                      {industry.name}
                    </h3>
                    
                    <p className="text-blue-900 mb-6 leading-relaxed text-sm">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {industry.services.slice(0, 2).map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full ${isOrange ? 'bg-[#f97316]' : 'bg-blue-900'} mr-3`}></div>
                          <span className="text-xs text-blue-900 font-medium">{service}</span>
                        </div>
                      ))}
                      <div className="text-xs text-blue-900/60">+{industry.services.length - 2} more</div>
                    </div>
                    
                    <button className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 ${isOrange ? 'bg-[#f97316] hover:bg-orange-500' : 'bg-blue-900 hover:bg-blue-800'}`}>
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 rounded-3xl p-16 text-center border-2 border-blue-100">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-[#f97316] rounded-full opacity-20 blur-2xl"></div>
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-[#f97316] rounded-3xl flex items-center justify-center shadow-xl">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-blue-900">Your Industry,</span>{" "}
                <span className="text-[#f97316]">Our Expertise</span>
              </h3>
              <p className="text-xl text-blue-900 mb-10 max-w-3xl mx-auto leading-relaxed">
                No matter your sector, we deliver tailored digital solutions that drive transformation and accelerate growth
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 text-white px-10 py-5 rounded-2xl font-bold hover:from-blue-800 hover:to-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                >
                  <span>Start Your Transformation</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
                <a 
                  href="/services"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#f97316] to-orange-400 text-white px-10 py-5 rounded-2xl font-bold hover:from-orange-500 hover:to-[#f97316] transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                >
                  <span>View All Services</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;