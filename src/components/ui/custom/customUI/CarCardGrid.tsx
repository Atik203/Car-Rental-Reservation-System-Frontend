import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TCar } from "@/types/car.types";

import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../button";

type TCarCard = {
  showSizeColor?: boolean;
  showDescription?: boolean;
};

const CarCardGrid: React.FC<TCar & TCarCard> = ({
  _id,
  name,
  description,
  color,
  isElectric,
  pricePerHour,
  status,
  features,
  image,
  showSizeColor = false,
  showDescription = true,
}) => {
  return (
    <Card className="w-full bg-slate-100 shadow-md dark:bg-gray-800 dark:text-white">
      <CardHeader>
        <img
          src={image}
          alt={name}
          className="w-full h-44 md:h-40 object-contain rounded"
        />
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>
          {status === "available" ? "Available" : "Unavailable"}
        </CardDescription>
      </CardHeader>
      <CardContent className="-mt-4">
        {showSizeColor && (
          <>
            <p>Color: {color}</p>
            <p>Electric: {isElectric ? "Yes" : "No"}</p>
          </>
        )}
        <p>Price per Hour: ${pricePerHour}</p>
        {features.length > 0 && <p>Features: {features.join(", ")}</p>}
        {showDescription && <p>{_.truncate(description, { length: 50 })}</p>}
      </CardContent>
      <CardFooter>
        <Link to={`/car-details/${_id}`}>
          <Button size={"sm"}>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCardGrid;
