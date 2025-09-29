"use client"

import PageLayout from "@/components/PageLayout";
import { Play, Calendar, Clock, Users, BookOpen, TrendingUp, Shield, Cloud, Brain, Database, ChevronRight, ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";
import { webinarsService, Webinar } from "@/lib/firebase-services";
import AuthButton from "@/components/auth/AuthButton";

export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState(true);
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

  // Fetch webinars from Firebase
  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        setLoading(true);
        const webinarsList = await webinarsService.getAll();
        console.log('Public page - fetched webinars:', webinarsList.length);
        setWebinars(webinarsList);
      } catch (error) {
        console.error('Error fetching webinars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();
  }, []);

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
                {loading ? (
                  <div className="text-center py-20">
                    <div className="max-w-md mx-auto">
                      <div className="w-16 h-16 border-4 border-[#f97316] border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Loading Webinars...</h3>
                      <p className="text-gray-600">Please wait while we fetch the latest webinars.</p>
                    </div>
                  </div>
                ) : filteredWebinars.length > 0 ? (
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
                            <button
                              onClick={() => {
                                addDebugLog('👆 BUTTON_CLICK', `Watch Webinar button clicked for "${webinar.title}"`, 'info');
                                handleWatchWebinar(webinar);
                              }}
                              className="w-full bg-[#f97316] text-white py-3 rounded-xl font-semibold hover:bg-[#ea580c] transition-all duration-300 flex items-center justify-center"
                            >
                              <Play className="w-4 h-4 mr-2" />
                              Watch Webinar
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Coming Soon Message */
                  <div className="text-center py-20">
                    <div className="max-w-md mx-auto">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-8">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Webinars Coming Soon</h3>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        We're preparing high-quality webinar content featuring industry experts and cutting-edge topics. 
                        Stay tuned for updates!
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
                src="/webinar-cta-bg.jpg" 
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