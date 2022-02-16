/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import Axios from 'axios';

import {
  POST,
  GET,
  PUT,
  DELETE,
  PATCH,
  ERROR_CONNECTION,
  ERROR_INTERNAL,
  ERROR_ACCESS_DANIED,
  ERROR_NOT_FOUND,
} from './constants';

import store from '../redux/store/store';

export const headerRequests = async (): Promise<any> => {
  const token = store.getState()?.user?.user?.login?.token;

  return token
    ? {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    : {
        'Content-Type': 'application/json',
      };
};

export default class Connect {
  static async call(url: string, method: string, body?: any): Promise<any> {
    let answer;
    let config = {};

    try {
      const headers = await headerRequests();

      config = {
        headers,
      };
    } catch (e) {
      config = {};
    }

    switch (method) {
      case GET:
        answer = Axios.get(url, config);
        break;
      case POST:
        answer = Axios.post(url, body, config);
        break;
      case DELETE:
        answer = Axios.delete(url, config);
        break;
      case PUT:
        answer = Axios.put(url, body, config);
        break;
      case PATCH:
        answer = Axios.patch(url, body, config);
        break;
      default:
        answer = 'Método HTTP usado para conectar a API é inválido.';
    }

    return answer;
  }

  static async connect(url: string, method: string, body?: any): Promise<any> {
    return Connect.call(url, method, body).catch((error) => {
      if (error?.response) {
        switch (error?.response?.status) {
          case 403:
            throw new Error(ERROR_ACCESS_DANIED);
          case 401:
            throw new Error(ERROR_ACCESS_DANIED);
          case 404:
            throw new Error(ERROR_NOT_FOUND);
          case 400:
          case 422:
            if (error?.response?.data && error?.response?.data?.message) {
              throw new Error(error.response.data.message);
            }
            break;
          case 500:
            if (error?.response?.data && error?.response?.data?.mensagem) {
              throw new Error(error.response.data.mensagem.replace(/([a-zA-Z]+)?Exception: /, ''));
            }
            throw new Error(ERROR_INTERNAL);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export async function ConnectApiPost(url: string, body?: any): Promise<any> {
  return Connect.connect(url, POST, body);
}

export async function ConnectApiPUT(url: string, body?: any): Promise<any> {
  return Connect.connect(url, PUT, body);
}

export async function ConnectApiPatch(url: string, body?: any): Promise<any> {
  return Connect.connect(url, PATCH, body);
}

export async function ConnectApiGet(url: string): Promise<any> {
  return Connect.connect(url, GET);
}

export async function ConnectApiDelete(url: string): Promise<any> {
  return Connect.connect(url, DELETE);
}
