const firebaseConfig = {
  apiKey: "AIzaSyDAxynLeAoqJY1Xh0p8TakPdZXDCAT64dY",
  authDomain: "inventorysystem-b82cd.firebaseapp.com",
  projectId: "inventorysystem-b82cd",
  storageBucket: "inventorysystem-b82cd.firebasestorage.app",
  messagingSenderId: "489780904026",
  appId: "1:489780904026:web:e0fdb3847c749feb909863",
  measurementId: "G-MTCVDT8JRP"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
