import styled from 'styled-components';

export const Content = styled.div`
  padding: 3rem 1.4rem;
  margin-top: -10px;
  flex: 1;
  z-index: 0;
  text-align: center;
  justify-content: center;
  p {
    font-family: 'Roboto';
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: justify;
    margin-bottom: 22px;
  }
  table + p {
    text-align: center;
    margin-top: 18px;
  }
  strong {
    font-weight: 700;
    font-family: 'Roboto';
    font-size: 16px;
  }
  table {
    table-layout: fixed;
    width: 100%;
    margin: 28px auto 0;
    text-align: center;
    font-family: 'Roboto';
    font-size: 0.6rem;
    td {
      padding: 1px;
      border: 2px solid #fff;
    }

    .black {
      background: #000;
    }
  }

  @media (min-width: 800px) {
    table {
      width: 70%;
      font-size: 1rem;
    }
  }
`;
