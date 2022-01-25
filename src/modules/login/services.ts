import { ConnectApiPost, urls } from '../../services';

export const login = async (email: string, password: string) => {
  const returnService = await ConnectApiPost(urls.URL_LOGIN, { login: email, senha: password });
  return returnService.data;
};

export default login;
