import React, { FC } from "react";
import modalOverlayStyle from "./modal-overlay.module.css";

type ITypeModalOverlay = {
  onClose: () => void;
};

const ModalOverlay: FC<ITypeModalOverlay> = ({ onClose }) => {
  return (
    <div
      data-testid={`modalOverlay`}
      className={modalOverlayStyle.overlay}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    />
  );
};

export default ModalOverlay;
