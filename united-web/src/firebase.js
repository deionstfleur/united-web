import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQIlKTgxDD0BkRPYgxCcOxWf6PC5-o6ls",
    authDomain: "united-web-bb9ac.firebaseapp.com",
    projectId: "united-web-bb9ac",
    storageBucket: "united-web-bb9ac.appspot.com",
    messagingSenderId: "73698338863",
    appId: "1:73698338863:web:5b507c1a6c6349eb99feda",
    measurementId: "G-0JPPS29KCX"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig)

 const db = firebaseApp.firestore();

 export default db;