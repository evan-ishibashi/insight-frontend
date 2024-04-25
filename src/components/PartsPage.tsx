import { useState, useEffect } from 'react';
import InsightApi from './api';
import {PartsType} from './types';
import PartsList from './PartsList';
import Pagination from './Pagination';
import PartsHeader from './PartsHeader'


function PartsPage() {
    const [parts, setParts] = useState<PartsType[] | null>([])
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [listingsPerPage] = useState(15)

    useEffect(function fetchPartsWhenMounted() : void {
        async function fetchParts() {
          setIsLoading(true);
          setParts(await InsightApi.getParts(searchTerm));
          setIsLoading(false);
        }
        fetchParts();
      }, [searchTerm]);

    useEffect(function resetPageCount(): void {
      setCurrentPage(1)
    },[])

    const paginate = (pageNumber:number) : void => setCurrentPage(pageNumber)

    // get current posts
    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;
    const currentParts = parts?.slice(indexOfFirstListing, indexOfLastListing);
    const totalParts = parts?.length;


    if (isLoading) return (
      <>
       <div className=''>
            <PartsHeader/>
        </div>
      <h1>Grabbing Parts Listings...</h1>
      </>
    )

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });

    return (
    <div className=''>
        <div className=''>
            <PartsHeader/>
        </div>
        <div className='md:hidden'>
          <Pagination
          totalListings = {totalParts}
          listingsPerPage = {listingsPerPage}
          currentPage={currentPage}
          paginate={paginate}
          />
        </div>
        <div className=''>
            <div className='' id='Listings'>
                <PartsList parts={currentParts}/>
                <Pagination
                    totalListings = {totalParts}
                    listingsPerPage = {listingsPerPage}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </div>
        </div>
    </div>
    );
  }

export default PartsPage;