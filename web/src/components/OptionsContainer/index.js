import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const OptionsContainer = ({ handleChangeAnswer, children }) => {
  const handleGetAnswer = useCallback(
    (event) => {
      handleChangeAnswer(event.target.value);
    },
    [handleChangeAnswer]
  );

  return <Container onChange={handleGetAnswer}>{children}</Container>;
};

OptionsContainer.propTypes = {
  handleChangeAnswer: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default OptionsContainer;
