const firebaseConfig = {
  apiKey: "AIzaSyCCKwFZnRecdcDMdzwbmGagjmnFQ_c-XZo",
  authDomain: "temp-6f9ef.firebaseapp.com",
  projectId: "temp-6f9ef",
  storageBucket: "temp-6f9ef.firebasestorage.app",
  messagingSenderId: "203499360435",
  appId: "1:203499360435:web:306fbf6fabb4d01b4d20c6",
  measurementId: "G-51P6YGKS35"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
