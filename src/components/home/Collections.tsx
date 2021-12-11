import { useEffect, useRef, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from "redux/hooks";
import Card from "components/global/Card";

import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'
import { ICollection } from "types";
import { paginate, remove } from "redux/slice/collectionSlice";
import { deleteCollection } from "actions/collectionAction";
import { lastestDoc } from 'actions/collectionAction'
import { BigLoading } from 'components/global/Loading';

interface IProps {
  setDataEdit: (dataEdit?: ICollection) => void
}

const Collections: React.FC<IProps> = ({setDataEdit}) => {
  const { collections, loading, stop } = useAppSelector(state => state.collections)
  const dispatch = useAppDispatch()
  const loadRef = useRef(null)

  const handleDelete = (data: ICollection) => {
    if(!data.id) return;

    if(window.confirm("Are you sure you want to delete this collection?")){
      dispatch(remove(data))
      deleteCollection(data)
    }
  }

  const handleLoadMore = useCallback(() => {
    if(stop === 0) return;
    dispatch(paginate({doc: lastestDoc}))
  },[stop, dispatch])

  useEffect(() => {
    const btn = loadRef.current;

    const observer = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        handleLoadMore()
      }
    })

    if(btn) observer.observe(btn)

    return () => {
      if(btn) observer.unobserve(btn)
    }
  },[handleLoadMore])
 
  return (
    <div className="bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
          { loading && <BigLoading /> }
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {/* Card */}
            {
              collections.map(collection => (
                <Card key={collection.id} collection={collection}>
                  <PencilAltIcon className="hidden mx-2 cursor-pointer hover:text-blue-500 w-7 text-opacity-80 group-hover:block"
                  onClick={() => setDataEdit(collection)} 
                  />

                  <TrashIcon className="hidden cursor-pointer hover:text-red-500 w-7 text-opacity-80 group-hover:block"
                  onClick={() => handleDelete(collection)}/>
                </Card>
              ))
            }
          </div>
        </div>
      </div>

      {/* Load more */}
      <button type="button" className={`px-6 py-2 border-2 opacity-0
      ${stop === 0 && 'hidden'}`}
      onClick={handleLoadMore}
      ref={loadRef}>
        Load more
      </button>
    </div>
  )
}

export default Collections;