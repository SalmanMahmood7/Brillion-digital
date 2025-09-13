"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Settings, CheckCircle, ArrowRight, Monitor, Shield, HeadphonesIcon, Server, Wrench, Clock } from "lucide-react";
import { useState } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";

export default function ManagedITServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = (serviceKey) => {
    setSelectedService(servicesData[serviceKey]);
    setShowModal(true);
  };

  const servicesData = {
    itSupport: {
      title: "24/7 IT Support & Monitoring",
      description: "Round-the-clock IT support and proactive monitoring",
      fullDescription: "Comprehensive 24/7 IT support and monitoring services that ensure your systems are always running optimally. Our expert team provides immediate response to issues, continuous system health monitoring, and proactive maintenance to prevent downtime before it affects your business operations.",
      features: [
        {
          title: "Real-Time Monitoring",
          description: "Continuous 24/7 monitoring of all your IT systems and infrastructure",
          icon: "Monitor"
        },
        {
          title: "Instant Alert System",
          description: "Immediate notifications when issues are detected or performance drops",
          icon: "Bell"
        },
        {
          title: "Remote Resolution", 
          description: "Most issues resolved remotely without disrupting your workflow",
          icon: "Wifi"
        }
      ],
      benefits: [
        {
          title: "99.9% Uptime Guarantee",
          description: "Ensure maximum availability with our proactive monitoring approach",
          metric: "Less than 1 hour downtime per month"
        },
        {
          title: "Faster Response Times",
          description: "Average response time of under 15 minutes for critical issues",
          metric: "15 minute response time"
        }
      ],
      caseStudy: {
        client: "TechCorp Solutions",
        challenge: "Frequent system outages affecting 200+ employees",
        solution: "Implemented 24/7 monitoring with predictive maintenance",
        result: "Reduced downtime by 95% and saved $50,000 annually"
      },
    },
    infrastructure: {
      title: "Infrastructure Management",
      description: "Comprehensive management of IT infrastructure",
      fullDescription: "Complete management of your IT infrastructure including servers, networks, cloud resources, and hardware. We ensure optimal performance, security, and scalability of your entire technology foundation while reducing operational complexity.",
      features: [
        {
          title: "Server Management",
          description: "Full management and optimization of physical and virtual servers",
          icon: "Server"
        },
        {
          title: "Network Optimization",
          description: "Design, implement, and maintain high-performance network infrastructure",
          icon: "Network"
        },
        {
          title: "Cloud Integration",
          description: "Seamless integration and management of cloud resources",
          icon: "Cloud"
        }
      ],
      benefits: [
        {
          title: "Improved Performance",
          description: "Optimized infrastructure delivers up to 40% better performance",
          metric: "40% performance increase"
        },
        {
          title: "Cost Reduction",
          description: "Efficient resource management reduces infrastructure costs",
          metric: "25% cost savings"
        }
      ],
      caseStudy: {
        client: "Global Manufacturing Inc",
        challenge: "Aging infrastructure causing performance bottlenecks",
        solution: "Complete infrastructure modernization with hybrid cloud approach",
        result: "Improved system performance by 60% and reduced costs by 30%"
      },
    },
    cybersecurity: {
      title: "Cybersecurity Management",
      description: "Proactive cybersecurity services to protect your business",
      fullDescription: "Advanced cybersecurity management services that protect your business from evolving threats through proactive monitoring, security protocols, incident response, and comprehensive security assessments to keep your data and operations safe.",
      features: [
        {
          title: "Threat Detection & Response",
          description: "Advanced AI-powered threat detection with rapid incident response",
          icon: "Shield"
        },
        {
          title: "Security Assessment",
          description: "Regular vulnerability assessments and penetration testing",
          icon: "Search"
        },
        {
          title: "Compliance Management",
          description: "Ensure compliance with industry standards and regulations",
          icon: "FileText"
        }
      ],
      benefits: [
        {
          title: "Reduced Security Incidents",
          description: "Proactive approach reduces security incidents by up to 90%",
          metric: "90% reduction in incidents"
        },
        {
          title: "Compliance Assurance",
          description: "Maintain compliance with GDPR, HIPAA, and other regulations",
          metric: "100% compliance rate"
        }
      ],
      caseStudy: {
        client: "Healthcare Partners LLC",
        challenge: "Meeting HIPAA compliance while protecting patient data",
        solution: "Comprehensive cybersecurity framework with 24/7 monitoring",
        result: "Achieved full HIPAA compliance and prevented 15+ potential breaches"
      },
    },
    helpDesk: {
      title: "Help Desk Services",
      description: "Professional help desk support for employees",
      fullDescription: "Professional help desk support services providing technical assistance, troubleshooting, and user support to maintain productivity. Our certified technicians resolve issues quickly while providing excellent customer service to keep your team focused on their core responsibilities.",
      features: [
        {
          title: "Multi-Channel Support",
          description: "Support via phone, email, chat, and remote assistance",
          icon: "Headphones"
        },
        {
          title: "Ticket Management",
          description: "Comprehensive ticketing system for tracking and resolution",
          icon: "Ticket"
        },
        {
          title: "User Training",
          description: "Ongoing user education and software training programs",
          icon: "GraduationCap"
        }
      ],
      benefits: [
        {
          title: "Improved Productivity",
          description: "Quick resolution times keep employees productive",
          metric: "Average 2-hour resolution"
        },
        {
          title: "User Satisfaction",
          description: "High satisfaction rates with professional support",
          metric: "95% satisfaction rate"
        }
      ],
      caseStudy: {
        client: "Creative Agency Pro",
        challenge: "Frequent software issues disrupting creative workflows",
        solution: "Dedicated help desk with specialized creative software expertise",
        result: "Reduced support tickets by 60% and improved employee satisfaction"
      },
    },
    maintenance: {
      title: "Proactive Maintenance",
      description: "Preventive maintenance services to avoid system downtime",
      fullDescription: "Preventive maintenance services to avoid system downtime and extend equipment life. We perform regular updates, patches, optimizations, and hardware maintenance to keep your systems running smoothly and prevent costly emergency repairs.",
      features: [
        {
          title: "Scheduled Maintenance",
          description: "Regular system updates and preventive maintenance routines",
          icon: "Calendar"
        },
        {
          title: "Performance Optimization",
          description: "Continuous optimization to maintain peak system performance",
          icon: "Zap"
        },
        {
          title: "Hardware Health Checks",
          description: "Regular hardware diagnostics to prevent failures",
          icon: "Wrench"
        }
      ],
      benefits: [
        {
          title: "Extended Equipment Life",
          description: "Proper maintenance extends hardware lifespan by up to 50%",
          metric: "50% longer equipment life"
        },
        {
          title: "Reduced Emergency Repairs",
          description: "Preventive approach reduces emergency repairs by 80%",
          metric: "80% fewer emergencies"
        }
      ],
      caseStudy: {
        client: "Manufacturing Excellence Corp",
        challenge: "Frequent equipment failures causing production delays",
        solution: "Comprehensive preventive maintenance program",
        result: "Eliminated unplanned downtime and saved $75,000 in repair costs"
      },
    },
    continuity: {
      title: "Business Continuity Planning",
      description: "Comprehensive disaster recovery and business continuity solutions",
      fullDescription: "Comprehensive disaster recovery and business continuity solutions that ensure your business can continue operating during unexpected events. We develop backup strategies, recovery plans, and continuity procedures to minimize disruption and protect your operations.",
      features: [
        {
          title: "Disaster Recovery Planning",
          description: "Complete disaster recovery strategies and implementation",
          icon: "Shield"
        },
        {
          title: "Automated Backups",
          description: "Reliable automated backup solutions with multiple recovery points",
          icon: "HardDrive"
        },
        {
          title: "Business Impact Analysis",
          description: "Detailed analysis of critical business functions and dependencies",
          icon: "BarChart"
        }
      ],
      benefits: [
        {
          title: "Rapid Recovery",
          description: "Resume operations within hours instead of days or weeks",
          metric: "4-hour recovery time"
        },
        {
          title: "Data Protection",
          description: "99.9% data recovery rate with multiple backup locations",
          metric: "99.9% data recovery"
        }
      ],
      caseStudy: {
        client: "Financial Services Group",
        challenge: "Need for robust disaster recovery to meet regulatory requirements",
        solution: "Multi-tier backup and recovery system with automated failover",
        result: "Achieved RTO of 2 hours and RPO of 15 minutes, exceeding compliance requirements"
      },
    }
  };
  const services = [
    {
      title: "24/7 IT Support & Monitoring",
      description: "Round-the-clock IT support and proactive monitoring to ensure your systems are always running optimally. Our expert team provides immediate response to issues and continuous system health monitoring.",
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format",
      features: ["24/7 Monitoring", "Immediate Response", "System Health Checks"]
    },
    {
      title: "Infrastructure Management",
      description: "Comprehensive management of your IT infrastructure including servers, networks, and cloud resources. We ensure optimal performance, security, and scalability of your technology foundation.",
      icon: Server,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&auto=format",
      features: ["Server Management", "Network Optimization", "Cloud Infrastructure"]
    },
    {
      title: "Cybersecurity Management",
      description: "Proactive cybersecurity services to protect your business from threats. We implement security protocols, monitor for vulnerabilities, and provide incident response to keep your data safe.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&auto=format",
      features: ["Threat Detection", "Security Protocols", "Incident Response"]
    },
    {
      title: "Help Desk Services",
      description: "Professional help desk support for your employees with quick resolution times. We provide technical assistance, troubleshooting, and user support to maintain productivity.",
      icon: HeadphonesIcon,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format",
      features: ["User Support", "Quick Resolution", "Technical Assistance"]
    },
    {
      title: "Proactive Maintenance",
      description: "Preventive maintenance services to avoid system downtime and extend equipment life. We perform regular updates, patches, and optimizations to keep your systems running smoothly.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop&auto=format",
      features: ["Preventive Maintenance", "System Updates", "Performance Optimization"]
    },
    {
      title: "Business Continuity Planning",
      description: "Comprehensive disaster recovery and business continuity solutions. We develop backup strategies, recovery plans, and ensure your business can continue operating during unexpected events.",
      icon: Clock,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop&auto=format",
      features: ["Disaster Recovery", "Backup Solutions", "Continuity Planning"]
    }
  ];

  return (
    <PageLayout>
      <div className="relative min-h-screen bg-white overflow-hidden">

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20">
          <div className="relative w-full py-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/managed-it-hero.jpg" 
                alt="Managed IT Services Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-600/90"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="text-5xl lg:text-6xl font-black text-white">
                  Reliable IT Support
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Comprehensive managed IT services to keep your business running smoothly with expert support and proactive maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-10 py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-200">
                    
                    <div className="flex h-full">
                      {/* Service Image */}
                      <div className="relative w-1/2 min-h-[280px] overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent" />
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="w-1/2 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-blue-900 mb-3 leading-tight">
                            {service.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-4">
                            {service.description}
                          </p>

                          {/* Features */}
                          <div className="space-y-2 mb-6">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                <span className="text-sm text-gray-700 font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button 
                          onClick={() => {
                            const serviceKeys = ['itSupport', 'infrastructure', 'cybersecurity', 'helpDesk', 'maintenance', 'continuity'];
                            handleLearnMore(serviceKeys[index]);
                          }}
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl py-3 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-20">
              <div className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-3xl p-12 text-white">
                <Settings className="h-16 w-16 mx-auto mb-6 text-white" />
                <h3 className="text-3xl font-bold mb-4">Ready for worry-free IT management?</h3>
                <p className="text-lg mb-8 opacity-90">Let our managed IT experts handle your technology so you can focus on your business</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all">
                    Start IT Support
                  </Button>
                  <Button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg">
                    IT Assessment
                  </Button>
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