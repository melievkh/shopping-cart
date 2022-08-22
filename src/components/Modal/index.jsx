import React from "react";
import { ModalBackground, ModalContainer } from "./style";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <ModalBackground onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContainer>
      </ModalBackground>
    )
  );
};

export default Modal;
