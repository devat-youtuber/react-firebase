import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { changeProfile, getProfile } from 'actions/profileActions'
import { IAuth, IProfile } from 'types'

export const profileUpdate = createAsyncThunk(
  'profile/update',
  async (params: { user: IAuth, data: IProfile }) => {
    const { user, data } = params;
    return await changeProfile(user, data)
  }
)

export const fetchProfile = createAsyncThunk(
  'profile/fetch',
  async (uid: string) => {
    return await getProfile(uid)
  }
)


export interface ProfileState {
  profile?: IProfile
}

const initialState: ProfileState = {
  profile: undefined
}

const profliSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({type}) => type.startsWith('profile') && type.endsWith('/fulfilled'),
        (state, action: PayloadAction<IProfile | undefined>) => { 
          state.profile = action.payload 
        }
      )
  }
})


export default profliSlice.reducer