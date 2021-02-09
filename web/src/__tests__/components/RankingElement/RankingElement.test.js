import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import RankingElement from '../../../components/RankingElement';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockedHistoryPush }),
}));

jest.mock('../../../hooks/auth', () => ({
  useAuth: () => ({
    user: { email: 'email@email.com' },
  }),
}));

describe('Ranking Element Component tests', () => {
  it('should push to /ranking-test?test="some id" when click "see test" button', async () => {
    const { getByText } = render(
      <RankingElement
        test={{
          id: 1,
          score: 750,
          user: {
            name: 'Cristian',
            email: 'cristian@gmail.com',
          },
        }}
      />
    );

    const seeTestButton = getByText('Ver Prova');

    fireEvent.click(seeTestButton);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/ranking-test?test=1');
    });
  });
});
