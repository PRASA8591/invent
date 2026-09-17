const firebaseConfig = {
  apiKey: "AIzaSyA3fhxeSNb8MBqkmSsA55XCZaziRQm_FPk",
  authDomain: "inventory-new-379dc.firebaseapp.com",
  projectId: "inventory-new-379dc",
  storageBucket: "inventory-new-379dc.firebasestorage.app",
  messagingSenderId: "922542802053",
  appId: "1:922542802053:web:4058f53a678787207495ec",
  measurementId: "G-728ZE17NHY"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
