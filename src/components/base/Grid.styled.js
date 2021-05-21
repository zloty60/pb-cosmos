import styled, { css } from "styled-components";

export const Conatainer = styled.div`
  position: relative;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Margin = styled.div`
  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `};
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `};
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `};
  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `};
`;

export const Box = styled.div`
  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `};
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `};
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};
  ${({ flexdirection }) =>
    flexdirection &&
    css`
      flex-direction: ${flexdirection};
    `};
  ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `};
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `};
  ${({ flexBasis }) =>
    flexBasis &&
    css`
      flex-basis: ${flexBasis};
    `};
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};
  ${({ pl }) =>
    pl &&
    css`
      padding-left: ${pl};
    `};
  ${({ pr }) =>
    pr &&
    css`
      padding-right: ${pr};
    `};
`;
