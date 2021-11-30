import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { getFiles } from 'actions/uploadAction'
import { useAppSelector } from 'redux/hooks'

interface IProps {
  open: boolean
  setOpen: (open: boolean) => void
  multiple?: boolean
  files: (File | string)[]
  setFiles: (img: (File | string)[]) => void
}

const ModalImages: React.FC<IProps> = ({open, setOpen, multiple, files, setFiles}) => {
  const [store, setStore] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const [imgSelect, setImgSelect] = useState<string[]>([])


  const cancelButtonRef = useRef(null)
  const { currentUser } = useAppSelector(state => state.auth)

  useEffect(() => {
    if(!currentUser) return;
    setLoading(true)
    getFiles(`images/${currentUser.uid}`, (urls) => {
      setStore(urls)
      setLoading(false)
    })

    return setStore([])
  },[currentUser])

  const handleSelectImg = (img: string) => {
    if(!multiple) return setImgSelect([img])

    if(!imgSelect.includes(img))
      return setImgSelect([...imgSelect, img])

    const newArr = imgSelect.filter(item => item !== img)
    setImgSelect(newArr)
  }

  const isActive = (img: string) => {
    if(imgSelect.includes(img))
      return 'scale-110 border-red-500'
    return ''
  }

  const handleSubmit = () => {
    setOpen(false)
    if(!multiple) return setFiles(imgSelect);

    return setFiles([...files, ...imgSelect])
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="flex-1 text-lg font-medium leading-6 text-center text-gray-900 cursor-pointer">
                      My Storage
                    </Dialog.Title>
                    
                    <div className='min-h-[300px] mt-2 border-2 border-dotted'>
                      <div className="grid grid-cols-5 gap-2 p-2" aria-multiselectable>
                        { loading && <h2>Loading....</h2> }
                        {
                          store.map(img => (
                            <img key={img} src={img} alt="img" 
                            className={`object-cover w-full h-24 p-1 border rounded-sm cursor-pointer hover:scale-110 ${isActive(img)}`}
                            onClick={() => handleSelectImg(img)}
                            />
                          ))
                        }
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleSubmit}
                >
                  OK
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  ref={cancelButtonRef}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ModalImages;