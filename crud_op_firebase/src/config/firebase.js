// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase,ref,set,update,onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFQicNHddEyaoKu2-5tYYbfh92THn4rNs",
  authDomain: "form-project-9bfae.firebaseapp.com",
  databaseURL: "https://form-project-9bfae-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "form-project-9bfae",
  storageBucket: "form-project-9bfae.appspot.com",
  messagingSenderId: "560520520204",
  appId: "1:560520520204:web:65b7ece9fd9290d4538429"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export{database,ref,set,update,onValue};