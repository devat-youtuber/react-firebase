import React from 'react'
import { Link } from 'react-router-dom'
import { ICollection } from 'types'


interface IProps {
  collection: ICollection
}

const Card: React.FC<IProps> = ({children, collection}) => {
  return (
    <div className="relative group">
      <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <Link to={`/collection/${collection.id}`}>
          <img
            src={collection.photos?.[0]}
            alt={collection.photos?.[0]}
            className="object-cover object-center w-full h-full"
          />
        </Link>
      </div>
      <div className="flex mt-1 mb-3 font-semibold opacity-50">
        <h2 className="text-2xl text-gray-900 capitalize">
          {collection.title}
        </h2>
        { children }
      </div>
  </div>
  )
}

export default Card
