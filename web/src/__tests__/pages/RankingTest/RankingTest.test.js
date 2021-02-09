import React from 'react';
import MockAdapter from 'axios-mock-adapter';

import { render } from '@testing-library/react';
import api from '../../../services/api';
import RankingTest from '../../../pages/RankingTest';

const apiMock = new MockAdapter(api);

const searchMock = () => 1;

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: jest.fn() }),

  useLocation: () => ({
    search: {
      replace: searchMock,
    },
  }),
}));

describe('Ranking Test test', () => {
  it('should be able to list answers from selected test', async () => {
    apiMock.onGet('/answers/1').reply(200, [
      {
        id: 1,
        number: 1,
        answer: 'a',
        is_correct: true,
      },
      {
        id: 2,
        number: 2,
        answer: 'b',
        is_correct: false,
      },
    ]);

    const { findByText } = render(<RankingTest />);

    expect(await findByText('Questão 1')).toBeInTheDocument();
  });
});
