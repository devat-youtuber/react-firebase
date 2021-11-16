import React, { FormEvent, useState } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { authForgotPassword } from 'redux/slice/authSlice'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const history = useHistory()
  
  const { loading } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(authForgotPassword(email))
  }
  
  return (
    <div className='max-w-lg text-gray-600'>
      <h2 className='text-3xl font-semibold'>Forgot Password?</h2>
      
      <form className='my-3' onSubmit={handleSubmit}>
        <label htmlFor="email" className='text-lg'>Email address</label>

        <div className='flex w-full'>
          <input type="email" name="email" id="email"
          className='w-full p-2 border' value={email}
          placeholder='email@example.com' required
          onChange={e => setEmail(e.target.value)} />

          <button type='submit' className='px-4 ml-1 border hover:bg-gray-50' disabled={loading}>
            {loading ? 'Loading...' : 'Send'}
          </button>
        </div>
      </form>

      <button className='flex items-center px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700'
        onClick={() => history.goBack()} >
          <ArrowLeftIcon className='w-5 h-5 mr-1' /> Back
        </button>
    </div>
  )
}

export default ForgotPassword
