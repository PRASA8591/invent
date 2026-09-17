import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3fhxeSNb8MBqkmSsA55XCZaziRQm_FPk",
  authDomain: "inventory-new-379dc.firebaseapp.com",
  projectId: "inventory-new-379dc",
  storageBucket: "inventory-new-379dc.firebasestorage.app",
  messagingSenderId: "922542802053",
  appId: "1:922542802053:web:4058f53a678787207495ec",
  measurementId: "G-728ZE17NHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Services & Export
export const auth = getAuth(app);
export const db = getFirestore(app);
