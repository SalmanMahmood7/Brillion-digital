"use client";

import PageLayout from "@/components/PageLayout";
import { Cloud, CheckCircle, Server, Shield, Database, ArrowRight, Zap, Monitor, Settings, Users, Globe, Container, Layers, Lock, Cpu, Network, RefreshCw, Search, Palette, Wrench, Rocket } from "lucide-react";

export default function CloudServices() {
  const cloudServices = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration of applications and data to cloud platforms",
      features: ["Zero-Downtime Migration", "Data Transfer", "Application Modernization", "Hybrid Cloud Setup"]
    },
    {
      icon: Shield,
      title: "Cloud Security",
      description: "Comprehensive security solutions for cloud infrastructure",
      features: ["Identity Management", "Encryption", "Compliance Monitoring", "Threat Protection"]
    },
    {
      icon: Monitor,
      title: "Cloud Monitoring",
      description: "24/7 monitoring and optimization of cloud resources",
      features: ["Performance Analytics", "Cost Monitoring", "Auto-scaling", "Alert Management"]
    },
    {
      icon: Database,
      title: "Database as a Service",
      description: "Managed database solutions with high availability",
      features: ["Database Migration", "Backup & Recovery", "Performance Tuning", "Multi-Cloud Support"]
    },
    {
      icon: Container,
      title: "Containerization",
      description: "Docker and Kubernetes deployment and management",
      features: ["Container Orchestration", "Microservices", "CI/CD Integration", "Service Mesh"]
    },
    {
      icon: Network,
      title: "Serverless Computing",
      description: "Event-driven serverless architecture and deployment",
      features: ["Function as a Service", "Event Processing", "Auto-scaling", "Cost Optimization"]
    }
  ];

  const cloudPlatforms = [
    { 
      name: "Amazon Web Services", 
      category: "Public Cloud",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      description: "Enterprise-scale AWS solutions and services"
    },
    { 
      name: "Microsoft Azure", 
      category: "Public Cloud",
      icon: Server,
      color: "from-blue-500 to-indigo-500",
      description: "Azure cloud infrastructure and platform services"
    },
    { 
      name: "Google Cloud", 
      category: "Public Cloud",
      icon: Database,
      color: "from-green-500 to-teal-500",
      description: "GCP data analytics and machine learning"
    },
    { 
      name: "Multi-Cloud Strategy", 
      category: "Hybrid",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      description: "Cross-platform cloud orchestration"
    },
    { 
      name: "Private Cloud", 
      category: "On-Premise",
      icon: Shield,
      color: "from-indigo-500 to-blue-500",
      description: "Secure private cloud infrastructure"
    },
    { 
      name: "Edge Computing", 
      category: "Distributed",
      icon: Layers,
      color: "from-teal-500 to-cyan-500",
      description: "Edge computing and IoT solutions"
    },
    { 
      name: "Kubernetes", 
      category: "Orchestration",
      icon: Container,
      color: "from-blue-500 to-sky-500",
      description: "Container orchestration platforms"
    },
    { 
      name: "DevOps Integration", 
      category: "CI/CD",
      icon: Cpu,
      color: "from-emerald-500 to-green-500",
      description: "Automated deployment pipelines"
    }
  ];

  const cloudProcess = [
    {
      step: "01",
      title: "Assessment & Strategy",
      description: "Comprehensive analysis of current infrastructure and cloud readiness assessment.",
      icon: Search,
      color: "from-blue-500 to-indigo-600",
      features: ["Infrastructure Audit", "Cost Analysis", "Migration Strategy", "Risk Assessment"]
    },
    {
      step: "02", 
      title: "Architecture & Design",
      description: "Design scalable, secure, and cost-effective cloud architecture solutions.",
      icon: Palette,
      color: "from-purple-500 to-pink-600",
      features: ["Cloud Architecture", "Security Design", "Network Planning", "Compliance Framework"]
    },
    {
      step: "03",
      title: "Migration & Implementation",
      description: "Execute cloud migration with minimal disruption and maximum efficiency.",
      icon: Wrench,
      color: "from-green-500 to-teal-600",
      features: ["Phased Migration", "Data Transfer", "Application Testing", "Performance Validation"]
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and support for cloud infrastructure.",
      icon: Rocket,
      color: "from-emerald-500 to-teal-600",
      features: ["Performance Tuning", "Cost Optimization", "24/7 Support", "Regular Updates"]
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
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Cloud Services Infrastructure"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Enterprise <span className="text-[#f97316]">Cloud</span> Services
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business with scalable, secure, and cost-effective cloud solutions. From migration to optimization, 
                we deliver cloud infrastructure that drives innovation and growth across Canada.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300">
                  Start Cloud Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                  Cloud Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Services Overview Section - New Design */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            
            {/* Header Section */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business With <span className="text-[#f97316]">Enterprise Cloud Solutions</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Leverage our comprehensive cloud services to accelerate innovation, reduce costs, and scale your business infrastructure with confidence.
              </p>
            </div>

            {/* Services Grid - Card Based Design */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              {/* Cloud Migration Card */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                    alt="Cloud Migration Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                        <Cloud className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Cloud Migration</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Seamless Cloud Transformation</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Migrate your applications and infrastructure to AWS, Azure, or Google Cloud with zero downtime. Our proven migration methodology ensures smooth transition while optimizing for performance and cost.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Comprehensive migration assessment & planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Zero-downtime migration strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Post-migration optimization & support</span>
                    </li>
                  </ul>
                  <button className="inline-flex items-center text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors group/btn">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Cloud Security Card */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                    alt="Cloud Security Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Cloud Security</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Enterprise-Grade Protection</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Implement comprehensive security measures to protect your cloud infrastructure. Our multi-layered security approach ensures compliance and protects against evolving threats.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Identity & access management (IAM)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Data encryption & compliance monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">24/7 threat detection & response</span>
                    </li>
                  </ul>
                  <button className="inline-flex items-center text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors group/btn">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Cloud Monitoring Card */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    alt="Cloud Monitoring Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                        <Monitor className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Cloud Monitoring</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Analytics & Optimization</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Transform cloud operations with AI-powered monitoring and analytics. Maximize performance while minimizing costs through intelligent resource optimization.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Real-time performance monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Automated cost optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Predictive analytics & insights</span>
                    </li>
                  </ul>
                  <button className="inline-flex items-center text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors group/btn">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* DevOps & Containerization Card */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80"
                    alt="DevOps Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                        <Container className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">DevOps & Containers</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Accelerate Development & Deployment</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Implement modern DevOps practices with containerization and CI/CD pipelines. Achieve faster deployments and improved scalability with Kubernetes and Docker.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Kubernetes orchestration & management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Automated CI/CD pipelines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Microservices architecture</span>
                    </li>
                  </ul>
                  <button className="inline-flex items-center text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors group/btn">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Cloud Platforms & Technologies Section */}
        <section className="relative z-10 py-24 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900">Leading Cloud </span>
                <span className="text-[#f97316]">Platforms & Technologies</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage industry-leading cloud platforms and cutting-edge technologies to build robust, scalable, and future-proof cloud solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudPlatforms.map((platform, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg`}>
                      <platform.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full mb-3">
                      {platform.category}
                    </span>
                    
                    {/* Title */}
                    <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#f97316] transition-colors">
                      {platform.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {platform.description}
                    </p>
                    
                    {/* Hover Arrow */}
                    <div className="mt-4 flex items-center text-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Bottom Border Accent */}
                  <div className={`h-1 bg-gradient-to-r ${platform.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              ))}
            </div>

            {/* Additional Tech Stack Info */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-orange-50 border border-orange-200 rounded-full">
                <Zap className="w-5 h-5 text-orange-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  Plus 30+ more cloud tools and services tailored to your project needs
                </span>
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
                alt="Cloud Infrastructure Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-24">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Partner With The Leading <span className="text-[#f97316]">Cloud Services Provider Canada</span> For Your Next Project
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Connect with our Canada-based cloud experts to accelerate your digital transformation. Partner with industry leaders in cloud services to scale your business infrastructure and drive innovation.
                </p>
                <div className="flex justify-center">
                  <button className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg">
                    Schedule A Cloud Consultation
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