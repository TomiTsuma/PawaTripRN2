// Import the functions you need from the SDKs you need
import { getDatabase } from 'firebase/database'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAu19oy2n9MFMcXx_zug-IMJX5oUXqhnyg',
  authDomain: 'pawa-trip-320218.firebaseapp.com',
  databaseURL: 'https://pawa-trip-320218-default-rtdb.firebaseio.com',
  projectId: 'pawa-trip-320218',
  storageBucket: 'pawa-trip-320218.appspot.com',
  messagingSenderId: '222655618418',
  appId: '1:222655618418:web:3ba8438833c0540228d1eb',
  measurementId: '${config.measurementId}',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { auth };
export { database };


