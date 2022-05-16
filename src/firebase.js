import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqZOAkkhCbn_-G-D0V7dG1yauWanDb_R8",
  authDomain: "auth-ce49b.firebaseapp.com",
  projectId: "auth-ce49b",
  storageBucket: "auth-ce49b.appspot.com",
  messagingSenderId: "511716754358",
  appId: "1:511716754358:web:e03e9d54102c786abd7717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
        const name = result.user.displayName;
        const email = result.user.email;
        const  profilePic = result.user.photoURL;

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
    }).catch((error) => {
        console.log(error)
    })
};