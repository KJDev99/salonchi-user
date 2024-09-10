import React, { useState } from "react";
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

export const SearchInput = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isOpen, setOpen] = useState(false);
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

  const { data: productList = [], isFetching } = useQuery({
    queryKey: ["get-product-search", search],
    queryFn: () =>
      request(ENDPOINTS.READ_PRODUCT_LIST + `?search=${search}&limit=20`),
    select: (res) => res?.data?.results,
    enabled: search?.length > 2 ? true : false,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (search !== "") {
      router.push(`/filter?search=${search}`);
    }
  };

  return (
    <Searchbar>
      <CatalogPanel onClick={() => setOpen(!isOpen)}>
        <IconCatalog1 />
        <span>{t("menu.catalogue")}</span>
      </CatalogPanel>
      <SearchWrapper onSubmit={handleSubmit}>
        <ActionIcon className="search-btn" type="submit">
          <SearchIcon />
        </ActionIcon>
        <Input
          type="search"
          placeholder={t("menu.catalogue_search")}
          value={search || ""}
          onChange={handleSearch}
        />
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
      <CatalogDrawer open={isOpen} setOpen={setOpen} />
    </Searchbar>
  );
};
