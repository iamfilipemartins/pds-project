import {
  ICountrySelected,
  SET_COUNTRY_SELECTED,
  SET_COUNTRY_DETAILS,
  ICountryDetails,
} from '../actions/countryActions';

type CountryState = {
  countrySelected: ICountrySelected;
  countryDetails: ICountryDetails;
};

type Action = {
  type: string;
  payload: any;
};

export const COUNTRY_DETAILS_INITIAL_STATE = {
  id: { M49: 0, ISO_3166_1_ALPHA_2: '', ISO_3166_1_ALPHA_3: '' },
  nome: { abreviado: '' },
  area: { total: '', unidade: { nome: '', símbolo: '', multiplicador: 1 } },
  localizacao: {
    regiao: { id: { M49: 0 }, nome: '' },
    subRegiao: { id: { M49: 0 }, nome: '' },
    regiaoIntermediaria: { id: { M49: 0 }, nome: '' },
  },
  linguas: [],
  governo: { capital: { nome: '' } },
  moedas: [],
  historico: '',
};

const initialState: CountryState = {
  countrySelected: {
    mapData: {
      ABBREV: '',
      CONTINENT: '',
      FORMAL_EN: '',
      GDP_MD_EST: 0,
      GDP_YEAR: 0,
      ISO_A2: '',
      ISO_A3: '',
      NAME: '',
      NAME_LONG: '',
      POP_EST: 0,
      POP_RANK: 0,
      POP_YEAR: 0,
      REGION_UN: '',
      SUBREGION: '',
    },
  },
  countryDetails: COUNTRY_DETAILS_INITIAL_STATE,
};

const countryReducer = (state: CountryState = initialState, action: Action): any => {
  switch (action.type) {
    case SET_COUNTRY_SELECTED:
      return {
        ...state,
        countrySelected: action.payload,
      };
    case SET_COUNTRY_DETAILS:
      return {
        ...state,
        countryDetails: action.payload,
      };
    default:
      return state;
  }
};
export default countryReducer;
