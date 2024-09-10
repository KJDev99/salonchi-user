import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { getCategory } from "@/shared/modules/category";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useCategory = () => {
  const [subCategory, setSubCategory] = useState([]);
  const { data: category = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_CATEGORY_LIST],
    queryFn: getCategory,
    select: (res) => res?.data,
  });

  const { mutate } = useMutation(
    (id) => request(ENDPOINTS.CATEGORY_SUB_LIST + id),
    {
      onSuccess: (res) => setSubCategory(res?.data),
    }
  );

  const handleSubCategory = (id: number | any) => {
    mutate(id);
  };

  return {
    category,
    subCategory,
    handleSubCategory,
  };
};
