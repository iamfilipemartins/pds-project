import { combineReducers } from 'redux';
import countryReducer from './countryReducer';

const rootReducer = combineReducers({
  country: countryReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
