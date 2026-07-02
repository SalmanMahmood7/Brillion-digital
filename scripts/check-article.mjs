#!/usr/bin/env node

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGuY1jWV470qgKYHFZ3yoGaF6tiY9BPPQ",
  authDomain: "brilliongroup-ca.firebaseapp.com", 
  projectId: "brilliongroup-ca",
  storageBucket: "brilliongroup-ca.firebasestorage.app",
  messagingSenderId: "738403545427",
  appId: "1:738403545427:web:c30dcdb127475b9c7af1a6"
};

async function checkArticle() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    // Check for articles with "Strategic Value" in title
    const articlesRef = collection(db, 'articles');
    const q = query(articlesRef, where('title', '==', 'The Strategic Value of Managed IT Services'));
    const querySnapshot = await getDocs(q);

    console.log('Found articles:', querySnapshot.size);
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log('Article ID:', doc.id);
      console.log('Title:', data.title);
      console.log('Image:', data.image);
      console.log('Slug:', data.slug);
      console.log('---');
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

checkArticle();