import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAbIJ7c3R6tpKEkIy09g7OgebTWV-NDNBU",
    authDomain: "crwn-db-1a33a.firebaseapp.com",
    databaseURL: "https://crwn-db-1a33a.firebaseio.com",
    projectId: "crwn-db-1a33a",
    storageBucket: "crwn-db-1a33a.appspot.com",
    messagingSenderId: "245714710266",
    appId: "1:245714710266:web:33cf8e0472a82690cda343",
    measurementId: "G-RVMXPFLJ0F"
  };
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;