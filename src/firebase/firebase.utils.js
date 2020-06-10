import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAoz75u--XFkgHL2lRbl977J7gXqgKQzfs",
    authDomain: "firechat41.firebaseapp.com",
    databaseURL: "https://firechat41.firebaseio.com",
    projectId: "firechat41",
    storageBucket: "firechat41.appspot.com",
    messagingSenderId: "739839016077",
    appId: "1:739839016077:web:abfe6ffeb48770fac976c4",
    measurementId: "G-RXRBLDFHV3"
  };

  firebase.initializeApp(firebaseConfig)


  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;