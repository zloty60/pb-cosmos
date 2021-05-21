import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  0%   {
    top: -32%;
  } 
  50%  {
    top: -70%;
  }
  100% {
    top: -32%;
  }

`;

export const IllustrationWrapper = styled.div`
  position: relative;
`;
export const Planet = styled.img`
  width: 375px;
`;

export const Rocket = styled.img`
  position: absolute;
  top: -32%;
  left: 48%;
  transform: translate(-50%, 32%);
  ${({ isAnimated }) =>
    isAnimated &&
    css`
      animation: ${rotate} 2s linear;
    `};
`;
