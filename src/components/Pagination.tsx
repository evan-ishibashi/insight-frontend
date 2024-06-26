import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

/** Pagination: Displays page bar to show which page you are currently on
 *
 * Props:
 * - totalListings: number
 * - listingsPerPage: number
 * - currentPage: number
 * - paginate: function
 *
 * RoutesList -> ListingsPage -> Pagination
 *            -> PartsPage -> Pagination
 */

function Pagination({ totalListings = 0, listingsPerPage, currentPage, paginate }: { totalListings: number | undefined, listingsPerPage: number, currentPage: number, paginate: Function; }) {
  const firstResult: number = totalListings ? (1 + ((currentPage - 1) * listingsPerPage)) : 0;
  const lastResult: number = currentPage * listingsPerPage > totalListings ? totalListings : currentPage * listingsPerPage;
  const totalPages: number = Math.ceil(totalListings / listingsPerPage);
  const listingNumbers: number[] = [];

  if (totalListings) {

    for (let i = 1; i <= totalPages; i++) {
      listingNumbers.push(i);
    }
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        {currentPage > 1 ?

          <a
            onClick={() => paginate(currentPage - 1)}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          :
          <a
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-50"
          >
            Previous
          </a>
        }
        <p className="text-sm text-gray-700">
          Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{totalPages}</span>
        </p>
        {currentPage < totalPages ?

          <a
            onClick={() => paginate(currentPage + 1)}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
          :
          <a
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-50"
          >
            Next
          </a>
        }
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
            {currentPage > 1 ?
              <a
                onClick={() => paginate(currentPage - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              :
              <></>
            }
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {listingNumbers.map(number => {
              return number === currentPage ?

                <a
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-blue-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-blue-500"
                  key={number}
                >
                  {number}
                </a>
                :
                <a
                  onClick={() => paginate(number)}
                  className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset right-gray-300 focus:z-20 hover:bg-gray-50 focus:outline-offset-0"
                  key={number}
                >
                  {number}
                </a>;

            })}

            {currentPage < totalPages ?
              <a
                onClick={() => paginate(currentPage + 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              :
              <></>
            }
          </nav>
        </div>
      </div>
    </div>
  );

}

export default Pagination;