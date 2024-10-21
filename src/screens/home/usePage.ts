import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { cheapProducts } from "@/shared/modules/cheap";
import { newProducts } from "@/shared/modules/products";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import queryString from "query-string";

export const usePage = () => {
  const fetchData = async (pageParam = 0) => {
    const { data } = await request(
      ENDPOINTS.READ_PRODUCT_LIST + `?offset=${pageParam}&limit=20`
    );
    return data;
  };

  const fetchCategoryListProductsData = async (pageParam = 0) => {
    const { data } = await request(
      ENDPOINTS.CATEGORY_LIST_WITH_PRODUCTS + `?offset=${pageParam}&limit=20`
    );
    return data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery(
      [REACT_QUERY_KEYS.READ_PRODUCT_LIST],
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
  const { data: categoryListProducts = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.CATEGORY_LIST_WITH_PRODUCTS],
    queryFn: () => request(ENDPOINTS.CATEGORY_LIST_WITH_PRODUCTS),
    select: (res) => {
      return res?.data?.results;
    },
  });

  const { data: newProductList = [] } = useQuery({
    queryKey: ["product-list-new"],
    queryFn: newProducts,
    select: (res) => {
      return res?.data?.results;
    },
  });

  const { data: cheapProductList = [] } = useQuery({
    queryKey: ["product-list-cheap"],
    queryFn: cheapProducts,
    select: (res) => {
      return res?.data?.results;
    },
  });

  return {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    newProductList,
    cheapProductList,
    isFetchingNextPage,
    categoryListProducts,
  };
};
