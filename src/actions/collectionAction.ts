import { addDoc, collection, query, getDocs, where, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore/lite"
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

export const updateCollection = async (data: any) => {
  try {
    await updateDoc(doc(db, `collections/${data.id}`), data)
    return toast.success("Update Success!")
  } catch (err: any) {
    return toast.error(err.message)
  }
}

export const deleteCollection = async (data: any) => {
  try {
    await deleteDoc(doc(db, `collections/${data.id}`))
    return toast.success("Delete Success!")
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