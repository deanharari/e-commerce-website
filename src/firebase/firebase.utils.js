import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBip0PztP4uqY-ehQQZEXB7ksZqqKZ-09c",
  authDomain: "e-commerce-website-db.firebaseapp.com",
  databaseURL: "https://e-commerce-website-db.firebaseio.com",
  projectId: "e-commerce-website-db",
  storageBucket: "e-commerce-website-db.appspot.com",
  messagingSenderId: "98050264082",
  appId: "1:98050264082:web:925c6180dacd05f3831ccb",
  measurementId: "G-CYMQWLQNN0"
};

firebase.initializeApp(config);

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
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
