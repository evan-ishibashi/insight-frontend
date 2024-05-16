import { useState, useEffect } from 'react';
import InsightApi from './api';
import { ListingType } from './types';
import { useParams } from 'react-router-dom';
import ListingsList from './ListingsList';
import Pagination from './Pagination';
import ListingHeader from './ListingHeader';


/** ListingsPage: Handles fetching and displaying whole marketplace listing page
 *
 * State:
 * - listings: [{listing},...]
 * - searchTerm: string
 * - isLoading: boolean
 * - currentPage: integer
 * - listingsPerPage: 15
 * - firstGenOnly: boolean
 *
 * RoutesList -> ListingsPage -> ListingsList -> ListingCard -> Badge
 *                            -> ListingHeader
 *                            -> Pagination
 */

function ListingsPage() {
  const [listings, setListings] = useState<ListingType[] | null>([]);
  const [searchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage] = useState(15);
  const [firstGenOnly] = useState(true);
  const { site } = useParams();

  useEffect(function fetchListingsWhenMounted(): void {
    async function fetchListings() {
      setIsLoading(true);
      setListings(await InsightApi.getListings(site, searchTerm, firstGenOnly));
      setIsLoading(false);
    }
    fetchListings();
  }, [searchTerm, site]);

  useEffect(function resetPageCount(): void {
    setCurrentPage(1);
  }, [site]);

  // Function to set Current Page to new number
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  // get current posts
  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = listings?.slice(indexOfFirstListing, indexOfLastListing);
  const totalListings = listings?.length;


  if (isLoading) return (
    <>
      <div className=''>
        <ListingHeader site={site} />
      </div>
      <h1>Grabbing Listings...</h1>
      <h1>Server is spinning up, come back in a min</h1>
    </>
  );

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });

  return (
    <div className=''>
      <div className=''>
        <ListingHeader site={site} />
      </div>
      <div className='md:hidden'>
        <Pagination
          totalListings={totalListings}
          listingsPerPage={listingsPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
      <div className=''>
        <div className='' id='Listings'>
          <ListingsList listings={currentListings} />
          <Pagination
            totalListings={totalListings}
            listingsPerPage={listingsPerPage}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

export default ListingsPage;