import React from 'react'
import { Link } from 'react-router-dom'


const Card = () => {
  return (
    <div className="relative group">
      <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <Link to="">
          <img
            src=""
            alt=""
            className="object-cover object-center w-full h-full"
          />
        </Link>
      </div>
      <div className="flex mt-1 mb-3 font-semibold opacity-50">
        <h2 className="text-2xl text-gray-900 capitalize">
          title
        </h2>
        {/* children */}
      </div>
  </div>
  )
}

export default Card
