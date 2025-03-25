
import React from "react";
import "./ModalImage.css";

const ModalImage = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={src} alt="Документ" />
      </div>
    </div>
  );
};

export default ModalImage;
