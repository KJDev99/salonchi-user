import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavItem from "./nav-item";
import {
  NavProvider,
  Header,
  NavHeaderWrapper,
  Left,
  Right,
  MobileWrapper,
  MobileHeader,
  MobileFooter,
} from "./style";
import LogoIcon1 from "@/assets/images/logo.svg";
import { Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { MobileNav } from "./mobile.nav";
import Image from "next/image";
import { BurgerIcon } from "@/assets/icons/burger";
import { menuList } from "@/constants/menu";
import { SearchInput } from "../input/input.search";
import { Container } from "@/styles/global";
import { LocationIcon } from "@/assets/icons/location";
import { LanguageMenu } from "../menu";
import { useTranslation } from "next-i18next";
import { IconLogo } from "@/assets/icons/logo";
import { Catalog } from "../catalog";

const Navbar = () => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const [navActive, setNavActive] = useState<any>(false);
  const [isOpen, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [scrollY, setScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true); // yangi holat
  const { t } = useTranslation("common");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setShowHeader(currentY < 40); // pastga tushganda yo‘qoladi, tepada ko‘rinadi
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavProvider className="nav-provider">
        {/* {!isOpen && (
          <NavHeader>
            <Container className="nav-container">
              <Left>
                <Button variant="outline">{t("news")}</Button>
              </Left>
              <Right>
                <span>
                  <a href="tel:+998781139596"> +998 78 113 95 96</a>
                </span>

                <LanguageMenu />
              </Right>
            </Container>
          </NavHeader>
        )} */}
        {!isOpen && (
          <NavHeaderWrapper $visible={showHeader}>
            <Container className="nav-container">
              <Left>
                <Button variant="outline">{t("news")}</Button>
              </Left>
              <Right>
                <span>
                  <a href="tel:+998781139596"> +998 78 113 95 96</a>
                </span>
                <LanguageMenu />
              </Right>
            </Container>
          </NavHeaderWrapper>
        )}

        <Header
          pathname={router.pathname}
          className={scrollY > 10 ? "fixed" : ""}
        >
          <Container>
            <nav className={`nav`}>
              <Link href={"/"} className="navbar-brand">
                <IconLogo />
              </Link>
              <div className={`nav__menu-bar`} onClick={open}>
                <BurgerIcon />
              </div>

              <SearchInput open={isOpen} setOpen={setOpen} />

              <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                {menuList.map((menu, idx) => (
                  <div
                    onClick={() => {
                      setActiveIdx(idx);
                      setNavActive(false);
                    }}
                    key={idx}
                  >
                    <NavItem
                      active={activeIdx === idx}
                      {...menu}
                      close={close}
                    />
                  </div>
                ))}
              </div>
            </nav>
          </Container>
        </Header>
        <Drawer
          opened={opened}
          onClose={close}
          withCloseButton={true}
          className="drawer"
          styles={{
            close: {
              color: "var(--nav-link-color)",
              scale: "1.2",
            },
          }}
        >
          <MobileNav close={close} />
        </Drawer>
      </NavProvider>
      <MobileWrapper>
        <Container>
          <MobileHeader>
            <Link href={"/"} className="navbar-brand">
              <IconLogo width={100} height={40} />
            </Link>
            <LanguageMenu />
          </MobileHeader>

          <MobileFooter>
            <SearchInput open={isOpen} setOpen={setOpen} />
          </MobileFooter>
        </Container>
      </MobileWrapper>
      <Catalog setOpen={setOpen} />
      {/* {!isOpen && <Catalog open={isOpen} setOpen={setOpen} />} */}
    </>
  );
};

export default Navbar;
