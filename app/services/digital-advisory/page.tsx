"use client";

import PageLayout from "@/components/PageLayout";
import { Target, CheckCircle, Users, TrendingUp, Zap, ArrowRight, Search, Palette, Wrench, Rocket, Brain, Settings, Monitor, Lightbulb, BarChart3, Shield, Globe, Database, Code2, Server, Cloud, Container, Link } from "lucide-react";

export default function DigitalAdvisory() {
  const services = [
    {
      icon: TrendingUp,
      title: "Digital Strategy Development",
      description: "Comprehensive digital strategies aligned with business objectives that drive sustainable growth and competitive advantage in the digital marketplace.",
      features: ["Strategic Planning", "Market Analysis", "ROI Optimization", "Digital Roadmapping"]
    },
    {
      icon: Users,
      title: "Technology Assessment & Planning", 
      description: "In-depth evaluation of your technology stack, digital capabilities, and infrastructure to identify opportunities for optimization and growth.",
      features: ["Infrastructure Review", "Gap Analysis", "Optimization Planning", "Technology Roadmap"]
    },
    {
      icon: Zap,
      title: "Change Management Support",
      description: "Expert guidance to navigate organizational change during digital transformation initiatives, ensuring smooth adoption and maximum ROI.",
      features: ["Change Strategy", "Team Training", "User Adoption", "Process Optimization"]
    },
    {
      icon: Target,
      title: "Digital Innovation Consulting",
      description: "Strategic consulting to identify and implement innovative digital solutions that transform business operations and customer experiences.",
      features: ["Innovation Assessment", "Emerging Technologies", "Digital Disruption", "Future-Proofing"]
    }
  ];

  const technologies = [
    { 
      name: "Digital Strategy Tools", 
      category: "Planning",
      icon: Target,
      color: "from-blue-500 to-indigo-500",
      description: "Strategic planning and roadmapping platforms"
    },
    { 
      name: "Analytics & BI Platforms", 
      category: "Intelligence",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      description: "Business intelligence and analytics solutions"
    },
    { 
      name: "Cloud Infrastructure", 
      category: "Technology",
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
      description: "Scalable cloud computing platforms"
    },
    { 
      name: "Process Automation", 
      category: "Efficiency",
      icon: Settings,
      color: "from-blue-500 to-purple-500",
      description: "Workflow automation and optimization tools"
    },
    { 
      name: "Digital Security", 
      category: "Protection",
      icon: Shield,
      color: "from-cyan-500 to-blue-500",
      description: "Cybersecurity and data protection solutions"
    },
    { 
      name: "Collaboration Platforms", 
      category: "Communication",
      icon: Users,
      color: "from-teal-500 to-green-500",
      description: "Team collaboration and communication tools"
    },
    { 
      name: "AI & Machine Learning", 
      category: "Innovation",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      description: "Artificial intelligence and ML solutions"
    },
    { 
      name: "Digital Experience", 
      category: "Customer",
      icon: Monitor,
      color: "from-pink-500 to-rose-500",
      description: "Customer experience and engagement platforms"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive evaluation of your current digital maturity, business objectives, and market position to establish baseline metrics.",
      icon: Search,
      color: "from-blue-500 to-indigo-600",
      features: ["Digital Maturity Assessment", "Business Analysis", "Market Research", "Stakeholder Interviews"]
    },
    {
      step: "02", 
      title: "Strategy & Roadmap Development",
      description: "Creating a comprehensive digital transformation strategy with clear milestones, timelines, and success metrics.",
      icon: Target,
      color: "from-purple-500 to-pink-600",
      features: ["Strategic Planning", "Roadmap Creation", "Priority Setting", "Resource Allocation"]
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Detailed planning and preparation for executing digital transformation initiatives with risk mitigation strategies.",
      icon: Wrench,
      color: "from-green-500 to-teal-600",
      features: ["Project Planning", "Risk Assessment", "Team Preparation", "Technology Selection"]
    },
    {
      step: "04",
      title: "Execution & Optimization",
      description: "Guided implementation with continuous monitoring, optimization, and support to ensure successful digital transformation.",
      icon: Rocket,
      color: "from-emerald-500 to-teal-600",
      features: ["Implementation Support", "Performance Monitoring", "Continuous Optimization", "Success Measurement"]
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative bg-slate-900 h-[80vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Digital Advisory Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Digital <span className="text-[#f97316]">Advisory</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Strategic guidance and expert consulting to accelerate your digital transformation journey. From digital strategy development to implementation support, we help businesses navigate the complex digital landscape and achieve sustainable growth.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300">
                  Get Strategic Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                  View Our Approach
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-10 py-24 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            
            {/* Header Section */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Accelerate Your Digital Transformation With Our <span className="text-[#f97316]">Expert Digital Advisory Services</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We analyze your digital maturity and business objectives to deliver strategic guidance that drives measurable transformation and competitive advantage.
              </p>
            </div>

            {/* Service 1 - Digital Strategy Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 rounded-3xl p-8 lg:p-12">
              <div className="lg:order-2">
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                    alt="Digital Strategy Planning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-[#f97316]">Digital Strategy</span> Development
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Comprehensive digital strategies that align with your business objectives and market dynamics. Our strategic planning approach ensures sustainable growth through data-driven insights, competitive analysis, and future-focused roadmapping that positions your organization for long-term digital success.
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore Strategy Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Service 2 - Technology Assessment */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl p-8 lg:p-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-[#f97316]">Technology Assessment</span> & Planning
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  In-depth evaluation of your technology stack, digital infrastructure, and organizational capabilities. Our comprehensive assessment identifies gaps, optimization opportunities, and strategic technology investments that will drive your digital transformation initiatives and maximize ROI.
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Technology Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div>
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    alt="Technology Assessment Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 3 - Change Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-gradient-to-br from-green-50 via-white to-teal-50 rounded-3xl p-8 lg:p-12">
              <div className="lg:order-2">
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
                    alt="Change Management Training"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-[#f97316]">Change Management</span> Support
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Expert guidance to navigate organizational change during digital transformation initiatives. Our change management approach ensures smooth adoption, minimizes resistance, and maximizes user engagement through strategic communication, training programs, and continuous support.
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn About Change Management
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Service 4 - Digital Innovation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-cyan-50 via-white to-blue-50 rounded-3xl p-8 lg:p-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-[#f97316]">Digital Innovation</span> Consulting
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Strategic consulting to identify and implement innovative digital solutions that transform business operations and customer experiences. We help organizations stay ahead of digital trends, leverage emerging technologies, and create sustainable competitive advantages in rapidly evolving markets.
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore Innovation Consulting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div>
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                    alt="Digital Innovation Workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Technologies Section */}
        <section className="relative z-10 py-24 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900">Digital Transformation </span>
                <span className="text-[#f97316]">Technologies</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage cutting-edge technologies and platforms to drive successful digital transformation initiatives.
              </p>
            </div>
            
            {/* Technologies Grid - 2x4 Layout */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${tech.color} rounded-full transform translate-x-16 -translate-y-16`}></div>
                  </div>
                  
                  <div className="relative">
                    {/* Category & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-semibold text-gray-600 bg-white rounded-full border">
                        {tech.category}
                      </span>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-md`}>
                        <tech.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h4 className="font-bold text-2xl text-gray-900 mb-3 group-hover:text-[#f97316] transition-colors">
                      {tech.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {tech.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <div className="flex items-center text-[#f97316] opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm font-medium">Explore Technology</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>

            {/* Additional Tech Stack Info */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-orange-50 border border-orange-200 rounded-full">
                <Lightbulb className="w-5 h-5 text-orange-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  Plus 40+ digital transformation tools and platforms tailored to your industry needs
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Process */}
        <section className="relative z-10 py-24 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900">Our Advisory </span>
                <span className="text-[#f97316]">Process</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A proven methodology that guides organizations through successful digital transformation with strategic insights and expert support.
              </p>
            </div>
            
            {/* Process Steps - Horizontal Flow Layout */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f97316]/30 to-transparent transform -translate-y-1/2 z-0"></div>
              
              <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
                {process.map((step, index) => (
                  <div 
                    key={index} 
                    className="group relative"
                  >
                    {/* Main Card */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                      
                      {/* Step Number Circle */}
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6 mx-auto relative z-10`}>
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      
                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-gray-600" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#f97316] transition-colors">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
                        {step.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-2">
                        {step.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center text-xs">
                            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2 flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                    </div>
                    
                    {/* Arrow for desktop - except last item */}
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <div className="w-4 h-4 bg-[#f97316] rotate-45 opacity-60"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 mb-20">
          <div className="relative bg-slate-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop" 
                alt="Digital Advisory Team"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-24">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Partner With Leading <span className="text-[#f97316]">Digital Advisory Experts</span> For Your Transformation Journey
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Connect with our digital transformation specialists to accelerate your business growth. Get strategic guidance, technology insights, and implementation support from industry leaders in digital advisory.
                </p>
                <div className="flex justify-center">
                  <button className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg">
                    Schedule Strategic Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}