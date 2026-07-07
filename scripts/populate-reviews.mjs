import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, Timestamp } from 'firebase/firestore';

// Firebase configuration (same fallbacks as lib/firebase.ts)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDGuY1jWV470qgKYHFZ3yoGaF6tiY9BPPQ",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "brilliongroup-ca.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "brilliongroup-ca",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "brilliongroup-ca.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "738403545427",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:738403545427:web:c30dcdb127475b9c7af1a6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Testimonials from the case studies page
const testimonialReviews = [
  {
    userId: 'seed-testimonial',
    userName: 'Hamza Khan',
    userEmail: '',
    userTitle: 'Trainer, UBK Academy',
    rating: 5,
    text: 'Brillion transformed our entire infrastructure. The efficiency gains have been remarkable.',
  },
  {
    userId: 'seed-testimonial',
    userName: 'Shahzaib Kamal',
    userEmail: '',
    userTitle: 'Founder of AKHEE',
    rating: 5,
    text: 'Their data analytics solution gave us insights we never knew existed. Game-changing work.',
  },
  {
    userId: 'seed-testimonial',
    userName: 'Salman Mahmood',
    userEmail: '',
    userTitle: 'FullStack Developer, Prepreneurship',
    rating: 5,
    text: 'The security implementation was flawless. We sleep better knowing our data is protected.',
  },
];

async function populateReviews() {
  const snapshot = await getDocs(collection(db, 'reviews'));
  const existing = snapshot.docs.map((d) => d.data());

  let added = 0;
  for (const review of testimonialReviews) {
    const duplicate = existing.some(
      (r) => r.userName === review.userName && r.text === review.text
    );
    if (duplicate) {
      console.log(`Skipping (already exists): ${review.userName}`);
      continue;
    }
    await addDoc(collection(db, 'reviews'), {
      ...review,
      createdAt: Timestamp.now(),
    });
    console.log(`Added review by ${review.userName}`);
    added++;
  }

  console.log(`Done. ${added} review(s) added, ${testimonialReviews.length - added} skipped.`);
  process.exit(0);
}

populateReviews().catch((err) => {
  console.error('Failed to populate reviews:', err);
  process.exit(1);
});
