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
  const [slider, setSlider] = useState([0, 1000000]);

  const {
    data: productList = {
      data: [],
      count: 0,
    },
    isLoading,
  } = useQuery(
    [
      REACT_QUERY_KEYS.READ_PRODUCT_LIST + "new",
      router.query.search,
      activePage,
      filters,
      slider,
      router.query.slug,
    ],
    () => request(`product/list/${router.query.slug}`),
    {
      select: (res: any) => {
        return {
          data: res?.data?.results,
          count: res?.data?.count,
        };
      },
    }
  );

  // const { data: cheapProductList = [] } = useQuery({
  //   queryKey: ["product-list-cheap"],
  //   queryFn: newProducts,
  //   select: (res) => {
  //     return res?.data?.results;
  //   },
  // });

  console.log("productList", productList);

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
