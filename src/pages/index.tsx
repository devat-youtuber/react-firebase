import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

import Header from 'components/home/Header'
import InputForm from 'components/home/InputForm'
import Collections from 'components/home/Collections'
import { ICollection } from 'types'

const Home = () => {
  const { currentUser } = useAppSelector(state => state.auth)
  const history = useHistory()

  const [dataEdit, setDataEdit] = useState<ICollection>()

  useEffect(() => {
    if(!currentUser) return history.replace('/login')
  },[history, currentUser])


  
  return (
    <div className='w-full mx-auto max-w-7xl'>
      <Header />

      <InputForm
      dataEdit={dataEdit} 
      setDataEdit={setDataEdit} 
      />
      
      <Collections
      setDataEdit={setDataEdit}
      />
    </div>
  )
}

export default Home
