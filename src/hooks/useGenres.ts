import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Getting data from the API call
// const useGenres = () => useData<Genre>("/genres");

// Getting data from the local data object
// const useGenres = () => ({ data: null, isLoading: false, error: null });

// Getting data using React Query lib
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 10000, // 24hrs
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
