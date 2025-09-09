"use client";

import PageLayout from "@/components/PageLayout";
import { Database, CheckCircle, BarChart3, Brain, TrendingUp, ArrowRight, Search, Palette, Wrench, Rocket, Target, Eye, Zap, Users, Shield, Monitor, LineChart, PieChart, Activity, Settings, Code2, Server, Cloud, Container, Link, Cpu } from "lucide-react";

export default function AppliedDataAnalytics() {
  const services = [
    {
      icon: BarChart3,
      title: "Advanced Analytics Solutions",
      description: "Comprehensive data analytics platforms with real-time insights and predictive modeling that transform raw data into actionable business intelligence.",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reporting", "Data Visualization"]
    },
    {
      icon: Brain,
      title: "Machine Learning Implementation", 
      description: "End-to-end ML solutions to automate processes, enhance customer experiences, and drive intelligent decision-making across your organization.",
      features: ["Algorithm Development", "Model Training", "Performance Optimization", "AI Integration"]
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence Systems",
      description: "Consolidated dashboards and KPI monitoring systems that provide comprehensive insights for informed strategic decision making.",
      features: ["Data Integration", "Interactive Dashboards", "KPI Monitoring", "Executive Reporting"]
    },
    {
      icon: Database,
      title: "Data Engineering & ETL",
      description: "Robust data pipeline solutions that extract, transform, and load data efficiently from multiple sources into unified systems.",
      features: ["Data Pipeline Design", "ETL Processes", "Data Warehousing", "Real-time Processing"]
    }
  ];

  const technologies = [
    { 
      name: "Python & R", 
      category: "Analytics",
      icon: Code2,
      color: "from-blue-500 to-indigo-500",
      description: "Advanced statistical computing and data analysis"
    },
    { 
      name: "TensorFlow & PyTorch", 
      category: "Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      description: "Deep learning and neural network frameworks"
    },
    { 
      name: "Apache Spark & Kafka", 
      category: "Big Data",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      description: "Large-scale data processing and streaming"
    },
    { 
      name: "Tableau & Power BI", 
      category: "Visualization",
      icon: BarChart3,
      color: "from-emerald-500 to-teal-500",
      description: "Interactive dashboards and data visualization"
    },
    { 
      name: "AWS & Azure ML", 
      category: "Cloud Analytics",
      icon: Cloud,
      color: "from-cyan-500 to-blue-500",
      description: "Cloud-based machine learning platforms"
    },
    { 
      name: "Elasticsearch & MongoDB", 
      category: "Data Storage",
      icon: Server,
      color: "from-teal-500 to-green-500",
      description: "NoSQL databases and search engines"
    },
    { 
      name: "Docker & Kubernetes", 
      category: "MLOps",
      icon: Container,
      color: "from-indigo-500 to-purple-500",
      description: "Containerized ML model deployment"
    },
    { 
      name: "Jupyter & Apache Airflow", 
      category: "Development",
      icon: Settings,
      color: "from-pink-500 to-rose-500",
      description: "Data science notebooks and workflow orchestration"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Data Discovery & Assessment",
      description: "We analyze your data sources, quality, and business objectives to create a comprehensive analytics strategy.",
      icon: Search,
      color: "from-blue-500 to-indigo-600",
      features: ["Data Audit", "Business Requirements", "Feasibility Analysis", "ROI Planning"]
    },
    {
      step: "02", 
      title: "Data Engineering & Preparation",
      description: "Building robust data pipelines and preparing clean, structured datasets for advanced analytics and modeling.",
      icon: Settings,
      color: "from-purple-500 to-pink-600",
      features: ["Data Cleaning", "ETL Development", "Data Integration", "Quality Assurance"]
    },
    {
      step: "03",
      title: "Analytics & Model Development",
      description: "Developing sophisticated analytics models and machine learning algorithms tailored to your business needs.",
      icon: Brain,
      color: "from-green-500 to-teal-600",
      features: ["Statistical Modeling", "ML Algorithms", "Model Training", "Validation Testing"]
    },
    {
      step: "04",
      title: "Deployment & Optimization",
      description: "Deploying analytics solutions with continuous monitoring and optimization for maximum business impact.",
      icon: Rocket,
      color: "from-emerald-500 to-teal-600",
      features: ["Model Deployment", "Performance Monitoring", "Continuous Learning", "Scalable Infrastructure"]
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Data & Analytics Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Applied <span className="text-[#f97316]">Data & Analytics</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform raw data into actionable intelligence that drives business growth through advanced analytics, machine learning, and AI-powered insights. From predictive modeling to real-time dashboards, we unlock the full potential of your data.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300">
                  Get Data Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                  View Analytics Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-10 py-24 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            
            {/* Header Section */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business With Our <span className="text-[#f97316]">Advanced Data Analytics Services</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                As a leading data analytics service provider, we believe "Your Data Success = Our Success." We analyze your business requirements and deliver comprehensive analytics solutions that drive measurable growth and competitive advantage.
              </p>
            </div>

            {/* Services Section - Side by Side Layout */}
            <div className="space-y-16">
              
              {/* Service 1 - Advanced Analytics Solutions */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 mr-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <BarChart3 className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      <span className="text-[#f97316]">Advanced Analytics</span> Solutions
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Transform raw data into powerful business insights with real-time dashboards, predictive modeling, and custom reporting. Our advanced analytics solutions help you make data-driven decisions that accelerate growth.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Real-time Dashboards</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Predictive Analytics</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Custom Reporting</span>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                      alt="Advanced Analytics Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Service 2 - Machine Learning Implementation */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"
                      alt="Machine Learning Models"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 mr-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      <span className="text-[#f97316]">Machine Learning</span> Implementation
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    End-to-end machine learning solutions that automate complex processes and enhance customer experiences through intelligent algorithms. Our ML experts develop custom models that learn and adapt to your business needs.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Algorithm Development</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Model Training</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">AI Integration</span>
                  </div>
                </div>
              </div>

              {/* Service 3 - Business Intelligence Systems */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 mr-4 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      <span className="text-[#f97316]">Business Intelligence</span> Systems
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Comprehensive business intelligence systems with consolidated dashboards, KPI monitoring, and executive reporting that provide 360-degree visibility into your business performance.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Data Integration</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">KPI Monitoring</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Executive Reporting</span>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                      alt="Business Intelligence Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Service 4 - Data Engineering & ETL */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80"
                      alt="Data Engineering Pipeline"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 mr-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Database className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      <span className="text-[#f97316]">Data Engineering</span> & ETL Solutions
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Robust data engineering solutions that design efficient pipelines, extract data from multiple sources, transform it according to business rules, and load it into unified systems.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">Data Pipelines</span>
                    <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">ETL Processes</span>
                    <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">Data Warehousing</span>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        </section>


        {/* Technologies Section */}
        <section className="relative z-10 py-24 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900">Advanced Analytics </span>
                <span className="text-[#f97316]">Technologies</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage cutting-edge technologies and frameworks to build robust, scalable, and intelligent analytics solutions.
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
                  Plus 30+ specialized data science and analytics tools tailored to your project needs
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Process */}
        <section className="relative z-10 py-24 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900">Our Analytics </span>
                <span className="text-[#f97316]">Process</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A proven methodology that transforms raw data into actionable insights through systematic analysis and intelligent processing.
              </p>
            </div>
            
            {/* Process Steps - Vertical Timeline */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>
                
                <div className="space-y-12">
                  {process.map((step, index) => (
                    <div key={index} className="relative flex items-start">
                      {/* Step Number Circle */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg z-10`}>
                        {step.step}
                      </div>
                      
                      {/* Content */}
                      <div className="ml-8 flex-1">
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center mb-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mr-4`}>
                              <step.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {step.description}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-3">
                            {step.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" 
                alt="Data Analytics Team"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-24">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Transform Your Business With <span className="text-[#f97316]">Advanced Data Analytics Solutions</span>
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Partner with our data analytics experts to unlock the full potential of your data. From predictive modeling to real-time insights, we help you make data-driven decisions that accelerate growth and competitive advantage.
                </p>
                <div className="flex justify-center">
                  <button className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg">
                    Start Your Analytics Journey
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