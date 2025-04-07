import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { getCategory } from "@/shared/modules/category"; // Import subcategory function
import { Container, Title, Wrapper } from "@/styles/global";
import { Grid } from "@mantine/core";
import { useQuery, useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Card, Header, Text } from "./style";
import Image from "next/image";
import { useRouter } from "next/router";
import { UILoader } from "./loader";
import { useTranslation } from "next-i18next";
import axios from "axios";
import { request } from "@/shared/api/requests";

export const getSubcategories = async (id: number) => {
  /* const response = await axios.get(
    `https://api.salonchi.uz/api/v1/category/sub/list/${id}`
  ); */
  const response = await request.get(`category/sub/list/${id}`);
  return response.data;
};
const CatalogScreen = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [subcategories, setSubcategories] = useState<any[]>([]);

  const { data: catalog = [], isLoading: isCatalogLoading } = useQuery({
    queryKey: [REACT_QUERY_KEYS.READ_CATEGORY_LIST],
    queryFn: getCategory,
    select: (res) => res.data,
  });

  const { mutate: fetchSubcategories, isLoading: isSubcategoriesLoading } =
    useMutation({
      mutationFn: (id: number) => getSubcategories(id),
      onSuccess: (data) => {
        setSubcategories(data || []);
        console.log(data);
      },
    });

  const handleCategoryClick = (categoryId: number) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      setSubcategories([]);
    } else {
      setSelectedCategory(categoryId);
      fetchSubcategories(categoryId); // Directly passing the categoryId to the mutation
    }
  };

  return (
    <Wrapper className="catalog-wrap">
      <Container>
        <Title className="catalog-title">{t("menu.catalogue")}</Title>

        {isCatalogLoading ? (
          <UILoader />
        ) : (
          <Grid style={{ marginTop: "17px" }} gutter={16}>
            {catalog?.map((category: any) => {
              return (
                <React.Fragment key={category.id}>
                  <Grid.Col span={12} md={2} xs={4}>
                    <Card onClick={() => handleCategoryClick(category.id)}>
                      <Header>
                        <Image
                          src={category?.photo}
                          alt={category.name_uz}
                          priority
                          layout="fill"
                          sizes="(min-width: 60em) 24vw,
                            (min-width: 28em) 45vw,
                            100vw"
                        />
                      </Header>
                      <Text>{category?.name_uz}</Text>
                    </Card>
                  </Grid.Col>

                  {selectedCategory === category.id && (
                    <Grid.Col span={12}>
                      {isSubcategoriesLoading ? (
                        <UILoader />
                      ) : (
                        <Grid gutter={16}>
                          <Grid.Col span={12}>
                            <Text
                              onClick={() =>
                                router.push(`/categories/${category.id}`)
                              }
                            >
                              Barcha Mahsulotlar
                            </Text>
                          </Grid.Col>

                          {subcategories.map((sub: any) => (
                            <Grid.Col span={12} md={2} xs={4} key={sub.id}>
                              <Card
                                onClick={() =>
                                  router.push(`/categories/${sub.id}`)
                                }
                              >
                                <Text>{sub.name_uz}</Text>
                              </Card>
                            </Grid.Col>
                          ))}
                        </Grid>
                      )}
                    </Grid.Col>
                  )}
                </React.Fragment>
              );
            })}
          </Grid>
        )}
      </Container>
    </Wrapper>
  );
};

export default CatalogScreen;
