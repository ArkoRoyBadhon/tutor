import { api } from "../../api/apiSlice";

const tutorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllTutor: builder.query({
      query: ({ ...option }) => ({
        url: `/tutor/get-all`,
        params: {
          sortBy: option?.sortBy,
          sortOrder: option?.sortOrder,
          searchTerm: option?.searchVal,
          limit: 2,
        //   gender: option?.selectedGender,
          ...(option?.pageNum && { page: option.pageNum }),
          // ...(option?.pageNum && { limit: 2 }),
          ...(option?.selectedGender && { gender: option.selectedGender }),
          ...(option?.selectedClass && { class: option.selectedClass }),
        },
      }),
      providesTags: ["tutor"],
    }),
    getSingleTutor: builder.query({
      query: (id) => ({
        url: `/tutor/get/${id}`,
      }),
      providesTags: ["tutor"],
    }),
  }),
});

export const { useGetAllTutorQuery, useGetSingleTutorQuery } = tutorApi;
