import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy,
  limit,
  where,
  getDoc,
  setDoc,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

// Service data interface (enhanced for rich content)
export interface Service {
  id?: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  order?: number;
  
  // Rich content fields from individual service pages
  slug?: string;
  heroTitle?: string;
  heroDescription?: string;
  backgroundImage?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaBackgroundImage?: string;
  features?: string[];
  benefits?: string[];
  keyPoints?: string[];
  approach?: {
    title: string;
    points: string[];
  };
  servicesData?: {
    id: string;
    title: string;
    description: string;
    image: string;
    features: string[];
  }[];
  
  // Metadata
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
  color?: string;
  category?: string;
}

// Website Information interface
export interface WebsiteInfo {
  id?: string;
  section: 'company' | 'services' | 'contact' | 'features';
  key: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  category?: string;
  order?: number;
  active: boolean;
  color?: string;
  
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// Detailed service feature interface
export interface ServiceFeature {
  id?: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  buttonText?: string;
}

// Detailed service page interface
export interface DetailedService {
  id?: string;
  slug: string; // URL slug like 'digital-advisory'
  title: string;
  heroTitle: string;
  heroDescription: string;
  backgroundImage: string;
  services: ServiceFeature[];
  ctaTitle: string;
  ctaDescription: string;
  ctaIcon: string;
  ctaButton1Text: string;
  ctaButton2Text: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// Dashboard stats interface
export interface DashboardStats {
  totalUsers: number;
  pageViews: number;
  articles: number;
  conversionRate: number;
  changes: {
    users: string;
    pageViews: string;
    articles: string;
    conversionRate: string;
  };
}

// Activity interface
export interface Activity {
  id?: string;
  action: string;
  user: string;
  time: Timestamp;
  type: 'user' | 'content' | 'contact' | 'inquiry';
}

// Page stats interface
export interface PageStats {
  path: string;
  views: number;
  change: string;
}

// Article interface
export interface Article {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  industry: string;
  topic: string;
  author: string;
  date: string;
  dateValue: Timestamp;
  readTime: string;
  icon: string;
  color: string;
  image: string;
  relatedServices: string[];
  downloadableAsset?: string;
  keyTakeaways: string[];
  published: boolean;
  featured: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
  createdBy?: string; // Admin user ID
}

// Downloadable Asset interface
export interface DownloadableAsset {
  id?: string;
  title: string;
  description: string;
  type: string;
  icon: string;
  file: string;
  size: string;
  downloads: string;
  category: string;
  industry: string;
  featured: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// Webinar interface
export interface Webinar {
  id?: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  views: string;
  date: string;
  youtubeId: string;
  speaker: string;
  topics: string[];
  thumbnail: string;
  // Additional fields for management
  status: 'upcoming' | 'live' | 'completed';
  featured?: boolean;
  maxAttendees?: number;
  registeredCount?: number;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// Services CRUD operations
export const servicesService = {
  // Get all services
  async getAll(): Promise<Service[]> {
    try {
      const servicesCol = collection(db, 'services');
      const q = query(servicesCol, orderBy('order', 'asc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Service));
    } catch (error) {
      console.error('Error fetching services:', error);
      return [];
    }
  },

  // Get single service
  async getById(id: string): Promise<Service | null> {
    try {
      const serviceDoc = await getDoc(doc(db, 'services', id));
      if (serviceDoc.exists()) {
        return { id: serviceDoc.id, ...serviceDoc.data() } as Service;
      }
      return null;
    } catch (error) {
      console.error('Error fetching service:', error);
      return null;
    }
  },

  // Create new service
  async create(service: Omit<Service, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'services'), {
        ...service,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating service:', error);
      throw error;
    }
  },

  // Update service
  async update(id: string, service: Partial<Service>): Promise<void> {
    try {
      const serviceRef = doc(db, 'services', id);
      await updateDoc(serviceRef, {
        ...service,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating service:', error);
      throw error;
    }
  },

  // Delete service
  async delete(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'services', id));
    } catch (error) {
      console.error('Error deleting service:', error);
      throw error;
    }
  }
};

// Webinars CRUD operations
export const webinarsService = {
  // Get all webinars
  async getAll(): Promise<Webinar[]> {
    try {
      const webinarsCol = collection(db, 'webinars');
      const q = query(webinarsCol, orderBy('date', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Webinar));
    } catch (error) {
      console.error('Error fetching webinars:', error);
      return [];
    }
  },

  // Get single webinar
  async getById(id: string): Promise<Webinar | null> {
    try {
      const webinarDoc = await getDoc(doc(db, 'webinars', id));
      if (webinarDoc.exists()) {
        return { id: webinarDoc.id, ...webinarDoc.data() } as Webinar;
      }
      return null;
    } catch (error) {
      console.error('Error fetching webinar:', error);
      return null;
    }
  },

  // Create new webinar
  async create(webinar: Omit<Webinar, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'webinars'), {
        ...webinar,
        registeredCount: 0,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating webinar:', error);
      throw error;
    }
  },

  // Update webinar
  async update(id: string, webinar: Partial<Webinar>): Promise<void> {
    try {
      const webinarRef = doc(db, 'webinars', id);
      await updateDoc(webinarRef, {
        ...webinar,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating webinar:', error);
      throw error;
    }
  },

  // Delete webinar
  async delete(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'webinars', id));
    } catch (error) {
      console.error('Error deleting webinar:', error);
      throw error;
    }
  },

  // Get upcoming webinars
  async getUpcoming(): Promise<Webinar[]> {
    try {
      const webinarsCol = collection(db, 'webinars');
      const q = query(
        webinarsCol, 
        where('status', '==', 'upcoming'),
        orderBy('date', 'asc')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Webinar));
    } catch (error) {
      console.error('Error fetching upcoming webinars:', error);
      return [];
    }
  },

  // Update registration count
  async incrementRegistration(id: string): Promise<void> {
    try {
      const webinarRef = doc(db, 'webinars', id);
      const webinarDoc = await getDoc(webinarRef);
      
      if (webinarDoc.exists()) {
        const currentCount = webinarDoc.data().registeredCount || 0;
        await updateDoc(webinarRef, {
          registeredCount: currentCount + 1,
          updatedAt: Timestamp.now()
        });
      }
    } catch (error) {
      console.error('Error updating registration count:', error);
      throw error;
    }
  }
};

// Clear all webinars from database
export async function clearAllWebinars() {
  try {
    console.log('🗑️ Clearing all webinars...');
    const allWebinars = await webinarsService.getAll();
    console.log(`Found ${allWebinars.length} webinars to delete`);
    
    for (const webinar of allWebinars) {
      if (webinar.id) {
        await webinarsService.delete(webinar.id);
        console.log(`Deleted: ${webinar.title}`);
      }
    }
    
    console.log('✅ All webinars cleared successfully');
  } catch (error) {
    console.error('❌ Error clearing webinars:', error);
    throw error;
  }
}

// Clear all and initialize exactly 6 webinars
export async function resetToSixWebinars() {
  try {
    // First clear everything
    await clearAllWebinars();
    
    // Then add exactly 6
    await initializeWebinars();
    
    console.log('✅ Reset complete - exactly 6 webinars added');
  } catch (error) {
    console.error('❌ Error resetting webinars:', error);
    throw error;
  }
}

// Initialize sample webinars data - Only 6 Shahzaib Kamal webinars
export async function initializeWebinars() {
  const sampleWebinars = [
    {
      title: "Cybersecurity Fundamentals for Enterprise: Protecting Your Digital Assets",
      description: "Join Shahzaib Kamal as he breaks down essential cybersecurity principles every business leader needs to know. Learn about threat detection, risk management, and building a security-first culture in your organization.",
      category: "Cybersecurity",
      duration: "42 min",
      views: "2.1K",
      date: "Dec 20, 2024",
      youtubeId: "xwdx0Lu4xFk",
      speaker: "Shahzaib Kamal, Cybersecurity Expert & Host",
      topics: ["Enterprise Security", "Threat Detection", "Risk Management", "Security Culture"],
      thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      status: "completed" as const,
      featured: true
    },
    {
      title: "Digital Transformation Strategies: Modernizing Legacy Business Systems",
      description: "Shahzaib Kamal shares proven strategies for successfully transforming traditional business operations into modern, efficient digital workflows. Essential viewing for business leaders planning their digital journey.",
      category: "Digital Transformation",
      duration: "38 min",
      views: "1.8K",
      date: "Dec 18, 2024",
      youtubeId: "4qe94jTeG-Q",
      speaker: "Shahzaib Kamal, Digital Strategy Consultant",
      topics: ["Legacy Modernization", "Digital Workflows", "Change Management", "Technology Adoption"],
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      status: "completed" as const,
      featured: false
    },
    {
      title: "Cloud Migration Best Practices: Enterprise-Scale Implementation Guide",
      description: "Learn from Shahzaib Kamal's real-world experience in migrating enterprise systems to the cloud. Discover cost optimization strategies, security considerations, and common pitfalls to avoid.",
      category: "Cloud Solutions",
      duration: "45 min",
      views: "2.5K",
      date: "Dec 15, 2024",
      youtubeId: "NNu8RPcda9k",
      speaker: "Shahzaib Kamal, Cloud Architecture Specialist",
      topics: ["Cloud Migration", "AWS Solutions", "Cost Optimization", "Enterprise Architecture"],
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      status: "completed" as const,
      featured: true
    },
    {
      title: "AI Implementation in Business: Practical Applications and ROI Analysis",
      description: "Shahzaib Kamal demystifies AI implementation for business leaders. Explore practical use cases, calculate ROI, and understand how to successfully integrate AI technologies into your existing business processes.",
      category: "AI & Machine Learning",
      duration: "47 min",
      views: "3.2K",
      date: "Dec 12, 2024",
      youtubeId: "cRirUzyQgaI",
      speaker: "Shahzaib Kamal, AI Strategy Advisor",
      topics: ["AI Implementation", "Business Intelligence", "ROI Analysis", "Machine Learning"],
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      status: "completed" as const,
      featured: false
    },
    {
      title: "Data Analytics for Business Growth: From Raw Data to Strategic Insights",
      description: "Join Shahzaib Kamal as he reveals how to transform your business data into actionable insights. Learn advanced analytics techniques, data visualization strategies, and how to build a data-driven culture.",
      category: "Data Analytics",
      duration: "41 min",
      views: "1.9K",
      date: "Dec 10, 2024",
      youtubeId: "NDZ4MerffaU",
      speaker: "Shahzaib Kamal, Data Analytics Expert",
      topics: ["Business Analytics", "Data Visualization", "Predictive Modeling", "Strategic Insights"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      status: "completed" as const,
      featured: false
    },
    {
      title: "Software Development Excellence: Building Scalable Enterprise Applications",
      description: "Shahzaib Kamal shares his expertise in enterprise software development. Learn about modern development practices, scalable architecture patterns, and how to build applications that grow with your business.",
      category: "Software Development",
      duration: "39 min",
      views: "2.3K",
      date: "Dec 8, 2024",
      youtubeId: "Dm1XqKH2hYs",
      speaker: "Shahzaib Kamal, Senior Software Architect",
      topics: ["Enterprise Development", "Scalable Architecture", "Modern Practices", "Application Design"],
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      status: "completed" as const,
      featured: true
    }
  ];

  try {
    const existingWebinars = await webinarsService.getAll();
    if (existingWebinars.length === 0) {
      console.log('Initializing sample webinars...');
      for (const webinar of sampleWebinars) {
        await webinarsService.create(webinar);
      }
      console.log('Sample webinars initialized successfully');
    }
  } catch (error) {
    console.error('Error initializing webinars:', error);
  }
}

// Dashboard stats operations
export const dashboardService = {
  // Get dashboard stats
  async getStats(): Promise<DashboardStats | null> {
    try {
      const statsDoc = await getDoc(doc(db, 'dashboard', 'stats'));
      if (statsDoc.exists()) {
        return statsDoc.data() as DashboardStats;
      }
      return null;
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      return null;
    }
  },

  // Update dashboard stats
  async updateStats(stats: DashboardStats): Promise<void> {
    try {
      await setDoc(doc(db, 'dashboard', 'stats'), {
        ...stats,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating dashboard stats:', error);
      throw error;
    }
  },

  // Get recent activity
  async getRecentActivity(limitCount: number = 5): Promise<Activity[]> {
    try {
      const activitiesCol = collection(db, 'activities');
      const q = query(activitiesCol, orderBy('time', 'desc'), limit(limitCount));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Activity));
    } catch (error) {
      console.error('Error fetching activities:', error);
      return [];
    }
  },

  // Add activity
  async addActivity(activity: Omit<Activity, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'activities'), {
        ...activity,
        time: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding activity:', error);
      throw error;
    }
  },

  // Get top pages
  async getTopPages(limitCount: number = 5): Promise<PageStats[]> {
    try {
      const pagesCol = collection(db, 'pageStats');
      const q = query(pagesCol, orderBy('views', 'desc'), limit(limitCount));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => doc.data() as PageStats);
    } catch (error) {
      console.error('Error fetching top pages:', error);
      return [];
    }
  },

  // Update page stats
  async updatePageStats(path: string, views: number, change: string): Promise<void> {
    try {
      const pageId = path.replace(/\//g, '_') || 'home';
      await setDoc(doc(db, 'pageStats', pageId), {
        path,
        views,
        change,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating page stats:', error);
      throw error;
    }
  }
};

// Fallback data for when Firebase is not available
const fallbackDetailedServices: DetailedService[] = [
  {
    id: '1',
    slug: 'cyber-security',
    title: 'Cyber Security & Privacy',
    heroTitle: 'Comprehensive Protection',
    heroDescription: 'Minimize threats and proactively protect your most valuable assets with advanced cybersecurity solutions.',
    backgroundImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop&auto=format',
    services: [
      {
        title: 'Security Assessment & Auditing',
        description: 'Comprehensive security assessments to identify vulnerabilities and risks in your systems. We conduct thorough audits of your infrastructure, applications, and processes to ensure robust security posture.',
        icon: 'Shield',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&auto=format',
        features: ['Vulnerability Assessment', 'Security Audits', 'Risk Analysis']
      },
      {
        title: 'Threat Detection & Response',
        description: 'Advanced threat detection and incident response capabilities. We implement real-time monitoring, threat intelligence, and automated response systems to quickly identify and mitigate security threats.',
        icon: 'Eye',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop&auto=format',
        features: ['24/7 Monitoring', 'Threat Intelligence', 'Incident Response']
      },
      {
        title: 'Privacy Compliance Management',
        description: 'Ensure compliance with privacy regulations like GDPR, CCPA, and HIPAA. We help implement privacy frameworks, data protection measures, and compliance monitoring systems.',
        icon: 'Lock',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop&auto=format',
        features: ['GDPR Compliance', 'Data Protection', 'Privacy Frameworks']
      },
      {
        title: 'Security Architecture Design',
        description: 'Design robust security architectures that protect your digital assets. We create comprehensive security frameworks, implement defense-in-depth strategies, and ensure secure system design.',
        icon: 'Settings',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&auto=format',
        features: ['Security Framework', 'Defense Strategy', 'Secure Design']
      },
      {
        title: 'Identity & Access Management',
        description: 'Implement comprehensive IAM solutions to control user access and protect resources. We design identity governance, access controls, and authentication systems for secure user management.',
        icon: 'Users',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&auto=format',
        features: ['Access Controls', 'User Authentication', 'Identity Governance']
      },
      {
        title: 'Incident Response Planning',
        description: 'Develop comprehensive incident response plans and procedures. We create response protocols, train your team, and establish communication procedures for effective security incident management.',
        icon: 'AlertTriangle',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format',
        features: ['Response Protocols', 'Team Training', 'Communication Plans']
      }
    ],
    ctaTitle: 'Ready to strengthen your security posture?',
    ctaDescription: 'Protect your organization with our comprehensive cybersecurity solutions',
    ctaIcon: 'Shield',
    ctaButton1Text: 'Security Assessment',
    ctaButton2Text: 'Contact Security Team'
  },
  {
    id: '2',
    slug: 'application-development',
    title: 'Application Development',
    heroTitle: 'Custom Applications Built for Success',
    heroDescription: 'Custom applications built with modern technologies to solve unique challenges and drive business growth.',
    backgroundImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&h=1080&fit=crop&auto=format',
    services: [
      {
        title: 'Custom Web Applications',
        description: 'Modern, responsive web applications built with cutting-edge technologies. We create scalable, high-performance solutions tailored to your business needs with intuitive user experiences and robust backend architectures.',
        icon: 'Globe',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop&auto=format',
        features: ['React & Next.js', 'Responsive Design', 'API Integration']
      },
      {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android. We deliver engaging mobile experiences with seamless performance, offline capabilities, and integration with device features.',
        icon: 'Smartphone',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&auto=format',
        features: ['iOS & Android', 'React Native', 'App Store Deployment']
      },
      {
        title: 'API Development & Integration',
        description: 'Robust API architectures and seamless integrations. We build scalable RESTful and GraphQL APIs, implement microservices, and connect diverse systems for optimal data flow and interoperability.',
        icon: 'Database',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&auto=format',
        features: ['REST & GraphQL', 'Microservices', 'Third-party Integration']
      },
      {
        title: 'Cloud-Native Applications',
        description: 'Applications designed for the cloud from the ground up. We leverage containerization, serverless architectures, and cloud services to build applications that scale automatically and cost-effectively.',
        icon: 'Cloud',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&auto=format',
        features: ['AWS & Azure', 'Docker & Kubernetes', 'Serverless Architecture']
      },
      {
        title: 'Legacy System Modernization',
        description: 'Transform outdated systems into modern, efficient solutions. We assess legacy applications, plan migration strategies, and execute modernization projects that preserve business logic while improving performance and maintainability.',
        icon: 'RefreshCw',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&auto=format',
        features: ['System Assessment', 'Migration Planning', 'Performance Optimization']
      },
      {
        title: 'DevOps & CI/CD Implementation',
        description: 'Streamlined development and deployment pipelines. We implement automated testing, continuous integration, deployment automation, and monitoring solutions to accelerate development cycles and improve code quality.',
        icon: 'GitBranch',
        image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop&auto=format',
        features: ['Automated Testing', 'CI/CD Pipelines', 'Monitoring & Logging']
      }
    ],
    ctaTitle: 'Ready to Build Something Amazing?',
    ctaDescription: 'Let our development team bring your vision to life with cutting-edge technology',
    ctaIcon: 'Code',
    ctaButton1Text: 'Start Your Project',
    ctaButton2Text: 'View Portfolio'
  },
  {
    id: '3',
    slug: 'applied-data-analytics',
    title: 'Applied Data & Analytics',
    heroTitle: 'Transform Data Into Actionable Insights',
    heroDescription: 'Transform raw data into actionable insights that drive business growth and innovation.',
    backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&auto=format',
    services: [
      {
        title: 'Data Strategy & Governance',
        description: 'Comprehensive data strategies that align with business objectives. We establish data governance frameworks, quality standards, and compliance protocols to ensure your data is accurate, secure, and strategically valuable.',
        icon: 'Database',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&auto=format',
        features: ['Data Governance', 'Quality Standards', 'Compliance Protocols']
      },
      {
        title: 'Advanced Analytics',
        description: 'Sophisticated analytical techniques to uncover deep insights from complex datasets. We apply statistical modeling, data mining, and advanced algorithms to reveal patterns and trends that drive business decisions.',
        icon: 'TrendingUp',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format',
        features: ['Statistical Modeling', 'Data Mining', 'Predictive Analytics']
      },
      {
        title: 'Business Intelligence',
        description: 'Transform raw data into actionable business insights with powerful BI solutions. We create interactive dashboards, automated reporting systems, and self-service analytics platforms for data-driven decision making.',
        icon: 'Eye',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&auto=format',
        features: ['Interactive Dashboards', 'Automated Reporting', 'Self-service Analytics']
      },
      {
        title: 'Predictive Modeling',
        description: 'Harness the power of predictive analytics to forecast trends and outcomes. We build machine learning models that help you anticipate customer behavior, market changes, and operational needs.',
        icon: 'Brain',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&auto=format',
        features: ['Machine Learning', 'Trend Forecasting', 'Behavioral Analysis']
      },
      {
        title: 'Data Visualization',
        description: 'Create compelling visual stories from complex data sets. We design interactive charts, infographics, and dynamic dashboards that make data accessible and actionable for all stakeholders.',
        icon: 'PieChart',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format',
        features: ['Interactive Charts', 'Dynamic Dashboards', 'Visual Storytelling']
      },
      {
        title: 'Machine Learning Solutions',
        description: 'Implement cutting-edge ML algorithms to automate insights and predictions. From recommendation engines to anomaly detection, we build intelligent systems that continuously learn and improve business outcomes.',
        icon: 'Cpu',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&auto=format',
        features: ['ML Algorithms', 'Recommendation Engines', 'Anomaly Detection']
      }
    ],
    ctaTitle: 'Ready to Unlock Your Data\'s Potential?',
    ctaDescription: 'Discover how our analytics experts can transform your data into competitive advantage',
    ctaIcon: 'BarChart3',
    ctaButton1Text: 'Get Data Insights',
    ctaButton2Text: 'View Case Studies'
  }
];

// Detailed services CRUD operations
export const detailedServicesService = {
  // Get all detailed services
  async getAll(): Promise<DetailedService[]> {
    try {
      const servicesCol = collection(db, 'detailedServices');
      const snapshot = await getDocs(servicesCol);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as DetailedService));
    } catch (error) {
      console.error('Error fetching detailed services, using fallback data:', error);
      return fallbackDetailedServices;
    }
  },

  // Get single detailed service by slug
  async getBySlug(slug: string): Promise<DetailedService | null> {
    try {
      const servicesCol = collection(db, 'detailedServices');
      const q = query(servicesCol, where('slug', '==', slug), limit(1));
      const snapshot = await getDocs(q);
      
      if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        return { id: doc.id, ...doc.data() } as DetailedService;
      }
      return null;
    } catch (error) {
      console.error('Error fetching detailed service by slug, using fallback data:', error);
      // Return fallback data for the specific slug
      return fallbackDetailedServices.find(service => service.slug === slug) || null;
    }
  },

  // Get single detailed service by ID
  async getById(id: string): Promise<DetailedService | null> {
    try {
      const serviceDoc = await getDoc(doc(db, 'detailedServices', id));
      if (serviceDoc.exists()) {
        return { id: serviceDoc.id, ...serviceDoc.data() } as DetailedService;
      }
      return null;
    } catch (error) {
      console.error('Error fetching detailed service by ID, using fallback data:', error);
      return fallbackDetailedServices.find(service => service.id === id) || null;
    }
  },

  // Create new detailed service
  async create(service: Omit<DetailedService, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'detailedServices'), {
        ...service,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating detailed service:', error);
      throw error;
    }
  },

  // Update detailed service
  async update(id: string, service: Partial<DetailedService>): Promise<void> {
    try {
      const serviceRef = doc(db, 'detailedServices', id);
      await updateDoc(serviceRef, {
        ...service,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating detailed service:', error);
      throw error;
    }
  },

  // Delete detailed service
  async delete(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'detailedServices', id));
    } catch (error) {
      console.error('Error deleting detailed service:', error);
      throw error;
    }
  },

  // Upsert detailed service by slug
  async upsertBySlug(service: Omit<DetailedService, 'id'>): Promise<string> {
    try {
      const existing = await this.getBySlug(service.slug);
      
      if (existing && existing.id) {
        await this.update(existing.id, service);
        return existing.id;
      } else {
        return await this.create(service);
      }
    } catch (error) {
      console.error('Error upserting detailed service:', error);
      throw error;
    }
  }
};

// Initialize complete services data with rich content
export async function initializeServices() {
  const completeServices: Omit<Service, 'id'>[] = [
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

  try {
    // Clear existing services first for a clean migration
    const existingServices = await servicesService.getAll();
    console.log(`Found ${existingServices.length} existing services. Clearing for migration...`);
    
    for (const service of existingServices) {
      if (service.id) {
        await servicesService.delete(service.id);
      }
    }
    
    // Create all new services with complete content
    console.log('Creating complete services with rich content...');
    for (const service of completeServices) {
      await servicesService.create(service);
    }
    
    console.log(`Successfully migrated ${completeServices.length} services with complete content to Firebase`);
  } catch (error) {
    console.error('Error migrating services:', error);
    throw error;
  }
}

// Initialize detailed services data
export async function initializeDetailedServices() {
  const detailedServicesData: Omit<DetailedService, 'id'>[] = [
    {
      slug: 'cyber-security',
      title: 'Cyber Security & Privacy',
      heroTitle: 'Comprehensive Protection',
      heroDescription: 'Minimize threats and proactively protect your most valuable assets with advanced cybersecurity solutions.',
      backgroundImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop&auto=format',
      services: [
        {
          title: 'Security Assessment & Auditing',
          description: 'Comprehensive security assessments to identify vulnerabilities and risks in your systems. We conduct thorough audits of your infrastructure, applications, and processes to ensure robust security posture.',
          icon: 'Shield',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&auto=format',
          features: ['Vulnerability Assessment', 'Security Audits', 'Risk Analysis']
        },
        {
          title: 'Threat Detection & Response',
          description: 'Advanced threat detection and incident response capabilities. We implement real-time monitoring, threat intelligence, and automated response systems to quickly identify and mitigate security threats.',
          icon: 'Eye',
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop&auto=format',
          features: ['24/7 Monitoring', 'Threat Intelligence', 'Incident Response']
        },
        {
          title: 'Privacy Compliance Management',
          description: 'Ensure compliance with privacy regulations like GDPR, CCPA, and HIPAA. We help implement privacy frameworks, data protection measures, and compliance monitoring systems.',
          icon: 'Lock',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop&auto=format',
          features: ['GDPR Compliance', 'Data Protection', 'Privacy Frameworks']
        },
        {
          title: 'Security Architecture Design',
          description: 'Design robust security architectures that protect your digital assets. We create comprehensive security frameworks, implement defense-in-depth strategies, and ensure secure system design.',
          icon: 'Settings',
          image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&auto=format',
          features: ['Security Framework', 'Defense Strategy', 'Secure Design']
        },
        {
          title: 'Identity & Access Management',
          description: 'Implement comprehensive IAM solutions to control user access and protect resources. We design identity governance, access controls, and authentication systems for secure user management.',
          icon: 'Users',
          image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&auto=format',
          features: ['Access Controls', 'User Authentication', 'Identity Governance']
        },
        {
          title: 'Incident Response Planning',
          description: 'Develop comprehensive incident response plans and procedures. We create response protocols, train your team, and establish communication procedures for effective security incident management.',
          icon: 'AlertTriangle',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format',
          features: ['Response Protocols', 'Team Training', 'Communication Plans']
        }
      ],
      ctaTitle: 'Ready to strengthen your security posture?',
      ctaDescription: 'Protect your organization with our comprehensive cybersecurity solutions',
      ctaIcon: 'Shield',
      ctaButton1Text: 'Security Assessment',
      ctaButton2Text: 'Contact Security Team'
    },
    {
      slug: 'application-development',
      title: 'Application Development',
      heroTitle: 'Custom Applications Built for Success',
      heroDescription: 'Custom applications built with modern technologies to solve unique challenges and drive business growth.',
      backgroundImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&h=1080&fit=crop&auto=format',
      services: [
        {
          title: 'Custom Web Applications',
          description: 'Modern, responsive web applications built with cutting-edge technologies. We create scalable, high-performance solutions tailored to your business needs with intuitive user experiences and robust backend architectures.',
          icon: 'Globe',
          image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop&auto=format',
          features: ['React & Next.js', 'Responsive Design', 'API Integration']
        },
        {
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications for iOS and Android. We deliver engaging mobile experiences with seamless performance, offline capabilities, and integration with device features.',
          icon: 'Smartphone',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&auto=format',
          features: ['iOS & Android', 'React Native', 'App Store Deployment']
        },
        {
          title: 'API Development & Integration',
          description: 'Robust API architectures and seamless integrations. We build scalable RESTful and GraphQL APIs, implement microservices, and connect diverse systems for optimal data flow and interoperability.',
          icon: 'Database',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&auto=format',
          features: ['REST & GraphQL', 'Microservices', 'Third-party Integration']
        },
        {
          title: 'Cloud-Native Applications',
          description: 'Applications designed for the cloud from the ground up. We leverage containerization, serverless architectures, and cloud services to build applications that scale automatically and cost-effectively.',
          icon: 'Cloud',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&auto=format',
          features: ['AWS & Azure', 'Docker & Kubernetes', 'Serverless Architecture']
        },
        {
          title: 'Legacy System Modernization',
          description: 'Transform outdated systems into modern, efficient solutions. We assess legacy applications, plan migration strategies, and execute modernization projects that preserve business logic while improving performance and maintainability.',
          icon: 'RefreshCw',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&auto=format',
          features: ['System Assessment', 'Migration Planning', 'Performance Optimization']
        },
        {
          title: 'DevOps & CI/CD Implementation',
          description: 'Streamlined development and deployment pipelines. We implement automated testing, continuous integration, deployment automation, and monitoring solutions to accelerate development cycles and improve code quality.',
          icon: 'GitBranch',
          image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop&auto=format',
          features: ['Automated Testing', 'CI/CD Pipelines', 'Monitoring & Logging']
        }
      ],
      ctaTitle: 'Ready to Build Something Amazing?',
      ctaDescription: 'Let our development team bring your vision to life with cutting-edge technology',
      ctaIcon: 'Code',
      ctaButton1Text: 'Start Your Project',
      ctaButton2Text: 'View Portfolio'
    },
    {
      slug: 'applied-data-analytics',
      title: 'Applied Data & Analytics',
      heroTitle: 'Transform Data Into Actionable Insights',
      heroDescription: 'Transform raw data into actionable insights that drive business growth and innovation.',
      backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&auto=format',
      services: [
        {
          title: 'Data Strategy & Governance',
          description: 'Comprehensive data strategies that align with business objectives. We establish data governance frameworks, quality standards, and compliance protocols to ensure your data is accurate, secure, and strategically valuable.',
          icon: 'Database',
          image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&auto=format',
          features: ['Data Governance', 'Quality Standards', 'Compliance Protocols']
        },
        {
          title: 'Advanced Analytics',
          description: 'Sophisticated analytical techniques to uncover deep insights from complex datasets. We apply statistical modeling, data mining, and advanced algorithms to reveal patterns and trends that drive business decisions.',
          icon: 'TrendingUp',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format',
          features: ['Statistical Modeling', 'Data Mining', 'Predictive Analytics']
        },
        {
          title: 'Business Intelligence',
          description: 'Transform raw data into actionable business insights with powerful BI solutions. We create interactive dashboards, automated reporting systems, and self-service analytics platforms for data-driven decision making.',
          icon: 'Eye',
          image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&auto=format',
          features: ['Interactive Dashboards', 'Automated Reporting', 'Self-service Analytics']
        },
        {
          title: 'Predictive Modeling',
          description: 'Harness the power of predictive analytics to forecast trends and outcomes. We build machine learning models that help you anticipate customer behavior, market changes, and operational needs.',
          icon: 'Brain',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&auto=format',
          features: ['Machine Learning', 'Trend Forecasting', 'Behavioral Analysis']
        },
        {
          title: 'Data Visualization',
          description: 'Create compelling visual stories from complex data sets. We design interactive charts, infographics, and dynamic dashboards that make data accessible and actionable for all stakeholders.',
          icon: 'PieChart',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format',
          features: ['Interactive Charts', 'Dynamic Dashboards', 'Visual Storytelling']
        },
        {
          title: 'Machine Learning Solutions',
          description: 'Implement cutting-edge ML algorithms to automate insights and predictions. From recommendation engines to anomaly detection, we build intelligent systems that continuously learn and improve business outcomes.',
          icon: 'Cpu',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&auto=format',
          features: ['ML Algorithms', 'Recommendation Engines', 'Anomaly Detection']
        }
      ],
      ctaTitle: 'Ready to Unlock Your Data\'s Potential?',
      ctaDescription: 'Discover how our analytics experts can transform your data into competitive advantage',
      ctaIcon: 'BarChart3',
      ctaButton1Text: 'Get Data Insights',
      ctaButton2Text: 'View Case Studies'
    }
  ];

  try {
    const existingDetailedServices = await detailedServicesService.getAll();
    if (existingDetailedServices.length === 0) {
      for (const service of detailedServicesData) {
        await detailedServicesService.create(service);
      }
      console.log('Default detailed services initialized');
    }
  } catch (error) {
    console.error('Error initializing detailed services:', error);
  }
}

// ====================
// ARTICLE SERVICES
// ====================

export const articlesService = {
  // Get all published articles
  async getAll(): Promise<Article[]> {
    try {
      const articlesRef = collection(db, 'articles');
      // Simplified query to avoid composite index requirement for now
      // TODO: Create Firebase composite index for (published, dateValue) fields
      const q = query(articlesRef, orderBy('dateValue', 'desc'));
      const snapshot = await getDocs(q);
      // Filter published articles on the client side temporarily
      const articles = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as Article));
      
      return articles.filter(article => article.published === true);
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }
  },

  // Get all articles (admin only)
  async getAllAdmin(): Promise<Article[]> {
    try {
      const articlesRef = collection(db, 'articles');
      const q = query(articlesRef, orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as Article));
    } catch (error) {
      console.error('Error fetching admin articles:', error);
      throw error;
    }
  },

  // Get single article by slug
  async getBySlug(slug: string): Promise<Article | null> {
    try {
      const articlesRef = collection(db, 'articles');
      const q = query(articlesRef, where('slug', '==', slug), limit(1));
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        return null;
      }
      
      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() } as Article;
    } catch (error) {
      console.error('Error fetching article by slug:', error);
      throw error;
    }
  },

  // Create new article (admin only)
  async create(article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>, adminUserId: string): Promise<string> {
    try {
      const now = Timestamp.now();
      const articleData = {
        ...article,
        createdAt: now,
        updatedAt: now,
        createdBy: adminUserId
      };
      
      const docRef = await addDoc(collection(db, 'articles'), articleData);
      console.log('Article created with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error creating article:', error);
      throw error;
    }
  },

  // Update article (admin only)
  async update(id: string, updates: Partial<Article>): Promise<void> {
    try {
      const articleRef = doc(db, 'articles', id);
      await updateDoc(articleRef, {
        ...updates,
        updatedAt: Timestamp.now()
      });
      console.log('Article updated:', id);
    } catch (error) {
      console.error('Error updating article:', error);
      throw error;
    }
  },

  // Delete article (admin only)
  async delete(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'articles', id));
      console.log('Article deleted:', id);
    } catch (error) {
      console.error('Error deleting article:', error);
      throw error;
    }
  },

  // Get articles by category
  async getByCategory(category: string): Promise<Article[]> {
    try {
      const articlesRef = collection(db, 'articles');
      // Simplified query to avoid composite index requirement
      // TODO: Create Firebase composite index for (published, category, dateValue) fields
      const q = query(articlesRef, orderBy('dateValue', 'desc'));
      const snapshot = await getDocs(q);
      // Filter published articles and category on the client side temporarily
      const articles = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as Article));
      
      return articles.filter(article => 
        article.published === true && article.category === category
      );
    } catch (error) {
      console.error('Error fetching articles by category:', error);
      throw error;
    }
  },

  // Get featured articles
  async getFeatured(): Promise<Article[]> {
    try {
      const articlesRef = collection(db, 'articles');
      // Simplified query to avoid composite index requirement
      // TODO: Create Firebase composite index for (published, featured, dateValue) fields
      const q = query(articlesRef, orderBy('dateValue', 'desc'));
      const snapshot = await getDocs(q);
      // Filter published and featured articles on the client side temporarily
      const articles = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as Article));
      
      return articles
        .filter(article => article.published === true && article.featured === true)
        .slice(0, 6); // Limit to 6 articles
    } catch (error) {
      console.error('Error fetching featured articles:', error);
      throw error;
    }
  }
};

// ====================
// DOWNLOADABLE ASSETS SERVICES
// ====================

export const assetsService = {
  // Get all assets
  async getAll(): Promise<DownloadableAsset[]> {
    try {
      const assetsRef = collection(db, 'downloadable_assets');
      const q = query(assetsRef, orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as DownloadableAsset));
    } catch (error) {
      console.error('Error fetching assets:', error);
      throw error;
    }
  },

  // Create new asset
  async create(asset: Omit<DownloadableAsset, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const now = Timestamp.now();
      const assetData = {
        ...asset,
        createdAt: now,
        updatedAt: now
      };
      
      const docRef = await addDoc(collection(db, 'downloadable_assets'), assetData);
      console.log('Asset created with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error creating asset:', error);
      throw error;
    }
  },

  // Update asset
  async update(id: string, updates: Partial<DownloadableAsset>): Promise<void> {
    try {
      const assetRef = doc(db, 'downloadable_assets', id);
      await updateDoc(assetRef, {
        ...updates,
        updatedAt: Timestamp.now()
      });
      console.log('Asset updated:', id);
    } catch (error) {
      console.error('Error updating asset:', error);
      throw error;
    }
  },

  // Delete asset
  async delete(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'downloadable_assets', id));
      console.log('Asset deleted:', id);
    } catch (error) {
      console.error('Error deleting asset:', error);
      throw error;
    }
  },

  // Get assets by industry
  async getByIndustry(industry: string): Promise<DownloadableAsset[]> {
    try {
      const assetsRef = collection(db, 'downloadable_assets');
      const q = query(
        assetsRef,
        where('industry', '==', industry),
        orderBy('createdAt', 'desc')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as DownloadableAsset));
    } catch (error) {
      console.error('Error fetching assets by industry:', error);
      throw error;
    }
  }
};

// ====================
// WEBSITE INFORMATION SERVICES (For Chatbot)
// ====================

export const websiteInfoService = {
  // Get all website information
  async getAll(): Promise<WebsiteInfo[]> {
    try {
      const infoRef = collection(db, 'website_info');
      // Simplified query to avoid composite index requirement
      const q = query(infoRef, where('active', '==', true));
      const snapshot = await getDocs(q);
      
      // Sort in memory instead of using orderBy in query
      const docs = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as WebsiteInfo));
      
      // Sort by section first, then by order
      return docs.sort((a, b) => {
        if (a.section !== b.section) {
          return a.section.localeCompare(b.section);
        }
        return (a.order || 0) - (b.order || 0);
      });
    } catch (error) {
      console.error('Error fetching website info:', error);
      throw error;
    }
  },

  // Get website info by section
  async getBySection(section: 'company' | 'services' | 'contact' | 'features'): Promise<WebsiteInfo[]> {
    try {
      const infoRef = collection(db, 'website_info');
      const q = query(
        infoRef, 
        where('section', '==', section), 
        where('active', '==', true),
        orderBy('order')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as WebsiteInfo));
    } catch (error) {
      console.error('Error fetching website info by section:', error);
      throw error;
    }
  },

  // Create new website info
  async create(info: Omit<WebsiteInfo, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const now = Timestamp.now();
      const infoData = {
        ...info,
        createdAt: now,
        updatedAt: now
      };
      
      const docRef = await addDoc(collection(db, 'website_info'), infoData);
      console.log('Website info created with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error creating website info:', error);
      throw error;
    }
  },

  // Update website info
  async update(id: string, updates: Partial<WebsiteInfo>): Promise<void> {
    try {
      const infoRef = doc(db, 'website_info', id);
      await updateDoc(infoRef, {
        ...updates,
        updatedAt: Timestamp.now()
      });
      console.log('Website info updated:', id);
    } catch (error) {
      console.error('Error updating website info:', error);
      throw error;
    }
  },

  // Delete website info
  async delete(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'website_info', id));
      console.log('Website info deleted:', id);
    } catch (error) {
      console.error('Error deleting website info:', error);
      throw error;
    }
  }
};