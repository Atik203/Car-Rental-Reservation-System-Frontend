import ContactSection from "@/components/ui/custom/others/ContactSection";

const stats = [
  { label: "Happy Customers", value: "10,000+" },
  { label: "Cars Rented", value: "50,000+" },
  { label: "Locations Worldwide", value: "100" },
];

const values = [
  {
    name: "Quality Vehicles",
    description:
      "We offer top-quality vehicles to ensure that your travel experiences are safe and enjoyable. Our cars are well-maintained and trusted by customers around the world.",
  },
  {
    name: "Customer Satisfaction",
    description:
      "Our customers are at the heart of everything we do. We strive to provide exceptional customer service and support to ensure that your rental experience with us is seamless and satisfying.",
  },
  {
    name: "Sustainability",
    description:
      "We are committed to sustainability. Our fleet includes eco-friendly vehicles, and we support initiatives that promote the conservation of our natural environment.",
  },
  {
    name: "Community Building",
    description:
      "We believe in the power of community. We aim to bring travel enthusiasts together by organizing events, workshops, and community programs that foster a love for exploration.",
  },
  {
    name: "Innovation",
    description:
      "We stay ahead of the curve by constantly innovating our service offerings. Our goal is to provide cutting-edge rental solutions that enhance your travel experiences.",
  },
  {
    name: "Adventure",
    description:
      "We are passionate about adventure. Our mission is to inspire and equip you to explore new destinations, whether you're a seasoned traveler or a beginner.",
  },
];

const team = [
  {
    name: "Jane Doe",
    role: "Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "John Smith",
    role: "Co-Founder / COO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Emily Johnson",
    role: "Head of Community Outreach",
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
];

export default function About() {
  return (
    <div className="mx-auto mb-16">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 dark:stroke-gray-700 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg
              x="50%"
              y={-1}
              className="overflow-visible fill-gray-50 dark:fill-gray-800"
            >
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 md:pt-12 lg:pt-0 lg:-mt-12">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight dark:text-white sm:text-6xl">
                    Discover the Joy of Driving with Us.
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-800 dark:text-gray-200 sm:max-w-md lg:max-w-none">
                    Explore our wide range of rental cars to suit every need and
                    budget. From compact cars for city driving to luxury
                    vehicles for special occasions, we have the perfect car for
                    you. Enjoy seamless booking, exceptional customer service,
                    and the freedom to travel wherever you want. Join our
                    community of satisfied customers and experience the
                    convenience and reliability of our car rental services.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 dark:bg-gray-800 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-900/20" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 dark:bg-gray-800 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-900/20" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1559136555-9303baea8edc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 dark:bg-gray-800 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-900/20" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1590787961362-dbf231d5d09a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 dark:bg-gray-800 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-900/20" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1572000953482-e0ed005a5b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 dark:bg-gray-800 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-900/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission section */}
        <div className="">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:pt-24 lg:pb-32">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-800 dark:text-gray-200">
                We are committed to providing the best rental cars and services
                to make your travel experiences safe, enjoyable, and
                unforgettable. Our mission is to inspire and equip you to
                explore new destinations with confidence and ease.
              </p>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:pt-32 lg:pb-40">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight  dark:text-white sm:text-4xl">
                Our Values
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-800 dark:text-gray-200">
                We are guided by the following values in everything we do:
              </p>
            </div>
            <div className="mt-16 mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name}>
                  <h3 className="text-lg font-semibold leading-8  dark:text-white">
                    {value.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-800 dark:text-gray-200">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight  dark:text-white sm:text-4xl">
                Our Impact
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-800 dark:text-gray-200">
                We take pride in the positive impact we've made in the outdoor
                community:
              </p>
            </div>
            <div className="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-y-16 gap-x-8 text-center sm:grid-cols-3 sm:gap-y-0 lg:max-w-none">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-y-4">
                  <p className="order-first text-3xl font-semibold tracking-tight  dark:text-white sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="text-base leading-7 text-gray-800 dark:text-gray-200">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight  dark:text-white sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-800 dark:text-gray-200">
                Our team of experienced professionals is passionate about the
                outdoors and committed to helping you make the most of your
                outdoor adventures.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    className="mx-auto h-24 w-24 rounded-full object-cover"
                    src={member.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight  dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-800 dark:text-gray-200">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <ContactSection />
    </div>
  );
}
