import { useEffect, useState } from "react";
import { db } from "./backend/DataBase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function useFetch() {
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);

  // add object to the data base
  async function post(collectionRef, payload) {
    const collectionId = collection(db, collectionRef);
    setLoading(true);
    try {
      await addDoc(collectionId, payload);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  }

  // update an object from the data base
  async function update(collectionRef, id, payload) {
    const docRef = doc(db, collectionRef, id);
    setLoading(true);
    try {
      await updateDoc(docRef, payload);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  }

  // Delete an object from the data base
  async function remove(collectionRef, id) {
    const docRef = doc(db, collectionRef, id);
    setLoading(true);
    try {
      await deleteDoc(docRef);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  }

  // Get data from data base

  function list(collectionRef) {
    const collectionId = collection(db, collectionRef);
    setLoading(true);
    try {
      useEffect(() => {
        onSnapshot(collectionId, (infos) => {
          setDocuments(
            infos.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
          console.log(document);
        });
      }, []);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  }

  return { list, post, update, remove, loading, setLoading };
}

export default useFetch;
