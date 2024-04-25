import { ListingType } from "./types";

// Helper function takes in array of nums returns average of those nums
function avgArray(arr:number[]):number {
    let sum =0;
    for (let num of arr){
        sum += num;
    }
    return Math.round(sum/arr.length);
}

// Helper function takes in listings
function splitByMileage(listings:ListingType[]| null){
    let under = []
    let between = []
    let between2 = []
    let over = []


    if (listings){

        for (let listing of listings){
            if (listing.mileage < 100000){
                under.push(listing.price)
            } else if (listing.mileage > 100000 && listing.mileage < 200000){
                between.push(listing.price)
            } else if (listing.mileage > 200000 && listing.mileage < 300000){
                between2.push(listing.price)
            } else if (listing.mileage > 300000){
                over.push(listing.price)
            }
        }
    }
    return {under, between, between2, over}
}

export {avgArray, splitByMileage}