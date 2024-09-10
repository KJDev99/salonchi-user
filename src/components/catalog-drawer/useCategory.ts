import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { getCategory } from "@/shared/modules/category";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useCategory = () => {
  const [subCategory, setSubCategory] = useState<any>([]);
  const { data: category } = useQuery({
    queryKey: ["get-cat-list"],
    queryFn: getCategory,
    select: (res) => {
      return res?.data;
    },
  });


  const { mutate, isLoading } = useMutation(
    (id) => request(ENDPOINTS.CATEGORY_SUB_LIST + id),
    {
      onSuccess: (res) => {
        let newArr = res?.data;
        let newObj = {};
        for (let i = 0; i < category.length; i++) {
          for (let j = 0; j < newArr.length; j++) {
            if (category[i].id == newArr[j].parent) {
              newObj = {
                data: newArr,
                category_name: category[i],
              };
            }
          }
        }
        setSubCategory(res?.data);
      },
    }
  );

  const handleSubCategory = (id: string | number | any) => {
    mutate(id);
  };

  return {
    category:category || [],
    subCategory,
    handleSubCategory,
    isLoading,
  };
};
