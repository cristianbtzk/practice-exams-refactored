import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import iconsImg from '../../assets/Icons.svg';
import RankingTestAnswer from '../../components/RankingTestAnswer';
import api from '../../services/api';

import { Container, Content, Header, AnswersContainer } from './styles';

const RankingTest = () => {
  const history = useHistory();
  const [answers, setAnswers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const test_id = location.search.replace('?test=', '');
    api.get(`/answers/${test_id}`).then((response) => {
      setAnswers(response.data);
    });
  }, [location.search]);

  const handleReturn = useCallback(async () => {
    history.push('/ranking');
  }, [history]);

  return (
    <Container>
      <img src={iconsImg} alt="Ícones" />

      <Content>
        <h1>Gabarito do Teste</h1>
        <Header>
          <p>Questão</p>
          <p>Resposta</p>
          <p>Resultado</p>
        </Header>
        <AnswersContainer>
          {answers.map((answer) => (
            <RankingTestAnswer key={answer.number} answer={answer} />
          ))}
        </AnswersContainer>

        <button type="button" onClick={handleReturn}>
          Voltar
        </button>
      </Content>
    </Container>
  );
};

export default RankingTest;
