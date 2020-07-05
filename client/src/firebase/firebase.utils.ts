import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const config = {
  apiKey: 'AIzaSyDjiUj01garRCBfk9UbgJQc3vA3B2_WTo4',
  authDomain: 'e-commerce-9edac.firebaseapp.com',
  databaseURL: 'https://e-commerce-9edac.firebaseio.com',
  projectId: 'e-commerce-9edac',
  storageBucket: 'e-commerce-9edac.appspot.com',
  messagingSenderId: '823273594851',
  appId: '1:823273594851:web:61e989fecffd6d4ca1cad6',
  measurementId: 'G-HFGMFDX2D0',
};

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: {}
) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user.');
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export const addCollectionAndDocuments = async (
  collectionKey: any,
  docsToAdd: any
) => {
  const collectionsRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  docsToAdd.forEach((doc: any) => {
    const newDocRef = collectionsRef.doc();
    batch.set(newDocRef, doc);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections: any) => {
  const transformedCollection = collections.docs.map((doc: any) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((acc: any, collection: any) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export default firebase;
