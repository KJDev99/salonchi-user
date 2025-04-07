import { useMutation, useQuery } from "@tanstack/react-query";
import { ICheckoutProps } from ".";
import { IProduct } from "@/types/product";
import { createOrder, paymentStatus } from "@/shared/modules/order";
import { addressDetail } from "@/shared/modules/create-address";
import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import toast from "react-hot-toast";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";

export const useCheckout = ({
  initialCart,
  comment,
  open,
  notifOpen,
  value,
  payType,
  selectedOption,
}: ICheckoutProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const user = JSON.parse(localStorage.getItem("userData") as string);
  const [pyStatus, setPyStatus] = useState(false);
  const { data: addressDetails = null } = useQuery<any>({
    queryKey: [REACT_QUERY_KEYS.GET_ADDRESS_DETAIL],
    queryFn: addressDetail,
    select: (res) => res?.data,
    onSuccess: (res: any) => res,
    enabled: !!user,
  });
  const { mutate, isLoading } = useMutation((data) => createOrder(data), {
    onSuccess: (res) => {
      localStorage.removeItem("variant");
      if (res?.data?.url) {
        // router.push(res?.data?.url);
        window.open(res?.data?.url);
        setPyStatus(res?.data?.id);
        sessionStorage.removeItem("flow");
      } else {
        notifOpen();
      }
    },
    onError: () => {
      localStorage.removeItem("variant");
    },
  });

  const { data } = useQuery<any>({
    queryKey: [REACT_QUERY_KEYS.PAYMENT_STATUS],
    queryFn: () => paymentStatus(pyStatus),
    select: (res) => res?.data,
    onSuccess: (res: any) => {
      if (res.state === 2) {
        toast.success(t("order success"));
        setPyStatus(false);
        notifOpen();
      }
    },
    onError: () => {},
    refetchInterval: 3000,
    enabled: Boolean(pyStatus),
  });

  const onCheckout = (e: any) => {
    e.preventDefault();
    if (addressDetails?.code === 404) {
      toast.error(t("no address"));
    } else {
      const payload: any = {
        address: addressDetails?.manual_address,
        amount: initialCart?.reduce(
          (current, item: IProduct) =>
            current + item.productQuantity * item.price,
          0
        ),
        payment_type: selectedOption,
        comment: comment,
        flow: sessionStorage.getItem("flow")
          ? sessionStorage.getItem("flow")
          : undefined,
        // "redirect_url": null  ,
        order_items: initialCart.map((v: IProduct) => {
          console.log(v);
          const a: any = {
            count: v.productQuantity,
            price: v.price,
            color: v?.color?.id,
            product: v?.id,
            attributes: v?.attributes || [],
            product_variant: localStorage.getItem("variant"),
          };
          if (v?.box) {
            a["box"] = v?.box;
          }
          return a;
        }),
      };
      if (user?.access) {
        mutate(payload);
      } else {
        open();
      }
    }
  };

  return {
    onCheckout,
    isLoading,
  };
};
