//the reason we do firebase/app because firebase has all ultity library
//we don't want any we're not using because it's quite large
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCArP_pJGDHl7OTnonNrYT09jcm_Zri8yw",
    authDomain: "crwn-db-a7c83.firebaseapp.com",
    databaseURL: "https://crwn-db-a7c83.firebaseio.com",
    projectId: "crwn-db-a7c83",
    storageBucket: "crwn-db-a7c83.appspot.com",
    messagingSenderId: "293575683934",
    appId: "1:293575683934:web:63e6921112d70282e069cf",
    measurementId: "G-24N8VT6GBJ"
  };

//allows us to get the userAuth object that we got back from authenication library and store inside of our database 
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if the user is not logged in return
  if(!userAuth) return;

  //this is how you get a document reference
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //this is how you get a snapshot
  const snapShot = await userRef.get();

if(!snapShot.exists) {
  //pulling displayName from userAuth
  const {displayName, email} = userAuth;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  }
  catch (error) {
    console.log('error creating user', error.message);
  }
}


  console.log(snapShot)
}

firebase.initializeApp(config);

//export auth anywhere related to authenication 
export const auth = firebase.auth();

//don't need this right now but later 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//we want to always trigger the google popup whenever we use google auth provider for authenication 
provider.setCustomParameters({prompt: 'select_account'});

//We just want to sign in with google, we can do with twitter too
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;