import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEXMoOUCzyYCjj2sZcIicYyNrEZ4q8LoE",
  authDomain: "chatapp-628a5.firebaseapp.com",
  projectId: "chatapp-628a5",
  storageBucket: "chatapp-628a5.appspot.com",
  messagingSenderId: "84481186801",
  appId: "1:84481186801:web:940b7c06cfb26ba6b20250",
  measurementId: "G-GLD3EZMT47"
};

// declate app instance
let app;

// Initialize Firebase
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig) //if not initialised, init
} else {
  app = firebase.app() //if already initialised
}

// grab services function
const db = app.firestore()
const auth = firebase.auth()

export {db, auth}