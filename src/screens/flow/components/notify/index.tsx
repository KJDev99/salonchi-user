/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, Modal } from "@mantine/core";
import { ModalBody, ModalFooter, ModalText, ModalTitle } from "./style";
import { IconNotify } from "@/assets/icons/notify.icon";

interface INotifyProps {
  opened: boolean;
  close: () => void;
  open: () => void;
}

export const Notify = ({ opened, close, open }: INotifyProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      open();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    close();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title=""
      centered
      styles={{
        header: {
          background: "#DCF2FF",
        },
        content: {
          background: "#DCF2FF",
          padding: 0,
        },
        body: {
          padding: 0,
          paddingBottom: "1rem",
        },
        close: {
          width: 22,
          height: 22,
          background: "transparent !important",
          outline: "none !important",
          boxShadow: "none !important",
          color: "#141311",
          "& svg": {
            width: 22,
            height: 22,
          },
        },
      }}
      radius="lg"
      size="sm"
    >
      <ModalBody>
        <ModalTitle>
          Yangiliklardan <br /> xabardor bo‘lib boring!
        </ModalTitle>
        <ModalText>
          Xuping yangiliklaridan doimiy xabardor bo‘lib turish uchun bizning
          Telegram botga obuna bo‘ling!
        </ModalText>
      </ModalBody>
      <ModalFooter>
        <IconNotify />
        <Button>Obuna bo‘lish</Button>
      </ModalFooter>
    </Modal>
  );
};
