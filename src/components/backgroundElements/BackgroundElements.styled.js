import styled, { css } from "styled-components";

export const Circle = styled.img`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.backgroundElements};
  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `};
  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `};
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `};
  ${({ right }) =>
    right &&
    css`
      right: ${right};
    `};
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(${rotate}deg);
    `};
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: absolute;
  border-radius: 50%;
  z-index: ${({ theme }) => theme.zIndex.backgroundElements};
  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `};
  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `};
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `};
  ${({ right }) =>
    right &&
    css`
      right: ${right};
    `};
`;
