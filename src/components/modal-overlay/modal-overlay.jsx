import React from "react";
import modalOverlayStyle from "./modal-overlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay({ onClose }) {
  return (
    <div
      className={modalOverlayStyle.overlay}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    />
  );
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
