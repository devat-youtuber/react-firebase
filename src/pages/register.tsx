import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

import RegisterForm from 'components/auth/RegisterForm'
import { BigLoading } from 'components/global/Loading'


const Register = () => {
  const { loading, currentUser } = useAppSelector(state => state.auth)

  const history = useHistory()

  useEffect(() => {
    if(currentUser) return history.replace('/')
  },[history, currentUser])
  
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
      <div className="container max-w-md p-5 shadow">
        <h2 className='my-3 text-2xl font-semibold tracking-widest text-center uppercase'>
          Dev AT
        </h2>
        
        <RegisterForm />

        <div>
          You already have an account? <Link to="/login" 
          className='text-red-500 hover:underline'>
              Login
          </Link>
        </div>

      </div>

      { loading && <BigLoading /> }
    </div>
  )
}

export default Register
