type="module">
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMjxu-RUZcSLPIu1Lfgfjkb_DoqkIOfXg",
  authDomain: "e-sakha-8fb4d.firebaseapp.com",
  databaseURL: "https://e-sakha-8fb4d-default-rtdb.firebaseio.com",
  projectId: "e-sakha-8fb4d",
  storageBucket: "e-sakha-8fb4d.firebasestorage.app",
  messagingSenderId: "273189480084",
  appId: "1:273189480084:web:f50afb34a6ec956c437681",
  measurementId: "G-4PFKCYLB0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
