import { ICountrySelected, SET_COUNTRY_SELECTED, SET_COUNTRY_IBGE_DATA } from '../actions/countryActions';

type CountryNameState = {
  countrySelected: ICountrySelected;
};

const initialState: CountryNameState = {
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
    details: undefined,
  },
};
const countryReducer = (state: CountryNameState = initialState, action: any) => {
  switch (action.type) {
    case SET_COUNTRY_SELECTED:
      return {
        ...state,
        countrySelected: {
          ...state.countrySelected,
          mapData: action.payload,
        },
      };
    case SET_COUNTRY_IBGE_DATA:
      return {
        ...state,
        countrySelected: {
          ...state.countrySelected,
          details: action.payload,
        },
      };
    default:
      return state;
  }
};
export default countryReducer;
