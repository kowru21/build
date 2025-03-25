import React, { useState } from 'react';
import "./ContactForm.css"; 

const ContactForm = ({ answers = {}, extradata = [], endpoint = 'https://jusstrictum.ru//send-message/' }) => {
  const [name, setName] = useState(answers?.name || '');
  const [phone, setPhone] = useState(answers?.phone || '');
  const [message, setMessage] = useState('');

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '');
    let formatted = '+';

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
    const cleaned = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');

    if (cleaned.length <= 15) {
      setName(cleaned);
    }
  };

  const handleSubmit = () => {
    if (!name.trim() || phone.length !== 18) {
      setMessage('Пожалуйста, введите корректные данные.');
      return;
    }

    const payload = {
      name,
      phone,
      extradata,
    };

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setMessage('Заявка успешно отправлена!');
        } else {
          setMessage(`Ошибка отправки: ${result.message}`);
        }
      })
      .catch((error) => {
        console.error('Ошибка:', error);
        setMessage('Произошла ошибка при отправке. Попробуйте позже.');
      });
  };

  return (
    <div className="contact-form">
      <input
        className="custom-input"
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={name}
        onChange={handleNameChange}
      />

      <input
        className="custom-input"
        type="text"
        name="phone"
        placeholder="Телефон"
        value={phone}
        onChange={handlePhoneChange}
      />

      <p className="policy-text">
        Нажимая кнопку “Отправить” вы даёте своё согласие с 
        <a href="#"> правилами обработки персональных данных</a>
      </p>

      <div className="button-group">
        <button type="button" className="btn next" onClick={handleSubmit}>
          Отправить
        </button>
      </div>

      {message && <p className="status-message">{message}</p>}

      
    </div>
  );
};

export default ContactForm;


