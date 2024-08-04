import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect } from "react";
import modalStyle from "./modal.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const modalRoot = document.getElementById("react-modals");

function Modal({ header, children, onClose }) {
  useEffect(() => {
    const trackKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", trackKey);

    return () => {
      document.removeEventListener("keydown", trackKey);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={classNames(modalStyle.block)}>
      <div className={classNames(modalStyle.modal, "p-10")}>
        <div className={classNames(modalStyle.headerModal)}>
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
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
