"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Code2, Globe2, Brain, BarChart3, Shield, Cloud, Settings, Database } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Insights", href: "/insights" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceItems = [
    { 
      name: "Digital Advisory", 
      href: "/services/digital-advisory",
      description: "Strategic guidance for digital transformation",
      icon: Brain,
      color: "from-blue-500 to-blue-600"
    },
    { 
      name: "Data & Analytics", 
      href: "/services/applied-data-analytics",
      description: "Transform data into actionable insights",
      icon: BarChart3,
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      name: "App Development", 
      href: "/services/application-development",
      description: "Custom applications for your business",
      icon: Code2,
      color: "from-purple-500 to-purple-600"
    },
    { 
      name: "Digital Platforms", 
      href: "/services/digital-platforms",
      description: "Scalable digital ecosystems",
      icon: Globe2,
      color: "from-blue-500 to-blue-600"
    },
    { 
      name: "Cyber Security", 
      href: "/services/cyber-security",
      description: "Protect your digital assets",
      icon: Shield,
      color: "from-blue-500 to-blue-600"
    },
    { 
      name: "Cloud Services", 
      href: "/services/cloud-services",
      description: "Modern cloud infrastructure",
      icon: Cloud,
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-2xl shadow-lg shadow-blue-100/20' 
        : 'bg-white/80 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 1.25xl:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="flex flex-col">
                <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  BRILLION
                </span>
                <span className="text-[10px] font-medium text-gray-500 -mt-1 tracking-[0.2em]">
                  DIGITAL
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  className={`${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-blue-600 transition-all duration-300 px-4 py-2 text-sm font-medium flex items-center rounded-full hover:bg-blue-50/50 relative group`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Enhanced Dropdown Menu */}
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[320px] md:w-[400px] lg:w-[480px] bg-white/95 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-2xl shadow-blue-200/20 p-4 md:p-6 z-[100] overflow-hidden"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {/* Header */}
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Our Services</h3>
                      <p className="text-sm text-gray-600">Comprehensive digital solutions for your business growth</p>
                    </div>
                    
                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {serviceItems.map((service, index) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="group relative p-3 md:p-4 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 border border-transparent hover:border-blue-100 transition-all duration-300"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {/* Icon */}
                          <div className="flex items-start space-x-3">
                            <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <service.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs md:text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                                {service.name}
                              </h4>
                              <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 hidden md:block">
                                {service.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Hover indicator */}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Link
                        href="/services"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300"
                      >
                        View All Services
                        <ChevronDown className="ml-1 w-4 h-4 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Other Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-blue-600 transition-all duration-300 px-4 py-2 text-sm font-medium rounded-full hover:bg-blue-50/50 relative group`}
                >
                  {item.name}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {/* Services Section */}
            <div className="space-y-1">
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <div className="ml-4 space-y-1">
                {serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Other Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;