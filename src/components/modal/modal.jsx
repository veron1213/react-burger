import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect } from "react";
import "./modal.css";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

function Modal({ header, children, onClose }) {
  useEffect(() => {
    document.addEventListener("keydown", trackMousePos);

    return () => {
      document.removeEventListener("keydown", trackMousePos);
    };
  }, []);

  const trackMousePos = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <div className="block">
      <div className="modal p-10">
        <div className="headerModal">
          <p className="text text_type_main-large">{header}</p>
          <CloseIcon
            type="primary"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          />
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default Modal;
