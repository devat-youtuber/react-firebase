import { getDownloadURL, listAll, ref, uploadBytesResumable } from 'firebase/storage'

import { storage } from 'Firebase'
import { toast } from 'react-toastify'

export const uploadFiles = async (folder: string, files: File[]) => {
  const promises: any[] = [] 

  files.forEach(file => {
    const storageRef = ref(storage, `${folder}/${file.name}`)
    const uploadTask =  uploadBytesResumable(storageRef, file)
    promises.push(uploadTask)
  })

  const result = await Promise.all(promises)
  const urlPromises = result.map(async item => {
    const path = item.ref.toString()
    return await downloadFile(path)
  })

  return await Promise.all(urlPromises)
}

export const downloadFile = async (path: string) => {
  let item: string = '';
  await getDownloadURL(ref(storage, path))
  .then(url => item = url)
  .catch(err => {
    return toast.error(err.message)
  })

  return item;
}

export const getFiles = async (
  folder: string, 
  callback:(urls: string[]) => void
) => {
  let listRef = ref(storage, `${folder}`)

  let newUrls: string[] = []

  listAll(listRef)
  .then(res => {
    const urlPromises = res.items.map(async itemRef => {
      const path = itemRef.toString()
      return await downloadFile(path)
    })

    return Promise.all(urlPromises).then(urls => callback(urls))
  })
  .catch(err => {
    return toast.error(err.message)
  })
}