import React, { useState } from "react";
import "./Footer.css";
import Popup from "../components/Popup"; // путь подкорректируй под себя

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-phone">+7 (999) 999-99-99</div>
            <div className="footer-address">Москва, ул. Гагарина, д. 444</div>
            <div className="footer-hours">Ежедневно с 10 до 20</div>
            <div className="footer-socials">
              <a href="#">
                <svg width="80" height="80" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="15" r="15" fill="#83ADF3"></circle>
                  <path d="M21.0783 8.80372C20.4482 8.97893 13.3313 11.038 7.53638 12.7028C7.07511 12.8489 6.74187 13.2225 6.67648 13.6332C6.61108 14.044 6.88347 14.3964 7.25029 14.4996C7.56355 14.5954 10.7043 15.5019 10.7043 15.5019L10.7976 20.7617L14.0456 18.8483L11.4824 15.0848L17.8667 12.8029L12.4975 16.2746L14.0456 18.5874C14.1364 18.7049 16.0312 21.5903 16.1674 21.7665C16.3944 22.0603 16.7412 22.6329 16.9555 22.6625C17.3305 22.7144 17.7873 22.2529 18.0706 21.505C18.3457 20.8085 20.21 15.9768 22.6037 9.53933C22.8789 8.84281 22.2315 8.43848 21.0783 8.80372Z" fill="#fff"/>
                </svg>
              </a>
              <a href="#">
                <svg width="80" height="80" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="15" r="15" fill="#52B27C"></circle>
                  <path d="M15.3333 7.3335C11.28 7.3335 8 10.6117 8 14.6668C8 16.1961 8.46637 17.6107 9.29479 18.8262C9.32563 18.8719 9.34576 18.924 9.3537 18.9785C9.36163 19.0331 9.35716 19.0887 9.34063 19.1413L8.59583 21.6335L11.0365 20.7913C11.0886 20.7739 11.144 20.7685 11.1986 20.7755C11.2531 20.7824 11.3054 20.8015 11.3516 20.8314C12.4947 21.5732 13.8633 22.0002 15.3333 22.0002C19.3886 22.0002 22.6667 18.7221 22.6667 14.6668C22.6667 10.6115 19.3886 7.3335 15.3333 7.3335ZM12.3312 10.5304L13.6661 12.7361L13.1104 13.2861C13.0538 13.3432 13.0176 13.4173 13.0072 13.497C12.9969 13.5767 13.013 13.6576 13.0531 13.7272C13.9012 15.1959 14.906 16.3384 16.313 16.9585C16.3804 16.9884 16.4553 16.9974 16.5279 16.9841C16.6005 16.9708 16.6674 16.9359 16.7198 16.884L17.3099 16.2939L19.4641 17.6403C19.2255 18.1771 18.9146 18.4967 18.5589 18.683C18.1468 18.8987 17.6436 18.9396 17.0693 18.8205C15.9207 18.5823 14.5332 17.6796 13.4026 16.5231C12.272 15.3666 11.397 13.9603 11.174 12.8163C11.0624 12.2443 11.1117 11.7517 11.3229 11.3611C11.5048 11.0248 11.8137 10.7369 12.3312 10.5304Z" fill="#fff"/>                </svg>
              </a>
            </div>
            <button className="footer-button" onClick={openPopup}>
              Заказать консультацию
            </button>
          </div>

          <div className="footer-right">
            <div><strong>ООО</strong> «Стргий закон»</div>
            <div><strong>ИНН</strong> 99999999999</div>
            <div><strong>КПП</strong> 88888888888</div>
            <div><strong>Юр. адрес</strong><br />г. Москва, ул. Гагарина, д. 444, стр. 1</div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2024. Все права защищены</div>
          <div><a href="#">Политика конфиденциальности</a></div>
          <div className="footer-madeby">
            <span>РАЗРАБОТКА САЙТА – 123</span>
          </div>
        </div>
      </footer>

      {/* Попап */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Footer;
