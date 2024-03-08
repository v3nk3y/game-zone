import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// Use React Query for fetching data
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 10 * 10 * 1000, //24 hrs,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
