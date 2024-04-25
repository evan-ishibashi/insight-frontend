import { useState, useEffect } from 'react';
import InsightApi from './api';
import {ListingType} from './types';
import ChartList from './ChartList';



function ChartPage() {
    const [listings, setListings] = useState<ListingType[] | null>([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function fetchListingsWhenMounted() : void {
        async function fetchListings() {
          setIsLoading(true);
          setListings(await InsightApi.getChartData());
          setIsLoading(false);
        }
        fetchListings();
      }, []);


    if (isLoading) return <h1>Loading...</h1>

    return (
    <div className=''>
      <ChartList listings={listings}/>
    </div>
    );
  }

export default ChartPage;