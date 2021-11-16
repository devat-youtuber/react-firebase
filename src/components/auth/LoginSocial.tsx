import React from 'react'
import { useAppDispatch } from 'redux/hooks'
import { authFacebookLogin, authGoogleLogin } from 'redux/slice/authSlice'

const LoginSocial = () => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <button className='w-full p-3 my-2 font-semibold text-white bg-red-500 hover:bg-red-600'
      onClick={() => dispatch(authGoogleLogin())}>
        Google
      </button>

      <button className='w-full p-3 my-2 font-semibold text-white bg-blue-500 hover:bg-blue-600'
      onClick={() => dispatch(authFacebookLogin())}>
        Facebook
      </button>
    </div>
  )
}

export default LoginSocial
