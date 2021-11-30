import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ICollection } from 'types'




export interface CollectionState {
  collections: ICollection[]
}

const initialState: CollectionState = {
  collections: []
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    create:( state, action) => {
      state.collections.unshift(action.payload)
    }
  }
})


export const { create } = collectionSlice.actions

export default collectionSlice.reducer