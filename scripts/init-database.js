const { initializeApp } = require('firebase/app');
const { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs,
  Timestamp,
  setDoc,
  doc 
} = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDGuY1jWV470qgKYHFZ3yoGaF6tiY9BPPQ",
  authDomain: "brilliongroup-ca.firebaseapp.com",
  projectId: "brilliongroup-ca",
  storageBucket: "brilliongroup-ca.firebasestorage.app",
  messagingSenderId: "738403545427",
  appId: "1:738403545427:web:c30dcdb127475b9c7af1a6",
  measurementId: "G-3WK4KKYKYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sample blog posts
const samplePosts = [
  {
    title: "The Future of Digital Transformation in 2025",
    content: `Digital transformation continues to evolve at breakneck speed, and 2025 promises to be a pivotal year for organizations worldwide. As we stand at the intersection of artificial intelligence, cloud computing, and data analytics, businesses must adapt their strategies to remain competitive.

## Key Trends Shaping Digital Transformation

### 1. AI-Powered Automation
Artificial intelligence is no longer a futuristic concept—it's here, and it's transforming how businesses operate. From chatbots handling customer service to machine learning algorithms optimizing supply chains, AI is becoming integral to digital transformation strategies.

### 2. Cloud-First Strategies
The cloud has moved from being a cost-saving measure to a strategic enabler. Organizations are adopting cloud-first strategies that prioritize scalability, flexibility, and innovation over traditional on-premises solutions.

### 3. Data-Driven Decision Making
Companies that leverage data analytics for decision-making are outperforming their competitors. The ability to collect, analyze, and act on data in real-time has become a critical competitive advantage.

## Challenges and Opportunities

While the opportunities are immense, organizations face several challenges:

- **Skills Gap**: Finding talent with the right digital skills remains a challenge
- **Security Concerns**: As digital footprints expand, so do security risks
- **Change Management**: Getting teams to adopt new technologies and processes requires careful planning

## Conclusion

The organizations that will thrive in 2025 are those that embrace digital transformation not as a one-time project, but as an ongoing journey of innovation and adaptation.`,
    excerpt: "Explore the key trends and challenges shaping digital transformation in 2025, from AI-powered automation to cloud-first strategies.",
    author: "Sarah Johnson",
    tags: ["Digital Transformation", "AI", "Cloud Computing", "2025 Trends"],
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop&auto=format",
    published: true,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  },
  {
    title: "Why Cloud Security Should Be Your Top Priority",
    content: `As organizations migrate more of their operations to the cloud, security has become a paramount concern. The shared responsibility model means that while cloud providers secure the infrastructure, organizations must secure their data, applications, and access controls.

## Understanding the Cloud Security Landscape

### The Shared Responsibility Model
Cloud security operates on a shared responsibility model where:
- **Cloud Provider**: Secures the infrastructure, physical security, and platform services
- **Customer**: Responsible for data, applications, operating systems, and network configurations

### Common Security Challenges

1. **Misconfigurations**: The leading cause of cloud security breaches
2. **Inadequate Access Controls**: Overprivileged accounts and weak authentication
3. **Data Exposure**: Unsecured databases and storage buckets
4. **Compliance Issues**: Meeting regulatory requirements in multi-cloud environments

## Best Practices for Cloud Security

### 1. Implement Zero Trust Architecture
Never trust, always verify. Implement strict access controls and continuous monitoring.

### 2. Regular Security Assessments
Conduct regular penetration testing and vulnerability assessments to identify weaknesses.

### 3. Data Encryption
Encrypt data both in transit and at rest to protect sensitive information.

### 4. Employee Training
Regular security awareness training helps prevent human errors that lead to breaches.

## The Cost of Poor Cloud Security

Data breaches can cost organizations millions in:
- Regulatory fines
- Loss of customer trust
- Business disruption
- Legal costs

## Conclusion

Investing in robust cloud security measures isn't just about compliance—it's about protecting your organization's most valuable assets and maintaining customer trust in an increasingly digital world.`,
    excerpt: "Learn why cloud security should be your organization's top priority and discover best practices for protecting your digital assets.",
    author: "Michael Chen",
    tags: ["Cloud Security", "Cybersecurity", "Data Protection", "Best Practices"],
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&auto=format",
    published: true,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  },
  {
    title: "Data Analytics: Turning Information into Business Intelligence",
    content: `In today's data-driven world, the ability to extract meaningful insights from vast amounts of information has become a critical business capability. Organizations that master data analytics gain a significant competitive advantage through informed decision-making.

## The Evolution of Data Analytics

### From Descriptive to Predictive
Modern analytics has evolved from simply describing what happened to predicting what will happen:

- **Descriptive Analytics**: What happened?
- **Diagnostic Analytics**: Why did it happen?
- **Predictive Analytics**: What will happen?
- **Prescriptive Analytics**: What should we do?

## Key Components of Successful Analytics

### 1. Data Quality
High-quality data is the foundation of reliable analytics. This includes:
- Accuracy: Data reflects reality
- Completeness: All necessary data is available
- Consistency: Data is uniform across systems
- Timeliness: Data is up-to-date and relevant

### 2. The Right Tools
Choosing the appropriate analytics tools depends on your specific needs:
- **Business Intelligence Platforms**: Tableau, Power BI, Qlik
- **Statistical Software**: R, SAS, SPSS
- **Big Data Platforms**: Hadoop, Spark, Apache Kafka
- **Cloud Analytics**: AWS Analytics, Google Analytics Intelligence, Azure Analytics

## Conclusion

Data analytics is not just about technology—it's about transforming how organizations make decisions. By combining the right data, tools, and people, businesses can unlock insights that drive growth, efficiency, and innovation.`,
    excerpt: "Discover how to transform raw data into actionable business intelligence and gain a competitive advantage through strategic analytics.",
    author: "Dr. Emily Rodriguez",
    tags: ["Data Analytics", "Business Intelligence", "Machine Learning", "Data Strategy"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format",
    published: true,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  }
];

// Sample dashboard stats
const dashboardStats = {
  totalUsers: 12543,
  pageViews: 89432,
  articles: 156,
  conversionRate: 4.2,
  changes: {
    users: "+12.5%",
    pageViews: "+23.1%",
    articles: "+8.3%",
    conversionRate: "+2.4%"
  }
};

// Sample activities
const activities = [
  {
    action: "User registered",
    user: "john.doe@company.com",
    time: Timestamp.now(),
    type: "user"
  },
  {
    action: "New article published",
    user: "editor@brilliondigital.ca",
    time: Timestamp.now(),
    type: "content"
  },
  {
    action: "Contact form submitted",
    user: "jane.smith@client.com",
    time: Timestamp.now(),
    type: "contact"
  },
  {
    action: "Service inquiry received",
    user: "ceo@startup.com",
    time: Timestamp.now(),
    type: "inquiry"
  }
];

// Sample page stats
const pageStats = [
  { path: "/", views: 15432, change: "+12.3%" },
  { path: "/services", views: 8765, change: "+8.7%" },
  { path: "/services/digital-advisory", views: 6543, change: "+15.2%" },
  { path: "/services/cloud-services", views: 5432, change: "+22.1%" },
  { path: "/about", views: 3421, change: "+5.4%" }
];

// Sample services data
const servicesData = [
  {
    title: "Digital Advisory",
    description: "Understand, anticipate, and accelerate with confidence.",
    icon: "Brain",
    href: "/services/digital-advisory",
    order: 1,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  },
  {
    title: "Applied Data & Analytics",
    description: "Transform raw data into actionable insights that drive business growth.",
    icon: "BarChart3",
    href: "/services/applied-data-analytics",
    order: 2,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  },
  {
    title: "Application Development",
    description: "Custom applications built with modern technologies to solve unique challenges.",
    icon: "Code",
    href: "/services/application-development",
    order: 3,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  },
  {
    title: "Digital Platforms",
    description: "Boost growth and productivity using ERP, CRM, and CMS platforms.",
    icon: "Globe",
    href: "/services/digital-platforms",
    order: 4,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  },
  {
    title: "Cyber Security & Privacy",
    description: "Minimize threats and proactively protect your most valuable assets.",
    icon: "Shield",
    href: "/services/cyber-security",
    order: 5,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  },
  {
    title: "Cloud Services",
    description: "Cloud migration and optimization services to accelerate transformation.",
    icon: "Cloud",
    href: "/services/cloud-services",
    order: 6,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  },
  {
    title: "Managed IT Services",
    description: "Reliable IT infrastructure management to keep your business running smoothly.",
    icon: "Settings",
    href: "/services/managed-it-services",
    order: 7,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  }
];

async function initializeDatabase() {
  try {
    console.log("🚀 Initializing Firebase database...");

    // Check if blog posts already exist
    const postsSnapshot = await getDocs(collection(db, 'blogPosts'));
    if (postsSnapshot.empty) {
      console.log("📝 Adding blog posts...");
      for (const post of samplePosts) {
        await addDoc(collection(db, 'blogPosts'), post);
      }
      console.log(`✅ Added ${samplePosts.length} blog posts`);
    } else {
      console.log(`ℹ️ Found ${postsSnapshot.size} existing blog posts, skipping...`);
    }

    // Add dashboard stats
    console.log("📊 Adding dashboard stats...");
    await setDoc(doc(db, 'dashboard', 'stats'), {
      ...dashboardStats,
      updatedAt: Timestamp.now()
    });
    console.log("✅ Dashboard stats added");

    // Add activities
    console.log("🔔 Adding activities...");
    const activitiesSnapshot = await getDocs(collection(db, 'activities'));
    if (activitiesSnapshot.empty) {
      for (const activity of activities) {
        await addDoc(collection(db, 'activities'), activity);
      }
      console.log(`✅ Added ${activities.length} activities`);
    } else {
      console.log(`ℹ️ Found ${activitiesSnapshot.size} existing activities, skipping...`);
    }

    // Add page stats
    console.log("📈 Adding page stats...");
    for (const page of pageStats) {
      const pageId = page.path.replace(/\//g, '_') || 'home';
      await setDoc(doc(db, 'pageStats', pageId), {
        ...page,
        updatedAt: Timestamp.now()
      });
    }
    console.log(`✅ Added ${pageStats.length} page stats`);

    // Add services
    console.log("🔧 Adding services...");
    const servicesSnapshot = await getDocs(collection(db, 'services'));
    if (servicesSnapshot.empty) {
      for (const service of servicesData) {
        await addDoc(collection(db, 'services'), service);
      }
      console.log(`✅ Added ${servicesData.length} services`);
    } else {
      console.log(`ℹ️ Found ${servicesSnapshot.size} existing services, skipping...`);
    }

    console.log("\n🎉 Database initialization complete!");
    console.log("\n📋 Summary:");
    console.log(`   • Blog Posts: ${samplePosts.length} posts added`);
    console.log(`   • Dashboard Stats: 1 document added`);
    console.log(`   • Activities: ${activities.length} activities added`);
    console.log(`   • Page Stats: ${pageStats.length} page stats added`);
    console.log(`   • Services: ${servicesData.length} services added`);
    
    console.log("\n🔗 Firebase Console: https://console.firebase.google.com/project/brilliongroup-ca/firestore");
    console.log("🌐 Admin Panels:");
    console.log("   • Posts: http://localhost:3001/admin/add-post");
    console.log("   • Services: http://localhost:3001/admin/services");
    console.log("   • Test Firebase: http://localhost:3001/test-firebase");
    
  } catch (error) {
    console.error("❌ Error initializing database:", error);
  } finally {
    process.exit(0);
  }
}

// Run the initialization
initializeDatabase();