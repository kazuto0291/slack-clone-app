import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
 const config = {
   apiKey: "AIzaSyBDFPddscG4C1kX-_Ij1bKrF9m8z2SBbis",
   authDomain: "slack-clone-app-49828.firebaseapp.com",
   databaseURL: "https://slack-clone-app-49828.firebaseio.com",
   projectId: "slack-clone-app-49828",
   storageBucket: "slack-clone-app-49828.appspot.com",
   messagingSenderId: "401018340966"
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}