import CustomDatePicker from "@/components/form/CustomDatePicker";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const HeroSection = () => {
  const [showCar, setShowCar] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.location && data.date) {
      setShowCar(true);
    } else {
      setShowCar(false);
    }
  };

  return (
    <div className="px-4 md:px-0 mx-auto">
      <div className="relative">
        <div className="mx-auto">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white dark:fill-black lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative py-20  lg:py-40 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="flex">
                  <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-2 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-600">
                    <span className="font-semibold text-primary dark:text-primary-light">
                      Checkout our cars
                    </span>
                    <span
                      className="h-4 w-px bg-gray-900/10 dark:bg-gray-500"
                      aria-hidden="true"
                    />
                    <Link to="/cars" className="flex items-center gap-x-1">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <span className="text-gray-600 dark:text-gray-300">
                        View Cars
                      </span>
                      <ChevronRightIcon
                        className="-mr-2 h-5 w-5 text-gray-500 dark:text-gray-300"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                  Discover the Joy of Driving with Our Rental Cars
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Choose from a wide range of rental cars to suit every need and
                  budget. Enjoy seamless booking, exceptional customer service,
                  and the freedom to travel wherever you want.
                </p>

                <div className="mt-10">
                  <CustomForm onSubmit={onSubmit}>
                    <div className="flex items-center justify-between flex-col md:flex-row gap-4">
                      <CustomInput
                        name="location"
                        type="text"
                        placeholder="Location"
                        label="Pickup Location"
                        required={true}
                      />
                      <CustomDatePicker
                        name="date"
                        placeholder="Pickup Date"
                        label="Pickup Date"
                        required={true}
                      />
                    </div>
                    <CustomButton type="submit">Find Car</CustomButton>
                  </CustomForm>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 px-0 md:px-8 lg:px-0">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            alt=""
          />
        </div>
      </div>

      {showCar && (
        <div>
          <div className="flex items-center justify-between mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Cars Available
            </h2>
            <Link to="/cars" className="text-primary dark:text-primary-light">
              View All
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default HeroSection;
