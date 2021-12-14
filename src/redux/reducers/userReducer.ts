import { IUserData, SET_EMAIL_RECOVERY_DATA, SET_LOGIN_DATA, SET_SIGNUP_DATA } from '../actions/userActions';

type UserState = {
  user: IUserData;
};

const initialState: UserState = {
  user: {
    login: {},
    signup: {},
    emailRecovery: ''
  }
};
const userReducer = (state: UserState = initialState, action: any) : any => {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          login: action.payload,
        },
      };
      case SET_EMAIL_RECOVERY_DATA:
        return {
          ...state,
          user: {
            ...state.user,
            emailRecovery: action.payload,
          },
        };
        case SET_SIGNUP_DATA:
          return {
            ...state,
            user: {
              ...state.user,
              signup: action.payload,
            },
          };
    default:
      return state;
  }
};

export default userReducer;
