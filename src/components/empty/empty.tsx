import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import EmptyCategoryIcon from "@/assets/images/category_empty.webp";
import { Title } from "@/styles/global";
import { Button } from "@mantine/core";
import { Wrapper } from "./style";
import { useTranslation } from "next-i18next";

const CategoryEmpty = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Wrapper className="category-empty-provider">
      {/* <Image src={EmptyCategoryIcon??''} alt="product" width={128} height={128} /> */}
      <Title className="category-title">
        {t("no matching products found")}
      </Title>
      {/* <Link href="/" className="category-link">
        {t("try changing or canceling the filters")}
      </Link>
      <Button onClick={() => router.push("/")} className="btn-category">
        {t("cancel filters")}
      </Button> */}
    </Wrapper>
  );
};

export default CategoryEmpty;
