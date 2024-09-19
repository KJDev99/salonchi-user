import { Button, Grid, Tabs } from "@mantine/core";
import React, { useState } from "react";
import { ButtonGroup, TabsWrapper } from "./style";
import { WishlistIcon } from "@/assets/icons/wishlist";
import { ProfileIcon } from "@/assets/icons/profile";
import { BoldHeartIcon } from "@/assets/icons/bold.heart";
import { PersonalInfo } from "../personal-info";
import { Favourites } from "../favourites";
import { MyOrders } from "../orders";
import { useRouter } from "next/router";
import { IconLogout } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@/components/modal";
import { useTranslation } from "next-i18next";
import useToken from "@/store/token";

export const TabsLayout = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState<string | null>("personal_info");
  const [opened, { open, close }] = useDisclosure(false);
  const setToken = useToken((state: any) => state.setToken);

  const handleLogout = () => {
    window.localStorage.removeItem("userData");
    setToken(null);
    router.push("/");
    close();
  };

  return (
    <TabsWrapper>
      <Tabs
        defaultValue="purchases"
        orientation="vertical"
        variant="pills"
        value={activeTab}
        onTabChange={setActiveTab}
        w={"100%"}
      >
        <Grid w={"100%"}>
          <Grid.Col lg={3} span={12}>
            <Tabs.List className="tab">
              <Tabs.Tab
                value="personal_info"
                className={
                  activeTab === "personal_info"
                    ? "tab-element active last-child"
                    : "tab-element"
                }
              >
                {t("personal info")}
              </Tabs.Tab>
              <Tabs.Tab
                value="purchases"
                className={
                  activeTab === "purchases"
                    ? "tab-element active"
                    : "tab-element"
                }
              >
                {t("my purchases")}
              </Tabs.Tab>
              <Tabs.Tab
                value="favourites"
                className={
                  activeTab === "favourites"
                    ? "tab-element active"
                    : "tab-element"
                }
              >
                {t("saved")}
              </Tabs.Tab>
              <Tabs.Tab
                onClick={open}
                value="logout"
                // icon={<IconLogout />}
                className={
                  activeTab === "logout"
                    ? "tab-element active"
                    : "tab-element logout-element"
                }
              >
                {t("logout")}
              </Tabs.Tab>
            </Tabs.List>
          </Grid.Col>
          <Grid.Col span={12} lg={9}>
            <Tabs.Panel value="personal_info">
              <PersonalInfo />
            </Tabs.Panel>
            <Tabs.Panel value="purchases">
              <MyOrders />
            </Tabs.Panel>
            <Tabs.Panel value="favourites">
              <Favourites />
            </Tabs.Panel>
          </Grid.Col>
        </Grid>
      </Tabs>
      <Modal opened={opened} close={close} title="Tizimdan chiqish">
        <p style={{ textAlign: "center" }}>{t("really logout")}</p>
        <ButtonGroup>
          <Button onClick={handleLogout}>{t("yes")}</Button>
          <Button color="red" onClick={close}>
            {t("no")}
          </Button>
        </ButtonGroup>
      </Modal>
    </TabsWrapper>
  );
};
