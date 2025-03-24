import React, { useState } from "react";
import "./ProcessBlock.css";
import Popup from "./Popup"; // ✅ Подключаем твой компонент

const ProcessBlock = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="process-wrapper">
      <h2 className="process-title">
        <span className="highlight">Как будет проходить</span> <br /> процедура банкротства
      </h2>

      <div className="process-container">
        {/* Левая колонка (Иконка) */}
        <div className="process-icon">
          <img src="images/left.jpg" alt="Иконка" />
        </div>

        {/* Центральная колонка (Номера + Заголовки) */}
        <div className="process-steps">
          <div className="light-blue process-summary">
            <p>Общий срок на проведение всей процедуры банкротства составляет</p>
            <h3>7-9 <span className="highlight">месяцев</span></h3>
          </div>

          {[
            "Первичная консультация",
            "Подготовка документов",
            "Начало процедуры банкротства",
            "Ход процедуры банкротства",
            "Выдача судебного решения",
          ].map((title, index) => (
            <div className="process-step" key={index}>
              <div className="process-step-number">{index + 1}</div>
              <div className="process-step-title">{title}</div>
            </div>
          ))}
        </div>

        {/* Правая колонка (Текст + Синий блок) */}
        <div className="process-right">
          <div className="dark-blue process-summary">
            <p>
              Вам не придётся общаться с менеджерами, все ваши дела буду вести лично я со своей командой помощников
            </p>
            <button
              className="process-button"
              onClick={() => setIsPopupOpen(true)}
            >
              Списать долги
            </button>
          </div>

          {[
            "Разберём вашу ситуацию и разработаем оптимальный план действий.",
            "Для начала процесса от вас потребуется доверенность, чтобы получить и подготовить необходимые документы.",
            "Мы уведомим ваших кредиторов и тщательно подготовим все необходимые документы для передачи в суд.",
            "Будем информировать вас о ходе процедуры банкротства на всех этапах.",
            "После завершения процедуры банкротства вы получите официальное определение суда.",
          ].map((text, index) => (
            <p className="process-step-text" key={index}>{text}</p>
          ))}
        </div>
      </div>

      {/* ✅ Подключаем готовый попап */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default ProcessBlock;
