import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./DataBase";

// Get Current User
export function useAuth() {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => setCurrentUser(user));
  }, []);

  return currentUser;
}

// User SignUp
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// User LogIn
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// User LogOut
export function logout() {
  return signOut(auth);
}
