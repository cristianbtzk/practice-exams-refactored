import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
  align-items: flex-start;

  @media (min-width: 800px) {
    display: grid;
    max-width: 300px;
    grid-template-columns: 1fr 1fr;
  }
`;
