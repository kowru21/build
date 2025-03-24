import React, { useState } from "react";
import "./Popup.css"; // Подключите стили для попапа

const Popup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, ""); // Удаляем все символы, кроме цифр
    let formatted = "+";

    if (cleaned.length > 0) formatted += cleaned[0]; // Код страны
    if (cleaned.length > 1) formatted += ` (${cleaned.slice(1, 4)}`; // Первые 3 цифры
    if (cleaned.length > 4) formatted += `) ${cleaned.slice(4, 7)}`; // Следующие 3 цифры
    if (cleaned.length > 7) formatted += `-${cleaned.slice(7, 9)}`; // Следующие 2 цифры
    if (cleaned.length > 9) formatted += `-${cleaned.slice(9, 11)}`; // Последние 2 цифры

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

    // Убираем числа и символы, оставляем только буквы и пробелы
    const cleaned = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, "");

    // Проверяем максимальную длину
    if (cleaned.length <= 15) {
      setName(cleaned);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Проверка имени
    if (name.length < 2) {
      setError("Имя должно содержать минимум 2 буквы.");
      return;
    }

    // Проверка номера телефона
    if (phone.length < 18) {
      setError("Введите полный номер телефона в формате +7 (XXX) XXX-XX-XX.");
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/send-message/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    } catch (err) {
      setError("Произошла ошибка при подключении к серверу.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
  <button className="popup-close" onClick={onClose}>
    ×
  </button>
  <h2>Заказать <br />консультацию</h2>
  <form onSubmit={handleSubmit} className="popup-form">
    <div className="form-group">
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Ваше имя"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="phone"></label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="+7 (XXX) XXX-XX-XX"
        maxLength="18"
        required
      />
    </div>
    {error && <p className="error-message">{error}</p>}
    {success && <p className="success-message">Заявка отправлена! МЫ скоро свяжемся с вами!</p>}
    <small>
      Нажимая кнопку “Отправить” вы даёте своё согласие с{" "}
      <a href="#">правилами обработки персональных данных</a>.
    </small>
    <button type="submit" className="submit-button">
      Отправить
    </button>
  </form>
</div>
    </div>
  );
};

export default Popup;
