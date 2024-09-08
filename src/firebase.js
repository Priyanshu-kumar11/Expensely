import { initializeApp } from "firebase/app";
import  {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore, doc, setDoc } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE9O7fRge4YaFzj5GaZjF1YEdfC9Aa_Lg",
  authDomain: "expense-track-app-b701f.firebaseapp.com",
  projectId: "expense-track-app-b701f",
  storageBucket: "expense-track-app-b701f.appspot.com",
  messagingSenderId: "8266631536",
  appId: "1:8266631536:web:12ef0c7c3d1b6ec17ea7b5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc};
