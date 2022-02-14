import { ConnectApiGet, urls } from '../../services';

export const getCountryDetails = async (country: string): Promise<any> => {
  const url = urls.URL_COUNTRY_DETAILS.replace('{country}', country);
  const returnService = await ConnectApiGet(url);
  return returnService.data;
};

export default getCountryDetails;
