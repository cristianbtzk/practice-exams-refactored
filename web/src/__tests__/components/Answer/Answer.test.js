import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Answer from '../../../components/Answer';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockedHistoryPush }),
}));

jest.mock('../../../hooks/questions', () => ({
  useQuestions: () => ({
    setQuestion: jest.fn(),
  }),
}));

describe('Answer Component tests', () => {
  it('should push to /questions when click "change answer" button', async () => {
    const { getByText } = render(
      <Answer
        question={{
          number: 1,
          type: 'Matemática e suas tecnologias',
          answer: 'a',
        }}
      />
    );

    const changeAnswerButton = getByText('Mudar Resposta');

    fireEvent.click(changeAnswerButton);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/questions');
    });
  });
});
