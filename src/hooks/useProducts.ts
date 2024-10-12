import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

export const useProducts = () => {
  const router = useRouter();
  const [activePage, setPage] = useState(1);
  const [filters, setFilters] = useState("");
  const [brand, setBrand] = useState([]);
  const [slider, setSlider] = useState([0, 1000000]);

  function FilterBrand(brand: any) {
    return brand.map((i: any) => `&brand=${i}`).join();
  }

  // console.log(FilterBrand());

  const {
    data: productList = {
      data: [],
      count: 0,
    },
    isLoading,
  } = useQuery(
    [
      REACT_QUERY_KEYS.READ_PRODUCT_LIST + "catigory",
      router.query.search,
      activePage,
      filters,
      slider,
      router.query.slug,
      brand,
    ],
    () =>
      request(`/product/list`, {
        params: {
          search: router.query.search,
          offset: activePage,
          limit: 12,
          filter_type: filters !== "" ? filters : "",
          brand: brand.length > 0 ? brand : undefined,
          min_price: slider[0],
          max_price: slider[1],
        },
      }),
    {
      select: (res: any) => {
        return {
          data: res?.data?.results,
          count: res?.data?.count,
        };
      },
    }
  );

  // console.log(brand);

  return {
    productList,
    isLoading,
    activePage,
    setPage,
    setFilters,
    filters,
    setSlider,
    slider,
    setBrand,
    brand,
  };
};
