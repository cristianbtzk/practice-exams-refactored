import styled, { css } from 'styled-components';

export const Container = styled.button`
  margin: 20px 10px 15px;
  background: #ffffff;
  height: 50px;
  width: 53px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 50%;
  color: #535353;
  font-size: 14px;
  ${(props) =>
    props.isSelected &&
    css`
      background: linear-gradient(
        253.58deg,
        #00b2ff 1.55%,
        #0d76f2 90.89%,
        #ff8a00 95.8%
      );
      border: 0;
      color: #fff;
    `}
`;
