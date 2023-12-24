import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyDqWxjIJPbLIjdenEDdkp4IXzLOXE-lR3Q",
  authDomain: "ecommercewebsite-294e2.firebaseapp.com",
  projectId: "ecommercewebsite-294e2",
  storageBucket: "ecommercewebsite-294e2.appspot.com",
  messagingSenderId: "13777276829",
  appId: "1:13777276829:web:54bd87a44c85f82cdde974",
  measurementId: "G-JNF722SGSX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("User is signed in");
    console.log(user)
  } else {
    // User is signed out
    console.log("User is signed out");
  }
})

export { firebase, db, auth };
