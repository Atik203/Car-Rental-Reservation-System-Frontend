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
