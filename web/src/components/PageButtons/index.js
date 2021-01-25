import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const PageButtons = ({ pages, currentPage, setCurrentPage, ...rest }) => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const values = [];
    for (let i = 1; i <= pages; i += 1) {
      values.push(i);
    }
    setButtons(values);
  }, [pages]);

  return (
    <>
      {buttons.length <= 3 &&
        buttons.map((button) => (
          <Container
            key={button}
            type="button"
            onClick={() => setCurrentPage(button)}
            isSelected={currentPage === button}
            {...rest}
          >
            {button}
          </Container>
        ))}
      {buttons.length > 3 &&
        currentPage === 1 &&
        buttons.map(
          (button) =>
            button <= 3 && (
              <Container
                key={button}
                type="button"
                onClick={() => setCurrentPage(button)}
                isSelected={currentPage === button}
                {...rest}
              >
                {button}
              </Container>
            )
        )}
      {buttons.length > 3 &&
        currentPage === buttons.length &&
        buttons.map(
          (button) =>
            button >= buttons.length - 2 && (
              <Container
                key={button}
                type="button"
                onClick={() => setCurrentPage(button)}
                isSelected={currentPage === button}
                {...rest}
              >
                {button}
              </Container>
            )
        )}
      {buttons.length > 3 &&
        currentPage !== buttons.length &&
        currentPage !== 1 && (
          <>
            <Container
              key={currentPage - 1}
              type="button"
              onClick={() => setCurrentPage(currentPage - 1)}
              isSelected={false}
              {...rest}
            >
              {currentPage - 1}
            </Container>
            <Container
              key={currentPage}
              type="button"
              onClick={() => setCurrentPage(currentPage)}
              isSelected
              {...rest}
            >
              {currentPage}
            </Container>

            <Container
              key={currentPage + 1}
              type="button"
              onClick={() => setCurrentPage(currentPage + 1)}
              isSelected={false}
              {...rest}
            >
              {currentPage + 1}
            </Container>
          </>
        )}
    </>
  );
};

PageButtons.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default PageButtons;
