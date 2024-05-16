import { useState, useEffect } from 'react';
import InsightApi from './api';
import {ListingType} from './types';
import ChartList from './ChartList';
import ChartInsights from './ChartInsights';


/** ChartPage: Handles logic and rendering of Data Chart Page
 *
 * State:
 * - listings: [{listing},...]
 * - isLoading: boolean
 *
 * RoutesList -> ChartPage -> ChartList -> BubbleChart
 *                         -> ChartInsights
 */
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


    if (isLoading) return <h1>Loading... Server is spinning up, come back in a min</h1>


    return (
    <div className='flex flex-col'>
      <span className='w-full'>
        <ChartList listings={listings}/>
      </span>
      <ChartInsights listings={listings}/>
    </div>
    );
  }

export default ChartPage;