import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB43MDnf7d1ExbY9QlOu5F2_jATtdpTZwE",
    authDomain: "carcascore.firebaseapp.com",
    projectId: "carcascore",
    storageBucket: "carcascore.appspot.com",
    messagingSenderId: "687021321572",
    appId: "1:687021321572:web:a993ce6859ffcdd04e1e71",
    measurementId: "G-9ZKW9V7T4K"
  };
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
