import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/v1`, // Your local API URL
    // Uncomment and configure this if you want to add authorization
    // prepareHeaders: (headers) => {
    //   const token = `Bearer YOUR_TOKEN_HERE`;
    //   if (token) {
    //     headers.set("Authorization", token);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["users", "trackings"], // Define tags for cache management
  endpoints: () => ({}), // Empty, to be extended in other files
});
