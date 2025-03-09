import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '');
    let formatted = '+7';

    if (cleaned.length > 1) formatted += ' (' + cleaned.slice(1, 4);
    if (cleaned.length >= 4) formatted += ') ' + cleaned.slice(4, 7);
    if (cleaned.length >= 7) formatted += '-' + cleaned.slice(7, 9);
    if (cleaned.length >= 9) formatted += '-' + cleaned.slice(9, 11);

    return formatted;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (name.length < 2) {
      setError('Имя должно содержать минимум 2 буквы.');
      return;
    }

    if (phone.length < 18) {
      setError('Введите корректный номер телефона.');
      return;
    }

    try {
      const response = await fetch('/ваш-api-адрес', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      });

      const result = await response.json();
      if (result.success) {
        setError('');
        setName('');
        setPhone('');
        alert('Заявка отправлена успешно!');
      } else {
        setError(result.message || 'Ошибка отправки формы.');
      }
    } catch (error) {
      setError('Ошибка сети.');
    }
  };

  return (
    <form className="popup-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, ''))}
        required
      />
      <input
        type="text"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(formatPhone(e.target.value))}
        maxLength="18"
        required
      />
      {error && <div className="form-error">{error}</div>}
      <small>
        Нажимая кнопку “Отправить” вы даёте своё согласие с{' '}
        <a href="#">правилами обработки персональных данных</a>.
      </small>
      <button type="submit" className="submit-button">
        Отправить
      </button>
    </form>
  );
};

export default ContactForm;
