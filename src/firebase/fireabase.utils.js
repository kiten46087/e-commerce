import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyAdCHm6dlkHktoT9Eer1FK6juI5xhx1I-E",
  authDomain: "e-commerce-14f14.firebaseapp.com",
  databaseURL: "https://e-commerce-14f14.firebaseio.com",
  projectId: "e-commerce-14f14",
  storageBucket: "e-commerce-14f14.appspot.com",
  messagingSenderId: "394271896824",
  appId: "1:394271896824:web:869f99a63c9face899370d",
  measurementId: "G-7L5YHLWZGK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${ userAuth.uid }`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // Create the data document if it doesn't exist
    const { displayName, email } = userAuth;
    // console.log(displayName);

    const createdAt = new Date();

    try {
      // console.log(displayName);
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;