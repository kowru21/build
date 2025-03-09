import React, { useState } from 'react';
import './BankruptcyCalculator.css';
import ContactForm from "./ContactForm";

const steps = [
  {
    question: 'От каких долгов вы хотите избавиться?',
    type: 'checkbox',
    options: ['Кредиты', 'Микрозаймы', 'Налоги', 'Ипотека', 'Долги перед физическими лицами', 'другие'],
  },
  {
    question: 'Какое имущество у вас имеется?',
    type: 'checkbox',
    options: ['Квартира (единственное жильё)', 'Земельный участок', 'Загородный дом', 'Автомобиль', 'Нет имущества', 'Другое'],
  },
  {
    question: 'Продолжительность просрочки по вашим долгам?',
    type: 'radio',
    options: ['Плачу вовремя', 'До 3х месяцев', 'От 3х до 12 месяцев', 'Больше года'],
  },
  {
    question: 'Платите ли вы алименты?',
    type: 'radio',
    options: ['Да', 'Нет', 'Нужно платить, но я не плачу'],
  },
  {
    question: 'Потребуется ли рассрочка на услуги банкротства?',
    type: 'radio',
    options: ['Да', 'Нет'],
  },
  {
    question: 'Заполните форму, и наш эксперт с вами свяжется',
    type: 'form',
  },
];

const BankruptcyCalculator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleCheckboxChange = (option) => {
    const currentAnswers = answers[currentStep] || [];
    setAnswers({
      ...answers,
      [currentStep]: currentAnswers.includes(option)
        ? currentAnswers.filter(item => item !== option)
        : [...currentAnswers, option],
    });
  };

  const handleRadioChange = (option) => {
    setAnswers({ ...answers, [currentStep]: option });
  };

  const handleInputChange = (field, value) => {
    setAnswers({
      ...answers,
      [currentStep]: { ...answers[currentStep], [field]: value },
    });
  };

  const renderStepContent = () => {
    const step = steps[currentStep];

    if (step.type === 'checkbox') {
      return (
        <div className="checkbox-group">
          {step.options.map((option) => (
            <label key={option} className="checkbox-item">
              <input
                type="checkbox"
                checked={answers[currentStep]?.includes(option) || false}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
          {step.options.includes('другие') || step.options.includes('Другое') ? (
            <input
              className="custom-input"
              type="text"
              placeholder="Свой ответ"
            />
          ) : null}
        </div>
      );
    }

    if (step.type === 'radio') {
      return step.options.map((option) => (
        <label key={option} className="checkbox-item">
          <input
            type="radio"
            name={`step-${currentStep}`}
            checked={answers[currentStep] === option}
            onChange={() => handleRadioChange(option)}
          />
          {option}
        </label>
      ));
    }

    if (step.type === 'form') {
      return (
        <>
          <ContactForm />
        </>
      );
    }

    return null;
  };

  return (
    <div className="calculator-container">
      <div className="calculator-content">
        <div className="calculator-sidebar">
          <h2>Индивидуальный расчет стоимости банкротства</h2>
          <p>
            В случае если ваша ситуация отличается от перечисленных пройдите тест, чтобы узнать стоимость
          </p>
        </div>

        <div className="calculator-main">
          <span className="step">Шаг {currentStep + 1}:</span>
          <h3>{steps[currentStep].question}</h3>
          {renderStepContent()}

          <div className="button-group">
            <button
              className="btn back"
              disabled={currentStep === 0}
              onClick={() => setCurrentStep(currentStep - 1)}
            >Назад</button>
            <button
              className="btn next"
              disabled={currentStep === steps.length - 1}
              onClick={() => setCurrentStep(currentStep + 1)}
            >Вперед</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankruptcyCalculator;