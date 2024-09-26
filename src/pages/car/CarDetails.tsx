import CarDetailsSkeleton from "@/components/ui/custom/customUI/CarDetailsSkeleton";
import CustomButton from "@/components/ui/custom/customUI/CustomButton";
import ReviewSection from "@/components/ui/custom/customUI/ReviewSection";
import { useGetSingleCarQuery } from "@/redux/features/car/carApi";
import { TCar } from "@/types/car.types";
import ReactImageMagnify from "react-image-magnify";
import { Link, useParams } from "react-router-dom";

export default function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isFetching, isLoading, isSuccess } = useGetSingleCarQuery(
    id as string
  );

  const car: TCar = data?.data;
  const reviews = null;
  //   if (isSuccess) {
  //     reviews = {
  //       ...car.reviews,
  //       averageRating: car.averageRating,
  //     } as TReview;
  //   }

  return (
    <div className="min-h-screen">
      {isFetching || isLoading ? (
        <CarDetailsSkeleton />
      ) : (
        <div>
          <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              {/* Image gallery */}
              <div className="flex flex-col-reverse">
                <div className="aspect-h-1 aspect-w-1 w-full">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: `Car image`,
                        isFluidWidth: true,
                        src: car.image,
                        sizes:
                          "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                      },
                      largeImage: {
                        src: car.image,
                        width: 1200,
                        height: 1800,
                      },
                      lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                      enlargedImageContainerDimensions: {
                        width: "150%",
                        height: "150%",
                      },
                      enlargedImagePosition: "over",
                      enlargedImageStyle: { objectFit: "contain" },
                    }}
                    style={{ width: "100%", height: "100%" }}
                    imageClassName="object-contain w-full h-full sm:rounded-lg"
                  />
                </div>
              </div>

              {/* Car info */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {car.name}
                    </h1>
                    <p className="">
                      Status:{" "}
                      <span className="text-primary font-medium">
                        {car.status === "available"
                          ? "Available"
                          : "Unavailable"}
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <h2 className="sr-only">Car information</h2>
                  <p className="text-3xl tracking-tight text-gray-900 dark:text-white">
                    ${car.pricePerHour} per hour
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Color
                  </h3>
                  <div className="mt-2 flex items-center space-x-3">
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 rounded-full border border-black border-opacity-10"
                      style={{ backgroundColor: car.color }}
                    />
                  </div>
                </div>

                <div className="mt-6 mb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      Features
                    </h3>
                  </div>
                  <ul className="my-1 list-disc pl-5 space-y-1">
                    {car.features.map((feature, index) => (
                      <li key={index} className="text-gray-900 dark:text-white">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={`/booking/${car._id}`}>
                  <CustomButton>Book now</CustomButton>
                </Link>
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Description
                  </h3>
                  <p className="mt-2 text-base text-justify text-gray-900 dark:text-white">
                    {car.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {reviews && <ReviewSection reviews={reviews} />}
        </div>
      )}
    </div>
  );
}
