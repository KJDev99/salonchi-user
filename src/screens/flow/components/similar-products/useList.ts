import { request } from "@/shared/api/requests";
import { useInfiniteQuery } from "@tanstack/react-query";
import queryString from "query-string";

export const useList = ({ item }: any) => {
  const fetchData = async (pageParam = 0) => {
    const { data } = await request("/product/list/" + item?.category);
    return data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery(
      ["similar-products"],
      ({ pageParam }) => fetchData(pageParam),
      {
        getNextPageParam: (lastPage, pages) => {
          if (lastPage.next) {
            const parsed = queryString.parseUrl(lastPage.next);
            return parsed.query.offset;
          }

          return null;
        },
      }
    );

  return {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};
