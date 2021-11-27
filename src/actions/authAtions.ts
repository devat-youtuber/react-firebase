import { toast } from "react-toastify"

import { ILogin, IRegister } from "types";

import { 
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";

import { auth, provierGoogle, provierFacebook } from 'Firebase'



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

export const loginApi = async (user: ILogin) => {
  try {
    const { email, password, remember } = user;

    await setPersistence(auth, 
      remember
      ? browserLocalPersistence
      : browserSessionPersistence
    )

    const res = await signInWithEmailAndPassword(auth, email, password)

    return res.user;
  } catch (err: any) {
    return toast.error(err.message)
  }
}

export const googleApi = async () => {
  try {
    const res = await signInWithPopup(auth, provierGoogle)
    return res.user;
  } catch (err: any) {
    return toast.error(err.message)
  }
}

export const facebookApi = async () => {
  try {
    const res = await signInWithPopup(auth, provierFacebook)
    return res.user;
  } catch (err: any) {
    return toast.error(err.message)
  }
}

export const forgotPassApi = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email)
    return toast.success('Success! Check your email.');
  } catch (err: any) {
    return toast.error(err.message)
  }
}

export const signOutApi = async () => {
  try {
    await signOut(auth)
  } catch (err: any) {
    return toast.error(err.message)
  }
}