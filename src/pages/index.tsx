import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

const Home = () => {

  const { currentUser } = useAppSelector(state => state.auth)
  const history = useHistory()

  useEffect(() => {
    if(!currentUser) return history.replace('/login')
  },[history, currentUser])

  
  return (
    <div>
      Home
    </div>
  )
}

export default Home
