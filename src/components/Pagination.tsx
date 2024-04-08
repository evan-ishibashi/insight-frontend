import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


function Pagination({ totalListings=0, listingsPerPage, currentPage, paginate}:{totalListings:number | undefined, listingsPerPage:number, currentPage:number, paginate:Function}) {
    const firstResult = 1 + ((currentPage - 1) * listingsPerPage)
    const lastResult = currentPage * listingsPerPage > totalListings ? totalListings : currentPage * listingsPerPage
    const listingNumbers = [];

    if (totalListings){

        for(let i=1; i <= Math.ceil(totalListings/listingsPerPage); i++){
            listingNumbers.push(i)
        }
    }





      return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{firstResult}</span> to <span className="font-medium">{lastResult}</span> of{' '}
                <span className="font-medium">{totalListings}</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a
                //   href="#"
                    onClick={() => paginate(currentPage -1)}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                {listingNumbers.map(number => {
                        return number === currentPage ?

                        <a
                            // href={`${number}`}
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-blue-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-blue-500"
                        >
                            {number}
                        </a>
                        :
                        <a
                            // href={`${number}`}
                            onClick={() => paginate(number)}
                            className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset right-gray-300 focus:z-20 hover:bg-gray-50 focus:outline-offset-0"
                        >
                            {number}
                        </a>

                })}

                <a
                //   href="#"
                  onClick={() => paginate(currentPage + 1)}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      )

// return (
//     <nav className="">
//         {listingNumbers.map(number => (
//             <li key={number} className="">
//                 <a onClick={() => paginate()} className="">
//                     {number}
//                 </a>
//             </li>
//         ))}

//     </nav>
// )

}

export default Pagination;