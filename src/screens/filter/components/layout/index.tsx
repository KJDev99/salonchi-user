import { Container, Title } from '@/styles/global';
import { Wrapper } from '@/styles/global';
import { Grid } from '@mantine/core';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { Slider } from '../slider';
import { IProduct } from '@/types/product';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

interface IFilterLayout {
  children: ReactNode;
  productList: IProduct[];
  productCount: number;
  setSlider: Dispatch<SetStateAction<number[]>>;
  slider: number[];
}

export const FilterLayout = ({
  children,
  productList,
  productCount,
  setSlider,
  slider,
}: IFilterLayout) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <Wrapper>
      <Container>
        <Title className="filter-title">
          <span>{router.query?.search}</span>{' '}
          <span>
            ({productCount} {t('found product')})
          </span>
        </Title>
        <Grid gutter={64}>
          <Grid.Col span={12} lg={3}>
            <form>
              <Slider slider={slider} setSlider={setSlider} />
              {/* <FilterBrand /> */}
            </form>
          </Grid.Col>
          <Grid.Col span={12} lg={9}>
            {children}
          </Grid.Col>
        </Grid>
      </Container>
    </Wrapper>
  );
};
