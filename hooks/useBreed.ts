import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchBreed = async (props: {
  breedIds: string;
  limit: number;
}) => {
  const breedInfo = await axios.get(
    "https://api.thecatapi.com/v1/images/search",
    {
      params: { breed_ids: props.breedIds, limit: props.limit },
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY,
      },
    }
  );

  return breedInfo.data;
};

export const useBreed = (props: { breedIds: string; limit: number }) => {
  return useQuery({
    queryKey: ["breed", props.breedIds],
    queryFn: () => fetchBreed(props),
  });
};
