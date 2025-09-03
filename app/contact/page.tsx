"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Sparkles, ArrowRight, Zap, Target, Rocket, Lightbulb, HandHeart, TrendingUp } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">


        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20">
          <div className="relative w-full py-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/contact-hero.jpg" 
                alt="Contact Us Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-600/90"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
                  <MessageCircle className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm font-semibold text-white">Get In Touch</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
                  Let's Start Something Great
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Ready to transform your business? We're here to help you every step of the way. Let's discuss your project and make your digital vision a reality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="relative z-10 pb-20">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative inline-flex p-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                    {info.action}
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative z-10 pb-24">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Side - Form */}
              <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-2xl shadow-gray-200/20">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        required
                        className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 hover:border-gray-400 transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        required
                        className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 hover:border-gray-400 transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 hover:border-gray-400 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Company
                    </Label>
                    <Input
                      id="company"
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 hover:border-gray-400 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 hover:border-gray-400 transition-colors"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 hover:border-gray-400 transition-colors resize-none"
                      placeholder="Tell us about your project or how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200/50"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Right Side - Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Choose <span className="text-blue-600">Brillion Digital</span>?
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Zap, text: "Lightning-fast response times" },
                      { icon: Target, text: "Tailored solutions for your needs" },
                      { icon: Rocket, text: "Proven track record of success" },
                      { icon: Lightbulb, text: "Innovative approach to challenges" },
                      { icon: HandHeart, text: "Dedicated support throughout your journey" },
                      { icon: TrendingUp, text: "Measurable results and ROI" }
                    ].map((benefit, i) => (
                      <p key={i} className="text-gray-700 flex items-center">
                        <benefit.icon className="w-5 h-5 text-blue-600 mr-3" />
                        <span>{benefit.text}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Quick Response Guarantee</h4>
                  <p className="text-blue-50 mb-4">
                    We respond to all inquiries within 2 hours during business hours.
                  </p>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="text-sm">Monday - Friday, 9:00 AM - 6:00 PM EST</span>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Prefer to Call?</h4>
                  <p className="text-gray-600 mb-4">
                    Speak directly with our team for immediate assistance.
                  </p>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                    <Phone className="w-4 h-4 mr-2 inline" />
                    +1 (555) 123-4567
                  </button>
                </div>
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