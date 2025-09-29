"use client";

import PageLayout from "@/components/PageLayout";
import { CheckCircle, Shield, ArrowRight, Monitor, Server, HeadphonesIcon, Wrench, Clock, Database, Zap, DollarSign, Activity, Plus, Minus, BookOpen, TrendingUp, BarChart, Search, Settings, Eye, Users, Globe, Network, Cloud } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";

export default function ManagedITServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;
  const slidesToShow = 3;
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const servicesData = {
    itSupport: {
      title: "24/7 IT Support & Monitoring",
      description: "Round-the-clock IT support and proactive monitoring",
      fullDescription: "Comprehensive 24/7 IT support and monitoring services that ensure your systems are always running optimally. Our expert team provides immediate response to issues, continuous system health monitoring, and proactive maintenance to prevent downtime before it affects your business operations.",
      features: [
        {
          title: "Real-Time Monitoring",
          description: "Continuous 24/7 monitoring of all your IT systems and infrastructure",
          icon: Monitor
        },
        {
          title: "Instant Alert System",
          description: "Immediate notifications when issues are detected or performance drops",
          icon: Search
        },
        {
          title: "Remote Resolution", 
          description: "Most issues resolved remotely without disrupting your workflow",
          icon: Settings
        },
        {
          title: "Proactive Maintenance",
          description: "Preventive maintenance to avoid issues before they occur",
          icon: Wrench
        }
      ],
      benefits: [
        {
          title: "99.9% Uptime",
          description: "Guaranteed system availability",
          metric: "99.9%"
        },
        {
          title: "Response Time",
          description: "Average issue response time",
          metric: "< 15 min"
        },
        {
          title: "Cost Savings",
          description: "Reduction in IT operational costs",
          metric: "40%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Infrastructure Assessment",
          description: "Comprehensive evaluation of your current IT infrastructure and systems",
          duration: "1-2 days"
        },
        {
          step: 2,
          title: "Monitoring Setup",
          description: "Deploy advanced monitoring tools and configure alert systems",
          duration: "2-3 days"
        },
        {
          step: 3,
          title: "Team Integration",
          description: "Integrate with your existing processes and train your team",
          duration: "1 week"
        },
        {
          step: 4,
          title: "24/7 Support",
          description: "Begin continuous monitoring and support services",
          duration: "Ongoing"
        }
      ],
      technologies: ["PRTG", "SolarWinds", "Nagios", "Splunk", "ServiceNow", "ConnectWise", "ManageEngine", "Zabbix"],
      caseStudy: {
        client: "Manufacturing Company with 300+ employees",
        challenge: "Frequent system downtime causing production delays and lost revenue",
        solution: "Implemented comprehensive 24/7 monitoring with predictive analytics and proactive maintenance",
        results: [
          "Reduced downtime by 95%",
          "Improved system performance by 60%",
          "Decreased IT response time from hours to minutes",
          "Saved $120K annually in productivity losses"
        ]
      },
      deliverables: [
        "24/7 monitoring dashboard",
        "Real-time alert system",
        "Monthly performance reports",
        "Incident response procedures",
        "Proactive maintenance schedules",
        "Documentation and training"
      ]
    },
    infrastructure: {
      title: "Infrastructure Management",
      description: "Comprehensive management of IT infrastructure",
      fullDescription: "Complete management of your IT infrastructure including servers, networks, cloud resources, and hardware. We ensure optimal performance, security, and scalability of your entire technology foundation while reducing operational complexity.",
      features: [
        {
          title: "Server Management",
          description: "Full management and optimization of physical and virtual servers",
          icon: Server
        },
        {
          title: "Network Optimization",
          description: "Design, implement, and maintain high-performance network infrastructure",
          icon: Network
        },
        {
          title: "Cloud Integration",
          description: "Seamless integration and management of cloud resources",
          icon: Cloud
        },
        {
          title: "Performance Monitoring",
          description: "Continuous monitoring and optimization of infrastructure performance",
          icon: Activity
        }
      ],
      benefits: [
        {
          title: "Performance Boost",
          description: "Average improvement in system performance",
          metric: "+60%"
        },
        {
          title: "Cost Reduction",
          description: "Reduction in infrastructure costs",
          metric: "-35%"
        },
        {
          title: "Scalability",
          description: "Faster scaling of infrastructure",
          metric: "3x faster"
        }
      ],
      process: [
        {
          step: 1,
          title: "Infrastructure Audit",
          description: "Complete assessment of current infrastructure and performance bottlenecks",
          duration: "1 week"
        },
        {
          step: 2,
          title: "Architecture Design",
          description: "Design optimized infrastructure architecture for your needs",
          duration: "1-2 weeks"
        },
        {
          step: 3,
          title: "Implementation",
          description: "Deploy and configure infrastructure improvements",
          duration: "2-4 weeks"
        },
        {
          step: 4,
          title: "Ongoing Management",
          description: "Continuous monitoring and optimization of infrastructure",
          duration: "Ongoing"
        }
      ],
      technologies: ["VMware", "Hyper-V", "AWS", "Azure", "Google Cloud", "Cisco", "Dell EMC", "HPE"],
      caseStudy: {
        client: "Technology Startup (100+ employees)",
        challenge: "Rapid growth overwhelming existing infrastructure causing performance issues",
        solution: "Implemented scalable hybrid cloud infrastructure with automated management",
        results: [
          "Improved system performance by 75%",
          "Reduced infrastructure costs by 40%",
          "Enabled 10x faster scaling",
          "Achieved 99.95% uptime"
        ]
      },
      deliverables: [
        "Infrastructure architecture documentation",
        "Performance monitoring dashboard",
        "Scalability planning",
        "Disaster recovery setup",
        "Security implementation",
        "Ongoing management and support"
      ]
    },
    helpDesk: {
      title: "Help Desk Services",
      description: "Professional help desk support for employees",
      fullDescription: "Professional help desk support services providing technical assistance, troubleshooting, and user support to maintain productivity. Our certified technicians resolve issues quickly while providing excellent customer service to keep your team focused on their core responsibilities.",
      features: [
        {
          title: "Multi-Channel Support",
          description: "Support via phone, email, chat, and remote assistance",
          icon: HeadphonesIcon
        },
        {
          title: "Ticket Management",
          description: "Comprehensive ticketing system for tracking and resolution",
          icon: Settings
        },
        {
          title: "User Training",
          description: "Ongoing user education and software training programs",
          icon: Users
        },
        {
          title: "Knowledge Base",
          description: "Comprehensive self-service knowledge base for common issues",
          icon: BookOpen
        }
      ],
      benefits: [
        {
          title: "User Satisfaction",
          description: "Average user satisfaction rate",
          metric: "96%"
        },
        {
          title: "Resolution Time",
          description: "Average ticket resolution time",
          metric: "< 2 hours"
        },
        {
          title: "First Call Resolution",
          description: "Issues resolved on first contact",
          metric: "85%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Support Setup",
          description: "Configure ticketing system and support channels",
          duration: "1 week"
        },
        {
          step: 2,
          title: "Team Training",
          description: "Train your team on support processes and tools",
          duration: "1 week"
        },
        {
          step: 3,
          title: "Knowledge Transfer",
          description: "Document existing processes and create knowledge base",
          duration: "2 weeks"
        },
        {
          step: 4,
          title: "Live Support",
          description: "Begin providing help desk services to your users",
          duration: "Ongoing"
        }
      ],
      technologies: ["ServiceNow", "Zendesk", "Freshdesk", "JIRA Service Management", "TeamViewer", "LogMeIn", "Slack", "Microsoft Teams"],
      caseStudy: {
        client: "Professional Services Firm (200+ employees)",
        challenge: "Internal IT team overwhelmed with support requests affecting productivity",
        solution: "Implemented dedicated help desk with tiered support and self-service options",
        results: [
          "Reduced average resolution time by 70%",
          "Improved user satisfaction by 45%",
          "Decreased IT team workload by 60%",
          "Saved $80K annually in productivity gains"
        ]
      },
      deliverables: [
        "Help desk setup and configuration",
        "Multi-channel support system",
        "Ticketing and tracking system",
        "Knowledge base creation",
        "User training programs",
        "Performance reporting dashboard"
      ]
    },
    maintenance: {
      title: "Proactive Maintenance",
      description: "Preventive maintenance services to avoid system downtime",
      fullDescription: "Preventive maintenance services to avoid system downtime and extend equipment life. We perform regular updates, patches, optimizations, and hardware maintenance to keep your systems running smoothly and prevent costly emergency repairs.",
      features: [
        {
          title: "Scheduled Maintenance",
          description: "Regular system updates and preventive maintenance routines",
          icon: Clock
        },
        {
          title: "Performance Optimization",
          description: "Continuous optimization to maintain peak system performance",
          icon: Zap
        },
        {
          title: "Hardware Health Checks",
          description: "Regular hardware diagnostics to prevent failures",
          icon: Wrench
        },
        {
          title: "Security Updates",
          description: "Timely application of security patches and updates",
          icon: Shield
        }
      ],
      benefits: [
        {
          title: "Equipment Life",
          description: "Extended hardware lifespan",
          metric: "+50%"
        },
        {
          title: "Emergency Repairs",
          description: "Reduction in emergency repairs",
          metric: "-80%"
        },
        {
          title: "System Performance",
          description: "Maintained optimal performance",
          metric: "95%+"
        }
      ],
      process: [
        {
          step: 1,
          title: "Maintenance Planning",
          description: "Create comprehensive maintenance schedules and procedures",
          duration: "1 week"
        },
        {
          step: 2,
          title: "Baseline Assessment",
          description: "Establish performance baselines and health metrics",
          duration: "1 week"
        },
        {
          step: 3,
          title: "Implementation",
          description: "Begin scheduled maintenance and optimization routines",
          duration: "2 weeks"
        },
        {
          step: 4,
          title: "Ongoing Maintenance",
          description: "Continuous preventive maintenance and optimization",
          duration: "Ongoing"
        }
      ],
      technologies: ["Microsoft WSUS", "Red Hat Satellite", "SCCM", "Ansible", "Puppet", "Chef", "Lansweeper", "PDQ Deploy"],
      caseStudy: {
        client: "Healthcare Organization (500+ employees)",
        challenge: "Frequent system failures and outdated software causing compliance issues",
        solution: "Implemented comprehensive preventive maintenance program with automated updates",
        results: [
          "Eliminated unplanned downtime",
          "Achieved 100% software compliance",
          "Reduced hardware replacement costs by 45%",
          "Improved system reliability by 90%"
        ]
      },
      deliverables: [
        "Maintenance schedule documentation",
        "Performance monitoring setup",
        "Automated update systems",
        "Hardware health monitoring",
        "Compliance reporting",
        "Emergency response procedures"
      ]
    },
    continuity: {
      title: "Business Continuity Planning",
      description: "Comprehensive disaster recovery and business continuity solutions",
      fullDescription: "Comprehensive disaster recovery and business continuity solutions that ensure your business can continue operating during unexpected events. We develop backup strategies, recovery plans, and continuity procedures to minimize disruption and protect your operations.",
      features: [
        {
          title: "Disaster Recovery Planning",
          description: "Complete disaster recovery strategies and implementation",
          icon: Shield
        },
        {
          title: "Automated Backups",
          description: "Reliable automated backup solutions with multiple recovery points",
          icon: Database
        },
        {
          title: "Business Impact Analysis",
          description: "Detailed analysis of critical business functions and dependencies",
          icon: BarChart
        },
        {
          title: "Recovery Testing",
          description: "Regular testing and validation of recovery procedures",
          icon: CheckCircle
        }
      ],
      benefits: [
        {
          title: "Recovery Time",
          description: "Average system recovery time",
          metric: "< 4 hours"
        },
        {
          title: "Data Recovery",
          description: "Data recovery success rate",
          metric: "99.9%"
        },
        {
          title: "Business Impact",
          description: "Reduction in business disruption",
          metric: "-90%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Risk Assessment",
          description: "Identify critical systems and potential disaster scenarios",
          duration: "1 week"
        },
        {
          step: 2,
          title: "Recovery Planning",
          description: "Develop comprehensive disaster recovery and continuity plans",
          duration: "2 weeks"
        },
        {
          step: 3,
          title: "Implementation",
          description: "Deploy backup systems and recovery infrastructure",
          duration: "3-4 weeks"
        },
        {
          step: 4,
          title: "Testing & Maintenance",
          description: "Regular testing and updates to ensure plan effectiveness",
          duration: "Ongoing"
        }
      ],
      technologies: ["Veeam", "Commvault", "Acronis", "Zerto", "AWS Backup", "Azure Backup", "Carbonite", "Datto"],
      caseStudy: {
        client: "Financial Services Company (150+ employees)",
        challenge: "Required robust disaster recovery to meet regulatory compliance requirements",
        solution: "Implemented multi-tier backup and recovery system with automated failover",
        results: [
          "Achieved RTO of 2 hours and RPO of 15 minutes",
          "Passed all regulatory compliance audits",
          "Reduced recovery costs by 50%",
          "Eliminated data loss incidents"
        ]
      },
      deliverables: [
        "Disaster recovery plan documentation",
        "Automated backup systems",
        "Recovery testing procedures",
        "Business continuity playbooks",
        "Compliance documentation",
        "Regular recovery drills"
      ]
    }
  };

  const handleLearnMore = (serviceKey: string) => {
    setSelectedService(servicesData[serviceKey as keyof typeof servicesData]);
    setShowModal(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= totalSlides - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev <= 0 ? totalSlides - slidesToShow : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-slate-900 h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img 
              src="/managed-it/hero-background.jpg" 
              alt="Managed IT Services Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-slate-900/80"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Managed IT Services
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive IT support and infrastructure management to keep your business running smoothly with expert monitoring and proactive maintenance.
              </p>
              
              <div className="pt-8 grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#f97316] mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">IT Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#f97316] mb-2">99.9%</div>
                  <div className="text-gray-600 text-sm">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#f97316] mb-2">200+</div>
                  <div className="text-gray-600 text-sm">Businesses Supported</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Background Container for All Sections */}
        <div className="bg-white overflow-hidden">
        
          {/* IT Management Solutions */}
          <section className="relative py-20">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
              <div className="text-center space-y-8 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-blue-900">IT Management </span>
                  <span className="text-orange-500">Solutions</span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Comprehensive managed IT services designed to optimize your technology infrastructure while reducing costs and complexity.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                
                <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 hover:border-orange-300 transition-all duration-500 shadow-sm hover:shadow-lg">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Monitor className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">24/7 IT Support & Monitoring</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Round-the-clock monitoring and support services that ensure your systems are always running optimally, with immediate response to issues and proactive maintenance.
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full border border-blue-200">24/7 Monitoring</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full border border-green-200">Proactive Support</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full border border-purple-200">Remote Resolution</span>
                      </div>
                      <button 
                        onClick={() => handleLearnMore('itSupport')}
                        className="inline-flex items-center px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-900 mb-1">99.9%</div>
                    <div className="text-gray-600 text-sm">Uptime Guarantee</div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-900 mb-1">&lt; 15min</div>
                    <div className="text-gray-600 text-sm">Response Time</div>
                  </div>
                </div>

              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Server className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">Infrastructure Management</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Comprehensive management of servers, networks, and cloud resources for optimal performance.</p>
                  <button 
                    onClick={() => handleLearnMore('infrastructure')}
                    className="text-blue-500 hover:text-blue-600 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <HeadphonesIcon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-green-600 transition-colors">Help Desk Services</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Professional help desk support for employees with quick resolution times and user training.</p>
                  <button 
                    onClick={() => handleLearnMore('helpDesk')}
                    className="text-green-500 hover:text-green-600 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-purple-600 transition-colors">Proactive Maintenance</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Preventive maintenance services to avoid downtime and extend equipment life.</p>
                  <button 
                    onClick={() => handleLearnMore('maintenance')}
                    className="text-purple-500 hover:text-purple-600 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-red-600 transition-colors">Business Continuity</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Comprehensive disaster recovery and business continuity planning solutions.</p>
                  <button 
                    onClick={() => handleLearnMore('continuity')}
                    className="text-red-500 hover:text-red-600 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>

              </div>

            </div>
          </section>

          {/* Best Managed IT Services */}
          <section className="relative py-20">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
              
              {/* Section Header */}
              <div className="text-center mb-16">
                <h5 className="font-semibold mb-4 uppercase tracking-wider text-sm" style={{ color: '#f97316' }}>Best Managed IT Services</h5>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight max-w-4xl mx-auto mb-6">
                  Brillion Digital - Your Trusted Partner For Comprehensive Managed IT Solutions
                </h2>
              </div>

              {/* Main Content - Side by Side Layout */}
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                
                {/* Left Side - Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src="/managed-it/team-working.jpg" 
                      alt="Managed IT Services Team"
                      className="w-full h-[350px] lg:h-[420px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-cyan-800/70"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/30">
                          <Settings className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Complete IT Management</h3>
                        <p className="text-lg opacity-90">24/7 Support & Proactive Monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-6">
                  
                  {/* Introduction */}
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      At Brillion Digital, we provide comprehensive managed IT services that keep your business technology running smoothly while you focus on core operations. Our expert team manages your entire IT infrastructure with proactive monitoring, maintenance, and support.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      As a leading Managed Service Provider (MSP), we specialize in reducing IT complexity, improving system reliability, and optimizing technology investments. Our 24/7 monitoring and rapid response capabilities ensure minimal downtime and maximum productivity.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Whether you're looking for complete IT outsourcing or supplemental support, Brillion Digital delivers scalable solutions tailored to your business needs and budget, helping you achieve better outcomes with technology.
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-4">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
                      Get Started Today
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* IT Management Process Steps Slideshow */}
          <section className="relative py-20">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
              <div className="text-center mb-16">
                <h5 className="text-orange-500 font-semibold mb-4 uppercase tracking-wider text-sm">Industry recognized process</h5>
                <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                  Steps to Professional IT Management
                </h3>
              </div>

              {/* Slideshow Container */}
              <div className="relative">
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
                  style={{ backgroundColor: '#f97316' }}
                >
                  <ArrowRight className="w-5 h-5 rotate-180" style={{ color: 'white' }} />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
                  style={{ backgroundColor: '#f97316' }}
                >
                  <ArrowRight className="w-5 h-5" style={{ color: 'white' }} />
                </button>

                {/* Slider Cards */}
                <div className="overflow-hidden">
                  <div 
                    className="flex gap-8 transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
                    }}
                  >
                    
                    {/* Card 1 */}
                    <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-1.jpg" 
                          alt="IT Assessment and Analysis"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">01</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h4 className="text-xl font-bold text-blue-900 mb-3">IT Assessment and Analysis</h4>
                        <p className="text-gray-600 leading-relaxed">Comprehensive evaluation of your current IT infrastructure, identifying optimization opportunities and potential risks.</p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-2.jpg" 
                          alt="Customized IT Solutions"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">02</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h4 className="text-xl font-bold text-blue-900 mb-3">Customized Solutions Design</h4>
                        <p className="text-gray-600 leading-relaxed">Design tailored IT management solutions that align with your business goals and operational requirements.</p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-3.jpg" 
                          alt="Implementation and Integration"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">03</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h4 className="text-xl font-bold text-blue-900 mb-3">Implementation and Integration</h4>
                        <p className="text-gray-600 leading-relaxed">Seamlessly implement monitoring tools and management systems with minimal disruption to your operations.</p>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-4.jpg" 
                          alt="24/7 Monitoring and Support"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">04</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h4 className="text-xl font-bold text-blue-900 mb-3">24/7 Monitoring and Support</h4>
                        <p className="text-gray-600 leading-relaxed">Begin continuous monitoring with proactive maintenance and rapid response to issues.</p>
                      </div>
                    </div>

                    {/* Card 5 */}
                    <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-5.jpg" 
                          alt="Performance Optimization"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">05</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h4 className="text-xl font-bold text-blue-900 mb-3">Performance Optimization</h4>
                        <p className="text-gray-600 leading-relaxed">Continuously optimize systems for peak performance and implement efficiency improvements.</p>
                      </div>
                    </div>

                    {/* Card 6 */}
                    <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-6.jpg" 
                          alt="User Training and Support"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">06</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h4 className="text-xl font-bold text-blue-900 mb-3">User Training and Support</h4>
                        <p className="text-gray-600 leading-relaxed">Provide comprehensive user training and ongoing help desk support to maximize productivity.</p>
                      </div>
                    </div>

                    {/* Card 7 */}
                    <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-7.jpg" 
                          alt="Backup and Recovery"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">07</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h4 className="text-xl font-bold text-blue-900 mb-3">Backup and Recovery</h4>
                        <p className="text-gray-600 leading-relaxed">Implement robust backup solutions and test recovery procedures to ensure business continuity.</p>
                      </div>
                    </div>

                    {/* Card 8 */}
                    <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-8.jpg" 
                          alt="Strategic IT Planning"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">08</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h4 className="text-xl font-bold text-blue-900 mb-3">Strategic IT Planning</h4>
                        <p className="text-gray-600 leading-relaxed">Develop long-term IT strategies and roadmaps aligned with your business growth objectives.</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-24 relative">
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-64 h-64 bg-blue-900/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-blue-900">IT Management</span>{" "}
                  <span className="text-[#f97316]">Benefits</span>
                </h2>
                <p className="text-xl text-blue-900 max-w-3xl mx-auto leading-relaxed">
                  Discover how our managed IT services provide comprehensive support and peace of mind for your business operations
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Proactive IT Support",
                    description: "24/7 monitoring and proactive maintenance prevent 95% of potential issues before they impact your business operations.",
                    icon: Monitor,
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    title: "Guaranteed Uptime",
                    description: "99.9% uptime guarantee ensures your systems are always available when you need them most, maximizing productivity.",
                    icon: CheckCircle,
                    color: "from-green-500 to-green-600"
                  },
                  {
                    title: "Cost Optimization",
                    description: "Reduce IT costs by up to 40% while improving service quality through efficient resource management and planning.",
                    icon: DollarSign,
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    title: "Expert IT Team",
                    description: "Access to certified IT professionals and specialists without the overhead of hiring full-time staff.",
                    icon: Users,
                    color: "from-yellow-500 to-orange-500"
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Easily scale your IT infrastructure up or down based on business needs without major capital investments.",
                    icon: TrendingUp,
                    color: "from-emerald-500 to-emerald-600"
                  },
                  {
                    title: "Rapid Response",
                    description: "Average response time under 15 minutes for critical issues with immediate escalation procedures.",
                    icon: Zap,
                    color: "from-red-500 to-red-600"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-[#f97316] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-24 relative">
            <div className="absolute inset-0">
              <div className="absolute top-20 right-10 w-64 h-64 bg-[#f97316]/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-blue-900">IT Management</span>{" "}
                  <span className="text-[#f97316]">Success Stories</span>
                </h2>
                <p className="text-xl text-blue-900 max-w-3xl mx-auto leading-relaxed">
                  Real-world examples of how our managed IT services have transformed business operations
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    industry: "Healthcare",
                    company: "Regional Medical Practice",
                    challenge: "Frequent IT issues disrupting patient care with outdated systems and no dedicated IT support staff.",
                    solution: "Implemented comprehensive managed IT services with 24/7 monitoring, EMR system optimization, and HIPAA compliance.",
                    result: "Eliminated system downtime, improved patient satisfaction by 40%, and achieved full HIPAA compliance.",
                    metrics: "Zero Downtime",
                    bgColor: "from-blue-900 to-blue-700",
                    accentColor: "text-blue-900"
                  },
                  {
                    industry: "Manufacturing",
                    company: "Industrial Equipment Manufacturer",
                    challenge: "Legacy systems causing production delays with equipment costing $50K per hour of downtime.",
                    solution: "Modernized IT infrastructure with proactive monitoring, automated backups, and rapid response protocols.",
                    result: "Reduced downtime by 98%, improved production efficiency by 35%, and prevented $2M in potential losses.",
                    metrics: "98% Downtime Reduction",
                    bgColor: "from-[#f97316] to-orange-500",
                    accentColor: "text-[#f97316]"
                  },
                  {
                    industry: "Professional Services",
                    company: "Accounting Firm Network",
                    challenge: "Multiple office locations with inconsistent IT support leading to productivity issues and security concerns.",
                    solution: "Standardized IT infrastructure across all locations with centralized monitoring and unified security protocols.",
                    result: "Improved productivity by 50%, enhanced security posture, and reduced IT costs by 35% across all locations.",
                    metrics: "50% Productivity Gain",
                    bgColor: "from-blue-900 to-blue-700",
                    accentColor: "text-blue-900"
                  }
                ].map((useCase, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                    <div className={`bg-gradient-to-r ${useCase.bgColor} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm font-semibold text-white/80">{useCase.industry}</div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{useCase.metrics}</div>
                            <div className="text-sm text-white/80">Result</div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white">
                          {useCase.company}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Challenge:</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{useCase.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">IT Solution:</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{useCase.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Result:</h4>
                          <p className={`${useCase.accentColor} font-semibold text-sm leading-relaxed`}>
                            {useCase.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#f97316]/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl relative z-10">
              {/* Header */}
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  <span className="text-blue-900">Frequently Asked</span>{" "}
                  <span className="text-[#f97316]">Questions</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  Common questions about managed IT services and how we can help your business
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    question: "What is included in your managed IT services?",
                    answer: "Our managed IT services include 24/7 monitoring and support, network management, cybersecurity protection, data backup and recovery, software updates and patch management, help desk support, IT consulting, and strategic technology planning. We provide comprehensive coverage for all your IT infrastructure needs."
                  },
                  {
                    question: "How quickly can you respond to IT issues?",
                    answer: "We offer tiered response times based on issue severity. Critical issues receive immediate response (within 15 minutes), high-priority issues within 1 hour, medium-priority within 4 hours, and low-priority within 24 hours. Our 24/7 monitoring helps us identify and resolve many issues before they impact your business."
                  },
                  {
                    question: "Do you work with businesses of all sizes?",
                    answer: "Yes, we provide managed IT services for businesses ranging from small startups with 5-10 employees to large enterprises with 1000+ users. Our services are scalable and customizable to meet the specific needs and budget of each organization, regardless of size."
                  },
                  {
                    question: "How do you ensure data security and compliance?",
                    answer: "We implement multi-layered security including firewalls, antivirus protection, encryption, access controls, and regular security audits. We help maintain compliance with industry standards like HIPAA, PCI DSS, and GDPR through proper documentation, monitoring, and security protocols tailored to your industry requirements."
                  },
                  {
                    question: "What are the costs for managed IT services?",
                    answer: "Our pricing is typically based on a per-user, per-month model or a flat monthly fee depending on your needs. Costs vary based on the number of users, complexity of your IT environment, and level of service required. We provide transparent pricing with no hidden fees and can often reduce your overall IT costs by 20-40%."
                  },
                  {
                    question: "Can you work with our existing IT infrastructure?",
                    answer: "Absolutely. We perform a comprehensive assessment of your current IT infrastructure and work with your existing systems, hardware, and software. We identify optimization opportunities and recommend upgrades only when necessary for security, performance, or cost-effectiveness."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#f97316]/20 focus:ring-offset-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 group-hover:text-[#f97316] transition-colors duration-300 pr-4 leading-tight">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 ml-2">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#f97316] to-orange-500 flex items-center justify-center transition-transform duration-300 ${
                            openFAQ === index ? 'rotate-180' : 'rotate-0'
                          }`}>
                            {openFAQ === index ? (
                              <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            ) : (
                              <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </div>

        
        {/* Call to Action Section */}
        <section className="relative z-10 mb-20">
          <div className="relative bg-slate-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/managed-it/cta-background.jpg" 
                alt="Managed IT Services Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-24">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Partner With Leading <span className="text-[#f97316]">Managed IT Services Experts</span> For Your Transformation Journey
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Connect with our managed IT specialists to accelerate your business growth. Get strategic guidance, technology insights, and implementation support from industry leaders in managed IT services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-[#f97316] hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                    Download Our Guide
                  </a>
                  <a href="/work" className="bg-transparent border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                    See Case Studies
                  </a>
                  <a href="/contact" className="bg-transparent border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                    Get a Quote
                  </a>
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