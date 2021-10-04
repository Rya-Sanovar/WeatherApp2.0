import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
const firebaseConfig = {
  apiKey: "AIzaSyDoEtwIeA9RJYbTItckYW17zuQi-HjhY-E",
  authDomain: "weather-app-51839.firebaseapp.com",
  projectId: "weather-app-51839",
  storageBucket: "weather-app-51839.appspot.com",
  messagingSenderId: "818231467774",
  appId: "1:818231467774:web:35a8ecce947d803f940faf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;