// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCa-sjGSBuPJcH1zDeY4bERb6Q0n93rBSU',
  authDomain: 'bot-ia-383615.firebaseapp.com',
  projectId: 'bot-ia-383615',
  storageBucket: 'bot-ia-383615.appspot.com',
  messagingSenderId: '135900424965',
  appId: '1:135900424965:web:49960de3f220f33ec1656c',
  measurementId: 'G-NQQP5LZH1M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
