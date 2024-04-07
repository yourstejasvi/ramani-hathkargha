import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZ0oATHHj2lrD5xW7heNNpyMUOyfJICz4",
    authDomain: "ramani-c05b8.firebaseapp.com",
    projectId: "ramani-c05b8",
    storageBucket: "ramani-c05b8.appspot.com",
    messagingSenderId: "388897906884",
    appId: "1:388897906884:web:5ec3877601bb79bebba991",
    measurementId: "G-K9YG9ZVZ1Q",
    databaseURL: "https://ramani-c05b8-default-rtdb.firebaseio.com",

  };



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const storageRef = ref(storage, 'product-images');
export const db = getFirestore(app);
const analytics = getAnalytics(app);
const Googleprovider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, Googleprovider).then((result) => {
    console.log(result);
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("profilePic",profilePic)

  }).catch((error)=> {
    console.log("Error signing in with Google",error);
  })

};
