import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCollections } from 'actions/collectionAction'
import { ICollection } from 'types'


export const collectionFetchData = createAsyncThunk (
  "collections/fetchData",
  async (payload: { uid: string}) => {
    const { uid } = payload;
    const result = await getCollections(uid) as ICollection[]

    return { result }  
  }
)



export interface CollectionState {
  collections: ICollection[]
  loading: boolean
}

const initialState: CollectionState = {
  collections: [],
  loading: false
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    create:( state, action) => {
      state.collections.unshift(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(collectionFetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(collectionFetchData.fulfilled, (state, action) => {
        state.collections = action.payload.result
        state.loading = false;
      })
  }
})


export const { create } = collectionSlice.actions

export default collectionSlice.reducer