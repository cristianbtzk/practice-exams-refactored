import styled from 'styled-components';

export const Content = styled.div`
  padding: 3rem 1.4rem;
  margin-top: -10px;
  flex: 1;
  z-index: 0;
  p {
    font-family: 'Roboto';
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: justify;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    margin-top: 36px;
    padding: 0px 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
