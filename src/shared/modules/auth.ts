import { request } from "../api/requests";
import { ENDPOINTS } from "../endpoints";

export const register = <T>(data: T) => request.post(ENDPOINTS.REGISTER, data);

export const login = <T>(data: T) => request.post(ENDPOINTS.LOGIN, data);

export const verify = <T>(data: T) => request.post(ENDPOINTS.VERIFY, data);

export const forgotPassword = <T>(data: T) =>
  request.post(ENDPOINTS.FORGOT_PASSWORD, data);

export const loginRefresh = <T>(data: T) =>
  request.post(ENDPOINTS.LOGIN_REFRESH, data);

export const recoverForgotPassword = <T>(data: T) =>
  request.post(ENDPOINTS.RECOVER_FORGOT_PASSWORD, data);
