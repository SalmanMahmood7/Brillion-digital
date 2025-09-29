"use client";

import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Sparkles, ArrowRight, Zap, Target, Lightbulb, HandHeart, TrendingUp, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthButton from "@/components/auth/AuthButton";
import { useFormTracking } from "@/hooks/useAnalytics";
import BrillionLoader from "@/components/ui/BrillionLoader";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@brilliondigital.com", "support@brilliondigital.com"],
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "Call Now"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Digital Street", "Tech City, TC 12345"],
      action: "Get Directions"
    }
  ];

  const { user } = useAuth();
  const { trackFormSubmission, trackFormStart } = useFormTracking();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formStarted, setFormStarted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Track form start on first input
    if (!formStarted && value.length > 0) {
      setFormStarted(true);
      trackFormStart('contact');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      return; // AuthButton will handle login requirement
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Track form submission attempt
      trackFormSubmission('contact', {
        userEmail: user.email,
        messageLength: formData.message.length,
        hasName: !!formData.name,
        source: 'contact_page'
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the form data to your backend
      console.log('Form submitted:', {
        ...formData,
        userEmail: user.email,
        userId: user.uid
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFormStarted(false);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative bg-slate-900 h-[70vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/contact-hero-bg.jpg" 
              alt="Contact Us Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Contact <span className="text-[#f97316]">Us</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business? We're here to help you every step of the way. Let's discuss your project and make your digital vision a reality.
              </p>
              
            </div>
          </div>
        </section>

        {/* Transition Background Section */}
        <div className="relative">
          {/* Top Background - Same as Hero */}
          <div className="bg-slate-900 h-32"></div>
          
          {/* Bottom Background - Different Color */}
          <div className="bg-gray-50 h-32"></div>
          
          {/* Overlapping Get in Touch Card */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-7xl px-6">
            <div className="flex justify-center">
              {/* Two-column Contact Card */}
              <div className="w-full max-w-5xl bg-white rounded-[20px] shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Dark Navy Section */}
                  <div className="bg-[#1d2230] p-8 lg:p-10">
                    <h2 className="text-[28px] font-bold text-white mb-8 font-['Poppins',sans-serif]">
                      Get in Touch
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Phone */}
                      <a 
                        href="tel:+19174513717" 
                        className="flex items-center space-x-4 text-[#f2f2f2] hover:text-white transition-colors duration-200 group"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <Phone className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <span className="text-base font-['Inter',sans-serif]">+1 (917) 451-3717</span>
                      </a>

                      {/* Email */}
                      <a 
                        href="mailto:hello@brilliondigital.com" 
                        className="flex items-center space-x-4 text-[#f2f2f2] hover:text-white transition-colors duration-200 group"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <Mail className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <span className="text-base font-['Inter',sans-serif]">hello@brilliondigital.com</span>
                      </a>

                      {/* Address */}
                      <div className="flex items-start space-x-4 text-[#f2f2f2]">
                        <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                          <MapPin className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <div className="text-base leading-relaxed font-['Inter',sans-serif]">
                          123 Bay Street, Suite 2500<br />
                          Toronto, ON M5J 2T3 Canada
                        </div>
                      </div>
                    </div>

                    {/* Social Media Icons with Orange Background */}
                    <div className="flex space-x-3 mt-10">
                      <a 
                        href="https://www.facebook.com/brilliondigital/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-all duration-200 group"
                      >
                        <Facebook className="w-5 h-5 text-white" fill="currentColor" strokeWidth={0} />
                      </a>
                      <a 
                        href="https://www.linkedin.com/company/brillion-digital/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-all duration-200 group"
                      >
                        <Linkedin className="w-5 h-5 text-white" fill="currentColor" strokeWidth={0} />
                      </a>
                      <a 
                        href="https://www.instagram.com/digitalbrillion/?utm_source=qr&r=nametag" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-all duration-200 group"
                      >
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a 
                        href="https://twitter.com/RisingmaxInc" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-all duration-200 group"
                      >
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right White Section for Form */}
                  <div className="bg-white p-8 lg:p-10">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4 font-['Poppins',sans-serif]">
                      Send us a message
                    </h3>
                    <p className="text-gray-600 mb-6 font-['Inter',sans-serif]">
                      We're here to help and answer any questions you might have.
                    </p>
                    
                    {submitStatus === 'success' && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</p>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 font-medium">Error sending message. Please try again.</p>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 font-['Inter',sans-serif]"
                          required
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 font-['Inter',sans-serif]"
                          required
                        />
                      </div>
                      <div>
                        <textarea 
                          rows={4} 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Your Message"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none font-['Inter',sans-serif]"
                          required
                        ></textarea>
                      </div>
                      <AuthButton 
                        type="submit"
                        requireAuth={true}
                        disabled={isSubmitting}
                        className="w-full bg-[#f97316] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 font-['Poppins',sans-serif] disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <BrillionLoader size="sm" theme="minimal" className="mr-2" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </AuthButton>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to account for overlapping card */}
        <div className="bg-gray-50 pb-32"></div>

        {/* Map Section */}
        <section className="relative pt-16 pb-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-blue-900">Find </span>
                <span className="text-orange-500">Us</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visit our office or get in touch with our team. We're located in the heart of Wilmington, Delaware.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Map Container */}
              <div className="relative h-[500px] bg-gray-200">
                {/* Using Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.1234567890123!2d-75.5457890!3d39.7459470!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3%20Germay%20Dr%2C%20Wilmington%2C%20DE%2019804!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>

                {/* Overlay Card */}
                <div className="absolute top-8 left-8 bg-white rounded-xl shadow-xl p-6 max-w-sm z-10">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Brillion Digital HQ</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-600">
                        123 Bay Street, Suite 2500<br />
                        Toronto, ON M5J 2T3<br />
                        Canada
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-500" />
                      <a href="tel:+19174513717" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                        +1 (917) 451-3717
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-500" />
                      <a href="mailto:hello@brilliondigital.com" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                        hello@brilliondigital.com
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-blue-900 mb-2">Business Hours</h4>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Get Directions
                  </button>
                </div>

                {/* Map Marker Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                  <div className="relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <MapPin className="w-6 h-6 text-white" fill="white" />
                    </div>
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Visit Our Office</h3>
                <p className="text-sm text-gray-600">
                  Located in the business district of Wilmington, with easy access to major highways and public transportation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Schedule a Meeting</h3>
                <p className="text-sm text-gray-600">
                  Book an appointment with our team for in-person consultations and project discussions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">
                  Our support team is available round the clock to assist you with any queries or urgent requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

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