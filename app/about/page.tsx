"use client"

import PageLayout from "@/components/PageLayout";
import { Users, Heart, Award, Target, Sparkles, ArrowRight, CheckCircle, User, Code, Palette, Shield, Rocket } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We're passionate about creating digital experiences that make a real difference."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We work as an extension of your team."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We never settle for good enough. Excellence is our standard."
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "Every decision we make is focused on delivering measurable results."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      icon: User,
      bio: "15+ years of digital transformation experience"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      icon: Code,
      bio: "Former Google engineer, AI and cloud expert"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      icon: Palette,
      bio: "Award-winning UX designer and creative strategist"
    },
    {
      name: "David Kim",
      role: "Security Lead",
      icon: Shield,
      bio: "Cybersecurity specialist with enterprise experience"
    }
  ];

  const milestones = [
    { year: "2019", title: "Company Founded", desc: "Started with a vision to transform businesses" },
    { year: "2020", title: "First 100 Clients", desc: "Reached our first major milestone" },
    { year: "2022", title: "Global Expansion", desc: "Expanded operations internationally" },
    { year: "2024", title: "500+ Projects", desc: "Delivered over 500 successful projects" }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20">
          <div className="relative w-full py-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/about-hero.jpg" 
                alt="About Us Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-600/90"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
                  <Users className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm font-semibold text-white">About Us</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
                  We Are Digital Innovators
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  At Brillion Digital, we believe technology should be a catalyst for growth, innovation, and positive change. We're not just a digital agency—we're your partners in transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  <span className="text-gray-900">Our </span>
                  <span className="text-gray-900">
                    Mission
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower businesses with cutting-edge digital solutions that drive growth, enhance efficiency, and create meaningful connections with customers. We're committed to turning your digital vision into reality.
                </p>
                <div className="space-y-3">
                  {[
                    "Transform businesses through technology",
                    "Deliver exceptional user experiences",
                    "Build lasting partnerships with our clients",
                    "Drive innovation in everything we do"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-2xl shadow-gray-200/20">
                  <div className="text-center space-y-6">
                    <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">5+ Years of Excellence</h3>
                    <p className="text-gray-600">Helping businesses thrive in the digital age</p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">500+</div>
                        <div className="text-sm text-gray-500">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">50+</div>
                        <div className="text-sm text-gray-500">Team Members</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                <span className="text-gray-900">Our </span>
                <span className="text-gray-900">
                  Values
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative inline-flex p-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                <span className="text-gray-900">Meet Our </span>
                <span className="text-gray-900">
                  Team
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                The brilliant minds behind our success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group text-center"
                >
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                      <member.icon className="w-12 h-12 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                <span className="text-gray-900">Our </span>
                <span className="text-gray-900">
                  Journey
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-center">
                      <div className="inline-flex px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-bold mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-500"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 pb-24">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl p-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Let's work together to transform your business and achieve extraordinary results.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-xl">
                <span className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </button>
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