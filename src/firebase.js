import firebase from 'firebase/compat/app'; // Import the compat version
import 'firebase/compat/auth'; // Import the compat version for auth

const firebaseConfig = {
  apiKey: "AIzaSyDwg9f2la_CID5etGdtLVU8sDsWqu4eELc",
  authDomain: "clone-7d104.firebaseapp.com",
  projectId: "clone-7d104",
  storageBucket: "clone-7d104.appspot.com",
  messagingSenderId: "639494343940",
  appId: "1:639494343940:web:abd3ade388d81141501451",
  measurementId: "G-FMRLCSNCPY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export { auth };
