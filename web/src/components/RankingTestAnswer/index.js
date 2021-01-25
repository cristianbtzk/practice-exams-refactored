import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

const RankingTestAnswer = ({ answer }) => (
  <Container>
    <Content isCorrect={answer.is_correct}>
      <p>Questão {answer.number}</p>
      <p>{answer.answer ? `Letra ${answer.answer.toUpperCase()}` : '-'}</p>
      <p>{answer.is_correct ? 'Correta' : 'Incorreta'}</p>
    </Content>
  </Container>
);

RankingTestAnswer.propTypes = {
  answer: PropTypes.shape({
    number: PropTypes.number,
    is_correct: PropTypes.bool,
    answer: PropTypes.string,
  }).isRequired,
};

export default RankingTestAnswer;
