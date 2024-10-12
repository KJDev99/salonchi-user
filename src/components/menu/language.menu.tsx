import { Button, Menu } from "@mantine/core";
import React, { useState } from "react";
import { Wrapper } from "./style";
import { ArrowDownIcon } from "@/assets/icons/arrow.down";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { IconCheck } from "@/assets/icons/check";

export const LanguageMenu = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  const handleLanguage = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <Wrapper>
      <Menu opened={opened} onChange={setOpened} withArrow>
        <Menu.Target>
          {router.locale === "uz" ? (
            <Button className="lang-btn" rightIcon={<ArrowDownIcon />}>
              {t("locales.uz")}
            </Button>
          ) : (
            <Button className="lang-btn" rightIcon={<ArrowDownIcon />}>
              {t("locales.ru")}
            </Button>
          )}
        </Menu.Target>
        <Menu.Dropdown>
          <li
            onClick={() => handleLanguage("uz")}
            className={`item ${router.locale === "uz" ? "item-active" : ""}`}
          >
            {t("locales.uz")}
            <div
              className={`item_icon ${
                router.locale === "uz" ? "item-active_icon" : ""
              }`}
            >
              <IconCheck />
            </div>
          </li>
          <li
            onClick={() => handleLanguage("ru")}
            className={router.locale === "ru" ? "item-active item" : "item"}
          >
            {t("locales.ru")}
            <div
              className={`item_icon ${
                router.locale === "ru" ? "item-active_icon" : ""
              }`}
            >
              <IconCheck />
            </div>
          </li>
        </Menu.Dropdown>
      </Menu>
    </Wrapper>
  );
};
