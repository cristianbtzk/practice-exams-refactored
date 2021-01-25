import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { AiOutlineUser } from 'react-icons/ai';
import { IoIosSchool } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

const RankingElement = ({ test }) => {
  const { user } = useAuth();
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(`/ranking-test?test=${test.id}`);
  }, [history, test.id]);

  return (
    <Container isUserTest={user.email === test.user.email}>
      <AiOutlineUser />
      <h3>{test.user.name}</h3>

      <div>
        <IoIosSchool />
        {test.score}
      </div>

      <button type="button" onClick={handleClick}>
        Ver Prova
      </button>
    </Container>
  );
};

RankingElement.propTypes = {
  test: PropTypes.shape({
    id: PropTypes.string,
    score: PropTypes.number,
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  }).isRequired,
};

export default RankingElement;
