import ListingType from "./types";
import { Link } from "react-router-dom";

function ListingCard({listing}: {listing:ListingType}) {
    const { title, city, image, mileage, price, state, url } = listing;
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Link to={`${url}`}>
          {image && <img className="w-full" src={image} alt={title}></img>}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">
                <small>{mileage} Miles</small><br />
                <small>${price}</small>
                <small>${city}, {state}</small>
              </p>
          </div>
        </Link>
      </div>
    );
  }

  export default ListingCard;