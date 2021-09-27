import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAx-eIp1ZT3pgrppQ7q55URTBgxKB1g_Yk",
    authDomain: "messengerapp-627e5.firebaseapp.com",
    projectId: "messengerapp-627e5",
    storageBucket: "messengerapp-627e5.appspot.com",
    messagingSenderId: "195281258234",
    appId: "1:195281258234:web:3ec162c50e5b3b771fab43",
  })
  .auth();
