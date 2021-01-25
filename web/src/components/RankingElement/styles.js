import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 700px;
  background: #f5f5f7;
  margin-top: 12px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px;
  align-items: center;
  font-size: 12px;
  ${(props) =>
    props.isUserTest &&
    css`
      background: #f2f25e;
    `}
  > svg {
    background: #fff;
    height: 22px;
    width: auto;
    margin-right: 5px;
  }
  h3 {
    font-weight: 700;
  }
  div {
    display: flex;
    align-items: center;
    svg {
      height: 16px;
      width: auto;
    }
  }
  button {
    border: 2px solid #0c0b0b;
    font-size: 11px;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 8px;
  }
  @media (min-width: 1000px) {
    font-size: 16px;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    padding: 20px 15px;
    > svg {
      background: #fff;
      height: 42px;
      width: auto;
      border-radius: 10px;
    }
    div {
      svg {
        height: 24px;
        width: auto;
        margin-right: 10px;
      }
    }
    button {
      font-size: 16px;
      padding: 4px;
    }
  }
`;
