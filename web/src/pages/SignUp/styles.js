import styled from 'styled-components';

export const Container = styled.div`
  background: #000103;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    position: absolute;
    width: 12rem;
    height: 9rem;
    left: -4rem;
    top: -2rem;
  }

  @media (min-width: 800px) {
    > img {
      position: absolute;
      width: 327.8px;
      height: 303.38px;
      left: -100px;
      top: -118.14px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  h1 {
    color: #fff;
    font-size: 3rem;
  }
  input {
    margin-top: 2rem;
    border: 1px solid #efefef;
    padding: 20px;
    font-size: 2rem;
    width: 27rem;
    border-radius: 100px;
    height: 4.5rem;
  }
  button {
    width: 27rem;
    height: 4.5rem;
    margin-top: 3rem;
    color: #fff;
    border: 0;
    background: linear-gradient(
      253.58deg,
      #009ee3 1.55%,
      rgba(0, 255, 224, 0.68) 95.8%
    );
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    border-radius: 100px;
  }

  a {
    width: 27rem;

    text-decoration: none;
    display: flex;
    align-items: center;
    color: #fff;
    margin-top: 1rem;
    font-size: 1.3rem;

    p {
      margin-left: 0.3rem;
    }
  }

  @media (min-width: 800px) {
    input {
      font-size: 1.5rem;
      height: 4rem;
      width: 24rem;
    }

    button {
      font-size: 1.5rem;

      height: 4rem;
      width: 24rem;
    }

    a {
      width: 24rem;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 5rem;
  justify-content: space-around;
  overflow: hidden;

  > img {
    width: 23rem;

    & + img {
      display: none;
    }
  }

  @media (min-width: 800px) {
    > img + img {
      display: block;
    }
  }
`;
