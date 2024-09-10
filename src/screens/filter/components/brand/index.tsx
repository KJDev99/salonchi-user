import React from 'react';
import { Button, Checkbox, Group } from '@mantine/core';
import { BrandWrap, SystemList, SystemListItem } from './style';
import { ArrowDownIcon } from '@/assets/icons/arrow.down';

export const FilterBrand = () => {
  return (
    <BrandWrap>
      <Checkbox.Group label="Brend">
        <Group
          mt="xs"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Checkbox
            value="apple"
            label="Apple"
            color="red"
            className="checkbox"
          />
          <Checkbox
            value="xiaomi"
            label="Xiaomi"
            color="red"
            className="checkbox"
          />
          <Checkbox
            value="samsung"
            label="Samsung"
            color="red"
            className="checkbox"
          />
          <Checkbox
            value="huawei"
            label="Huawei"
            color="red"
            className="checkbox"
          />
          <Checkbox
            value="vivo"
            label="Vivo"
            color="red"
            className="checkbox"
          />
        </Group>
      </Checkbox.Group>
      <SystemList>
        <SystemListItem>
          <span>Model</span>
          <ArrowDownIcon />
        </SystemListItem>
        <SystemListItem>
          <span> OS turi</span>
          <ArrowDownIcon />
        </SystemListItem>
        <SystemListItem>
          <span> Akkumlyator hajmi</span>
          <ArrowDownIcon />
        </SystemListItem>
      </SystemList>
      <Button color="red">Filterni qo‘llash</Button>
    </BrandWrap>
  );
};
