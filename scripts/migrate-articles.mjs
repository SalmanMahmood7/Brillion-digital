#!/usr/bin/env node

/**
 * Migrate Articles Script
 * Migrates all the original fallback articles from the insights page to Firebase
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, Timestamp } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGuY1jWV470qgKYHFZ3yoGaF6tiY9BPPQ",
  authDomain: "brilliongroup-ca.firebaseapp.com", 
  projectId: "brilliongroup-ca",
  storageBucket: "brilliongroup-ca.firebasestorage.app",
  messagingSenderId: "738403545427",
  appId: "1:738403545427:web:c30dcdb127475b9c7af1a6"
};

// Original fallback articles from page-backup.tsx
const originalArticles = [
  {
    slug: "microsoft-365-team-adoption",
    title: "How to get your whole team using Microsoft 365",
    excerpt: "Discover strategies to drive adoption and maximize the value of your Microsoft 365 investment across your entire organization.",
    content: "Microsoft 365 adoption is more than just providing users with access to the tools. It requires strategic planning, proper training, and ongoing support to ensure your entire team embraces these powerful productivity tools. This guide covers proven strategies to increase adoption rates, reduce resistance to change, and maximize your return on investment. Learn how to create a culture of collaboration, implement effective training programs, and measure success through key adoption metrics.",
    category: "Digital Transformation",
    industry: "Healthcare",
    topic: "Productivity",
    author: "BRILLION Digital Team",
    date: "2024-03-15",
    dateValue: new Date("2024-03-15"),
    readTime: "5 min read",
    icon: "TrendingUp",
    color: "blue",
    image: "/workplace.jpg",
    relatedServices: ["Digital Platforms", "Dynamics 365 & Microsoft Solutions"],
    downloadableAsset: "/Education pdf.pdf",
    keyTakeaways: ["Increase adoption by 80%", "Reduce training time by 50%", "Maximize ROI"],
    published: true,
    featured: false
  },
  {
    slug: "cloud-security-2024",
    title: "The Future of Cloud Security in 2024",
    excerpt: "Explore the latest trends and best practices in cloud security to protect your digital assets in an evolving threat landscape.",
    content: "As organizations continue their digital transformation journey, cloud security becomes increasingly critical. This comprehensive guide explores emerging threats, advanced security frameworks, and best practices for protecting your cloud infrastructure. Learn about zero-trust architecture, AI-powered threat detection, and compliance automation strategies that will define cloud security in 2024 and beyond.",
    category: "Cybersecurity",
    industry: "Financial Services",
    topic: "Security",
    author: "Security Team",
    date: "2024-03-12",
    dateValue: new Date("2024-03-12"),
    readTime: "7 min read",
    icon: "Shield",
    color: "red",
    image: "/cyber-security-team.jpg",
    relatedServices: ["Cyber Security", "Cloud Services"],
    downloadableAsset: "/Restaurant PDF.pdf",
    keyTakeaways: ["Zero-trust architecture", "AI-powered threat detection", "Compliance automation"],
    published: true,
    featured: true
  },
  {
    slug: "ai-powered-analytics",
    title: "AI-Powered Analytics: Transforming Business Intelligence",
    excerpt: "Learn how artificial intelligence is revolutionizing data analytics and providing unprecedented insights for business growth.",
    content: "Artificial intelligence is transforming how businesses analyze and interpret data. From predictive analytics to real-time insights, AI-powered business intelligence tools are enabling organizations to make faster, more accurate decisions. This article explores the latest AI technologies, implementation strategies, and real-world applications that are reshaping the analytics landscape.",
    category: "Artificial Intelligence",
    industry: "Retail",
    topic: "AI & Machine Learning",
    author: "AI Research Team",
    date: "2024-03-08",
    dateValue: new Date("2024-03-08"),
    readTime: "6 min read",
    icon: "Brain",
    color: "purple",
    image: "/ai-data-analysis.jpg",
    relatedServices: ["Applied Data & Analytics", "AI & Smart Solutions"],
    downloadableAsset: "/transportation pdf.pdf",
    keyTakeaways: ["Predictive analytics", "Real-time insights", "Data democratization"],
    published: true,
    featured: true
  },
  {
    slug: "enterprise-cloud-migration-guide",
    title: "Cloud Migration Best Practices for Enterprise",
    excerpt: "A comprehensive guide to successfully migrating your enterprise applications to the cloud with minimal downtime.",
    content: "Enterprise cloud migration requires careful planning, strategic execution, and ongoing optimization. This comprehensive guide shares proven methodologies, risk mitigation strategies, and cost optimization techniques developed through hundreds of successful enterprise migrations. Learn the six-step framework that ensures smooth transitions while maximizing cloud benefits.",
    category: "Cloud Services",
    industry: "Manufacturing",
    topic: "Cloud Migration",
    author: "Cloud Architects",
    date: "2024-03-05",
    dateValue: new Date("2024-03-05"),
    readTime: "8 min read",
    icon: "Cloud",
    color: "blue",
    image: "/cloud-migration.jpg",
    relatedServices: ["Cloud Services", "Managed IT Services"],
    downloadableAsset: "/managments companies 2.pdf",
    keyTakeaways: ["6-step migration framework", "Cost optimization strategies", "Risk mitigation"],
    published: true,
    featured: false
  },
  {
    slug: "nextjs-scalable-applications",
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Deep dive into modern web development practices and how Next.js can help you build performant, scalable applications.",
    content: "Next.js has emerged as the leading React framework for building production-ready web applications. This comprehensive guide covers advanced patterns, performance optimization techniques, and scalability strategies that enable developers to build enterprise-grade applications. Learn about server-side rendering, static site generation, API routes, and deployment best practices.",
    category: "Software Development",
    industry: "Technology",
    topic: "Web Development",
    author: "Dev Team",
    date: "2024-03-01",
    dateValue: new Date("2024-03-01"),
    readTime: "10 min read",
    icon: "Cpu",
    color: "blue",
    image: "/web-dev.jpg",
    relatedServices: ["Software Development"],
    downloadableAsset: "/digital-transformation-checklist-2024.pdf",
    keyTakeaways: ["Server-side rendering", "Performance optimization", "Scalability patterns"],
    published: true,
    featured: false
  },
  {
    slug: "infrastructure-as-code-devops",
    title: "Infrastructure as Code: DevOps Revolution",
    excerpt: "Explore how Infrastructure as Code is transforming DevOps practices and enabling more reliable, scalable deployments.",
    content: "Infrastructure as Code (IaC) represents a fundamental shift in how organizations manage and deploy their IT infrastructure. This guide explores how IaC principles, tools, and practices are revolutionizing DevOps workflows, improving deployment reliability, and enabling true scalability. Learn about popular IaC tools, implementation strategies, and best practices for modern infrastructure management.",
    category: "Cloud Services",
    industry: "Healthcare",
    topic: "Infrastructure",
    author: "DevOps Team",
    date: "2024-02-28",
    dateValue: new Date("2024-02-28"),
    readTime: "9 min read",
    icon: "Server",
    color: "blue",
    image: "/cyber-infra.jpg",
    relatedServices: ["Cloud Services", "Managed IT Services"],
    downloadableAsset: "/cloud-migration-whitepaper-2024.pdf",
    keyTakeaways: ["Automated deployments", "Version control for infrastructure", "Improved reliability"],
    published: true,
    featured: false
  },
  {
    slug: "digital-transformation-education",
    title: "Digital Transformation in Education: A Complete Guide",
    excerpt: "How educational institutions are leveraging technology to improve learning outcomes and operational efficiency.",
    content: "Educational institutions worldwide are embracing digital transformation to enhance learning experiences and operational efficiency. This comprehensive guide examines successful digital transformation strategies in education, from K-12 schools to higher education institutions. Explore innovative technologies, implementation frameworks, and change management strategies that drive successful educational transformation.",
    category: "Digital Transformation",
    industry: "Education",
    topic: "Digital Strategy",
    author: "Education Team",
    date: "2024-02-25",
    dateValue: new Date("2024-02-25"),
    readTime: "7 min read",
    icon: "BookOpen",
    color: "blue",
    image: "/digital-strategy.jpg",
    relatedServices: ["Digital Advisory", "Digital Platforms"],
    downloadableAsset: "/Education pdf.pdf",
    keyTakeaways: ["Enhanced learning outcomes", "Operational efficiency", "Technology integration"],
    published: true,
    featured: false
  },
  {
    slug: "cybersecurity-retail-industry",
    title: "Cybersecurity Essentials for Retail Industry",
    excerpt: "Protect your retail business from cyber threats with comprehensive security strategies and best practices.",
    content: "The retail industry faces unique cybersecurity challenges, from protecting customer payment data to securing complex supply chains. This essential guide covers the specific security threats facing retail organizations and provides practical strategies for building robust security frameworks. Learn about PCI DSS compliance, fraud prevention, and emerging security technologies designed for retail environments.",
    category: "Cybersecurity",
    industry: "Retail",
    topic: "Security",
    author: "Security Team",
    date: "2024-02-22",
    dateValue: new Date("2024-02-22"),
    readTime: "6 min read",
    icon: "Shield",
    color: "red",
    image: "/cyber-analytics-dash.jpg",
    relatedServices: ["Cyber Security"],
    downloadableAsset: "/cybersecurity-assessment-guide-2024.pdf",
    keyTakeaways: ["PCI DSS compliance", "Fraud prevention", "Supply chain security"],
    published: true,
    featured: false
  },
  {
    slug: "microsoft-dynamics-implementation",
    title: "Microsoft Dynamics 365 Implementation Best Practices",
    excerpt: "Complete guide to successfully implementing Dynamics 365 across your organization with minimal disruption.",
    content: "Microsoft Dynamics 365 implementation success depends on careful planning, stakeholder engagement, and following proven methodologies. This comprehensive guide shares best practices developed through hundreds of successful Dynamics implementations across various industries. Learn about project planning, data migration strategies, user adoption techniques, and post-implementation optimization.",
    category: "Digital Transformation",
    industry: "Manufacturing",
    topic: "ERP Implementation",
    author: "Microsoft Team",
    date: "2024-02-20",
    dateValue: new Date("2024-02-20"),
    readTime: "8 min read",
    icon: "TrendingUp",
    color: "blue",
    image: "/365.png",
    relatedServices: ["Dynamics 365 & Microsoft Solutions", "Digital Platforms"],
    downloadableAsset: "/digital-transformation-checklist-2024.pdf",
    keyTakeaways: ["Implementation methodology", "Data migration strategies", "User adoption"],
    published: true,
    featured: false
  },
  {
    slug: "power-platform-automation",
    title: "Automating Business Processes with Microsoft Power Platform",
    excerpt: "Discover how Power Platform can streamline operations and reduce manual work across departments.",
    content: "Microsoft Power Platform enables organizations to automate business processes, create custom applications, and analyze data without extensive coding. This practical guide demonstrates how to leverage Power Automate, Power Apps, and Power BI to streamline operations, reduce manual work, and improve operational efficiency across departments.",
    category: "Digital Transformation",
    industry: "Financial Services",
    topic: "Process Automation",
    author: "Automation Team",
    date: "2024-02-18",
    dateValue: new Date("2024-02-18"),
    readTime: "6 min read",
    icon: "Zap",
    color: "orange",
    image: "/Power-Platform.webp",
    relatedServices: ["Dynamics 365 & Microsoft Solutions", "Digital Platforms"],
    downloadableAsset: "/digital-transformation-checklist-2024.pdf",
    keyTakeaways: ["Process automation", "Low-code development", "Operational efficiency"],
    published: true,
    featured: false
  },
  {
    slug: "database-migration-strategies",
    title: "Database Migration to Cloud: Strategies and Best Practices",
    excerpt: "Learn effective strategies for migrating enterprise databases to cloud platforms safely and efficiently.",
    content: "Database migration to the cloud requires careful planning, thorough testing, and risk mitigation strategies. This comprehensive guide covers proven methodologies for migrating enterprise databases to cloud platforms while ensuring data integrity, minimizing downtime, and optimizing performance. Learn about migration tools, testing strategies, and post-migration optimization techniques.",
    category: "Cloud Services",
    industry: "Healthcare",
    topic: "Database Migration",
    author: "Database Team",
    date: "2024-02-15",
    dateValue: new Date("2024-02-15"),
    readTime: "9 min read",
    icon: "Database",
    color: "blue",
    image: "/database-management.jpg",
    relatedServices: ["Cloud Services", "Applied Data & Analytics"],
    downloadableAsset: "/cloud-migration-whitepaper-2024.pdf",
    keyTakeaways: ["Migration methodologies", "Data integrity", "Performance optimization"],
    published: true,
    featured: false
  },
  {
    slug: "mobile-app-development-trends",
    title: "Mobile App Development Trends for 2024",
    excerpt: "Stay ahead with the latest mobile development trends, frameworks, and user experience innovations.",
    content: "Mobile app development continues to evolve with new frameworks, development approaches, and user experience innovations. This comprehensive guide explores the latest trends shaping mobile development in 2024, including cross-platform development, progressive web apps, AI integration, and emerging user interface paradigms that are defining the future of mobile applications.",
    category: "Software Development",
    industry: "Technology",
    topic: "Mobile Development",
    author: "Mobile Dev Team",
    date: "2024-02-12",
    dateValue: new Date("2024-02-12"),
    readTime: "7 min read",
    icon: "Cpu",
    color: "blue",
    image: "/mobile-dev.jpg",
    relatedServices: ["Software Development"],
    downloadableAsset: "/digital-transformation-checklist-2024.pdf",
    keyTakeaways: ["Cross-platform development", "Progressive web apps", "AI integration"],
    published: true,
    featured: false
  },
  {
    slug: "data-visualization-techniques",
    title: "Advanced Data Visualization Techniques for Business Intelligence",
    excerpt: "Master the art of data storytelling with advanced visualization techniques and modern BI tools.",
    content: "Effective data visualization transforms complex datasets into compelling stories that drive business decisions. This advanced guide explores sophisticated visualization techniques, design principles, and modern BI tools that enable organizations to create impactful data presentations. Learn about interactive dashboards, real-time visualizations, and storytelling techniques that make data accessible and actionable.",
    category: "Applied Data & Analytics",
    industry: "Retail",
    topic: "Data Visualization",
    author: "BI Team",
    date: "2024-02-10",
    dateValue: new Date("2024-02-10"),
    readTime: "6 min read",
    icon: "BarChart",
    color: "blue",
    image: "/data-visualization.jpg",
    relatedServices: ["Applied Data & Analytics"],
    downloadableAsset: "/ai-roi-calculator-2024.pdf",
    keyTakeaways: ["Interactive dashboards", "Data storytelling", "Visual design principles"],
    published: true,
    featured: false
  },
  {
    slug: "azure-cloud-security",
    title: "Securing Your Azure Cloud Infrastructure",
    excerpt: "Comprehensive guide to implementing robust security measures in your Azure cloud environment.",
    content: "Azure cloud security requires a multi-layered approach combining native security services, best practices, and continuous monitoring. This comprehensive guide covers Azure security fundamentals, advanced threat protection, compliance frameworks, and security automation techniques. Learn how to build a robust security posture that protects your cloud workloads and data.",
    category: "Cybersecurity",
    industry: "Financial Services",
    topic: "Cloud Security",
    author: "Cloud Security Team",
    date: "2024-02-08",
    dateValue: new Date("2024-02-08"),
    readTime: "8 min read",
    icon: "Shield",
    color: "red",
    image: "/azure-migration.jpg",
    relatedServices: ["Cyber Security", "Cloud Services"],
    downloadableAsset: "/cybersecurity-assessment-guide-2024.pdf",
    keyTakeaways: ["Multi-layered security", "Threat protection", "Compliance frameworks"],
    published: true,
    featured: false
  },
  {
    slug: "digital-transformation-healthcare",
    title: "Digital Transformation in Healthcare: A Comprehensive Guide",
    excerpt: "How healthcare organizations are leveraging technology to improve patient outcomes and operational efficiency.",
    content: "Healthcare digital transformation is revolutionizing patient care delivery, operational efficiency, and clinical outcomes. This comprehensive guide examines successful transformation strategies in healthcare organizations, from electronic health records to telemedicine platforms. Learn about regulatory compliance, patient data security, and innovative technologies that are reshaping modern healthcare delivery.",
    category: "Digital Transformation",
    industry: "Healthcare",
    topic: "Healthcare Innovation",
    author: "Healthcare Team",
    date: "2024-02-05",
    dateValue: new Date("2024-02-05"),
    readTime: "10 min read",
    icon: "TrendingUp",
    color: "blue",
    image: "/digital-consulting.jpg",
    relatedServices: ["Digital Advisory", "Digital Platforms"],
    downloadableAsset: "/digital-transformation-checklist-2024.pdf",
    keyTakeaways: ["Patient outcomes", "Operational efficiency", "Regulatory compliance"],
    published: true,
    featured: false
  },
  {
    slug: "managed-services-benefits",
    title: "The Strategic Value of Managed IT Services",
    excerpt: "Understanding how managed IT services can reduce costs, improve reliability, and accelerate growth.",
    content: "Managed IT services enable organizations to focus on core business objectives while ensuring reliable, secure, and scalable technology infrastructure. This strategic guide explores the business value of managed services, from cost reduction and risk mitigation to improved operational efficiency and technology innovation. Learn how to evaluate managed service providers and build successful partnerships.",
    category: "Cloud Services",
    industry: "Manufacturing",
    topic: "Managed Services",
    author: "Managed Services Team",
    date: "2024-02-03",
    dateValue: new Date("2024-02-03"),
    readTime: "5 min read",
    icon: "Cloud",
    color: "blue",
    image: "/managed-it.jpg",
    relatedServices: ["Managed IT Services", "Cloud Services"],
    downloadableAsset: "/cloud-migration-whitepaper-2024.pdf",
    keyTakeaways: ["Cost reduction", "Risk mitigation", "Operational efficiency"],
    published: true,
    featured: false
  },
  {
    slug: "ai-machine-learning-retail",
    title: "AI and Machine Learning Applications in Retail",
    excerpt: "Explore how AI is revolutionizing retail through personalized experiences, inventory management, and predictive analytics.",
    content: "Artificial intelligence and machine learning are transforming retail operations from customer experience to supply chain management. This comprehensive guide explores practical AI applications in retail, including personalization engines, demand forecasting, inventory optimization, and fraud detection. Learn how retailers are leveraging AI to improve customer satisfaction and operational efficiency.",
    category: "Artificial Intelligence",
    industry: "Retail",
    topic: "AI & Machine Learning",
    author: "AI Retail Team",
    date: "2024-01-30",
    dateValue: new Date("2024-01-30"),
    readTime: "8 min read",
    icon: "Brain",
    color: "purple",
    image: "/ai-machine-learning.jpg",
    relatedServices: ["AI & Smart Solutions", "Applied Data & Analytics"],
    downloadableAsset: "/ai-roi-calculator-2024.pdf",
    keyTakeaways: ["Personalization engines", "Demand forecasting", "Inventory optimization"],
    published: true,
    featured: false
  },
  {
    slug: "network-security-best-practices",
    title: "Network Security Best Practices for Modern Enterprises",
    excerpt: "Essential network security strategies to protect your organization from evolving cyber threats.",
    content: "Modern network security requires a comprehensive approach that addresses traditional perimeter security and emerging threats in cloud and hybrid environments. This essential guide covers network security fundamentals, advanced threat detection, zero-trust networking, and security monitoring strategies. Learn how to build resilient network architectures that protect against sophisticated cyber attacks.",
    category: "Cybersecurity",
    industry: "Technology",
    topic: "Network Security",
    author: "Network Security Team",
    date: "2024-01-28",
    dateValue: new Date("2024-01-28"),
    readTime: "7 min read",
    icon: "Shield",
    color: "red",
    image: "/cyber-network.jpg",
    relatedServices: ["Cyber Security", "Managed IT Services"],
    downloadableAsset: "/cybersecurity-assessment-guide-2024.pdf",
    keyTakeaways: ["Zero-trust networking", "Threat detection", "Network monitoring"],
    published: true,
    featured: false
  }
];

async function migrateArticles() {
  try {
    console.log('🚀 Starting Articles Migration to Firebase...');
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log('✅ Firebase initialized');
    
    // Check current articles count
    const articlesRef = collection(db, 'articles');
    const currentSnapshot = await getDocs(articlesRef);
    
    console.log(`📊 Current articles in Firebase: ${currentSnapshot.docs.length}`);
    console.log(`📝 Articles to migrate: ${originalArticles.length}`);
    
    let migratedCount = 0;
    let skippedCount = 0;
    
    // Check if articles already exist by slug
    const existingSlugs = currentSnapshot.docs.map(doc => doc.data().slug);
    console.log(`🔍 Existing slugs: ${existingSlugs.length > 0 ? existingSlugs.join(', ') : 'none'}`);
    
    for (const article of originalArticles) {
      // Check if article already exists
      if (existingSlugs.includes(article.slug)) {
        console.log(`⏭️  Skipping existing article: ${article.title}`);
        skippedCount++;
        continue;
      }
      
      // Convert article data for Firestore
      const articleData = {
        ...article,
        dateValue: Timestamp.fromDate(article.dateValue),
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        createdBy: 'migration'
      };
      
      // Remove the original dateValue since we converted it
      delete articleData.dateValue;
      articleData.dateValue = Timestamp.fromDate(article.dateValue);
      
      try {
        const docRef = await addDoc(articlesRef, articleData);
        console.log(`✅ Migrated: ${article.title} (ID: ${docRef.id})`);
        migratedCount++;
      } catch (error) {
        console.error(`❌ Failed to migrate: ${article.title}`, error.message);
      }
    }
    
    // Final summary
    console.log('\n📋 Migration Summary:');
    console.log('='.repeat(50));
    console.log(`Total articles in source: ${originalArticles.length}`);
    console.log(`Successfully migrated: ${migratedCount}`);
    console.log(`Skipped (already exist): ${skippedCount}`);
    console.log(`Failed: ${originalArticles.length - migratedCount - skippedCount}`);
    
    // Verify final count
    const finalSnapshot = await getDocs(articlesRef);
    console.log(`📊 Final article count in Firebase: ${finalSnapshot.docs.length}`);
    
    if (migratedCount > 0) {
      console.log('\n🎉 Article migration completed successfully!');
      return true;
    } else {
      console.log('\n⚠️  No new articles were migrated (all may already exist)');
      return true;
    }
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    return false;
  }
}

// Run the migration
migrateArticles().then(success => {
  console.log(success ? '\n✅ Migration completed successfully' : '\n❌ Migration failed');
  process.exit(success ? 0 : 1);
}).catch(error => {
  console.error('💥 Migration script error:', error);
  process.exit(1);
});