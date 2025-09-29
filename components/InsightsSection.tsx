"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import AuthButton from "@/components/auth/AuthButton";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, BookOpen, TrendingUp, Shield, Database } from "lucide-react";

const featuredArticles = [
  {
    slug: "microsoft-365-team-adoption",
    title: "How to get your whole team using Microsoft 365",
    excerpt: "Discover strategies to drive adoption and maximize the value of your Microsoft 365 investment across your entire organization.",
    category: "ARTICLES",
    image: "/insight-1.jpg"
  },
  {
    slug: "cloud-security-2024", 
    title: "The Future of Cloud Security in 2024",
    excerpt: "Explore the latest trends and best practices in cloud security to protect your digital assets in an evolving threat landscape.",
    category: "ARTICLES",
    image: "/insight-2.jpg"
  },
  {
    slug: "ai-powered-analytics",
    title: "AI-Powered Analytics: Transforming Business Intelligence", 
    excerpt: "Learn how artificial intelligence is revolutionizing data analytics and providing unprecedented insights for business growth.",
    category: "ARTICLES",
    image: "/insight-3.jpg"
  },
  {
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration Best Practices for Enterprise",
    excerpt: "A comprehensive guide to successfully migrating your enterprise applications to the cloud with minimal downtime.",
    category: "ARTICLES", 
    image: "/insight-4.jpg"
  }
];

export default function InsightsSection() {
  const router = useRouter();

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Large geometric shapes */}
          <polygon
            points="200,100 350,50 400,200 250,250"
            fill="url(#gradient1)"
            opacity="0.1"
          />
          <polygon
            points="800,150 950,100 1000,250 850,300"
            fill="url(#gradient2)"
            opacity="0.1"
          />
          <polygon
            points="100,400 250,350 300,500 150,550"
            fill="url(#gradient3)"
            opacity="0.08"
          />
          <polygon
            points="900,500 1050,450 1100,600 950,650"
            fill="url(#gradient4)"
            opacity="0.08"
          />
          
          {/* Medium shapes */}
          <polygon
            points="500,200 600,180 620,280 520,300"
            fill="url(#gradient1)"
            opacity="0.06"
          />
          <polygon
            points="600,450 700,430 720,530 620,550"
            fill="url(#gradient2)"
            opacity="0.06"
          />
          
          {/* Small accent shapes */}
          <polygon
            points="350,300 400,290 410,340 360,350"
            fill="url(#gradient3)"
            opacity="0.05"
          />
          <polygon
            points="750,250 800,240 810,290 760,300"
            fill="url(#gradient4)"
            opacity="0.05"
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>

        {/* Additional subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Side - Articles */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article, index) => (
                <div
                  key={index}
                  onClick={() => router.push(`/insights/${article.slug}`)}
                  className="group cursor-pointer"
                >
                  {/* Article Card */}
                  <div className="bg-white rounded-lg border border-blue-100 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-orange-200">
                    
                    <div className="p-6 pb-4">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                          📄 {article.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-blue-700 leading-relaxed text-sm">
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

          {/* Right Side - Our Latest Thinking */}
          <div className="lg:col-span-1 order-first lg:order-last">
            <div className="lg:sticky lg:top-28 mb-8 lg:mb-0">
              <div className="space-y-6">
                
                {/* Main Heading */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    <span className="text-blue-900">Our</span> <span className="text-[#f97316]">latest</span><br /><span className="text-blue-900">thinking</span>
                  </h2>
                </div>
                
                {/* Description */}
                <div>
                  <p className="text-lg text-blue-700 leading-relaxed">
                    Deep insights into technology topics that matter.
                  </p>
                </div>

                {/* View All Articles Link */}
                <div className="pt-8">
                  <button
                    onClick={() => router.push('/insights')}
                    className="group inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300"
                  >
                    View all articles
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Additional content to ensure scrolling is visible */}
                <div className="pt-12 space-y-4 border-t border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-900">Topics We Cover</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>Digital Transformation</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>Cloud Solutions</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>AI & Machine Learning</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>Cybersecurity</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>DevOps & Infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}