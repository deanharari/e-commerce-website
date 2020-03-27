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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;