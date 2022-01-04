import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Login from '..';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router') as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      return {};
    }),
    useDispatch: jest.fn().mockImplementation(() => {
      return {};
    }),
  };
});

describe('<Login />', () => {
  const initialState = {
    country: {
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
    },
    user: {
      login: {},
      signup: {},
      emailRecovery: '',
    },
  };
  const mockStore = configureStore();
  test('should display a blank login form, with remember me checked by default', async () => {
    const store = mockStore(initialState);
    const { findByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const loginScreen = await findByTestId('login');

    expect(loginScreen).toMatchSnapshot();
  });

  test('should allow entering a email', async () => {
    const store = mockStore(initialState);
    const { findByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const loginScreen = await findByTestId('login');

    const email = await findByTestId('email');

    fireEvent.change(email, { target: { value: 'test@test.com' } });

    expect(loginScreen).toBeDefined();
    expect(email).toBeDefined();
  });

  test('should allow entering a password', async () => {
    const store = mockStore(initialState);
    const { findByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const password = await findByTestId('password');
    const loginScreen = await findByTestId('login');

    fireEvent.change(password, { target: { value: 'password' } });

    expect(loginScreen).toBeDefined();
    expect(password).toBeDefined();
  });
});
