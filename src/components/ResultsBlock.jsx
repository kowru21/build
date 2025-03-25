
import React, { useState, useEffect, useRef } from "react";
import "./ResultsBlock.css";
import ModalImage from "./ModalImage";

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
  {
    id: 7,
    number: "А41-18145/2023",
    amount: "3 704 211,17 ₽",
    duration: "7 месяцев 14 дней",
    image: "images/docs/doc6.png",
  },
];

const ResultsBlock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  const visibleCount = isMobile ? 1 : 6;
  const visibleCases = cases.slice(currentIndex, currentIndex + visibleCount);

  const nextSlide = () => {
    if (currentIndex + visibleCount < cases.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="results-wrapper">
      <h2 className="results-title">Результаты процедуры банкротства</h2>

      <div className="slider-container">
        {!isMobile && (
          <button className="nav-button left" onClick={prevSlide}>
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-0.26" y="0.26" width="54.47" height="54.47" rx="9.73" transform="matrix(-1 0 0 1 54.47 -0.00048)" fill="#BA3D3B" />
              <path d="M17.5 27.5L22.5 24.6V30.4L17.5 27.5ZM37.5 28H22V27H37.5V28Z" fill="white" />
            </svg>
          </button>
        )}

        <div
          className="slider"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {visibleCases.map((item) => (
            <div className="slide" key={item.id}>
              <img src={item.image} alt={item.number} onClick={() => setModalImage(item.image)} />
              <p className="doc-number">{item.number}</p>
              <p className="doc-amount">Списали <br /><span>{item.amount}</span></p>
              <p className="doc-duration">За срок <br /><span>{item.duration}</span></p>
            </div>
          ))}
        </div>

        {!isMobile && (
          <button className="nav-button right" onClick={nextSlide}>
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.26" y="0.26" width="54.47" height="54.47" rx="9.73" fill="#BA3D3B" />
              <path d="M37.5 27.5L32.5 24.6V30.4L37.5 27.5ZM17.5 28H33V27H17.5V28Z" fill="white" />
            </svg>
          </button>
        )}
      </div>

      {isMobile && (
        <div className="slider-indicators">
          {cases.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
      )}

      <ModalImage src={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
};

export default ResultsBlock;
