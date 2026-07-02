#!/usr/bin/env node

/**
 * Test Articles Script
 * Checks if articles exist in Firebase and creates sample articles if none exist
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

async function testArticles() {
  try {
    console.log('🔍 Testing Articles in Firebase...');
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log('✅ Firebase initialized');
    
    // Check articles collection
    const articlesRef = collection(db, 'articles');
    const snapshot = await getDocs(articlesRef);
    
    console.log(`📊 Found ${snapshot.docs.length} articles in Firebase`);
    
    if (snapshot.docs.length === 0) {
      console.log('📝 Creating sample articles...');
      
      const sampleArticles = [
        {
          slug: 'digital-transformation-guide-2024',
          title: 'Complete Guide to Digital Transformation in 2024',
          excerpt: 'Learn the essential steps and strategies for successful digital transformation initiatives.',
          content: 'Digital transformation is no longer optional for businesses looking to stay competitive. This comprehensive guide covers everything you need to know about modernizing your business processes, adopting new technologies, and creating a digital-first culture.',
          category: 'Digital Transformation',
          industry: 'Technology',
          topic: 'Strategy',
          author: 'Brillion Digital Team',
          date: '2024-03-15',
          dateValue: Timestamp.fromDate(new Date('2024-03-15')),
          readTime: '8 min read',
          icon: 'Brain',
          color: 'blue',
          image: '/insight-1.jpg',
          relatedServices: ['Digital Advisory', 'Digital Platforms'],
          downloadableAsset: '/digital-transformation-checklist-2024.pdf',
          keyTakeaways: [
            'Digital transformation is a strategic imperative',
            'Employee engagement is crucial for success',
            'Technology alone does not guarantee results',
            'Start with customer needs and work backwards'
          ],
          published: true,
          featured: true,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
          createdBy: 'system'
        },
        {
          slug: 'ai-roi-calculator-insights',
          title: 'Maximizing ROI with AI: Real-World Case Studies',
          excerpt: 'Discover how businesses are achieving measurable returns on AI investments with practical examples.',
          content: 'Artificial Intelligence investments can deliver significant returns when implemented strategically. This article explores real-world case studies and provides insights into measuring and maximizing AI ROI.',
          category: 'Artificial Intelligence',
          industry: 'Technology',
          topic: 'ROI',
          author: 'AI Solutions Team',
          date: '2024-03-10',
          dateValue: Timestamp.fromDate(new Date('2024-03-10')),
          readTime: '6 min read',
          icon: 'Brain',
          color: 'purple',
          image: '/insight-2.jpg',
          relatedServices: ['AI & Smart Solutions'],
          downloadableAsset: '/ai-roi-calculator-2024.pdf',
          keyTakeaways: [
            'AI ROI varies significantly by use case',
            'Data quality is fundamental to AI success',
            'Start with high-impact, low-risk pilot projects',
            'Measure both quantitative and qualitative benefits'
          ],
          published: true,
          featured: true,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
          createdBy: 'system'
        },
        {
          slug: 'cloud-migration-best-practices',
          title: 'Cloud Migration Best Practices: Lessons from 100+ Projects',
          excerpt: 'Essential strategies and common pitfalls to avoid when migrating to the cloud.',
          content: 'Based on our experience with over 100 cloud migration projects, this article shares proven strategies, common challenges, and best practices for successful cloud adoption.',
          category: 'Cloud Services',
          industry: 'Technology',
          topic: 'Migration',
          author: 'Cloud Services Team',
          date: '2024-03-05',
          dateValue: Timestamp.fromDate(new Date('2024-03-05')),
          readTime: '10 min read',
          icon: 'Cloud',
          color: 'blue',
          image: '/insight-3.jpg',
          relatedServices: ['Cloud Services'],
          downloadableAsset: '/cloud-migration-whitepaper-2024.pdf',
          keyTakeaways: [
            'Assess your current infrastructure thoroughly',
            'Plan for security and compliance from day one',
            'Train your team before and during migration',
            'Monitor costs and optimize continuously'
          ],
          published: true,
          featured: false,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
          createdBy: 'system'
        },
        {
          slug: 'cybersecurity-assessment-guide',
          title: 'Comprehensive Cybersecurity Assessment: What You Need to Know',
          excerpt: 'A step-by-step guide to conducting thorough cybersecurity assessments for your organization.',
          content: 'Cybersecurity threats are evolving rapidly. This guide provides a framework for conducting comprehensive security assessments to identify vulnerabilities and strengthen your defenses.',
          category: 'Cybersecurity',
          industry: 'Security',
          topic: 'Assessment',
          author: 'Security Team',
          date: '2024-02-28',
          dateValue: Timestamp.fromDate(new Date('2024-02-28')),
          readTime: '7 min read',
          icon: 'Shield',
          color: 'red',
          image: '/insight-4.jpg',
          relatedServices: ['Cyber Security'],
          downloadableAsset: '/cybersecurity-assessment-guide-2024.pdf',
          keyTakeaways: [
            'Regular assessments are crucial for security posture',
            'Include both technical and human factors',
            'Document findings and create action plans',
            'Test your incident response procedures'
          ],
          published: true,
          featured: false,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
          createdBy: 'system'
        }
      ];
      
      for (const article of sampleArticles) {
        const docRef = await addDoc(articlesRef, article);
        console.log(`✅ Created article: ${article.title} (ID: ${docRef.id})`);
      }
      
      console.log(`🎉 Created ${sampleArticles.length} sample articles!`);
    } else {
      console.log('📋 Existing articles:');
      snapshot.docs.forEach(doc => {
        const data = doc.data();
        console.log(`  - ${data.title} (${data.category})`);
      });
    }
    
    return true;
  } catch (error) {
    console.error('❌ Articles test failed:', error);
    return false;
  }
}

// Run the test
testArticles().then(success => {
  console.log(success ? '\n✅ Articles test completed successfully' : '\n❌ Articles test failed');
  process.exit(success ? 0 : 1);
}).catch(error => {
  console.error('💥 Articles test script error:', error);
  process.exit(1);
});