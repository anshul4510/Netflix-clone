
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBMH90BVZmWdLZHZmjABUvFwz96z32spRg",
  authDomain: "netflix-clone-26d80.firebaseapp.com",
  projectId: "netflix-clone-26d80",
  storageBucket: "netflix-clone-26d80.firebasestorage.app",
  messagingSenderId: "908449275490",
  appId: "1:908449275490:web:713b09f821e88733edbb3b"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
  try{
    const res=await createUserWithEmailAndPassword(auth,email,password);
    const user=res.user;
    await addDoc(collection(db,"user"),{
      uid:user.uid,
      name,
      authProvider:"local",
      email,
    })
  }
  catch(error){
    console.log(error);
    toast.error(error.code.split("/")[1].split('-').join(" "));
  }
}

const login= async(email,password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split('-').join(" "));
  }
}

const logout=()=>{
  signOut(auth)
}
export{auth,db,login,signup,logout};