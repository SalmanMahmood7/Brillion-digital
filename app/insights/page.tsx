"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Shield, Database, Cloud, Cpu, Server, Sparkles } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      title: "How to get your whole team using Microsoft 365",
      excerpt: "Discover strategies to drive adoption and maximize the value of your Microsoft 365 investment across your entire organization.",
      category: "Digital Transformation",
      author: "BRILLION Digital Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "The Future of Cloud Security in 2024",
      excerpt: "Explore the latest trends and best practices in cloud security to protect your digital assets in an evolving threat landscape.",
      category: "Cybersecurity",
      author: "Security Team",
      date: "March 12, 2024",
      readTime: "7 min read",
      icon: Shield,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "AI-Powered Analytics: Transforming Business Intelligence",
      excerpt: "Learn how artificial intelligence is revolutionizing data analytics and providing unprecedented insights for business growth.",
      category: "Data & Analytics",
      author: "AI Research Team",
      date: "March 8, 2024",
      readTime: "6 min read",
      icon: Database,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Cloud Migration Best Practices for Enterprise",
      excerpt: "A comprehensive guide to successfully migrating your enterprise applications to the cloud with minimal downtime.",
      category: "Cloud Services",
      author: "Cloud Architects",
      date: "March 5, 2024",
      readTime: "8 min read",
      icon: Cloud,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Building Scalable Web Applications with Next.js",
      excerpt: "Deep dive into modern web development practices and how Next.js can help you build performant, scalable applications.",
      category: "Development",
      author: "Dev Team",
      date: "March 1, 2024",
      readTime: "10 min read",
      icon: Cpu,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Infrastructure as Code: DevOps Revolution",
      excerpt: "Explore how Infrastructure as Code is transforming DevOps practices and enabling more reliable, scalable deployments.",
      category: "DevOps",
      author: "DevOps Team",
      date: "February 28, 2024",
      readTime: "9 min read",
      icon: Server,
      color: "from-blue-500 to-blue-600"
    }
  ];

  const categories = [
    "All",
    "Digital Transformation",
    "Cybersecurity", 
    "Data & Analytics",
    "Cloud Services",
    "Development",
    "DevOps"
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20">
          <div className="relative w-full py-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/insights-hero.jpg" 
                alt="Digital Insights Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-600/90"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
                  <BookOpen className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm font-semibold text-white">Insights & Knowledge</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
                  Digital Insights
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Stay ahead of the curve with our latest insights, trends, and best practices in digital transformation, technology, and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="relative z-10 pb-12">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-white/80 backdrop-blur-xl border border-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200/50"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="relative z-10 pb-24">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Top Gradient Line */}
                  <div className={`h-1 bg-gradient-to-r ${article.color}`}></div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Icon & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${article.color} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                        <div className={`relative inline-flex p-2 bg-gradient-to-r ${article.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                          <article.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                        {article.category}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <span className="text-blue-600 font-medium">{article.readTime}</span>
                    </div>
                    
                    {/* Read More */}
                    <button className="group/btn flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-300">
                      Read Article
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative z-10 pb-24">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Stay Updated with Our Insights
                </h2>
                <p className="text-white/90 mb-8">
                  Get the latest digital trends, best practices, and industry insights delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none"
                  />
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                    <Sparkles className="w-4 h-4 mr-2 inline" />
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Homepage Animations */}
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
    </PageLayout>
  );
}