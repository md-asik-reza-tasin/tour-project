import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

  const [userId, setUserId] = useState(null);



  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, (user) => {
      setUserId(user);
    });

    return () => unsubs();
  }, []);

  const info = { createUser, logIn, userId };

  return (
    <>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </>
  );
}
