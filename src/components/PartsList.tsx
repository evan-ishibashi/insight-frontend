import PartsCard from './PartsCard';
import { PartsType } from './types';

/** PartsList: displays list of PartsCards
 *
 * Props:
 * - parts: [{part},...]
 *
 * RoutesList -> PartsPage -> PartsList -> PartsCard -> Badge
 */
function PartsList({ parts }: { parts: PartsType[] | undefined; }) {

  return (
    <div className='grid-cols-1 grid gap-2 md:gap-4 md:grid-cols-3 grid-rows-3 mt-2'>
      {/* <SearchForm updateSearch={updateSearch} />
        {listings.length === 0 &&
          <h5 className="mt-4">Sorry, no listings were found!</h5>} */}

      {parts?.map(part => (
        <PartsCard key={part.id} part={part} />
      ))}
    </div>
  );
}

export default PartsList;