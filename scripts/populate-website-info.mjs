import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, deleteDoc, getDocs } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7-b_2Y5E7sxhE8TH7ZSkWlWzEE8GzHm8",
  authDomain: "brillion-digital-website.firebaseapp.com",
  projectId: "brillion-digital-website",
  storageBucket: "brillion-digital-website.firebasestorage.app",
  messagingSenderId: "1039019867063",
  appId: "1:1039019867063:web:2dc4de67fc6c1be5ac8e92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Website information data for chatbot
const websiteInfoData = [
  // COMPANY INFORMATION
  {
    section: 'company',
    key: 'about_company',
    title: 'About Brillion Digital',
    description: 'Leading digital transformation company',
    keywords: ['about', 'company', 'who are you', 'what is brillion', 'brillion digital', 'your company', 'business', 'who', 'information', 'details'],
    content: 'Brillion Digital is a leading digital transformation company with 500+ projects delivered across 50+ enterprise clients. We\'re Microsoft Gold Partners with expertise in cloud, security, and modern workplace solutions.',
    order: 1,
    active: true
  },
  {
    section: 'company',
    key: 'location',
    title: 'Location & Coverage',
    description: 'Based in Canada, serving globally',
    keywords: ['location', 'where', 'address', 'office', 'based', 'country', 'canada', 'place', 'where located'],
    content: 'We\'re based in Canada and serve clients across North America with remote and on-site services available. We work with businesses globally through our remote capabilities.',
    order: 2,
    active: true
  },
  {
    section: 'company',
    key: 'certifications',
    title: 'Certifications & Partnerships',
    description: 'Industry-leading certifications and partnerships',
    keywords: ['certification', 'certified', 'partner', 'gold partner', 'microsoft partner', 'qualification', 'accredited', 'iso', 'soc', 'compliance'],
    content: 'We hold ISO 27001, SOC 2 Type II, PIPEDA compliance, and Microsoft Gold Partner status. Our team is certified across Microsoft 365, Dynamics 365, Azure, AWS, and Google Cloud platforms.',
    order: 3,
    active: true
  },
  {
    section: 'company',
    key: 'experience',
    title: 'Experience & Track Record',
    description: '15+ years of digital transformation expertise',
    keywords: ['experience', 'years', 'how long', 'expertise', 'background', 'history', 'established', 'founded', 'track record'],
    content: '15+ years of digital transformation experience with a 99.9% success rate and 24/7 support available. We have successfully completed over 500 projects for enterprise clients.',
    order: 4,
    active: true
  },
  {
    section: 'company',
    key: 'industries',
    title: 'Industries We Serve',
    description: 'Specialized solutions across various sectors',
    keywords: ['industries', 'sectors', 'clients', 'who do you serve', 'business types', 'healthcare', 'finance', 'retail', 'manufacturing', 'education', 'technology'],
    content: 'We serve Healthcare, Financial Services, Manufacturing, Retail, Technology, and Education sectors with specialized solutions for each industry. Our expertise spans across various business domains.',
    order: 5,
    active: true
  },
  {
    section: 'company',
    key: 'team',
    title: 'Our Expert Team',
    description: 'Certified professionals and specialists',
    keywords: ['team', 'staff', 'employees', 'experts', 'people', 'who works', 'specialists', 'consultants', 'developers'],
    content: 'Our team includes certified experts in cloud architecture, cybersecurity, data analytics, software development, and digital strategy. We have specialists for every technology need.',
    order: 6,
    active: true
  },

  // SERVICES INFORMATION
  {
    section: 'services',
    key: 'digital_transformation',
    title: 'Digital Transformation',
    description: 'Comprehensive digital transformation services',
    keywords: ['digital transformation', 'digitalization', 'digital change', 'modernization', 'digital upgrade', 'business transformation', 'digital solution', 'transform business', 'modernize', 'upgrade system'],
    content: 'We offer comprehensive digital transformation services including Microsoft 365 implementation, cloud migration, process automation, and digital strategy consulting. Our Gold Partner status with Microsoft ensures expert implementation.',
    order: 1,
    active: true
  },
  {
    section: 'services',
    key: 'microsoft_365',
    title: 'Microsoft 365 & Office Solutions',
    description: 'Microsoft 365 implementation and support',
    keywords: ['microsoft 365', 'office 365', 'm365', 'o365', 'microsoft office', 'office', 'teams', 'sharepoint', 'onedrive', 'exchange', 'outlook', 'word', 'excel', 'powerpoint', 'microsoft app', 'office app'],
    content: 'As Microsoft Gold Partners, we provide Microsoft 365 implementation, migration, training, and support. This includes Teams, SharePoint, OneDrive, Exchange Online, and security features. We handle everything from setup to user training.',
    order: 2,
    active: true
  },
  {
    section: 'services',
    key: 'dynamics_365',
    title: 'Dynamics 365 & CRM/ERP',
    description: 'Dynamics 365 implementation and customization',
    keywords: ['dynamics 365', 'dynamics', 'd365', 'crm', 'erp', 'customer management', 'sales management', 'finance system', 'supply chain', 'customer service', 'business app', 'microsoft dynamics'],
    content: 'We specialize in Dynamics 365 implementation for Sales, Customer Service, Finance, and Supply Chain. Our certified experts handle new deployments and upgrades from legacy systems with guaranteed cost savings.',
    order: 3,
    active: true
  },
  {
    section: 'services',
    key: 'cloud_services',
    title: 'Cloud Services & Migration',
    description: 'Cloud migration and management services',
    keywords: ['cloud services', 'cloud', 'aws', 'azure', 'google cloud', 'cloud migration', 'cloud setup', 'cloud computing', 'move to cloud', 'cloud infrastructure', 'hosting', 'server', 'cloud platform'],
    content: 'Our cloud services include AWS, Azure, and Google Cloud migration, infrastructure setup, security configuration, and ongoing management. We\'re certified partners with all major cloud providers and ensure smooth transitions.',
    order: 4,
    active: true
  },
  {
    section: 'services',
    key: 'cybersecurity',
    title: 'Cybersecurity & Protection',
    description: 'Comprehensive cybersecurity solutions',
    keywords: ['cybersecurity', 'cyber security', 'security', 'protect', 'protection', 'secure', 'safety', 'hacking', 'hack', 'virus', 'malware', 'threat', 'firewall', 'antivirus', 'data protection', 'information security'],
    content: 'We provide comprehensive cybersecurity solutions including security assessments, threat detection, compliance (SOC 2, ISO 27001), incident response, and ongoing security monitoring. We protect your business from all cyber threats.',
    order: 5,
    active: true
  },
  {
    section: 'services',
    key: 'data_analytics',
    title: 'Data Analytics & Intelligence',
    description: 'Advanced data analytics and business intelligence',
    keywords: ['data analytics', 'data analysis', 'analytics', 'data', 'reporting', 'dashboard', 'business intelligence', 'bi', 'data visualization', 'charts', 'graphs', 'insights', 'data science', 'big data'],
    content: 'Our data analytics services include business intelligence implementation, data visualization, predictive analytics, AI-powered insights, and custom dashboard development. We turn your data into actionable insights.',
    order: 6,
    active: true
  },
  {
    section: 'services',
    key: 'software_development',
    title: 'Software Development',
    description: 'Custom software solutions and applications',
    keywords: ['software development', 'app development', 'web development', 'mobile app', 'website', 'custom software', 'programming', 'coding', 'development', 'build app', 'create app', 'software', 'application'],
    content: 'We build custom web applications, mobile apps, and enterprise software using modern technologies like Next.js, React, Node.js, and cloud-native architectures. We create solutions tailored to your business needs.',
    order: 7,
    active: true
  },
  {
    section: 'services',
    key: 'digital_platforms',
    title: 'Digital Platforms & Systems',
    description: 'Platform solutions including CRM, ERP, CMS',
    keywords: ['digital platforms', 'platform', 'cms', 'content management', 'ecommerce', 'e-commerce', 'online store', 'web platform', 'business platform', 'system integration', 'api'],
    content: 'We develop and implement digital platforms including CRM, ERP, content management systems, e-commerce platforms, and custom business applications. We create platforms that grow with your business.',
    order: 8,
    active: true
  },
  {
    section: 'services',
    key: 'managed_it',
    title: 'Managed IT Services',
    description: '24/7 IT support and infrastructure management',
    keywords: ['managed it services', 'it support', 'it services', 'tech support', 'computer support', 'help desk', 'it management', 'maintenance', 'monitoring', 'backup', 'it outsourcing'],
    content: '24/7 IT support, infrastructure monitoring, help desk services, system maintenance, backup management, and proactive IT management for businesses of all sizes. We keep your technology running smoothly.',
    order: 9,
    active: true
  },
  {
    section: 'services',
    key: 'ai_solutions',
    title: 'AI & Smart Solutions',
    description: 'Artificial intelligence and automation solutions',
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'automation', 'smart solutions', 'intelligent', 'ai solutions', 'chatbot', 'auto', 'smart', 'robot', 'ai implementation'],
    content: 'AI implementation including machine learning models, process automation, intelligent document processing, chatbots, and AI-powered analytics solutions. We bring artificial intelligence to your business processes.',
    order: 10,
    active: true
  },

  // CONTACT & BUSINESS INFORMATION
  {
    section: 'contact',
    key: 'pricing',
    title: 'Pricing & Quotes',
    description: 'Project-based pricing and consultation',
    keywords: ['price', 'pricing', 'cost', 'how much', 'expensive', 'cheap', 'budget', 'money', 'fees', 'charges', 'rate', 'quote'],
    content: 'Our pricing is project-based and tailored to your specific needs. Contact us for a free consultation and custom quote based on your requirements. We offer competitive rates with transparent pricing.',
    order: 1,
    active: true
  },
  {
    section: 'contact',
    key: 'consultation',
    title: 'Free Consultation',
    description: 'Free initial consultations and meetings',
    keywords: ['consultation', 'meeting', 'talk', 'discuss', 'call', 'contact', 'get in touch', 'speak', 'consult', 'appointment', 'demo'],
    content: 'We offer free initial consultations to discuss your needs and provide recommendations. You can book a consultation through our contact page or call us directly. No obligation, just expert advice.',
    order: 2,
    active: true
  },
  {
    section: 'contact',
    key: 'support',
    title: '24/7 Support & Assistance',
    description: 'Round-the-clock support and customer service',
    keywords: ['support', 'help', 'assistance', 'service', 'maintenance', 'help desk', 'customer service', 'technical support', '24/7'],
    content: 'We provide 24/7 support for all managed services and ongoing support for all implementations. Response times vary by service level, but we\'re always here to help when you need us.',
    order: 3,
    active: true
  },
  {
    section: 'contact',
    key: 'timeline',
    title: 'Project Timelines',
    description: 'Implementation timelines and delivery schedules',
    keywords: ['timeline', 'how long', 'duration', 'time', 'when', 'schedule', 'delivery', 'completion', 'deadline', 'project time'],
    content: 'Project timelines vary based on scope. Typical implementations range from 2-12 weeks depending on complexity. We provide detailed timelines during the consultation phase with clear milestones.',
    order: 4,
    active: true
  },
  {
    section: 'contact',
    key: 'getting_started',
    title: 'Getting Started',
    description: 'How to begin your digital transformation journey',
    keywords: ['start', 'begin', 'getting started', 'how to start', 'first step', 'onboard', 'kick off', 'initiate'],
    content: 'Getting started is easy! Contact us for a free consultation where we\'ll discuss your needs, assess your current situation, and recommend the best solutions. We\'ll guide you through every step of the process.',
    order: 5,
    active: true
  },

  // FEATURES & CAPABILITIES
  {
    section: 'features',
    key: 'core_stats',
    title: 'Core Business Metrics',
    description: 'Key performance indicators and achievements',
    keywords: ['stats', 'numbers', 'achievements', 'metrics', 'performance'],
    content: '500+ projects delivered, 50+ enterprise clients, 99.9% uptime guarantee, 24/7 support availability, 15+ years of experience.',
    order: 1,
    active: true
  },
  {
    section: 'features',
    key: 'key_differentiators',
    title: 'What Sets Us Apart',
    description: 'Unique value propositions and competitive advantages',
    keywords: ['different', 'unique', 'advantage', 'better', 'why choose', 'benefits'],
    content: 'Microsoft Gold Partner status, multi-cloud expertise (AWS, Azure, Google Cloud), industry-specific solutions, proven track record with enterprise clients, comprehensive security compliance.',
    order: 2,
    active: true
  }
];

async function clearExistingData() {
  try {
    const snapshot = await getDocs(collection(db, 'website_info'));
    const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    console.log(`✅ Cleared ${snapshot.docs.length} existing website info records`);
  } catch (error) {
    console.error('Error clearing existing data:', error);
  }
}

async function populateWebsiteInfo() {
  try {
    // Clear existing data first
    await clearExistingData();
    
    // Add new website info
    console.log('📝 Adding website information...');
    let successCount = 0;
    
    for (const info of websiteInfoData) {
      try {
        await addDoc(collection(db, 'website_info'), {
          ...info,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        successCount++;
        console.log(`✅ Added: ${info.title}`);
      } catch (error) {
        console.error(`❌ Failed to add: ${info.title}`, error);
      }
    }
    
    console.log(`\n🎉 Successfully populated ${successCount}/${websiteInfoData.length} website info records`);
    console.log('📚 Website information is now ready for the chatbot to use!');
    
  } catch (error) {
    console.error('❌ Error populating website info:', error);
  }
}

// Run the population script
populateWebsiteInfo();