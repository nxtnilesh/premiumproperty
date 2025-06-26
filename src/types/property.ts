export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  details: {
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    yearBuilt: number;
    propertyType:
      | "apartment"
      | "independent-house"
      | "villa"
      | "plot"
      | "bungalow"
      | "farmhouse"
      | "pg"
      | "commercial-space";

    status: "for-sale" | "for-rent" | "sold" | "rented";
  };
  images: string[];
  features: string[];
  agent: {
    id: string;
    name: string;
    email: string;
    phone: string;
    avatar: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface SearchFilters {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: string;
  status?: string;
}
