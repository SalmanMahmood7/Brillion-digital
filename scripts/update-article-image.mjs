#!/usr/bin/env node

/**
 * Update Article Image Script
 * Updates a specific article image in the Firebase database
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, updateDoc, doc, query, where } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGuY1jWV470qgKYHFZ3yoGaF6tiY9BPPQ",
  authDomain: "brilliongroup-ca.firebaseapp.com", 
  projectId: "brilliongroup-ca",
  storageBucket: "brilliongroup-ca.firebasestorage.app",
  messagingSenderId: "738403545427",
  appId: "1:738403545427:web:c30dcdb127475b9c7af1a6"
};

async function updateArticleImage() {
  try {
    console.log('🚀 Starting Article Image Update...');
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    console.log('✅ Firebase initialized');

    // Find the article with the slug "managed-services-benefits"
    const articlesRef = collection(db, 'articles');
    const q = query(articlesRef, where('slug', '==', 'managed-services-benefits'));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log('❌ Article not found');
      return;
    }

    // Update the first matching article
    const articleDoc = querySnapshot.docs[0];
    const articleRef = doc(db, 'articles', articleDoc.id);
    
    await updateDoc(articleRef, {
      image: '/team-coding.jpg'
    });

    console.log('✅ Article image updated successfully!');
    console.log('📝 Article:', articleDoc.data().title);
    console.log('🖼️  New image: /team-coding.jpg');

  } catch (error) {
    console.error('❌ Error updating article:', error);
  }
}

updateArticleImage();