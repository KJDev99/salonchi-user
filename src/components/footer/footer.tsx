import { IconInstagram } from "@/assets/icons/instagram2";
import { IconLogo } from "@/assets/icons/logo";
import { IconTelegram } from "@/assets/icons/telegram2";
import { Divider, Grid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { BottomTabs } from "./bottom.tabs";
import { ContainerFooter, Ul, Wrapper } from "./style";

export const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { width } = useViewportSize();

  return (
    <>
      <Wrapper>
        <ContainerFooter>
          <Grid gutter="lg" style={{ marginBottom: "55px" }}>
            <Grid.Col lg={3} span={12} md={6} sm={6}>
              <IconLogo width={145} height={60} />
              <p>2024 {t("footer.copyright")}</p>{" "}
              {/* <div className="social-links">
                <Link href="/">
                  <IconTelegram />
                </Link>
                <Link href="/">
                  <IconFacebook />
                </Link>
                <Link href="/">
                  <IconInstagram />
                </Link>
              </div> */}
            </Grid.Col>
            <Grid.Col span={12} lg={3} md={6} sm={6}>
              <h4>{t("footer.info")}</h4>
              <Ul className="footer-info">
                {/* <li>
                  <Link href="/">Qo‘llab quvvatlash raqami</Link>
                </li>
                <li>
                  <Link href="tel:+998935372000">+998 93 537 20 00</Link>
                </li> */}
                <li>
                  <Link
                    href="/"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {t("footer.address")}
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <IconInbox /> info@salonchi.support.uz
                  </Link>
                </li> */}
              </Ul>
            </Grid.Col>
            <Grid.Col span={12} lg={3} md={6} sm={6}>
              {/* <h4>Takliflar</h4> */}
              <h4>{router.locale == "ru" ? "Предложения" : "Takliflar"}</h4>
              <Ul className="footer-info">
                <li>
                  <Link href="/">
                    {router.locale == "ru" ? "О нас" : "Biz haqimizda"}
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    {router.locale == "ru" ? "Новости" : "Yangiliklar"}
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    {router.locale == "ru" ? "Сотрудничество" : "Hamkorlik"}
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    {router.locale == "ru" ? "Помощь" : "Yordam"}
                  </Link>
                </li>
              </Ul>
            </Grid.Col>
            <Grid.Col span={12} lg={3} md={6} sm={6}>
              <h4>{t("footer.contact")}</h4>
              <Ul className="footer-info">
                <li>
                  <Link className="phoneNumber" href="tel:+998781139596">
                    +998 78 113 95 96
                  </Link>
                </li>
                <li>(09:00-17:00 {t("footer.days")})</li>
                <li style={{ marginTop: "32px" }}>{t("footer.social")}</li>
                <li>
                  <Link href="https://t.me/salonchi_uz1">
                    <IconTelegram />
                  </Link>
                  <Link href="https://www.instagram.com/salonchi_uz/profilecard/?igsh=MXZ4dGJuajhiYWd5NA==">
                    <IconInstagram />
                  </Link>
                </li>
              </Ul>
            </Grid.Col>
          </Grid>
        </ContainerFooter>
        <div
          style={{
            maxWidth: "100%",
            fontSize: "12px",
            fontWeight: "400",
            padding: "10px 0",
            borderTop: "0.5px solid #91979F",
            textAlign: "center",
          }}
        >
          Copyright 2024. Topuy.uz made by{" "}
          <a
            style={{ color: "#0190e0", fontWeight: "500", fontSize: "14px" }}
            target="blank"
            href="https://upgrow.uz/"
          >
            Upgrow agency
          </a>
          . All rights reserved.
        </div>
        <Divider />
      </Wrapper>
      {router.pathname !== "/product/[slug]" && <BottomTabs />}
    </>
  );
};
