"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Globe, CheckCircle, ArrowRight, Server, Layers, Settings, Database, Users, Zap } from "lucide-react";

export default function DigitalPlatforms() {
  const services = [
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "Comprehensive ERP solutions that integrate all business processes into a unified system. We implement and customize ERP platforms to streamline operations, improve efficiency, and provide real-time business insights.",
      icon: Database,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&auto=format",
      features: ["Process Integration", "Custom Workflows", "Real-time Analytics"]
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Powerful CRM platforms that enhance customer relationships and drive sales growth. We configure CRM systems to manage leads, automate sales processes, and provide comprehensive customer insights.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format",
      features: ["Lead Management", "Sales Automation", "Customer Analytics"]
    },
    {
      title: "Content Management Systems",
      description: "Modern CMS solutions for dynamic content management and digital experiences. We build and customize content platforms that empower teams to create, manage, and publish content efficiently.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop&auto=format",
      features: ["Content Publishing", "Multi-channel Delivery", "User Management"]
    },
    {
      title: "E-commerce Platforms",
      description: "Scalable e-commerce solutions that drive online sales and enhance customer experiences. We develop custom online stores with advanced features, payment integrations, and mobile optimization.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&auto=format",
      features: ["Online Store Setup", "Payment Integration", "Mobile Commerce"]
    },
    {
      title: "Platform Integration Services",
      description: "Seamless integration between different digital platforms and systems. We connect disparate systems, enable data synchronization, and create unified digital ecosystems for improved efficiency.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&auto=format",
      features: ["API Integration", "Data Synchronization", "System Connectivity"]
    },
    {
      title: "Platform Performance Optimization",
      description: "Optimize platform performance for speed, scalability, and reliability. We analyze system performance, implement optimizations, and ensure your platforms can handle growing business demands.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format",
      features: ["Performance Tuning", "Scalability Planning", "System Monitoring"]
    }
  ];

  return (
    <PageLayout>
      <div className="relative min-h-screen bg-white overflow-hidden">

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20">
          <div className="relative w-full py-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/digital-platforms-hero.jpg" 
                alt="Digital Platforms Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-600/90"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="text-5xl lg:text-6xl font-black text-white">
                  Digital Platform Excellence
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Transform your business with powerful digital platforms that streamline operations and enhance customer experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-10 py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-200">
                    
                    <div className="flex h-full">
                      {/* Service Image */}
                      <div className="relative w-1/2 min-h-[280px] overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent" />
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="w-1/2 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                            {service.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-4">
                            {service.description}
                          </p>

                          {/* Features */}
                          <div className="space-y-2 mb-6">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                <span className="text-sm text-gray-700 font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                          Implement Platform
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-20">
              <div className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-3xl p-12 text-white">
                <Server className="h-16 w-16 mx-auto mb-6 text-white" />
                <h3 className="text-3xl font-bold mb-4">Ready to transform with digital platforms?</h3>
                <p className="text-lg mb-8 opacity-90">Streamline your operations with our comprehensive platform solutions</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all">
                    Platform Assessment
                  </Button>
                  <Button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg">
                    View Solutions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CSS Animations */}
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
      </div>
    </PageLayout>
  );
}