import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Getting data from the local data object
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

// Use React Query for fetching data
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 10000, // 24hrs
    initialData: genres,
  });

export default useGenres;
