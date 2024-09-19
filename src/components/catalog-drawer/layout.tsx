import { Grid } from "@mantine/core";
import React, {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { List, ListItem } from "./style";
import Link from "next/link";
import { ArrowRightIcon } from "@/assets/icons/right.arrow";
import { useRouter } from "next/router";
import Image from "next/image";

interface ICatalogLayout {
  children: ReactNode;
  category: any[];
  handleSubCategory: (id: string | number) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CatalogLayout = ({
  children,
  category,
  handleSubCategory,
  setOpen,
}: ICatalogLayout) => {
  const router = useRouter();
  console.log(category, "category");

  return (
    <Grid gutter={16}>
      <Grid.Col span={12} lg={3} md={4}>
        <List>
          {category.map((item: any) => (
            <ListItem
              key={item.id}
              onMouseEnter={(e) => handleSubCategory(item.id)}
              onClick={() => {
                router.push(`/categories/${item.id}`);
                setOpen(false);
              }}
            >
              <Image src={item?.photo} alt="image" width={32} height={32} />
              <span>
                {router.locale === "uz" ? item?.name_uz : item?.name_ru}
              </span>
              {/* <ArrowRightIcon /> */}
            </ListItem>
          ))}
        </List>
      </Grid.Col>
      <Grid.Col span={12} lg={9} md={8}>
        {children}
      </Grid.Col>
    </Grid>
  );
};
