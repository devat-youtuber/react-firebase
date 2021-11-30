import React, { FormEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

import { PhotographIcon } from '@heroicons/react/outline'
import InputFiles from 'components/global/InputFiles'
import { toast } from 'react-toastify'
import { uploadFiles } from 'actions/uploadAction'
import { createCollection } from 'actions/collectionAction'
import { create } from 'redux/slice/collectionSlice'

const Home = () => {
  const [title, setTitle] = useState('')
  const [files, setFiles] = useState<(File|string)[]>([])
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const { currentUser } = useAppSelector(state => state.auth)
  const dipatch = useAppDispatch()
  const history = useHistory()

  useEffect(() => {
    if(!currentUser) return history.replace('/login')
  },[history, currentUser])



  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if(!currentUser) return;

    if(!title.trim())
      return toast.error("The title cannot be left blank.");

    if(!files.length)
      return toast.error("The files cannot be left blank.");

    const urls = files.filter(item => typeof(item) === 'string') as string[]
    const newFiles = files.filter(item => typeof(item) !== 'string') as File[]

    setLoading(true)
    let newUrls: string[] = []
    if(newFiles.length){
      newUrls = await uploadFiles(`images/${currentUser.uid}`, newFiles)
    }    

    const photos = [...newUrls, ...urls];

    const res = await createCollection(currentUser.uid, title, photos)
    dipatch(create(res))

    setLoading(false)
    setTitle('')
    setFiles([])
    setShow(false)
  }

  
  return (
    <div className='w-full mx-auto max-w-7xl'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold uppercase'>My Collections</h2>
        <div>
          <button className="px-2 mx-1 border">
            ASC
          </button>
          <button className="px-2 mx-1 border">
            DESC
          </button>
        </div>
      </div>

      <form className='w-full my-4' onSubmit={handleSubmit}>
        <div className='relative h-12'>
          <input type="text" className='w-full h-full px-2 border-b-2 border-gray-200 outline-none'
          placeholder='Enter your title...'
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
              
          <div className='absolute top-0 right-0 flex'>
            <PhotographIcon className='w-8 h-8 my-2 text-yellow-400 cursor-pointer' onClick={() => setShow(!show)} />
          </div>
        </div>
        
        {/* Input Files */}
        {
          show && 
          <InputFiles
          multiple={true}
          files={files}
          setFiles={setFiles}
          />
        }
        
        <div className='text-right'>
          <button type='submit' className='h-full px-6 py-2 my-2 bg-gray-700 rounded-md text-yellow-50'>
            {loading ? 'Loading...' : 'Create'}
          </button>
        </div>
        
      </form>
    </div>
  )
}

export default Home
