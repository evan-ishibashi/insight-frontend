
function ListingHeader({site}:{site:string | undefined}){
    const SITE = site === "fb" ? "Facebook Marketplace" : "Offerup"
    return(
        <div className="bg-white rounded-xl">
        <div className="text-center">
            {site === "fb" &&
                <h1 className="bg-blue-500 text-white p-6 shadow-lg text-2xl">{SITE} Listings</h1>
            }
            {site === "offerup" &&
                <h1 className="bg-emerald-900 text-white p-6 shadow-lg text-2xl">{SITE} Listings</h1>

            }
        </div>
        <div className="text-center p-4">
        <p className="h-10 text-xl">Listings pulled directly from {SITE}</p>

        </div>

        </div>
    )
}

export default ListingHeader;