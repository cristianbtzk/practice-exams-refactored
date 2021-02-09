import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import Questions from '../../../pages/Questions';

const mockedHistoryPush = jest.fn();
const mockedSetQuestion = jest.fn();

jest.mock('../../../hooks/questions', () => ({
  useQuestions: () => ({
    questions: [
      { number: 1, type: 'Matemática e suas tecnologias', answer: '' },
      { number: 2, type: 'Matemática e suas tecnologias', answer: '' },
    ],
    setQuestion: mockedSetQuestion,
    currentQuestion: {
      number: 1,
      type: 'Matemática e suas tecnologias',
      answer: '',
    },
    editAnswers: jest.fn(),
  }),
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockedHistoryPush }),
}));

describe('Qusetions test', () => {
  it('should list question 1 when load page', async () => {
    const { findByText } = render(<Questions />);

    expect(await findByText('Questão 1')).toBeInTheDocument();
    expect(
      await findByText('Prova: Matemática e suas tecnologias')
    ).toBeInTheDocument();
  });

  it('should push to / when press exit button', () => {
    const { getByText } = render(<Questions />);

    const exitButton = getByText('Sair');

    fireEvent.click(exitButton);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/');
  });

  it('should select question 2 when press Review Later button and current question number is 1', async () => {
    const { getByText } = render(<Questions />);

    const reviewLaterButton = getByText('Revisar Depois');
    fireEvent.click(reviewLaterButton);

    expect(mockedSetQuestion).toHaveBeenCalledWith(2);
  });

  /* it('should push to /answers when press Review Later button and current question is the last one', async () => {
    const { getByText } = render(<Questions />);

    const reviewLaterButton = getByText('Revisar Depois');
    fireEvent.click(reviewLaterButton);
    fireEvent.click(reviewLaterButton);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/answers');
  }); */

  it('should select question 2 when press Save button and current question number is 1', async () => {
    const { getByText } = render(<Questions />);

    const saveAnswerButton = getByText('Salvar');
    fireEvent.click(saveAnswerButton);

    expect(mockedSetQuestion).toHaveBeenCalledWith(2);
  });
});
