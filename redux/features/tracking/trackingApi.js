import { api } from "../../api/api";

const trackingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    myTrackings: builder.query({
      query: (phoneNumber) => `/tracking/deriver/${phoneNumber}`,
      providesTags: ["trackings"],
    }),
  }),
});

export const { useMyTrackingsQuery } = trackingApi;
