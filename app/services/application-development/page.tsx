"use client";

import PageLayout from "@/components/PageLayout";
import { Code2, CheckCircle, Smartphone, Globe, Database, Users, Shield, Zap, Clock, Settings, Monitor, Cpu, ArrowRight, Server, Cloud, Container, Brain, Link, Search, Palette, Rocket, Wrench } from "lucide-react";

export default function SoftwareDevelopment() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Native iOS & Android", "React Native", "Flutter", "Progressive Web Apps"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies",
      features: ["React & Next.js", "Node.js Backend", "Responsive Design", "PWA Development"]
    },
    {
      icon: Monitor,
      title: "Desktop Applications",
      description: "Powerful desktop software solutions for Windows, macOS, and Linux",
      features: ["Cross-Platform", "Native Performance", "System Integration", "Modern UI/UX"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Robust database solutions and management systems",
      features: ["Database Design", "Migration Services", "Performance Optimization", "Data Security"]
    },
    {
      icon: Settings,
      title: "Custom Software Solutions",
      description: "Tailored software solutions designed specifically for your business needs",
      features: ["Business Logic", "Workflow Automation", "Integration Solutions", "Scalable Architecture"]
    },
    {
      icon: Shield,
      title: "IT Consulting",
      description: "Strategic technology consulting to guide your digital transformation",
      features: ["Technology Assessment", "Architecture Planning", "Security Consulting", "Digital Strategy"]
    }
  ];

  const technologies = [
    { 
      name: "React & Next.js", 
      category: "Frontend",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      description: "Modern web applications with optimal performance"
    },
    { 
      name: "Node.js & Python", 
      category: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      description: "Scalable server-side solutions"
    },
    { 
      name: "PostgreSQL & MongoDB", 
      category: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      description: "Reliable data storage and management"
    },
    { 
      name: "AWS & Azure", 
      category: "Cloud",
      icon: Cloud,
      color: "from-blue-500 to-sky-500",
      description: "Enterprise cloud infrastructure"
    },
    { 
      name: "Docker & Kubernetes", 
      category: "DevOps",
      icon: Container,
      color: "from-indigo-500 to-purple-500",
      description: "Containerized deployment solutions"
    },
    { 
      name: "React Native & Flutter", 
      category: "Mobile",
      icon: Smartphone,
      color: "from-pink-500 to-rose-500",
      description: "Cross-platform mobile development"
    },
    { 
      name: "AI/ML Integration", 
      category: "Intelligence",
      icon: Brain,
      color: "from-teal-500 to-cyan-500",
      description: "Smart automation and insights"
    },
    { 
      name: "Blockchain", 
      category: "Emerging Tech",
      icon: Link,
      color: "from-amber-500 to-yellow-500",
      description: "Decentralized secure solutions"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Planning & Discovery",
      description: "We analyze your requirements and define project scope, timeline, and deliverables.",
      icon: Search,
      color: "from-blue-500 to-indigo-600",
      features: ["Requirement Analysis", "Feasibility Study", "Project Roadmap", "Budget Planning"]
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Creating user-centric designs and robust system architecture for optimal performance.",
      icon: Palette,
      color: "from-purple-500 to-pink-600",
      features: ["UI/UX Design", "System Architecture", "Database Design", "API Planning"]
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing to ensure quality and reliability.",
      icon: Wrench,
      color: "from-green-500 to-teal-600",
      features: ["Agile Sprints", "Code Reviews", "Unit Testing", "Integration Testing"]
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing maintenance and support services.",
      icon: Rocket,
      color: "from-emerald-500 to-teal-600",
      features: ["Cloud Deployment", "Performance Monitoring", "24/7 Support", "Regular Updates"]
    }
  ];

  const industries = [
    { name: "Finance & Banking", icon: "💳" },
    { name: "Healthcare", icon: "🏥" },
    { name: "E-commerce", icon: "🛒" },
    { name: "Education", icon: "📚" },
    { name: "Logistics", icon: "🚚" },
    { name: "Manufacturing", icon: "🏭" }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative bg-slate-900 h-[80vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Custom Software Development"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Custom <span className="text-[#f97316]">Software</span> Development
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Delivering business-oriented custom software solutions that catalyze digital transformation and growth across Canada. 
                From concept to deployment, we build software that solves real business challenges.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                  View Our Work
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
                Broaden Your Business Horizon With Our <span className="text-[#f97316]">Unmatched Software Development Services</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                As a reputed Canada-based software development service provider, we believe "Client Success = Our Success." Before offering our affordable software development services, we understand client business needs and analyze how our software solution assists in their business growth.
              </p>
            </div>

            {/* Service 1 - Mobile App Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 rounded-3xl p-8 lg:p-12">
              <div className="lg:order-2">
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                    alt="Mobile App Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-[#f97316]">Mobile App</span> Development
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Mobile apps we build well-matched your requirement within your fixed budget and timeline. Being a reliable custom software development company in Canada, we also guide you every step of the development, right from designing the look to building an app with all required functionality. Be it iOS, Android, or cross-platform apps; we can build different types of apps while keeping specific needs and your goals in mind.
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Talk To Our Experts
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Service 2 - Web Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-3xl p-8 lg:p-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-[#f97316]">Web</span> Development
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  As a top software development company in Canada, we have been designing and developing robust web applications for our clients. To build a solution that works for you in the long-term, we bring quality architecture, structured coding, appealing design, and thorough testing to work. Our expertise in trending technologies and advanced frameworks makes it possible to deliver visibility to the solution and offer unmatched web maintenance.
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Talk To Our Experts
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div>
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
                    alt="Web Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 3 - Desktop Application */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl p-8 lg:p-12">
              <div className="lg:order-2">
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
                    alt="Desktop Application Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-[#f97316]">Desktop</span> Application
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Translate your raw business idea into a desktop solution with a trusted enterprise software development company. We build a powerful, stable, and secure desktop application that helps resolve specific business needs. Our team not just transforms ideas, we guide businesses worldwide on how to use desktop applications that can boost business growth. After examining your business objectives, we go with desktop development that works great across different platforms.
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Talk To Our Experts
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Service 4 - Database Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-cyan-50 via-white to-teal-50 rounded-3xl p-8 lg:p-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-[#f97316]">Database Management</span> Software
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With our best-in-class data management solutions, you can access, manage, and process the data more easily. Leverage our affordable software development services to equip your business with the latest technologies. Our database experts implement new versions and introduce ways to handle complex business needs. Our database management solutions range from Oracle, MySQL, SQL Server, etc. Our bespoke database management solution will help streamline your business processes.
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Talk To Our Experts
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div>
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                    alt="Database Management Software"
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
                <span className="text-gray-900">Cutting-Edge </span>
                <span className="text-[#f97316]">Technologies</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage the latest technologies and frameworks to build robust, scalable, and future-proof software solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full mb-3">
                      {tech.category}
                    </span>
                    
                    {/* Title */}
                    <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#f97316] transition-colors">
                      {tech.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                    
                    {/* Hover Arrow */}
                    <div className="mt-4 flex items-center text-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Bottom Border Accent */}
                  <div className={`h-1 bg-gradient-to-r ${tech.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              ))}
            </div>

            {/* Additional Tech Stack Info */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-orange-50 border border-orange-200 rounded-full">
                <Zap className="w-5 h-5 text-orange-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  Plus 50+ more tools and frameworks tailored to your project needs
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="relative z-10 py-24 bg-white overflow-hidden">

          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900">Our Development </span>
                <span className="text-[#f97316]">Process</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A proven methodology that ensures successful project delivery from concept to deployment.
              </p>
            </div>
            
            {/* Process Timeline */}
            <div className="relative">
              {/* Connection Line for Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transform -translate-y-1/2"></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {process.map((step, index) => (
                  <div key={index} className="relative group">
                    {/* Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                      
                      {/* Icon Container */}
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f97316] transition-colors">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-2">
                        {step.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Hover Effect Border */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
                    </div>
                    
                    {/* Connection Dot for Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-orange-500 rounded-full z-10"></div>
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
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2000&auto=format&fit=crop" 
                alt="Software Development Team"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-24">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Collaborate With The Best <span className="text-[#f97316]">Software Development Company Canada</span> For Your Next Project
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Connect with our Canada-based software experts to start the development of your next project. Collaborate with industry leaders in software development to turn your business idea into reality.
                </p>
                <div className="flex justify-center">
                  <button className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg">
                    Schedule A Call
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