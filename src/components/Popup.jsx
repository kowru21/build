import React, { useState, useRef, useEffect } from "react";
import "./Popup.css";

const Popup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const overlayRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, "");
    let formatted = "+";

    if (cleaned.length > 0) formatted += cleaned[0];
    if (cleaned.length > 1) formatted += ` (${cleaned.slice(1, 4)}`;
    if (cleaned.length > 4) formatted += `) ${cleaned.slice(4, 7)}`;
    if (cleaned.length > 7) formatted += `-${cleaned.slice(7, 9)}`;
    if (cleaned.length > 9) formatted += `-${cleaned.slice(9, 11)}`;

    return formatted;
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const formatted = formatPhone(value);
    if (formatted.length <= 18) {
      setPhone(formatted);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    const cleaned = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, "");
    if (cleaned.length <= 15) {
      setName(cleaned);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (name.length < 2) {
      setError("Имя должно содержать минимум 2 буквы.");
      return;
    }

    if (phone.length < 18) {
      setError("Введите полный номер телефона в формате +7 (XXX) XXX-XX-XX.");
      return;
    }

    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setName("");
        setPhone("");
      } else {
        setError(result.message || "Ошибка при отправке формы.");
      }
    } catch {
      setError("Произошла ошибка при подключении к серверу.");
    }
  };

  return (
    <div
      className={`popup-overlay ${isOpen ? "open" : ""}`}
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Заказать <br />консультацию</h2>
        <form onSubmit={handleSubmit} className="popup-form">
          <div className="form-group">
            <input type="text" id="name" value={name} onChange={handleNameChange} placeholder="Ваше имя" required />
          </div>
          <div className="form-group">
            <input type="text" id="phone" value={phone} onChange={handlePhoneChange} placeholder="+7 (XXX) XXX-XX-XX" maxLength="18" required />
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">Заявка отправлена! Мы скоро свяжемся с вами!</p>}
          <small>
            Нажимая кнопку “Отправить” вы даёте своё согласие с{" "}
            <a href="#">правилами обработки персональных данных</a>.
          </small>
          <button type="submit" className="submit-button">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
