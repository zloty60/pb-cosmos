import styled, { css } from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 540px;
  height: 360px;
  overflow-y: auto;
  z-index: ${({ theme }) => theme.zIndex.modal};
  transform: translate(-50%, -50%);
  background: linear-gradient(0deg, #2b224a, #2b224a);
  border: 1px solid #342957;
  box-shadow: 0px 12px 32px rgba(22, 13, 49, 0.4);
  border-radius: 16px;
  padding: 20px 24px;

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: #221a3c;
  }

  ::-webkit-scrollbar {
    width: 7px;
    background-color: #221a3c;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #53477d;
  }
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.boldBig.fontSize};
  font-weight: ${({ theme }) => theme.typography.boldBig.fontWeight};
  margin: 0;
  text-transform: capitalize;
`;

export const CloseIcon = styled.img`
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
`;

export const ModalHeader = styled.div`
  display: flex;
  background-color: #342a56;
  border-radius: 4px;
`;

export const ModalButton = styled.button`
  background: ${({ light }) => (light ? "#342A56" : "#251d42")};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.semiBoldSmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.semiBoldSmall.fontWeight};
  text-transform: capitalize;
  color: #a094c6;
  width: 100%;
  text-align: left;
  line-height: 20px;
  ${({ light }) =>
    light &&
    css`
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    `};
`;

export const ModalList = styled.ul`
  padding-left: 0;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ModalListItem = styled.li`
  list-style-type: none;
  margin-bottom: 28px;
`;

export const ModalListItemText = styled.p`
  margin: 0;
  color: #d2cbe9;
  font-size: 14px;
`;

export const OutsideClickWrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.modal - 1};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
`;

export const Arrows = styled.img``;
