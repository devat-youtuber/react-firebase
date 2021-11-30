import { addDoc, collection } from "firebase/firestore/lite"
import { toast } from "react-toastify"

import { db } from 'Firebase'

export const createCollection = async (uid: string, title: string, photos: string[]) => {
  try {
    const data = {
      uid,
      title,
      photos,
      createdAt: new Date().toISOString()
    }

    const res = await addDoc(collection(db, "colllections"), data)

    return { ...data, id: res.id }
    
  } catch (err: any) {
    return toast.error(err.message)
  }
}