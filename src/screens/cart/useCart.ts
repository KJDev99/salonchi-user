import { addressDetail } from "@/shared/modules/create-address";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { formSchema } from "./components/address/form.schema";
import { useEffect, useState } from "react";
import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import useStore from "@/store";
import { useDisclosure } from "@mantine/hooks";

import { ENDPOINTS } from "@/shared/endpoints";
import { request } from "@/shared/api/requests";

export const useCart = (): any => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const cart = useStore((state: any) => state.cart);
  const comment = useStore((state) => state.comment);
  const setComment = useStore((state) => state.setComment);
  const [initialCart, setInitialCart] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    const getFromStorage = async () => {
      if (typeof window !== "undefined") {
        const user = JSON.parse(
          window.localStorage.getItem("userData") as string
        );
        await setUser(user);
      }
    };
    window.addEventListener("storage", getFromStorage);
    getFromStorage();
  }, []);

  const { data: addressDetails = null } = useQuery<any>({
    queryKey: [REACT_QUERY_KEYS.GET_ADDRESS_DETAIL],
    queryFn: addressDetail,
    select: (res) => res?.data,
    onSuccess: (res: any) => res,
    onError: () => {
      setIsLoading(false);
    },
    enabled: user != null ? true : false,
  });

  const { mutate } = useMutation(
    (data) => request.post(ENDPOINTS.PRODUCT_CHECK_ID, data),
    {
      onSuccess: (res) => {
        setInitialCart(cart.filter((c: any) => res?.data?.ids.includes(c.id)));
      },
    }
  );

  useEffect(() => {
    if (cart?.length > 0) {
      const data: any = {
        ids: cart.map((car: any) => car.id),
      };
      mutate(data);
    } else {
      setInitialCart([]);
    }
  }, [cart]);

  useEffect(() => {}, [comment]);

  return {
    user,
    form,
    open,
    close,
    opened,
    comment,
    isLoading,
    setComment,
    initialCart,
    addressDetails,
  };
};
