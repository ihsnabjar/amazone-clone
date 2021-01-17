import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC17HXNaedUm5yaUG26sjTzarUEax9lWK0",
    authDomain: "challenge-ccbba.firebaseapp.com",
    projectId: "challenge-ccbba",
    storageBucket: "challenge-ccbba.appspot.com",
    messagingSenderId: "647416772730",
    appId: "1:647416772730:web:d4a7d25862717502d623c3",
    measurementId: "G-41VV0HB81L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth} ;