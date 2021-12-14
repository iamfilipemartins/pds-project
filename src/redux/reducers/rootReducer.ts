import { combineReducers } from 'redux';
import countryReducer from './countryReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  country: countryReducer,
  user: userReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
