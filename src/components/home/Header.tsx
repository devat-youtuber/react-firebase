import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { sorting } from 'redux/slice/collectionSlice'

const Header = () => {
  const { sort } = useAppSelector(state => state.collections)
  const dispatch = useAppDispatch()

  const isAction = (s: string) => {
    if(s === sort) return 'bg-black text-white';
  }

  const handleSort = (s: string) => {
    dispatch(sorting({sort: s}))
  }

  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-2xl font-bold uppercase'>My Collections</h2>
      <div>
        <button className={`px-2 mx-1 border ${isAction('asc')}`}
        onClick={() => handleSort('asc')}>
          ASC
        </button>
        <button className={`px-2 mx-1 border ${isAction('desc')}`}
        onClick={() => handleSort('desc')}>
          DESC
        </button>
      </div>
    </div>
  )
}

export default Header
