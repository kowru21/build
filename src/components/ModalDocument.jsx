import React from "react";
import "./ModalDocument.css";

const ModalDocument = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={image} alt="Документ" />
      </div>
    </div>
  );
};

export default ModalDocument;
