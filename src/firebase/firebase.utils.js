import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAbIJ7c3R6tpKEkIy09g7OgebTWV-NDNBU",
  authDomain: "crwn-db-1a33a.firebaseapp.com",
  databaseURL: "https://crwn-db-1a33a.firebaseio.com",
  projectId: "crwn-db-1a33a",
  storageBucket: "crwn-db-1a33a.appspot.com",
  messagingSenderId: "245714710266",
  appId: "1:245714710266:web:33cf8e0472a82690cda343",
  measurementId: "G-RVMXPFLJ0F",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
        console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
