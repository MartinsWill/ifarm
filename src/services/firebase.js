import firebase from "firebase/compat/app";
import  "firebase/compat/database";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: "https://ifarmmonitor-default-rtdb.firebaseio.com",
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database };
