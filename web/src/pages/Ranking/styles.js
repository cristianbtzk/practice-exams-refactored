import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(253.58deg, #014ca5 1.55%, #002051 95.8%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-style: italic;
    font-size: 48px;
    color: #fff;
  }
  > button {
    background: linear-gradient(
      253.58deg,
      #009ee3 1.55%,
      rgba(0, 255, 224, 0.68) 95.8%
    );
    border: 0;
    margin-top: 10px;
    color: #fff;
    width: 90%;
    height: 50px;
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    border-radius: 100px;
  }
  @media (min-width: 1000px) {
    h1 {
      font-size: 96px;
    }
    > button {
      width: 370px;
      height: 55px;
    }
  }
`;

export const PageSelect = styled.div``;
