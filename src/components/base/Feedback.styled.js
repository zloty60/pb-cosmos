import styled, { keyframes } from "styled-components";

const spin = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #2b224a;
  width: 50px;
  height: 50px;
  animation: ${spin} 1.5s linear infinite;
`;
