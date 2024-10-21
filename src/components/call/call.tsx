import React from "react";
import { CallWrapper } from "./style";
import { ActionIcon } from "@mantine/core";
import { IconPhone } from "@/assets/icons/phone";
import { Container } from "@/styles/global";

export const Call = () => {
  return (
    <Container>
      <CallWrapper>
        <ActionIcon className="phone-btn">
          <a href="tel:+998781139596">
            <IconPhone />
          </a>
        </ActionIcon>
      </CallWrapper>
    </Container>
  );
};
