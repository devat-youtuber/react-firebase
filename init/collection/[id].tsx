import React from 'react'



const Collection = () => {
  return (
    <div className="relative bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 capitalize">
            title
          </h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {/* Images */}
            <div className="relative group">
              <div className="relative w-full my-2 overflow-hidden bg-white rounded-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
              >
                <img
                  src=""
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>
            {/* Images */}
          </div>
        </div>
      </div>

      {/* BigImage */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden bg-white rounded-md'>
        <img className='object-contain w-full h-full'/>
        
        <div className='absolute top-0 right-0 flex'>
          <button className='px-6 py-1 mx-2 bg-white border-2 border-gray-400 rounded-md' 
          >
            Close
          </button>
        </div>
      </div>
      {/* BigImage */}
    </div>
  )
}

export default Collection
