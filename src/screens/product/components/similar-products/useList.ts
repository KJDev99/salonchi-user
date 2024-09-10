import { request } from "@/shared/api/requests";
import { useQuery } from "@tanstack/react-query";

export const useList = ({ item }: any) => {
  const { data: similarProducts = [] } = useQuery({
    queryKey: ["product-list-similar"],
    queryFn: () =>
      request("/product/list/" + item?.category, {
        params: {
          limit: 20,
        },
      }),
    select: (res) => {
      return res?.data?.results;
    },
  });

  return {
    data: similarProducts,
  };
};
