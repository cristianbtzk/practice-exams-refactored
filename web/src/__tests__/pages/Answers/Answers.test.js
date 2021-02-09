import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import Answers from '../../../pages/Answers';
import api from '../../../services/api';

const apiMock = new MockAdapter(api);

const mockedHistoryPush = jest.fn();

apiMock.onPost('/tests').reply(200);

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockedHistoryPush,
  }),
}));

jest.mock('react-toastify', () => ({
  toast: {
    err: jest.fn(),
  },
}));

jest.mock('../../../hooks/questions', () => ({
  useQuestions: () => ({
    questions: [
      { number: 1, type: 'Matemática e suas tecnologias', answer: 'a' },
      { number: 2, type: 'Matemática e suas tecnologias', answer: 'b' },
      {
        number: 3,
        type: 'Prova: Ciências da Natureza e suas tecnologias',
        answer: 'c',
      },
      {
        number: 4,
        type: 'Prova: Ciências da Natureza e suas tecnologias',
        answer: '',
      },
    ],
  }),
}));

describe('Answers tests', () => {
  it('should list test answers', async () => {
    const { findByText } = render(<Answers />);

    expect(await findByText('Questão 1')).toBeInTheDocument();
    expect(await findByText('Questão 2')).toBeInTheDocument();
    expect(await findByText('Questão 3')).toBeInTheDocument();
    expect(await findByText('Questão 4')).toBeInTheDocument();
    expect(await findByText('Letra A')).toBeInTheDocument();
    expect(await findByText('Letra B')).toBeInTheDocument();
    expect(await findByText('Letra C')).toBeInTheDocument();
  });

  it('should post answers to API and display a modal', async () => {
    const { findByText, getByText } = render(<Answers />);

    const saveAnswersButton = getByText('Salvar Respostas');

    fireEvent.click(saveAnswersButton);

    expect(await findByText('Respostas enviadas')).toBeInTheDocument();
  });

  it('should redirect when save answers and click ranking button', async () => {
    const { findByText, getByText } = render(<Answers />);

    const saveAnswersButton = getByText('Salvar Respostas');

    fireEvent.click(saveAnswersButton);

    expect(await findByText('Respostas enviadas')).toBeInTheDocument();

    const rankingButton = getByText('Ranking');

    fireEvent.click(rankingButton);

    expect(mockedHistoryPush).toBeCalledWith('/ranking');
  });

  it('should redirect when save answers and click logout button', async () => {
    const { findByText, getByText } = render(<Answers />);

    const saveAnswersButton = getByText('Salvar Respostas');

    fireEvent.click(saveAnswersButton);

    expect(await findByText('Respostas enviadas')).toBeInTheDocument();

    const logoutButton = getByText('Sair');

    fireEvent.click(logoutButton);

    expect(mockedHistoryPush).toBeCalledWith('/');
  });

  //

  it('should display a toast message when an error happens while save answers', async () => {
    apiMock.onPost('/tests').reply(400);

    const { getByText, queryByText } = render(<Answers />);

    const saveAnswersButton = getByText('Salvar Respostas');
    fireEvent.click(saveAnswersButton);

    expect(queryByText('Respostas enviadas')).not.toBeInTheDocument();
  });
});
