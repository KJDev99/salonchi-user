import React from "react";
import { Button, Checkbox, Group } from "@mantine/core";
import { BrandWrap, SystemList, SystemListItem } from "./style";
import { ArrowDownIcon } from "@/assets/icons/arrow.down";

export const FilterBrand = () => {
  return (
    <BrandWrap>
      <Checkbox.Group label="Brend">
        <Group
          mt="xs"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Checkbox
            value="Bred1"
            label="Bred1"
            color="red"
            className="checkbox"
          />
          <Checkbox
            value="Bred2"
            label="Bred2"
            color="red"
            className="checkbox"
          />
          <Checkbox
            value="Bred3"
            label="Bred3"
            color="red"
            className="checkbox"
          />
          <Checkbox
            value="Bred4"
            label="Bred4"
            color="red"
            className="checkbox"
          />
          <Checkbox
            value="Bred5"
            label="Bred5"
            color="red"
            className="checkbox"
          />
        </Group>
      </Checkbox.Group>

      <Button color="red">Filterni qo‘llash</Button>
    </BrandWrap>
  );
};
