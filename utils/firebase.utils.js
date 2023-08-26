import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyA_-EpWdqYAukdmYbYbwqTO6_gUYqLeX-o",
  authDomain: "clipify-d0bda.firebaseapp.com",
  projectId: "clipify-d0bda",
  storageBucket: "clipify-d0bda.appspot.com",
  messagingSenderId: "423956670154",
  appId: "1:423956670154:web:8544142a37d10a1d06f633"
};

// const firebaseApp = 
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

// export const db = getFirestore();

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);

//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase()) ;
//     batch.set(docRef, object)
//   })

//   await batch.commit();
// }

// export const getCategoriesAndDocuments = async() => {
//   const collectionRef = collection(db, 'categories');
//   const q = query(collectionRef);
  
//   const querySnapshot = await getDocs(q);

//   return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
  
//   // .reduce((acc, docSnapshot) => {
//   //   const {title, items} = docSnapshot.data();
//   //   acc[title.toLowerCase()] = items;
//   //   return acc;
//   // }, {})

//   // return categoryMap; 

// }

// export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
//   if (!userAuth) return;
//   const userDocRef = doc(db, 'users', userAuth.uid);


//   const userSnapshot = await getDoc(userDocRef);

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInformation
//       })

//     } catch (error) {
//       console.error('error creating the user', error.message);
//     }
//   }

//   return userSnapshot;

// }


// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email | !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// }

// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email | !password) return;

//   return await signInWithEmailAndPassword(auth, email, password);
// }


// export const signOutUser = async () => await signOut(auth);

// export const onAuthStateChangedListner = async (callback) => await onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    )
  })
}
