import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGuY1jWV470qgKYHFZ3yoGaF6tiY9BPPQ",
  authDomain: "brilliongroup-ca.firebaseapp.com",
  projectId: "brilliongroup-ca",
  storageBucket: "brilliongroup-ca.firebasestorage.app",
  messagingSenderId: "738403545427",
  appId: "1:738403545427:web:c30dcdb127475b9c7af1a6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const newTitles = {
  'Hamza Khan': 'Trainer, UBK Academy',
  'Shahzaib Kamal': 'Founder of AKHEE',
  'Salman Mahmood': 'FullStack Developer, Prepreneurship',
};

const snapshot = await getDocs(collection(db, 'reviews'));
let updated = 0;
for (const d of snapshot.docs) {
  const data = d.data();
  if (data.userId === 'seed-testimonial' && newTitles[data.userName]) {
    await updateDoc(doc(db, 'reviews', d.id), { userTitle: newTitles[data.userName] });
    console.log(`Updated ${data.userName} -> ${newTitles[data.userName]}`);
    updated++;
  }
}
console.log(`Done. ${updated} review(s) updated.`);
process.exit(0);
