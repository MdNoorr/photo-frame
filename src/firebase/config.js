import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3q87JOAr16BPVU6ArUIx5Z8s0NKES-5Q",
  authDomain: "fire-gram-69684.firebaseapp.com",
  databaseURL: "https://fire-gram-69684-default-rtdb.firebaseio.com",
  projectId: "fire-gram-69684",
  storageBucket: "fire-gram-69684.appspot.com",
  messagingSenderId: "221973842515",
  appId: "1:221973842515:web:a22f7c63c1f2cd89d894a6",
  measurementId: "G-5SB4Q8NJZD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };