import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Getting data from the API call
const useGenres = () => useData<Genre>("/genres");

// Getting data from the local data object
// const useGenres = () => ({ data: null, isLoading: false, error: null });

export default useGenres;
