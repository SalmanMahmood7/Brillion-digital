"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Shield, Database, Cloud, Cpu, Server, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Insights() {
  const router = useRouter();
  
  const articles = [
    {
      slug: "microsoft-365-team-adoption",
      title: "How to get your whole team using Microsoft 365",
      excerpt: "Discover strategies to drive adoption and maximize the value of your Microsoft 365 investment across your entire organization.",
      category: "Digital Transformation",
      author: "BRILLION Digital Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-700",
      image: "/images/digital-advisory-hero.jpg"
    },
    {
      slug: "cloud-security-2024",
      title: "The Future of Cloud Security in 2024",
      excerpt: "Explore the latest trends and best practices in cloud security to protect your digital assets in an evolving threat landscape.",
      category: "Cybersecurity",
      author: "Security Team",
      date: "March 12, 2024",
      readTime: "7 min read",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      image: "/images/cloud-services-hero.jpg"
    },
    {
      slug: "ai-powered-analytics",
      title: "AI-Powered Analytics: Transforming Business Intelligence",
      excerpt: "Learn how artificial intelligence is revolutionizing data analytics and providing unprecedented insights for business growth.",
      category: "Data & Analytics",
      author: "AI Research Team",
      date: "March 8, 2024",
      readTime: "6 min read",
      icon: Database,
      color: "from-blue-400 to-blue-600",
      image: "/images/digital-platforms-hero.jpg"
    },
    {
      slug: "cloud-migration-best-practices",
      title: "Cloud Migration Best Practices for Enterprise",
      excerpt: "A comprehensive guide to successfully migrating your enterprise applications to the cloud with minimal downtime.",
      category: "Cloud Services",
      author: "Cloud Architects",
      date: "March 5, 2024",
      readTime: "8 min read",
      icon: Cloud,
      color: "from-blue-400 to-blue-600",
      image: "/images/managed-it-hero.jpg"
    },
    {
      slug: "nextjs-scalable-applications",
      title: "Building Scalable Web Applications with Next.js",
      excerpt: "Deep dive into modern web development practices and how Next.js can help you build performant, scalable applications.",
      category: "Development",
      author: "Dev Team",
      date: "March 1, 2024",
      readTime: "10 min read",
      icon: Cpu,
      color: "from-blue-500 to-blue-700",
      image: "/images/work-hero.jpg"
    },
    {
      slug: "infrastructure-as-code-devops",
      title: "Infrastructure as Code: DevOps Revolution",
      excerpt: "Explore how Infrastructure as Code is transforming DevOps practices and enabling more reliable, scalable deployments.",
      category: "DevOps",
      author: "DevOps Team",
      date: "February 28, 2024",
      readTime: "9 min read",
      icon: Server,
      color: "from-blue-500 to-blue-600",
      image: "/images/contact-hero.jpg"
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
        <section className="relative bg-slate-900 h-[70vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/insights-hero.jpg" 
              alt="Digital Insights Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Digital <span className="text-[#f97316]">Insights</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Stay ahead of the curve with our latest insights, trends, and best practices in digital transformation, technology, and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Transition Background Section */}
        <div className="relative">
          {/* Top Background - Same as Hero */}
          <div className="bg-slate-900 h-16"></div>
          
          {/* Bottom Background - Gray */}
          <div className="bg-gray-50 h-16"></div>
          
          {/* Overlapping Filter Buttons */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-white border border-gray-200 text-gray-700 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-200/50"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <section className="relative z-10 pb-24 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div
                  key={index}
                  onClick={() => router.push(`/insights/${article.slug}`)}
                  className="group cursor-pointer"
                >
                  {/* Article Card */}
                  <div className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-gray-200">
                    
                    <div className="p-6 pb-4">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          📄 {article.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Read More Arrow */}
                      <div className="absolute bottom-4 right-4">
                        <div className="w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA Section */}
        <section className="relative z-10 mb-20">
          <div className="relative bg-slate-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2000&auto=format&fit=crop" 
                alt="Cityscape Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-24">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to get started?
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  We're always looking for new challenges and teammates.
                </p>
                <div className="flex justify-center">
                  <button className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg">
                    Connect with us
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