import React, { useState } from "react";
import "./HeroSection.css";
import Popup from "./Popup"

const HeroSection = () => {

const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true); // Открыть попап
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Закрыть попап
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Поможем освободиться от долгов</h1>
          <ul className="hero-list">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 25 25"
                className="checkmark"
              ><circle id="Ellipse 148" cx="12.500000" cy="12.500000" r="12.000000" stroke="#BA3D3B" stroke-opacity="1.000000" stroke-width="1.000000"></circle>
                <path id="Line 478" d="M6.04199 12.0833L11.4102 16.7147L19.9043 8.22107" stroke="#BA3D3B" stroke-opacity="1.000000" stroke-width="1.000000"></path>
              </svg>
              по кредитам
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 25 25"
                className="checkmark"
              ><circle id="Ellipse 148" cx="12.500000" cy="12.500000" r="12.000000" stroke="#BA3D3B" stroke-opacity="1.000000" stroke-width="1.000000"></circle>
                <path id="Line 478" d="M6.04199 12.0833L11.4102 16.7147L19.9043 8.22107" stroke="#BA3D3B" stroke-opacity="1.000000" stroke-width="1.000000"></path>
              </svg>
              по займам
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 25 25"
                className="checkmark"
              >
              <circle id="Ellipse 148" cx="12.500000" cy="12.500000" r="12.000000" stroke="#BA3D3B" stroke-opacity="1.000000" stroke-width="1.000000"></circle>
                <path id="Line 478" d="M6.04199 12.0833L11.4102 16.7147L19.9043 8.22107" stroke="#BA3D3B" stroke-opacity="1.000000" stroke-width="1.000000"></path>
              </svg>
              по налогам
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 25 25"
                className="checkmark"
              >
              <circle id="Ellipse 148" cx="12.500000" cy="12.500000" r="12.000000" stroke="#BA3D3B" stroke-opacity="1.000000" stroke-width="1.000000"></circle>
                <path  d="M6.04199 12.0833L11.4102 16.7147L19.9043 8.22107" stroke="#BA3D3B" stroke-opacity="1.000000" stroke-width="1.000000"></path>
              </svg>
              по ЖКХ
            </li>
          </ul>
          <p className="hero-note">
          <span className="icon-container">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  
  <circle cx="30" cy="30" r="30" fill="#EECFCE"/>

 
  <g stroke="#BA3D3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
    
    <line x1="30" y1="15" x2="30" y2="32"/>

    <line x1="18" y1="20" x2="42" y2="20"/>

    
    <line x1="22" y1="20" x2="20" y2="28"/>
    <line x1="24" y1="20" x2="26" y2="28"/>
    <path d="M20 28 Q23 31 26 28" stroke="#BA3D3B" fill="none"/>

    <line x1="38" y1="20" x2="36" y2="28"/>
    <line x1="40" y1="20" x2="42" y2="28"/>
    <path d="M36 28 Q39 31 42 28" stroke="#BA3D3B" fill="none"/>

    <line x1="24" y1="34" x2="36" y2="34"/>
    <line x1="22" y1="37" x2="38" y2="37"/>
    <line x1="20" y1="40" x2="40" y2="40"/>
  </g>
</svg>

              </span>
          на основании Федерального закона от 26.10.2002 <br /> №127-ФЗ «О
            несостоятельности (банкротстве)» 
          </p>
          <div className="hero-stats">
            <div className="stat-item item1">
              <strong>45</strong>
              <span>дней на проведение банкротства</span>
            </div>
            <div className="stat-item item2">
              <strong>12</strong>
              <span>месяцев рассрочки, первый месяц 0 ₽</span>
            </div>
            <div className="stat-item item3">
              <strong>100%</strong>
              <span>возврат оплаты, если дело не будет решено</span>
            </div>
          </div>
          <button onClick={handleOpenPopup} className="hero-button">Получить консультацию</button>
          <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
        <div className="hero-image">
          <img src="images/heroimage.webp" alt="ФОТО" />
          <div className="hero-image-caption">
            <h2>Jusstrictum</h2>
            <p>Юридическая компания</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
