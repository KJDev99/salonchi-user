import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavItem from "./nav-item";
import {
  NavProvider,
  Header,
  NavHeader,
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
  const { t } = useTranslation("common");

  useEffect(() => {
    if (typeof window !== undefined) {
      document.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    }
  }, []);

  return (
    <>
      <NavProvider className="nav-provider">
        <NavHeader>
          <Container className="nav-container">
            <Left>
              <Button variant="outline">Yangiliklar</Button>
              <Button variant="outline">Hamkorlik qilish</Button>
            </Left>
            <Right>
              <span>
                <a href="tel:+998930007570"> +998 93 537 20 01</a>
              </span>

              <LanguageMenu />
            </Right>
          </Container>
        </NavHeader>
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
            <div className={`nav__menu-bar`} onClick={open}>
              <BurgerIcon />
            </div>
            <Link href={"/"} className="navbar-brand">
              {/* <Image
                src={LogoIcon1}
                alt="logo"
                priority
                // width={149}
                // height={60}
              /> */}
              <IconLogo width={100} height={40} />
            </Link>
            <LanguageMenu />
          </MobileHeader>
          <MobileFooter>
            <SearchInput />
          </MobileFooter>
        </Container>
      </MobileWrapper>
      <Catalog open={isOpen} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
