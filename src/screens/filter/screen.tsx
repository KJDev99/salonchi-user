import React from 'react';
import { FilterLayout } from './components/layout';
import { ListView } from './components/view';
import { Pagination } from '@/components/pagination';
import { useProducts } from '@/hooks/useProducts';

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
  } = useProducts();

  return (
    <FilterLayout
      productList={productList?.data}
      productCount={productList?.count}
      setSlider={setSlider}
      slider={slider}
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
