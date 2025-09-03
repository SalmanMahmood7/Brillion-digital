"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  BarChart3, 
  Code, 
  Globe, 
  Shield, 
  Cloud,
  ArrowRight,
  Zap,
  Database,
  Cpu,
  Sparkles,
  Star,
  Play,
  Settings,
  Lightbulb,
  Rocket,
  Target,
  Users,
  Award,
  TrendingUp
} from "lucide-react";

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  color: string;
  features: string[];
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Brain,
  BarChart3,
  Code,
  Globe,
  Shield,
  Cloud,
  Settings,
  Lightbulb,
  Rocket,
  Zap,
  Database,
  Cpu
};

const WhatWeDoSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [clickedCardIndex, setClickedCardIndex] = useState<number | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      
      try {
        // Import servicesService dynamically to avoid SSR issues
        const { servicesService } = await import("@/lib/firebase-services");
        
        // Add timeout to prevent hanging
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Firebase request timeout')), 2000)
        );
        
        const firebaseServices = await Promise.race([
          servicesService.getAll(),
          timeoutPromise
        ]) as any[];
        
        // Only use Firebase data if we actually got services
        if (firebaseServices && firebaseServices.length > 0) {
          // Map Firebase services to our component's Service interface
          const mappedServices: Service[] = firebaseServices.map((service, index) => {
            // Get icon component from map
            const IconComponent = iconMap[service.icon] || Brain;

            // Generate gradient colors based on index
            const gradients = [
              "from-blue-600 to-blue-500",
              "from-emerald-600 to-emerald-500", 
              "from-purple-600 to-purple-500",
              "from-blue-600 to-blue-500",
              "from-blue-600 to-blue-500",
              "from-cyan-600 to-cyan-500"
            ];

            return {
              id: service.id || `service-${index}`,
              icon: IconComponent,
              title: service.title,
              description: service.description,
              href: service.href,
              color: gradients[index % gradients.length],
              features: ["Custom Solutions", "Expert Support", "Scalable Architecture"]
            };
          });
          
          setServices(mappedServices);
        } else {
          throw new Error('No services found in Firebase');
        }
      } catch (error) {
        console.error('Error loading services from Firebase:', error);
        // Fallback services for better user experience
        const fallbackServices: Service[] = [
          {
            id: 'digital-advisory',
            icon: Brain,
            title: 'Digital Advisory',
            description: 'Strategic guidance to accelerate your digital transformation journey.',
            href: '/services/digital-advisory',
            color: 'from-blue-600 to-blue-500',
            features: ['Digital Strategy', 'Process Optimization', 'Technology Roadmap']
          },
          {
            id: 'data-analytics',
            icon: BarChart3,
            title: 'Data & Analytics',
            description: 'Transform raw data into actionable intelligence that drives business growth.',
            href: '/services/applied-data-analytics',
            color: 'from-emerald-600 to-emerald-500',
            features: ['Data Science', 'Machine Learning', 'Business Intelligence']
          },
          {
            id: 'application-development',
            icon: Code,
            title: 'Application Development',
            description: 'Custom applications built with modern technologies to solve unique challenges.',
            href: '/services/application-development',
            color: 'from-purple-600 to-purple-500',
            features: ['Custom Development', 'Modern Technologies', 'Unique Solutions']
          },
          {
            id: 'digital-platforms',
            icon: Globe,
            title: 'Digital Platforms',
            description: 'Boost growth and productivity using ERP, CRM, and CMS platforms.',
            href: '/services/digital-platforms',
            color: 'from-blue-600 to-blue-500',
            features: ['ERP Solutions', 'CRM Systems', 'Content Management']
          },
          {
            id: 'cyber-security',
            icon: Shield,
            title: 'Cyber Security & Privacy',
            description: 'Minimize threats and proactively protect your most valuable assets.',
            href: '/services/cyber-security-privacy',
            color: 'from-blue-600 to-blue-500',
            features: ['Threat Protection', 'Privacy Compliance', 'Security Audits']
          },
          {
            id: 'cloud-services',
            icon: Cloud,
            title: 'Cloud Services',
            description: 'Cloud migration and optimization services to accelerate transformation.',
            href: '/services/cloud-services',
            color: 'from-cyan-600 to-cyan-500',
            features: ['Cloud Migration', 'Infrastructure Optimization', 'Scalable Solutions']
          }
        ];
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };

    // Delay loading slightly to prioritize initial render
    const timer = setTimeout(loadServices, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleServiceClick = (service: Service, index: number) => {
    setSelectedService(service);
    setClickedCardIndex(index);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
    setClickedCardIndex(null);
  };

  return (
    <div className="relative min-h-screen py-20 bg-gray-50">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200 mb-8">
            <Rocket className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-800 text-sm font-semibold tracking-wide">DIGITAL SOLUTIONS</span>
            <Star className="w-5 h-5 text-blue-600 ml-2" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8">
            <span className="text-gray-900">What We</span>{" "}
            <span className="text-blue-600">Do</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            Transforming businesses through cutting-edge technology solutions and strategic digital innovation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">150+</div>
              <div className="text-sm text-gray-500">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">98%</div>
              <div className="text-sm text-gray-500">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-sm text-gray-500">Support Available</div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading our services...</p>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:hidden gap-4 sm:gap-6 mb-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.color} transform hover:scale-105 transition-all duration-500 cursor-pointer p-6`}
                    onClick={() => handleServiceClick(service, index)}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                        <IconComponent className="w-4 h-4 text-white mr-2" />
                        <span className="text-xs font-semibold text-white">SERVICE</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">{service.description}</p>
                      <button className="text-white font-semibold text-sm hover:text-white/80 transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="hidden lg:grid xl:grid-cols-12 xl:grid-rows-8 lg:grid-cols-10 lg:grid-rows-7 gap-4 lg:gap-6 h-[600px] lg:h-[700px] xl:h-[800px] mt-12">
              
              {services[0] && (() => {
                const IconComponent = services[0].icon;
                return (
                  <div className={`xl:col-span-5 xl:row-span-4 lg:col-span-4 lg:row-span-3 group relative overflow-hidden rounded-3xl bg-gradient-to-br ${services[0].color} transform hover:scale-105 transition-all duration-700 cursor-pointer`}
                       onClick={() => handleServiceClick(services[0], 0)}
                       onMouseEnter={() => setHoveredCard(0)}
                       onMouseLeave={() => setHoveredCard(null)}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/30"></div>
                    
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `
                        polygon(0 0, 100% 0, 85% 100%, 0 100%),
                        polygon(85% 0, 100% 0, 100% 80%, 70% 100%)
                      `,
                      backgroundSize: '60px 60px, 40px 40px'
                    }}></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between p-8">
                      <div>
                        <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                          <Star className="w-3 h-3 text-white mr-2" />
                          <span className="text-xs font-semibold text-white">FLAGSHIP</span>
                        </div>
                        <IconComponent className="h-12 w-12 text-white mb-4" />
                      </div>
                      
                      <div>
                        <h3 className="text-3xl font-black text-white mb-3">{services[0].title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">{services[0].description}</p>
                        <button className="text-white font-semibold text-sm hover:text-white/80 transition-colors">
                          Explore →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {services[1] && (() => {
                const IconComponent = services[1].icon;
                return (
                  <div className={`xl:col-span-4 xl:row-span-3 lg:col-span-3 lg:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br ${services[1].color} transform hover:scale-105 transition-all duration-500 cursor-pointer`}
                       onClick={() => handleServiceClick(services[1], 1)}
                       onMouseEnter={() => setHoveredCard(1)}
                       onMouseLeave={() => setHoveredCard(null)}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 1px, transparent 1px),
                                       radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px, 30px 30px'
                    }}></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between p-6">
                      <div className="flex justify-between items-start">
                        <IconComponent className="h-10 w-10 text-white" />
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">98%</div>
                          <div className="text-white/70 text-xs">Accuracy</div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{services[1].title}</h3>
                        <p className="text-white/80 text-xs leading-relaxed">{services[1].description}</p>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {services[2] && (() => {
                const IconComponent = services[2].icon;
                return (
                  <div className={`xl:col-span-3 xl:row-span-2 lg:col-span-3 lg:row-span-2 group relative overflow-hidden rounded-xl bg-gradient-to-br ${services[2].color} transform hover:scale-105 transition-all duration-500 cursor-pointer`}
                       onClick={() => handleServiceClick(services[2], 2)}
                       onMouseEnter={() => setHoveredCard(2)}
                       onMouseLeave={() => setHoveredCard(null)}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
                    }}></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-4">
                      <IconComponent className="h-8 w-8 text-white mb-3" />
                      <h3 className="text-lg font-bold text-white mb-1">{services[2].title}</h3>
                      <p className="text-white/70 text-xs">Custom Solutions</p>
                    </div>
                  </div>
                );
              })()}

              {services[3] && (() => {
                const IconComponent = services[3].icon;
                return (
                  <div className={`xl:col-span-7 xl:row-span-2 lg:col-span-6 lg:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br ${services[3].color} transform hover:scale-105 transition-all duration-500 cursor-pointer`}
                       onClick={() => handleServiceClick(services[3], 3)}
                       onMouseEnter={() => setHoveredCard(3)}
                       onMouseLeave={() => setHoveredCard(null)}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0" style={{
                      backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.1) 90deg, transparent 180deg, rgba(255,255,255,0.1) 270deg, transparent 360deg)`,
                      backgroundSize: '80px 80px'
                    }}></div>
                    
                    <div className="relative z-10 h-full flex items-center justify-between p-6">
                      <div className="flex items-center space-x-4">
                        <IconComponent className="h-10 w-10 text-white" />
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{services[3].title}</h3>
                          <p className="text-white/80 text-sm">{services[3].description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-xl font-bold text-white">25+</div>
                          <div className="text-white/70 text-xs">Platforms</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-white">150+</div>
                          <div className="text-white/70 text-xs">Projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {services[4] && (() => {
                const IconComponent = services[4].icon;
                return (
                  <div className={`xl:col-span-3 xl:row-span-4 lg:col-span-3 lg:row-span-3 group relative overflow-hidden rounded-2xl bg-gradient-to-b ${services[4].color} transform hover:scale-105 transition-all duration-500 cursor-pointer`}
                       onClick={() => handleServiceClick(services[4], 4)}
                       onMouseEnter={() => setHoveredCard(4)}
                       onMouseLeave={() => setHoveredCard(null)}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(30deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
                                       linear-gradient(150deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
                      backgroundSize: '60px 60px'
                    }}></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between p-6 text-center">
                      <div>
                        <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                          <IconComponent className="w-3 h-3 text-white mr-2" />
                          <span className="text-xs font-semibold text-white">SECURE</span>
                        </div>
                        <IconComponent className="h-12 w-12 text-white mx-auto" />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">{services[4].title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">{services[4].description}</p>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white">100%</div>
                          <div className="text-white/70 text-xs">Protected</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {services[5] && (() => {
                const IconComponent = services[5].icon;
                return (
                  <div className={`xl:col-span-2 xl:row-span-2 lg:col-span-1 lg:row-span-2 group relative overflow-hidden rounded-xl bg-gradient-to-br ${services[5].color} transform hover:scale-105 transition-all duration-500 cursor-pointer`}
                       onClick={() => handleServiceClick(services[5], 5)}
                       onMouseEnter={() => setHoveredCard(5)}
                       onMouseLeave={() => setHoveredCard(null)}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 opacity-30" style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 2px, transparent 2px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center items-center p-4">
                      <IconComponent className="h-10 w-10 text-white mb-2" />
                      <h3 className="text-sm font-bold text-white text-center leading-tight">{services[5].title}</h3>
                    </div>
                  </div>
                );
              })()}
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-8 py-4 bg-blue-50 border border-blue-200 rounded-xl mb-8">
                <Award className="h-6 w-6 text-blue-600 mr-3" />
                <span className="text-blue-800 font-semibold">Industry-Leading Solutions</span>
                <TrendingUp className="h-6 w-6 text-blue-600 ml-3" />
              </div>
              
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Each service is designed with scalability, security, and performance in mind, ensuring your business stays ahead in the digital landscape.
              </p>
            </div>
          </div>
        )}
      </div>

      {selectedService && clickedCardIndex !== null && (() => {
        const IconComponent = selectedService.icon;
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={handleCloseDetails}
            ></div>
            
            <div className="relative w-full max-w-2xl mx-4">
              <div className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-br ${selectedService.color} rounded-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {selectedService.title}
                      </h3>
                      <div className={`h-0.5 w-12 bg-gradient-to-r ${selectedService.color} rounded-full mt-1`}></div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCloseDetails}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    <span className="text-lg font-bold">×</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-3">
                      Overview
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {selectedService.description}
                    </p>
                    
                    <a
                      href={selectedService.href}
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${selectedService.color} text-white font-semibold text-sm rounded-lg hover:shadow-lg transition-all duration-200`}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      <span>Explore Solutions</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-3">
                      Key Features
                    </h4>
                    
                    <div className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <div 
                          key={index}
                          className="bg-gray-50 border border-gray-200 rounded-lg p-3"
                        >
                          <span className="text-gray-700 font-medium text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default WhatWeDoSection;