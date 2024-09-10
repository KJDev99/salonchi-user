import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';

export const clearUser = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export const setUser = async (islocalStorage: boolean, data: any) => {
  const user = JSON.stringify(data);
  if (islocalStorage) {
    localStorage.setItem('userData', user);
  } else {
    sessionStorage.setItem('userData', user);
  }
};

export const getUser = () => {
  if (typeof window !== undefined) {
    const tokens: any =
      JSON.parse(localStorage.getItem('userData') as string) ??
      JSON.parse(sessionStorage.getItem('userData') as string);
    if (tokens?.access) {
      const jwt_access: any = jwt_decode(tokens.access);
      const jwt_refresh: any = jwt_decode(tokens.refresh);
      const isExpiredAccess = dayjs.unix(jwt_access.exp).diff(dayjs()) < 1;
      const isExpiredRefresh = dayjs.unix(jwt_refresh.exp).diff(dayjs()) < 1;
      return { ...tokens, isExpiredAccess, isExpiredRefresh };
    }
  }
};
