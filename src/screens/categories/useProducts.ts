import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

export const useProducts = () => {
  const router = useRouter();
  const [activePage, setPage] = useState(0);
  const [filters, setFilters] = useState("");
  const [slider, setSlider] = useState([0, 1000000]);

  const {
    data: productList = {
      data: [],
      count: 0,
    },
    isLoading,
  } = useQuery(
    [
      REACT_QUERY_KEYS.READ_PRODUCT_LIST + "category",
      router.query.search,
      activePage,
      filters,
      slider,
      router.query.slug,
    ],
    () =>
      request(
        `/product/list/${router.query.slug}?limit=15&offset=${
          (activePage - 1) * 15
        }`
      ),
    {
      select: (res: any) => {
        return {
          data: res?.data?.results,
          count: res?.data?.count,
        };
      },
    }
  );

  return {
    productList,
    isLoading,
    activePage,
    setPage,
    setFilters,
    filters,
    setSlider,
    slider,
  };
};
