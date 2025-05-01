import React, { useEffect, useState } from "react";
import {
  Card,
  ImageContainer,
  Wrapper,
  ButtonWrapper,
  ViewAllButton,
} from "./style";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/shared/modules/category";
import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { CatalogSkeleton } from "../catalog-skeleton";
import { useTranslation } from "next-i18next";
import { CatalogDrawer } from "../catalog-drawer"; // CatalogDrawer komponentini import qildik
import { Container } from "@/styles/global";
import { ArrowDownIcon } from "@/assets/icons/arrow.down";

export const Catalog = ({
  open,
  setOpen,
}: {
  open?: any;
  setOpen?: ((open: any) => void) | undefined;
}) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  // const [isOpen, setIsOpen] = useState(false);

  const { data: catalog = [], isLoading } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_CATALOG_LIST],
    queryFn: getCategory,
    select: (res) => {
      return res.data;
    },
  });

  const itemsToShow = catalog.slice(0, 6);

  useEffect(() => {
    const handleRouteChange = () => {
      if (setOpen) {
        setOpen(false);
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up the event listener
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, open, setOpen]);

  if (!setOpen) return null;

  return (
    <Wrapper>
      <Container>
        <div className="katalog_main">
          <div className="test">
            {itemsToShow.map((item: any) => (
              <Card
                key={item.id}
                onClick={() => router.push(`/categories/${item.id}`)}
                className="test1"
              >
                <ImageContainer>
                  {item?.photo == null ? null : (
                    <Image
                      // src='/category_empty.webp'
                      src={item?.photo}
                      alt={item.name_uz}
                      priority
                      width={24}
                      height={24}
                    />
                  )}
                </ImageContainer>
                <p>{router.locale == "ru" ? item?.name_ru : item?.name_uz}</p>
              </Card>
            ))}
          </div>

          <ButtonWrapper>
            <ViewAllButton className="test1" onClick={() => setOpen(true)}>
              <p>
                {router.locale == "ru"
                  ? "Посмотреть все"
                  : "Barchasini ko'rish"}
              </p>
              <ArrowDownIcon color="black" />
            </ViewAllButton>
          </ButtonWrapper>

          <CatalogDrawer open={open} setOpen={setOpen} />
        </div>
      </Container>
    </Wrapper>
  );
};
