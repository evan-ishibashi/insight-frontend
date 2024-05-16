import { ListingType } from "./types";
import BubbleChart from "./BubbleChart";

/** ChartList: Displays list of charts
 *
 * Props:
 * - listings: [{listing},...]
 *
 * RoutesList -> ChartPage -> ChartList
 */
function ChartList({ listings }: { listings: ListingType[] | null; }) {

    return (
        <div>
            <BubbleChart listings={listings} />
        </div>
    );
}

export default ChartList;