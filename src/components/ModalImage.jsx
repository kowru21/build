import React, { useEffect, useState } from "react";
import "./ModalImage.css";

const ModalImage = ({ src, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (src) {
      document.body.classList.add("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [src]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // длительность анимации
  };

  if (!src) return null;

  return (
    <div
      className={`modal-overlay ${isClosing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>×</button>
        <img src={src} alt="Документ" />
      </div>
    </div>
  );
};

export default ModalImage;
