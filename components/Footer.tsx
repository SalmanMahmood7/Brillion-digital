import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Digital Advisory",
        "Data & Analytics", 
        "Application Development",
        "Cloud Services"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Work",
        "Contact",
        "Careers"
      ]
    }
  ];

  return (
    <footer className="relative bg-white text-gray-900 border-t border-gray-100 z-20">
      {/* Solid background overlay to block any animated backgrounds */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="flex flex-col">
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    BRILLION
                  </span>
                  <span className="text-[10px] font-medium text-gray-500 -mt-1 tracking-[0.2em]">
                    DIGITAL
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Digital transformation and technology consulting services.
              </p>
              <div className="flex space-x-3">
                <button className="h-9 w-9 rounded-lg border border-slate-600/50 text-gray-400 hover:bg-slate-700/30 hover:text-white hover:border-slate-500/70 transition-all duration-200 flex items-center justify-center">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="h-9 w-9 rounded-lg border border-slate-600/50 text-gray-400 hover:bg-slate-700/30 hover:text-white hover:border-slate-500/70 transition-all duration-200 flex items-center justify-center">
                  <Twitter className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Links Grid */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-900">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>1-800-BRILLION</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@brilliondigital.ca</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Canada</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-700/50" />

        {/* Bottom Footer */}
        <div className="py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© 2024 BRILLION Digital. All rights reserved.</span>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;