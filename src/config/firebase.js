import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDNIdlGMmduFmjbvvuHCc2swfrFyPWFqxI",
  authDomain: "tiktok-jornada-f04f3.firebaseapp.com",
  projectId: "tiktok-jornada-f04f3",
  storageBucket: "tiktok-jornada-f04f3.appspot.com",
  messagingSenderId: "1022163724046",
  appId: "1:1022163724046:web:01bde0d29105a18333195f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;