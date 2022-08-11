import firebase from "firebase";
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCdS6Wathn6qFJxpWPOgt4ChQ1CMB4leVQ",
    authDomain: "authentication-2d8bc.firebaseapp.com",
    projectId: "authentication-2d8bc",
    storageBucket: "authentication-2d8bc.appspot.com",
    messagingSenderId: "667899084402",
    appId: "1:667899084402:web:46a663cab854d4d6cf4ceb"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();
  export default database;