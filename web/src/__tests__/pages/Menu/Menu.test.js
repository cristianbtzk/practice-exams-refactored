import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Menu from '../../../pages/Menu';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockedHistoryPush }),
}));

jest.mock('../../../hooks/auth', () => ({
  useAuth: () => ({
    signOut: jest.fn(),
  }),
}));

jest.mock('../../../hooks/questions', () => ({
  useQuestions: () => ({
    startTest: jest.fn(),
  }),
}));

describe('Menu tests', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should push to /questions when start test', async () => {
    const { getByText } = render(<Menu />);

    const startTestButton = getByText('Iniciar Simulado');

    fireEvent.click(startTestButton);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/questions');
    });
  });
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should push to /ranking when press Ranking button', async () => {
    const { getByText } = render(<Menu />);

    const rankingButton = getByText('Ver Ranking');

    fireEvent.click(rankingButton);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/ranking');
    });
  });
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should push to / when sign out', async () => {
    const { getByText } = render(<Menu />);

    const formButton = getByText('Sair');

    fireEvent.click(formButton);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });
  });
});
