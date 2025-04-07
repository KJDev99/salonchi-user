import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Grid } from "@mantine/core";
import { Paper, Title } from "./style";
import { CatalogLayout } from "./layout";
import { Container } from "@/styles/global";
import { useCategory } from "./useCategory";
import { ArrowRightIcon } from "@/assets/icons/right.arrow";
import { useRouter } from "next/router";
import Image from "next/image";

interface ICatalogDrawer {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CatalogDrawer = ({ open, setOpen }: ICatalogDrawer) => {
  const [scrollY, setScrollY] = useState(0);
  const { category, subCategory, handleSubCategory, isLoading } = useCategory();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      document.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    }
  }, []);

  return (
    <Paper className={`${open ? "active" : ""}`} scrollY={scrollY}>
      <Container>
        <CatalogLayout
          category={category}
          handleSubCategory={handleSubCategory}
          setOpen={setOpen}
        >
          {subCategory?.length > 0 && (
            <Title>
              {router.locale === "uz"
                ? subCategory?.name_uz
                : subCategory?.name_ru}{" "}
              {subCategory?.category_name && <ArrowRightIcon />}
            </Title>
          )}
          <Grid gutter={8}>
            <Grid.Col span={12} lg={12}>
              <ul className="sub-list">
                {subCategory?.map((v: any) => {
                  return (
                    <li
                      key={v.id}
                      onClick={() => {
                        router.push(`/categories/${v.id}`);
                        setOpen(false);
                      }}
                    >
                      {v?.photo == null ? null : (
                        <Image
                          src="/category_empty.webp"
                          // src={v?.photo}
                          alt={v.name_uz}
                          priority
                          width={18}
                          height={18}
                        />
                      )}
                      {router.locale === "uz" ? v?.name_uz : v?.name_ru}
                    </li>
                  );
                })}
              </ul>
            </Grid.Col>
          </Grid>
        </CatalogLayout>
      </Container>
    </Paper>
  );
};
