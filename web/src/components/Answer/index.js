import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useQuestions } from '../../hooks/questions';

import { Container, Content } from './styles';

const Answer = ({ question }) => {
  const { setQuestion } = useQuestions();
  const history = useHistory();

  const handleChangeAnswer = useCallback(() => {
    setQuestion(question.number);

    history.push('/questions');
  }, [setQuestion, question.number, history]);

  return (
    <Container>
      <Content hasAnswer={!!question.answer}>
        <p>Questão {question.number}</p>
        <p>
          {' '}
          {question.answer ? `Letra ${question.answer.toUpperCase()}` : '-'}
        </p>
        <p>{question.type.toUpperCase()}</p>
        <p>{question.answer ? 'Respondido' : 'Sem Resposta'}</p>
        <p>Tempo</p>
        <button type="button" onClick={handleChangeAnswer}>
          Mudar Resposta
        </button>
      </Content>
    </Container>
  );
};

Answer.propTypes = {
  question: PropTypes.shape({
    number: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
};

export default Answer;
