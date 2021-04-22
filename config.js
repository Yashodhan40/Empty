import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAfI-tgdxDaGipdXKyVB87lKdZ7Zfw174I",
  authDomain: "book-santa-6a35c.firebaseapp.com",
  databaseURL: "https://book-santa-6a35c-default-rtdb.firebaseio.com",
  projectId: "book-santa-6a35c",
  storageBucket: "book-santa-6a35c.appspot.com",
  messagingSenderId: "821555234797",
  appId: "1:821555234797:web:925f95ed5f30666e31c9e4"
};

  firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore();