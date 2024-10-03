import React from "react";
import { FilterLayout } from "./components/layout";
import { ListView } from "./components/view";
import { Pagination } from "@/components/pagination";
import { useProducts } from "@/hooks/useProducts";

const FilterScreen = () => {
  const {
    productList,
    isLoading,
    activePage,
    setPage,
    setFilters,
    filters,
    setSlider,
    slider,
    setBrand,
    brand,
  } = useProducts();

  // console.log("productList11: ", productList);
  return (
    <FilterLayout
      productList={productList?.data}
      productCount={productList?.count}
      setSlider={setSlider}
      slider={slider}
      setBrand={setBrand}
      brand={brand}
    >
      <ListView
        productList={productList?.data}
        isLoading={isLoading}
        setFilters={setFilters}
        filters={filters}
      />
      <Pagination
        productCount={productList?.count}
        activePage={activePage}
        setPage={setPage}
      />
    </FilterLayout>
  );
};

export default FilterScreen;
