import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(254.1deg, #014ca5 0.17%, #002051 96.48%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #ffffff;
    font-size: 4.7rem;
  }
  > button {
    background: linear-gradient(
      253.58deg,
      #009ee3 1.55%,
      rgba(0, 255, 224, 0.68) 95.8%
    );
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    border-radius: 100px;
    border: 0;
    width: 24rem;
    height: 7rem;
    margin-top: 3rem;
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 24px;
  }

  @media (min-width: 800px) {
    button {
      width: 29rem;
      height: 6rem;
      font-size: 2rem;
    }
  }
`;
