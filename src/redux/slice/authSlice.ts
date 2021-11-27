import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { facebookApi, forgotPassApi, googleApi, loginApi, registerApi, signOutApi } from 'actions/authAtions'
import { IAuth, ILogin, IRegister } from 'types'

export const authRegister = createAsyncThunk(
  'auth/register',
  async (user: IRegister) => {
    return await registerApi(user)
  }
)

export const authLogin = createAsyncThunk(
  'auth/login',
  async (user: ILogin) => {
    return await loginApi(user)
  }
)

export const authGoogleLogin = createAsyncThunk(
  'auth/google',
  async () => {
    return await googleApi()
  }
)

export const authFacebookLogin = createAsyncThunk(
  'auth/facebook',
  async () => {
    return await facebookApi()
  }
)

export const authForgotPassword = createAsyncThunk(
  'auth/forgot_password',
  async (email: string) => {
    return await forgotPassApi(email)
  }
)

export const authLogout = createAsyncThunk(
  'auth/logout',
  async () => {
    return await signOutApi()
  }
)


export interface AuthState {
  currentUser?: IAuth,
  loading: boolean
}

const initialState: AuthState = {
  currentUser: undefined,
  loading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({type}) => type.startsWith('auth') && type.endsWith('/pending'),
        (state) => { state.loading = true }
      )
      .addMatcher(
        ({type}) => type.startsWith('auth') && type.endsWith('/fulfilled'),
        (state) => { state.loading = false }
      )
  }
})

export const { addUser} = authSlice.actions

export default authSlice.reducer