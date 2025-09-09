import { ArrowRight, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">

      {/* Main Footer */}
      <div className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Column 1 */}
            <div className="space-y-6">
              <ul className="space-y-4">
                <li>
                  <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/work" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Work
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="/insights" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Insights
                  </a>
                </li>
              </ul>
              
              <div className="pt-8">
                <button className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  <span className="mr-2">▷</span>
                  Cookie Consent
                </button>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <ul className="space-y-4">
                <li>
                  <a href="/careers" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/find-advisor" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Find an Advisor
                  </a>
                </li>
                <li>
                  <a href="/find-office" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Find an Office
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Stay in touch */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-xl font-bold text-white">Stay in touch!</h3>
              <p className="text-gray-300 text-lg">
                Get the scoop on new insights, stories, events, and more.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="/newsletter" 
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Subscribe to our newsletter
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                
                <a 
                  href="/linkedin" 
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Find us on LinkedIn
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>© Copyright 2025 BRILLION Digital. All Rights Reserved</span>
                <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  Privacy Policy
                </a>
                <span>|</span>
                <a href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
              
              {/* Brillion Digital Logo */}
              <div className="flex items-center">
                <img 
                  src="/brillion-logo-high-quality.png" 
                  alt="BRILLION Digital" 
                  className="h-10 w-auto"
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