import { useState, useEffect } from 'react';
import InsightApi from './api';
import ListingCard from './ListingCard';
import SearchForm from './SearchForm';
import ListingType from './types';
import { useParams } from 'react-router-dom';


function ListingsPage() {
    const [listings, setListings] = useState<ListingType[] | null>([])
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const { source } = useParams();

    useEffect(function fetchListingsWhenMounted() : void {
        async function fetchListings() {
          setIsLoading(true);
          setListings(await InsightApi.getListings(source,searchTerm));
          setIsLoading(false);
        }
        fetchListings();
      }, [searchTerm]);

    function updateSearch(newSearchTerm:string) : void {
        setSearchTerm(newSearchTerm);
    }

    if (isLoading) return <h1>Loading...</h1>

    return (
    <div className='ListingsList'>
        {/* <SearchForm updateSearch={updateSearch} />
        {listings.length === 0 &&
          <h5 className="mt-4">Sorry, no listings were found!</h5>} */}

        {listings?.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    );
  }

  export default ListingsPage;