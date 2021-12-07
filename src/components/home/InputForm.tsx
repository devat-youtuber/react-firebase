import React, { FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

import { PhotographIcon } from '@heroicons/react/outline'
import InputFiles from 'components/global/InputFiles'
import { toast } from 'react-toastify'
import { uploadFiles } from 'actions/uploadAction'
import { createCollection, updateCollection } from 'actions/collectionAction'
import { create, update } from 'redux/slice/collectionSlice'
import { ICollection } from 'types'


interface IProps {
  dataEdit?: ICollection
  setDataEdit: (dataEdit?: ICollection) => void
}

const InputForm: React.FC<IProps> = ({dataEdit, setDataEdit}) => {
  const [title, setTitle] = useState('')
  const [files, setFiles] = useState<(File|string)[]>([])
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const { currentUser } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  
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

    if(dataEdit){
      // call update function here
      const newData = {...dataEdit, title, photos}
      dispatch(update(newData))
      await updateCollection(newData)
    }else{
      const res = await createCollection(currentUser.uid, title, photos)
      dispatch(create(res))
    }

    setLoading(false)
    setTitle('')
    setFiles([])
    setShow(false)
    setDataEdit(undefined)
  }

  useEffect(() => {
    if(!dataEdit) return;

    if(dataEdit.title) setTitle(dataEdit.title)
    if(dataEdit.photos) setFiles(dataEdit.photos)
    setShow(true)
  },[dataEdit])

  return (
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
          {
            loading 
            ? 'Loading...' 
            : dataEdit ? 'Update' : 'Create'
          }
        </button>
      </div>
      
    </form>
  )
}

export default InputForm
