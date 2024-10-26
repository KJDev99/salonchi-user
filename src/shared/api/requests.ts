// @ts-nocheck
import { clearUser, getUser } from "@/utils/user";
import axios from "axios";
import { refreshToken } from "./refresh";
import toast from "react-hot-toast";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const request = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const errorHandler = (error, hooks) => {
  if (error?.response?.status === 404) {
    toast.error(error.message);
  }
  return Promise.reject(error.response);
};
request.interceptors.request.use(async (config) => {
  if (typeof window !== undefined) {
    const user = getUser();
    if (user?.access) {
      if (user.isExpiredRefresh) {
        clearUser();
        window.location.href = "/login";
        return config;
      }
      if (!user?.isExpiredAccess) {
        config.headers = {
          Authorization: `Bearer ${user?.access}`,
        };
        return config;
      }
      await refreshToken();
      return config;
    }
    return config;
  }
});

// request.interceptors.response.use(
// 	(response) => response.data?.data,
// 	errorHandler
// );

export { request };
