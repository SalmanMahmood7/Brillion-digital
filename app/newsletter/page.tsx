"use client"

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Mail, Send, CheckCircle, Newspaper, Bell, Shield, TrendingUp, Zap, Users, Award } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Check if email already exists
      const q = query(collection(db, "newsletter_subscribers"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError("This email is already subscribed to our newsletter.");
        setIsLoading(false);
        return;
      }

      // Add new subscriber
      await addDoc(collection(db, "newsletter_subscribers"), {
        email,
        subscribedAt: new Date().toISOString(),
        status: "active"
      });

      setIsSubscribed(true);
      setEmail("");
    } catch (err) {
      console.error("Error subscribing:", err);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Stay ahead with the latest trends in digital transformation and technology"
    },
    {
      icon: Zap,
      title: "Expert Tips",
      description: "Exclusive tips and best practices from our team of experts"
    },
    {
      icon: Bell,
      title: "Product Updates",
      description: "Be the first to know about our new services and features"
    },
    {
      icon: Users,
      title: "Success Stories",
      description: "Learn from real-world case studies and client success stories"
    },
    {
      icon: Award,
      title: "Exclusive Offers",
      description: "Get special discounts and early access to our premium resources"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is safe with us. Unsubscribe anytime with one click"
    }
  ];

  const testimonials = [
    {
      quote: "The insights from Brillion's newsletter have been invaluable for our digital strategy.",
      author: "Sarah Chen",
      role: "CTO, TechStart Inc"
    },
    {
      quote: "Always look forward to their monthly insights. Practical and actionable content.",
      author: "Shahzaib Kamal",
      role: "Director of Innovation"
    },
    {
      quote: "One of the few newsletters I actually read. Quality content every time.",
      author: "Salman Mahmood",
      role: "Product Manager"
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        
        {/* Hero Section */}
        <section className="relative bg-slate-900 min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Newsletter Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Stay Ahead of the <span className="text-[#f97316]">Digital Curve</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join 10,000+ professionals who receive our monthly insights on digital transformation, technology trends, and business innovation.
              </p>

              {/* Subscription Form */}
              <div className="max-w-2xl mx-auto mt-12">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent text-lg"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-8 py-4 bg-[#f97316] text-white rounded-full font-semibold hover:bg-[#ea580c] transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                      >
                        {isLoading ? (
                          <span>Subscribing...</span>
                        ) : (
                          <>
                            Subscribe Now
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                    {error && (
                      <p className="text-red-400 text-sm mt-2">{error}</p>
                    )}
                    <p className="text-gray-400 text-sm">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                ) : (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 backdrop-blur-sm">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="w-16 h-16 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Community!</h3>
                    <p className="text-gray-300">
                      Thank you for subscribing. You'll receive our next newsletter in your inbox soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                What You'll Get
              </h2>
              <p className="text-lg text-gray-600">
                Our newsletter delivers value straight to your inbox
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-[#f97316]/10 rounded-xl group-hover:bg-[#f97316]/20 transition-colors">
                        <benefit.icon className="w-6 h-6 text-[#f97316]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Recent Newsletter Topics
              </h2>
              <p className="text-lg text-gray-600">
                Here's a taste of what we cover in our newsletters
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <Mail className="w-5 h-5 text-[#f97316]" />
                  <span className="text-sm text-gray-500">December 2024 Edition</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  AI in 2025: What Businesses Need to Know
                </h3>
                <p className="text-gray-600 mb-4">
                  Exploring the latest AI trends and how businesses can leverage them for competitive advantage...
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">AI/ML</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Strategy</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Innovation</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <Mail className="w-5 h-5 text-[#f97316]" />
                  <span className="text-sm text-gray-500">November 2024 Edition</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Cloud Security Best Practices
                </h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to securing your cloud infrastructure in an evolving threat landscape...
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Security</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Cloud</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">DevOps</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                What Our Subscribers Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-blue-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-[#f97316]">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Stay Informed?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our newsletter and never miss an important update
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-white text-[#f97316] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
            >
              Subscribe Now
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}