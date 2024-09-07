import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Rating } from "../customUI/Rating";
import TitleDescriptionBlock from "../customUI/TitleDescriptionBlock";

const reviews = [
  {
    content:
      "Renting a car through RentCar was quick and easy. The vehicle was in perfect condition and made my trip hassle-free.",
    name: "Alice Johnson",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    designation: "Frequent Traveler",
    rating: 5,
  },
  {
    content:
      "I needed a spacious car for a road trip, and RentCar provided exactly what I was looking for. Great service!",
    name: "David Williams",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    designation: "Road Trip Enthusiast",
    rating: 5,
  },
  {
    content:
      "The customer service at RentCar is outstanding. They helped me choose the right car and ensured a smooth rental experience.",
    name: "Emily Davis",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    designation: "Business Traveler",
    rating: 4,
  },
  {
    content:
      "Excellent range of vehicles. I was impressed by how well-maintained the cars are. Definitely will rent again.",
    name: "Michael Brown",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    designation: "Frequent Renter",
    rating: 5,
  },
  {
    content:
      "The booking process was smooth and straightforward. I was able to find a car that perfectly matched my needs for a weekend trip.",
    name: "Sophia Wilson",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    designation: "Weekend Traveler",
    rating: 4,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white px-4 py-12 sm:py-20 md:px-0">
      <TitleDescriptionBlock
        title="What Our Customers Say"
        description="Don't just take our word for it. Here's what our customers have to say about their experience with our products and services."
      />
      <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-5xl px-8 md:px-4 lg:px-0">
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="space-y-12 sm:space-y-16">
            {reviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  <Rating
                    rating={review.rating}
                    showBadge={false}
                    variant="yellow"
                  />
                </div>
                <blockquote className="mt-4 px-0 lg:px-4 text-base md:text-lg font-semibold leading-8 tracking-tight text-gray-900 sm:text-xl sm:leading-9">
                  <p>{`“${review.content}”`}</p>
                </blockquote>
                <figcaption className="mt-8 flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50"
                    src={review.image}
                    alt={review.name}
                  />
                  <div className="text-sm leading-6 text-center sm:text-left">
                    <div className="font-semibold text-gray-900">
                      {review.name}
                    </div>
                    <div className="mt-0.5 text-gray-600">
                      {review.designation}
                    </div>
                  </div>
                </figcaption>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
