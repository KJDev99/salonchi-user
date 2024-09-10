import { Container, Wrapper } from '@/styles/global';
import { Grid, Image } from '@mantine/core';
import React, { ReactNode } from 'react';
import { List, ListItem } from './style';
import Link from 'next/link';
import { useCategory } from '@/hooks/useCategory';
import { useRouter } from 'next/router';

interface ISidebarProps {
  children: ReactNode;
  categoryId: string | number;
}

export const Sidebar = ({ children, categoryId }: ISidebarProps) => {
  const { category } = useCategory();
  const router = useRouter();
  return (
    <Wrapper>
      <Container>
        <Grid gutter={32}>
          <Grid.Col span={12} lg={3}>
            <List>
              {category.map((v: any) => {
                return (
                  <ListItem key={v.id}>
                    <Link
                      href={`/categories/${v.id}`}
                      className={Number(categoryId) == v.id ? 'active' : ''}
                    >
                      <Image
                        src={v?.photo}
                        alt={v.name_uz}
                        className="mantine-image"
                      />{' '}
                      <span>{router.locale === "uz" ? v.name_uz: v.name_ru}</span>
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Grid.Col>
          <Grid.Col span={12} lg={9}>
            {children}
          </Grid.Col>
        </Grid>
      </Container>
    </Wrapper>
  );
};
