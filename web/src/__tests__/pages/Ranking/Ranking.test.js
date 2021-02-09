import React from 'react';
import MockAdapter from 'axios-mock-adapter';

import { render, fireEvent } from '@testing-library/react';
import api from '../../../services/api';
import Ranking from '../../../pages/Ranking';

const apiMock = new MockAdapter(api);

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockedHistoryPush }),
}));

jest.mock('../../../hooks/auth', () => ({
  useAuth: () => ({
    user: {
      email: 'cristian@gmail.com',
    },
  }),
}));

describe('Ranking test', () => {
  it('should be able to list answers from selected test', async () => {
    apiMock.onGet('/tests/1').reply(200, {
      count: 2,
      tests: [
        {
          id: 1,
          score: 750,
          user: {
            name: 'Cristian',
            email: 'cristian@gmail.com',
          },
        },
        {
          id: 2,
          score: 500,
          user: {
            name: 'João',
            email: 'joao@gmail.com',
          },
        },
      ],
    });

    const { findByText } = render(<Ranking />);

    expect(await findByText('Cristian')).toBeInTheDocument();
    expect(await findByText('João')).toBeInTheDocument();
    expect(await findByText('750')).toBeInTheDocument();
    expect(await findByText('500')).toBeInTheDocument();
  });

  it('should push to /menu when press "back to menu" button', async () => {
    apiMock.onGet('/tests/1').reply(200);

    const { getByText } = render(<Ranking />);

    const menuButton = getByText('Voltar ao menu');

    fireEvent.click(menuButton);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/menu');
  });
});
