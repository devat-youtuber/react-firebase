import { toast } from "react-toastify";
import { setDoc, doc, getDoc} from 'firebase/firestore/lite'

import { db } from 'Firebase'
import { IAuth, IProfile } from "types";


export const changeProfile = async (user: IAuth, data: IProfile) => {
  try {
    await setDoc(doc(db, "users", user.uid), data)
    toast.success('Success.')
    return data;
  } catch (err: any) {
    return toast.error(err.message)
  }
}

export const getProfile = async (uid: string) => {
  try {
    const docRef = doc(db, `users/${uid}`)

    const docSnap = await getDoc(docRef);

    if(docSnap.exists())
      return docSnap.data()

  } catch (err: any) {
    return toast.error(err.message)
  }
}