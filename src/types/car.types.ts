export interface TCar {
  _id: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  pricePerHour: number;
  status: "available" | "unavailable";
  features: string[];
  isDeleted: boolean;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface TAuthorReview {
  _id?: string;
  name: string;
  image: string;
  comment: string;
  rating: number;
}

export interface TReview {
  _id?: string;
  averageRating?: number;
  totalCounts: number;
  counts: {
    rating: number;
    count: number;
    _id?: string;
  }[];
  featured: TAuthorReview[];
}
