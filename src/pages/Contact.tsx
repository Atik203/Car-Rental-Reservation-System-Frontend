import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomTextarea from "@/components/form/CustomTextarea";
import CustomButton from "@/components/ui/custom/customUI/CustomButton";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="relative isolate bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 bg-black">
        <div className="relative px-6 pb-16 pt-16 lg:static lg:px-8 lg:py-16 bg-black">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg bg-black">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-black ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="black" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We would love to hear from you! Whether you have questions about
              purchasing products, corporate deals, or partnering with us, feel
              free to reach out.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-100"
                    href="tel:+1 (555) 234-5678"
                  >
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-100"
                    href="mailto:hello@example.com"
                  >
                    contact@rentcar.org
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="px-6 pb-16 pt-16 sm:pb-24 lg:px-8 lg:py-16 bg-black">
          <CustomForm onSubmit={onSubmit}>
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg bg-black">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 bg-black">
                <CustomInput name="first-name" label="First name" />

                <CustomInput name="last-name" label="Last name" />

                <div className="sm:col-span-2">
                  <CustomInput name="email" label="Email" type="email" />
                </div>
                <div className="sm:col-span-2">
                  <CustomInput name="phone" label="Phone" type="tel" />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <CustomTextarea name="message" rows={4} />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <CustomButton type="submit">Send message</CustomButton>
              </div>
            </div>
          </CustomForm>
        </div>
      </div>
    </div>
  );
}
