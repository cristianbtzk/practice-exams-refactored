import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import SignIn from '../../../pages/SignIn';

const mockedHistoryPush = jest.fn();
const mockedSignIn = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockedHistoryPush }),
  Link: ({ children }) => children,
}));

jest.mock('../../../hooks/auth', () => ({
  useAuth: () => ({
    signIn: mockedSignIn,
  }),
}));

describe('SignIn tests', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should push to another route after successfully authenticating', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailInput = getByPlaceholderText('E-mail');
    const passwordInput = getByPlaceholderText('Senha');
    const formButton = getByText('Entrar');

    fireEvent.change(emailInput, { target: { value: 'email@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    fireEvent.click(formButton);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/menu');
    });
  });

  it('should not push to another route when an error happens', async () => {
    mockedSignIn.mockImplementation(() => {
      throw new Error();
    });

    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailInput = getByPlaceholderText('E-mail');
    const passwordInput = getByPlaceholderText('Senha');
    const formButton = getByText('Entrar');

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    fireEvent.click(formButton);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });
});
