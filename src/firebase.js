import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'


const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDZSkZwCZOvcAyZqq1Jc7te6vQlBMwXMQM",
  authDomain: "todolist-a5b26.firebaseapp.com",
  databaseURL: "https://todolist-a5b26-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todolist-a5b26",
  storageBucket: "todolist-a5b26.appspot.com",
  messagingSenderId: "954836380739",
  appId: "1:954836380739:web:320215f65e3e90edc9f8f6"
});

export   {firebaseConfig as firebase }