#!/usr/bin/env node

/**
 * Test Services Script
 * Verifies that all 9 services are correctly stored and retrievable from Firebase
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGuY1jWV470qgKYHFZ3yoGaF6tiY9BPPQ",
  authDomain: "brilliongroup-ca.firebaseapp.com", 
  projectId: "brilliongroup-ca",
  storageBucket: "brilliongroup-ca.firebasestorage.app",
  messagingSenderId: "738403545427",
  appId: "1:738403545427:web:c30dcdb127475b9c7af1a6"
};

async function testServices() {
  try {
    console.log('🔍 Testing Firebase Services Integration...');
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log('✅ Firebase initialized');
    
    // Test services retrieval
    const servicesRef = collection(db, 'services');
    const q = query(servicesRef, orderBy('order', 'asc'));
    const snapshot = await getDocs(q);
    
    const services = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    console.log(`📊 Found ${services.length} services in Firebase`);
    
    if (services.length === 0) {
      console.log('❌ No services found in Firebase!');
      return false;
    }
    
    // Verify all expected services are present
    const expectedServices = [
      'Digital Advisory',
      'Applied Data & Analytics', 
      'Software Development',
      'Digital Platforms',
      'Cyber Security',
      'Cloud Services',
      'Managed IT Services',
      'Dynamics 365 & Microsoft Solutions',
      'AI & Smart Solutions'
    ];
    
    console.log('\n📝 Service Details:');
    console.log('='.repeat(50));
    
    let allServicesFound = true;
    expectedServices.forEach((expectedTitle, index) => {
      const service = services.find(s => 
        s.title === expectedTitle || 
        s.title.includes(expectedTitle.split(' ')[0])
      );
      
      if (service) {
        console.log(`✅ ${index + 1}. ${service.title}`);
        console.log(`   📄 Description: ${service.description.substring(0, 60)}...`);
        console.log(`   🔗 Href: ${service.href}`);
        console.log(`   🎯 Order: ${service.order}`);
        
        // Check for rich content fields
        const richFields = [];
        if (service.features) richFields.push(`Features: ${service.features.length}`);
        if (service.benefits) richFields.push(`Benefits: ${service.benefits.length}`);
        if (service.approach) richFields.push(`Approach: ✓`);
        if (service.servicesData) richFields.push(`ServicesData: ${service.servicesData.length}`);
        
        if (richFields.length > 0) {
          console.log(`   🎨 Rich Content: ${richFields.join(', ')}`);
        }
        console.log();
      } else {
        console.log(`❌ ${index + 1}. ${expectedTitle} - NOT FOUND`);
        allServicesFound = false;
      }
    });
    
    // Summary
    console.log('📋 Summary:');
    console.log('='.repeat(50));
    console.log(`Total Services: ${services.length}/9`);
    console.log(`All Expected Services: ${allServicesFound ? '✅' : '❌'}`);
    
    // Check rich content statistics
    const withFeatures = services.filter(s => s.features && s.features.length > 0).length;
    const withBenefits = services.filter(s => s.benefits && s.benefits.length > 0).length;
    const withApproach = services.filter(s => s.approach).length;
    const withServicesData = services.filter(s => s.servicesData && s.servicesData.length > 0).length;
    
    console.log(`Services with Features: ${withFeatures}/${services.length}`);
    console.log(`Services with Benefits: ${withBenefits}/${services.length}`);
    console.log(`Services with Approach: ${withApproach}/${services.length}`);
    console.log(`Services with ServicesData: ${withServicesData}/${services.length}`);
    
    if (services.length === 9 && allServicesFound) {
      console.log('\n🎉 All tests passed! Firebase services integration is working correctly.');
      return true;
    } else {
      console.log('\n⚠️  Some tests failed. Please check the migration.');
      return false;
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return false;
  }
}

// Run the test
testServices().then(success => {
  console.log(success ? '\n✅ Test completed successfully' : '\n❌ Test failed');
  process.exit(success ? 0 : 1);
}).catch(error => {
  console.error('💥 Test script error:', error);
  process.exit(1);
});