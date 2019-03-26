import firebase from "firebase"
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA-FjZiuqj6iqY4MZXfAaTZ6P6si_rZlbY",
    authDomain: "ninja-smoothie-86371.firebaseapp.com",
    databaseURL: "https://ninja-smoothie-86371.firebaseio.com",
    projectId: "ninja-smoothie-86371",
    storageBucket: "ninja-smoothie-86371.appspot.com",
    messagingSenderId: "745420242233"
  };
  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()