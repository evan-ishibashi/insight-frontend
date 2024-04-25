type ListingType = {
    city: string;
    date: Date;
    first_gen: boolean;
    id: number;
    image: string;
    insight: boolean;
    mileage: number;
    parts: boolean;
    price: number;
    site: string;
    state: string;
    title: string;
    url: string;
    year: number;
  }

type PartsType = {
    city: string;
    date: Date;
    available: Date;
    id: number;
    image: string;
    section: string;
    row: string;
    space: string;
    site: string;
    color: string;
    first_gen: Boolean;
    state: string;
    title: string;
    url: string;
    vin: string;
    year: number;
  }

export type {ListingType, PartsType}