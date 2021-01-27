import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useQuestions } from '../../hooks/questions';

import { Container } from './styles';

const Menu = () => {
  const { signOut } = useAuth();
  const { startTest } = useQuestions();
  const history = useHistory();
  const handleStartTest = useCallback(() => {
    startTest();
    history.push('/questions');
  }, [history, startTest]);

  const handleRanking = useCallback(() => {
    history.push('/ranking');
  }, [history]);

  const handleLogout = useCallback(() => {
    signOut();
    history.push('/');
  }, [history, signOut]);

  return (
    <Container>
      <h1>Menu</h1>
      <button type="button" onClick={handleStartTest}>
        Iniciar Simulado
      </button>
      <button type="button" onClick={handleRanking}>
        Ver Ranking
      </button>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </Container>
  );
};

export default Menu;
