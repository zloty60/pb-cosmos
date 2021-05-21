import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 32px;
  border-radius: 8px;
  color: #ffffff;
  border: none;
  background-color: ${({ theme }) => theme.buttonBg};
  font-size: ${({ theme }) => theme.typography.semiBold.fontSize};
  font-weight: ${({ theme }) => theme.typography.semiBold.fontWeight};
  line-height: 24px;
  cursor: pointer;
  transition: background-color 0.5s, opacity 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.buttonBgHover};
  }
  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;
