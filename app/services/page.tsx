"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import AuthButton from "@/components/auth/AuthButton";
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
      // Temporarily force fallback to ensure new services show
      throw new Error('Using fallback services');
      const servicesData = await servicesService.getAll();
      setServices(servicesData);
    } catch (error) {
      console.error('Error loading services:', error);
      setError(null);
      
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
          icon: "Settings",
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
        },
        {
          title: "Dynamics 365 and Microsoft Solutions",
          description: "Leverage Microsoft's ecosystem to streamline operations and boost productivity.",
          icon: "Globe",
          href: "/services/dynamics-365-microsoft",
          order: 8
        },
        {
          title: "Artificial Intelligence and Smart Solutions",
          description: "Harness AI to automate processes and unlock intelligent insights.",
          icon: "Brain",
          href: "/services/ai-smart-solutions",
          order: 9
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
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative bg-slate-900 h-[70vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Services Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Our <span className="text-orange-500">Services</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our scalable team of expert advisors, problem solvers, and builders ensure you receive the specific skills and guidance you need to succeed.
              </p>
              
              {/* Error Message */}
              {error && (
                <div className="bg-yellow-50/10 border border-yellow-500/30 text-yellow-300 px-4 py-3 rounded-lg mx-auto max-w-lg">
                  <p className="text-sm">{error}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = iconMapping[service.icon] || Settings;
                return (
                  <div key={service.id || index} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                    <div className="space-y-6">
                      <div className={`inline-flex p-4 rounded-xl shadow-lg ${
                        index % 2 === 0 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                          : 'bg-gradient-to-r from-[#f97316] to-[#ea580c]'
                      }`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 font-['Poppins',sans-serif]">
                        {service.title}
                      </h3>
                      <p className="text-blue-700 leading-relaxed font-['Inter',sans-serif] min-h-[80px]">
                        {service.description}
                      </p>
                      <AuthButton 
                        href={service.href}
                        requireAuth={service.title.includes('AI') || service.title.includes('Cyber') || service.title.includes('Smart')}
                        className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-['Poppins',sans-serif] flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                      </AuthButton>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Poppins',sans-serif]">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-['Inter',sans-serif]">
              Let's discuss how our services can help you achieve your digital goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AuthButton 
                href="/contact"
                requireAuth={true}
                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 font-['Poppins',sans-serif]"
              >
                Get Started
              </AuthButton>
              <Button 
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 font-['Poppins',sans-serif]"
              >
                <a href="/work">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </a>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}