"use client"

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import { 
  Globe,
  Users,
  TrendingUp,
  Database,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Building,
  BarChart3,
  Briefcase,
  Cpu,
  Lightbulb,
  ChevronDown,
  ChevronRight,
  DollarSign,
  GraduationCap,
  Utensils,
  Fuel,
  FileText
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Dynamics365Microsoft() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleLearnMore = (serviceKey) => {
    setSelectedService(servicesData[serviceKey]);
    setShowModal(true);
  };

  const servicesData = {
    dynamics365: {
      title: "Microsoft Dynamics 365",
      description: "Comprehensive business applications for modern enterprises",
      fullDescription: "Microsoft Dynamics 365 is a comprehensive suite of business applications that seamlessly integrates CRM and ERP capabilities to transform how organizations operate. As Gold Partners with numerous successful implementations, we provide new deployments and upgrades from legacy systems with guaranteed cost savings on licensing.",
      features: [
        {
          title: "Unified Business Platform",
          description: "Integrated CRM and ERP capabilities in a single cloud-based platform",
          icon: "Database"
        },
        {
          title: "AI-Powered Insights",
          description: "Built-in artificial intelligence for predictive analytics and automation",
          icon: "Brain"
        },
        {
          title: "Flexible Deployment",
          description: "Cloud, on-premises, or hybrid deployment options to fit your needs",
          icon: "Cloud"
        }
      ],
      benefits: [
        {
          title: "Digital Transformation",
          description: "Accelerate your digital journey with modern business applications",
          metric: "40% faster implementation"
        },
        {
          title: "Cost Optimization",
          description: "Reduce total cost of ownership with integrated solutions",
          metric: "30% cost reduction"
        }
      ],
      caseStudy: {
        client: "Global Enterprise Corp",
        challenge: "Legacy systems hindering growth and operational efficiency",
        solution: "Complete Dynamics 365 implementation with custom industry modules",
        result: "Improved operational efficiency by 50% and reduced IT costs by 35%"
      },
    },
    modernWorkplace: {
      title: "Modern Workplace Solutions",
      description: "Transform collaboration with Microsoft 365 and Teams",
      fullDescription: "Create a modern, collaborative workplace with Microsoft 365, Teams, and advanced security solutions. Our comprehensive approach includes implementation, migration, security setup, and user adoption to ensure successful digital workplace transformation.",
      features: [
        {
          title: "Microsoft Teams Implementation",
          description: "Complete Teams deployment with custom configuration and training",
          icon: "Users"
        },
        {
          title: "Enterprise Security",
          description: "Advanced security with Intune, Azure AD, and Information Protection",
          icon: "Shield"
        },
        {
          title: "Hybrid Integration",
          description: "Seamless integration between cloud and on-premises systems",
          icon: "Link"
        }
      ],
      benefits: [
        {
          title: "Enhanced Collaboration",
          description: "Improve team productivity with modern collaboration tools",
          metric: "60% better collaboration"
        },
        {
          title: "Security Enhancement",
          description: "Advanced threat protection and compliance capabilities",
          metric: "90% threat reduction"
        }
      ],
      caseStudy: {
        client: "Professional Services Firm",
        challenge: "Outdated collaboration tools affecting remote work productivity",
        solution: "Microsoft 365 and Teams implementation with advanced security",
        result: "Increased remote productivity by 45% and enhanced security posture"
      },
    },
    businessApplications: {
      title: "Business Applications & Power Platform",
      description: "Custom business applications with Power Platform",
      fullDescription: "Leverage Microsoft Power Platform to build custom business applications, automate processes, and create intelligent workflows. Our expertise in Power Apps, Power Automate, and Power BI enables rapid development of solutions tailored to your specific business needs.",
      features: [
        {
          title: "Power Apps Development",
          description: "Custom business applications with low-code/no-code approach",
          icon: "Smartphone"
        },
        {
          title: "Process Automation",
          description: "Automate workflows and business processes with Power Automate",
          icon: "Settings"
        },
        {
          title: "Advanced Analytics",
          description: "Business intelligence and reporting with Power BI integration",
          icon: "BarChart3"
        }
      ],
      benefits: [
        {
          title: "Rapid Development",
          description: "Accelerate application development with low-code platforms",
          metric: "70% faster development"
        },
        {
          title: "Process Efficiency",
          description: "Automate manual processes and improve operational efficiency",
          metric: "50% process automation"
        }
      ],
      caseStudy: {
        client: "Manufacturing Solutions Ltd",
        challenge: "Manual processes causing delays and inefficiencies",
        solution: "Power Platform implementation with custom apps and automation",
        result: "Reduced manual work by 60% and improved process accuracy by 80%"
      },
    },
    azureMigration: {
      title: "Azure Cloud Migration",
      description: "Seamless migration to Microsoft Azure cloud platform",
      fullDescription: "Comprehensive Azure migration services that move your applications, data, and infrastructure to the cloud with minimal downtime. Our certified Azure architects ensure secure, scalable, and cost-effective cloud solutions tailored to your business requirements.",
      features: [
        {
          title: "Assessment & Planning",
          description: "Comprehensive assessment and migration roadmap development",
          icon: "FileText"
        },
        {
          title: "Secure Migration",
          description: "Enterprise-grade security and compliance during migration",
          icon: "Shield"
        },
        {
          title: "Optimization",
          description: "Post-migration optimization for performance and cost efficiency",
          icon: "Zap"
        }
      ],
      benefits: [
        {
          title: "Scalability",
          description: "Elastic cloud resources that scale with your business needs",
          metric: "Unlimited scalability"
        },
        {
          title: "Cost Savings",
          description: "Reduce infrastructure costs with pay-as-you-use cloud model",
          metric: "40% cost reduction"
        }
      ],
      caseStudy: {
        client: "Financial Services Group",
        challenge: "Legacy infrastructure limiting growth and increasing costs",
        solution: "Complete Azure migration with modernized architecture",
        result: "Reduced infrastructure costs by 45% and improved system performance by 70%"
      },
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative bg-slate-900 py-24">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Microsoft Solutions Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="text-center space-y-6">
              <div className="h-20 mb-6"></div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Dynamics 365 and <br />
                <span className="text-[#f97316]">Microsoft Solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your business with Microsoft's comprehensive ecosystem. From Dynamics 365 to Power Platform, 
                we help you leverage cutting-edge tools to streamline operations, enhance productivity, and drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  asChild
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  <a href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <a 
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                  style={{ backgroundColor: '#f97316' }}
                >
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Transformation Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              
              {/* Left Side - Text */}
              <div className="lg:col-span-1">
                <div className="py-4">
                  <p className="text-base text-blue-900 leading-relaxed">
                    Customize a Microsoft Dynamics 365 solution to suit your organization's needs, integrate disparate systems, leverage cloud technologies, and modernize your entire data infrastructure.
                  </p>
                </div>
              </div>

              {/* Right Side - Two Statistics Cards */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                
                {/* Card 1 - Teal Border */}
                <div className="border-l-4 border-teal-500 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {/* Dollar/Growth Icon */}
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-teal-600">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-blue-700 text-sm leading-relaxed mb-3">
                        Companies that prioritize digital transformation are{" "}
                        <span className="font-bold text-[#f97316] text-lg">26%</span> more profitable than their peers.
                      </div>
                      <div className="text-xs text-blue-600 italic font-medium text-right">
                        - MIT Sloan Management Review
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Teal Border */}
                <div className="border-l-4 border-teal-500 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {/* People/Group Icon */}
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-teal-600">
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99l-2.48 3.32C12.2 12.77 12 13.38 12 14v8h4v-8c0-.55.45-1 1-1h3zm-8.5-10c1.38 0 2.5-1.12 2.5-2.5S12.88 7 11.5 7 9 8.12 9 9.5s1.12 2.5 2.5 2.5zm1.5 1h-2C7.01 13 4 15.99 4 19.5V22h14v-2.5c0-3.51-3.01-6.5-6.5-6.5z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-blue-700 text-sm leading-relaxed mb-3">
                        In a survey of business executives,{" "}
                        <span className="font-bold text-[#f97316] text-lg">56%</span> said that digital transformation is crucial for their survival.
                      </div>
                      <div className="text-xs text-blue-600 italic font-medium text-right">
                        - Gartner
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Brillion Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                  What you <span className="text-[#f97316]">need?</span>
                </h2>
                <p className="text-lg text-gray-600">
                  As the business climate shifts, firms must evolve by modernizing their data infrastructure. By adopting Dynamics 365, your organization leaps forward in data maturity and unearths fresh avenues for business growth.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="/microsoft-gold-partner.png" 
                  alt="Microsoft Gold Partner"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Benefits</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 max-w-4xl mx-auto">
                Implementing Dynamics 365 benefits your business in multiple ways, some of which are:
              </h2>
            </div>

            {/* Benefits Grid - Simple 4 Column */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              
              {/* Benefit 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">Rapid Deployment</h3>
                <p className="text-gray-600 text-sm">
                  Our industry specific IP solutions can be deployed rapidly
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                    <polyline points="16 7 22 7 22 13"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">Cost Reduction</h3>
                <p className="text-gray-600 text-sm">
                  Reduced costs through streamlined operations
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
                    <path d="M18 17V9"/>
                    <path d="M13 17V5"/>
                    <path d="M8 17v-3"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">Better Insights</h3>
                <p className="text-gray-600 text-sm">
                  Better insights for each business function
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                    <path d="M9 18h6"/>
                    <path d="M10 22h4"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Innovation across the organization through data-empowered employees
                </p>
              </div>

            </div>

            {/* Bottom Text */}
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Brillion Digital can help your organization and employees improve productivity by providing out-of-the-box, role-tailored access to information, tasks and business processes by implementing MS Dynamics 365.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Gain deeper insight into critical business data across your organization with relevant performance indicators based on predefined data cubes and flexible analytical tools with seamless integration of BI reporting tools, dashboards and KPIs. We can help customers standardize their business processes within a company across multiple sites or multiple companies within a group.
              </p>
            </div>

          </div>
        </section>

        {/* Your Brillion Digital Journey Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Your Brillion Digital <span className="text-orange-500">Journey</span>
              </h2>
              <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our end-to-end Dynamics 365 implementation services.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
              
              {/* Microsoft Dynamics 365 */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div 
                  className="p-8 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleCard('dynamics365')}
                >
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
                    <h3 className="text-2xl font-bold text-blue-900">Microsoft Dynamics 365</h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-blue-900 transition-transform duration-300 ${expandedCard === 'dynamics365' ? 'rotate-180' : ''}`} />
                </div>
                
                {expandedCard === 'dynamics365' && (
                  <div className="px-8 pb-8 animate-in slide-in-from-top duration-300">
                    <div className="border-l-4 border-orange-500 pl-6 mb-8">
                      <p className="text-blue-700 leading-relaxed">
                        As Gold Partners of Microsoft with numerous successful projects, we offer new implementation of Dynamics 365 as well as upgrade for Dynamics AX users. We also offer discounts on license costs for current and new users of MS Dynamics resulting in guaranteed savings every year.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="flex justify-center">
                        <img 
                          src="https://cdn-klild.nitrocdn.com/RjShGdTszPAToOngbemdLfDKrPhoFcmk/assets/images/optimized/rev-c9bb27a/enovait.io/wp-content/uploads/2023/08/365.png"
                          alt="Microsoft Dynamics 365" 
                          className="h-16 object-contain"
                        />
                      </div>
                      <div className="flex justify-center">
                        <img 
                          src="https://cdn-klild.nitrocdn.com/RjShGdTszPAToOngbemdLfDKrPhoFcmk/assets/images/optimized/rev-c9bb27a/enovait.io/wp-content/uploads/2023/09/Copy-of-MS-gold-partner-logo.png"
                          alt="Microsoft Gold Partner" 
                          className="h-14 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modern Workplace */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div 
                  className="p-8 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleCard('workplace')}
                >
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
                    <h3 className="text-2xl font-bold text-blue-900">Modern Workplace</h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-blue-900 transition-transform duration-300 ${expandedCard === 'workplace' ? 'rotate-180' : ''}`} />
                </div>
                
                {expandedCard === 'workplace' && (
                  <div className="px-8 pb-8 animate-in slide-in-from-top duration-300">
                    <ul className="space-y-4 text-blue-700 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Implement and roll out MS Teams for Collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Enterprise Mobility and Security (MDM, MAM, Intune, AIP and RMS)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Directory Synchronization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Hybrid Deployments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Azure Storage accounts for Backups and Recovery</span>
                      </li>
                    </ul>
                    
                    <div className="mb-6">
                      <img 
                        src="https://cdn-klild.nitrocdn.com/RjShGdTszPAToOngbemdLfDKrPhoFcmk/assets/images/optimized/rev-c9bb27a/enovait.io/wp-content/uploads/2023/09/workplace.jpg"
                        alt="Modern Workplace" 
                        className="w-full h-80 object-contain rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Microsoft Dynamics 365 Business Applications */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div 
                  className="p-8 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleCard('business')}
                >
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-500 rounded-full mr-4"></div>
                    <h3 className="text-2xl font-bold text-blue-900">Business Applications</h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-blue-900 transition-transform duration-300 ${expandedCard === 'business' ? 'rotate-180' : ''}`} />
                </div>
                
                {expandedCard === 'business' && (
                  <div className="px-8 pb-8 animate-in slide-in-from-top duration-300">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="flex justify-center">
                        <img 
                          src="https://cdn-klild.nitrocdn.com/RjShGdTszPAToOngbemdLfDKrPhoFcmk/assets/images/optimized/rev-c9bb27a/enovait.io/wp-content/uploads/2023/08/MD365_PracticeAreas.png"
                          alt="Microsoft Dynamics 365 Practice Areas" 
                          className="w-full h-48 object-contain"
                        />
                      </div>
                      <div className="flex justify-center">
                        <img 
                          src="https://cdn-klild.nitrocdn.com/RjShGdTszPAToOngbemdLfDKrPhoFcmk/assets/images/optimized/rev-c9bb27a/enovait.io/wp-content/uploads/2023/09/Power-Platform.jpg-1.webp"
                          alt="Power Platform" 
                          className="w-full h-48 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Migration to Azure Cloud */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div 
                  className="p-8 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleCard('azure')}
                >
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-teal-500 rounded-full mr-4"></div>
                    <h3 className="text-2xl font-bold text-blue-900">Migration to Azure Cloud</h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-blue-900 transition-transform duration-300 ${expandedCard === 'azure' ? 'rotate-180' : ''}`} />
                </div>
                
                {expandedCard === 'azure' && (
                  <div className="px-8 pb-8 animate-in slide-in-from-top duration-300">
                    <div className="mb-6">
                      <img 
                        src="https://cdn-klild.nitrocdn.com/RjShGdTszPAToOngbemdLfDKrPhoFcmk/assets/images/optimized/rev-c9bb27a/enovait.io/wp-content/uploads/2023/08/azure-migration.jpg"
                        alt="Azure Migration" 
                        className="w-full h-56 object-contain rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </section>

        {/* Industry Solutions Section */}
        <section id="solutions" className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Industry <span className="text-orange-500">Solutions</span>
              </h2>
              <p className="text-xl text-blue-700 max-w-4xl mx-auto">
                Explore our industry specific IP solutions that we've developed over the years
              </p>
            </div>

            {/* Industry Cards - Modern Design */}
            <div className="grid lg:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto">
              
              {/* Property Management */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-orange-200">
                <a 
                  href="/property managment pdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <Building className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">Property Management</h3>
                      <p className="text-orange-600 font-semibold">View Document</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Food Service */}
              <div className="group relative bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-blue-200">
                <a 
                  href="/Restaurant PDF.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <Utensils className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">Food Service</h3>
                      <p className="text-orange-600 font-semibold">View Document</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Education */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-orange-200">
                <a 
                  href="/Education pdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <GraduationCap className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">Education</h3>
                      <p className="text-orange-600 font-semibold">View Document</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Oil & Gas */}
              <div className="group relative bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-blue-200">
                <a 
                  href="/transportation pdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <Fuel className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">Oil & Gas</h3>
                      <p className="text-orange-600 font-semibold">View Document</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Finance */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-orange-200">
                <a 
                  href="/assets managments companies pdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <DollarSign className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">Finance</h3>
                      <p className="text-orange-600 font-semibold">View Document</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Insurance */}
              <div className="group relative bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-blue-200">
                <a 
                  href="/managments companies 2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <FileText className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">Insurance</h3>
                      <p className="text-orange-600 font-semibold">View Document</p>
                    </div>
                  </div>
                </a>
              </div>

            </div>

            {/* Service Benefits Section */}
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                What You'll Get with <span className="text-orange-500">Brillion Digital</span>
              </h3>
              <p className="text-xl text-blue-700">
                Comprehensive support throughout your digital transformation journey
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Diligent Support */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold">Diligent Support</h4>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Our experts assist clients and work closely with all stakeholders by providing the resources necessary to ensure an organization-wide integration of Digital Transformation.
                </p>
              </div>

              {/* Customized Experience */}
              <div className="rounded-3xl p-8 text-white shadow-xl" style={{backgroundColor: '#f97316'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: '#f97316'}}>
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold">Customized Experience</h4>
                </div>
                <p className="text-orange-100 leading-relaxed">
                  Our team reviews your existing digital performance and devises customized ways to enhance it. With the support of our seasoned team, you can trust that your business needs will be addressed accordingly.
                </p>
              </div>

              {/* Efficient E-Solutions */}
              <div className="rounded-3xl p-8 text-white shadow-xl" style={{backgroundColor: '#f97316'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: '#f97316'}}>
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold">Efficient E-Solutions</h4>
                </div>
                <p className="text-orange-100 leading-relaxed">
                  Our team develops efficient Microsoft-based solutions including Microsoft Dynamics 365 plan along with modern infrastructure initiatives to optimize your digital presence.
                </p>
              </div>

              {/* Consistent Service */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold">Consistent Service</h4>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  We provide continuous support and maintenance to ensure that our clients' digital infrastructure remains up-to-date and effective.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" 
              alt="Modern Business Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-orange-600/90"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Text Content */}
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Transform with <span className="text-orange-400">Microsoft?</span>
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Let's discuss how Dynamics 365 and Microsoft solutions can revolutionize your business operations and drive unprecedented growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <a href="/contact">
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    asChild
                    className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <a href="/services">
                      View All Services
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Right Side - Image/Visual Element */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <img 
                    src="/microsoft-gold-partner.png" 
                    alt="Microsoft Gold Partner"
                    className="w-full max-w-md mx-auto opacity-90"
                  />
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-white font-medium">Certified Microsoft Gold Partner</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Service Detail Modal */}
        {selectedService && (
          <ServiceDetailModal
            isOpen={showModal}
            onClose={() => {
              setShowModal(false);
              setSelectedService(null);
            }}
            service={selectedService}
          />
        )}

      </div>
    </PageLayout>
  );
}