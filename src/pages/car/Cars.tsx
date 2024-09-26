import { Button } from "@/components/ui/button";
import CarCardGrid from "@/components/ui/custom/customUI/CarCardGrid";
import CarCardList from "@/components/ui/custom/customUI/CarCardList";
import { CardSkeleton } from "@/components/ui/custom/customUI/CardSkeleton";
import { CardSkeletonList } from "@/components/ui/custom/customUI/CardSkeletonList";
import NoDataFound from "@/components/ui/custom/customUI/NoDataFound";
import PaginationComponent from "@/components/ui/custom/customUI/PaginationComponent";
import { PriceRangeFilter } from "@/components/ui/custom/customUI/PriceRangeFilter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import { TCar, TQueryParam } from "@/types/car.types";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { MinusIcon, PlusIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ListIcon } from "lucide-react";
import { Fragment, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const sortOptions = [
  { name: "Default", value: "" },
  { name: "Best Rating", value: "rating" },
  { name: "Newest", value: "newest" },
  { name: "Price: Low to High", value: "ASC" },
  { name: "Price: High to Low", value: "DSC" },
];
const displayOptions = [
  { value: 3, name: "3" },
  { value: 6, name: "6" },
  { value: 9, name: "9" },
  { value: 18, name: "18" },
  { value: 36, name: "36" },
];

const Cars = () => {
  const filters = [];
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const { handleSubmit, control } = useForm();
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value);
  const [isGridLayout, setIsGridLayout] = useState(true);
  const [queryParams, setQueryParams] = useState<TQueryParam[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDisplay, setSelectedDisplay] = useState(6);
  const selectedSortLabel =
    sortOptions.find((option) => option.value === selectedSort)?.name ||
    "Default";

  const handleDisplayChange = (value: number) => {
    setSelectedDisplay(value);
    updateQueryParams({ name: "limit", value });
  };

  const toggleLayout = () => {
    setIsGridLayout(!isGridLayout);
  };

  const handleSortChange = (value: string) => {
    setSelectedSort(value);
    updateQueryParams({ name: "sort", value });
  };

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
    updateQueryParams({ name: "minPrice", value: min });
    updateQueryParams({ name: "maxPrice", value: max });
  };

  const onSubmit = (data: Record<string, boolean>) => {
    const selectedFilters: TQueryParam[] = Object.entries(data)
      .filter(([_, value]) => value)
      .map(([name, value]) => ({ name, value }));
    setQueryParams(selectedFilters);
  };

  const handleClearFilters = () => {
    setMinPrice(0);
    setMaxPrice(1000);
    setSelectedSort("");
    setSelectedDisplay(6);
    setQueryParams([]);
  };

  const updateQueryParams = (param: TQueryParam) => {
    setQueryParams((prevParams) => {
      const existingParamIndex = prevParams.findIndex(
        (p) => p.name === param.name
      );
      if (existingParamIndex !== -1) {
        const updatedParams = [...prevParams];
        updatedParams[existingParamIndex] = param;
        return updatedParams;
      }
      return [...prevParams, param];
    });
  };

  const queryString = queryParams
    .map((param) => `${param.name}=${param.value}`)
    .join("&");

  const { data, isFetching, isLoading } = useGetAllCarsQuery(queryString, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  const totalPages = Math.ceil(data?.totalData / selectedDisplay);

  const cars: TCar[] = data?.data || [];

  return (
    <div className="">
      <div>
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <TransitionChild
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 z-40 flex">
              <TransitionChild
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-gray-800 py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-gray-800 p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-4 border-t border-gray-200 dark:border-gray-700"
                  >
                    <PriceRangeFilter
                      minPrice={0}
                      maxPrice={1000}
                      onPriceChange={handlePriceChange}
                    />
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-b mx-2 border-gray-200 dark:border-gray-700 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <DisclosureButton className="flex w-full items-center justify-between bg-white dark:bg-gray-800 py-3 text-sm text-gray-400 hover:text-gray-500 dark:text-gray-300">
                                <span className="font-medium text-gray-900 dark:text-gray-100">
                                  {section.name}
                                </span>
                                <span className="ml-5 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pt-6">
                              <div className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <Controller
                                      name={`${section.id}-${option.value}`}
                                      control={control}
                                      defaultValue={option.checked}
                                      render={({ field }) => (
                                        <input
                                          {...field}
                                          id={`filter-${section.id}-${optionIdx}`}
                                          type="checkbox"
                                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                          onChange={(e) => {
                                            field.onChange(e.target.checked);
                                            handleSubmit(onSubmit)();
                                          }}
                                        />
                                      )}
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-black dark:text-gray-100 font-medium"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                    <div className="flex mt-2 items-center justify-center">
                      <Button
                        className="bg-secondary
                  text-black dark:bg-gray-800 dark:text-white
                  "
                        onClick={handleClearFilters}
                      >
                        Clear Filters
                      </Button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <main className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-16">
            <h1 className="text-base md:text-4xl font-medium md:font-bold tracking-tight">
              All Cars
            </h1>
            <div className="flex items-center gap-1 md:gap-2">
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div className="flex justify-center items-center gap-1 md:gap-2">
                    Sort
                    <span className="bg-slate-200 px-2 py-2 text-sm text-center flex justify-center items-center dark:bg-gray-800 dark:text-gray-300">
                      {selectedSort ? `${selectedSortLabel}` : "Default"}
                    </span>
                  </div>
                </MenuButton>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
                    <div className="container mx-auto p-2">
                      {sortOptions.map((option) => (
                        <MenuItem
                          key={option.value}
                          as="button"
                          className={({ active }) =>
                            `block w-full text-left p-2 text-sm ${
                              active ? "bg-gray-200 dark:bg-gray-700" : ""
                            } ${
                              option.value === selectedSort
                                ? "font-medium text-base text-primary dark:text-primary"
                                : ""
                            }`
                          }
                          onClick={() => handleSortChange(option.value)}
                        >
                          {option.name}
                          {option.value === selectedSort && (
                            <span className="ml-2 text-primary dark:text-primary">
                              ✓
                            </span>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
              <Menu
                as="div"
                className="relative inline-block text-left ml-2 md:ml-4"
              >
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div className="flex justify-center items-center gap-1 md:gap-2">
                    Show
                    <span className="bg-slate-200 px-2 py-2 text-center flex justify-center items-center dark:bg-gray-800 dark:text-gray-300">
                      {selectedDisplay ? `${selectedDisplay}` : "6"}
                    </span>
                  </div>
                </MenuButton>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
                    <div className="container mx-auto p-2">
                      {displayOptions.map((option) => (
                        <MenuItem
                          key={option.value}
                          as="button"
                          className={({ active }) =>
                            `block w-full text-left p-2 text-sm ${
                              active ? "bg-gray-200 dark:bg-gray-700" : ""
                            } ${
                              option.value === selectedDisplay
                                ? "font-medium text-base text-primary dark:text-primary"
                                : ""
                            }`
                          }
                          onClick={() => handleDisplayChange(option.value)}
                        >
                          {option.name}
                          {option.value === selectedDisplay && (
                            <span className="ml-2 text-primary dark:text-primary">
                              ✓
                            </span>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white"
                onClick={toggleLayout}
              >
                <span className="sr-only">Toggle layout</span>
                <TooltipProvider>
                  {isGridLayout ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <ListIcon className="h-5 w-5" aria-hidden="true" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Switch to List View</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Squares2X2Icon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Switch to Grid View</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </TooltipProvider>
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-2 lg:hidden dark:text-gray-300 dark:hover:text-white"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Cars
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form
                className="hidden lg:block"
                onSubmit={handleSubmit(onSubmit)}
              >
                <PriceRangeFilter
                  minPrice={0}
                  maxPrice={1000}
                  onPriceChange={handlePriceChange}
                />
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b mx-2 border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <Controller
                                  name={`${section.id}-${option.value}`}
                                  control={control}
                                  defaultValue={option.checked}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      id={`filter-${section.id}-${optionIdx}`}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                      onChange={(e) => {
                                        field.onChange(e.target.checked);
                                        handleSubmit(onSubmit)();
                                      }}
                                    />
                                  )}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-black font-medium"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
                <div className="flex mt-2 items-center justify-center">
                  <Button
                    className="bg-secondary
                  text-black dark:bg-gray-800 dark:text-white
                  "
                    onClick={handleClearFilters}
                  >
                    Clear Filters
                  </Button>
                </div>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {isFetching || isLoading ? (
                  <div>
                    {isGridLayout ? (
                      <CardSkeleton count={4} />
                    ) : (
                      <CardSkeletonList count={3} />
                    )}
                  </div>
                ) : cars.length === 0 ? (
                  <NoDataFound />
                ) : isGridLayout ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cars.map((product) => (
                      <CarCardGrid
                        showSizeColor={true}
                        key={product._id}
                        {...product}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cars.map((product) => (
                      <CarCardList key={product._id} {...product} />
                    ))}
                  </div>
                )}
                <PaginationComponent
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Cars;
