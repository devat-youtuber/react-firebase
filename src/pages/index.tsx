import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

import Header from 'components/home/Header'
import InputForm from 'components/home/InputForm'
import Collections from 'components/home/Collections'

const Home = () => {
  const { currentUser } = useAppSelector(state => state.auth)
  const history = useHistory()

  useEffect(() => {
    if(!currentUser) return history.replace('/login')
  },[history, currentUser])


  
  return (
    <div className='w-full mx-auto max-w-7xl'>
      <Header />
      <InputForm />
      <Collections />
    </div>
  )
}

export default Home
