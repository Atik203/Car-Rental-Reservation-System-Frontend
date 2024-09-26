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

const CarCardList: React.FC<TCar & TCarCard> = ({
  _id,
  name,
  description,
  color,
  isElectric,
  pricePerHour,
  status,
  features,
  image,
  showSizeColor = true,
  showDescription = true,
}) => {
  return (
    <Card className="w-full flex flex-col md:flex-row bg-slate-100 shadow-md dark:bg-gray-800 dark:text-white">
      <CardHeader className="flex-shrink-0 md:w-1/4">
        <img
          src={image}
          alt={name}
          className="w-full h-44 object-contain rounded"
        />
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>
          {status === "available" ? "Available" : "Unavailable"}
        </CardDescription>
        {showSizeColor && (
          <>
            <p>Color: {color}</p>
            <p>Electric: {isElectric ? "Yes" : "No"}</p>
          </>
        )}
        <p>Price per Hour: ${pricePerHour}</p>
        {features.length > 0 && <p>Features: {features.join(", ")}</p>}
        {showDescription && <p>{_.truncate(description, { length: 100 })}</p>}
      </CardContent>
      <CardFooter className="flex-shrink-0 md:w-1/4">
        <Link to={`/car-details/${_id}`}>
          <Button size={"sm"}>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCardList;
