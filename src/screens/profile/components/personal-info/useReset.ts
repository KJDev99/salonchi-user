import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { getDistricts } from "@/shared/modules/district";
import { userProfile } from "@/shared/modules/profile";
import { getRegions } from "@/shared/modules/region";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

export const useReset = () => {
  const form = useFormContext();
  const router = useRouter();
  const [image, setImage] = useState(null);
  const regions = useWatch<any>({
    control: form.control,
    name: "region",
  });

  const { data: regionsList = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_REGION_LIST + "addsdasdsadsa"],
    queryFn: getRegions,
    select: (res) => {
      return res?.data?.map((v: any) => {
        return {
          value: v?.id,
          label: v?.name_uz,
        };
      });
    },
  });

  const { data: districtList = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_DISTRICT_LIST, regions],
    queryFn: async () => {
      const a = await getDistricts(regions);
      return a;
    },
    enabled: regions !== undefined ? true : false,
    select: (res) =>
      res?.map((v: any) => {
        // console.log("v", v);
        return {
          value: v?.id,
          label: v?.name_uz,
        };
      }),
  });

  const { isLoading } = useQuery({
    queryKey: ["get-users-profile"],
    queryFn: userProfile,
    select: (res) => res?.data,
    onSuccess: (res) => {
      form.reset({
        ...res,
        region: res?.address?.region?.id,
        district: res?.address?.district?.id,
        street: res?.address?.street,
        home: res?.address?.home,
        phone: res?.phone,
      });
      // console.log("res", res);
      if (res?.photo !== null) setImage(res?.photo);
    },
    onError: (err: any) => {
      if (err?.response?.status == 401) {
        router.push("/");
      }
    },
  });
  // console.log("regionstList", districtList);
  return {
    form,
    image,
    setImage,
    isLoading,
    regionsList,
    districtList,
  };
};
