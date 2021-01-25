import React from 'react';
import PropTypes from 'prop-types';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

const Route = ({ isPrivate, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/menu',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

Route.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.func.isRequired,
};

Route.defaultProps = {
  isPrivate: false,
};

export default Route;
