import firebase from "firebase/app";
import "firebase/auth";

export const auth=firebase.initializeApp ({
  apiKey: "AIzaSyC8HQuic47uabvp1sGFlQaJ4iMMC7diMIQ",
  authDomain: "kozzmos-messenger.firebaseapp.com",
  projectId: "kozzmos-messenger",
  storageBucket: "kozzmos-messenger.appspot.com",
  messagingSenderId: "665355836881",
  appId: "1:665355836881:web:1b6c221b3896fc640094f0"
  }).auth();