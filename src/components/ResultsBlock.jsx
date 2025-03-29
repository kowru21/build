import React, { useState, useEffect, useRef } from "react";
import "./ResultsBlock.css";
import ModalImage from "./ModalImage";
import cases from "../data/casesData.json";

const ResultsBlock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const slideWidth = sliderRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / slideWidth);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    if (currentIndex < cases.length - 6) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="results-wrapper" id="results">
      <h2 className="results-title">Результаты процедуры банкротства</h2>

      <div className="slider-container">
        {!isMobile && (
          <button className="nav-button left" onClick={handlePrev}>
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-0.26" y="0.26" width="54.47" height="54.47" rx="9.73" transform="matrix(-1 0 0 1 54.47 -0.00048)" fill="#BA3D3B" />
              <path d="M17.5 27.5L22.5 24.6V30.4L17.5 27.5ZM37.5 28H22V27H37.5V28Z" fill="white" />
            </svg>
          </button>
        )}

        <div
          className={`slider ${isMobile ? "mobile-slider" : "move-left"}`}
          ref={sliderRef}
          onScroll={isMobile ? handleScroll : undefined}
          style={!isMobile ? { "--index": currentIndex } : {}}
        >
          {cases.map((item) => (
            <div className="slide" key={item.id} onClick={() => setModalImage(item.image)}>
              <img src={item.image} alt={item.number} />
              <p className="doc-number">{item.number}</p>
              <p className="doc-amount">Списали <br /><span>{item.amount}</span></p>
              <p className="doc-duration">За срок <br /><span>{item.duration}</span></p>
            </div>
          ))}
        </div>

        {!isMobile && (
          <button className="nav-button right" onClick={handleNext}>
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
            <span key={i} className={`dot ${i === currentIndex ? "active" : ""}`} />
          ))}
        </div>
      )}

      <ModalImage src={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
};

export default ResultsBlock;
