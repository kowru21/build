import React, { useState } from "react";
import "./FAQBlock.css";

const faqData = [
  {
    question: "Как долго проходит процесс банкротства физического лица?",
    answer: [
      "Получение необходимых документов и подготовка заявления о банкротстве с его дальнейшей отправкой в арбитражный суд 5-10 дней",
      "Принятие Арбитражным судом заявления о вашем банкротстве 5-15 дней",
      "Рассмотрение дела в суде 1 день",
      "Процедура банкротства вводится на срок 6 месяцев",
      "Итого, общий срок на проведение всей процедуры банкротства составляет 7-9 месяцев"
    ]
  },
  {
    question: "Какие есть гарантии на успешный исход процедуры в моем случае?",
    answer: [
      "Мы анализируем вашу ситуацию заранее и подсказываем оптимальные действия",
      "Работаем строго в рамках законодательства РФ",
      "Если условия позволяют — списание долгов гарантировано решением суда"
    ]
  },
  {
    question: "Нужно ли мне ходить в суд, пока идет процедура?",
    answer: [
      "Нет, при наличии доверенности всю работу мы берём на себя — вы можете заниматься своими делами"
    ]
  },
  {
    question: "Я не знаю всех своих кредиторов, как мне быть?",
    answer: [
      "Мы поможем собрать информацию из бюро кредитных историй, судебных решений и других источников",
      "Уточним у ФССП наличие исполнительных производств"
    ]
  }
];

const FAQBlock = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <h2 className="faq-title">Частые вопросы <br/>о банкротстве</h2>
      <div className="faq-items">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleIndex(index)}
          >
            <div className="faq-question">
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
              {item.question}
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "500px" : "0"
              }}
            >
              <ul>
                {item.answer.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQBlock;
