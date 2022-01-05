export const SET_COUNTRY_SELECTED = 'country/SET_COUNTRY_SELECTED';
export const SET_COUNTRY_DETAILS = 'country/SET_COUNTRY_DETAILS';

export interface countryAction {
  type: string;
  payload: string;
}

export interface ICountryMapData {
  ABBREV: string;
  CONTINENT: string;
  FORMAL_EN: string;
  GDP_MD_EST: number;
  GDP_YEAR: number;
  ISO_A2: string;
  ISO_A3: string;
  NAME: string;
  NAME_LONG: string;
  POP_EST: number;
  POP_RANK: number;
  POP_YEAR: number;
  REGION_UN: string;
  SUBREGION: string;
}

export interface ICountryIBGEDataID {
  M49: number;
  ISO_3166_1_ALPHA_2: string;
  ISO_3166_1_ALPHA_3: string;
}

export interface ICountryIBGEDataNome {
  abreviado: string;
}

export interface ICountryIBGEDataAreaUnidade {
  nome: string;
  símbolo: string;
  multiplicador: number;
}
export interface ICountryIBGEDataArea {
  total: string;
  unidade: ICountryIBGEDataAreaUnidade;
}

export interface ICountryIBGEDataLocalizacaoRegiaoID {
  M49: number;
}
export interface ICountryIBGEDataLocalizacaoRegiao {
  id: ICountryIBGEDataLocalizacaoRegiaoID;
  nome: string;
}
export interface ICountryIBGEDataLocalizacaoSubRegiaoID {
  M49: number;
}
export interface ICountryIBGEDataLocalizacaoSubRegiao {
  id: ICountryIBGEDataLocalizacaoSubRegiaoID;
  nome: string;
}
export interface ICountryIBGEDataLocalizacao {
  regiao: ICountryIBGEDataLocalizacaoRegiao;
  "sub_regiao": ICountryIBGEDataLocalizacaoSubRegiao;
  "regiao_intermediaria": any;
}

export interface ICountryIBGEDataLinguaID {
  ISO_639_1: string;
  ISO_639_2: string;
}
export interface ICountryIBGEDataLingua {
  id: ICountryIBGEDataLinguaID;
  nome: string;
}
export interface ICountryIBGEDataGovernoCapital {
  nome: string;
}
export interface ICountryIBGEDataGoverno {
  capital: ICountryIBGEDataGovernoCapital;
}

export interface ICountryIBGEDataUnidadeMonetariaID {
  ISO_4217_ALPHA: string;
  ISO_4217_NUMERICO: string;
}
export interface ICountryIBGEDataUnidadeMonetaria {
  id: ICountryIBGEDataUnidadeMonetariaID;
  nome: string;
}

export interface ICountryDetails {
  id: any;
  nome: any;
  area: any;
  localizacao: any;
  linguas: any;
  governo: any;
  "unidades_monetarias": any;
  historico: any;
}

export interface ICountrySelected {
  mapData: ICountryMapData;
}

export const setCountrySelected = (value: ICountryMapData): any => ({
  type: SET_COUNTRY_SELECTED,
  payload: value,
});

export const setCountryDetails = (value: any): any => ({
  type: SET_COUNTRY_DETAILS,
  payload: value,
});
