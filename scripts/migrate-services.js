#!/usr/bin/env node

/**
 * Service Migration Script
 * Migrates all 9 services with complete content to Firestore
 */

const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { initializeServices } = require('../lib/firebase-services');

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

async function runMigration() {
  try {
    console.log('🚀 Starting services migration to Firebase...');
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log('✅ Firebase initialized successfully');
    
    // Run the migration
    await initializeServices();
    
    console.log('🎉 Migration completed successfully!');
    console.log('   - All 9 services migrated to Firestore');
    console.log('   - Complete content from individual service pages included');
    console.log('   - Rich content fields populated (features, benefits, approach, etc.)');
    console.log('   - ServicesData arrays included for applicable services');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration if called directly
if (require.main === module) {
  runMigration();
}

module.exports = { runMigration };