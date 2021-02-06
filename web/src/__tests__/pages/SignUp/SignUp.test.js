import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, fireEvent, waitFor } from '@testing-library/react';
import api from '../../../services/api';
import SignUp from '../../../pages/SignUp';

const apiMock = new MockAdapter(api);

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

describe('SignUp tests', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should push to another route after successfully sign up', async () => {
    apiMock.onPost('/users').reply(200);
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const nameInput = getByPlaceholderText('Nome');
    const emailInput = getByPlaceholderText('E-mail');
    const passwordInput = getByPlaceholderText('Senha');
    const formButton = getByText('Enviar');

    fireEvent.change(nameInput, { target: { value: 'Fake Name' } });
    fireEvent.change(emailInput, { target: { value: 'email@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    fireEvent.click(formButton);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });
  });

  it('should not push to another route when an error happens', async () => {
    apiMock.onPost('/users').reply(400);

    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const nameInput = getByPlaceholderText('Nome');
    const emailInput = getByPlaceholderText('E-mail');
    const passwordInput = getByPlaceholderText('Senha');
    const formButton = getByText('Enviar');

    fireEvent.change(nameInput, { target: { value: 'Fake Name' } });
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    fireEvent.click(formButton);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });
});
