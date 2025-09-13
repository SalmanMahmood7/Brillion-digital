"use client"

import PageLayout from "@/components/PageLayout";
import { Play, Calendar, Clock, Users, BookOpen, TrendingUp, Shield, Cloud, Brain, Database, ChevronRight, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import AuthButton from "@/components/auth/AuthButton";

export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [debugLogs, setDebugLogs] = useState([]);
  const [showDebugConsole, setShowDebugConsole] = useState(false);

  const addDebugLog = (step, details, status = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    const newLog = { 
      id: Date.now(), 
      timestamp, 
      step, 
      details, 
      status 
    };
    setDebugLogs(prev => [...prev, newLog]);
    console.log(`[${timestamp}] ${step}: ${details}`);
  };

  const handleWatchWebinar = (webinar) => {
    addDebugLog('🎬 VIDEO_CLICK', `User clicked play on "${webinar.title}"`, 'info');
    addDebugLog('🔍 WEBINAR_DATA', `Loading webinar data: ID=${webinar.id}, Duration=${webinar.duration}`, 'info');
    addDebugLog('🔒 AUTH_CHECK', 'Checking user authentication status...', 'warning');
    
    // Simulate authentication check delay
    setTimeout(() => {
      addDebugLog('✅ AUTH_SUCCESS', 'User is authenticated, proceeding to video load', 'success');
      addDebugLog('📋 STATE_UPDATE', 'Setting selectedWebinar state and opening modal', 'info');
      
      setSelectedWebinar(webinar);
      setShowVideoModal(true);
      
      addDebugLog('🖼️ MODAL_RENDER', 'Video modal component mounted', 'success');
      addDebugLog('🎥 IFRAME_LOAD', `Loading YouTube iframe: youtubeId=${webinar.youtubeId}`, 'info');
      
      // Simulate iframe load time
      setTimeout(() => {
        addDebugLog('▶️ VIDEO_READY', 'Video player ready, auto-play initiated', 'success');
        addDebugLog('📊 ANALYTICS', `Tracking view for webinar ID: ${webinar.id}`, 'info');
      }, 1500);
      
    }, 500);
  };

  const closeVideoModal = () => {
    addDebugLog('❌ MODAL_CLOSE', 'User requested modal close', 'warning');
    addDebugLog('🧹 CLEANUP', 'Cleaning up video player and state', 'info');
    
    setShowVideoModal(false);
    setSelectedWebinar(null);
    
    addDebugLog('✅ CLEANUP_COMPLETE', 'Modal closed, state reset complete', 'success');
  };

  const clearDebugLogs = () => {
    setDebugLogs([]);
    addDebugLog('🗑️ LOGS_CLEARED', 'Debug console cleared by user', 'info');
  };

  const categories = ["All", "Digital Transformation", "Cloud Solutions", "AI & Machine Learning", "Cybersecurity", "Data Analytics"];

  const webinars = [
    {
      id: "1",
      title: "Digital Transformation in 2024: A Complete Guide",
      description: "Learn the essential strategies for successful digital transformation, including cloud migration, process automation, and change management.",
      category: "Digital Transformation",
      duration: "45 min",
      views: "2.3K",
      date: "Dec 15, 2024",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      speaker: "Sarah Chen, Digital Strategy Director",
      topics: ["Cloud Migration", "Process Automation", "Change Management", "ROI Measurement"],
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    },
    {
      id: "2", 
      title: "Cybersecurity Best Practices for Modern Businesses",
      description: "Comprehensive guide to protecting your business from cyber threats with enterprise-grade security solutions and best practices.",
      category: "Cybersecurity",
      duration: "38 min",
      views: "1.8K",
      date: "Dec 10, 2024",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      speaker: "Shahzaib Kamal, Security Expert",
      topics: ["Zero Trust Security", "Threat Detection", "Compliance", "Risk Management"],
      thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      id: "3",
      title: "AI-Powered Analytics: Transforming Business Intelligence",
      description: "Discover how artificial intelligence is revolutionizing data analytics and providing unprecedented insights for business growth.",
      category: "AI & Machine Learning",
      duration: "52 min", 
      views: "3.1K",
      date: "Dec 5, 2024",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      speaker: "Dr. Salman Mahmood, AI Research Lead",
      topics: ["Machine Learning", "Predictive Analytics", "Business Intelligence", "Data Visualization"],
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      id: "4",
      title: "Cloud Migration Strategies for Enterprise",
      description: "A comprehensive guide to successfully migrating your enterprise applications to the cloud with minimal downtime and maximum efficiency.",
      category: "Cloud Solutions",
      duration: "41 min",
      views: "2.7K", 
      date: "Nov 28, 2024",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      speaker: "David Kim, Cloud Architect",
      topics: ["AWS Migration", "Azure Solutions", "Hybrid Cloud", "Cost Optimization"],
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      id: "5",
      title: "Data Analytics for Business Growth",
      description: "Learn how to leverage data analytics to drive business decisions, improve customer experience, and accelerate growth.",
      category: "Data Analytics",
      duration: "36 min",
      views: "1.9K",
      date: "Nov 20, 2024", 
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      speaker: "Jennifer Liu, Data Science Manager",
      topics: ["Business Intelligence", "Customer Analytics", "Performance Metrics", "Data Visualization"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: "6",
      title: "Microsoft 365 Implementation Best Practices",
      description: "Complete guide to implementing Microsoft 365 in your organization, including Teams, SharePoint, and security configurations.",
      category: "Digital Transformation",
      duration: "48 min",
      views: "2.5K",
      date: "Nov 15, 2024",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs  
      speaker: "Robert Martinez, Microsoft Solutions Expert",
      topics: ["Teams Implementation", "SharePoint", "Security", "User Adoption"],
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
    }
  ];

  const filteredWebinars = selectedCategory === "All" 
    ? webinars 
    : webinars.filter(webinar => webinar.category === selectedCategory);

  const upcomingWebinars = [
    {
      title: "Future of Remote Work Technology",
      date: "Jan 15, 2025",
      time: "2:00 PM EST",
      speaker: "Sarah Johnson, Future of Work Expert"
    },
    {
      title: "Blockchain in Enterprise Solutions", 
      date: "Jan 22, 2025",
      time: "1:00 PM EST",
      speaker: "Alex Chen, Blockchain Developer"
    },
    {
      title: "Sustainable IT Infrastructure",
      date: "Jan 29, 2025", 
      time: "3:00 PM EST",
      speaker: "Maria Garcia, Green IT Specialist"
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        
        {/* Hero Section */}
        <section className="relative bg-slate-900 min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Webinars Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              
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
                    <Play className="w-8 h-8 text-[#f97316]" />
                  </div>
                  <p className="text-4xl font-bold text-white">50+</p>
                  <p className="text-gray-400 mt-1">Expert Sessions</p>
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
                  <p className="text-4xl font-bold text-white">25+</p>
                  <p className="text-gray-400 mt-1">Hours of Content</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-white border-b border-gray-200">
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
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Main Content - Webinars */}
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredWebinars.map((webinar) => (
                    <div
                      key={webinar.id}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      {/* Video Thumbnail */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={webinar.thumbnail} 
                          alt={webinar.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div 
                            onClick={() => {
                              addDebugLog('▶️ PLAY_CLICK', `Play button clicked for "${webinar.title}"`, 'info');
                              handleWatchWebinar(webinar);
                            }}
                            className="w-16 h-16 bg-[#f97316]/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer hover:bg-[#ea580c]/90"
                          >
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                        
                        {/* Duration Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-black/70 backdrop-blur text-white text-sm font-semibold rounded-full">
                            {webinar.duration}
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
                            <Users className="w-4 h-4" />
                            <span>{webinar.views} views</span>
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-blue-900 group-hover:text-[#f97316] transition-colors duration-300 leading-tight">
                          {webinar.title}
                        </h3>
                        
                        <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                          {webinar.description}
                        </p>

                        <div className="space-y-3">
                          <p className="text-sm font-medium text-gray-800">{webinar.speaker}</p>
                          
                          {/* Topics */}
                          <div className="flex flex-wrap gap-2">
                            {webinar.topics.slice(0, 3).map((topic, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                              >
                                {topic}
                              </span>
                            ))}
                            {webinar.topics.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                +{webinar.topics.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Watch Button */}
                        <div className="pt-4 border-t border-gray-100">
                          <AuthButton
                            requireAuth={true}
                            onAuthSuccess={() => {
                              addDebugLog('🔐 AUTH_BUTTON', 'AuthButton authentication successful', 'success');
                              handleWatchWebinar(webinar);
                            }}
                            onClick={() => {
                              addDebugLog('👆 BUTTON_CLICK', `Watch Webinar button clicked for "${webinar.title}"`, 'info');
                            }}
                            className="w-full bg-[#f97316] text-white py-3 rounded-xl font-semibold hover:bg-[#ea580c] transition-all duration-300 flex items-center justify-center"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Watch Webinar
                          </AuthButton>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar - Upcoming Webinars */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-8">
                  
                  {/* Upcoming Webinars */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Upcoming Webinars</h3>
                    
                    <div className="space-y-4">
                      {upcomingWebinars.map((webinar, index) => (
                        <div key={index} className="border-l-4 border-[#f97316] pl-4 py-2">
                          <h4 className="font-semibold text-blue-900 mb-1">{webinar.title}</h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{webinar.date}</span>
                            </p>
                            <p className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{webinar.time}</span>
                            </p>
                            <p className="text-[#f97316] font-medium">{webinar.speaker}</p>
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
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Learning Resources</h3>
                    
                    <div className="space-y-3">
                      <a href="/insights" className="flex items-center text-blue-600 hover:text-[#f97316] transition-colors font-medium">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Technical Articles
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </a>
                      <a href="/services" className="flex items-center text-blue-600 hover:text-[#f97316] transition-colors font-medium">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Our Services
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </a>
                      <a href="/work" className="flex items-center text-blue-600 hover:text-[#f97316] transition-colors font-medium">
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
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2000&auto=format&fit=crop" 
                alt="Learning Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl py-24">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Want to Host a Webinar?
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Share your expertise with our community. We're always looking for industry experts to present their insights.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AuthButton 
                    href="/contact"
                    requireAuth={true}
                    className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg flex items-center justify-center"
                  >
                    <Users className="mr-2 w-5 h-5" />
                    Become a Speaker
                  </AuthButton>
                  <AuthButton 
                    href="/newsletter"
                    requireAuth={false}
                    className="bg-[#f97316] border-2 border-[#f97316] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#ea580c] hover:border-[#ea580c] transition-all duration-300 text-lg flex items-center justify-center"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Get Notified
                  </AuthButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Debug Console Toggle Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setShowDebugConsole(!showDebugConsole)}
          className="bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors font-mono text-sm"
        >
          {showDebugConsole ? '🔽 Hide Debug' : '🔧 Show Debug Process'}
        </button>
      </div>

      {/* Debug Console */}
      {showDebugConsole && (
        <div className="fixed bottom-16 right-4 w-96 max-h-80 bg-gray-900 text-green-400 rounded-lg shadow-2xl z-40 overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
            <span className="font-mono text-sm text-white">🖥️ Debug Console</span>
            <button
              onClick={clearDebugLogs}
              className="text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500"
            >
              Clear
            </button>
          </div>
          <div className="p-4 font-mono text-xs overflow-y-auto max-h-64 space-y-1">
            {debugLogs.length === 0 ? (
              <div className="text-gray-500">🔄 Waiting for user interaction...</div>
            ) : (
              debugLogs.map((log) => (
                <div key={log.id} className={`
                  ${log.status === 'success' ? 'text-green-400' : 
                    log.status === 'warning' ? 'text-yellow-400' : 
                    log.status === 'error' ? 'text-red-400' : 'text-blue-400'}
                `}>
                  <span className="text-gray-400">[{log.timestamp}]</span> {log.step}: {log.details}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && selectedWebinar && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-blue-900">{selectedWebinar.title}</h3>
                <p className="text-gray-600 mt-1">
                  {selectedWebinar.speaker} • {selectedWebinar.duration} • {selectedWebinar.views} views
                </p>
              </div>
              <button 
                onClick={closeVideoModal}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Content */}
            <div className="aspect-video bg-gray-900">
              <iframe
                src={`https://www.youtube.com/embed/${selectedWebinar.youtubeId}?autoplay=1&rel=0`}
                title={selectedWebinar.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => {
                  addDebugLog('📺 IFRAME_LOADED', 'YouTube iframe fully loaded and ready', 'success');
                  addDebugLog('🎵 AUTOPLAY_START', 'Video autoplay initiated by YouTube', 'success');
                }}
                onError={() => {
                  addDebugLog('❌ IFRAME_ERROR', 'Error loading YouTube iframe', 'error');
                }}
              />
            </div>

            {/* Video Details */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">About This Webinar</h4>
                  <p className="text-gray-600 mb-4">{selectedWebinar.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedWebinar.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedWebinar.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{selectedWebinar.views} views</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Topics Covered</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedWebinar.topics.map((topic, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Speaker</h4>
                  <p className="text-gray-600">{selectedWebinar.speaker}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-200 mt-6">
                <AuthButton
                  requireAuth={true}
                  href="/contact"
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center"
                >
                  <Users className="mr-2 w-5 h-5" />
                  Schedule Consultation
                </AuthButton>
                <AuthButton
                  requireAuth={false}
                  href="/newsletter"
                  className="border border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Get Notified
                </AuthButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}