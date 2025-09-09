"use client"

import PageLayout from "@/components/PageLayout";
import { Users, Heart, Award, Target, Sparkles, ArrowRight, CheckCircle, User, Code, Palette, Shield, Rocket, BarChart3, Layers, Settings, Monitor } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We're passionate about creating digital experiences that make a real difference."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We work as an extension of your team."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We never settle for good enough. Excellence is our standard."
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "Every decision we make is focused on delivering measurable results."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      icon: User,
      bio: "15+ years of digital transformation experience"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      icon: Code,
      bio: "Former Google engineer, AI and cloud expert"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      icon: Palette,
      bio: "Award-winning UX designer and creative strategist"
    },
    {
      name: "David Kim",
      role: "Security Lead",
      icon: Shield,
      bio: "Cybersecurity specialist with enterprise experience"
    }
  ];

  const milestones = [
    { year: "2019", title: "Company Founded", desc: "Started with a vision to transform businesses" },
    { year: "2020", title: "First 100 Clients", desc: "Reached our first major milestone" },
    { year: "2022", title: "Global Expansion", desc: "Expanded operations internationally" },
    { year: "2024", title: "500+ Projects", desc: "Delivered over 500 successful projects" }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative bg-slate-900 h-[70vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="About Us Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                About <span className="text-[#f97316]">Us</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                End-to-end digital solutions for businesses, enabling companies to deliver seamless experiences across modern platforms and devices.
              </p>
              
            </div>
          </div>
        </section>


        {/* Our Mission Section */}
        <section className="relative z-10 py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900">Our </span>
                <span className="text-orange-500">Mission</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, enhance efficiency, and create meaningful connections with customers. We're committed to turning your digital vision into reality.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-orange-100 rounded-xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
                  <p className="text-gray-600">Cutting-edge solutions for modern challenges</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-orange-100 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Partnership</h3>
                  <p className="text-gray-600">Building lasting relationships with our clients</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-orange-100 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Excellence</h3>
                  <p className="text-gray-600">Delivering exceptional results every time</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT Consultation Process Workflow */}
        <section className="relative py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Our Information Technology (IT) Consultation </span>
                <span className="text-orange-500">Process Workflow</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                For more than 11 years, our information technology consultation team has been assisting clients in different business verticals to speed up the digital transformation process. We follow a four-step information technology (IT) consultation process to provide maximum benefits quickly.
              </p>
            </div>

            {/* Timeline Process */}
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 transform -translate-x-1/2 hidden md:block"></div>
              
              {/* Process Steps */}
              <div className="space-y-12">
                {/* Step 1: Analyze */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Left Content (Desktop) */}
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1">
                      <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl shadow-sm border border-orange-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Analyze</h3>
                        <p className="text-gray-700">
                          We analyze business IT needs, key pain areas, digitalization goals, and objectives to understand your current technology landscape.
                        </p>
                      </div>
                    </div>
                    
                    {/* Center Icon */}
                    <div className="absolute md:relative left-8 md:left-auto order-1 md:order-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <BarChart3 className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-orange-600">1</span>
                      </div>
                    </div>
                    
                    {/* Right Spacer (Desktop) */}
                    <div className="hidden md:block md:w-1/2 md:pl-8 order-3"></div>
                  </div>
                </div>

                {/* Step 2: Strategize */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Left Spacer (Desktop) */}
                    <div className="hidden md:block md:w-1/2 md:pr-8 order-1"></div>
                    
                    {/* Center Icon */}
                    <div className="absolute md:relative left-8 md:left-auto order-1 md:order-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <Layers className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-blue-600">2</span>
                      </div>
                    </div>
                    
                    {/* Right Content (Desktop) */}
                    <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0 order-2 md:order-3">
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm border border-blue-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategize</h3>
                        <p className="text-gray-700">
                          We identify areas for improvement and strategize comprehensive solutions to achieve your desired digital transformation goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Implement */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Left Content (Desktop) */}
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1">
                      <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-sm border border-green-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Implement</h3>
                        <p className="text-gray-700">
                          We implement the solutions with precision and ensure seamless integration with your existing IT infrastructure and workflows.
                        </p>
                      </div>
                    </div>
                    
                    {/* Center Icon */}
                    <div className="absolute md:relative left-8 md:left-auto order-1 md:order-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <Settings className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-green-600">3</span>
                      </div>
                    </div>
                    
                    {/* Right Spacer (Desktop) */}
                    <div className="hidden md:block md:w-1/2 md:pl-8 order-3"></div>
                  </div>
                </div>

                {/* Step 4: Monitor */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Left Spacer (Desktop) */}
                    <div className="hidden md:block md:w-1/2 md:pr-8 order-1"></div>
                    
                    {/* Center Icon */}
                    <div className="absolute md:relative left-8 md:left-auto order-1 md:order-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <Monitor className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-purple-600">4</span>
                      </div>
                    </div>
                    
                    {/* Right Content (Desktop) */}
                    <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0 order-2 md:order-3">
                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm border border-purple-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Monitor</h3>
                        <p className="text-gray-700">
                          We continuously monitor the performance of IT solutions and make proactive adjustments to improve efficiency and ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative z-10 mb-20">
          <div className="relative bg-slate-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2000&auto=format&fit=crop" 
                alt="Business Transformation Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-24">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Let our experienced IT consultation team guide you through your digital transformation journey.
                </p>
                <div className="flex justify-center">
                  <button className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg">
                    Start Your Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="relative z-10 py-20 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900">Our </span>
                <span className="text-orange-500">Partners</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We collaborate with industry leaders to deliver exceptional value to our clients.
              </p>
              
              <div className="flex justify-center pt-12">
                {/* Amazon Logo */}
                <div className="flex items-center justify-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <img 
                    src="/images/amazon-logo.png" 
                    alt="Amazon Partner"
                    className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
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