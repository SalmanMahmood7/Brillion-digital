import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

// Firebase configuration
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

// Webinars featuring Shahzaib Kamal with business-relevant titles
const shahzaibWebinars = [
  {
    title: "Cybersecurity Fundamentals for Enterprise: Protecting Your Digital Assets",
    description: "Join Shahzaib Kamal as he breaks down essential cybersecurity principles every business leader needs to know. Learn about threat detection, risk management, and building a security-first culture in your organization.",
    category: "Cybersecurity",
    duration: "42 min",
    views: "2.1K",
    date: "Dec 20, 2024",
    youtubeId: "PLACEHOLDER_ID_1", // Replace with actual video ID from channel
    speaker: "Shahzaib Kamal, Cybersecurity Expert & Host",
    topics: ["Enterprise Security", "Threat Detection", "Risk Management", "Security Culture"],
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    status: "completed",
    featured: true
  },
  {
    title: "Digital Transformation Strategies: Modernizing Legacy Business Systems",
    description: "Shahzaib Kamal shares proven strategies for successfully transforming traditional business operations into modern, efficient digital workflows. Essential viewing for business leaders planning their digital journey.",
    category: "Digital Transformation",
    duration: "38 min", 
    views: "1.8K",
    date: "Dec 18, 2024",
    youtubeId: "PLACEHOLDER_ID_2", // Replace with actual video ID from channel
    speaker: "Shahzaib Kamal, Digital Strategy Consultant",
    topics: ["Legacy Modernization", "Digital Workflows", "Change Management", "Technology Adoption"],
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", 
    status: "completed",
    featured: false
  },
  {
    title: "Cloud Migration Best Practices: Enterprise-Scale Implementation Guide",
    description: "Learn from Shahzaib Kamal's real-world experience in migrating enterprise systems to the cloud. Discover cost optimization strategies, security considerations, and common pitfalls to avoid.",
    category: "Cloud Solutions",
    duration: "45 min",
    views: "2.5K", 
    date: "Dec 15, 2024",
    youtubeId: "PLACEHOLDER_ID_3", // Replace with actual video ID from channel
    speaker: "Shahzaib Kamal, Cloud Architecture Specialist",
    topics: ["Cloud Migration", "AWS Solutions", "Cost Optimization", "Enterprise Architecture"],
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    status: "completed", 
    featured: true
  },
  {
    title: "AI Implementation in Business: Practical Applications and ROI Analysis",
    description: "Shahzaib Kamal demystifies AI implementation for business leaders. Explore practical use cases, calculate ROI, and understand how to successfully integrate AI technologies into your existing business processes.",
    category: "AI & Machine Learning",
    duration: "47 min",
    views: "3.2K",
    date: "Dec 12, 2024", 
    youtubeId: "PLACEHOLDER_ID_4", // Replace with actual video ID from channel
    speaker: "Shahzaib Kamal, AI Strategy Advisor",
    topics: ["AI Implementation", "Business Intelligence", "ROI Analysis", "Machine Learning"],
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    status: "completed",
    featured: false
  },
  {
    title: "Data Analytics for Business Growth: From Raw Data to Strategic Insights",
    description: "Join Shahzaib Kamal as he reveals how to transform your business data into actionable insights. Learn advanced analytics techniques, data visualization strategies, and how to build a data-driven culture.",
    category: "Data Analytics", 
    duration: "41 min",
    views: "1.9K",
    date: "Dec 10, 2024",
    youtubeId: "PLACEHOLDER_ID_5", // Replace with actual video ID from channel  
    speaker: "Shahzaib Kamal, Data Analytics Expert",
    topics: ["Business Analytics", "Data Visualization", "Predictive Modeling", "Strategic Insights"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    status: "completed",
    featured: false
  },
  {
    title: "Software Development Excellence: Building Scalable Enterprise Applications",
    description: "Shahzaib Kamal shares his expertise in enterprise software development. Learn about modern development practices, scalable architecture patterns, and how to build applications that grow with your business.",
    category: "Software Development",
    duration: "39 min", 
    views: "2.3K",
    date: "Dec 8, 2024",
    youtubeId: "PLACEHOLDER_ID_6", // Replace with actual video ID from channel
    speaker: "Shahzaib Kamal, Senior Software Architect", 
    topics: ["Enterprise Development", "Scalable Architecture", "Modern Practices", "Application Design"],
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    status: "completed",
    featured: true
  }
];

async function addShahzaibWebinars() {
  try {
    console.log('🎬 Adding Shahzaib Kamal webinars...');
    
    for (const webinar of shahzaibWebinars) {
      const webinarData = {
        ...webinar,
        registeredCount: Math.floor(Math.random() * 150) + 50, // Random number between 50-200
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      
      const docRef = await addDoc(collection(db, 'webinars'), webinarData);
      console.log(`✅ Added webinar: "${webinar.title}" with ID: ${docRef.id}`);
    }
    
    console.log(`🎉 Successfully added ${shahzaibWebinars.length} Shahzaib Kamal webinars!`);
    console.log('📝 Note: Remember to replace PLACEHOLDER_ID_1 through PLACEHOLDER_ID_6 with actual YouTube video IDs from the channel');
  } catch (error) {
    console.error('❌ Error adding webinars:', error);
  }
}

// Check if Firebase config is available
if (!firebaseConfig.apiKey) {
  console.error('❌ Firebase configuration not found. Make sure your .env.local file is properly configured.');
  process.exit(1);
}

addShahzaibWebinars();