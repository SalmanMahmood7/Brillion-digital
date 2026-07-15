"use client"

import PageLayout from "@/components/PageLayout";
import { Play, Calendar, Clock, Users, BookOpen, TrendingUp, ChevronRight, ExternalLink, X, Bell } from "lucide-react";
import { useState } from "react";
import AuthButton from "@/components/auth/AuthButton";

interface UpcomingWebinar {
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  topics: string[];
  thumbnail: string;
}

export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWebinar, setSelectedWebinar] = useState<UpcomingWebinar | null>(null);

  const categories = ["All", "Digital Transformation", "Cloud Solutions", "AI & Machine Learning", "Cybersecurity", "Data Analytics"];

  const upcomingWebinars: UpcomingWebinar[] = [
    {
      title: "Cybersecurity Fundamentals for Enterprise: Protecting Your Digital Assets",
      description: "Essential cybersecurity principles every business leader needs to know. Learn about threat detection, risk management, and building a security-first culture in your organization.",
      category: "Cybersecurity",
      date: "November 18, 2026",
      time: "2:00 PM EST",
      topics: ["Enterprise Security", "Threat Detection", "Risk Management"],
      thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      title: "Digital Transformation Strategies: Modernizing Legacy Business Systems",
      description: "Proven strategies for successfully transforming traditional business operations into modern, efficient digital workflows. Essential for business leaders planning their digital journey.",
      category: "Digital Transformation",
      date: "December 9, 2026",
      time: "1:00 PM EST",
      topics: ["Legacy Modernization", "Digital Workflows", "Change Management"],
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    },
    {
      title: "Cloud Migration Best Practices: Enterprise-Scale Implementation Guide",
      description: "Real-world guidance on migrating enterprise systems to the cloud. Discover cost optimization strategies, security considerations, and common pitfalls to avoid.",
      category: "Cloud Solutions",
      date: "January 13, 2027",
      time: "3:00 PM EST",
      topics: ["Cloud Migration", "Cost Optimization", "Enterprise Architecture"],
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      title: "AI Implementation in Business: Practical Applications and ROI Analysis",
      description: "Demystifying AI implementation for business leaders. Explore practical use cases, calculate ROI, and understand how to integrate AI into your existing business processes.",
      category: "AI & Machine Learning",
      date: "February 10, 2027",
      time: "2:00 PM EST",
      topics: ["AI Implementation", "Business Intelligence", "ROI Analysis"],
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      title: "Data Analytics for Business Growth: From Raw Data to Strategic Insights",
      description: "How to transform your business data into actionable insights. Learn advanced analytics techniques, data visualization strategies, and how to build a data-driven culture.",
      category: "Data Analytics",
      date: "March 10, 2027",
      time: "1:00 PM EST",
      topics: ["Data Visualization", "Business Analytics", "Data-Driven Culture"],
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      title: "Future of Remote Work Technology: Building the Modern Digital Workplace",
      description: "Explore the tools, platforms, and strategies shaping the future of distributed teams and the modern digital workplace.",
      category: "Digital Transformation",
      date: "April 14, 2027",
      time: "2:00 PM EST",
      topics: ["Remote Work", "Collaboration Tools", "Digital Workplace"],
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
    }
  ];

  const filteredWebinars = selectedCategory === "All"
    ? upcomingWebinars
    : upcomingWebinars.filter(webinar => webinar.category === selectedCategory);

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Webinars Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-12">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Expert <span className="text-[#f97316]">Webinars</span> & Learning
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join industry experts as they share insights, best practices, and cutting-edge strategies for digital transformation and technology implementation.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-12 pt-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar className="w-8 h-8 text-[#f97316]" />
                  </div>
                  <p className="text-4xl font-bold text-white">6+</p>
                  <p className="text-gray-400 mt-1">Upcoming Sessions</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-8 h-8 text-[#f97316]" />
                  </div>
                  <p className="text-4xl font-bold text-white">10K+</p>
                  <p className="text-gray-400 mt-1">Participants</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen className="w-8 h-8 text-[#f97316]" />
                  </div>
                  <p className="text-4xl font-bold text-white">5</p>
                  <p className="text-gray-400 mt-1">Expert Topics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#f97316] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Webinars Grid */}
        <section className="py-14">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Main Content - Upcoming Webinars */}
              <div className="lg:col-span-2">
                {filteredWebinars.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    {filteredWebinars.map((webinar, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedWebinar(webinar)}
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                      >
                        {/* Thumbnail */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={webinar.thumbnail}
                            alt={webinar.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                          {/* Coming Soon Badge */}
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-[#f97316] text-white text-sm font-semibold rounded-full">
                              Coming Soon
                            </span>
                          </div>

                          {/* Category Badge */}
                          <div className="absolute bottom-4 left-4">
                            <span className="px-3 py-1 bg-black/70 backdrop-blur text-white text-xs font-semibold rounded-full">
                              {webinar.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{webinar.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{webinar.time}</span>
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-[#f97316] transition-colors duration-300 leading-tight">
                            {webinar.title}
                          </h3>

                          <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                            {webinar.description}
                          </p>

                          {/* Topics */}
                          <div className="flex flex-wrap gap-2">
                            {webinar.topics.map((topic, topicIndex) => (
                              <span
                                key={topicIndex}
                                className="px-2 py-1 bg-blue-50 text-[#1e3a8a] text-xs font-medium rounded-full"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-14">
                    <div className="max-w-md mx-auto">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-8">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Webinars Coming Soon</h3>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        We're preparing high-quality webinar content in this category. Stay tuned for updates!
                      </p>
                      <AuthButton
                        requireAuth={false}
                        href="/contact"
                        className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Get Notified
                      </AuthButton>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Upcoming Schedule */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-8">

                  {/* Upcoming Schedule */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Upcoming Schedule</h3>

                    <div className="space-y-4">
                      {upcomingWebinars.slice(0, 3).map((webinar, index) => (
                        <div key={index} className="border-l-4 border-[#f97316] pl-4 py-2">
                          <h4 className="font-semibold text-[#1e3a8a] mb-1">{webinar.title}</h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{webinar.date}</span>
                            </p>
                            <p className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{webinar.time}</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <AuthButton
                        requireAuth={true}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Register for Upcoming
                      </AuthButton>
                    </div>
                  </div>

                  {/* Learning Resources */}
                  <div className="bg-gradient-to-br from-blue-50 to-[#f97316]/5 rounded-2xl p-6 border border-blue-100">
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Learning Resources</h3>

                    <div className="space-y-3">
                      <a href="/insights" className="flex items-center text-[#1e3a8a] hover:text-[#f97316] transition-colors font-medium">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Technical Articles
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </a>
                      <a href="/services" className="flex items-center text-[#1e3a8a] hover:text-[#f97316] transition-colors font-medium">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Our Services
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </a>
                      <a href="/work" className="flex items-center text-[#1e3a8a] hover:text-[#f97316] transition-colors font-medium">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Case Studies
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="relative bg-slate-900">
            <div className="absolute inset-0">
              <img
                src="/dlxmedia-hu-pH9Xvw8UFoo-unsplash.jpg"
                alt="Professional podcast recording studio setup"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl py-16">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Want to Host a Webinar?
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Share your expertise with our community. We're always looking for industry experts to present their insights.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg">
                    Download Our Guide
                  </button>
                  <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg" href="/work">
                    See Case Studies
                  </a>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Coming Soon Modal */}
      {selectedWebinar && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedWebinar(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-[#1e3a8a] pr-4">{selectedWebinar.title}</h3>
              <button
                onClick={() => setSelectedWebinar(null)}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 flex-shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Coming Soon</h4>
              <p className="text-gray-600 mb-2 leading-relaxed">
                This webinar is scheduled for <span className="font-semibold text-[#1e3a8a]">{selectedWebinar.date}</span> at {selectedWebinar.time}.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Registration details will be announced soon. Get notified so you don't miss it!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AuthButton
                  requireAuth={false}
                  href="/contact"
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Get Notified
                </AuthButton>
                <button
                  onClick={() => setSelectedWebinar(null)}
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
