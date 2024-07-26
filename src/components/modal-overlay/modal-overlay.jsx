import React from "react";
import "./modal-overlay.css";

function ModalOverlay({ children }) {
  return (
    <>
      <div className="overlay">{children}</div>
    </>
  );
}

export default ModalOverlay;
