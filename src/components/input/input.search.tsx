import React, { useEffect, useState } from "react";
import {
  CatalogPanel,
  CustomPopup,
  Input,
  List,
  ListItem,
  LoaderWrap,
  SearchWrapper,
  Searchbar,
} from "./style";
import { SearchIcon } from "@/assets/icons/search";
import { CatalogDrawer } from "../catalog-drawer";
import { ActionIcon, Image } from "@mantine/core";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { BeatLoader } from "react-spinners";
import OutsideClickHandler from "react-outside-click-handler";
import { IconArrowRight } from "@/assets/icons/arrow.right";
import useStore from "@/store";
import { useTranslation } from "next-i18next";
import { useSearchParams } from "next/navigation";
import { IconCatalog1 } from "@/assets/icons/catalog1";
import Link from "next/link";
import { IconClose } from "@/assets/icons/close";

export const SearchInput = ({
  open,
  setOpen,
}: {
  open?: any;
  setOpen?: (open: any) => void;
}) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  // const [isOpen, setOpen] = useState(false);
  const setSearch = useStore((state: any) => state.setSearch);
  const [outsideClick, setOutSideClick] = useState(false);
  const searchParams: any = useSearchParams();
  const search = useStore((state: any) => state.search);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    if (e.target.value?.length > 2) setOutSideClick(true);
    router.push({
      query: { search: `${e.target.value}` },
    });
  };

  useEffect(() => {
    if (router.pathname !== "/filter") {
      setSearch("");
    } else if (router.pathname == "/filter") {
      setSearch(searchParams.get("search"));
    }
  }, [router.pathname]);

  const { data: productList = [], isFetching } = useQuery({
    queryKey: ["get-product-search", search],
    queryFn: () =>
      request(ENDPOINTS.PRODUCT_LIST + `?search=${search}&limit=20`),
    select: (res) => res?.data?.results,
    enabled: search?.length > 2 ? true : false,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (search !== "") {
      router.push(`/filter?search=${search}`);
    }
  };
  if (!setOpen) return null;
  return (
    <Searchbar>
      {/* <CatalogPanel onClick={() => setOpen(!open)}>
        {!open ? <IconCatalog1 /> : <IconClose />}

        <span>{t("menu.catalogue")}</span>
      </CatalogPanel> */}
      <CatalogPanel onClick={() => setOpen(!open)} className="catalog-panel">
        <span className="icon-wrapper">
          <span className={`icon icon-catalog ${open ? "hide" : "show"}`}>
            <IconCatalog1 />
          </span>
          <span className={`icon icon-close ${open ? "show" : "hide"}`}>
            <IconClose />
          </span>
        </span>

        <span>{t("menu.catalogue")}</span>
      </CatalogPanel>

      <SearchWrapper onSubmit={handleSubmit}>
        <div className="search-btn">
          <SearchIcon />
        </div>
        <Input
          type="search"
          placeholder={t("menu.catalogue_search")}
          value={search || ""}
          onChange={handleSearch}
        />
        <ActionIcon className="search-btn2" type="submit">
          {t("search")}
        </ActionIcon>
        {search?.length > 2 && outsideClick && (
          <OutsideClickHandler onOutsideClick={() => setOutSideClick(false)}>
            <CustomPopup>
              <List>
                {isFetching ? (
                  <LoaderWrap>
                    <BeatLoader color="var(--main-bg-color)" size={8} />
                  </LoaderWrap>
                ) : productList.length === 0 ? (
                  <p className="empty-text">{t("menu.not_found")}</p>
                ) : (
                  productList?.map((v: any) => {
                    return (
                      <ListItem
                        key={v?.id}
                        onClick={() => {
                          router.push(`/product/${v?.slug}?search=${search}`);
                          setOutSideClick(false);
                        }}
                      >
                        <Image src={v?.photo} alt="product-image" />
                        <span>{v?.name_uz}</span>
                        <IconArrowRight />
                      </ListItem>
                    );
                  })
                )}
              </List>
            </CustomPopup>
          </OutsideClickHandler>
        )}
      </SearchWrapper>
      <CatalogDrawer open={open} setOpen={setOpen} />
    </Searchbar>
  );
};
