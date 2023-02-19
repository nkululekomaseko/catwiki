import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchBreeds = async () => {
  const breedInfo = await axios.get("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY,
    },
  });

  return breedInfo.data;
};

export const useBreedList = () => {
  return useQuery({
    queryKey: ["breeds"],
    queryFn: () => fetchBreeds(),
    refetchOnMount: false,
  });
};
