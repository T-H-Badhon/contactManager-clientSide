import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addContact: builder.mutation({
      query: (contactData) => ({
        url: "contacts/add",
        method: "POST",
        body: contactData,
      }),
    }),
    getContacts: builder.query({
      query: (queries) => ({
        url: "contacts/",
        method: "GET",
        params: queries,
      }),
    }),
    updateContact: builder.mutation({
      query: (args) => {
        return {
          url: `contacts/update/${args.id}`,
          method: "PATCH",
          body: args.contactData,
        };
      },
      invalidatesTags: ["contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contacts/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useAddContactMutation,
  useGetContactsQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = userApi;
