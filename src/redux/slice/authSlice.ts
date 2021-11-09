import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { registerApi } from 'redux/actions/authAtions'
import { IRegister } from 'types'

export const authRegister = createAsyncThunk(
  'auth/register',
  async (user: IRegister) => {
    return await registerApi(user)
  }
)


export interface AuthState {
  currentUser?: any,
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
      .addCase(authRegister.pending, (state) => {
        state.loading = true
      })
      .addCase(authRegister.fulfilled, (state) => {
        state.loading = false
      })
  }
})

export const { addUser} = authSlice.actions

export default authSlice.reducer