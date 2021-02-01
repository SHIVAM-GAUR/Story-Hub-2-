import firebase from 'firebase'
require("@firebase/firestore")

// Initalize Firebase 
var firebaseConfig = {
    apiKey: "AIzaSyA4mwLb3Ju0-lEM6dlX3ht9pVempOi2J90",
    authDomain: "story-hub-1d15d.firebaseapp.com",
    projectId: "story-hub-1d15d",
    storageBucket: "story-hub-1d15d.appspot.com",
    messagingSenderId: "74704884193",
    appId: "1:74704884193:web:03b5f557738944122102a0"
  };


firebase.initalizeApp(firebaseConfig);

export default firebase.firestore()