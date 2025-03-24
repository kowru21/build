import React, { useState } from "react";
import "./ResultsBlock.css";

const cases = [
  {
    id: 1,
    number: "А40-164597/2022",
    amount: "5 641 056,45 ₽",
    duration: "10 месяцев 20 дней",
    image: "images/docs/doc1.png",
  },
  {
    id: 2,
    number: "А40-263944/2022",
    amount: "2 187 127,92 ₽",
    duration: "9 месяцев 26 дней",
    image: "images/docs/doc2.png",
  },
  {
    id: 3,
    number: "А40-205676/2022",
    amount: "2 655 504,42 ₽",
    duration: "8 месяцев и 2 дня",
    image: "images/docs/doc3.png",
  },
  {
    id: 4,
    number: "А41-9578/2023",
    amount: "1 389 145,63 ₽",
    duration: "7 месяцев 25 дней",
    image: "images/docs/doc4.png",
  },
  {
    id: 5,
    number: "А40-104365/2023",
    amount: "4 610 668,76 ₽",
    duration: "7 месяцев 25 дней",
    image: "images/docs/doc5.png",
  },
  {
    id: 6,
    number: "А41-18145/2023",
    amount: "3 704 211,17 ₽",
    duration: "7 месяцев 14 дней",
    image: "images/docs/doc6.png",
  },
];

const ResultsBlock = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(null);

  const visibleCases = cases.slice(startIndex, startIndex + 4);

  const nextSlide = () => {
    if (startIndex + 4 < cases.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  const nextModal = () => {
    if (modalIndex < cases.length - 1) {
      setModalIndex(modalIndex + 1);
    }
  };

  const prevModal = () => {
    if (modalIndex > 0) {
      setModalIndex(modalIndex - 1);
    }
  };

  return (
    <div className="results-wrapper">
      <h2 className="results-title">Результаты процедуры банкротства</h2>

      <div className="results-stats">
        <div className="results-info">
          <div>
            <p>Успешно завершено дел</p>
            <h3>&gt;300</h3>
          </div>
          <div>
            <p>Списано долгов</p>
            <h3>&gt;500 000 000 ₽</h3>
          </div>
        </div>
      </div>

      <div className="slider-container">
        <button className="nav-button left" onClick={prevSlide}>
          {/* ← SVG left */}
          <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-0.263575" y="0.263575" width="54.4729" height="54.4729" rx="9.73643"
              transform="matrix(-1 0 0 1 54.4729 -0.000488281)" fill="#2E80E1" />
            <rect x="-0.263575" y="0.263575" width="54.4729" height="54.4729" rx="9.73643"
              transform="matrix(-1 0 0 1 54.4729 -0.000488281)" stroke="#2E80E1" strokeWidth="0.527149" />
            <path d="M17.5 27.4995L22.5 24.6182V30.3863L17.5 27.4995ZM37.5 27.9995H22V26.9995H37.5V27.9995Z" fill="white" />
          </svg>
        </button>

        <div className="slider">
          {visibleCases.map((item, index) => (
            <div className="slide" key={item.id} onClick={() => openModal(startIndex + index)}>
              <img src={item.image} alt={item.number} />
              <p className="doc-number">{item.number}</p>
              <p className="doc-amount">Списали <br /><span>{item.amount}</span></p>
              <p className="doc-duration">За срок <br /><span>{item.duration}</span></p>
            </div>
          ))}
        </div>

        <button className="nav-button right" onClick={nextSlide}>
          {/* → SVG right */}
          <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.263575" y="0.263575" width="54.4729" height="54.4729" rx="9.73643" fill="#2E80E1" />
            <rect x="0.263575" y="0.263575" width="54.4729" height="54.4729" rx="9.73643"
              stroke="#2E80E1" strokeWidth="0.527149" />
            <path d="M37.5 27.4995L32.5 24.6182V30.3863L37.5 27.4995ZM17.5 27.9995H33V26.9995H17.5V27.9995Z" fill="white" />
          </svg>
        </button>
      </div>

      {/* Модалка */}
      {modalIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-prev" onClick={prevModal} disabled={modalIndex === 0}>‹</button>
            <img src={cases[modalIndex].image} alt="Просмотр документа" />
            <button className="modal-next" onClick={nextModal} disabled={modalIndex === cases.length - 1}>›</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsBlock;
