import React, { useState } from 'react';
import { ListViewHeader, View } from './style';
import { Column } from './column';
import { Row } from './row';
import { Select } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import { IconList } from '@/assets/icons/list';
import { IconCategory } from '@/assets/icons/category';
import { IProduct } from '@/types/product';
import { filter } from '@/constants/filter';
import { IconChevronDown } from '@tabler/icons-react';

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

  return (
    <View>
      {productList.length !== 0 && (
        <ListViewHeader>
          <label>Saralash:</label>
          <Select
            placeholder="Saralash"
            data={filter}
            styles={{
              rightSection: { pointerEvents: 'none' },
            }}
            rightSection={<IconChevronDown size="1rem" />}
            rightSectionWidth={30}
            value={filters}
            onChange={(e) => setFilters(e)}
          />
          <ActionIcon
            onClick={() => setHasColumn(false)}
            className={!hasColumn ? 'active' : ''}
          >
            <IconList />
          </ActionIcon>
          <ActionIcon
            onClick={() => setHasColumn(true)}
            className={hasColumn ? 'active' : ''}
          >
            <IconCategory />
          </ActionIcon>
        </ListViewHeader>
      )}

      {hasColumn ? (
        <Column productList={productList} isLoading={isLoading} />
      ) : (
        <Row productList={productList} isLoading={isLoading} />
      )}
    </View>
  );
};
