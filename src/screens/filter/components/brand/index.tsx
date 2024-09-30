import React, { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox, Group } from "@mantine/core";
import { BrandWrap } from "./style";

// Define the type for the brand data
interface Brand {
  id: number;
  name: string;
}

export const FilterBrand: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]); // Use Brand[] to type the state

  // Fetch brand data from the API
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get<Brand[]>(
          "https://api.salonchi.uz/api/v1/admin/brand"
        );
        setBrands(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

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
          {brands.map((brand) => (
            <Checkbox
              key={brand.id}
              value={brand.name}
              label={brand.name}
              color="red"
              className="checkbox"
            />
          ))}
        </Group>
      </Checkbox.Group>
    </BrandWrap>
  );
};
