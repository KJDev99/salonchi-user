import { getUser, setUser } from '@/utils/user';
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const refreshToken = async () => {
  const user = getUser();
  const response = await axios
    .post(
      '/user/login/refresh',
      {
        refresh: user?.refresh,
      },
      {
        baseURL,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => {
      const newUser = { ...user, access: res?.data?.access } as any;
      setUser(
        JSON.parse(localStorage.getItem('userData') as string)?.access,
        newUser
      );
    });
  return response;
};
