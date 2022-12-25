import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./DataBase";

// add object to the data base
export async function onAdd(collectionRef, payload) {
  const collectionId = collection(db, collectionRef);

  try {
    await addDoc(collectionId, payload);
  } catch (err) {
    console.log(err);
  }
}

// update an object from the data base
export async function onUpdate(collectionRef, id, payload) {
  const docRef = doc(db, collectionRef, id);

  try {
    await updateDoc(docRef, payload);
  } catch (err) {
    console.log(err);
  }
}

// Delete an object from the data base
export async function onDelete(collectionRef, id) {
  const docRef = doc(db, collectionRef, id);
  try {
    await deleteDoc(docRef);
  } catch (err) {
    console.log(err);
  }
}

// Get data from data base

export async function useList(collectionRef) {
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const collectionId = collection(db, collectionRef);
  setLoading(true);
  try {
    await useEffect(() => {
      onSnapshot(collectionId, (infos) => {
        setDocuments(infos.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(document);
      });
    }, []);
    setLoading(false);
  } catch (err) {
    console.log(err);
    setLoading(false);
  }

  return { documents, loading };
}
