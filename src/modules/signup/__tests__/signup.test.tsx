/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Signup from '..';
import { COUNTRY_DETAILS_INITIAL_STATE, COUNTRY_SELECTED_INITIAL_STATE } from '../../../redux/reducers/countryReducer';

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
      return () => {};
    }),
    useDispatch: jest.fn().mockImplementation(() => {
      return () => {};
    }),
  };
});

describe('<Signup />', () => {
  window.scrollTo = jest.fn();

  const initialState = {
    country: {
      countrySelected: COUNTRY_SELECTED_INITIAL_STATE,
      countryDetails: COUNTRY_DETAILS_INITIAL_STATE,
    },
    user: {
      login: {},
      signup: {},
      emailRecovery: '',
    },
  };
  const mockStore = configureStore();
  test('should display a blank signup form, with remember me checked by default', async () => {
    const store = mockStore(initialState);
    const { findByTestId } = render(
      <Provider store={store}>
        <Signup />
      </Provider>
    );

    const loginScreen = await findByTestId('signup');

    expect(loginScreen).toMatchSnapshot();
  });

  test('should allow entering a email and an password', async () => {
    const store = mockStore(initialState);
    const { findByTestId } = render(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    const email = (await findByTestId('email')) as HTMLInputElement;
    const password = (await findByTestId('password')) as HTMLInputElement;
    const loginScreen = (await findByTestId('signup')) as HTMLInputElement;

    fireEvent.change(email, { target: { value: 'test@test.com' } });
    fireEvent.change(password, { target: { value: 'password' } });

    expect(loginScreen).toBeDefined();
    expect(email).toBeDefined();
    expect(email.value).toEqual('test@test.com');
    expect(password).toBeDefined();
    expect(password.value).toEqual('password');
  });
});
