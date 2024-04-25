import { ListingType } from "./types";
import { avgArray, splitByMileage } from "./helper";

function ChartInsights({listings}:{listings:ListingType[]| null}){
    let {under, between, between2, over} = splitByMileage(listings)

    return (
        <>

        {/* Features section */}
            <div className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Insights</h2>
            <p className="mt-4 text-lg text-gray-600">
            Historical Data trends from Facebook Marketplace Listings beginning Apr 1, 2024
            </p>
        </div>
        {/* Feature cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Below 100k Miles</h3>
                <p className="mt-4 text-gray-600">
                    Average Asking price below 100k Miles
                </p>
                <div className="mt-6 flex justify-center">
                <b>${avgArray(under)}</b>
            </div>
            </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">100k - 200k Miles</h3>
                <p className="mt-4 text-gray-600">
                Average Asking price between 100k - 200k Miles
                </p>
                <div className="mt-6 flex justify-center">
                <b>${avgArray(between)}</b>
            </div>
            </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">200k - 300k Miles</h3>
                <p className="mt-4 text-gray-600">
                Average Asking price between 200k - 300k Miles
                </p>
                <div className="mt-6 flex justify-center">
                <b>${avgArray(between2)}</b>
            </div>
            </div>
            </div>
            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Over 300k Miles</h3>
                <p className="mt-4 text-gray-600">
                Average Asking price over 300k Miles
                </p>
                <div className="mt-6 flex justify-center">
                <b>${avgArray(over)}</b>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    </>
    );
}

export default ChartInsights;