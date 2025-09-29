#!/usr/bin/env node

/**
 * Direct Service Population Script
 * Populates Firestore with all 9 services and their complete content
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, Timestamp } from 'firebase/firestore';

// Firebase configuration - using actual environment variables
const firebaseConfig = {
  apiKey: "AIzaSyDGuY1jWV470qgKYHFZ3yoGaF6tiY9BPPQ",
  authDomain: "brilliongroup-ca.firebaseapp.com", 
  projectId: "brilliongroup-ca",
  storageBucket: "brilliongroup-ca.firebasestorage.app",
  messagingSenderId: "738403545427",
  appId: "1:738403545427:web:c30dcdb127475b9c7af1a6"
};

// Complete services data with rich content
const completeServices = [
  {
    title: "Digital Advisory",
    description: "Strategic digital transformation consulting to accelerate business growth and innovation.",
    icon: "Brain",
    href: "/services/digital-advisory",
    slug: "digital-advisory",
    order: 1,
    heroTitle: "Strategic Digital Advisory",
    heroDescription: "Strategic digital transformation consulting to accelerate business growth and innovation.",
    backgroundImage: "/digital-advisory-hero-bg.jpg",
    ctaTitle: "Ready to Transform Your Digital Strategy?",
    ctaDescription: "Partner with our experts to accelerate your digital transformation journey",
    ctaBackgroundImage: "/digital-advisory-cta-bg.jpg",
    features: [
      "Digital Strategy Development",
      "Technology Roadmapping", 
      "Change Management",
      "Digital Innovation Consulting"
    ],
    benefits: [
      "Accelerated time-to-market for digital initiatives",
      "Reduced technology risks through expert guidance",
      "Enhanced competitive advantage via digital innovation",
      "Improved ROI on technology investments"
    ],
    approach: {
      title: "Our Strategic Approach",
      points: [
        "Comprehensive digital maturity assessment",
        "Custom strategy development aligned with business goals",
        "Technology roadmap creation and implementation planning",
        "Change management and stakeholder engagement",
        "Continuous monitoring and optimization"
      ]
    },
    color: "blue",
    category: "Consulting"
  },
  {
    title: "Applied Data & Analytics",
    description: "Transform raw data into actionable insights that drive business growth and innovation.",
    icon: "BarChart3",
    href: "/services/applied-data-analytics",
    slug: "applied-data-analytics",
    order: 2,
    heroTitle: "Applied Data & Analytics",
    heroDescription: "Transform your data into competitive advantage with advanced analytics and intelligent insights.",
    backgroundImage: "/data-analytics-hero-bg.jpg",
    ctaTitle: "Ready to Unlock Your Data's Potential?",
    ctaDescription: "Transform your raw data into actionable business intelligence",
    ctaBackgroundImage: "/data-analytics-cta-bg.jpg",
    features: [
      "Advanced Analytics & Modeling",
      "Real-time Data Processing",
      "Predictive Analytics",
      "Business Intelligence Dashboards"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency", 
      "Predictive insights for better planning",
      "Enhanced customer understanding"
    ],
    approach: {
      title: "Our Data-Driven Methodology",
      points: [
        "Data audit and strategy development",
        "Infrastructure setup and data integration",
        "Advanced analytics and modeling",
        "Visualization and reporting implementation",
        "Training and knowledge transfer"
      ]
    },
    color: "purple",
    category: "Analytics"
  },
  {
    title: "Software Development",
    description: "Custom software solutions built with modern technologies to solve unique business challenges.",
    icon: "Code",
    href: "/services/software-development",
    slug: "software-development",
    order: 3,
    heroTitle: "Custom Software Development",
    heroDescription: "Build powerful, scalable applications that drive your business forward with cutting-edge technology.",
    backgroundImage: "/software-hero-bg.jpg",
    ctaTitle: "Ready to Build Something Amazing?",
    ctaDescription: "Transform your ideas into powerful software solutions",
    ctaBackgroundImage: "/software-development-cta-bg.jpg",
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "API Development & Integration", 
      "Legacy System Modernization"
    ],
    benefits: [
      "Tailored solutions for your specific needs",
      "Scalable architecture for future growth",
      "Modern technologies for optimal performance",
      "Seamless integration with existing systems"
    ],
    approach: {
      title: "Our Development Process",
      points: [
        "Requirements analysis and technical planning",
        "Agile development with iterative feedback",
        "Rigorous testing and quality assurance",
        "Deployment and production support",
        "Ongoing maintenance and optimization"
      ]
    },
    color: "green",
    category: "Development"
  },
  {
    title: "Digital Platforms",
    description: "Comprehensive platform solutions including ERP, CRM, CMS, and custom enterprise systems.",
    icon: "Globe",
    href: "/services/digital-platforms",
    slug: "digital-platforms",
    order: 4,
    heroTitle: "Digital Platform Solutions",
    heroDescription: "Comprehensive platform solutions that streamline operations and accelerate growth.",
    backgroundImage: "/digital-platforms-hero-bg-new.jpg",
    ctaTitle: "Ready to Optimize Your Digital Platforms?",
    ctaDescription: "Discover how our platform expertise can transform your operations",
    ctaBackgroundImage: "/digital-platforms-cta-bg.jpg",
    features: [
      "ERP Implementation & Optimization",
      "CRM Solutions",
      "Content Management Systems",
      "E-commerce Platforms"
    ],
    benefits: [
      "Streamlined business processes",
      "Enhanced customer relationships",
      "Improved content management",
      "Increased operational efficiency"
    ],
    approach: {
      title: "Platform Implementation Strategy",
      points: [
        "Business requirements analysis",
        "Platform selection and customization",
        "Data migration and integration",
        "User training and change management",
        "Ongoing support and optimization"
      ]
    },
    servicesData: [
      {
        id: "erp",
        title: "Enterprise Resource Planning (ERP)",
        description: "Streamline your business operations with integrated ERP solutions that provide real-time visibility.",
        image: "/digital-platforms-erp.jpg",
        features: ["Financial Management", "Supply Chain", "Human Resources", "Reporting & Analytics"]
      },
      {
        id: "crm",
        title: "Customer Relationship Management (CRM)",
        description: "Build stronger customer relationships and drive sales growth with comprehensive CRM solutions.",
        image: "/digital-platforms-crm.jpg",
        features: ["Sales Pipeline", "Customer Data", "Marketing Automation", "Service Management"]
      },
      {
        id: "cms",
        title: "Content Management Systems (CMS)", 
        description: "Manage your digital content efficiently with user-friendly CMS solutions.",
        image: "/digital-platforms-cms.jpg",
        features: ["Content Creation", "Multi-channel Publishing", "SEO Optimization", "User Management"]
      },
      {
        id: "consulting",
        title: "Platform Consulting & Strategy",
        description: "Expert guidance to help you select and implement the right digital platform for your business.",
        image: "/digital-platforms-consulting.jpg",
        features: ["Platform Selection", "Implementation Planning", "Change Management", "ROI Optimization"]
      }
    ],
    color: "orange",
    category: "Platforms"
  },
  {
    title: "Cyber Security",
    description: "Comprehensive cybersecurity solutions to protect your digital assets and ensure compliance.",
    icon: "Shield",
    href: "/services/cyber-security",
    slug: "cyber-security",
    order: 5,
    heroTitle: "Comprehensive Cyber Security",
    heroDescription: "Protect your digital assets with advanced cybersecurity solutions and threat protection.",
    backgroundImage: "/cyber-hero-bg.jpg",
    ctaTitle: "Secure Your Digital Future",
    ctaDescription: "Protect your organization with comprehensive cybersecurity solutions",
    ctaBackgroundImage: "/cyber-cta-bg.jpg",
    features: [
      "Security Assessment & Auditing",
      "Threat Detection & Response",
      "Compliance Management",
      "Security Architecture Design"
    ],
    benefits: [
      "Proactive threat protection",
      "Regulatory compliance assurance",
      "Reduced security risks",
      "Enhanced data protection"
    ],
    approach: {
      title: "Our Security Framework",
      points: [
        "Comprehensive security assessment",
        "Risk analysis and threat modeling",
        "Security architecture design", 
        "Implementation and monitoring",
        "Continuous improvement and updates"
      ]
    },
    color: "red",
    category: "Security"
  },
  {
    title: "Cloud Services",
    description: "Cloud migration, optimization, and managed services to accelerate your digital transformation.",
    icon: "Cloud",
    href: "/services/cloud-services",
    slug: "cloud-services",
    order: 6,
    heroTitle: "Cloud Services & Solutions",
    heroDescription: "Accelerate your digital transformation with comprehensive cloud solutions and expert guidance.",
    backgroundImage: "/cloud-hero-bg.jpg",
    ctaTitle: "Ready to Move to the Cloud?",
    ctaDescription: "Accelerate your digital transformation with our cloud expertise",
    ctaBackgroundImage: "/cloud-cta-bg.jpg",
    features: [
      "Cloud Migration & Strategy",
      "Infrastructure Optimization",
      "Managed Cloud Services",
      "Multi-cloud Solutions"
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability and flexibility",
      "Enhanced security and compliance",
      "Accelerated innovation"
    ],
    approach: {
      title: "Cloud Transformation Process",
      points: [
        "Cloud readiness assessment",
        "Migration strategy and planning",
        "Phased migration execution",
        "Optimization and monitoring",
        "Ongoing managed services"
      ]
    },
    color: "blue",
    category: "Cloud"
  },
  {
    title: "Managed IT Services",
    description: "Comprehensive IT infrastructure management and support to keep your business running smoothly.",
    icon: "Settings",
    href: "/services/managed-it-services",
    slug: "managed-it-services",
    order: 7,
    heroTitle: "Managed IT Services",
    heroDescription: "Comprehensive IT infrastructure management and support to keep your business running smoothly.",
    backgroundImage: "/managed-it.jpg",
    ctaTitle: "Ready to Optimize Your IT Operations?",
    ctaDescription: "Let us manage your IT so you can focus on your business",
    features: [
      "24/7 IT Support & Monitoring",
      "Infrastructure Management",
      "Network Security",
      "Help Desk Services"
    ],
    benefits: [
      "Reduced downtime and increased productivity",
      "Predictable IT costs",
      "Access to expert IT professionals",
      "Enhanced security and compliance"
    ],
    approach: {
      title: "Our Service Delivery Model",
      points: [
        "IT infrastructure assessment",
        "Service level agreement establishment",
        "Proactive monitoring and maintenance",
        "Incident response and resolution",
        "Continuous improvement and optimization"
      ]
    },
    servicesData: [
      {
        id: "monitoring",
        title: "24/7 IT Monitoring & Support",
        description: "Proactive monitoring and immediate response to keep your systems running optimally.",
        image: "/managed-it.jpg",
        features: ["Real-time Monitoring", "Incident Response", "Performance Optimization", "Preventive Maintenance"]
      },
      {
        id: "infrastructure", 
        title: "Infrastructure Management",
        description: "Complete management of your IT infrastructure including servers, networks, and storage.",
        image: "/managed-it.jpg",
        features: ["Server Management", "Network Administration", "Storage Solutions", "Backup & Recovery"]
      },
      {
        id: "security",
        title: "IT Security Management", 
        description: "Comprehensive security management to protect your business from cyber threats.",
        image: "/managed-it.jpg",
        features: ["Security Monitoring", "Threat Detection", "Patch Management", "Compliance Reporting"]
      },
      {
        id: "helpdesk",
        title: "Help Desk Services",
        description: "Responsive help desk support for all your IT needs and user support requirements.",
        image: "/managed-it.jpg",
        features: ["User Support", "Ticket Management", "Remote Assistance", "Knowledge Base"]
      },
      {
        id: "backup",
        title: "Backup & Disaster Recovery",
        description: "Reliable backup solutions and disaster recovery planning to protect your critical data.",
        image: "/managed-it.jpg",
        features: ["Automated Backups", "Disaster Recovery", "Business Continuity", "Data Protection"]
      },
      {
        id: "consultation",
        title: "IT Strategy Consultation",
        description: "Strategic IT consulting to align technology with your business objectives.",
        image: "/managed-it.jpg",
        features: ["IT Planning", "Technology Roadmap", "Vendor Management", "Cost Optimization"]
      }
    ],
    color: "gray",
    category: "IT Services"
  },
  {
    title: "Dynamics 365 & Microsoft Solutions",
    description: "Microsoft Dynamics 365 implementation, customization, and support to streamline your operations.",
    icon: "Globe",
    href: "/services/dynamics-365-microsoft",
    slug: "dynamics-365-microsoft",
    order: 8,
    heroTitle: "Dynamics 365 & Microsoft Solutions",
    heroDescription: "Transform your business with Microsoft's comprehensive suite of cloud-based business applications.",
    backgroundImage: "/dynamics-hero-bg.jpg",
    ctaTitle: "Transform Your Business with Microsoft",
    ctaDescription: "Discover how Dynamics 365 can revolutionize your operations",
    ctaBackgroundImage: "/dynamics-cta-bg.jpg",
    features: [
      "Dynamics 365 Implementation",
      "Business Central Solutions",
      "Power Platform Development",
      "Microsoft Cloud Integration"
    ],
    benefits: [
      "Unified business processes",
      "Enhanced productivity and collaboration",
      "Real-time insights and analytics",
      "Scalable cloud-based solutions"
    ],
    approach: {
      title: "Microsoft Solution Methodology",
      points: [
        "Business process analysis and requirements gathering",
        "Solution design and customization planning",
        "Phased implementation and user training",
        "Data migration and system integration",
        "Ongoing support and optimization"
      ]
    },
    servicesData: [
      {
        id: "d365-sales",
        title: "Dynamics 365 Sales",
        description: "Accelerate sales performance with intelligent sales automation and customer insights.",
        image: "/365.png",
        features: ["Sales Pipeline Management", "Customer Insights", "Sales Forecasting", "Mobile Sales Tools"]
      },
      {
        id: "d365-service",
        title: "Dynamics 365 Customer Service",
        description: "Deliver exceptional customer service with AI-powered tools and omnichannel support.",
        image: "/365.png", 
        features: ["Case Management", "Knowledge Base", "Omnichannel Support", "Service Analytics"]
      },
      {
        id: "power-platform",
        title: "Microsoft Power Platform",
        description: "Build custom solutions with Power Apps, automate workflows with Power Automate.",
        image: "/Power-Platform.webp",
        features: ["Power Apps Development", "Power Automate Workflows", "Power BI Analytics", "Power Virtual Agents"]
      },
      {
        id: "business-central",
        title: "Dynamics 365 Business Central",
        description: "Complete ERP solution for small to medium businesses with comprehensive business management.",
        image: "/365.png",
        features: ["Financial Management", "Supply Chain", "Project Management", "Manufacturing"]
      }
    ],
    color: "blue",
    category: "Microsoft"
  },
  {
    title: "AI & Smart Solutions",
    description: "Artificial intelligence and machine learning solutions to automate processes and unlock insights.",
    icon: "Brain",
    href: "/services/ai-smart-solutions", 
    slug: "ai-smart-solutions",
    order: 9,
    heroTitle: "AI & Smart Solutions",
    heroDescription: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.",
    backgroundImage: "/ai-solutions-background.jpg",
    ctaTitle: "Ready to Embrace AI Innovation?",
    ctaDescription: "Transform your business with intelligent automation and AI-powered insights",
    ctaBackgroundImage: "/ai-smart-solutions-cta-bg.jpg",
    features: [
      "Machine Learning & AI Development",
      "Process Automation", 
      "Intelligent Analytics",
      "AI Strategy & Consulting"
    ],
    benefits: [
      "Automated business processes",
      "Enhanced decision-making with AI insights",
      "Improved operational efficiency",
      "Competitive advantage through innovation"
    ],
    approach: {
      title: "AI Implementation Framework",
      points: [
        "AI readiness assessment and strategy development",
        "Use case identification and prioritization",
        "Proof of concept development and testing",
        "Full-scale implementation and integration",
        "Continuous monitoring and optimization"
      ]
    },
    servicesData: [
      {
        id: "ai-consulting",
        title: "AI Strategy & Consulting",
        description: "Expert guidance to develop and implement AI strategies that align with your business objectives.",
        image: "/ai-consulting.jpg",
        features: ["AI Readiness Assessment", "Strategy Development", "ROI Analysis", "Change Management"]
      },
      {
        id: "machine-learning",
        title: "Machine Learning Solutions",
        description: "Custom ML models and algorithms to solve complex business problems and predict outcomes.",
        image: "/ai-machine-learning.jpg",
        features: ["Predictive Analytics", "Custom ML Models", "Data Processing", "Algorithm Development"]
      },
      {
        id: "automation",
        title: "Intelligent Process Automation",
        description: "Automate repetitive tasks and workflows with AI-powered automation solutions.",
        image: "/ai-automation.jpg",
        features: ["Robotic Process Automation", "Workflow Optimization", "Task Automation", "Business Rules Engine"]
      },
      {
        id: "data-analysis",
        title: "AI-Powered Data Analysis",
        description: "Extract insights from large datasets using advanced AI and machine learning techniques.",
        image: "/ai-data-analysis.jpg",
        features: ["Natural Language Processing", "Pattern Recognition", "Anomaly Detection", "Sentiment Analysis"]
      },
      {
        id: "computer-vision",
        title: "Computer Vision Solutions",
        description: "Implement computer vision capabilities for image recognition, analysis, and automation.",
        image: "/ai-machine-learning.jpg",
        features: ["Image Recognition", "Object Detection", "Quality Control", "Visual Inspection"]
      },
      {
        id: "ai-integration",
        title: "AI Integration & Deployment",
        description: "Seamlessly integrate AI solutions into your existing systems and workflows.",
        image: "/ai-consulting.jpg",
        features: ["System Integration", "API Development", "Cloud Deployment", "Performance Monitoring"]
      }
    ],
    color: "purple",
    category: "AI & Innovation"
  }
];

async function populateServices() {
  try {
    console.log('🚀 Initializing Firebase...');
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log('✅ Firebase initialized');
    
    // Clear existing services
    console.log('🗑️  Clearing existing services...');
    const servicesRef = collection(db, 'services');
    const existingSnapshot = await getDocs(servicesRef);
    
    const deletePromises = existingSnapshot.docs.map(serviceDoc => 
      deleteDoc(doc(db, 'services', serviceDoc.id))
    );
    
    await Promise.all(deletePromises);
    console.log(`✅ Cleared ${existingSnapshot.docs.length} existing services`);
    
    // Add all new services with complete content
    console.log('📝 Adding services with complete content...');
    
    for (let i = 0; i < completeServices.length; i++) {
      const service = completeServices[i];
      console.log(`   Adding ${i + 1}/9: ${service.title}`);
      
      const serviceData = {
        ...service,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      
      await addDoc(servicesRef, serviceData);
    }
    
    console.log('🎉 Migration completed successfully!');
    console.log(`   ✓ Added ${completeServices.length} services to Firestore`);
    console.log('   ✓ All services include rich content from individual pages');
    console.log('   ✓ Features, benefits, approach, and servicesData populated');
    console.log('   ✓ Ready to remove forced fallback from services page');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  }
}

// Run the population
populateServices().then(() => {
  console.log('🏁 Script completed successfully');
  process.exit(0);
}).catch(error => {
  console.error('💥 Script failed:', error);
  process.exit(1);
});