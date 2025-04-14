import { Button, Modal } from "@mantine/core";
import React from "react";
import { ModalContent, Text, Title } from "./style";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import useStore from "@/store";
import { IconDone } from "@/assets/icons/done";
import Link from "next/link";

interface INotify {
  notifyOpened: boolean;
  notifyClose: () => void;
}

export const Notify = ({ notifyOpened, notifyClose }: INotify) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const clearStore = useStore((state: any) => state.clearStore);

  const handleGoHome = () => {
    notifyClose();
    clearStore();
    router.push("/");
  };
  return (
    <>
      {notifyOpened && (
        <Modal
          opened={notifyOpened}
          onClose={handleGoHome}
          centered
          closeOnClickOutside={false}
        >
          <ModalContent className="notify-modal">
            <div style={{ textAlign: "center" }}>
              <IconDone />
            </div>
            <h3>Buyurtmangiz muvaffiqaytli rasmiylashtirildi</h3>
            <p>Tez orada operatorlarimiz siz bilan bog’lanishadi</p>
            <div style={{ textAlign: "center", marginBottom: 12 }}>
              <Button
                color="red"
                style={{
                  fontFamily: "var(--font-readex);",
                  fontWeight: "400",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={handleGoHome}
              >
                Bosh sahifaga qaytish
              </Button>
            </div>
            {/* <Link href="/">Telegram orqali ko‘rish</Link> */}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
