// import { useState, useEffect } from 'react';
// import InsightApi from './api';
// import ListingCard from './ListingCard';
// import SearchForm from './SearchForm';
// import ListingType from './types';
// import { useParams } from 'react-router-dom';
// import ListingsList from './ListingsList';
// import Pagination from './Pagination';
// import ListingHeader from './ListingHeader';


// function DataPage() {
//     // const [listings, setListings] = useState<ListingType[] | null>([])
//     // const [isLoading, setIsLoading] = useState(true);
//     // const [currentPage, setCurrentPage] = useState(1)
//     // const [listingsPerPage, setListingsPerPage] = useState(15)
//     // const [firstGenOnly, setFirstGenOnly] = useState(true)
//     // const { site } = useParams();

//     // useEffect(function fetchListingsWhenMounted() : void {
//     //     async function fetchListings() {
//     //       setIsLoading(true);
//     //       setListings(await InsightApi.getListings(site,searchTerm));
//     //       setIsLoading(false);
//     //     }
//     //     fetchListings();
//     //   }, []);

//     // useEffect(function resetPageCount(): void {
//     //   setCurrentPage(1)
//     // },[site])

//     // function updateSearch(newSearchTerm:string) : void {
//     //     setSearchTerm(newSearchTerm);
//     // }

//     // const paginate = (pageNumber:number) : void => setCurrentPage(pageNumber)

//     // // get current posts
//     // const indexOfLastListing = currentPage * listingsPerPage;
//     // const indexOfFirstListing = indexOfLastListing - listingsPerPage;
//     // const currentListings = listings?.slice(indexOfFirstListing, indexOfLastListing);
//     // const totalListings = listings?.length;


//     // if (isLoading) return <h1>Loading...</h1>

//     // window.scrollTo({
//     //     top: 0,
//     //     left: 0,
//     //     behavior: "smooth"
//     //   });

//     // return (
//     // <div className=''>
//     //     <div className=''>
//     //         <ListingHeader site={site}/>
//     //     </div>
//     //     <div className=''>
//     //         <div className='' id='Listings'>
//     //             <ListingsList listings={currentListings}/>
//     //             <Pagination
//     //                 totalListings = {totalListings}
//     //                 listingsPerPage = {listingsPerPage}
//     //                 currentPage={currentPage}
//     //                 paginate={paginate}
//     //             />
//     //         </div>
//     //     </div>
//     // </div>
//     );
//   }

// export default DataPage;