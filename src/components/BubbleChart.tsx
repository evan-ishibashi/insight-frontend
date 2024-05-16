import { ListingType } from "./types";
import { Chart as ChartJS, registerables } from "chart.js/auto";
import { Bubble } from "react-chartjs-2";
ChartJS.register(...registerables);

/** BubbleChart: Displays Chart.JS Mileage vs. Cost
 *
 * Props:
 * - listings: [{listing},...]
 *
 * RoutesList -> ChartPage -> ChartList -> BubbleChart
 */

function BubbleChart({ listings }: { listings: ListingType[] | null; }) {
    return (
        <div className="">
            <Bubble
                data={{
                    labels: listings?.map((data) => data.mileage),
                    datasets: [
                        {
                            label: "1st Gen Honda Insight Mileage Vs. Price",
                            data: listings?.map((data) => data.price),
                            backgroundColor: "#064FF0"
                        }
                    ]


                }
                } />
        </div>
    );
}

export default BubbleChart;