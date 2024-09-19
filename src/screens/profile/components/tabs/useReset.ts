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
  const [image, setImage] = useState(
    "https://biolearns.medicine.iu.edu/imgs/user-icon.svg"
  );
  const regionID = useWatch<any>({
    control: form.control,
    name: "region",
  });

  const { data: regionsList = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_REGION_LIST],
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
    queryKey: [REACT_QUERY_KEYS.GET_DISTRICT_LIST, regionID],
    queryFn: () => getDistricts(regionID),
    enabled: regionID !== undefined ? true : false,

    select: (res) =>
      res?.map((v: any) => {
        console.log(v, "v");
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
        street: res?.address?.street,
        home: res?.address?.home,
        region: res?.address?.region?.id,
        district: res?.address?.district?.id,
      });
      if (res?.photo !== null) setImage(`https://dev.freepik.uz${res?.photo}`);
    },
    onError: (err: any) => {
      if (err?.response?.status == 401) {
        router.push("/");
      }
    },
  });

  return {
    isLoading,
    regionsList,
    districtList,
    image,
    setImage,
  };
};
