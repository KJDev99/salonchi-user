import React, { useState } from "react";
import { ListViewHeader, View } from "./style";
import { Column } from "./column";
import { Row } from "./row";
import { Select } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { IconList } from "@/assets/icons/list";
import { IconCategory } from "@/assets/icons/category";
import { IProduct } from "@/types/product";
import { filter } from "@/constants/filter";
import { IconChevronDown } from "@tabler/icons-react";

export const ListView = ({
  productList,
  isLoading,
  setFilters,
  filters,
}: {
  productList: IProduct[];
  isLoading: boolean;
  setFilters: any;
  filters: string;
}) => {
  const [hasColumn, setHasColumn] = useState(true);
  // console.log("productList11: ", productList);

  return (
    <View>
      {productList.length !== 0 && (
        <ListViewHeader>
          <label>Saralash</label>
          <Select
            placeholder="Default"
            data={filter}
            styles={(theme) => ({
              rightSection: { pointerEvents: "none" },
              input: {
                width: "max-content",
                borderRadius: "8px",
                borderColor: "#EA580C",
                "&:focus": {
                  borderColor: "#EA580C",
                  boxShadow: "0 0 0px 2px #FDCD97", // Box shadow on focus (active state)
                },
              },
            })}
            rightSection={<IconChevronDown size="1rem" />}
            rightSectionWidth={30}
            value={filters}
            onChange={(e) => setFilters(e)}
          />
        </ListViewHeader>
      )}

      <Column productList={productList} isLoading={isLoading} />
    </View>
  );
};
