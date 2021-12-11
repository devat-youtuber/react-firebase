import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCollections } from 'actions/collectionAction'
import { ICollection } from 'types'


export const collectionFetchData = createAsyncThunk (
  "collections/fetchData",
  async (payload: { uid: string, sort: string, doc: any}) => {
    const { uid, sort, doc } = payload;
    const result = await getCollections(uid, sort, doc) as ICollection[]

    return { result, doc }  
  }
)



export interface CollectionState {
  collections: ICollection[]
  loading: boolean
  sort: string
  doc: any
  stop: number
}

const initialState: CollectionState = {
  collections: [],
  loading: false,
  sort: 'desc',
  doc: '',
  stop: 0
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    create:( state, action) => {
      state.collections.unshift(action.payload)
    },
    update:( state, action) => {
      const newData = state.collections.map(item => (
        item.id === action.payload.id
        ? action.payload
        : item
      ))
      state.collections = newData
    },
    remove:( state, action) => {
      const newData = state.collections.filter(item => (
        item.id !== action.payload.id
      ))

      state.collections = newData
    },
    sorting:( state, action) => {
      state.sort = action.payload.sort
      state.collections = []
      state.doc = ''
      state.stop = 0
    },
    paginate:( state, action) => {
      state.doc = action.payload.doc
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(collectionFetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(collectionFetchData.fulfilled, (state, action) => {
        if(action.payload.doc){
          state.collections = [...state.collections, ...action.payload.result]
        }else{
          state.collections = action.payload.result
        }

        state.stop = action.payload.result.length
        state.loading = false;
      })
  }
})


export const { create, update, remove, sorting, paginate } = collectionSlice.actions

export default collectionSlice.reducer