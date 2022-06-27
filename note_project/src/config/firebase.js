// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase,set,ref,onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9wAEo3aq5rs6VoMevHVMqNOBhCNccLKM",
  authDomain: "confess-note-d5c05.firebaseapp.com",
  databaseURL: "https://confess-note-d5c05-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "confess-note-d5c05",
  storageBucket: "confess-note-d5c05.appspot.com",
  messagingSenderId: "808517441090",
  appId: "1:808517441090:web:b5992abebd18f2a689bfdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export {database,ref,set,onValue};