import { useState, useEffect } from 'react';
import InsightApi from './api';
import ListingCard from './ListingCard';
import SearchForm from './SearchForm';
import ListingType from './types';
import { useParams } from 'react-router-dom';


function ListingsList({listings}:{listings:ListingType[] | undefined}) {

    return (
    <div className='ListingsList grid gap-4 grid-cols-3 grid-rows-3'>
        {/* <SearchForm updateSearch={updateSearch} />
        {listings.length === 0 &&
          <h5 className="mt-4">Sorry, no listings were found!</h5>} */}

        {listings?.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    );
  }

  export default ListingsList;