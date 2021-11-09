import { toast } from "react-toastify"

import { IRegister } from "types";

import { 
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

import { auth } from 'Firebase'



export const registerApi = async (user: IRegister) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, user.email, user.password)

    await updateProfile(res.user, {
      displayName: user.name
    })

    return res.user;
    
  } catch (err: any) {
    return toast.error(err.message)
  }
}