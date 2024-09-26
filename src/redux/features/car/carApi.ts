import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (args: TQueryParam[]) => {
        const params = new URLSearchParams();

        if (args.length) {
          args.forEach((arg) => {
            params.append(arg.name, arg.value as string);
          });
        }
        return {
          url: "/cars",
          method: "GET",
          params,
        };
      },
      providesTags: ["Car"],
    }),
  }),
});

export const { useGetAllCarsQuery } = carApi;
