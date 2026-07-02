// Simple script to initialize Firebase database
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDGuY1jWV470qgKYHFZ3yoGaF6tiY9BPPQ",
  authDomain: "brilliongroup-ca.firebaseapp.com",
  projectId: "brilliongroup-ca",
  storageBucket: "brilliongroup-ca.firebasestorage.app",
  messagingSenderId: "738403545427",
  appId: "1:738403545427:web:c30dcdb127475b9c7af1a6",
  measurementId: "G-3WK4KKYKYC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function initializeDatabase() {
  try {
    console.log('🚀 Checking Firebase connection...');
    
    // Test connection by checking existing data
    const servicesCol = collection(db, 'detailedServices');
    const snapshot = await getDocs(servicesCol);
    
    console.log(`📊 Found ${snapshot.docs.length} existing services in database`);
    
    if (snapshot.docs.length === 0) {
      console.log('📝 Database appears empty - this is normal for first setup');
      console.log('✅ Firebase connection successful!');
    } else {
      console.log('✅ Firebase connection successful! Database has existing data.');
      snapshot.docs.forEach(doc => {
        console.log(`  - Service: ${doc.data().title || doc.id}`);
      });
    }
    
    console.log('🎉 Database initialization check completed successfully!');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Firebase connection failed:', error.message);
    console.error('📋 Error details:', error);
    process.exit(1);
  }
}

initializeDatabase();