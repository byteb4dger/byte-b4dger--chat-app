import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'reactchat-fbcd0.firebaseapp.com',
  projectId: 'reactchat-fbcd0',
  storageBucket: 'reactchat-fbcd0.appspot.com',
  messagingSenderId: '943172236290',
  appId: '1:943172236290:web:f08e82004fbfcab754231b',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
