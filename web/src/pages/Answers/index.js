import React, { useCallback, useState } from 'react';
import { GiConfirmed } from 'react-icons/gi';
import { useHistory } from 'react-router-dom';
import iconsImg from '../../assets/Icons.svg';
import Answer from '../../components/Answer';
import { useQuestions } from '../../hooks/questions';
import api from '../../services/api';

import {
  Container,
  Content,
  Header,
  AnswersContainer,
  Modal,
  Options,
} from './styles';

const Answers = () => {
  const [responsesSent, setResponsesSent] = useState(false);
  const { questions } = useQuestions();
  const history = useHistory();

  const handleSaveAnswers = useCallback(async () => {
    const name = localStorage.getItem('@psycho:name');
    const email = localStorage.getItem('@psycho:email');

    await api.post('/tests', {
      name,
      email,
      answers: questions,
    });

    setResponsesSent(true);
  }, [questions]);

  const handleButtonLogout = useCallback(async () => {
    localStorage.clear();
    history.push('/');
  }, [history]);

  const handleButtonRanking = useCallback(async () => {
    history.push('/ranking');
  }, [history]);

  return (
    <Container>
      {responsesSent && (
        <Modal>
          <GiConfirmed />

          <p>Respostas enviadas</p>
        </Modal>
      )}

      <img src={iconsImg} alt="Ícones" />

      <Content>
        <h1>Gabarito</h1>
        <Header>
          <p>Questão</p>
          <p>Resposta</p>
          <p>Prova</p>
          <p>Status</p>
          <p>Tempo/Questão</p>
        </Header>
        <AnswersContainer responsesSent={responsesSent}>
          {questions.map((question) => (
            <Answer key={question.number} question={question} />
          ))}
        </AnswersContainer>
        {!responsesSent ? (
          <button type="button" onClick={handleSaveAnswers}>
            Salvar Repostas
          </button>
        ) : (
          <Options>
            <button type="button" onClick={handleButtonLogout}>
              Sair
            </button>
            <button type="button" onClick={handleButtonRanking}>
              Ranking
            </button>
          </Options>
        )}
      </Content>
    </Container>
  );
};

export default Answers;
