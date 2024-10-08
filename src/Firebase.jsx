import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { createContext, useContext } from "react";

// Firebase configuration for your project
const firebaseConfig = {
  apiKey: "AIzaSyDi9WdSRZhWZGTHOiDk-7O6duIEFLM20Lw",
  authDomain: "miso-55ec9.firebaseapp.com",
  projectId: "miso-55ec9",
  storageBucket: "miso-55ec9.appspot.com",
  messagingSenderId: "900842098514",
  appId: "1:900842098514:web:cad57d063c567e74adf48b",
  measurementId: "G-RSDGBGNL7Y",
  databaseURL: "https://miso-55ec9-default-rtdb.firebaseio.com",
};

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, app };
