import { EmptyObject } from 'redux';

export const SET_LOGIN_DATA = 'user/SET_LOGIN_DATA';
export const SET_EMAIL_RECOVERY_DATA = 'user/SET_EMAIL_RECOVERY_DATA';
export const SET_SIGNUP_DATA = 'user/SET_SIGNUP_DATA';

export interface IUserData {
  login?: LoginData | EmptyObject;
  signup?: SignupData | EmptyObject;
  emailRecovery?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export const setLoginData = (value: LoginData | any): any => ({
  type: SET_LOGIN_DATA,
  payload: value,
});

export const setEmailRecoveryData = (email: string): any => ({
  type: SET_EMAIL_RECOVERY_DATA,
  payload: email,
});
export const setSignupData = (value: SignupData): any => ({
  type: SET_SIGNUP_DATA,
  payload: value,
});
