import React, { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox, Group } from "@mantine/core";
import { BrandWrap } from "./style";

// Define the type for the brand data
interface Brand {
  id: number;
  name: string;
}

export const FilterBrand = ({
  brand,
  setBrand,
}: {
  brand: number[]; // Array of selected brand IDs
  setBrand: (selectedBrands: number[]) => void; // Function to update selected brand IDs
}) => {
  const [brands, setBrands] = useState<Brand[]>([]); // Use Brand[] to type the state

  // Fetch brand data from the API
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get<Brand[]>(
          "https://api.salonchi.uz/api/v1/admin/brand"
        );
        setBrands(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  // Handle changes in selected brands
  const handleBrandChange = (selectedValues: string[]) => {
    // Find the corresponding brand IDs based on selected brand names
    const selectedBrandIds = brands
      .filter((brand) => selectedValues.includes(brand.name))
      .map((brand) => brand.id);

    // Update the selected brands using setBrand
    setBrand(selectedBrandIds);
  };

  return (
    <BrandWrap>
      <Checkbox.Group
        label="Brend"
        value={brands.filter((b) => brand.includes(b.id)).map((b) => b.name)} // Maintain selected state
        onChange={handleBrandChange} // Trigger on checkbox change
      >
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
              value={brand.name} // Use brand name as value
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
