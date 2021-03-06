import { ConnectApiPost, urls } from '../../services';

export const signup = async (email: string, password: string): Promise<any> => {
  const returnService = await ConnectApiPost(urls.URL_SIGNUP, { nome: email, senha: password });
  return returnService.data;
};

export default signup;
