"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export default function Careers() {
  const jobOpenings = [
    {
      title: "Senior Digital Transformation Consultant",
      department: "Digital Advisory",
      location: "Toronto, ON",
      type: "Full-time",
      description: "Lead digital transformation initiatives for enterprise clients, providing strategic guidance and implementation support.",
      posted: "2 days ago"
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Vancouver, BC",
      type: "Full-time",
      description: "Design and implement scalable cloud solutions for clients across various industries.",
      posted: "1 week ago"
    },
    {
      title: "Cybersecurity Analyst",
      department: "Cyber Security & Privacy",
      location: "Calgary, AB",
      type: "Full-time",
      description: "Assess security risks, implement protective measures, and ensure compliance with industry standards.",
      posted: "3 days ago"
    },
    {
      title: "Data Analytics Specialist",
      department: "Applied Data & Analytics",
      location: "Montreal, QC",
      type: "Full-time",
      description: "Transform client data into actionable insights using advanced analytics and visualization tools.",
      posted: "5 days ago"
    },
    {
      title: "Application Developer",
      department: "Application Development",
      location: "Remote",
      type: "Full-time",
      description: "Develop custom applications using modern frameworks and best practices in software development.",
      posted: "1 day ago"
    },
    {
      title: "IT Infrastructure Manager",
      department: "Managed IT Services",
      location: "Ottawa, ON",
      type: "Full-time",
      description: "Oversee IT infrastructure for multiple clients, ensuring optimal performance and security.",
      posted: "1 week ago"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salary and performance-based bonuses"
    },
    {
      title: "Professional Development", 
      description: "Continuous learning opportunities and certification support"
    },
    {
      title: "Flexible Work",
      description: "Hybrid and remote work options with flexible schedules"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health benefits and wellness programs"
    },
    {
      title: "Innovation Culture",
      description: "Work with cutting-edge technology and innovative solutions"
    },
    {
      title: "Team Environment",
      description: "Collaborative culture with talented professionals"
    }
  ];

  return (
    <PageLayout>
      <div className="relative min-h-screen bg-white overflow-hidden">

        
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Careers
                </span>
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join our team of digital transformation experts and help organizations harness what's now while imagining what's next.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Why Join BRILLION Digital?
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Be part of a dynamic team that's shaping the future of digital transformation across Canada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <Card className="relative bg-white/80 backdrop-blur-xl border border-blue-500/20 hover:border-cyan-500/40 hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Current Opportunities
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover exciting career opportunities across our various service areas.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <Card className="relative bg-white/80 backdrop-blur-xl border border-blue-500/20 hover:border-cyan-500/40 hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-3 flex-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="secondary" className="text-xs">
                              {job.department}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {job.type}
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-cyan-400 transition-colors duration-300">
                            {job.title}
                          </h3>
                          
                          <p className="text-gray-600 leading-relaxed">
                            {job.description}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>Posted {job.posted}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-gray-900 group/btn">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Don't see the right role? We're always looking for talented individuals.
              </p>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900">
                Submit General Application
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Ready to shape the future of digital transformation?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join our team and help organizations across Canada harness technology to achieve their goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-gray-900">
                  View All Positions
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900">
                  Learn About Our Culture
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CSS Animations */}
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
      </div>
    </PageLayout>
  );
}