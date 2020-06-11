import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAoz75u--XFkgHL2lRbl977J7gXqgKQzfs",
  authDomain: "firechat41.firebaseapp.com",
  databaseURL: "https://firechat41.firebaseio.com",
  projectId: "firechat41",
  storageBucket: "firechat41.appspot.com",
  messagingSenderId: "739839016077",
  appId: "1:739839016077:web:abfe6ffeb48770fac976c4",
  measurementId: "G-RXRBLDFHV3",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


//LISTEN FOR FLAME UPDATE
// export const listenForFlames = async () => {
//   const flameRef = firestore.collection('flames')
//   flameRef.onSnapshot(flames => {
//     console.log(flames.docs.map(flame => flame.data()))
//   })
// }

//GET FLAMES / TWEETS
export const getFlames = async (flame, userid) => {
  const flamesRef = firestore.collection(`flames`);

  const flames = await flamesRef.get();
  console.log(flames.docs.map(doc=> doc.data()));
};

//VERIFY AND USER / CREATE USER IF DOESN'T EXIT
export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(userAuth);
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};
