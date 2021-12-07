import React, { ChangeEvent, useState, DragEvent } from 'react'
import { toast } from 'react-toastify'
import ModalImages from './ModalImages'

import { XCircleIcon } from '@heroicons/react/solid'


interface IProps {
  multiple?: boolean
  files: (File | string)[]
  setFiles: (files: (File | string)[]) => void
}

const InputFiles: React.FC<IProps> = ({multiple, files, setFiles}) => {
  const [modal, setModal] = useState(false)

  const handleInputFiles = (e: ChangeEvent) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    const files = target.files;
    if(!files) return;
    
    checkImages(files)
  }

  const checkImages = (fls: FileList) => {
    let newFiles: File[] = []

    Array.from(fls).map(file => {
      if(!file) return toast.error("File does not exist.")

      const types = ['image/png', 'image/jpeg', 'image/gif']
      if(!types.includes(file.type)){
        return toast.error("The image type is png / jpeg / gif.")
      }

      if(file.size > 1024 * 1024){
        return toast.error("The largest image size is 1mb.")
      }

      return newFiles.push(file)
    })

    if(multiple){
      setFiles([...files, ...newFiles])
    }else{
      setFiles(newFiles)
    }
  }

  const allowDrag = (e: DragEvent) => {
    e.preventDefault()
  }

  const drop = (e: DragEvent) => {
    e.preventDefault()
    let dt = e.dataTransfer
    let files = dt.files
    if(!files) return;
    checkImages(files)
  }

  const removeImage = (i: number) => {
    const newArr = files.filter((_, index) => index !== i)
    setFiles(newArr)
  }

  const showImage = (url: string, index: number) => {
    return (
      <div key={index} className='flex flex-col items-center'>
        <img src={url} 
        alt="avatar" className='object-cover w-12 h-12 mx-1 border rounded-full'/>
        <XCircleIcon className='w-5 cursor-pointer'
        onClick={() => removeImage(index)} />
      </div>
    )
  }
 
  return (
    <div className='w-full my-3'>
      <div>
        {
          modal && 
          <ModalImages 
          open={modal} 
          setOpen={setModal}
          multiple={multiple}
          files={files}
          setFiles={setFiles}
          />
        }
      </div>
      
      <div onDrop={drop} onDragOver={allowDrag}>
        <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-200 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <div className='flex justify-center'>
              { !files.length && 
                <svg
                  className="w-12 h-12 mx-auto text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              { 
                files.map((file, index) => (
                  typeof(file) === 'string'
                  ? showImage(file, index)
                  : showImage(URL.createObjectURL(file), index)
                ))
              }
                
            </div>

            <div className="flex justify-center text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only"
                accept=".jpg, .png, .gif"
                multiple={multiple}
                onChange={handleInputFiles} />
              </label>
              <p className='pl-1'>or</p>

              <p className='pl-1 font-semibold text-red-500 cursor-pointer'
              onClick={() => setModal(true)}
              >
                  My Storage
              </p>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 1MB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputFiles
