import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import Nav from './Nav'
import NavAfLogin from './NavAfLogin'

const Header = () => {
  const { currentUser } = useAppSelector(state => state.auth)

  return (
    <header className='sticky top-0 z-10 py-4 min-h-16 bg-gray-50'>
      <div className='flex flex-wrap items-center justify-between max-w-6xl px-4 mx-auto'>
        <h1 className='text-2xl font-semibold'>
          <Link to="/">Firebase</Link>
        </h1>

        {
          currentUser
          ? <NavAfLogin />
          : <Nav />
        }
      </div>
    </header>
  )
}

export default Header
