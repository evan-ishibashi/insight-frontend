import ListingType from "./types";
import { Link } from "react-router-dom";
import Badge from "./Badge";

function ListingCard({listing}: {listing:ListingType}) {
    const { title, city, image, mileage, price, state, url, site } = listing;
    return (
      <div className="max-w-full md:max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition-all duration-500 cursor-pointer">
        <Link to={`${url}`} target="blank" rel="noopener noreferrer">
          {image && <img className="w-full" src={image} alt={title}></img>}
          <div className="px-6 py-4 flex flex-col">
            <div className="font-bold text-xl mb-2">${price}</div>
              <p className="text-gray-700 text-base">
                <span className="">{title}</span><br /><br />
                <span className="flex flex-row">
                  <svg className="h-8 w-8 text-gray-700 display: inline"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="13" r="2" />  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
                    </svg>
                  <span className="ml-2 mt-1">
                    {mileage} Miles</span><br />
                  </span>
                <span className="flex flex-row">
                  <svg className="h-8 w-8 text-gray-700 display: inline"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="18" y2="6.01" />  <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />  <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />  <line x1="9" y1="4" x2="9" y2="17" />  <line x1="15" y1="15" x2="15" y2="20" />
                    </svg>
                  <span className="ml-2 mt-1">
                      {city}, {state}
                    </span>
                  <span className="self-end ml-28">
                    <Badge site={site}/>
                  </span>
                </span>

              </p>
          </div>
        </Link>
      </div>
    );
  }

  export default ListingCard;