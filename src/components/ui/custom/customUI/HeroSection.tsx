const HeroSection = () => {
  return (
    <div className="relative isolate w-full h-[80vh]">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src="https://i.ibb.co/1XrsykN/hero-bg.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mx-auto w-full max-w-7xl h-full flex flex-col justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Discover the Joy of Driving with Us
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-800 dark:text-gray-200">
          Explore our wide range of rental cars to suit every need and budget.
          From compact cars for city driving to luxury vehicles for special
          occasions, we have the perfect car for you. Enjoy seamless booking,
          exceptional customer service, and the freedom to travel wherever you
          want.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Book Now
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <input
              type="text"
              placeholder="Pickup Location"
              className="w-full rounded-md px-4 py-2 text-gray-900 dark:text-gray-200 dark:bg-gray-800"
            />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <input
              type="text"
              placeholder="Drop-off Location"
              className="w-full rounded-md px-4 py-2 text-gray-900 dark:text-gray-200 dark:bg-gray-800"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-1">
            <input
              type="date"
              className="w-full rounded-md px-4 py-2 text-gray-900 dark:text-gray-200 dark:bg-gray-800"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-1">
            <input
              type="date"
              className="w-full rounded-md px-4 py-2 text-gray-900 dark:text-gray-200 dark:bg-gray-800"
            />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 lg:col-start-4">
            <button className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
