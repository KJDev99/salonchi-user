import React from "react";
import { ContainerFooter, FooterBottom, Ul, Wrapper } from "./style";
import { Divider, Grid, Image } from "@mantine/core";
import { Container } from "@/styles/global";
import { BottomTabs } from "./bottom.tabs";
import { useRouter } from "next/router";
import Link from "next/link";
import { IconClick } from "@/assets/icons/click";
import { IconPayme } from "@/assets/icons/payme";
import { useTranslation } from "next-i18next";
import { IconLogo } from "@/assets/icons/logo";
import { IconLocation } from "@/assets/icons/location.new";
import { IconInbox } from "@/assets/icons/inbox";
import { IconTelegram } from "@/assets/icons/telegram2";
import { IconFacebook } from "@/assets/icons/facebook2";
import { IconInstagram } from "@/assets/icons/instagram2";
import { useViewportSize } from "@mantine/hooks";

export const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { width } = useViewportSize();

  return (
    <>
      <Wrapper>
        <ContainerFooter>
          <Grid style={{ marginBottom: "55px" }}>
            <Grid.Col lg={3} span={12} md={6} sm={6}>
              <IconLogo width={145} height={101} />
              <div className="social-links">
                <Link href="/">
                  <IconTelegram />
                </Link>
                <Link href="/">
                  <IconFacebook />
                </Link>
                <Link href="/">
                  <IconInstagram />
                </Link>
              </div>
            </Grid.Col>
            <Grid.Col span={12} lg={3} md={6} sm={6}>
              <h4>{t("footer.info")}</h4>
              <Ul className="footer-info">
                <li>
                  <Link href="/">Qo‘llab quvvatlash raqami</Link>
                </li>
                <li>
                  <Link href="tel:+998935372000">+998 93 537 20 00</Link>
                </li>
                <li>
                  <Link
                    href="/"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <IconLocation /> Toshkent shahar, Chilonzor tuman
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <IconInbox /> info@xuping.support.uz
                  </Link>
                </li>
              </Ul>
            </Grid.Col>
            <Grid.Col span={12} lg={3} md={6} sm={6}>
              <h4>Takliflar</h4>
              <Ul className="footer-info">
                <li>
                  <Link href="/">Biz haqimizda</Link>
                </li>
                <li>
                  <Link href="/">Hamkor sifatida ishlash</Link>
                </li>
                <li>
                  <Link href="/">
                    Tovarlarni almashtirish va to‘lovni qaytarish
                  </Link>
                </li>
                <li>
                  <Link href="/">Yordam</Link>
                </li>
                <li>
                  <Link href="/">Servis markazlari</Link>
                </li>
              </Ul>
            </Grid.Col>
            <Grid.Col
              span={12}
              lg={3}
              md={6}
              sm={6}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div className="payment-systems">
                <div className="payment-header">
                  <div className="payment-card payme">
                    <Link href="https://payme.uz/">
                      <IconPayme />
                    </Link>
                  </div>
                  {/* <div className="payment-card click">
                    <Link href="https://click.uz">
                      <IconClick />
                    </Link>
                  </div> */}
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </ContainerFooter>
        <Divider />
        <Container>
          <FooterBottom>
            <div className="copyright">
              <p>(c) 2024-2024. OOO “Xuping jewelry”</p>
            </div>
            <div className="public-offer">
              <p>{t("footer.privacy_policy")}</p>
            </div>
          </FooterBottom>
        </Container>
      </Wrapper>
      {router.pathname !== "/product/[slug]" && <BottomTabs />}
    </>
  );
};
