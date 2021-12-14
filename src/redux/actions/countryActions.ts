export const SET_COUNTRY_SELECTED = 'country/SET_COUNTRY_SELECTED';
export const SET_COUNTRY_IBGE_DATA = 'country/SET_COUNTRY_IBGE_DATA';

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
  'ISO-3166-1-ALPHA-2': string;
  'ISO-3166-1-ALPHA-3': string;
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
  'sub-regiao': ICountryIBGEDataLocalizacaoSubRegiao;
  'regiao-intermediaria': any;
}

export interface ICountryIBGEDataLinguaID {
  'ISO-639-1': string;
  'ISO-639-2': string;
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
  'ISO-4217-ALPHA': string;
  'ISO-4217-NUMERICO': string;
}
export interface ICountryIBGEDataUnidadeMonetaria {
  id: ICountryIBGEDataUnidadeMonetariaID;
  nome: string;
}

export interface ICountryIBGEData {
  id: ICountryIBGEDataID;
  nome: ICountryIBGEDataNome;
  area: ICountryIBGEDataArea;
  localizacao: ICountryIBGEDataLocalizacao;
  linguas: ICountryIBGEDataLingua[];
  governo: ICountryIBGEDataGoverno;
  'unidades-monetarias': ICountryIBGEDataUnidadeMonetaria[];
  historico: string;
}

export interface ICountrySelected {
  mapData: ICountryMapData;
  details?: ICountryIBGEData;
}

export const setCountrySelected = (value: ICountryMapData): any => ({
  type: SET_COUNTRY_SELECTED,
  payload: value,
});

export const setCountryIbgeData = (value: ICountryIBGEData): any => ({
  type: SET_COUNTRY_IBGE_DATA,
  payload: value,
});
