import { addDoc, collection, query, getDocs, where, doc, getDoc } from "firebase/firestore/lite"
import { toast } from "react-toastify"

import { db } from 'Firebase'
import { ICollection } from "types"

export const createCollection = async (uid: string, title: string, photos: string[]) => {
  try {
    const data = {
      uid,
      photos,
      title: title.toLowerCase(),
      createdAt: new Date().toISOString()
    }

    const res = await addDoc(collection(db, "collections"), data)

    return { ...data, id: res.id }
    
  } catch (err: any) {
    return toast.error(err.message)
  }
}


export const getCollections = async (uid: string) => {
  try {
    const data: ICollection[] = [];

    const q = query(
      collection(db, "collections"),
      where("uid", "==", uid)
    )

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id})
    });

    return data;
  } catch (err: any) {
    return toast.error(err.message)
  }
}


export const getCollection = async (id: string) => {
  try {
    const docRef = doc(db, `collections/${id}`)

    const docSnap = await getDoc(docRef);

    if(docSnap.exists())
      return docSnap.data()

  } catch (err: any) {
    return toast.error(err.message)
  }
}