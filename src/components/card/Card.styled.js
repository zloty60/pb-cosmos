import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 208px;
  width: 160px;
  border-radius: 16px;
  background-color: #ddd;
  position: relative;
  cursor: pointer;
`;

export const CardParagraph = styled.p`
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.typography.semiBoldSmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.semiBoldSmall.fontWeight};
`;

export const CardTitle = styled(CardParagraph)`
  position: absolute;
  bottom: 24px;
  width: 100%;
  margin: 0;
  text-align: center;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: ${(
    props
  ) => `linear-gradient(360deg, #2b224a 0%, rgba(43, 34, 74, 0) 100%),
    url(${props.imgSrc})`};
`;

export const CardOverlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background: linear-gradient(
    0deg,
    rgba(43, 34, 74, 0.92) 7.69%,
    rgba(70, 58, 113, 0.92) 100%
  );
  backdrop-filter: blur(4px);
  transition: opacity 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  ${CardWrapper}:hover & {
    opacity: 1;
  }
`;
