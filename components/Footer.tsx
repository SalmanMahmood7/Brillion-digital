"use client"

import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Newspaper, Send, CheckCircle, Instagram } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const Footer = () => {
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
        setError("This email is already subscribed.");
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
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative">

      {/* Main Footer */}
      <div className="bg-white text-[#1e3a8a] border-t border-gray-200">
        <div className="max-w-7xl 1366:max-w-6xl mx-auto px-6 1366:px-8 py-16 1366:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 1366:gap-8 text-center md:text-left">
            {/* Column 1 */}
            <div className="space-y-6">
              <ul className="space-y-4">
                <li>
                  <a href="/services" className="text-[#1e3a8a] hover:text-orange-600 transition-colors duration-200 font-semibold">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/work" className="text-[#1e3a8a] hover:text-orange-600 transition-colors duration-200 font-semibold">
                    Work
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-[#1e3a8a] hover:text-orange-600 transition-colors duration-200 font-semibold">
                    About
                  </a>
                </li>
                <li>
                  <a href="/insights" className="text-[#1e3a8a] hover:text-orange-600 transition-colors duration-200 font-semibold">
                    Insights
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <ul className="space-y-4">
                <li>
                  <a href="/careers" className="text-[#1e3a8a] hover:text-orange-600 transition-colors duration-200 font-semibold">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-[#1e3a8a] hover:text-orange-600 transition-colors duration-200 font-semibold">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-[#1e3a8a] hover:text-orange-600 transition-colors duration-200 font-semibold">
                    Find an Advisor
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-[#1e3a8a] hover:text-orange-600 transition-colors duration-200 font-semibold">
                    Find an Office
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Stay in touch */}
            <div className="md:col-span-2 space-y-6 1366:space-y-4">
              <h3 className="text-2xl md:text-3xl 1366:text-2xl font-bold">
                <span className="text-[#1e3a8a]">Stay in</span> <span className="text-[#f97316]">touch!</span>
              </h3>
              <p className="text-gray-600 text-lg 1366:text-base">
                Get the scoop on new insights, stories, events, and more.
              </p>
              
              <div className="space-y-4 flex flex-col items-center md:items-start">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="w-full max-w-sm space-y-2">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-3 py-2 1366:px-2 1366:py-1.5 text-sm 1366:text-xs rounded-lg bg-gray-50 border border-gray-300 text-[#1e3a8a] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-4 py-2 1366:px-3 1366:py-1.5 text-sm 1366:text-xs bg-[#f97316] text-white rounded-lg font-semibold hover:bg-[#ea580c] transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          "..."
                        ) : (
                          <>
                            <Send className="w-3 h-3 1366:w-2.5 1366:h-2.5 mr-1" />
                            Subscribe
                          </>
                        )}
                      </button>
                    </div>
                    {error && (
                      <p className="text-red-600 text-xs">{error}</p>
                    )}
                    <p className="text-gray-500 text-xs">
                      Get the latest insights and updates.
                    </p>
                  </form>
                ) : (
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Successfully subscribed!</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-4 1366:space-x-3 pt-2">
                  <span className="text-sm 1366:text-xs text-gray-600">Follow us:</span>
                  <a 
                    href="https://www.linkedin.com/company/brillion-digital/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 1366:p-1.5 bg-gray-100 rounded-full hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 1366:w-3 1366:h-3" />
                  </a>
                  <a 
                    href="https://www.facebook.com/brilliondigital/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 1366:p-1.5 bg-gray-100 rounded-full hover:bg-[#1877f2] hover:text-white transition-all duration-300"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4 1366:w-3 1366:h-3" />
                  </a>
                  <a 
                    href="https://www.instagram.com/digitalbrillion/?utm_source=qr&r=nametag" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 1366:p-1.5 bg-gray-100 rounded-full hover:bg-[#e4405f] hover:text-white transition-all duration-300"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4 1366:w-3 1366:h-3" />
                  </a>
                  <a 
                    href="https://twitter.com/brilliondigital" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 1366:p-1.5 bg-gray-100 rounded-full hover:bg-[#1da1f2] hover:text-white transition-all duration-300"
                    title="Twitter"
                  >
                    <Twitter className="w-4 h-4 1366:w-3 1366:h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300">
          <div className="max-w-7xl 1366:max-w-6xl mx-auto px-6 1366:px-8 py-6 1366:py-4">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center space-y-reverse space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-6 1366:space-x-4 text-sm 1366:text-xs text-gray-500 text-center md:text-left">
                <span>© Copyright 2025 BRILLION Digital. All Rights Reserved</span>
                <div className="flex items-center space-x-6 1366:space-x-4">
                  <a href="/privacy-policy" className="text-[#1e3a8a] hover:text-[#1e3a8a] transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <span>|</span>
                  <a href="/terms" className="text-[#1e3a8a] hover:text-[#1e3a8a] transition-colors duration-200">
                    Terms of Service
                  </a>
                </div>
              </div>
              
              {/* Brillion Digital Logo - Shows first on mobile due to flex-col-reverse */}
              <div className="flex items-center">
                <img 
                  src="/brillion-digital-logo.png" 
                  alt="BRILLION Digital" 
                  className="h-10 1366:h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;