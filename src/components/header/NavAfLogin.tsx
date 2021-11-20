import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { UserCircleIcon } from '@heroicons/react/solid'
import { authLogout } from 'redux/slice/authSlice'

const NavAfLogin = () => {
  const { currentUser } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  return (
    <div className='flex items-center'>
        <Link to="/profile" replace className='flex items-center'>
          <div className='w-10 h-10 overflow-hidden rounded-full'>
            {
              currentUser?.photoURL
              ? <img src={currentUser.photoURL} alt="avatar"
                className='object-cover w-full h-full' />
              : <UserCircleIcon className='w-full h-full' />
            }
          </div>
          <span className='mr-4 font-semibold capitalize'>
            {currentUser?.displayName}
          </span>
        </Link>
        <button className='px-5 py-2 text-white bg-red-400 rounded-lg hover:bg-red-600' onClick={() => dispatch(authLogout())}>
          Sign out
        </button>
    </div>
  )
}

export default NavAfLogin
