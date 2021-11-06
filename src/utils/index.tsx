import { countryNames } from "./data";

export const getPTBRCountryName = (name: string) : string => {
  return countryNames.find((country: any) => country.nome_pais_int === name)?.nome_pais || "";
};

export default getPTBRCountryName;