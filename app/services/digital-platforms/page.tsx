"use client";

import PageLayout from "@/components/PageLayout";
import { Layers, CheckCircle, Database, Users, Settings, ArrowRight, Plus, Minus, Zap, TrendingUp, Target, Shield } from "lucide-react";
import { useState } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";

export default function DigitalPlatforms() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const servicesData = {
    erpImplementation: {
      title: "ERP System Implementation",
      description: "Streamline your entire business operations with integrated ERP solutions",
      fullDescription: "Streamline your entire business operations with integrated ERP solutions that unify all processes into a single, powerful platform. Our ERP implementations transform how your organization operates by connecting departments, automating workflows, and providing real-time visibility across all business functions.",
      features: [
        {
          title: "End-to-end Process Integration",
          description: "Connect all business processes from finance to supply chain in one system",
          icon: "Database"
        },
        {
          title: "Custom Workflow Automation",
          description: "Automate repetitive tasks and streamline approval processes",
          icon: "Settings"
        },
        {
          title: "Real-time Business Analytics",
          description: "Access real-time dashboards and reports for data-driven decisions",
          icon: "BarChart"
        }
      ],
      benefits: [
        {
          title: "Operational Efficiency",
          description: "Reduce manual work and streamline processes across departments",
          metric: "40% efficiency improvement"
        },
        {
          title: "Data Accuracy",
          description: "Eliminate data silos and ensure single source of truth",
          metric: "95% data accuracy"
        }
      ],
      caseStudy: {
        client: "Global Manufacturing Corp",
        challenge: "Disconnected systems across multiple departments causing inefficiencies",
        solution: "Implemented SAP ERP with custom modules for manufacturing and supply chain",
        result: "Reduced operational costs by 30% and improved delivery times by 45%"
      }
    },
    crmDevelopment: {
      title: "CRM Platform Development",
      description: "Build lasting customer relationships with intelligent CRM platforms",
      fullDescription: "Build lasting customer relationships with intelligent CRM platforms that drive engagement, sales, and customer satisfaction. Our custom CRM solutions provide a 360-degree view of your customers while automating sales processes and personalizing customer interactions at scale.",
      features: [
        {
          title: "360° Customer View",
          description: "Complete customer history, interactions, and preferences in one place",
          icon: "Users"
        },
        {
          title: "Sales Pipeline Automation",
          description: "Automate lead nurturing and sales process management",
          icon: "TrendingUp"
        },
        {
          title: "Advanced Lead Scoring",
          description: "AI-powered lead scoring and customer segmentation",
          icon: "Target"
        }
      ],
      benefits: [
        {
          title: "Sales Growth",
          description: "Increase sales conversion rates through better lead management",
          metric: "35% sales increase"
        },
        {
          title: "Customer Retention",
          description: "Improve customer satisfaction and retention rates",
          metric: "25% better retention"
        }
      ],
      caseStudy: {
        client: "Tech Solutions Inc",
        challenge: "Poor lead management and customer data scattered across systems",
        solution: "Built custom CRM with AI-powered lead scoring and automated workflows",
        result: "Increased sales by 40% and improved customer satisfaction scores by 60%"
      }
    },
    cmsSolutions: {
      title: "Content Management Solutions",
      description: "Empower your team with modern CMS platforms for seamless content management",
      fullDescription: "Empower your team with modern CMS platforms for seamless content creation, management, and multi-channel delivery. Our CMS solutions feature headless architecture, AI-powered personalization, and omnichannel publishing capabilities to deliver consistent experiences across all touchpoints.",
      features: [
        {
          title: "Headless CMS Architecture",
          description: "Flexible API-first approach for multi-channel content delivery",
          icon: "Layers"
        },
        {
          title: "Omnichannel Publishing",
          description: "Publish content across web, mobile, and social platforms simultaneously",
          icon: "Globe"
        },
        {
          title: "AI-Powered Personalization",
          description: "Deliver personalized content based on user behavior and preferences",
          icon: "Brain"
        }
      ],
      benefits: [
        {
          title: "Content Velocity",
          description: "Faster content creation and publishing workflows",
          metric: "50% faster publishing"
        },
        {
          title: "User Engagement",
          description: "Higher engagement through personalized content experiences",
          metric: "30% engagement boost"
        }
      ],
      caseStudy: {
        client: "Digital Media Group",
        challenge: "Slow content publishing process and inconsistent brand experience",
        solution: "Implemented headless CMS with AI personalization and automated workflows",
        result: "Reduced content publishing time by 60% and increased user engagement by 45%"
      }
    }
  };

  function handleLearnMore(serviceKey) {
    setSelectedService(servicesData[serviceKey]);
    setShowModal(true);
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative bg-slate-900 h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img 
              src="/digital-platforms-hero-bg-new.jpg" 
              alt="Digital Platforms Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Digital <span className="text-[#f97316]">Platforms</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Boost growth and productivity using ERP, CRM, and CMS platforms tailored to your business needs.
              </p>
              
            </div>
          </div>
        </section>

        {/* Combined Section - Services, Competitive Advantage, Platform Benefits, FAQ */}
        <section className="relative z-10 py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
          {/* Background Elements for entire combined section */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-900/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#f97316]/3 rounded-full blur-xl"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
            
            {/* Platform Solutions */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-blue-900">Our Platform</span> <span className="text-[#f97316]">Solutions</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business operations with enterprise-grade digital platforms tailored to your needs
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-24">
              
              {/* ERP System Card */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="/digital-platforms-erp.jpg" 
                    alt="ERP System Implementation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-blue-900">ERP System Implementation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Streamline your entire business operations with integrated ERP solutions that unify all processes into a single, powerful platform.
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700">End-to-end Process Integration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700">Custom Workflow Automation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700">Real-time Business Analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700">Multi-department Collaboration</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      onClick={() => handleLearnMore('erpImplementation')}
                      className="text-blue-600 font-semibold flex items-center group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CRM Platform Card */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="/digital-platforms-crm.jpg" 
                    alt="CRM Platform Development"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-blue-900">CRM Platform Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Build lasting customer relationships with intelligent CRM platforms that drive engagement, sales, and customer satisfaction.
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">360° Customer View</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">Sales Pipeline Automation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">Advanced Lead Scoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">Customer Journey Mapping</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      onClick={() => handleLearnMore('crmDevelopment')}
                      className="text-green-600 font-semibold flex items-center group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CMS Solutions Card */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="/digital-platforms-cms.jpg" 
                    alt="Content Management Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-blue-900">Content Management Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Empower your team with modern CMS platforms for seamless content creation, management, and multi-channel delivery.
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="text-sm text-gray-700">Headless CMS Architecture</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="text-sm text-gray-700">Omnichannel Publishing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="text-sm text-gray-700">AI-Powered Personalization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="text-sm text-gray-700">Version Control & Workflows</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      onClick={() => handleLearnMore('cmsSolutions')}
                      className="text-purple-600 font-semibold flex items-center group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
        
            {/* Competitive Advantage Section */}
            <div className="py-24">
              <div className="grid lg:grid-cols-5 gap-16 items-start mb-12">
                
                {/* Left Side - Larger Image */}
                <div className="lg:col-span-2">
                  <div className="sticky top-8">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <img 
                        src="/digital-platforms-consulting.jpg" 
                        alt="Strategic Digital Platform Consulting"
                        className="w-full h-[600px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="text-white">
                          <h3 className="text-2xl font-bold mb-2">Your Success Partners</h3>
                          <p className="text-white/90 text-lg">Certified experts driving your competitive advantage</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="lg:col-span-3 space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6">
                      Navigate Your Growth with <span className="text-[#f97316]">Strategic Platform Solutions</span>
                    </h2>
                    
                    <div className="w-24 h-1 bg-[#f97316] rounded-full mb-8"></div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      In today's accelerated environment you need something that gives you a <strong>definitive competitive advantage</strong> to outpace your competitors.
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Managing your organization effectively and securing stronger customer loyalty means having the right platforms and experiences in place to support your strategy and operations.
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      Our team of certified experts help you navigate this uncharted growth opportunity, acting as your <strong>advisors, architects, and implementation specialists</strong>. Because we don't just source and tailor your platforms, we elevate and optimize them to maximize your productivity.
                    </p>
                    
                    <div className="bg-orange-50 border-l-4 border-[#f97316] p-6 rounded-r-lg mb-8">
                      <p className="text-lg text-gray-700 italic">
                        "From designing the experience and strategy that your customers want, to being supported by the right insights, tools, and platforms, our team has a single focus – <strong className="text-[#f97316]">your success</strong>."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Width Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-7 h-7 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">Expert Advisory</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Certified specialists guide your digital transformation journey</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <Settings className="w-7 h-7 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">Optimized Solutions</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Elevate and optimize platforms for maximum productivity</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Layers className="w-7 h-7 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">Strategic Design</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Platform architecture aligned with your business goals</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                      <CheckCircle className="w-7 h-7 text-orange-600" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">Success-Focused</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Customer-centric approach for measurable results</p>
                  </div>
                </div>
              </div>

            </div>
        
            {/* Platform Benefits Section */}
            <div className="py-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-blue-900">Platform</span>{" "}
                  <span className="text-[#f97316]">Benefits</span>
                </h2>
                <p className="text-xl text-blue-900 max-w-3xl mx-auto leading-relaxed">
                  Discover how our digital platform solutions drive business growth and operational excellence
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: "Faster Time to Market",
                    description: "Accelerate your product launch by 40-60% with our agile development methodology, rapid prototyping, and efficient deployment processes.",
                    icon: Zap,
                    color: "text-yellow-600"
                  },
                  {
                    title: "Scalable Architecture",
                    description: "Build platforms that grow with your business using microservices, cloud-native design, and modern frameworks that handle millions of users.",
                    icon: TrendingUp,
                    color: "text-green-600"
                  },
                  {
                    title: "Cost-Effective Solutions",
                    description: "Reduce development costs by 30-50% through reusable components, cross-platform development, and automated testing and deployment.",
                    icon: Target,
                    color: "text-blue-600"
                  },
                  {
                    title: "Enhanced User Experience",
                    description: "Increase user engagement by 65% with intuitive interfaces, responsive design, and performance optimization for all devices.",
                    icon: Users,
                    color: "text-purple-600"
                  },
                  {
                    title: "Security & Compliance",
                    description: "Enterprise-grade security with encryption, secure authentication, data protection, and compliance with industry standards.",
                    icon: Shield,
                    color: "text-indigo-600"
                  },
                  {
                    title: "24/7 Support & Maintenance",
                    description: "Continuous monitoring, regular updates, bug fixes, and technical support to ensure optimal platform performance and reliability.",
                    icon: Settings,
                    color: "text-orange-600"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-[#f97316] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
        
            {/* FAQ Section */}
            <div className="py-16 sm:py-20 lg:py-24">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  <span className="text-blue-900">Frequently Asked</span>{" "}
                  <span className="text-[#f97316]">Questions</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  Common questions about digital platform development and implementation
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 lg:mb-16">
                {[
                  {
                    question: "What types of digital platforms do you develop?",
                    answer: "We develop a wide range of digital platforms including e-commerce platforms, customer portals, partner platforms, internal business platforms, API platforms, mobile app backends, and integration platforms. Each solution is custom-built to meet your specific business requirements and scalability needs."
                  },
                  {
                    question: "How long does it take to build a digital platform?",
                    answer: "Development timelines vary based on complexity and features. Simple platforms can be delivered in 12-16 weeks, while complex enterprise platforms may take 24-36 weeks. We use agile methodology with regular deliverables and can often launch MVP versions in 8-12 weeks."
                  },
                  {
                    question: "Can you integrate our platform with existing systems?",
                    answer: "Yes, we specialize in system integration and can connect your digital platform with existing CRM, ERP, databases, payment systems, and third-party services through APIs, webhooks, and custom integration solutions. We ensure seamless data flow and maintain data integrity."
                  },
                  {
                    question: "What technologies do you use for platform development?",
                    answer: "We use modern, scalable technologies including React, Angular, Vue.js for frontend; Node.js, Python, .NET, Java for backend; cloud platforms like AWS, Azure, Google Cloud; and databases like PostgreSQL, MongoDB, Redis. Technology selection is based on your specific requirements and future growth plans."
                  },
                  {
                    question: "How do you ensure platform security and compliance?",
                    answer: "Security is built into every layer of our platforms with features like encryption at rest and in transit, secure authentication, role-based access controls, API security, and regular security audits. We ensure compliance with standards like GDPR, HIPAA, PCI DSS, and SOC 2 based on your industry requirements."
                  },
                  {
                    question: "Do you provide ongoing platform maintenance and support?",
                    answer: "Yes, we offer comprehensive post-launch support including hosting, monitoring, security updates, feature enhancements, performance optimization, and technical support. Our support packages are flexible and can include 24/7 monitoring, regular backups, and priority support based on your needs."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#f97316]/20 focus:ring-offset-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 group-hover:text-[#f97316] transition-colors duration-300 pr-4 leading-tight">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 ml-2">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#f97316] to-orange-500 flex items-center justify-center transition-transform duration-300 ${
                            openFAQ === index ? 'rotate-180' : 'rotate-0'
                          }`}>
                            {openFAQ === index ? (
                              <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            ) : (
                              <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 mb-20">
          <div className="relative bg-slate-800 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/digital-platforms-cta-bg.jpg" 
                alt="Digital Platform Solutions"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-24">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Partner With Leading <span className="text-[#f97316]">Digital Platform Experts</span> For Your Transformation Journey
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Connect with our digital platform specialists to accelerate your business growth. Get strategic guidance, technology insights, and implementation support from industry leaders in digital platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-[#f97316] hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                    Download Our Guide
                  </a>
                  <a href="/work" className="bg-transparent border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                    See Case Studies
                  </a>
                  <a href="/contact" className="bg-transparent border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Detail Modal */}
        {selectedService && (
          <ServiceDetailModal
            isOpen={showModal}
            onClose={() => {
              setShowModal(false);
              setSelectedService(null);
            }}
            service={selectedService}
          />
        )}

      </div>
    </PageLayout>
  );
}