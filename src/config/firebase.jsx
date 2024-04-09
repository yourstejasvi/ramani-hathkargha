import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const FirebaseContext = createContext(null);

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


export const useFirebase = () => useContext(FirebaseContext);


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

export const displayAllProducts = () => {
  return getDocs(collection(firestore,"Products"));
}


export const FirebaseProvider = (props) => {


        const signInUserWithEmailAndPassword = (email,password) => 
              signInWithEmailAndPassword( firebaseAuth, email, password);

        const signupUserWithEmailAndPassword = (email,password) =>
              createUserWithEmailAndPassword( firebaseAuth, email, password);

        const addProducts = async (productName, productPrice, desc, stock, category, size, file) => {
              
              const fileRef = ref(storage, `uploads/productsImages/${Date.now()}-${file.name}`);
              const uploadFile = await uploadBytes(fileRef, file);
               return await addDoc(collection(firestore,'Products'),{
                productName,
                productPrice,
                desc,
                stock,
                category,
                size,
                fileURL: uploadFile.ref.fullPath
              })

        const adminLogin = async (email, password) => {
              
        };

        

 

        }


        
  return (
      <FirebaseContext.Provider 
      value={{
        signInUserWithEmailAndPassword,
       signupUserWithEmailAndPassword,
       addProducts
      }}
      >
        {props.children}
  </FirebaseContext.Provider>
  );
}
