import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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
export const auth = getAuth(app);
export const db = getFirestore(app);
