import { REACT_QUERY_KEYS } from '@/constants/react-query-keys';
import { getCategory } from '@/shared/modules/category';
import { Container, Title, Wrapper } from '@/styles/global';
import { Grid } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Card, Header, Text } from './style';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { UILoader } from './loader';
import { useTranslation } from 'next-i18next';

const CatalogScreen = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { data: catalog = [], isLoading } = useQuery({
    queryKey: [REACT_QUERY_KEYS.READ_CATEGORY_LIST],
    queryFn: getCategory,
    select: (res) => res.data,
  });

  console.log("catalog",catalog)

  return (
    <Wrapper className="catalog-wrap">
      <Container>
        <Title className="catalog-title">{t('menu.catalogue')} </Title>
        {isLoading ? (
          <UILoader />
        ) : (
          <Grid style={{ marginTop: '17px' }} gutter={16}>
            {catalog?.map((v: any) => {
              return (
                <Grid.Col span={6 } md={2} xs={4} key={v.id}>
                  <Card onClick={() => router.push(`/categories/${v?.id}`)}>
                    <Header>
                      <Image
                        src={v?.photo}
                        alt={v.name_uz}
                        priority
                        layout="fill"
                        sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
                      />
                    </Header>
                    <Text>{v?.name_uz}</Text>
                  </Card>
                </Grid.Col>
              );
            })}
          </Grid>
        )}
      </Container>
    </Wrapper>
  );
};

export default CatalogScreen;
