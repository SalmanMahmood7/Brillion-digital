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

// Service data interface
export interface Service {
  id?: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  order?: number;
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

// Webinar interface
export interface Webinar {
  id?: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  speaker: string;
  speakerRole: string;
  speakerImage?: string;
  thumbnail: string;
  registrationLink: string;
  tags: string[];
  status: 'upcoming' | 'live' | 'completed';
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

// Initialize default services data
export async function initializeServices() {
  const defaultServices: Omit<Service, 'id'>[] = [
    {
      title: "Digital Advisory",
      description: "Understand, anticipate, and accelerate with confidence.",
      icon: "Brain",
      href: "/services/digital-advisory",
      order: 1
    },
    {
      title: "Applied Data & Analytics",
      description: "Transform raw data into actionable insights that drive business growth.",
      icon: "BarChart3",
      href: "/services/applied-data-analytics",
      order: 2
    },
    {
      title: "Application Development",
      description: "Custom applications built with modern technologies to solve unique challenges.",
      icon: "Code",
      href: "/services/application-development",
      order: 3
    },
    {
      title: "Digital Platforms",
      description: "Boost growth and productivity using ERP, CRM, and CMS platforms.",
      icon: "Globe",
      href: "/services/digital-platforms",
      order: 4
    },
    {
      title: "Cyber Security & Privacy",
      description: "Minimize threats and proactively protect your most valuable assets.",
      icon: "Shield",
      href: "/services/cyber-security-privacy",
      order: 5
    },
    {
      title: "Cloud Services",
      description: "Cloud migration and optimization services to accelerate transformation.",
      icon: "Cloud",
      href: "/services/cloud-services",
      order: 6
    },
    {
      title: "Managed IT Services",
      description: "Reliable IT infrastructure management to keep your business running smoothly.",
      icon: "Settings",
      href: "/services/managed-it-services",
      order: 7
    },
    {
      title: "Dynamics 365 and Microsoft Solutions",
      description: "Leverage Microsoft's ecosystem to streamline operations and boost productivity.",
      icon: "Globe",
      href: "/services/dynamics-365-microsoft",
      order: 8
    },
    {
      title: "Artificial Intelligence and Smart Solutions",
      description: "Harness AI to automate processes and unlock intelligent insights.",
      icon: "Brain",
      href: "/services/ai-smart-solutions",
      order: 9
    }
  ];

  try {
    const existingServices = await servicesService.getAll();
    if (existingServices.length === 0) {
      for (const service of defaultServices) {
        await servicesService.create(service);
      }
      console.log('Default services initialized');
    }
  } catch (error) {
    console.error('Error initializing services:', error);
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