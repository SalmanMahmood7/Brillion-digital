import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

// Firebase configuration (same as in your app)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sample webinar data
const sampleWebinars = [
  {
    title: "Digital Transformation in 2024: A Complete Guide",
    description: "Learn the essential strategies for successful digital transformation, including cloud migration, process automation, and change management.",
    category: "Digital Transformation",
    duration: "45 min",
    views: "2.3K",
    date: "Dec 15, 2024",
    youtubeId: "dQw4w9WgXcQ",
    speaker: "Sarah Chen, Digital Strategy Director",
    topics: ["Cloud Migration", "Process Automation", "Change Management", "ROI Measurement"],
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    status: "completed",
    featured: true
  },
  {
    title: "Cybersecurity Best Practices for Modern Businesses",
    description: "Comprehensive guide to protecting your business from cyber threats with enterprise-grade security solutions and best practices.",
    category: "Cybersecurity",
    duration: "38 min",
    views: "1.8K",
    date: "Dec 10, 2024",
    youtubeId: "dQw4w9WgXcQ",
    speaker: "Shahzaib Kamal, Security Expert",
    topics: ["Zero Trust Security", "Threat Detection", "Compliance", "Risk Management"],
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    status: "completed",
    featured: false
  },
  {
    title: "AI-Powered Analytics: Transforming Business Intelligence",
    description: "Discover how artificial intelligence is revolutionizing data analytics and providing unprecedented insights for business growth.",
    category: "AI & Machine Learning",
    duration: "52 min",
    views: "3.1K",
    date: "Dec 5, 2024",
    youtubeId: "dQw4w9WgXcQ",
    speaker: "Dr. Salman Mahmood, AI Research Lead",
    topics: ["Machine Learning", "Predictive Analytics", "Business Intelligence", "Data Visualization"],
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    status: "completed",
    featured: true
  },
  {
    title: "Cloud Migration Strategies for Enterprise",
    description: "A comprehensive guide to successfully migrating your enterprise applications to the cloud with minimal downtime and maximum efficiency.",
    category: "Cloud Solutions",
    duration: "41 min",
    views: "2.7K",
    date: "Nov 28, 2024",
    youtubeId: "dQw4w9WgXcQ",
    speaker: "David Kim, Cloud Architect",
    topics: ["AWS Migration", "Azure Solutions", "Hybrid Cloud", "Cost Optimization"],
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    status: "completed",
    featured: false
  },
  {
    title: "Data Analytics for Business Growth",
    description: "Learn how to leverage data analytics to drive business decisions, improve customer experience, and accelerate growth.",
    category: "Data Analytics",
    duration: "36 min",
    views: "1.9K",
    date: "Nov 20, 2024",
    youtubeId: "dQw4w9WgXcQ",
    speaker: "Jennifer Liu, Data Science Manager",
    topics: ["Business Intelligence", "Customer Analytics", "Performance Metrics", "Data Visualization"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    status: "completed",
    featured: false
  },
  {
    title: "Microsoft 365 Implementation Best Practices",
    description: "Complete guide to implementing Microsoft 365 in your organization, including Teams, SharePoint, and security configurations.",
    category: "Digital Transformation",
    duration: "48 min",
    views: "2.5K",
    date: "Nov 15, 2024",
    youtubeId: "dQw4w9WgXcQ",
    speaker: "Robert Martinez, Microsoft Solutions Expert",
    topics: ["Teams Implementation", "SharePoint", "Security", "User Adoption"],
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    status: "completed",
    featured: false
  },
  // Upcoming webinars
  {
    title: "Future of Remote Work Technology",
    description: "Explore the latest trends and technologies shaping the future of remote work and hybrid workplace solutions.",
    category: "Digital Transformation",
    duration: "45 min",
    views: "0",
    date: "Jan 15, 2025",
    youtubeId: "dQw4w9WgXcQ",
    speaker: "Sarah Johnson, Future of Work Expert",
    topics: ["Remote Collaboration", "Hybrid Work", "Digital Workplace", "Productivity Tools"],
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    status: "upcoming",
    featured: true
  },
  {
    title: "Blockchain in Enterprise Solutions",
    description: "Understanding how blockchain technology can transform enterprise operations and create new business opportunities.",
    category: "AI & Machine Learning",
    duration: "50 min",
    views: "0",
    date: "Jan 22, 2025",
    youtubeId: "dQw4w9WgXcQ",
    speaker: "Alex Chen, Blockchain Developer",
    topics: ["Blockchain Implementation", "Smart Contracts", "Decentralized Systems", "Enterprise Security"],
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    status: "upcoming",
    featured: false
  },
  {
    title: "Sustainable IT Infrastructure",
    description: "Learn how to build environmentally sustainable IT infrastructure while maintaining performance and reducing costs.",
    category: "Cloud Solutions",
    duration: "40 min",
    views: "0",
    date: "Jan 29, 2025",
    youtubeId: "dQw4w9WgXcQ",
    speaker: "Maria Garcia, Green IT Specialist",
    topics: ["Green Computing", "Energy Efficiency", "Sustainable Cloud", "Carbon Footprint"],
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    status: "upcoming",
    featured: false
  }
];

async function populateWebinars() {
  try {
    console.log('Starting webinar population...');
    
    for (const webinar of sampleWebinars) {
      const webinarData = {
        ...webinar,
        registeredCount: Math.floor(Math.random() * 100) + 20, // Random number between 20-120
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      
      const docRef = await addDoc(collection(db, 'webinars'), webinarData);
      console.log(`✅ Added webinar: "${webinar.title}" with ID: ${docRef.id}`);
    }
    
    console.log(`🎉 Successfully populated ${sampleWebinars.length} webinars!`);
  } catch (error) {
    console.error('❌ Error populating webinars:', error);
  }
}

// Check if Firebase config is available
if (!firebaseConfig.apiKey) {
  console.error('❌ Firebase configuration not found. Make sure your .env.local file is properly configured.');
  process.exit(1);
}

populateWebinars();