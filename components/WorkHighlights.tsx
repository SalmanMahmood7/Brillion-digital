"use client";

import React from "react";
import { ArrowRight, Building2, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

const WorkHighlights = () => {
  const successStories = [
    {
      icon: Building2,
      client: "XYZ Bank",
      challenge: "Legacy infrastructure limiting digital transformation",
      solution: "Migrated to cloud infrastructure with enhanced security",
      result: "Reduced IT costs by 40% and improved system performance",
      metrics: "40% Cost Reduction",
      bgColor: "from-blue-900 to-blue-700",
      accentColor: "text-blue-900"
    },
    {
      icon: TrendingUp,
      client: "Global Manufacturing Corp",
      challenge: "Manual processes slowing production efficiency",
      solution: "Implemented AI-powered automation and IoT integration",
      result: "Increased production efficiency by 60% and reduced downtime",
      metrics: "60% Efficiency Boost",
      bgColor: "from-[#f97316] to-orange-500",
      accentColor: "text-[#f97316]"
    },
    {
      icon: Shield,
      client: "Healthcare Network",
      challenge: "Data security compliance and patient management",
      solution: "Deployed HIPAA-compliant digital platform with advanced security",
      result: "100% compliance achieved with streamlined patient care",
      metrics: "100% Compliance",
      bgColor: "from-blue-900 to-blue-700",
      accentColor: "text-blue-900"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-900/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-900">Client Success</span>{" "}
            <span className="text-[#f97316]">Stories</span>
          </h2>
          <p className="text-xl text-blue-900 max-w-3xl mx-auto leading-relaxed">
            Real results from real businesses. See how we've helped companies transform their operations and achieve measurable success.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {successStories.map((story, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2">
                {/* Header with Icon and Metrics */}
                <div className={`bg-gradient-to-r ${story.bgColor} p-6 text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <story.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{story.metrics}</div>
                        <div className="text-sm text-white/80">Impact</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white">
                      {story.client}
                    </h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{story.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Result:</h4>
                      <p className={`${story.accentColor} font-semibold text-sm leading-relaxed`}>
                        {story.result}
                      </p>
                    </div>
                  </div>
                  
                  {/* Read More Link */}
                  <Link 
                    href="/work"
                    className={`inline-flex items-center ${story.accentColor} font-semibold text-sm hover:underline group/link transition-all duration-300`}
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkHighlights;