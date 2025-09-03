"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  BarChart3, 
  Code, 
  Globe, 
  Shield, 
  Cloud,
  Settings,
  ArrowRight,
  Lightbulb,
  Zap,
  Rocket,
  Lock,
  Loader2
} from "lucide-react";
import { servicesService, type Service } from "@/lib/firebase-services";
import servicesBg from "@/assets/services-bg.jpg";

// Icon mapping for dynamic icon rendering
const iconMapping: Record<string, any> = {
  Brain,
  BarChart3,
  Code,
  Globe,
  Shield,
  Cloud,
  Settings,
  Lightbulb,
  Zap,
  Rocket,
  Lock
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);
      setError(null);
      const servicesData = await servicesService.getAll();
      setServices(servicesData);
    } catch (error) {
      console.error('Error loading services:', error);
      setError('Failed to load services. Using fallback data.');
      
      // Fallback to default services if Firebase fails
      const fallbackServices: Service[] = [
        {
          title: "Digital Advisory",
          description: "Understand, anticipate, and accelerate with confidence.",
          icon: "Lightbulb",
          href: "/services/digital-advisory",
          order: 1
        },
        {
          title: "Data & Analytics", 
          description: "Transform raw data into actionable insights that drive business growth.",
          icon: "BarChart3",
          href: "/services/applied-data-analytics",
          order: 2
        },
        {
          title: "App Development",
          description: "Custom applications built with modern technologies to solve unique challenges.",
          icon: "Zap",
          href: "/services/application-development",
          order: 3
        },
        {
          title: "Digital Platforms",
          description: "Boost growth and productivity using ERP, CRM, and CMS platforms.",
          icon: "Rocket",
          href: "/services/digital-platforms",
          order: 4
        },
        {
          title: "Cyber Security",
          description: "Minimize threats and proactively protect your most valuable assets.",
          icon: "Shield",
          href: "/services/cyber-security",
          order: 5
        },
        {
          title: "Cloud Services",
          description: "Cloud migration and optimization services to accelerate transformation.",
          icon: "Cloud",
          href: "/services/cloud-services",
          order: 6
        },
        {
          title: "Managed IT",
          description: "Reliable IT infrastructure management to keep your business running smoothly.",
          icon: "Settings",
          href: "/services/managed-it-services",
          order: 7
        }
      ];
      setServices(fallbackServices);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
            <p className="text-gray-600">Loading services...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="relative min-h-screen bg-white overflow-hidden">

        {/* Error Message */}
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mx-6 mt-4">
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-full mb-4">
                <Settings className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-700">Our Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black">
                <span className="text-gray-900">Digital Solutions for </span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                  Every Need
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our scalable team of expert advisors, problem solvers, and builders ensure you receive the specific skills and guidance you need to succeed.
              </p>

              <p className="text-sm text-blue-600">
                📊 Loaded {services.length} services from {error ? 'local cache' : 'Firebase database'}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = iconMapping[service.icon] || Settings;
                return (
                  <div key={service.id || index} className="group bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-2">
                    <div className="text-center space-y-6">
                      <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-4">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <Button 
                        asChild
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white font-semibold py-3 rounded-2xl transition-all duration-300 group-hover:scale-105"
                      >
                        <a href={service.href} className="flex items-center justify-center">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                );
              })}
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