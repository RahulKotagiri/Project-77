import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBwG3XySxrgNtAkOAR6zDSjCAq_vC7bo3U",
    authDomain: "project-77-917dd.firebaseapp.com",
    projectId: "project-77-917dd",
    storageBucket: "project-77-917dd.appspot.com",
    messagingSenderId: "128492124300",
    appId: "1:128492124300:web:27e97f1e9906d102faa3a9"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();