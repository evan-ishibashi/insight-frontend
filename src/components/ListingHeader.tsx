
function ListingHeader({site}:{site:string | undefined}){
    return(
        <>
        {site === "fb" &&

        <h1>Facebook Marketplace Listings</h1>
        }

        {site === "offerup" &&

        <h1>Offerup Listings</h1>
        }



        </>
    )
}

export default ListingHeader;