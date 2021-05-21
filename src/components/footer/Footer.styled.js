import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.appBar};
  bottom: 24px;
  left: 0;
  right: 0;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.4px;
  color: #8d7fbc;
`;
