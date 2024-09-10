import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { Box, Container, Text, Title, Wrapper } from './style';
import { IconNotFound } from '@/assets/icons/404';

export const NotFoundScreen = () => {
  const router = useRouter();

  return (
    <Container>
      <Wrapper>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconNotFound />
        </Box>
        <Title className="not-found-title">Sahifa topilmadi!</Title>
        <Text className="not-found-description">
          Bu sahifa mavjud emas yoki olib tashlangan! Asosiy sahifaga
          qaytishingizni tavsiya qilamiz
        </Text>
        <Button
          color="red"
          onClick={() => router.push('/')}
          style={{ fontFamily: 'var(--font-readex);', fontWeight: '400' }}
        >
          Asosiy sahifaga qaytish
        </Button>
      </Wrapper>
    </Container>
  );
};
