import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_wXZm6jYz4ZHDpJ315zPQUilwLudBdBM",
  authDomain: "netflix-clone-84571.firebaseapp.com",
  projectId: "netflix-clone-84571",
  storageBucket: "netflix-clone-84571.appspot.com",
  messagingSenderId: "1054888270069",
  appId: "1:1054888270069:web:58c930a841a79244f64dbc",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
