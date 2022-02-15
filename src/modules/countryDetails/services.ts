import { ConnectApiGet, ConnectApiPatch, urls } from '../../services';

interface Body {
  campo: string;
  valor: string;
}

export const getCountryDetails = async (country: string): Promise<any> => {
  const url = urls.URL_COUNTRY_DETAILS.replace('{country}', country);
  const returnService = await ConnectApiGet(url);
  return returnService.data;
};

export const updateCountryDetails = async (country: string, body: Body): Promise<any> => {
  const url = urls.URL_COUNTRY_DETAILS.replace('{country}', country);
  const returnService = await ConnectApiPatch(url, body);
  return returnService.data;
};

export default getCountryDetails;
