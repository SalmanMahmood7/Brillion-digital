"use client"

import PageLayout from "@/components/PageLayout"
import { Lock, CheckCircle, Shield, Eye, ArrowRight, Phone, Search, Database, Cloud, Key, Clock, Users, Globe } from "lucide-react"
import { useState } from "react"
import ServiceDetailModal from "@/components/ServiceDetailModal"

export default function CyberSecurity() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;
  const slidesToShow = 3;
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const servicesData = {
    threatDetection: {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms continuously monitor your digital infrastructure",
      fullDescription: "Our AI-powered threat detection system uses cutting-edge machine learning algorithms and behavioral analysis to identify and neutralize threats in real-time. With a 99.9% accuracy rate, our system continuously monitors your entire digital infrastructure, learning from patterns and anomalies to provide proactive protection against both known and emerging threats.",
      features: [
        {
          title: "Real-Time Monitoring",
          description: "24/7 continuous surveillance of your network, endpoints, and cloud infrastructure",
          icon: Eye
        },
        {
          title: "Machine Learning Analysis",
          description: "Advanced AI algorithms that learn and adapt to new threat patterns",
          icon: Shield
        },
        {
          title: "Behavioral Analytics",
          description: "Monitor user and entity behavior to detect insider threats and anomalies",
          icon: Search
        },
        {
          title: "Automated Response",
          description: "Instant threat mitigation and containment without human intervention",
          icon: Clock
        }
      ],
      benefits: [
        {
          title: "99.9% Accuracy",
          description: "Industry-leading threat detection accuracy",
          metric: "99.9%"
        },
        {
          title: "Response Time",
          description: "Average threat response time",
          metric: "< 1 second"
        },
        {
          title: "Threat Prevention",
          description: "Threats blocked monthly",
          metric: "10M+"
        }
      ],
      process: [
        {
          step: 1,
          title: "Infrastructure Assessment",
          description: "Comprehensive evaluation of your current security posture and infrastructure",
          duration: "1-2 days"
        },
        {
          step: 2,
          title: "AI Model Deployment",
          description: "Deploy and configure machine learning models tailored to your environment",
          duration: "2-3 days"
        },
        {
          step: 3,
          title: "Integration & Testing",
          description: "Integrate with existing systems and perform comprehensive testing",
          duration: "3-5 days"
        },
        {
          step: 4,
          title: "24/7 Monitoring",
          description: "Begin continuous monitoring and threat detection services",
          duration: "Ongoing"
        }
      ],
      technologies: ["TensorFlow", "PyTorch", "Apache Kafka", "Elasticsearch", "Splunk", "SIEM", "SOAR", "Machine Learning"],
      caseStudy: {
        client: "Healthcare Provider with 500+ locations",
        challenge: "Multiple security incidents and compliance concerns across distributed infrastructure",
        solution: "Implemented AI-powered threat detection with centralized monitoring and automated response",
        results: [
          "Reduced security incidents by 95%",
          "Achieved SOC 2 Type II compliance",
          "Decreased incident response time from hours to seconds",
          "Saved $2.3M annually in potential breach costs"
        ]
      },
      deliverables: [
        "AI-powered threat detection system",
        "24/7 Security Operations Center (SOC) monitoring",
        "Real-time dashboard and reporting",
        "Incident response playbooks",
        "Monthly security assessments",
        "Compliance reporting"
      ]
    },
    penetrationTesting: {
      title: "Penetration Testing",
      description: "Advanced vulnerability assessment and ethical hacking services",
      fullDescription: "Our comprehensive penetration testing services simulate real-world cyber attacks to identify vulnerabilities in your systems before malicious actors do. Our certified ethical hackers use the latest tools and techniques to test your network, web applications, and mobile applications, providing detailed reports and remediation recommendations.",
      features: [
        {
          title: "Network Penetration Testing",
          description: "Comprehensive testing of internal and external network infrastructure",
          icon: Search
        },
        {
          title: "Web Application Testing",
          description: "OWASP Top 10 and custom vulnerability assessment for web applications",
          icon: Globe
        },
        {
          title: "Mobile App Security",
          description: "Security testing for iOS and Android mobile applications",
          icon: Phone
        },
        {
          title: "Social Engineering Tests",
          description: "Phishing simulations and social engineering awareness testing",
          icon: Users
        }
      ],
      benefits: [
        {
          title: "Vulnerability Reduction",
          description: "Average reduction in critical vulnerabilities",
          metric: "85%"
        },
        {
          title: "Compliance Score",
          description: "Average improvement in security compliance",
          metric: "+40%"
        },
        {
          title: "ROI",
          description: "Return on investment within first year",
          metric: "300%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Planning & Reconnaissance",
          description: "Define scope, gather intelligence, and plan testing approach",
          duration: "2-3 days"
        },
        {
          step: 2,
          title: "Vulnerability Scanning",
          description: "Automated and manual vulnerability identification",
          duration: "3-5 days"
        },
        {
          step: 3,
          title: "Exploitation",
          description: "Attempt to exploit identified vulnerabilities safely",
          duration: "5-7 days"
        },
        {
          step: 4,
          title: "Reporting & Remediation",
          description: "Detailed report with findings and remediation recommendations",
          duration: "2-3 days"
        }
      ],
      technologies: ["Nessus", "Burp Suite", "Metasploit", "Nmap", "OWASP ZAP", "Kali Linux", "Wireshark", "Aircrack-ng"],
      caseStudy: {
        client: "Financial Services Company",
        challenge: "Required comprehensive security assessment for regulatory compliance",
        solution: "Conducted full-scope penetration testing across all digital assets",
        results: [
          "Identified 47 critical vulnerabilities",
          "Prevented potential $5M+ in breach costs",
          "Achieved PCI DSS compliance",
          "Improved overall security posture by 65%"
        ]
      },
      deliverables: [
        "Executive summary report",
        "Detailed technical findings",
        "Risk assessment and prioritization",
        "Remediation recommendations",
        "Proof-of-concept exploits",
        "Compliance mapping"
      ]
    },
    cloudSecurity: {
      title: "Cloud Security",
      description: "Comprehensive cloud infrastructure protection and compliance",
      fullDescription: "Secure your cloud infrastructure with our comprehensive cloud security solutions. We provide end-to-end protection for AWS, Azure, and Google Cloud platforms, ensuring your data and applications are protected with industry-leading security measures and compliance frameworks.",
      features: [
        {
          title: "Multi-Cloud Security",
          description: "Unified security across AWS, Azure, and Google Cloud platforms",
          icon: Cloud
        },
        {
          title: "Container Security",
          description: "Kubernetes and Docker container security scanning and monitoring",
          icon: Shield
        },
        {
          title: "Compliance Management",
          description: "Automated compliance monitoring for SOC 2, HIPAA, PCI DSS",
          icon: CheckCircle
        },
        {
          title: "Identity & Access Management",
          description: "Zero-trust architecture and advanced IAM implementation",
          icon: Key
        }
      ],
      benefits: [
        {
          title: "Security Improvement",
          description: "Average improvement in cloud security posture",
          metric: "+75%"
        },
        {
          title: "Compliance Rate",
          description: "Maintained compliance across all frameworks",
          metric: "100%"
        },
        {
          title: "Cost Reduction",
          description: "Reduction in security-related cloud costs",
          metric: "-30%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Cloud Security Assessment",
          description: "Comprehensive evaluation of current cloud security configuration",
          duration: "1 week"
        },
        {
          step: 2,
          title: "Security Architecture Design",
          description: "Design secure cloud architecture aligned with best practices",
          duration: "1-2 weeks"
        },
        {
          step: 3,
          title: "Implementation & Migration",
          description: "Implement security controls and migrate workloads securely",
          duration: "2-4 weeks"
        },
        {
          step: 4,
          title: "Monitoring & Maintenance",
          description: "Continuous monitoring and security maintenance",
          duration: "Ongoing"
        }
      ],
      technologies: ["AWS Security Hub", "Azure Security Center", "Google Cloud Security", "Terraform", "Kubernetes", "Docker", "HashiCorp Vault"],
      caseStudy: {
        client: "E-commerce Platform (10M+ users)",
        challenge: "Needed to secure multi-cloud infrastructure while maintaining performance",
        solution: "Implemented comprehensive cloud security with zero-trust architecture",
        results: [
          "Zero security incidents post-implementation",
          "Reduced compliance audit time by 80%",
          "Improved application performance by 25%",
          "Saved $500K annually in security tools"
        ]
      },
      deliverables: [
        "Cloud security architecture",
        "Security controls implementation",
        "Compliance reporting dashboard",
        "Incident response procedures",
        "Security monitoring setup",
        "Documentation and training"
      ]
    },
    identityManagement: {
      title: "Identity Management",
      description: "Advanced authentication and access control solutions",
      fullDescription: "Implement robust identity and access management (IAM) solutions that provide secure, seamless access to your organization's resources. Our zero-trust approach ensures that every user and device is verified and authorized before accessing sensitive data and applications.",
      features: [
        {
          title: "Single Sign-On (SSO)",
          description: "Unified access to all applications with a single set of credentials",
          icon: Key
        },
        {
          title: "Multi-Factor Authentication",
          description: "Advanced MFA with biometric and hardware token support",
          icon: Shield
        },
        {
          title: "Privileged Access Management",
          description: "Secure management of admin and privileged user accounts",
          icon: Lock
        },
        {
          title: "Identity Governance",
          description: "Automated user provisioning, de-provisioning, and access reviews",
          icon: Users
        }
      ],
      benefits: [
        {
          title: "Security Incidents",
          description: "Reduction in identity-related security incidents",
          metric: "-90%"
        },
        {
          title: "User Productivity",
          description: "Improvement in user login experience",
          metric: "+50%"
        },
        {
          title: "Compliance",
          description: "Automated compliance for identity governance",
          metric: "100%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Identity Assessment",
          description: "Evaluate current identity infrastructure and access patterns",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Architecture Planning",
          description: "Design comprehensive IAM architecture and integration plan",
          duration: "1 week"
        },
        {
          step: 3,
          title: "Implementation",
          description: "Deploy and configure IAM solutions with pilot testing",
          duration: "3-6 weeks"
        },
        {
          step: 4,
          title: "Full Rollout",
          description: "Complete deployment with user training and support",
          duration: "2-4 weeks"
        }
      ],
      technologies: ["Okta", "Azure Active Directory", "AWS IAM", "SailPoint", "CyberArk", "Ping Identity", "ForgeRock"],
      caseStudy: {
        client: "Manufacturing Company (5,000+ employees)",
        challenge: "Multiple security breaches due to weak access controls and password management",
        solution: "Implemented comprehensive IAM solution with zero-trust architecture",
        results: [
          "Eliminated password-related breaches",
          "Reduced help desk tickets by 60%",
          "Achieved SOX compliance for user access",
          "Improved user satisfaction by 40%"
        ]
      },
      deliverables: [
        "Single Sign-On implementation",
        "Multi-factor authentication setup",
        "Privileged access management",
        "User provisioning automation",
        "Access governance policies",
        "Training and documentation"
      ]
    },
    dataProtection: {
      title: "Data Protection",
      description: "Enterprise-grade encryption and data loss prevention",
      fullDescription: "Protect your organization's most valuable asset - your data - with our comprehensive data protection solutions. Our enterprise-grade encryption, data loss prevention, and backup strategies ensure your data remains secure, compliant, and available when you need it.",
      features: [
        {
          title: "Data Encryption",
          description: "End-to-end encryption for data at rest, in transit, and in use",
          icon: Lock
        },
        {
          title: "Data Loss Prevention",
          description: "Automated detection and prevention of data exfiltration attempts",
          icon: Shield
        },
        {
          title: "Backup & Recovery",
          description: "Automated backup solutions with point-in-time recovery",
          icon: Database
        },
        {
          title: "Data Classification",
          description: "Automated data discovery and classification based on sensitivity",
          icon: Search
        }
      ],
      benefits: [
        {
          title: "Data Breach Prevention",
          description: "Reduction in data breach incidents",
          metric: "-95%"
        },
        {
          title: "Recovery Time",
          description: "Average data recovery time",
          metric: "< 4 hours"
        },
        {
          title: "Compliance Score",
          description: "Data privacy compliance achievement",
          metric: "100%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Data Discovery & Classification",
          description: "Identify and classify all sensitive data across your organization",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Protection Strategy",
          description: "Develop comprehensive data protection and encryption strategy",
          duration: "1 week"
        },
        {
          step: 3,
          title: "Implementation",
          description: "Deploy encryption, DLP, and backup solutions",
          duration: "3-4 weeks"
        },
        {
          step: 4,
          title: "Monitoring & Maintenance",
          description: "Continuous monitoring and policy enforcement",
          duration: "Ongoing"
        }
      ],
      technologies: ["Vera", "Microsoft Purview", "Varonis", "Veeam", "Commvault", "Symantec DLP", "Forcepoint", "AWS KMS"],
      caseStudy: {
        client: "Legal Services Firm",
        challenge: "Required GDPR compliance and protection of sensitive client data",
        solution: "Implemented comprehensive data protection with encryption and DLP",
        results: [
          "Achieved full GDPR compliance",
          "Zero data breaches in 3+ years",
          "Reduced data discovery time by 80%",
          "Automated 95% of compliance reporting"
        ]
      },
      deliverables: [
        "Data classification and mapping",
        "Encryption implementation",
        "Data loss prevention policies",
        "Backup and recovery solution",
        "Compliance monitoring dashboard",
        "Incident response procedures"
      ]
    }
  };

  const handleLearnMore = (serviceKey: string) => {
    setSelectedService(servicesData[serviceKey]);
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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-slate-900 h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Cyber Security Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-slate-900/80"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Cyber Security
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Protect your digital assets with comprehensive security solutions designed to defend against modern cyber threats.
              </p>
              
              <div className="pt-8 grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#f97316] mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Security Monitoring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#f97316] mb-2">99.9%</div>
                  <div className="text-gray-600 text-sm">Threat Detection Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#f97316] mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Protected Businesses</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Security Solutions */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-blue-900">Digital Security </span>
                <span className="text-orange-500">Solutions</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Protect your digital ecosystem with our comprehensive cybersecurity solutions powered by AI and advanced threat intelligence.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              
              <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 hover:border-orange-300 transition-all duration-500 shadow-sm hover:shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">AI-Powered Threat Detection</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Advanced machine learning algorithms continuously monitor your digital infrastructure, identifying and neutralizing threats in real-time with 99.9% accuracy.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full border border-blue-200">24/7 Monitoring</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full border border-green-200">Real-time Response</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full border border-purple-200">AI-Driven</span>
                    </div>
                    <button 
                      onClick={() => handleLearnMore('threatDetection')}
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-1">10M+</div>
                  <div className="text-gray-600 text-sm">Threats Blocked</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-1">&lt; 1s</div>
                  <div className="text-gray-600 text-sm">Response Time</div>
                </div>
              </div>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-orange-600 transition-colors">Penetration Testing</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Advanced vulnerability assessment and ethical hacking services.</p>
                <button 
                  onClick={() => handleLearnMore('penetrationTesting')}
                  className="text-orange-500 hover:text-orange-600 font-semibold text-sm inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-3 h-3" />
                </button>
              </div>

              <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">Cloud Security</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Comprehensive cloud infrastructure protection and compliance.</p>
                <button 
                  onClick={() => handleLearnMore('cloudSecurity')}
                  className="text-blue-500 hover:text-blue-600 font-semibold text-sm inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-3 h-3" />
                </button>
              </div>

              <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Key className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-green-600 transition-colors">Identity Management</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Advanced authentication and access control solutions.</p>
                <button 
                  onClick={() => handleLearnMore('identityManagement')}
                  className="text-green-500 hover:text-green-600 font-semibold text-sm inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-3 h-3" />
                </button>
              </div>

              <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-purple-600 transition-colors">Data Protection</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Enterprise-grade encryption and data loss prevention.</p>
                <button 
                  onClick={() => handleLearnMore('dataProtection')}
                  className="text-purple-500 hover:text-purple-600 font-semibold text-sm inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-3 h-3" />
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* Best Computer Security Services */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h5 className="font-semibold mb-4 uppercase tracking-wider text-sm" style={{ color: '#f97316' }}>Best Computer Security Services</h5>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight max-w-4xl mx-auto mb-6">
                Brillion Digital - Your Trusted Partner For Comprehensive Cyber Security Solutions
              </h2>
            </div>

            {/* Main Content - Side by Side Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              
              {/* Left Side - Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Cybersecurity Protection Services"
                    className="w-full h-[350px] lg:h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-cyan-800/70"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/30">
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">Comprehensive Protection</h3>
                      <p className="text-lg opacity-90">24/7 Security Monitoring & Response</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-6">
                
                {/* Introduction */}
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    At Brillion Digital, we specialize in providing top-tier computer security services to businesses of all sizes. With cyber threats becoming increasingly sophisticated, it's crucial to partner with a company that understands the ever-changing landscape of cybersecurity.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our company is a Managed Security Services Provider (MSSP) that specializes in threat mitigation, compliance, and risk management. We aim to be a reliable partner in safeguarding your digital assets by offering services such as 24x7 monitoring and expert consulting.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Whether you're looking for Cybersecurity services in the USA or beyond, Brillion Digital is here to help. With our comprehensive Cybersecurity service offerings, you can rest assured that your business is in good hands.
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

            {/* Key Features - Below main content */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Eye className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 text-sm">24/7 Monitoring</h4>
                  <p className="text-xs text-gray-600">Continuous threat detection</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 text-sm">Expert Consulting</h4>
                  <p className="text-xs text-gray-600">Professional guidance</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 text-sm">Threat Mitigation</h4>
                  <p className="text-xs text-gray-600">Proactive protection</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Database className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 text-sm">Risk Management</h4>
                  <p className="text-xs text-gray-600">Comprehensive assessment</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Cybersecurity Process Steps Slideshow */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-16">
              <h5 className="text-orange-500 font-semibold mb-4 uppercase tracking-wider text-sm">Industry recognized development process</h5>
              <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Steps to Secure Cybersecurity Services
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
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Assessment and Analysis"
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
                      <h4 className="text-xl font-bold text-blue-900 mb-3">Assessment and Analysis</h4>
                      <p className="text-gray-600 leading-relaxed">Begin with a comprehensive evaluation of your current cybersecurity posture and identify potential vulnerabilities and compliance gaps.</p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Customized Solutions"
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
                      <h4 className="text-xl font-bold text-blue-900 mb-3">Customized Solutions</h4>
                      <p className="text-gray-600 leading-relaxed">Tailor cybersecurity solutions to address specific needs, leveraging industry best practices and cutting-edge technologies for maximum effectiveness.</p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                      <p className="text-gray-600 leading-relaxed">Seamlessly integrate security measures across your organization's infrastructure, ensuring proper configuration and compatibility with existing systems.</p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Continuous Monitoring"
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
                      <h4 className="text-xl font-bold text-blue-900 mb-3">Continuous Monitoring</h4>
                      <p className="text-gray-600 leading-relaxed">Implement 24/7 monitoring services to detect and respond to threats in real-time, proactively defending against cyber attacks.</p>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Regular Updates and Maintenance"
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
                      <h4 className="text-xl font-bold text-blue-900 mb-3">Regular Updates and Maintenance</h4>
                      <p className="text-gray-600 leading-relaxed">Keep security measures up-to-date with regular updates and maintenance to stay compliant and resilient against evolving threats.</p>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Training and Awareness"
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
                      <h4 className="text-xl font-bold text-blue-900 mb-3">Training and Awareness</h4>
                      <p className="text-gray-600 leading-relaxed">Educate employees on cybersecurity best practices to recognize and mitigate threats effectively, fostering a culture of security awareness.</p>
                    </div>
                  </div>

                  {/* Card 7 */}
                  <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Incident Response and Recovery"
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
                      <h4 className="text-xl font-bold text-blue-900 mb-3">Incident Response and Recovery</h4>
                      <p className="text-gray-600 leading-relaxed">Develop and implement incident response plans to contain and mitigate security incidents swiftly, minimizing damage and downtime.</p>
                    </div>
                  </div>

                  {/* Card 8 */}
                  <div className="min-w-[350px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Regular Assessments and Reviews"
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
                      <h4 className="text-xl font-bold text-blue-900 mb-3">Regular Assessments and Reviews</h4>
                      <p className="text-gray-600 leading-relaxed">Conduct periodic assessments and reviews of security infrastructure to identify areas for improvement and ensure ongoing protection.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative z-10 mb-20">
          <div className="relative bg-slate-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Cybersecurity Solutions Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-24">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Secure Your Business?
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Protect your business with our comprehensive cybersecurity solutions and expert security team.
                </p>
                <div className="flex justify-center">
                  <a href="/contact" className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg">
                    Request A Proposal
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
  )
}