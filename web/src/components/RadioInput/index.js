import React from 'react';
import PropTypes from 'prop-types';

import { Content } from './styles';

const RadioInput = ({ id, letter, children, ...rest }) => (
  <Content>
    <label htmlFor={id}>{letter}</label>
    <input type="radio" id={id} {...rest} />
    {children}
  </Content>
);

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  letter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default RadioInput;
