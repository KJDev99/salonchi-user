import React, { Dispatch, SetStateAction, useState } from "react";
import { Flex, Payment, PaymentCard } from "./style";
import { Title } from "@/styles/global";
import { Box, Button, Group, Radio } from "@mantine/core";
import { useTranslation } from "next-i18next";
import { IconPayme } from "@/assets/icons/payme";
import { IconClick } from "@/assets/icons/click";
import { useFormContext } from "react-hook-form";

interface IPaymentMethod {
  value: string;
  payType: number;
  setPaytype: Dispatch<React.SetStateAction<number>>;
  setValue: Dispatch<SetStateAction<string>>;
}

export const PaymentMethod = ({
  value,
  setValue,
  payType,
  setPaytype,
}: IPaymentMethod) => {
  const form = useFormContext();
  const { t } = useTranslation("common");

  return (
    <Payment>
      <Title>{t("select payment type")} *</Title>
      <Flex
        style={{ justifyContent: "space-between" }}
        className="payment-types"
      >
        <Button
          variant="outline"
          onClick={() => setPaytype(0)}
          className={payType === 0 ? "active" : ""}
        >
          Naqd pul orqali
        </Button>
        <Button
          variant="outline"
          onClick={() => setPaytype(1)}
          className={payType === 1 ? "active" : ""}
        >
          Karta orqali
        </Button>
      </Flex>
      {payType === 1 && (
        <>
          <Flex>
            <Radio.Group
              name="favoriteFramework"
              label=""
              description=""
              value={value}
              onChange={setValue}
            >
              <Group mt="xs">
                <PaymentCard
                  onClick={() => setValue("PAYME")}
                  className={value === "PAYME" ? "active" : ""}
                >
                  <Radio value="PAYME" label color="red" />
                  <Box className="payment-box">
                    <IconPayme />
                  </Box>
                </PaymentCard>
                {/* <PaymentCard
                  onClick={() => setValue("CLICK")}
                  className={value === "CLICK" ? "active" : ""}
                >
                  <Radio value="CARD" label color="red" />
                  <Box className="payment-box">
                    <IconClick />
                  </Box>
                </PaymentCard> */}
              </Group>
            </Radio.Group>
          </Flex>
        </>
      )}
    </Payment>
  );
};
