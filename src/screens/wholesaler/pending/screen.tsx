import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { Wrapper } from "@/styles/global";
import pendingImg from "@/assets/images/pending.svg";
import Image from "next/image";
import { PendingContend } from "./style";
import { Button } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { paymentStatus } from "@/shared/modules/order";
import { truncate } from "fs/promises";
import toast from "react-hot-toast";
import { request } from "@/shared/api/requests";

const PendingScreen = () => {
  const router = useRouter();

  const { data } = useQuery<any>({
    queryKey: ["PEnding/status"],
    queryFn: () => request.get("user/check/wholesaler/status"),
    select: (res) => res?.data,
    onSuccess: (res: any) => {
      if (res?.status === "ACCEPTED") {
        router.push("/");
      }
    },
    onError: () => {},
    refetchInterval: 3000,
    enabled: true,
  });

  return (
    <Wrapper>
      <PendingContend>
        <Image src={pendingImg} alt="wed" />
        <p>
          Sizning optom mijoz sifatida ro‘yxatdan o‘tish so`rovingiz ko`rib
          chiqilyapti
        </p>
        <Button
          color="red"
          onClick={() => {
            router.push("/");
            localStorage.clear();
          }}
        >
          Bosh sahifaga qaytish
        </Button>
      </PendingContend>
    </Wrapper>
  );
};

export default PendingScreen;
