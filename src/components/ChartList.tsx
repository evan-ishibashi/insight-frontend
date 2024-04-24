import ListingType from "./types";
import BubbleChart from "./BubbleChart";

function ChartList({listings}:{listings:ListingType[] | null}) {

    return (
        <div>
            <BubbleChart listings={listings}/>
        </div>
    );
}

export default ChartList;