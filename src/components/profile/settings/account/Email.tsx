import { changeEmail } from 'actions/accountAction'
import React, { useState, useEffect } from 'react'
import { useAppSelector } from 'redux/hooks'


const Email = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPass, setShowpass] = useState(false)
  const [password, setPassword] = useState('')

  const { currentUser } = useAppSelector(state => state.auth)

  useEffect(() => {
    if(currentUser?.email) setEmail(currentUser.email)
  },[currentUser?.email])

  const handleSubmit = async () => {
    if(!currentUser || !email.trim()) return;

    if(email === currentUser?.email) return;

    const provider = currentUser.providerData.some(
      p => p.providerId === 'password'
    )

    if(provider && !password) return setShowpass(true)
    
    setLoading(true)
    await changeEmail(currentUser, email, password)
    setLoading(false)
  }

  return (
    <div>
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          className="block w-full p-2 mt-1 bg-gray-100 border-gray-300 rounded-sm shadow-sm outline-none sm:text-sm"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      {/*Current Password */}
      {
        showPass && 
        <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="password"
          className="block w-full p-2 mt-1 bg-gray-100 border-gray-300 rounded-sm shadow-sm outline-none sm:text-sm"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        </div>
      }
      
      {/* button */}
      <div className='text-right'>
        <button className='px-6 py-1 my-2 text-sm font-semibold text-right border rounded-md hover:bg-gray-50'
        disabled={loading}
        onClick={handleSubmit}>
          {loading ? 'Loading...' : 'Change'}
        </button>
      </div>
    </div>
  )
}

export default Email
