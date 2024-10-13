import React, { FC } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect } from "react";
import modalStyle from "./modal.module.css";
import classNames from "classnames";

const modalRoot = document.getElementById("react-modals") as HTMLElement;

type ITypeModal = {
  header?: string;
  onClose: () => void;
} & React.HTMLProps<HTMLDivElement>;

export const Modal: FC<ITypeModal> = ({ header, onClose, children }) => {
  useEffect(() => {
    const trackKey = (e: KeyboardEvent) => {
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
      <div
        className={classNames(modalStyle.modal, "p-10")}
        data-testid={`modal`}
      >
        <div className={classNames(modalStyle.headerModal)}>
          <p className="text text_type_main-large">{header}</p>
          <div data-testid={`closeIcon`}>
            <CloseIcon
              type="primary"
              onClick={() => {
                onClose();
              }}
            />
          </div>
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </div>,
    modalRoot
  );
};

export default Modal;
