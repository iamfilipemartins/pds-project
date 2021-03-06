import { ConnectApiPost, urls } from '../../services';

export const login = async (email: string, password: string): Promise<any> => {
  const returnService = await ConnectApiPost(urls.URL_LOGIN, { email, senha: password });
  return returnService.data;
};

export default login;
