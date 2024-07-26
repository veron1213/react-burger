import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import "./modal.css";

const modalRoot = document.getElementById("react-modals");

function Modal({ header, children, onClose }) {
  return ReactDOM.createPortal(
    <ModalOverlay>
      <div className="modal">
        <div className="headerModal">
          <p className="pl-10">{header}</p>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
}

export default Modal;
