"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Shield, Database, Cloud, Cpu, Server, Sparkles, Download, FileText, CheckSquare, BarChart, ExternalLink, Eye, PieChart, LineChart, BarChart3, Activity, Target, Zap, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import AuthButton from "@/components/auth/AuthButton";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

// API fetch functions
const fetchArticles = async (params = {}) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(`/api/articles?${searchParams}`);
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  const data = await response.json();
  return data.articles.map((article: any) => ({
    ...article,
    dateValue: new Date(article.dateValue),
    icon: getIconComponent(article.icon),
    createdAt: article.createdAt ? new Date(article.createdAt) : undefined,
    updatedAt: article.updatedAt ? new Date(article.updatedAt) : undefined
  }));
};

const fetchAssets = async (params = {}) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(`/api/assets?${searchParams}`);
  if (!response.ok) {
    throw new Error('Failed to fetch assets');
  }
  const data = await response.json();
  return data.assets.map((asset: any) => ({
    ...asset,
    icon: getIconComponent(asset.icon),
    createdAt: asset.createdAt ? new Date(asset.createdAt) : undefined,
    updatedAt: asset.updatedAt ? new Date(asset.updatedAt) : undefined
  }));
};

// Helper function to get icon component from string
const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    TrendingUp, Shield, Database, Cloud, Cpu, Server, BookOpen, 
    CheckSquare, FileText, BarChart, PieChart, LineChart, BarChart3,
    Activity, Target, Zap, Sparkles, Eye
  };
  return iconMap[iconName] || TrendingUp;
};

export default function Insights() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [activeDateRange, setActiveDateRange] = useState("All");
  const [activeTopic, setActiveTopic] = useState("All");
  const [activeResourceIndustry, setActiveResourceIndustry] = useState("All Industries");

  // Fetch articles from API with enhanced caching
  const { data: articles = [], isLoading: articlesLoading, error: articlesError } = useQuery({
    queryKey: ['articles', { category: activeCategory !== "All" ? activeCategory : undefined, industry: activeIndustry !== "All" ? activeIndustry : undefined }],
    queryFn: () => fetchArticles({ 
      ...(activeCategory !== "All" && { category: activeCategory }),
      ...(activeIndustry !== "All" && { industry: activeIndustry })
    }),
    staleTime: 15 * 60 * 1000, // 15 minutes - articles don't change frequently
    gcTime: 30 * 60 * 1000, // 30 minutes - keep in cache longer
    refetchOnWindowFocus: false, // Don't refetch when user returns to tab
    refetchOnMount: false, // Use cache if available
    retry: 2, // Retry failed requests twice
  });

  // Fetch assets from API with enhanced caching
  const { data: downloadableAssets = [], isLoading: assetsLoading } = useQuery({
    queryKey: ['assets', { industry: activeResourceIndustry !== "All Industries" ? activeResourceIndustry : undefined }],
    queryFn: () => fetchAssets({
      ...(activeResourceIndustry !== "All Industries" && { industry: activeResourceIndustry })
    }),
    staleTime: 30 * 60 * 1000, // 30 minutes - assets change even less frequently
    gcTime: 60 * 60 * 1000, // 1 hour - keep in cache longer
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
  });

  // Static category, industry, topic options for filtering
  const categories = [
    "All",
    "Digital Transformation",
    "Cybersecurity", 
    "Data & Analytics",
    "Cloud Services",
    "Development",
    "DevOps"
  ];

  const industries = [
    "All",
    "Healthcare",
    "Financial Services",
    "Retail",
    "Manufacturing",
    "Technology",
    "Education"
  ];

  const topics = [
    "All",
    "Productivity",
    "Security",
    "AI & Machine Learning",
    "Cloud Migration",
    "Web Development",
    "Infrastructure",
    "Digital Strategy",
    "ERP Implementation",
    "Process Automation",
    "Database Migration",
    "Mobile Development",
    "Data Visualization",
    "Cloud Security",
    "Healthcare Innovation",
    "Managed Services",
    "Network Security"
  ];

  const dateRanges = [
    "All",
    "Last 30 Days",
    "Last 3 Months",
    "Last 6 Months",
    "This Year"
  ];

  // Client-side filtering for additional filters not handled by API
  const filteredArticles = articles.filter(article => {
    const topicMatch = activeTopic === "All" || article.topic === activeTopic;
    
    let dateMatch = true;
    if (activeDateRange !== "All") {
      const now = new Date();
      const articleDate = article.dateValue;
      
      switch (activeDateRange) {
        case "Last 30 Days":
          dateMatch = (now.getTime() - articleDate.getTime()) <= (30 * 24 * 60 * 60 * 1000);
          break;
        case "Last 3 Months":
          dateMatch = (now.getTime() - articleDate.getTime()) <= (90 * 24 * 60 * 60 * 1000);
          break;
        case "Last 6 Months":
          dateMatch = (now.getTime() - articleDate.getTime()) <= (180 * 24 * 60 * 60 * 1000);
          break;
        case "This Year":
          dateMatch = articleDate.getFullYear() === now.getFullYear();
          break;
      }
    }
    
    return topicMatch && dateMatch;
  });

  // Loading and error states
  if (articlesLoading || assetsLoading) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-orange-500 border-r-orange-500 animate-spin" style={{animationDuration: '1.5s'}}></div>
              {/* Middle rotating ring (opposite direction) */}
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-blue-500 border-l-blue-500 animate-spin" style={{animationDuration: '1s', animationDirection: 'reverse'}}></div>
              {/* Inner pulsing core */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-500 to-blue-500 animate-pulse opacity-80" style={{animationDuration: '2s'}}></div>
              {/* Center dot */}
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
            </div>
            <p className="text-gray-600 animate-pulse font-medium text-lg">Loading insights...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (articlesError) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg text-red-600">Error loading articles. Please try again later.</p>
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
              src="/images/digital-platforms-hero.jpg" 
              alt="Digital Insights Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
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
          {/* Bottom Background - Gray */}
          <div className="bg-gray-50 h-32"></div>
          
          {/* Overlapping Filter Section */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
              
              {/* Category Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    style={{ 
                      backgroundColor: activeCategory === category ? '#f97316' : '#ffffff',
                      borderColor: activeCategory === category ? '#f97316' : '#e5e7eb',
                      color: activeCategory === category ? '#ffffff' : '#374151',
                      boxShadow: activeCategory === category ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none',
                      opacity: 1
                    }}
                    className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Additional Filter Dropdowns */}
              <div className="flex flex-wrap justify-center gap-4">
                {/* Industry Filter */}
                <div className="relative">
                  <select
                    value={activeIndustry}
                    onChange={(e) => setActiveIndustry(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-full px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-[#f97316] focus:border-[#f97316] focus:outline-none transition-all duration-300"
                  >
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        Industry: {industry}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Topic Filter */}
                <div className="relative">
                  <select
                    value={activeTopic}
                    onChange={(e) => setActiveTopic(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-full px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-[#f97316] focus:border-[#f97316] focus:outline-none transition-all duration-300"
                  >
                    {topics.map((topic) => (
                      <option key={topic} value={topic}>
                        Topic: {topic}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Date Range Filter */}
                <div className="relative">
                  <select
                    value={activeDateRange}
                    onChange={(e) => setActiveDateRange(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-full px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-[#f97316] focus:border-[#f97316] focus:outline-none transition-all duration-300"
                  >
                    {dateRanges.map((range) => (
                      <option key={range} value={range}>
                        Date: {range}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <section className="relative z-10 pb-24 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => {
                const isOrange = index % 2 !== 0;
                const IconComponent = article.icon;
                return (
                  <div key={index} className="group relative">
                    <div 
                      className="relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
                      onClick={() => router.push(`/insights/${article.slug}`)}
                    >
                      {/* Image Section with properly positioned overlays */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        
                        {/* Icon - Top Left */}
                        <div className="absolute top-4 left-4">
                          <div className={`w-16 h-16 rounded-2xl ${isOrange ? 'bg-gradient-to-br from-[#f97316] to-[#f97316]' : 'bg-gradient-to-br from-blue-900 to-blue-700'} p-2 shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3`}>
                            <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                              <IconComponent className={`w-8 h-8 ${isOrange ? 'text-[#f97316]' : 'text-blue-900'}`} />
                            </div>
                          </div>
                        </div>

                        {/* Date - Top Right */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                            {article.date}
                          </div>
                        </div>

                        {/* Category - Bottom Left */}
                        <div className="absolute bottom-4 left-4">
                          <div className={`px-3 py-1 ${isOrange ? 'bg-[#f97316]' : 'bg-blue-900'} text-white text-xs font-bold rounded-full`}>
                            {article.category}
                          </div>
                        </div>
                      </div>

                      {/* Content Section - Clean white area */}
                      <div className="p-6 bg-white">
                        {/* Title */}
                        <h3 className={`text-xl font-bold mb-4 leading-tight ${isOrange ? 'text-[#f97316]' : 'text-blue-900'}`}>
                          {article.title}
                        </h3>

                        {/* Author & Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-gray-600">
                            <User className="w-4 h-4" />
                            <span className="text-sm">{article.author}</span>
                          </div>
                          
                          <div className={`flex items-center gap-2 ${isOrange ? 'text-[#f97316]' : 'text-blue-600'} text-sm font-medium group-hover:gap-3 transition-all`}>
                            <span>Read</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </PageLayout>
  );
}
