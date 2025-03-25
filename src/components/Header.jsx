import React, { useState } from "react";
import "./Header.css"; // Подключение стилей
import Popup from "./Popup"


const Header = () => {

   const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true); // Открыть попап
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Закрыть попап
  };

 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="main-block">
        <ul className="header-list">
         <li className="logo-section">
            <img
              src="/logo.png"
              alt="Логотип"
              className="logo"
            />
            <div className="header-title">
              <span>Jusstrictum</span>
              <p>Юридическая компания</p>
            </div>
          </li>
          <button  className="hamburger-menu" onClick={toggleMobileMenu}>
          <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
          ☰
        </button>
          
          <li className="info-section">
            <div className="check-icon">

              <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17.5" cy="17.5" r="17" stroke="#C35654"></circle>
                <path d="M8.45801 16.9165L15.974 23.4005L27.8651 11.5095" stroke="#BA3D3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="info-main">Банкротство физических лиц </p>
             <p className="info-main"> Работаем по всей РФ</p>
            </div>
          </li>
          <div className="fullcontactblock">
          <li className="contact-block">
            <div className="phone-container">
              <p className="phone-number">+7 999 999 99 99</p>
              <div className="messengers">
  <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="15" cy="15" r="15" fill="#83ADF3"></circle>
  <path d="M21.0783 8.80372C20.4482 8.97893 13.3313 11.038 7.53638 12.7028C7.07511 12.8489 6.74187 13.2225 6.67648 13.6332C6.61108 14.044 6.88347 14.3964 7.25029 14.4996C7.56355 14.5954 10.7043 15.5019 10.7043 15.5019L10.7976 20.7617L14.0456 18.8483L11.4824 15.0848L17.8667 12.8029L12.4975 16.2746L14.0456 18.5874C14.1364 18.7049 16.0312 21.5903 16.1674 21.7665C16.3944 22.0603 16.7412 22.6329 16.9555 22.6625C17.3305 22.7144 17.7873 22.2529 18.0706 21.505C18.3457 20.8085 20.21 15.9768 22.6037 9.53933C22.8789 8.84281 22.2315 8.43848 21.0783 8.80372Z" fill="#fff"/>
</svg>

  </a>
  <a href="https://wa.me/74958774517" target="_blank" rel="noopener noreferrer">
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="15" cy="15" r="15" fill="#52B27C"></circle>
  <path d="M15.3333 7.3335C11.28 7.3335 8 10.6117 8 14.6668C8 16.1961 8.46637 17.6107 9.29479 18.8262C9.32563 18.8719 9.34576 18.924 9.3537 18.9785C9.36163 19.0331 9.35716 19.0887 9.34063 19.1413L8.59583 21.6335L11.0365 20.7913C11.0886 20.7739 11.144 20.7685 11.1986 20.7755C11.2531 20.7824 11.3054 20.8015 11.3516 20.8314C12.4947 21.5732 13.8633 22.0002 15.3333 22.0002C19.3886 22.0002 22.6667 18.7221 22.6667 14.6668C22.6667 10.6115 19.3886 7.3335 15.3333 7.3335ZM12.3312 10.5304L13.6661 12.7361L13.1104 13.2861C13.0538 13.3432 13.0176 13.4173 13.0072 13.497C12.9969 13.5767 13.013 13.6576 13.0531 13.7272C13.9012 15.1959 14.906 16.3384 16.313 16.9585C16.3804 16.9884 16.4553 16.9974 16.5279 16.9841C16.6005 16.9708 16.6674 16.9359 16.7198 16.884L17.3099 16.2939L19.4641 17.6403C19.2255 18.1771 18.9146 18.4967 18.5589 18.683C18.1468 18.8987 17.6436 18.9396 17.0693 18.8205C15.9207 18.5823 14.5332 17.6796 13.4026 16.5231C12.272 15.3666 11.397 13.9603 11.174 12.8163C11.0624 12.2443 11.1117 11.7517 11.3229 11.3611C11.5048 11.0248 11.8137 10.7369 12.3312 10.5304Z" fill="#fff"/>
</svg>

  </a>
</div>

            </div>
          </li>

          <li className="consultation-button-wrapper">
            <button onClick={handleOpenPopup} className="consultation-button-header">Консультация</button>
            <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
          </li>
          </div>
        </ul>
      </div>

      <nav className="nav-menu">
        <ul className="nav-list">
          <li><a href="#arb-upravlenie"><span>01</span> Арб. управляющий</a></li>
          <li><a href="#cost"><span>02</span> Стоимость</a></li>
          <li><a href="#steps"><span>03</span> Этапы банкротства</a></li>
          <li><a href="#results"><span>04</span> Результаты</a></li>
          <li><a href="#faq"><span>05</span> Частые вопросы</a></li>
          <li><a href="#contacts"><span>06</span> Контакты</a></li>
        </ul>
      </nav>

 
      

         {/* Мобильное меню */}
      {isMobileMenuOpen && (
      <div className="mobile-menu">
      <div className="upper-info">
      <div className="check-icon mobile">

              <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17.5" cy="17.5" r="17" stroke="#2E80E1"></circle>
                <path d="M8.45801 16.9165L15.974 23.4005L27.8651 11.5095" stroke="#007bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="info-main mobile">Банкротство физических лиц </p>
             <p className="info-main mobile"> Работаем по всей РФ</p>
            </div>
          <button className="mobile-menu-close" onClick={toggleMobileMenu}>
            ×
          </button>
            </div>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-list">
              <li><a href="#arb-upravlenie"><span> 01 </span>Арб. управляющий</a></li>
              <li><a href="#cost"><span> 02 </span> Стоимость</a></li>
              <li><a href="#steps"><span> 03 </span> Этапы банкротства</a></li>
              <li><a href="#results"><span> 04 </span> Результаты</a></li>
              <li><a href="#faq"><span> 05 </span>Частые вопросы</a></li>
              <li><a href="#contacts"><span> 06 </span> Контакты</a></li>
            </ul>
            <div className="mobile-contact">
              <p>+7 495 877 45 17</p>
              <div className="mobile-messengers">
                <a href="https://t.me/yourtelegram"><svg width="55" height="55" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="15" cy="15" r="15" fill="#83ADF3"></circle>
  <path d="M21.0783 8.80372C20.4482 8.97893 13.3313 11.038 7.53638 12.7028C7.07511 12.8489 6.74187 13.2225 6.67648 13.6332C6.61108 14.044 6.88347 14.3964 7.25029 14.4996C7.56355 14.5954 10.7043 15.5019 10.7043 15.5019L10.7976 20.7617L14.0456 18.8483L11.4824 15.0848L17.8667 12.8029L12.4975 16.2746L14.0456 18.5874C14.1364 18.7049 16.0312 21.5903 16.1674 21.7665C16.3944 22.0603 16.7412 22.6329 16.9555 22.6625C17.3305 22.7144 17.7873 22.2529 18.0706 21.505C18.3457 20.8085 20.21 15.9768 22.6037 9.53933C22.8789 8.84281 22.2315 8.43848 21.0783 8.80372Z" fill="#fff"/>
</svg>
</a>
                <a href="https://wa.me/74958774517"><svg width="55" height="55" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="15" cy="15" r="15" fill="#52B27C"></circle>
  <path d="M15.3333 7.3335C11.28 7.3335 8 10.6117 8 14.6668C8 16.1961 8.46637 17.6107 9.29479 18.8262C9.32563 18.8719 9.34576 18.924 9.3537 18.9785C9.36163 19.0331 9.35716 19.0887 9.34063 19.1413L8.59583 21.6335L11.0365 20.7913C11.0886 20.7739 11.144 20.7685 11.1986 20.7755C11.2531 20.7824 11.3054 20.8015 11.3516 20.8314C12.4947 21.5732 13.8633 22.0002 15.3333 22.0002C19.3886 22.0002 22.6667 18.7221 22.6667 14.6668C22.6667 10.6115 19.3886 7.3335 15.3333 7.3335ZM12.3312 10.5304L13.6661 12.7361L13.1104 13.2861C13.0538 13.3432 13.0176 13.4173 13.0072 13.497C12.9969 13.5767 13.013 13.6576 13.0531 13.7272C13.9012 15.1959 14.906 16.3384 16.313 16.9585C16.3804 16.9884 16.4553 16.9974 16.5279 16.9841C16.6005 16.9708 16.6674 16.9359 16.7198 16.884L17.3099 16.2939L19.4641 17.6403C19.2255 18.1771 18.9146 18.4967 18.5589 18.683C18.1468 18.8987 17.6436 18.9396 17.0693 18.8205C15.9207 18.5823 14.5332 17.6796 13.4026 16.5231C12.272 15.3666 11.397 13.9603 11.174 12.8163C11.0624 12.2443 11.1117 11.7517 11.3229 11.3611C11.5048 11.0248 11.8137 10.7369 12.3312 10.5304Z" fill="#fff"/>
</svg></a>
              </div>
              <button onClick={handleOpenPopup} className="mobile-consultation-button">
                Консультация
              </button>
              <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
            </div>
          </div>
        </div>
        )}
    </header>
  );
};

export default Header;
