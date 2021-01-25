import React from 'react';
import PropTypes from 'prop-types';

import { AuthProvider } from './auth';
import { QuestionsProvider } from './questions';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <QuestionsProvider>{children}</QuestionsProvider>
  </AuthProvider>
);

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
