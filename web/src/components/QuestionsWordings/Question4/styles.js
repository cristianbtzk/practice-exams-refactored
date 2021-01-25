import styled from 'styled-components';

export const Content = styled.div`
  padding: 3rem 1.4rem;
  margin-top: -10px;
  flex: 1;
  z-index: 0;
  text-align: center;
  p {
    font-family: 'Roboto';
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: justify;
    margin-bottom: 22px;
  }
  table {
    width: 70%;
    margin: 28px auto 28px;
    text-align: center;
    font-family: 'Roboto';
    font-size: 2rem;
    border-collapse: collapse;
    td,
    th {
      padding: 3px;
      border: 1px solid black;
    }
    th {
      background: #c5c7c5;
    }
    .black {
      background: #000;
    }
  }
`;
